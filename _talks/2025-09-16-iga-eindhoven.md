---
title: "IGA-LBM: Isogeometric lattice Boltzmann method"
collection: talks
type: "Conference talk"
permalink: /talks/2025-09-16-iga-eindhoven
redirect_from:
  - /talks/2025-09-16-Eindhoven/
venue: "13th International Conference on Isogeometric Analysis (IGA 2025)"
date: 2025-09-16
location: "Eindhoven, Netherlands"
---

[Photo 1](/images/talks/2025-09-16-iga-eindhoven/talk.jpg),
[Photo 2](/images/talks/2025-09-16-iga-eindhoven/discussion.jpg),
[Photo 3](/images/talks/2025-09-16-iga-eindhoven/group-photo.jpg),
[Photo 4](/images/talks/2025-09-16-iga-eindhoven/with-falai-and-maodong.jpg)

The lattice Boltzmann method (LBM) has gained widespread adoption in computational fluid dynamics due to its mesoscopic kinetic modeling capabilities, intrinsic parallelism, and efficient handling of complex boundary conditions. However, its reliance on Cartesian grids fundamentally limits geometric fidelity in simulations involving curved boundaries, leading to stair-step artifacts that introduce spurious forces and boundary-layer inaccuracies. While techniques such as curvilinear coordinate transformations and immersed boundary methods mitigate these issues, they often compromise numerical stability, conservation properties, or computational scalability. To overcome these challenges, we propose the isogeometric lattice Boltzmann method (IGA-LBM), which integrates isogeometric analysis with LBM for the first time. By leveraging the geometric precision of non-uniform rational B-splines (NURBS), IGA-LBM constructs body-fitted computational grids, eliminating stair-step boundary artifacts while preserving the explicit time-stepping efficiency of LBM. The higher-order continuity of NURBS enhances gradient resolution, reducing numerical diffusion in high-Reynolds-number flows. Moreover, the geometry parameterization of IGA supports h-, p-, and k-refinement, allowing localized resolution enhancement in boundary layers and regions with steep solution gradients. The diffeomorphic mapping in IGA ensures intrinsic conservation, preserves advection invariants, and suppresses numerical oscillations, which together enhance numerical stability. To validate the proposed IGA-LBM framework, we conduct a series of benchmark simulations of flows involving curved and complex geometries. The results show that IGA-LBM significantly improves numerical accuracy compared with conventional LBM while maintaining computational efficiency and scalability. By providing an accurate and geometrically flexible alternative to traditional LBM, IGA-LBM is a promising approach for high-fidelity fluid dynamics simulations in engineering and scientific applications.

Keywords: **Lattice Boltzmann Method**, **Isogeometric Analysis**, **NURBS**, **Body-Fitted Grids**, **High-Order Accuracy**, **Computational Fluid Dynamics**
