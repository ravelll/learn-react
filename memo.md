# React Tutorial

* https://reactjs.org/tutorial/tutorial.html

# メモ

* create-react-app すると "Happy hacking!" て言ってくれてかわいい
* create-react-app のデフォルトのパッケージマネージャは yarn なのだな
* "React is a declarative, efficient, and flexible JavaScript library"
* コンポーネントに種類がある
* React は class 指向で書くものなのかな？
  * 後半に TS 化するからとか？

# React.Component

* React.Component を継承した React.Component クラス（React.Component 型とも）
* props は特に何を取るか宣言しなくても HTML 内で使えるっぽい
* render メソッドで HTML を返す
  * render() { return (<div><div/>) } みたいな感じ
* render() は表示したいものの*説明*を返す
* 親から貰った props を操作したり表示したりするだけな子コンポーネント => controlled component

# React.Element

* JSX で記述することが多い1つ1つの要素 = React.Element
  * React.createElement('div') は JSX の <div/> と等価
* React.createElement を使ったほうが良い場面はある？？
* React.Element はただの JS Object
* props は Vue だと :hoge="v" で渡すけど react だと hoge={v}
* props の参照は JSX の中でも this が必要っぽい

# state

* ローカルステートを保持するには state を使う
* state はコンストラクタ内で初期化する
  * コンストラクタは props を受け取り、最初に super(props) してあげる（サブクラスなので）
* state の変更は setState() で行う
* 子コンポーネントの状態を集約して親で使いたいときとか、子コンポーネント動詞が相互作用したいときは親コンポーネントに shared state を作り、子コンポーネントに props として渡す
* onClick などのイベントハンドラも props として子コンポーネントに渡す
  * Vue でいう $emit を props に関数を渡すことで実現している
  * ただ関数を渡しているだけなので、onClick という名前も慣習でしかない！
  * Vue よりもメタプロが少ないなと思った。素朴
