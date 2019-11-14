module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        "transform-class-properties",
        "@babel/plugin-transform-classes",
        "@babel/plugin-syntax-class-properties",
        "@babel/plugin-proposal-class-properties"
    ]
}