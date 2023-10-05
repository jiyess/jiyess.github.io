---
title: "Analysis-suitable Parameterization Techniques for Isogeometric Analysis"
collection: talks
type: "Workshop & Oral Presentation"
permalink: /talks/2023-09-13-RICAM-ASParam
venue: "RICAM Workshop on Topology Optimization and Isogeometric Analysis"
date: 2023-09-13
location: "Linz, Austria" 
---

[Abstract](../files/pdf/slides/2023-09-13-RICAM-ASParam/2023-09-13-RICAM-ASParam-abstract.pdf), 
[Slides](../files/pdf/slides/2023-09-13-RICAM-ASParam/2023-09-13-RICAM-ASParam.pdf), 
[Photo](../images/talks/2023-09-13-RICAM-ASParam/2023-09-13-RICAM-ASParam.jpg), 
[Conference Link](https://www.oeaw.ac.at/ricam/news-events/workshops/topology-optimization-and-isogeometric-analysis)

In the field of IsoGeometric Analysis (IGA), the pivotal first step entails creating a high-quality, analysis-suitable domain parameterization derived from the boundary representation of a CAD model. This foundational procedure exerts a substantial influence on downstream operations, including, but not limited to, simulation and structural design optimization. Although algebraic methods like the discrete Coons and Spring patch techniques provide simple and efficient solutions, they often prove insufficient for complex geometric challenges. 

In the first part of our talk, we spotlight two types of robust and efficient parameterization methods: the Barrier-type Optimization-based Method, [ji2021constructing](https://www.sciencedirect.com/science/article/pii/S0377042721002375) & [ji2022penalty](https://www.sciencedirect.com/science/article/pii/S0167839622000176), and the PDE-based Elliptic Grid Generation Method [ji2023improved](https://www.sciencedirect.com/science/article/pii/S0167839623000237). Our parameterization technique has been successfully applied in real-world industrial application, exemplified by the structured mesh generation of twin-screw compressors. All the methods discussed have been integrated into the Geometry + Simulation Modules (G+Smo) library -- an open-source C++ toolkit dedicated to geometric design and isogeometric simulations. 

In the second part of our talk, we introduce a bi-level, curvature-based $r$-adaptive parameterization method aimed at achieving enhanced numerical accuracy without increasing the degrees of freedom [ji2022curvature](https://www.sciencedirect.com/science/article/pii/S0010448522000756). The principal feature is utilizing the so-called absolute principal curvature of the IGA solution surfaces to characterize numerical errors. Numerical  experiments demonstrate the effectiveness and efficiency of our method. 

- [**ji2023improved**] Ji, Ye, Ke-Wang Chen, Matthias Möller, and Cornelis Vuik. 2023. “On an improved PDE-based elliptic parameterization method for isogeometric analysis using preconditioned Anderson acceleration.” Computer Aided Geometric Design, 102191. 
- [**ji2022penalty**] Ji, Ye, Meng-Yun Wang, Mao-Dong Pan, Yi Zhang, and Chun-Gang Zhu. 2022a. “Penalty function-based volumetric parameterization method for isogeometric analysis.” Computer Aided Geometric Design 94:102081. 
- [**ji2022curvature**] Ji, Ye, Meng-Yun Wang, Yu Wang, and Chun-Gang Zhu. 2022b. “Curvature-based R-Adaptive Planar NURBS Parameterization Method for Isogeometric Analysis Using Bi-Level Approach.” Computer-Aided Design 150:103305. 
- [**ji2021constructing**] Ji, Ye, Ying-Ying Yu, Meng-Yun Wang, and Chun-Gang Zhu. 2021. “Constructing high-quality planar NURBS parameterization for isogeometric analysis by adjustment control points and weights.” Journal of Computational and Applied Mathematics 396:113615.
