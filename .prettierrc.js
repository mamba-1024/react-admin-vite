module.exports = {
  "singleQuote": true, // 使用单引号代替双引号
  "editor.tabSize": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "useTabs": false,
  "semi": true, //  仅在可能导致 ASI 失败的行的开头添加分号
  "jsxSingleQuote": false, // 在 JSX 中使用单引号代替双引号
  "bracketSpacing": true, // 在对象文字中的括号之间打印空格。true 示例：{ foo: bar }
  "bracketSameLine": false, // 将 > 多行 HTML（HTML、JSX）元素的 放在最后一行的末尾
  "proseWrap": "never",
  "arrowParens": "avoid", // 尽可能省略括号。例子：x => x
  "overrides": [
    {
      "files": ".prettierrc", // 让 Prettier 格式化自己的.prettierrc文件
      "options": {
        "parser": "json"
      }
    }
  ]
}