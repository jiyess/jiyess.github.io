---
title: "Analysis-suitable parameterization techniques for isogeometric analysis"
collection: talks
type: "Invited talk"
permalink: /talks/2024-04-16-unifi-florence
redirect_from:
  - /talks/2024-04-16-Florence
venue: "University of Florence"
date: 2024-04-16
location: "Florence, Italy"
---

[Photo](/images/talks/2024-04-16-unifi-florence/talk.jpg)

Isogeometric analysis (IGA), introduced by Hughes et al., offers an integrated approach that seamlessly connects Computer-Aided Design (CAD) with Computer-Aided Engineering (CAE). It avoids converting spline-based CAD models into linear mesh models, thereby preserving geometric accuracy throughout the analysis. However, the prevalent use of boundary representations (B-Reps) in CAD systems poses challenges for IGA workflows, as it requires generating high-quality, analysis-suitable parameterizations from the input B-Reps.

The first part of this talk focuses on two advanced parameterization techniques: the barrier-type optimization-based method and the PDE-based elliptic grid generation method. Both have been successfully applied in practice, notably in structured mesh generation for twin-screw compressors. We have incorporated these methods into the Geometry + Simulation Modules (G+Smo) library, an open-source C++ toolkit for geometric design and isogeometric simulation.

In the second part of this talk, we introduce a bi-level, curvature-based $r$-adaptive parameterization approach designed to enhance numerical accuracy without increasing the number of degrees of freedom. Its principal feature is the use of the so-called absolute principal curvature of the IGA solution surface to characterize numerical errors. Numerical experiments demonstrate the effectiveness and efficiency of our method.

Keywords: **Isogeometric Analysis**, **Analysis-Suitable Parameterization**, **NURBS**, **r-Adaptivity**, **Twin-Screw Compressors**
