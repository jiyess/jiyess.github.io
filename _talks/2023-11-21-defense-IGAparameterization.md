---
title: "On domain parameterization for isogeometric analysis"
collection: talks
type: "Doctoral Dissertation Defence"
permalink: /talks/2023-11-21-defense-IGAparameterization
venue: "Ye Ji's doctoral dissertation defence"
date: 2023-11-10
location: "Dalian, China" 
---

[Doctoral Dissertation](../files/pdf/publications/thesis_compressed.pdf), 
[Slides](../files/pdf/slides/2023-11-21-defense-IGAparameterization/20231121-defense-IGAparameterization.pdf), 
[Photo1](../images/talks/2023-11-21-defense-IGAparameterization/defense_1.jpg), 
[Photo2](../images/talks/2023-11-21-defense-IGAparameterization/defense_2.jpg), 
[Photo3](../images/talks/2023-11-21-defense-IGAparameterization/defense_3.jpg)

In modern product design iterations, precise and rapid physical simulation analyses are imperative, emphasising the necessity for seamless integration between Computer-Aided Design (CAD) and Computer-Aided Engineering (CAE). Isogeometric Analysis (IGA) has been introduced as an innovative numerical technique to fulfil this demand. Central to IGA is the utilization of spline basis functions identical to those employed in CAD models for approximating physical fields. Within an IGA-based design-analysis-optimization integrated framework, a pivotal challenge lies in *constructing high-quality domain parameterizations suitable for simulation, originating from the boundary representations of CAD models*. The parameterization quality is directly consequential to the accuracy and computational efficiency of the downstream physical simulations. This dissertation concentrates on this significant issue, aspiring to present effective methodologies for generating high-quality parameterizations that are adaptable to complex physical domains.
    
This dissertation not only investigates isotropic methods that exhibit commendable orthogonality and uniformity but also explores $r$-adaptive techniques tailored for problems with localized features, namely, anisotropic parameterization methods. The core code is open-sourced and available in the Geometry + Simulation Modules (https://github.com/gismo/gismo/). Additional key contributions are as follows:

1. This dissertation introduces both sufficient conditions and necessary conditions for the bijectivity of general NURBS parameterizations. We propose an alternating optimization strategy that focuses on interior control points and weights to enhance parameterization quality. Additionally, we employ a barrier function-based unconstrained optimization technique, which simplifies the computational process by removing challenging and time-consuming constraints. This strategy effectively improves computing efficiency while also improving parameterization quality.
    
2. We suggest a penalty function-based approach to address the limitations associated with the aforementioned barrier function-based domain parameterization method. The volume of the computational domain is computed using the divergence theorem, and an objective functional term that describes volume distortion is defined. In addition, we present a penalty function created to effectively reduce computational errors. The Jacobian regularization technique and reduced numerical integration schemes are integrated, which significantly improves the robustness and computational effectiveness.
    
3. Traditional domain parameterization techniques frequently encounter numerical challenges and sluggish convergence for computational domains with extreme aspect ratios. We provide an improved domain parameterization method based on elliptic partial differential equations to address these issues. The use of a Jacobian scaling factor considerably enhances the quality of domain parameterization. We derive the related analytical Jacobian matrix to improve numerical stability and computational effectiveness. In order to effectively solve the underlying nonlinear equation systems, we also develop a preconditioned Anderson acceleration solver. Residual bound estimates and a thorough convergence analysis accompany the solver.
    
4. Our suggested domain parameterization techniques have been effectively used in real-world twin-screw compressor mesh-generating applications. We enable the seamless construction of grids that capture boundary-layer properties and align with flow fields using multiple mesh discretization algorithms. The grids produced by our approaches are suitable for sophisticated fluid dynamics simulations, according to validation tests carried out in the commercial software ANSYS CFX \texttrademark. 
    
5. For complex physical problems with localized features, we propose a curvature-based anisotropic domain parameterization technique for challenging physical issues with localized features. In this approach, IGA solutions are interpreted as parameter surfaces, and their absolute principal curvatures are used to describe variations of the IGA solutions. This creates a subtle connection between geometric elements and analytical results. We create both analytical sensitivity formulas and sensitivity propagation methods to improve the stability and effectiveness of gradient-based optimization algorithms. For the purpose of balancing computational precision and efficiency, a bi-level optimization technique is employed, which significantly lowers the amount of computing power involved in the domain parameterization procedure.
    
In conclusion, this dissertation offers a variety of advanced domain parameterization techniques specifically developed for isogeometric analysis. The methods introduced represent significant improvements in computational efficiency, numerical accuracy, and robustness. They provide significant technical assistance for the smooth integration of CAD/CAE based on isogeometric analysis since they offer both a theoretical foundation and quick solutions for handling physical issues in complicated geometric computational domains. Furthermore, these techniques give engineers and designers dependable and effective tools and approaches that may be used in real-world engineering applications.

Keywords: **Isogeometric analysis**, **Analysis-suitable parameterization**, **Isotropic / Anisotropic parameterization**, **Adaptivity**, **NURBS**