module.exports = {
    // 测试环境配置为jsdom，模拟浏览器环境
    testEnvironment: 'jsdom',

    // 测试文件匹配模式
    testMatch: ["**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",],

    // 模块文件后缀解析顺序
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

    // 转换TypeScript文件
    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json', // 指定 tsconfig 文件
                // 其他 ts-jest 配置...
                isolatedModules: true, // 示例配置：使用隔离模式编译每个文件
            },
        ],
    },

    // 配置模块解析，处理CSS、图片等资源
    moduleNameMapper: {
        '^.+\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/src/mocks/fileMock.ts',
    },

    // 测试覆盖率相关配置
    coverageDirectory: 'coverage',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/index.tsx',
        '!src/**/App.tsx',
        '!src/**/main.tsx',
        '!src/**/reportWebVitals.ts',
    ],

    // 其他配置
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.json',
        },
    },
};