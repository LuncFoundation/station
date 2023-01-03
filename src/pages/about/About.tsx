import { useTranslation } from "react-i18next"
import { Page } from "components/layout"
import AboutActions from "./AboutActions"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import s from "./About.module.scss"

const content = `
# Why?

The LUNC Foundation Station is an independent version of Terra Station. The main reason for this version is
to be able to develop and improve this application independent from TFL and hopefully serve the Luna Classic Comunity.

This Station is being maintained and further developed by: [Gevik](https://twitter.com/gevik)

Please follow our twitter account for any questions and updates at: [LuncFoundation](https://twitter.com/LuncFoundation)

# Disclaimer
THIS WEBSITE AND ITS CREATORS AND MAINTAINERS ARE NOT RESPONSIBLE, DIRECTLY OR INDIRECTLY, FOR ANY LOSS
OR DAMAGE THAT MAY BE CAUSED BY THE USE OF THIS WEBSITE. USE IT AT YOUR OWN RISK AND PLEASE DO YOUR OWN RESEARCH.

# Release Notes

## 3 January 2023
1. Fixed minor styling issues
2. Added 2x additional filters to Stake page to filter Delegated and Undelegated validators
3. Created this page

## 2 January 2023
1. Uploaded the initial version to http://station.lunc.foundation
2. Added a link to LUNC WIKI website

## 28 December 2022
1. Cloned Terra Station GIT repository
2. Prepared hosting infrastructure
3. Shamelessly changed the branding

`

const About = () => {
  const { t } = useTranslation()

  return (
    <Page title={t("About")} extra={<AboutActions />}>
      <div className={s.about}>
        <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
      </div>
    </Page>
  )
}

export default About
