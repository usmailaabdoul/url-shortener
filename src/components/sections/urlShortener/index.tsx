import { useState, useEffect } from 'react'
import styled from 'styled-components'
import ShortenUrlCard from '../../card/shortenUrlCard';
import UrlCard from '../../card/urlCard';

const StyleContainer = styled.div`
  margin-top: -75px;
  margin-bottom: 100px;

  @media only screen and (max-width: ${({ theme }) => theme.layouts.mobile}) {
    margin-top: -80px;
  }
`;

export interface LinkProps {
  full_short_link: string;
  original_link: string;
}

const UrlShortener = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [links, setLinks] = useState<LinkProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        let _links = await localStorage.getItem('LINKS')
        let parsedLinks: LinkProps[] = JSON.parse(_links ?? '');
        setLinks(parsedLinks)
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  const shortenUrl = async (url: string) => {
    setLoading(true)
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then(response => response.json())
      .then(data => {
        console.log({data})
        if (data.ok) {
          let res = {
            full_short_link: data.result.full_short_link,
            original_link: data.result.original_link,
          }
          const newLinks = [res, ...links];
          setLinks(newLinks)
          localStorage.setItem('LINKS', JSON.stringify(newLinks))
          setLoading(false)
        } else if (!data.ok) {
          setError(data.error)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <StyleContainer>
      <ShortenUrlCard shortenURL={(value: string) => shortenUrl(value)} loading={loading} urlError={error} clearError={() => setError(null)}/>
      {links.map((link: LinkProps, index: number) => (
        <UrlCard key={index} link={link} />
      ))}
    </StyleContainer>
  )
}

export default UrlShortener;
