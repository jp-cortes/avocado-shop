module.exports = {

  rewrites: async function() {
        return [
            {
                source: '/avocado/:path*',
                destination: '/products/:path*',
            },
        ]
    }
}