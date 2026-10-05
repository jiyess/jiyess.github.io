---
title: "An isogeometric formulation of the lattice Boltzmann method on CAD-exact geometries"
collection: talks
type: "Conference talk"
permalink: /talks/2026-07-19-wccm-munich
redirect_from:
  - /talks/2026-07-19-WCCM/
venue: "17th World Congress on Computational Mechanics & 10th European Congress on Computational Methods in Applied Sciences and Engineering (WCCM-ECCOMAS 2026)"
date: 2026-07-19
location: "Munich, Germany"
---

[Slides](/files/pdf/slides/2026-07-19-WCCM/ECCOMAS2026-IGA-LBM-slides.pdf),
[Photo 1](/images/talks/2026-07-19-wccm-munich/photo-1.jpg),
[Photo 2](/images/talks/2026-07-19-wccm-munich/photo-2.jpg),
[Photo 3](/images/talks/2026-07-19-wccm-munich/photo-3.jpg),
[Photo 4](/images/talks/2026-07-19-wccm-munich/photo-4.jpg),
[Photo 5](/images/talks/2026-07-19-wccm-munich/photo-5.jpg)

The lattice Boltzmann method (LBM) has become a widely adopted approach in computational fluid dynamics, offering distinct advantages in mesoscopic kinetic modeling, intrinsic parallelism, and the simple treatment of boundary conditions. However, its conventional reliance on Cartesian grids fundamentally limits geometric fidelity in flows involving curved boundaries, introducing stair-step artifacts that propagate as spurious forces and boundary-layer inaccuracies.

To address these challenges, we propose the isogeometric lattice Boltzmann method (IGA-LBM), which integrates isogeometric analysis (IGA) with LBM, leveraging the geometric precision of non-uniform rational B-splines (NURBS) to construct body-fitted computational grids. Unlike conventional Cartesian-based LBM, the proposed approach eliminates stair-step boundary artifacts by providing sub-element geometric accuracy while maintaining the efficiency of LBM. Furthermore, the higher-order continuity of NURBS improves gradient resolution, reducing numerical diffusion in high-Reynolds-number flows. The parametric grid adaptation of IGA enables h-, p-, and k-refinement strategies, allowing for localized resolution enhancement in boundary layers and regions with high solution gradients. Additionally, the diffeomorphic mapping properties of IGA ensure intrinsic conservation, preserving advection invariants and suppressing numerical oscillations, leading to enhanced stability.

Benchmark simulations on flows with curved and complex geometries demonstrate that IGA-LBM delivers significantly more accurate boundary-layer predictions and pressure/force estimates than standard Cartesian LBM, while preserving its computational efficiency and scalability. By combining geometric exactness with the algorithmic simplicity of LBM, IGA-LBM offers a practical route to high-fidelity simulations in engineering and scientific applications.

Keywords: **Isogeometric Analysis**, **Lattice Boltzmann Method**, **NURBS**, **Body-Fitted Grids**, **Computational Fluid Dynamics**
