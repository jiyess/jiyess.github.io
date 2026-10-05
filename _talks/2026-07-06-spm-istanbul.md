---
title: "Extended r-adaptive isogeometric analysis for weak-discontinuous problems"
collection: talks
type: "Conference talk"
permalink: /talks/2026-07-06-spm-istanbul
redirect_from:
  - /talks/2026-07-06-SPM/
venue: "Symposium on Solid and Physical Modeling & Shape Modeling International (SPM/SMI 2026)"
date: 2026-07-06
location: "Istanbul, Türkiye"
---

[Slides](/files/pdf/slides/2026-07-06-SPM/SPM2026_r-adaptive-XIGA.pdf),
[Photo 1](/images/talks/2026-07-06-spm-istanbul/photo-1.jpg),
[Photo 2](/images/talks/2026-07-06-spm-istanbul/photo-2.jpg),
[Photo 3](/images/talks/2026-07-06-spm-istanbul/photo-3.jpg),
[Photo 4](/images/talks/2026-07-06-spm-istanbul/photo-4.jpg)

This paper proposes an extended r-adaptive isogeometric analysis framework for problems exhibiting weak discontinuities in solution derivatives, where discretization errors are often dominated by insufficient resolution of material interfaces. The method combines enrichment functions with a control-point relocation strategy guided by a Gaussian monitor constructed from an aggregated level-set representation of the interfaces. Rather than refining the mesh, resolution is redistributed according to interface geometry, enabling sharp representation of gradient jumps while preserving exact CAD geometry, spline topology, and a fixed number of degrees of freedom. Benchmark examples indicate up to 65.7% error reduction relative to enrichment-only formulations, and even larger improvements compared with standard IGA, while introducing less than 1% additional computational cost.

Keywords: **Isogeometric Analysis**, **r-Adaptivity**, **Weak Discontinuities**, **Enrichment**, **Material Interfaces**
