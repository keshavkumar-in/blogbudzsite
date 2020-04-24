import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Slider from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Slider />
    <div id="loop" class="section-loop wrap no-featured">
      <div class="items-wrap flex">
        <div class="item-wrap flex post tag-story tag-hash-orange tag-hash-post-orange tag-hash-cta-violet no-image">
          <article>
            <a
              href="/the-future-of-architecture-is-culture/"
              class="item-link-overlay"
              aria-label="The future of architecture is culture"
            ></a>
            <h2>
              <a href="/the-future-of-architecture-is-culture/" class="white">
                The future of architecture is culture
              </a>
            </h2>
            <div class="item-meta white is-primary-tag is-members-label">
              <span>by</span>
              <a class="author-name white" href="/author/patricia/">
                Patricia Jenkins
              </a>
              <time datetime="2018-05-17">2 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/story/">
              Story
            </a>
            <span class="members-label white">Paid-members </span>
          </article>
        </div>
        <div class="item-wrap flex post tag-lifestyle tag-hash-large featured is-image">
          <article>
            <a
              href="/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
              class="item-link-overlay"
              aria-label="I&#x27;m passionate about food, the tradition of it, cooking it, sharing it"
            ></a>
            <div
              class="item-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1524222717473-730000096953?ixlib&#x3D;rb-0.3.5&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ&amp;s&#x3D;8b1938d0d4ef26e336db84568708980a)",
              }}
            ></div>
            <h2>
              <a
                href="/im-passionate-about-food-the-tradition-of-it-cooking-it-sharing-it/"
                class="white"
              >
                I &#x27;m passionate about food, the tradition of it, cooking
                it, sharing it
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/sean/">
                Sean Hamilton
              </a>
              <span>and others</span>
              <time datetime="2018-02-15">2 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/lifestyle/">
              Lifestyle
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-people tag-journey no-image">
          <article>
            <a
              href="/architecture-belongs-to-culture-not-to-civilization/"
              class="item-link-overlay"
              aria-label="Architecture belongs to culture, not to civilization"
            ></a>
            <h2>
              <a
                href="/architecture-belongs-to-culture-not-to-civilization/"
                class="white"
              >
                Architecture belongs to culture, not to civilization
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/patricia/">
                Patricia Jenkins
              </a>
              <time datetime="2017-10-11">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/people/">
              People
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-people is-image">
          <article>
            <a
              href="/look-at-life-with-the-eyes-of-a-child/"
              class="item-link-overlay"
              aria-label="Look at life with the eyes of a child"
            ></a>
            <div
              class="item-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1524502974494-abe9b22351c5?ixlib&#x3D;rb-0.3.5&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ&amp;s&#x3D;99d928cca1254d88d37a9f2f1642c0d5)",
              }}
            ></div>
            <h2>
              <a href="/look-at-life-with-the-eyes-of-a-child/" class="white">
                Look at life with the eyes of a child
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/sean/">
                Sean Hamilton
              </a>
              <time datetime="2017-06-28">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/people/">
              People
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-design featured is-image">
          <article>
            <a
              href="/i-think-its-the-responsibility-of-a-designer-to-try-to-break-rules-and-barriers/"
              class="item-link-overlay"
              aria-label="I think it&#x27;s the responsibility of a designer to try to break rules and barriers"
            ></a>
            <div
              class="item-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1520032484190-e5ef81d87978?ixlib&#x3D;rb-1.2.1&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ)",
              }}
            ></div>
            <h2>
              <a
                href="/i-think-its-the-responsibility-of-a-designer-to-try-to-break-rules-and-barriers/"
                class="white"
              >
                I think it &#x27;s the responsibility of a designer to try to
                break rules and barriers
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/marcos/">
                Marcos Duran
              </a>
              <span>and others</span>
              <time datetime="2017-05-30">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/design/">
              Design
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-education is-image">
          <article>
            <a
              href="/every-day-in-every-city-and-town-across-the-country/"
              class="item-link-overlay"
              aria-label="Every day, in every city and town across the country"
            ></a>
            <div
              class="item-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1515106426117-7483c8b91e9b?ixlib&#x3D;rb-0.3.5&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ&amp;s&#x3D;e7f2a64b9c3918b1714161e88bb1d00c)",
              }}
            ></div>
            <h2>
              <a
                href="/every-day-in-every-city-and-town-across-the-country/"
                class="white"
              >
                Every day, in every city and town across the country
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/margaret/">
                Margaret Robertson
              </a>
              <time datetime="2017-05-16">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/education/">
              Education
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-education tag-hash-red no-image">
          <article>
            <a
              href="/education-is-the-transmission-of-civilization/"
              class="item-link-overlay"
              aria-label="Education is the transmission of civilization"
            ></a>
            <h2>
              <a
                href="/education-is-the-transmission-of-civilization/"
                class="white"
              >
                Education is the transmission of civilization
              </a>
            </h2>
            <div class="item-meta white is-primary-tag">
              <span>by</span>
              <a class="author-name white" href="/author/margaret/">
                Margaret Robertson
              </a>
              <time datetime="2017-01-23">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/education/">
              Education
            </a>
          </article>
        </div>
        <div class="item-wrap flex post tag-culture is-image">
          <article>
            <a
              href="/pop-culture-is-a-reflection/"
              class="item-link-overlay"
              aria-label="Pop culture is a reflection"
            ></a>
            <div
              class="item-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1518382473172-c5b406fe7efd?ixlib&#x3D;rb-0.3.5&amp;q&#x3D;80&amp;fm&#x3D;jpg&amp;crop&#x3D;entropy&amp;cs&#x3D;tinysrgb&amp;w&#x3D;1080&amp;fit&#x3D;max&amp;ixid&#x3D;eyJhcHBfaWQiOjExNzczfQ&amp;s&#x3D;598e5f569f9994edf8ccc9b9b4903e51)",
              }}
            ></div>
            <h2>
              <a href="/pop-culture-is-a-reflection/" class="white">
                Pop culture is a reflection
              </a>
            </h2>
            <div class="item-meta white is-primary-tag is-members-label">
              <span>by</span>
              <a class="author-name white" href="/author/marcos/">
                Marcos Duran
              </a>
              <time datetime="2017-01-14">3 years ago</time>
            </div>
            <a class="primary-tag global-tag white" href="/tag/culture/">
              Culture
            </a>
            <span class="members-label white">Paid-members </span>
          </article>
        </div>
      </div>
    </div>
    <div class="section-load-more">
      <div class="load-more">
        <span>Load more</span>
      </div>
    </div>
  </Layout>
)
export default IndexPage
