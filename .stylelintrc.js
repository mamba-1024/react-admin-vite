module.exports = {
  plugins: ['stylelint-scss'],
  extends: ['stylelint-config-standard'],
  rules: {
    // 使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进
    indentation: 2,
    // 选择器和 { 之间保留一个空格
    'block-opening-brace-space-before': 'always',
    // 属性名和 : 之前无空格，: 和属性值之间保留一个空格
    'declaration-colon-space-after': 'always',
    // >、+、~ 、|| 等组合器前后各保留一个空格
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    // 在使用 , 分隔的属性值中，, 之后保留一个空格
    'value-list-comma-space-after': 'always-single-line',
    // 注释内容和注释符之间留有一个空格
    'comment-whitespace-inside': 'always',
    'scss/double-slash-comment-whitespace-inside': 'always',
    // 属性声明应单独成行
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    // 使用多个选择器时，每个选择器应该单独成行
    'selector-list-comma-newline-after': 'always',
    // 使用尽可能短的十六进制值
    'color-hex-length': 'short',
    // 十六进制值统一使用小写字母
    'color-hex-case': 'lower',
    // 长度值为 0 时，省略掉长度单位
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
        true,
        {
            'ignoreAtRules': ['tailwind']
        }
    ],
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
    'property-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
  },
  ignoreFiles: ['node_modules/**', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx', 'src/tailwind.css'],
};
