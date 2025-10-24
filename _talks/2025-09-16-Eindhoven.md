---
title: "IGA-LBM: Isogeometric lattice Boltzmann method"
collection: talks
type: "conference"
permalink: /talks/2025-09-16-Eindhoven/
venue: "IGA 2025 CONGRESS, The Thirteenth International Conference on Isogeometric Analysis (IGA 2025)"
date: 2025-09-16
location: "Eindhoven, the Netherlands"
---

<!-- [Slides](../files/pdf/slides/2025-06-28-Leiden/workshop_generaticeAI_2025_Leiden.pdf), -->
[Photo1](../images/talks/2025-09-16-Eindhoven/talk.jpg), 
[Photo2](../images/talks/2025-09-16-Eindhoven/discussion.jpg), 
[Photo3](../images/talks/2025-09-16-Eindhoven/group_photo.jpg),
[Photo4](../images/talks/2025-09-16-Eindhoven/falai_maodong.jpg)

The Lattice Boltzmann Method (LBM) has gained widespread adoption in computational fluid dynamics due to its mesoscopic kinetic modeling capabilities, intrinsic parallelism, and efficient handling of complex boundary conditions \cite{Chen}. However, its reliance on Cartesian grids fundamentally limits geometric fidelity in simulations involving curved boundaries, leading to stair-step artifacts that introduce spurious forces and boundary-layer inaccuracies \cite{Bouzidi}. While techniques such as curvilinear coordinate transformations and immersed boundary methods mitigate these issues, they often compromise numerical stability, conservation properties, or computational scalability. To overcome these challenges, we propose the novel Isogeometric Lattice Boltzmann Method (IGA-LBM), which seamlessly integrates isogeometric analysis with LBM for the first time. By leveraging the geometric precision of Non-Uniform Rational B-Splines (NURBS), IGA-LBM constructs body-fitted computational grids, eliminating stair-step boundary artifacts while preserving the explicit time-stepping efficiency of LBM. The higher-order continuity of NURBS enhances gradient resolution, reducing numerical diffusion in high-Reynolds-number flows. Moreover, the geometry parameterization of IGA supports h-, p-, and k-refinement, allowing localized resolution enhancement in boundary layers and regions with steep solution gradients. The diffeomorphic mapping in IGA ensures intrinsic conservation, preserves advection invariants, and suppresses numerical oscillations, collectively enhancing numerical stability. To validate the proposed IGA-LBM framework, we conduct a series of benchmark simulations on flows involving curved and complex geometries. Results show that IGA-LBM significantly improves numerical accuracy compared to conventional LBM while maintaining computational efficiency and scalability. By providing an accurate and geometrically flexible alternative to traditional LBM, IGA-LBM presents a promising approach for high-fidelity fluid dynamics simulations in engineering and scientific applications.

Keywords: **Lattice Boltzmann method**, **Isogeometric analysis**, **NURBS**, **Body-fitted grids**; **High-order accuracy**; **Computational fluid dynamics**