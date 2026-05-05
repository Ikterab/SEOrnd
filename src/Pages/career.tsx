import React from "react";
import { Helmet } from "react-helmet-async";
const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Build your SEO career</title>
                <meta name="description" content="Explore your career opportunities and join our team" />
                <meta property="og:title" content="Careers | SEO Learn" />
                <meta property="og:description" content="Join our team and grow your career." />
                <script>
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Careers",
                        "url": "http://localhost:5173/careers",
                        "description": "Career opportunities page"
                    })}
                </script>
            </Helmet>

            <div>
                This is a careers page
            </div>
        </>

    )
}
export default Careers