---
layout: archive
title: "Software"
title_zh: "软件"
permalink: /software/
author_profile: true
---

<p class="research-intro">
  <span class="lang lang--en">A large part of my work ships as software — an open-source research library and industrial meshing tools that turn the methods behind my papers into something others can build on.</span>
  <span class="lang lang--zh">我的很大一部分工作以软件形式交付——一个开源研究库与若干工业网格工具，将论文背后的方法转化为他人可在其上继续构建的东西。</span>
</p>

<div class="sw-card">
  <span class="sw-role"><span class="lang lang--en">Core developer</span><span class="lang lang--zh">核心开发者</span></span>
  <h2>G+Smo <span style="font-weight:400; font-size:0.7em; color:#888;">(Geometry + Simulation Modules)</span></h2>
  <img src="/images/research/software-gismo.jpg" alt="Isogeometric volumetric parameterization results produced with G+Smo">
  <p class="lang lang--en">G+Smo is a prominent <strong>open-source C++ library for isogeometric analysis</strong>, unifying geometry (NURBS / B-splines), discretisation, and PDE simulation in one framework. As a member of the core development team, I contribute the geometry-processing and analysis-suitable parameterization functionality and help maintain the library.</p>
  <p class="lang lang--zh">G+Smo 是一个知名的<strong>等几何分析开源 C++ 库</strong>，在同一框架内统一了几何（NURBS / B 样条）、离散化与 PDE 仿真。作为核心开发团队成员，我贡献了几何处理与分析适用参数化相关功能，并参与库的维护。</p>
  <p class="sw-links">
    <a href="https://gismo.github.io/" target="_blank">gismo.github.io</a> ·
    <a href="https://github.com/gismo/gismo" target="_blank">GitHub</a> ·
    <a href="https://doi.org/10.5281/zenodo.15231873" target="_blank">Zenodo (DOI)</a>
  </p>
</div>

<div class="sw-card">
  <span class="sw-role"><span class="lang lang--en">Lead developer</span><span class="lang lang--zh">主开发者</span></span>
  <h2>SplineMesh / Scorg™</h2>
  <img src="/images/research/software-splinemesh.jpg" alt="Spline-based structured mesh for a twin-screw compressor used in CFD simulation">
  <p class="lang lang--en">SplineMesh is a set of <strong>spline-based structured mesh-generation modules for screw machines</strong> (twin-screw compressors and expanders), feeding the deforming-geometry CFD workflow used with the commercial <strong>SCORG™</strong> toolchain. I lead its development, focusing on robustness, mesh quality, and tight integration with the simulation pipeline. This work received the ICSM 2024 Best Paper Award.</p>
  <p class="lang lang--zh">SplineMesh 是一套<strong>面向螺杆机械（双螺杆压缩机/膨胀机）的基于样条的结构化网格生成模块</strong>，为商业 <strong>SCORG™</strong> 工具链中的变形几何 CFD 流程提供网格。我主导其开发，聚焦稳健性、网格质量及与仿真流程的紧密集成。该工作获 ICSM 2024 最佳论文奖。</p>
  <div class="sw-videos">
    <div class="sw-videos__col">
      <figure>
        <video controls preload="metadata" playsinline poster="/images/research/poster-splinemesh1.jpg">
          <source src="/videos/spline_mesh_1.mp4" type="video/mp4">
        </video>
        <figcaption><span class="lang lang--en">Structured spline mesh generation</span><span class="lang lang--zh">结构化样条网格生成</span></figcaption>
      </figure>
      <figure>
        <video controls preload="metadata" playsinline poster="/images/research/poster-screw.jpg">
          <source src="/videos/screw_simulation.mp4" type="video/mp4">
        </video>
        <figcaption><span class="lang lang--en">CFD simulation on the spline mesh</span><span class="lang lang--zh">基于样条网格的 CFD 仿真</span></figcaption>
      </figure>
    </div>
    <div class="sw-videos__col">
      <figure>
        <video controls preload="metadata" playsinline poster="/images/research/poster-splinemesh2.jpg">
          <source src="/videos/splinemesh_2.mp4" type="video/mp4">
        </video>
        <figcaption><span class="lang lang--en">Deforming mesh over a rotation cycle</span><span class="lang lang--zh">一个转动周期内的网格变形</span></figcaption>
      </figure>
    </div>
  </div>
  <p class="sw-links">
    <a href="https://iopscience.iop.org/article/10.1088/1757-899X/1322/1/012014" target="_blank">ICSM 2024</a> ·
    <a href="https://doi.org/10.1007/s00366-024-02020-z" target="_blank">Engineering with Computers 2024</a>
  </p>
</div>
