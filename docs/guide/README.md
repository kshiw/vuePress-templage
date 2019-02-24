# vue 风格指南

在开发时，请遵守约定的单文件组件风格指南，指南内容节选自 [Vue 官方风格指南](https://cn.vuejs.org/v2/style-guide/)

## 1 单文件组件文件名称

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```vue
// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
```

## 2 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```vue
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```

## 3 自闭合组件

在单文件组件中没有内容的组件应该是自闭合的。

```vue
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```

## 4 Prop 名大小写

在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```vue
// bad
export default {
  props: {
    'greeting-text': String
  }
};

// good
export default {
  props: {
    greetingText: String
  }
}
```

```vue
<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```

## 5 Props 换行

多个 Props 的元素应该分多行撰写，每个 Props 一行，闭合标签单起一行。

```vue
<!-- bad -->
<my-component foo="a" bar="b" baz="c" />

<!-- good -->
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

## 6 Props 顺序

标签的 Props 应该有统一的顺序，依次为指令、属性和事件。

```vue
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```

## 7 组件选项的顺序

组件选项应该有统一的顺序。

``` vue
export default {
  name: '',

  mixins: [],

  components: {},

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {}
}
```

## 8 单文件组件顶级标签的顺序

单文件组件应该总是让顶级标签的顺序保持一致，且标签之间留有空行。

```vue
<template>
...
</template>

<script>
/* ... */
</script>

<style>
/* ... */
</style>
```