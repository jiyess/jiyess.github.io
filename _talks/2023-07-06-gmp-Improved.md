---
title: "On an improved PDE-based parameterization method for IsoGeometric Analysis (IGA) using preconditioned Anderson acceleration"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/2023-gmp-pdeAA
venue: "International Conference on Geometric Modeling and Processing (GMP) 2023"
date: 2023-07-06
location: "Genova, Italy" 
---

[Slides](../files/pdf/slides/2023-gmp-pdeAA/2023-gmp-pdeAA.pdf), 
[Poster](../files/pdf/slides/2023-gmp-pdeAA/2023-gmp-pdeAA.pdf)
[Photo1](../images/talks/2023-07-06-gmp-Improved/GMP2023_1.jpg), 
[Photo2](../images/talks/2023-07-06-gmp-Improved/GMP2023_2.jpg), 
[Photo3](../images/talks/2023-07-06-gmp-Improved/GMP2023_best_paper.jpg), 
[Conference Link](https://gmpconf.github.io/GMP2023/index.html)

Constructing an analysis-suitable parameterization for the computational domain from its boundary representation plays a crucial role in the isogeometric design-through-analysis pipeline. PDE-based elliptic grid generation is an effective method for generating high-quality parameterizations with rapid convergence properties for the planar case. However, it may generate non-uniform grid lines, especially near the concave/convex parts of the boundary. In the present work, we introduce a novel scaled discretization of harmonic mappings in the Sobolev space $H^1$ to remit it. Analytical Jacobian matrices for the involved nonlinear equations are derived to accelerate the computation. To enhance the numerical stability and the speed of convergence, we propose a simple and yet effective preconditioned Anderson acceleration framework instead of using computationally expensive Newton-type iteration. Three preconditioning strategies are suggested, namely diagonal Jacobian, block-diagonal Jacobian, and full Jacobian. Furthermore, we discuss a delayed update strategy of the preconditioner, i.e., the preconditioner is updated every few steps to reduce the computational cost per iteration. Numerical experiments demonstrate the effectiveness and efficiency of our improved parameterization approach and the computational efficiency of our preconditioned Anderson acceleration scheme. 

Based on joint work with [Ke-Wang Chen](https://faculty.nuist.edu.cn/chenkewang/zh_CN/index.htm), [Matthias Möller](https://mmoelle1.gitlab.io/website/) and [Cornelis Vuik](https://diamhomes.ewi.tudelft.nl/~kvuik/Welcome.html).

