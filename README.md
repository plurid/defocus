<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/defocus/master/about/identity/defocus-logo.png" height="250px">
    <br />
    <a target="_blank" href="https://github.com/plurid/defocus/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: MIT">
    </a>
</p>



<h1 align="center">
    defocus
</h1>


User Content (De)Interface (Un)Description Language: say explicitly what you don't want to receive, what you want to defocus.

Simple examples:

- from `all` the posts in the database, defocus the ones containing `hate`

```
from all
    defocus hate
```

- from all the posts with `cats`, defocus the ones containing `white`

```
from cats
    defocus white
```

`from` and `defocus` are language keywords,

`all` and `cats` are deselectors,

`hate` and `white` are defocal entities.

Deselectors and Defocal Entities can be user- or system-defined.


### Contents

+ [Syntax](#syntax)
+ [Packages](#packages)



## Syntax


keywords

+ from
+ defocus
+ define
+ explain

In the example

```
from all
    defocus hate
```

`hate` is a defocal entity

A defocal entity can be user- or system-defined. The user can overwrite some/all system-defined defocal entities.

Consider this user definition

```
define hate
    high controversy
    low empathy
```

or

```
define hate
    700-x controversy
    0-153 empathy
```

`controversy` and `empathy` are system-defined defocal entities.

User can overwrite



System-defined defocals

+ old
+ new


Defocusers

+ high
+ low

A defocuser can be specified as an interval between 0 and 1000

+ 0-1000 - all
+ 700-1000 - high
+ around 500 - +- 100


Defocuser attributes


around


```
explain around
    top 50
    base 130
```

the around attribute will add 50 points to the top limit and reduce the base limit with 130



Extension of defocal entities

oldest
newest

```
given old make oldest
    time 3 years
```

```
given new
generate newest
    time 3 hours
```

given the already defined `old`/`new` defocal entities, generate new entities `oldest`/`newest`, containing data which appeared `3 years` ago or `3 hours` ago, respectively


```
given new, cats
generate newcats
    defocus humans
```

give the already defined `new` and `cats` defocal entities, generate a new entity `newcats` which defocuses `humans`

which can then be used as

```
from all
    defocus newcats
```




## Packages


<a target="_blank" href="https://www.npmjs.com/package/@plurid/defocus">
    <img src="https://img.shields.io/npm/v/@plurid/defocus.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/defocus][defocus] • the CLI application

[defocus]: https://github.com/plurid/defocus/tree/master/packages/defocus


<a target="_blank" href="https://www.npmjs.com/package/@plurid/defocus-compiler">
    <img src="https://img.shields.io/npm/v/@plurid/defocus-compiler.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
</a>

[@plurid/defocus-compiler][defocus-compiler] • the compiler used in the main `defocus` package

[defocus-compiler]: https://github.com/plurid/defocus/tree/master/packages/defocus-compiler
