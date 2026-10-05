---
title: "Analysis-suitable parameterization techniques for isogeometric analysis"
collection: talks
type: "Workshop talk"
permalink: /talks/2023-09-13-ricam-linz
redirect_from:
  - /talks/2023-09-13-RICAM-ASParam
venue: "RICAM Workshop on Topology Optimization and Isogeometric Analysis (2023)"
date: 2023-09-13
location: "Linz, Austria"
---

[Slides](/files/pdf/slides/2023-09-13-RICAM-ASParam/2023-09-13-RICAM-ASParam.pdf),
[Abstract](/files/pdf/slides/2023-09-13-RICAM-ASParam/2023-09-13-RICAM-ASParam-abstract.pdf),
[Photo](/images/talks/2023-09-13-ricam-linz/talk.jpg),
[Conference Link](https://www.oeaw.ac.at/ricam/news-events/workshops/topology-optimization-and-isogeometric-analysis)

In isogeometric analysis (IGA), the pivotal first step is to create a high-quality, analysis-suitable domain parameterization from the boundary representation of a CAD model. This foundational step has a substantial influence on downstream tasks, including, but not limited to, simulation and structural design optimization. Although algebraic methods such as the discrete Coons and spring patch techniques provide simple and efficient solutions, they often prove insufficient for complex geometries.

In the first part of our talk, we spotlight two types of robust and efficient parameterization methods: barrier-type optimization-based methods [ji2021constructing](https://www.sciencedirect.com/science/article/pii/S0377042721002375) & [ji2022penalty](https://www.sciencedirect.com/science/article/pii/S0167839622000176), and the PDE-based elliptic grid generation method [ji2023improved](https://www.sciencedirect.com/science/article/pii/S0167839623000237). Our parameterization techniques have been successfully applied to a real-world industrial application, namely the structured mesh generation of twin-screw compressors. All the methods discussed have been integrated into the Geometry + Simulation Modules (G+Smo) library, an open-source C++ toolkit dedicated to geometric design and isogeometric simulation.

In the second part of our talk, we introduce a bi-level, curvature-based $r$-adaptive parameterization method aimed at achieving higher numerical accuracy without increasing the number of degrees of freedom [ji2022curvature](https://www.sciencedirect.com/science/article/pii/S0010448522000756). The principal feature is the use of the so-called absolute principal curvature of the IGA solution surfaces to characterize numerical errors. Numerical experiments demonstrate the effectiveness and efficiency of our method.

- [**ji2023improved**] Ji, Ye, Ke-Wang Chen, Matthias Möller, and Cornelis Vuik. 2023. “On an improved PDE-based elliptic parameterization method for isogeometric analysis using preconditioned Anderson acceleration.” Computer Aided Geometric Design, 102191.
- [**ji2022penalty**] Ji, Ye, Meng-Yun Wang, Mao-Dong Pan, Yi Zhang, and Chun-Gang Zhu. 2022a. “Penalty function-based volumetric parameterization method for isogeometric analysis.” Computer Aided Geometric Design 94:102081.
- [**ji2022curvature**] Ji, Ye, Meng-Yun Wang, Yu Wang, and Chun-Gang Zhu. 2022b. “Curvature-based R-Adaptive Planar NURBS Parameterization Method for Isogeometric Analysis Using Bi-Level Approach.” Computer-Aided Design 150:103305.
- [**ji2021constructing**] Ji, Ye, Ying-Ying Yu, Meng-Yun Wang, and Chun-Gang Zhu. 2021. “Constructing high-quality planar NURBS parameterization for isogeometric analysis by adjustment control points and weights.” Journal of Computational and Applied Mathematics 396:113615.

Keywords: **Isogeometric Analysis**, **Analysis-Suitable Parameterization**, **Elliptic Grid Generation**, **r-Adaptivity**, **G+Smo**
