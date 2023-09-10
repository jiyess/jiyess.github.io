---
title: "Curvature-based r-adaptive Planar NURBS Parameterization Method for Isogeometric Analysis Using Bi-level Approach"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/2022-spm-curvature
venue: "Symposium on Solid and Physical Modeling (SPM) 2022"
date: 2022-06-28
location: "Online" 
---

[Slides](../files/pdf/slides/2022-spm-curvature/2022-spm-curvature.pdf),
[Conference Link](https://spm2022.sciencesconf.org)

Localized and anisotropic features extensively exist in various physical phenomena. The present work focuses on the r-adaptive parameterization technique for isogeometric analysis (IGA), which aims to acquire higher numerical accuracy while keeping the degrees of freedom constant. The principal feature is utilizing the so-called absolute principal curvature of the IGA solution surfaces to characterize numerical errors instead of posteriori error estimations, which establishes the relation between analysis results and geometric quantity. The bijectivity is a fundamental requirement for analysis-suitable parameterization. With the cooperation of a minor regularization and common line search criteria, the proposed method guarantees the bijectivity of the resulting parameterizations. The bi-level approach with two refinement levels of the same geometry is employed: a coarse level (design model) to update the parameterization and a fine level (analysis model) to perform the isogeometric simulation. Moreover, we develop several detailed algorithms for explaining the sensitivity propagation from the design model to the analysis model and analytically computing the sensitivity, which allows accurate calculation of sensitivity and enhances the robustness during a gradient-based optimization. Several examples and comparisons are presented to demonstrate the effectiveness and efficiency of the proposed method. As an application, we apply the proposed method to a two-dimensional linear heat transfer problem with a moving Gaussian heat source, which is a simplified model for the additive manufacturing application. The proposed r-adaptive technique effectively captures the thermal history of the problem.

<!-- Joint work with  -->