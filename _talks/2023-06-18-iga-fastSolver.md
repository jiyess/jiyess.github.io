---
title: "Fast and Robust Solvers for Local/Global Domain Parameterizations within G+Smo"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/2023-iga-fastSolver
venue: "11th International Conference on IsoGeometric Analysis (IGA) 2023"
date: 2023-06-18
location: "Lyon, France" 
---

[Slides](../files/pdf/slides/2023-iga-fastSolver/2023-iga-fastSolver.pdf), 
[Abstract](../files/pdf/slides/2023-iga-fastSolver/2023-iga-abstract.pdf), 
[Photo1](../images/talks/2023-06-18-iga-fastSolver/IGA2023_1.jpg), 
[Photo2](../images/talks/2023-06-18-iga-fastSolver/IGA2023_2.jpg), 
[Conference Link](https://iga2023.sciencesconf.org)

The first step in the IsoGeometric Analysis (IGA) pipeline consists in constructing a high-quality, analysis-suitable domain parameterization from the boundary representation of a CAD model. This step is crucial in enhancing the efficiency and accuracy of all downstream tasks, e.g., analysis and optimization. While algebraic parametrization methods such as the discrete Coons method and the Spring patch method are simple and efficient, they often result in invalid parameterizations, particularly for complex geometries. To overcome this limitation, more robust and sophisticated approaches have been proposed, which require solving nonlinear systems or nonlinear optimizations. Thus, fast solvers for these problems play a crucial role in the robust and efficient construction of analysis-suitable domain parameterizations. The Geometry + Simulation Modules (G+Smo) library [1] is a specialized, open-source C++ library that provides mathematical tools and operations for both geometric design and isogeometric simulation. In this talk, we present some recently developed, fast, and robust solvers for domain parameterizations that have been integrated into the G+Smo library. 

In the first part of this talk, we present solvers for generating parameterizations based on the elliptic grid generation paradigm. The underlying nonlinear systems of equations are solved by a standard Newton method or by our recently developed preconditioned Anderson acceleration method with dynamic preconditioning strategies [2], which reduces the frequent and costly computation of full Jacobian updates. In the second part of the talk, we showcase two recently developed parameterization methods based on a nonlinear optimization problem. These methods are backed-up by fast and robust solvers such as LBFGS++, HLBFGS, and IPOPT. The optimization-based parameterization methods are also used to locally improve domain parameterizations produced by smoothing methods as the D-Patch or Almost-C1 methods. 

[1] Jüttler, B., Langer, U., Mantzaflaris, A., Moore, S. E., & Zulehner, W. (2014). Geometry+ simulation modules: Implementing isogeometric analysis. PAMM, 14(1), 961-962. 
[2]	Ji Y., Chen K., Möller M., & Vuik C. (2023). On an improved PDE-based elliptic parameterization method for isogeometric analysis using preconditioned Anderson acceleration. Under review. 

Based on joint work with [Hugo M. Verhelst](https://hverhelst.github.io/index.html), and [Matthias Möller](https://mmoelle1.gitlab.io/website/).