const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add GLB files as assets
config.resolver.assetExts.push('glb', 'gltf');

module.exports = config;
