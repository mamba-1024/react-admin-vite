module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    // 'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'react/function-component-definition': 0,
    'react/no-unstable-nested-components': 0,
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    // 使用 2 个空格缩进
    indent: ['error', 2],
    // 使用分号
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    // 逗号，不使用行首逗号
    'comma-style': ['error', 'last'],
    // 对于逗号分隔的多行结构，始终加上最后一个逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 始终使用大括号包裹代码块
    'brace-style': 'error',
    // 不要使用空代码块
    'no-empty': 'error',
    // 空格风格
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', { before: true }],
    'space-in-parens': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { beforeColon: false, mode: 'strict' }],
    'space-infix-ops': 'error',
    // 在文件末尾保留一行空行
    'eol-last': ['error', 'always'],
    // 块 的开始和结束不能是空行
    'padded-blocks': ['error', 'never'],
    // 单行最大字符数：100
    'max-len': [
      'error',
      {
        code: 100,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
      },
    ],
    // 函数最大行数，建议100，过长的函数不易阅读和维护，最好对其进行拆分
    // 'max-lines-per-function': ['warn', { max: 200, skipBlankLines: true, skipComments: true }],
    // 使用 const 或 let 声明变量
    'no-var': 'error',
    'no-undef': 'error',
    // 声明变量时，应优先使用 const，只有当变量会被重新赋值时才使用 let
    'prefer-const': 'error',
    // 一条声明语句声明一个变量
    'one-var': ['error', 'never'],
    // 声明的变量必须被使用
    'no-unused-vars': 'error',
    // 不要在声明前就使用变量
    'no-use-before-define': ['error', { 'functions': false }],
    // 变量不要与外层作用域已存在的变量同名
    'no-shadow': 'error',
    // 不要重复声明变量和函数
    'no-redeclare': 'error',
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 不要使用 new Number/String/Boolean
    'no-new-wrappers': 'error',
    // 避免不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 字符串优先使用单引号
    quotes: ['error', 'single'],
    // 禁止不必要的转义字符
    'no-useless-escape': 'error',
    // 箭头函数
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'no-nested-ternary': 0,
  },
};
