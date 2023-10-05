---
title: "Analysis-Suitable Parameterization for Isogeometric Analysis: Isotropic/Anisotropic Methods and Their Applications"
collection: talks
type: "Oral Presentation"
permalink: /talks/2023-ChinaGraphics
venue: "2023 年度中国图学学会 “奋发图强” 博士生 workshop"
date: 2023-05-20
location: "Online" 
---

[Slides](../files/pdf/slides/2023-ChinaGraphics/2023-ChinaGraphics.pdf),  
[Photo1](../images/talks/2023-05-20-chinaGraphics/china_graphics_1.jpg), 
[Photo2](../images/talks/2023-05-20-chinaGraphics/china_graphics_2.jpg), 
[Conference Link](http://www.cgn.net.cn/cms/news/100000/0000000022/2023/5/24/4d1ae93537704a09a3ab9b07c0b9d643.shtml)

In the design-analysis-optimization workflow based on Isogeometric Analysis (IGA), constructing high-quality, analysis-suitable computational domain parameterizations from the boundary representations of CAD models is a highly challenging task. In this talk, we will introduce two types of isotropic parameterization construction methods, namely optimization-based and PDE-based high-quality parameterization generation techniques. To address computational efficiency in PDE-based parameterization, we propose a preconditioned Anderson acceleration strategy. The parameterization methods we propose are applicable for handling multi-patch parameterizations of high-genus computational domains and are compatible with Truncated Hierarchical B-splines (THB-splines). Moreover, we apply our proposed methods to challenging engineering problems, specifically mesh generation for rotary twin-screw compressors. 

Due to the widespread presence of localized and anisotropic features in various physical phenomena, the aforementioned isotropic parameterization methods fall short in terms of computational efficiency. To remedy this, we introduce a curvature-driven, r-adaptive parameterization technique based on a dual-level strategy, aiming to achieve higher numerical accuracy while maintaining a constant number of degrees of freedom. 

