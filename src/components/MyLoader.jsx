import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={326}
        height={470}
        viewBox="0 0 326 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="159" cy="135" r="135" />
        <rect x="0" y="285" rx="5" ry="5" width="326" height="25" />
        <rect x="175" y="440" rx="5" ry="5" width="150" height="50" />
        <rect x="0" y="330" rx="5" ry="5" width="326" height="90" />
        <rect x="0" y="440" rx="0" ry="0" width="120" height="50" />
    </ContentLoader>
)

export default MyLoader
