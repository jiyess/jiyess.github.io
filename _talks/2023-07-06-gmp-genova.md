---
title: "On an improved PDE-based parameterization method for isogeometric analysis (IGA) using preconditioned Anderson acceleration"
collection: talks
type: "Conference talk"
permalink: /talks/2023-07-06-gmp-genova
redirect_from:
  - /talks/2023-gmp-pdeAA
venue: "International Conference on Geometric Modeling and Processing (GMP 2023)"
date: 2023-07-06
location: "Genoa, Italy"
---

[Slides](/files/pdf/slides/2023-gmp-pdeAA/2023-gmp-pdeAA.pdf),
[Photo 1](/images/talks/2023-07-06-gmp-genova/photo-1.jpg),
[Photo 2](/images/talks/2023-07-06-gmp-genova/photo-2.jpg),
[Photo 3](/images/talks/2023-07-06-gmp-genova/best-paper-award.jpg),
[Conference Link](https://gmpconf.github.io/GMP2023/index.html)

Constructing an analysis-suitable parameterization of the computational domain from its boundary representation plays a crucial role in the isogeometric design-through-analysis pipeline. PDE-based elliptic grid generation is an effective method for generating high-quality parameterizations with rapid convergence properties in the planar case. However, it may generate non-uniform grid lines, especially near concave/convex parts of the boundary. In the present work, we introduce a novel scaled discretization of harmonic mappings in the Sobolev space $H^1$ to remedy this. Analytical Jacobian matrices of the involved nonlinear equations are derived to accelerate the computation. To enhance numerical stability and convergence speed, we propose a simple yet effective preconditioned Anderson acceleration framework instead of computationally expensive Newton-type iterations. Three preconditioning strategies are suggested, namely diagonal Jacobian, block-diagonal Jacobian, and full Jacobian. Furthermore, we discuss a delayed update strategy for the preconditioner, i.e., the preconditioner is updated only every few steps to reduce the computational cost per iteration. Numerical experiments demonstrate the effectiveness and efficiency of our improved parameterization approach and the computational efficiency of our preconditioned Anderson acceleration scheme.

Based on joint work with [Ke-Wang Chen](https://faculty.nuist.edu.cn/chenkewang/zh_CN/index.htm), [Matthias Möller](https://mmoelle1.gitlab.io/website/), and [Cornelis Vuik](https://diamhomes.ewi.tudelft.nl/~kvuik/Welcome.html).

Keywords: **Isogeometric Analysis**, **Elliptic Grid Generation**, **Harmonic Mappings**, **Preconditioned Anderson Acceleration**
