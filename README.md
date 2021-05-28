# google-news-rss-to-js
An RSS scraper for Google News.

## Installation
```npm i google-news-rss-to-js --save```

## Usage
### Search 

```javascript
const googleNews = require('google-news-rss-to-js');

//  Get top stories from the Google News homepage
const topStories = await googleNews.search();

//  Get top stories by country & language
const topStoriesCN = await googleNews.search({ cc: 'CN', lc: 'zh' });
//  You can also search by country name and/or language
const topStoriesCA = await googleNews.search({ country: 'Canada' });

//  Search by keywords
const marthaStewartStories = await googleNews.search({ q: 'Martha Stewart' });
```
`topStories` Result:
```javascript
{
  guid: '52781621909809',
  title: 'Senate GOP blocks Jan. 6 commission, likely dooming independent investigation',
  source: { name: 'POLITICO', url: 'https://www.politico.com' },
  published: 'Fri, 28 May 2021 16:58:14 GMT',
  url: 'https://news.google.com/__i/rss/rd/articles/CBMihwFodHRwczovL3d3dy5wb2xpdGljby5jb20vbmV3cy8yMDIxLzA1LzI4L3NlbmF0ZS1yZXB1YmxpY2Fucy1maWxpYnVzdGVyLWphbi02LWNvbW1pc3Npb24tbGlrZWx5LWRvb21pbmctaW5kZXBlbmRlbnQtaW52ZXN0aWdhdGlvbi00OTEzMjPSAYsBaHR0cHM6Ly93d3cucG9saXRpY28uY29tL2FtcC9uZXdzLzIwMjEvMDUvMjgvc2VuYXRlLXJlcHVibGljYW5zLWZpbGlidXN0ZXItamFuLTYtY29tbWlzc2lvbi1saWtlbHktZG9vbWluZy1pbmRlcGVuZGVudC1pbnZlc3RpZ2F0aW9uLTQ5MTMyMw?oc=5',
  relatedStories: [
    {
      title: 'Senate GOP blocks Jan. 6 commission, likely dooming independent investigation',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMihwFodHRwczovL3d3dy5wb2xpdGljby5jb20vbmV3cy8yMDIxLzA1LzI4L3NlbmF0ZS1yZXB1YmxpY2Fucy1maWxpYnVzdGVyLWphbi02LWNvbW1pc3Npb24tbGlrZWx5LWRvb21pbmctaW5kZXBlbmRlbnQtaW52ZXN0aWdhdGlvbi00OTEzMjPSAYsBaHR0cHM6Ly93d3cucG9saXRpY28uY29tL2FtcC9uZXdzLzIwMjEvMDUvMjgvc2VuYXRlLXJlcHVibGljYW5zLWZpbGlidXN0ZXItamFuLTYtY29tbWlzc2lvbi1saWtlbHktZG9vbWluZy1pbmRlcGVuZGVudC1pbnZlc3RpZ2F0aW9uLTQ5MTMyMw?oc=5',
      source: 'POLITICO'
    },
    {
      title: 'Senate Republicans kill Jan. 6 commission on pro-Trump Capitol riot',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiaGh0dHBzOi8vbmV3cy55YWhvby5jb20vc2VuYXRlLXJlcHVibGljYW5zLWtpbGwtamFuLTYtY29tbWlzc2lvbi1vbi1wcm8tdHJ1bXAtY2FwaXRvbC1yaW90LTE2MjMzNDkyOS5odG1s0gFwaHR0cHM6Ly9uZXdzLnlhaG9vLmNvbS9hbXBodG1sL3NlbmF0ZS1yZXB1YmxpY2Fucy1raWxsLWphbi02LWNvbW1pc3Npb24tb24tcHJvLXRydW1wLWNhcGl0b2wtcmlvdC0xNjIzMzQ5MjkuaHRtbA?oc=5',
      source: 'Yahoo News'
    },
    {
      title: 'POLITICO Playbook: Overnight chaos on the Senate floor - POLITICO',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiY2h0dHBzOi8vd3d3LnBvbGl0aWNvLmNvbS9uZXdzbGV0dGVycy9wbGF5Ym9vay8yMDIxLzA1LzI4L292ZXJuaWdodC1jaGFvcy1vbi10aGUtc2VuYXRlLWZsb29yLTQ5MzA0MtIBAA?oc=5',
      source: 'Politico'
    },
    {
      title: 'Mitch McConnell hits a new low, again. Yet Joe Manchin remains unmoved.',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiYGh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9vcGluaW9ucy8yMDIxLzA1LzI4L21jY29ubmVsbC1oaXRzLW5ldy1sb3ctYWdhaW4tbWFuY2hpbi11bm1vdmVkL9IBb2h0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS9vcGluaW9ucy8yMDIxLzA1LzI4L21jY29ubmVsbC1oaXRzLW5ldy1sb3ctYWdhaW4tbWFuY2hpbi11bm1vdmVkLz9vdXRwdXRUeXBlPWFtcA?oc=5',
      source: 'The Washington Post'
    },
    {
      title: 'Now that GOP has killed 1/6 commission, Democrats must play hardball',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiZ2h0dHBzOi8vd3d3LmNubi5jb20vMjAyMS8wNS8yOC9vcGluaW9ucy9yZXB1YmxpY2FuLWphbi02LWNvbW1pc3Npb24tZGVtb2NyYXRzLWhhcmRiYWxsLWF2bG9uL2luZGV4Lmh0bWzSAWtodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDIxLzA1LzI4L29waW5pb25zL3JlcHVibGljYW4tamFuLTYtY29tbWlzc2lvbi1kZW1vY3JhdHMtaGFyZGJhbGwtYXZsb24vaW5kZXguaHRtbA?oc=5',
      source: 'CNN'
    }
  ]
}
```
### Search by Geo Location
```javascript
const googleNews = require('google-news-rss-to-js');
//  search within the US in English (default)
const searchResults = await googleNews.searchByGeoLocation({ location: 'DenverCo' });

//  As with regular search, you area also able to search by country and language
const japaneseSearchResults = await googleNews.searchByGeoLocation({ location: 'Japan', cc: 'JP', lc: 'ja' });
```

Results for `'Japan' in Japanese`:
```javascript
[{
  guid: '52783301947642',
  title: '９都道府県の緊急事態宣言を延長、政府決定…期限は６月２０日まで',
  source: { name: '読売新聞', url: 'https://www.yomiuri.co.jp' },
  published: 'Fri, 28 May 2021 10:09:00 GMT',
  url: 'https://news.google.com/__i/rss/rd/articles/CBMiN2h0dHBzOi8vd3d3LnlvbWl1cmkuY28uanAvcG9saXRpY3MvMjAyMTA1MjgtT1lUMVQ1MDI1NC_SATtodHRwczovL3d3dy55b21pdXJpLmNvLmpwL3BvbGl0aWNzLzIwMjEwNTI4LU9ZVDFUNTAyNTQvYW1wLw?oc=5',
  relatedStories: [
    {
      title: '９都道府県の緊急事態宣言を延長、政府決定…期限は６月２０日まで',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiN2h0dHBzOi8vd3d3LnlvbWl1cmkuY28uanAvcG9saXRpY3MvMjAyMTA1MjgtT1lUMVQ1MDI1NC_SATtodHRwczovL3d3dy55b21pdXJpLmNvLmpwL3BvbGl0aWNzLzIwMjEwNTI4LU9ZVDFUNTAyNTQvYW1wLw?oc=5',
      source: '読売新聞'
    },
    {
      title: '９都道府県への緊急事態宣言を延長方針 専門家が了承（TBS系（JNN）） - Yahoo!ニュース',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiSmh0dHBzOi8vbmV3cy55YWhvby5jby5qcC9hcnRpY2xlcy8zYTE4M2U5NmVjNDRjNDI3MTk5ZGU2YjEyZTU4M2I4M2FlM2ViMTYz0gEA?oc=5',
      source: 'Yahoo!ニュース'
    },
    {
      title: '緊急事態宣言 来月20日まで 大阪・ミナミの様子',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YXY3Q0NRdER3VEXSAQA?oc=5',
      source: 'SankeiNews'
    },
    {
      title: '菅首相会見「来月中には一般接種を開始」',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiPmh0dHBzOi8vd3d3My5uaGsub3IuanAvbmV3cy9odG1sLzIwMjEwNTI4L2sxMDAxMzA1NzEzMTAwMC5odG1s0gFCaHR0cHM6Ly93d3czLm5oay5vci5qcC9uZXdzL2h0bWwvMjAyMTA1MjgvYW1wL2sxMDAxMzA1NzEzMTAwMC5odG1s?oc=5',
      source: 'NHK NEWS WEB'
    },
    {
      title: 'なぜ緊急事態宣言「延長」２０日間？６月の解除に懐疑的な声も',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z0N5a2w0b3d1NFHSAQA?oc=5',
      source: 'TBS NEWS'
    }
  ]
}]
```

### Topics
```javascript
const googleNews = require('google-news-rss-to-js');

//  Get available topics
const topics = await googleNews.getTopics();

//  Get stories by topic
const entertainmentStories = await googleNews.searchByTopic({ topic: 'entertainment' });

//  If you happen to know the Google News topic Id, you can provide that
const businessStories = await googleNews.searchByTopic({
    topicId: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB',
});

//  As with regular search, you area also able to search by country and language
const businessCanada = await googleNews.search({
    topic: 'business',
    country: 'Canada',
    lc: 'en',
});
```
Result:
```javascript
[{
  guid: '52781627321607',
  title: 'Namibia Genocide: Germany Officially Recognizes Its Atrocities',
  source: { name: 'NPR', url: 'https://www.npr.org' },
  published: 'Fri, 28 May 2021 16:29:01 GMT',
  url: 'https://news.google.com/__i/rss/rd/articles/CBMidGh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyMS8wNS8yOC8xMDAxMjMzNzc2L2dlcm1hbnktb2ZmaWNpYWxseS1yZWNvZ25pemVzLWl0LWNvbW1pdHRlZC1nZW5vY2lkZS1pbi1wcmVzZW50LWRheS1uYW1pYmlh0gEA?oc=5',
  relatedStories: [
    {
      title: 'Namibia Genocide: Germany Officially Recognizes Its Atrocities',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMidGh0dHBzOi8vd3d3Lm5wci5vcmcvMjAyMS8wNS8yOC8xMDAxMjMzNzc2L2dlcm1hbnktb2ZmaWNpYWxseS1yZWNvZ25pemVzLWl0LWNvbW1pdHRlZC1nZW5vY2lkZS1pbi1wcmVzZW50LWRheS1uYW1pYmlh0gEA?oc=5',
      source: 'NPR'
    },
    {
      title: 'Germany will pay Namibia $1.3bn as it formally recognizes colonial-era genocide',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiYmh0dHBzOi8vd3d3LmNubi5jb20vMjAyMS8wNS8yOC9hZnJpY2EvZ2VybWFueS1yZWNvZ25pemVzLWNvbG9uaWFsLWdlbm9jaWRlLW5hbWliaWEtaW50bC9pbmRleC5odG1s0gFmaHR0cHM6Ly9hbXAuY25uLmNvbS9jbm4vMjAyMS8wNS8yOC9hZnJpY2EvZ2VybWFueS1yZWNvZ25pemVzLWNvbG9uaWFsLWdlbm9jaWRlLW5hbWliaWEtaW50bC9pbmRleC5odG1s?oc=5',
      source: 'CNN'
    },
    {
      title: 'Germany officially recognizes colonial-era Namibia genocide | DW News',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RHFqYWNDTmhnTzDSAQA?oc=5',
      source: 'DW News'
    },
    {
      title: 'Germany acknowledges colonial genocide in Namibia and promises development projects',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiSWh0dHBzOi8vd3d3Lndhc2hpbmd0b25wb3N0LmNvbS93b3JsZC8yMDIxLzA1LzI4L2dlcm1hbnktbmFtaWJpYS1nZW5vY2lkZS_SAVhodHRwczovL3d3dy53YXNoaW5ndG9ucG9zdC5jb20vd29ybGQvMjAyMS8wNS8yOC9nZXJtYW55LW5hbWliaWEtZ2Vub2NpZGUvP291dHB1dFR5cGU9YW1w?oc=5',
      source: 'The Washington Post'
    },
    {
      title: 'Germany admits to genocide in Namibia during colonial rule',
      url: 'https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9dnh6d3JQVmJKdm_SAQA?oc=5',
      source: 'The National'
    }
  ]
}]