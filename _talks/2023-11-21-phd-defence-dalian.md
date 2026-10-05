---
title: "On domain parameterization for isogeometric analysis"
collection: talks
type: "PhD defence"
permalink: /talks/2023-11-21-phd-defence-dalian
redirect_from:
  - /talks/2023-11-21-defense-IGAparameterization
venue: "School of Mathematical Sciences, Dalian University of Technology"
date: 2023-11-21
location: "Dalian, China"
---

[Doctoral Dissertation](/files/pdf/publications/thesis_compressed.pdf),
[Slides](/files/pdf/slides/2023-11-21-defense-IGAparameterization/20231121-defense-IGAparameterization.pdf),
[Photo 1](/images/talks/2023-11-21-phd-defence-dalian/photo-1.jpg),
[Photo 2](/images/talks/2023-11-21-phd-defence-dalian/photo-2.jpg),
[Photo 3](/images/talks/2023-11-21-phd-defence-dalian/photo-3.jpg)

In modern product design iterations, precise and rapid physical simulations are imperative, which calls for seamless integration between computer-aided design (CAD) and computer-aided engineering (CAE). Isogeometric analysis (IGA) has been introduced as an innovative numerical technique to meet this demand. Central to IGA is the use of the same spline basis functions as in CAD models to approximate physical fields. Within an IGA-based integrated design–analysis–optimization framework, a pivotal challenge lies in *constructing high-quality, simulation-suitable domain parameterizations from the boundary representations of CAD models*. The quality of the parameterization directly affects the accuracy and computational efficiency of the downstream physical simulations. This dissertation concentrates on this significant issue and aims to present effective methods for generating high-quality parameterizations that can handle complex physical domains.

This dissertation not only investigates isotropic methods that exhibit good orthogonality and uniformity but also explores $r$-adaptive techniques tailored to problems with localized features, namely anisotropic parameterization methods. The core code is open source and available in the Geometry + Simulation Modules (G+Smo) library (https://github.com/gismo/gismo/). The key contributions are as follows:

1. This dissertation introduces both sufficient and necessary conditions for the bijectivity of general NURBS parameterizations. We propose an alternating optimization strategy that updates the interior control points and weights to enhance parameterization quality. Additionally, we employ a barrier function-based unconstrained optimization technique, which simplifies the computational process by removing challenging and time-consuming constraints. This strategy improves both computational efficiency and parameterization quality.

2. We propose a penalty function-based approach to address the limitations of the aforementioned barrier function-based domain parameterization method. The volume of the computational domain is computed using the divergence theorem, and an objective function term describing volume distortion is defined. In addition, we present a penalty function designed to effectively reduce computational errors. Integrating the Jacobian regularization technique and reduced numerical integration schemes significantly improves robustness and computational efficiency.

3. Traditional domain parameterization techniques frequently suffer from numerical difficulties and slow convergence for computational domains with extreme aspect ratios. To address these issues, we provide an improved domain parameterization method based on elliptic partial differential equations. The use of a Jacobian scaling factor considerably enhances the quality of the domain parameterization. We derive the corresponding analytical Jacobian matrix to improve numerical stability and computational efficiency. To efficiently solve the underlying nonlinear systems of equations, we also develop a preconditioned Anderson acceleration solver, accompanied by residual bound estimates and a thorough convergence analysis.

4. Our domain parameterization techniques have been successfully applied to real-world mesh generation for twin-screw compressors. Using multiple mesh discretization algorithms, we enable the seamless construction of grids that capture boundary-layer properties and align with the flow field. Validation tests carried out in the commercial software ANSYS CFX™ show that the grids produced by our approaches are suitable for sophisticated fluid dynamics simulations.

5. For challenging physical problems with localized features, we propose a curvature-based anisotropic domain parameterization technique. In this approach, IGA solutions are interpreted as parametric surfaces, and their absolute principal curvatures are used to describe variations in the IGA solutions. This establishes a subtle connection between geometric quantities and analysis results. We derive analytical sensitivity formulas and sensitivity propagation methods to improve the stability and efficiency of gradient-based optimization algorithms. To balance computational accuracy and efficiency, a bi-level optimization technique is employed, which significantly reduces the computational cost of the domain parameterization procedure.

In conclusion, this dissertation offers a variety of advanced domain parameterization techniques specifically developed for isogeometric analysis. The proposed methods bring significant improvements in computational efficiency, numerical accuracy, and robustness. By offering both a theoretical foundation and fast solutions for physical problems on complex computational domains, they provide significant technical support for the seamless CAD/CAE integration enabled by isogeometric analysis. Furthermore, these techniques give engineers and designers reliable and effective tools that can be used in real-world engineering applications.

Keywords: **Isogeometric Analysis**, **Analysis-Suitable Parameterization**, **Isotropic/Anisotropic Parameterization**, **Adaptivity**, **NURBS**
