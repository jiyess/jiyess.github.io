---
title: "Curvature-based r-adaptive planar NURBS parameterization method for isogeometric analysis using bi-level approach"
collection: talks
type: "Conference talk"
permalink: /talks/2022-06-28-spm-online
redirect_from:
  - /talks/2022-spm-curvature
venue: "Symposium on Solid and Physical Modeling (SPM 2022)"
date: 2022-06-28
location: "Online"
---

[Slides](/files/pdf/slides/2022-spm-curvature/2022-spm-curvature.pdf),
[Conference Link](https://spm2022.sciencesconf.org)

Localized and anisotropic features are ubiquitous in physical phenomena. The present work focuses on an r-adaptive parameterization technique for isogeometric analysis (IGA), which aims to achieve higher numerical accuracy while keeping the number of degrees of freedom constant. The principal feature is the use of the so-called absolute principal curvature of the IGA solution surfaces to characterize numerical errors instead of a posteriori error estimates, which establishes a relation between the analysis results and a geometric quantity. Bijectivity is a fundamental requirement for analysis-suitable parameterizations. Combined with a minor regularization and common line search criteria, the proposed method guarantees the bijectivity of the resulting parameterizations. We employ a bi-level approach with two refinement levels of the same geometry: a coarse level (design model) to update the parameterization and a fine level (analysis model) to perform the isogeometric simulation. Moreover, we develop detailed algorithms for propagating the sensitivity from the design model to the analysis model and for computing the sensitivity analytically, which allows accurate sensitivity calculation and enhances the robustness of gradient-based optimization. Several examples and comparisons demonstrate the effectiveness and efficiency of the proposed method. As an application, we apply the proposed method to a two-dimensional linear heat transfer problem with a moving Gaussian heat source, a simplified model for additive manufacturing. The proposed r-adaptive technique effectively captures the thermal history of the problem.

Keywords: **Isogeometric Analysis**, **r-Adaptivity**, **Planar NURBS Parameterization**, **Absolute Principal Curvature**, **Bi-Level Optimization**
