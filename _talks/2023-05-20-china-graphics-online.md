---
title: "Analysis-suitable parameterization for isogeometric analysis: Isotropic/anisotropic methods and their applications"
collection: talks
type: "Workshop talk"
permalink: /talks/2023-05-20-china-graphics-online
redirect_from:
  - /talks/2023-ChinaGraphics
venue: "China Graphics Society 2023 “Fenfa Tuqiang” Doctoral Student Workshop (2023 年度中国图学学会“奋发图强”博士生 workshop)"
date: 2023-05-20
location: "Online"
---

[Slides](/files/pdf/slides/2023-ChinaGraphics/2023-ChinaGraphics.pdf),
[Photo 1](/images/talks/2023-05-20-china-graphics-online/photo-1.jpg),
[Photo 2](/images/talks/2023-05-20-china-graphics-online/photo-2.jpg),
[Conference Link](http://www.cgn.net.cn/cms/news/100000/0000000022/2023/5/24/4d1ae93537704a09a3ab9b07c0b9d643.shtml)

In the design–analysis–optimization workflow based on isogeometric analysis (IGA), constructing high-quality, analysis-suitable parameterizations of the computational domain from the boundary representation of a CAD model is a highly challenging task. In this talk, we introduce two types of isotropic parameterization methods, namely optimization-based and PDE-based techniques for generating high-quality parameterizations. To improve the computational efficiency of the PDE-based parameterization, we propose a preconditioned Anderson acceleration strategy. Our parameterization methods can handle multi-patch parameterizations of high-genus computational domains and are compatible with truncated hierarchical B-splines (THB-splines). Moreover, we apply them to a challenging engineering problem: mesh generation for rotary twin-screw compressors.

Because localized and anisotropic features are widespread in physical phenomena, the aforementioned isotropic parameterization methods fall short in terms of computational efficiency. To remedy this, we introduce a curvature-driven r-adaptive parameterization technique based on a bi-level strategy, which aims to achieve higher numerical accuracy while keeping the number of degrees of freedom constant.

Keywords: **Isogeometric Analysis**, **Analysis-Suitable Parameterization**, **Preconditioned Anderson Acceleration**, **r-Adaptivity**, **Twin-Screw Compressors**
