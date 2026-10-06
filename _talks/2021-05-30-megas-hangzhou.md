---
title: "High-quality planar NURBS parameterization of computational domain in IGA via control points and weights optimization"
collection: talks
type: "Conference talk"
permalink: /talks/2021-05-30-megas-hangzhou
redirect_from:
  - /talks/2021-05-29-megas-hangzhou
  - /talks/2021-megas-barrier
venue: "Mesh Generation and Applications Symposium (MEGAS 2021)"
date: 2021-05-30
location: "Hangzhou, China"
---

[Slides](/files/pdf/slides/2021-megas-barrier/2021-megas-barrier.pdf),
[Photo 1](/images/talks/2021-05-30-megas-hangzhou/talk.jpg),
[Photo 2](/images/talks/2021-05-30-megas-hangzhou/group-photo.jpg),
[Conference Link](http://megas2021.cars.org.cn/meeting/portal?mid=4)

Constructing an analysis-suitable parameterization from a given boundary representation is a crucial step in isogeometric analysis (IGA). In this talk, I presented several sufficient conditions and a necessary condition for the injectivity of planar NURBS parameterizations, together with an injectivity-checking algorithm based on Bézier extraction. Building on these, I proposed a three-step unconstrained optimization approach: harmonic initialization, foldover elimination, and quality improvement that alternately optimizes the inner control points and weights with respect to a corrected Winslow functional plus a uniformity term. Comparisons with several state-of-the-art methods (nonlinear constrained optimization, variational harmonic, Teichmüller mapping and low-rank quasi-conformal methods) demonstrate the robustness and efficiency of the method, and tests with fixed weights show that optimizing the weights improves both the injectivity and quality of the parameterization.

Keywords: **Isogeometric Analysis**, **Planar NURBS Parameterization**, **Injectivity**, **Control Points and Weights Optimization**
