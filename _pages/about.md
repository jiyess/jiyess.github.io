---
layout: archive
permalink: /
title: "Welcome to Ye Ji’s website."
title_zh: "欢迎来到纪野的主页"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html

# profile: 
#   align: right
#   image: prof_pic.jpg
#   image_circular: false # crops the image to make it circular
#   address: >
#     <p>TU Delft</p>
#     <p>DIAM, Faculty of EEMCS</p>
#     <p>Numerical Analysis</p>
#     <p>Mekelweg 4, 2628 CD Delft</p>
#     <p>Room HB 03.140</p>
#     <p style="margin-top: 5px">Tel.: +31 (0)62 09 05177</p>

news: true  # includes a list of news items
recent_papers: true # includes a list of papers marked as "recent={true}"
email_before_news: false
social_before_news: true
# social_bottom: false  # includes social icons at the bottom of the page
latest_posts: false  # includes a list of the newest posts
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false  # includes social icons at the bottom of the page
disable_badges: true
---

<div class="lang lang--en" markdown="1">

Ye Ji is a Postdoctoral Researcher in the <a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics/numerical-analysis" target="_blank">Numerical Analysis group</a> of the <a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics" target="_blank">Delft Institute of Applied Mathematics (DIAM)</a>, <a href="https://www.tudelft.nl/en/eemcs" target="_blank">Faculty of Electrical Engineering, Mathematics & Computer Science (EEMCS)</a>, at the <a href="https://www.tudelft.nl/en/" target="_blank">Delft University of Technology (TU Delft)</a>. Working at the interface of **computer-aided design (CAD)** and **computer-aided engineering (CAE)**, he develops **isogeometric analysis (IGA)** methods that turn a CAD model into a discretization that is geometrically exact, mathematically well-posed, and fast to solve. The core of his research is **analysis-suitable spline parameterization and mesh generation** — optimization- and PDE-based constructions of injective, high-quality parameterizations and boundary parameter matching — together with fast and robust solvers based on **preconditioned Anderson acceleration**.

These methods have moved from theory into practice. Ye leads the development of **SplineMesh**, spline-based structured mesh generation for twin-screw machines that feeds the deforming-geometry CFD workflow of the commercial **SCORG™** toolchain. His recent work extends IGA to **semi-analytical thermal simulation of laser powder bed fusion (LPBF)**, an **isogeometric lattice Boltzmann method (IGA-LBM)** for flows on CAD-exact geometries, and a **parameterization-driven arbitrary Lagrangian–Eulerian (ALE)** method for large-deformation fluid–structure interaction. He is a co-developer of the open-source C++ library [Geometry + Simulation Modules (G+Smo)](https://gismo.github.io/) and a reviewer for *Mathematical Reviews*.

I am happy to discuss collaborations on spline parameterization, mesh generation, and isogeometric methods for engineering applications — feel free to reach out by [email](mailto:y.ji-1@tudelft.nl).

</div>

<div class="lang lang--zh" markdown="1">

纪野是<a href="https://www.tudelft.nl/en/" target="_blank">代尔夫特理工大学（TU Delft）</a><a href="https://www.tudelft.nl/en/eemcs" target="_blank">电气工程、数学与计算机科学学院（EEMCS）</a><a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics" target="_blank">应用数学研究所（DIAM）</a><a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics/numerical-analysis" target="_blank">数值分析组</a>的博士后研究员。他的研究位于**计算机辅助设计（CAD）**与**计算机辅助工程（CAE）**的交叉领域，致力于发展**等几何分析（IGA）**方法，将 CAD 模型转化为几何精确、数学适定且可快速求解的离散模型。研究核心是**分析适用的样条参数化与网格生成**——包括基于优化和基于 PDE 的单射、高质量参数化构造以及边界参数匹配——以及基于**预处理 Anderson 加速**的快速、稳健求解器。

这些方法已从理论走向工程实践。他主导开发了 **SplineMesh**——面向双螺杆机械的基于样条的结构化网格生成模块，为商业 **SCORG™** 工具链中的变形几何 CFD 流程提供网格。近期，他将 IGA 拓展至**激光粉末床熔融（LPBF）的半解析热仿真**、面向 CAD 精确几何流动模拟的**等几何格子 Boltzmann 方法（IGA-LBM）**，以及面向大变形流固耦合的**参数化驱动任意拉格朗日–欧拉（ALE）方法**。他是开源 C++ 库 [Geometry + Simulation Modules (G+Smo)](https://gismo.github.io/) 的联合开发者，并担任 *Mathematical Reviews* 评论员。

欢迎就样条参数化、网格生成及等几何方法的工程应用等方向开展合作交流，请通过[邮件](mailto:y.ji-1@tudelft.nl)与我联系。

</div>
<div class="lang lang--en" markdown="1">
## News
</div>
<div class="lang lang--zh" markdown="1">
## 最新动态
</div>

<div class="lang lang--en" markdown="1">

- **[10/2026]**: Our group presents four talks at **IGA 2026** (14th International Conference on Isogeometric Analysis), Waseda University, Tokyo, Japan, October 11–14, 2026. See you in Tokyo!
  - "[A fast semi-analytical isogeometric framework for thermal problems with moving heat sources](/talks/2026-10-12-iga-tokyo)" — presented by me (Mon, Oct 12, MS 04).
  - "Fast r-refinement in isogeometric analysis using low-rank approximations" — presented by Angelos Mantzaflaris (Mon, Oct 12, MS 04).
  - "Parameterization-driven isogeometric ALE for fluid–structure interaction under large deformations" — presented by Jingya Li (Tue, Oct 13, MS 03).
  - "A body-fitted isogeometric lattice Boltzmann method for complex geometries" — presented by Monica Lacatus (Tue, Oct 13, MS 03).

- **[09/2026]**: Our paper [**Parameterization-driven arbitrary Lagrangian–Eulerian method for large-deformation isogeometric fluid–structure interaction**](https://doi.org/10.1016/j.cma.2026.119358) has been published in *Computer Methods in Applied Mechanics and Engineering*; it recasts mesh motion as a sequence of domain parameterization problems, enabling long-running large-rotation simulations. Congratulations to Jingya, and many thanks to Hugo, Henk and Matthias!

- **[09/2026]**: I presented "[SplineMesh v3.0: Robust spline-based structured mesh generation for positive-displacement rotary machines with sharp features](/talks/2026-09-08-icsm-dortmund)" at **ICSM 2026** (International Conference on Screw Machines), Dortmund, Germany, September 8–10, 2026. The new version adds automatic fold detection and corner-preserving local untangling, enabling robust meshing of the full working cycle of twin-screw dry vacuum pumps. Many thanks to Matthias, Dr. Sham Rane and Prof. Ahmed Kovačević!

- **[07/2026]**: I gave an invited talk, "[CAD-CAE Integration: From Theory and Algorithms to Engineering Practice](/talks/2026-07-28-csiam-gdc-hohhot)", at **CSIAM GDC 2026** (18th CSIAM Conference on Geometric Design and Computing), Hohhot, China. Our paper on B-spline-based receding-horizon trajectory optimization for UAV obstacle avoidance received the **<font color=Red>Conference Best Paper Award</font>**, and our poster [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783) the **<font color=Red>Conference Best Poster Award</font>**.

- **[07/2026]**: I presented "[An isogeometric formulation of the lattice Boltzmann method on CAD-exact geometries](/talks/2026-07-19-wccm-munich)" at **WCCM-ECCOMAS 2026** (17th World Congress on Computational Mechanics & 10th ECCOMAS Congress), Munich, Germany. Many thanks to Monica and Matthias!

- **[07/2026]**: Jingyi presented our paper [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783) at **SPM/SMI 2026** (Symposium on Solid and Physical Modeling & Shape Modeling International), Istanbul, Türkiye. Many thanks to Jingyi, Chungang and Matthias! [→ Talk](/talks/2026-07-06-spm-istanbul)

- **[05/2026]**: Our paper [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783) has been published in *Computer-Aided Design*.

- **[05/2026]**: I presented the poster [**Efficient Thermal Simulation in Metal Additive Manufacturing via Semi-Analytical Isogeometric Analysis**](https://www.sciencedirect.com/science/article/pii/S0045782526002653) at [**HOFEIM 2026**](https://sites.google.com/unifi.it/hofeim2026/program), Siena, Italy: a semi-analytical IGA framework for LPBF thermal simulation with up to 258× speed-up over conventional FEM. [→ Talk](/talks/2026-05-25-hofeim-siena)

</div>
<div class="lang lang--zh" markdown="1">

- **[10/2026]**：我们课题组将在 2026 年 10 月 11-14 日于日本东京早稻田大学举行的 **IGA 2026**（第十四届国际等几何分析会议）上作四个报告，东京见！
  - “[A fast semi-analytical isogeometric framework for thermal problems with moving heat sources](/talks/2026-10-12-iga-tokyo)”——由我报告（10 月 12 日周一，MS 04）。
  - “Fast r-refinement in isogeometric analysis using low-rank approximations”——由 Angelos Mantzaflaris 报告（10 月 12 日周一，MS 04）。
  - “Parameterization-driven isogeometric ALE for fluid–structure interaction under large deformations”——由 Jingya Li 报告（10 月 13 日周二，MS 03）。
  - “A body-fitted isogeometric lattice Boltzmann method for complex geometries”——由 Monica Lacatus 报告（10 月 13 日周二，MS 03）。

- **[09/2026]**：我们的论文 [**Parameterization-driven arbitrary Lagrangian–Eulerian method for large-deformation isogeometric fluid–structure interaction**](https://doi.org/10.1016/j.cma.2026.119358) 已发表于 *Computer Methods in Applied Mechanics and Engineering*，将网格运动重新表述为一系列区域参数化问题，支持长时间、大转动模拟。祝贺 Jingya，并感谢 Hugo、Henk 和 Matthias！

- **[09/2026]**：我在 2026 年 9 月 8-10 日于德国多特蒙德举行的 **ICSM 2026**（国际螺杆机械会议）上报告了“[SplineMesh v3.0: Robust spline-based structured mesh generation for positive-displacement rotary machines with sharp features](/talks/2026-09-08-icsm-dortmund)”。新版本引入自动折叠检测与保持尖角特征的局部解缠算法，实现了双螺杆干式真空泵完整工作循环的稳健网格生成。感谢 Matthias、Sham Rane 博士和 Ahmed Kovačević 教授！

- **[07/2026]**：我在中国呼和浩特举行的 **CSIAM GDC 2026**（第十八届中国工业与应用数学学会几何设计与计算大会）上作了特邀报告“[CAD-CAE 一体化：从理论、算法到工程实践](/talks/2026-07-28-csiam-gdc-hohhot)”。我们关于基于 B 样条的滚动时域无人机避障轨迹优化的论文荣获 **<font color=Red>大会最佳论文奖</font>**，海报 [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783) 荣获 **<font color=Red>大会最佳海报奖</font>**。

- **[07/2026]**：我在德国慕尼黑举行的 **WCCM-ECCOMAS 2026**（第十七届世界计算力学大会暨第十届 ECCOMAS 大会）上报告了“[An isogeometric formulation of the lattice Boltzmann method on CAD-exact geometries](/talks/2026-07-19-wccm-munich)”。感谢 Monica 和 Matthias！

- **[07/2026]**：Jingyi 在土耳其伊斯坦布尔举行的 **SPM/SMI 2026**（实体与物理建模研讨会暨形状建模国际会议）上报告了我们的论文 [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783)。感谢 Jingyi、Chungang 和 Matthias！[→ 报告](/talks/2026-07-06-spm-istanbul)

- **[05/2026]**：我们的论文 [**Extended r-adaptive isogeometric analysis for weak-discontinuous problems**](https://www.sciencedirect.com/science/article/pii/S0010448526000783) 已发表于 *Computer-Aided Design*。

- **[05/2026]**：我在意大利锡耶纳举行的 [**HOFEIM 2026**](https://sites.google.com/unifi.it/hofeim2026/program) 上展示了海报 [**Efficient Thermal Simulation in Metal Additive Manufacturing via Semi-Analytical Isogeometric Analysis**](https://www.sciencedirect.com/science/article/pii/S0045782526002653)：面向 LPBF 热仿真的半解析 IGA 框架，较传统有限元最高提速 258 倍。[→ 报告](/talks/2026-05-25-hofeim-siena)

</div>

<details class="lang lang--en" markdown="1">
<summary><strong>Show earlier news (2023 – 2026)</strong></summary>

- **[04/2026]**: I visited the AROMATH team at the Inria Centre at Université Côte d'Azur to exchange ideas on adaptive isogeometric analysis, spline technologies, and numerical simulation. Many thanks to Dr. Angelos Mantzaflaris for the kind invitation! [→ Talk](/talks/2026-04-15-inria-sophia-antipolis)

- **[01/2026]**: I gave a talk titled "[Parametric curve and surface intersections](/talks/2026-01-13-gismo-pilsen)" at the [**G+Smo Developer Days 2026**](https://github.com/gismo/gismo/wiki/GiSmo-Developer-days-2026), University of West Bohemia, Pilsen, Czech Republic, January 12–15, 2026.

- **[10/2025]**: Invited talk "[Analysis-suitable parameterization for isogeometric analysis](/talks/2025-10-31-dlut-dalian)" at the Department of Mathematical Sciences, Dalian University of Technology.

- **[10/2025]**: I was honored to be invited by Prof. Stefanie Elgeti to visit her group, Team Lightweight Design, at the Institut für Leichtbau und Struktur-Biomechanik, TU Wien, Vienna, Austria. [→ Talk](/talks/2025-10-21-tuwien-vienna)

- **[10/2025]**: I gave an oral presentation at the [**Special Semester 2025 – Workshop 1 "Advances in Isogeometric Analysis"**](https://www.oeaw.ac.at/ricam/detail/event/special-semester-2025-workshop-1-advances-in-isogeometric-analysis), Linz, Austria. [→ Talk](/talks/2025-10-16-ricam-linz)

- **[09/2025]**: I gave an oral presentation at [**SMART2025 – 4th International Conference on Subdivision, Geometric and Algebraic Methods, Isogeometric Analysis and Refinability in Italy**](https://smart2025.unirc.it/), Reggio Calabria, Italy. [→ Talk](/talks/2025-09-30-smart-reggio-calabria)

- **[09/2025]**: I gave an oral presentation at the [**IGA 2025 Congress – The Thirteenth International Conference on Isogeometric Analysis (IGA 2025)**](https://iga2025.cimne.com/), Eindhoven, the Netherlands. [→ Talk](/talks/2025-09-16-iga-eindhoven)

- **[09/2025]**: I delivered a [short course](/talks/2025-09-06-short-course-london) and gave an [oral presentation](/talks/2025-09-08-compressors-london) at the [**14th International Conference on Compressors and their Systems**](https://citycompressorsconference.london/), London, UK, on structured mesh generation for twin-screw machines.

- **[08/2025]**: Our paper "The Regularity Determination of Spatial Coons Surface Patches and Its Applications" received the [**<font color=Red>Conference Best Paper Award</font>**](/images/talks/2025-08-22-csiam-gdc-yantai/best-paper-award.jpg) at **CSIAM GDC 2025**, Yantai, China. Many thanks to all the contributors! [Photo](/images/talks/2025-08-22-csiam-gdc-yantai/talk.jpg)

- **[06/2025]**: I gave an oral presentation at the workshop [**Generative AI in engineering design optimization**](https://www.lorentzcenter.nl/generative-ai-in-engineering-design-optimization.html), Leiden, the Netherlands. [→ Talk](/talks/2025-06-23-lorentz-leiden)

- **[06/2025]**: Our paper "The Regularity Determination of Spatial Coons Surface Patches and Its Applications" was accepted for presentation at **CSIAM GDC 2025**.

- **[05/2025]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0017931025004004) has been accepted by [**International Journal of Heat and Mass Transfer**](https://www.sciencedirect.com/journal/international-journal-of-heat-and-mass-transfer).

- **[04/2025]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0045782525002488) has been accepted by [**Computer Methods in Applied Mechanics and Engineering**](https://www.sciencedirect.com/journal/computer-methods-in-applied-mechanics-and-engineering).

- **[01/2025]**: I gave an oral presentation at [**GAMES Webinar 2024 – 357 (CAD-CAE integration and its applications)**](https://games-cn.org/games-webinar-20250116-357/), online, January 16, 2025. [→ Talk](/talks/2025-01-16-games-online)

- **[01/2025]**: I gave an oral presentation at the [**G+Smo Developer Days and COSMIC Meeting 2025**](https://github.com/gismo/gismo/wiki/GiSmo-Developer-days-and-COSMIC-meeting-2025), Florence, Italy, January 7–10, 2025. [→ Talk](/talks/2025-01-07-gismo-florence)

- **[09/2024]**: I am excited that [our paper](https://iopscience.iop.org/article/10.1088/1757-899X/1322/1/012014) won the **<font color=Red>Conference Best Paper Award</font>** at **ICSM 2024** (International Conference on Screw Machines 2024), Dortmund, Germany, September 3–5, 2024.

- **[09/2024]**: I gave an oral presentation at **ICSM 2024** (International Conference on Screw Machines 2024), Dortmund, Germany, September 3–5, 2024. [→ Talk](/talks/2024-09-04-icsm-dortmund)

- **[07/2024]**: [One paper](https://doi.org/10.1007/s00366-024-02020-z) has been accepted by [**Engineering with Computers**](https://link.springer.com/article/10.1007/s00366-024-02020-z).

- **[06/2024]**: I gave an oral presentation at the [**9th European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS Congress 2024)**](https://eccomas2024.org/), Lisboa, Portugal, June 3–7, 2024. [→ Talk](/talks/2024-06-05-eccomas-lisbon)

- **[03/2024]**: I gave an oral presentation at the [**G+Smo Developer Days 2024**](https://github.com/gismo/gismo/wiki/GiSmo-developer-days-2024), Thessaloniki, Greece, March 4–6, 2024. [→ Talk](/talks/2024-03-05-gismo-thessaloniki)

- **[03/2024]**: [One paper](https://doi.org/10.1016/j.camwa.2024.03.001) has been accepted by [**Computers & Mathematics with Applications**](https://www.sciencedirect.com/journal/computers-and-mathematics-with-applications).

- **[01/2024]**: I started as a Postdoctoral Research Fellow in the <a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics/numerical-analysis" target="_blank">Numerical Analysis group</a>, <a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics" target="_blank">DIAM</a>, <a href="https://www.tudelft.nl/en/eemcs" target="_blank">EEMCS</a>, <a href="https://www.tudelft.nl/en/" target="_blank">TU Delft</a>, on January 1, 2024.

- **[01/2024]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0010448523002051) has been accepted by [**Computer-Aided Design**](https://www.sciencedirect.com/journal/computer-aided-design).

- **[11/2023]**: I successfully defended my doctoral dissertation, "On domain parameterization for isogeometric analysis", in Dalian, China, on November 21, 2023. [→ Details](/talks/2023-11-21-phd-defence-dalian)

- **[11/2023]**: I gave a poster presentation at [**Dutch Computational Science Day**](https://ducomsday.nl/), Utrecht, the Netherlands, on November 10, 2023. [→ Talk](/talks/2023-11-10-ducoms-utrecht)

- **[09/2023]**: I gave an oral presentation at the [**RICAM Workshop on Topology Optimization and Isogeometric Analysis**](https://www.oeaw.ac.at/ricam/news-events/workshops/topology-optimization-and-isogeometric-analysis), Linz, Austria, September 11–13, 2023. [→ Talk](/talks/2023-09-13-ricam-linz)

- **[09/2023]**: I gave an oral presentation at the [**13th International Conference on Compressors and their Systems**](https://citycompressorsconference.london), London, UK, on September 11, 2023. [→ Talk](/talks/2023-09-11-compressors-london)

- **[07/2023]**: I am excited that [our paper](https://www.sciencedirect.com/science/article/abs/pii/S0167839623000237) won the **<font color=Red>Conference Best Paper Award</font>** at the **International Conference on Geometric Modeling and Processing (GMP 2023)**, Genova, Italy, July 5–7, 2023. [→ Talk](/talks/2023-07-06-gmp-genova)

- **[06/2023]**: I gave an oral presentation at the **11th International Conference on IsoGeometric Analysis (IGA 2023)**, Lyon, France, June 18–21, 2023. [→ Talk](/talks/2023-06-18-iga-lyon)

- **[05/2023]**: I gave an oral presentation at the **China Graphics Society "Striving for Excellence" 2023 (中国图学学会“奋发图强”) Ph.D. Workshop**, online. [→ Talk](/talks/2023-05-20-china-graphics-online)

- **[05/2023]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0377042723002479) has been accepted by [**Journal of Computational and Applied Mathematics**](https://www.sciencedirect.com/journal/journal-of-computational-and-applied-mathematics).

- **[03/2023]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0167839623000237) has been accepted by [**Computer Aided Geometric Design**](https://www.sciencedirect.com/journal/computer-aided-geometric-design).

- **[03/2023]**: [One paper](https://www.sciencedirect.com/science/article/pii/S0263823123001544) has been accepted by [**Thin-Walled Structures**](https://www.sciencedirect.com/journal/thin-walled-structures).

- **[02/2023]**: Our team was the Challenge Winner of the Amazon Web Services challenge at [**SIAM Hackathon 2023**](https://www.siam.org/conferences/cm/conference/cse23); each team member received a SIAM book voucher worth 250 euros. [Challenge Winner Certificate](/images/talks/2023-02-26-siam-hackathon-delft/certificate.pdf), [Photo 1](/images/talks/2023-02-26-siam-hackathon-delft/photo-1.jpg), [Photo 2](/images/talks/2023-02-26-siam-hackathon-delft/photo-2.jpg).

- **[01/2023]**: [One paper](https://doi.org/10.4208/jcm.2301-m2022-0116) has been accepted by [**Journal of Computational Mathematics**](https://www.global-sci.org/jcm/).

</details>
<details class="lang lang--zh" markdown="1">
<summary><strong>展开更早的动态（2023 – 2026）</strong></summary>

- **[04/2026]**：我访问了蔚蓝海岸大学 Inria 中心 AROMATH 团队，就自适应等几何分析、样条技术与数值仿真展开交流。衷心感谢 Angelos Mantzaflaris 博士的盛情邀请！[→ 报告](/talks/2026-04-15-inria-sophia-antipolis)

- **[01/2026]**：我在 2026 年 1 月 12-15 日于捷克皮尔森西波希米亚大学举行的 [**G+Smo Developer Days 2026**](https://github.com/gismo/gismo/wiki/GiSmo-Developer-days-2026) 上作了题为“[Parametric curve and surface intersections](/talks/2026-01-13-gismo-pilsen)”的报告。

- **[10/2025]**：受邀在大连理工大学数学科学学院作报告“[面向等几何分析的分析适用参数化](/talks/2025-10-31-dlut-dalian)”。

- **[10/2025]**：很荣幸受 Stefanie Elgeti 教授邀请，访问了她在奥地利维也纳工业大学（TU Wien）轻量化与结构生物力学研究所的 Team Lightweight Design 课题组。[→ 报告](/talks/2025-10-21-tuwien-vienna)

- **[10/2025]**：我在奥地利林茨举行的 [**Special Semester 2025 – Workshop 1 "Advances in Isogeometric Analysis"**](https://www.oeaw.ac.at/ricam/detail/event/special-semester-2025-workshop-1-advances-in-isogeometric-analysis) 上作了口头报告。[→ 报告](/talks/2025-10-16-ricam-linz)

- **[09/2025]**：我在意大利雷焦卡拉布里亚举行的 [**SMART2025 – 4th International Conference on Subdivision, Geometric and Algebraic Methods, Isogeometric Analysis and Refinability in Italy**](https://smart2025.unirc.it/) 上作了口头报告。[→ 报告](/talks/2025-09-30-smart-reggio-calabria)

- **[09/2025]**：我在荷兰埃因霍温举行的 [**IGA 2025 Congress – The Thirteenth International Conference on Isogeometric Analysis (IGA 2025)**](https://iga2025.cimne.com/) 上作了口头报告。[→ 报告](/talks/2025-09-16-iga-eindhoven)

- **[09/2025]**：我在英国伦敦举行的 [**14th International Conference on Compressors and their Systems**](https://citycompressorsconference.london/) 上讲授了一门[短课程](/talks/2025-09-06-short-course-london)并作了[口头报告](/talks/2025-09-08-compressors-london)，介绍双螺杆机械结构化网格生成的最新进展。

- **[08/2025]**：我们的论文《The Regularity Determination of Spatial Coons Surface Patches and Its Applications》荣获 **CSIAM GDC 2025** [**<font color=Red>会议最佳论文奖</font>**](/images/talks/2025-08-22-csiam-gdc-yantai/best-paper-award.jpg)（中国烟台）。感谢所有合作者！[照片](/images/talks/2025-08-22-csiam-gdc-yantai/talk.jpg)

- **[06/2025]**：我在荷兰莱顿举行的 [**Generative AI in engineering design optimization**](https://www.lorentzcenter.nl/generative-ai-in-engineering-design-optimization.html) 研讨会上作了口头报告。[→ 报告](/talks/2025-06-23-lorentz-leiden)

- **[06/2025]**：我们的论文《The Regularity Determination of Spatial Coons Surface Patches and Its Applications》被 **CSIAM GDC 2025** 接收报告。

- **[05/2025]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0017931025004004)被 [**International Journal of Heat and Mass Transfer**](https://www.sciencedirect.com/journal/international-journal-of-heat-and-mass-transfer) 接收。

- **[04/2025]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0045782525002488)被 [**Computer Methods in Applied Mechanics and Engineering**](https://www.sciencedirect.com/journal/computer-methods-in-applied-mechanics-and-engineering) 接收。

- **[01/2025]**：我于 2025 年 1 月 16 日在线上 [**GAMES Webinar 2024 – 357（CAD-CAE 集成及其应用）**](https://games-cn.org/games-webinar-20250116-357/) 作了口头报告。[→ 报告](/talks/2025-01-16-games-online)

- **[01/2025]**：我在 2025 年 1 月 7-10 日于意大利佛罗伦萨举行的 [**G+Smo Developer Days and COSMIC Meeting 2025**](https://github.com/gismo/gismo/wiki/GiSmo-Developer-days-and-COSMIC-meeting-2025) 上作了口头报告。[→ 报告](/talks/2025-01-07-gismo-florence)

- **[09/2024]**：非常高兴[我们的论文](https://iopscience.iop.org/article/10.1088/1757-899X/1322/1/012014)荣获 2024 年 9 月 3-5 日在德国多特蒙德举行的 **ICSM 2024**（国际螺杆机械会议）**<font color=Red>会议最佳论文奖</font>**。

- **[09/2024]**：我在 2024 年 9 月 3-5 日于德国多特蒙德举行的 **ICSM 2024**（国际螺杆机械会议）上作了口头报告。[→ 报告](/talks/2024-09-04-icsm-dortmund)

- **[07/2024]**：[一篇论文](https://doi.org/10.1007/s00366-024-02020-z)被 [**Engineering with Computers**](https://link.springer.com/article/10.1007/s00366-024-02020-z) 接收。

- **[06/2024]**：我在 2024 年 6 月 3-7 日于葡萄牙里斯本举行的 [**第九届欧洲计算方法应用科学与工程大会（ECCOMAS Congress 2024）**](https://eccomas2024.org/) 上作了口头报告。[→ 报告](/talks/2024-06-05-eccomas-lisbon)

- **[03/2024]**：我在 2024 年 3 月 4-6 日于希腊塞萨洛尼基举行的 [**G+Smo Developer Days 2024**](https://github.com/gismo/gismo/wiki/GiSmo-developer-days-2024) 上作了口头报告。[→ 报告](/talks/2024-03-05-gismo-thessaloniki)

- **[03/2024]**：[一篇论文](https://doi.org/10.1016/j.camwa.2024.03.001)被 [**Computers & Mathematics with Applications**](https://www.sciencedirect.com/journal/computers-and-mathematics-with-applications) 接收。

- **[01/2024]**：我于 2024 年 1 月 1 日加入<a href="https://www.tudelft.nl/en/" target="_blank">代尔夫特理工大学（TU Delft）</a><a href="https://www.tudelft.nl/en/eemcs" target="_blank">电气工程、数学与计算机科学学院（EEMCS）</a><a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics" target="_blank">应用数学研究所（DIAM）</a><a href="https://www.tudelft.nl/ewi/over-de-faculteit/afdelingen/applied-mathematics/numerical-analysis" target="_blank">数值分析组</a>，担任博士后研究员。

- **[01/2024]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0010448523002051)被 [**Computer-Aided Design**](https://www.sciencedirect.com/journal/computer-aided-design) 接收。

- **[11/2023]**：我于 2023 年 11 月 21 日在辽宁大连成功通过博士学位论文答辩，论文题为《On domain parameterization for isogeometric analysis》。[→ 详情](/talks/2023-11-21-phd-defence-dalian)

- **[11/2023]**：我在 2023 年 11 月 10 日于荷兰乌得勒支举行的 [**Dutch Computational Science Day**](https://ducomsday.nl/) 上作了海报展示。[→ 报告](/talks/2023-11-10-ducoms-utrecht)

- **[09/2023]**：我在 2023 年 9 月 11-13 日于奥地利林茨举行的 [**RICAM Workshop on Topology Optimization and Isogeometric Analysis**](https://www.oeaw.ac.at/ricam/news-events/workshops/topology-optimization-and-isogeometric-analysis) 上作了口头报告。[→ 报告](/talks/2023-09-13-ricam-linz)

- **[09/2023]**：我在 2023 年 9 月 11 日于英国伦敦举行的 [**13th International Conference on Compressors and their Systems**](https://citycompressorsconference.london) 上作了口头报告。[→ 报告](/talks/2023-09-11-compressors-london)

- **[07/2023]**：非常高兴[我们的论文](https://www.sciencedirect.com/science/article/abs/pii/S0167839623000237)荣获 2023 年 7 月 5-7 日在意大利热那亚举行的 **International Conference on Geometric Modeling and Processing (GMP 2023)** **<font color=Red>会议最佳论文奖</font>**。[→ 报告](/talks/2023-07-06-gmp-genova)

- **[06/2023]**：我在 2023 年 6 月 18-21 日于法国里昂举行的 **11th International Conference on IsoGeometric Analysis (IGA 2023)** 上作了口头报告。[→ 报告](/talks/2023-06-18-iga-lyon)

- **[05/2023]**：我在线上 **中国图学学会“奋发图强”2023 博士生论坛** 作了口头报告。[→ 报告](/talks/2023-05-20-china-graphics-online)

- **[05/2023]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0377042723002479)被 [**Journal of Computational and Applied Mathematics**](https://www.sciencedirect.com/journal/journal-of-computational-and-applied-mathematics) 接收。

- **[03/2023]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0167839623000237)被 [**Computer Aided Geometric Design**](https://www.sciencedirect.com/journal/computer-aided-geometric-design) 接收。

- **[03/2023]**：[一篇论文](https://www.sciencedirect.com/science/article/pii/S0263823123001544)被 [**Thin-Walled Structures**](https://www.sciencedirect.com/journal/thin-walled-structures) 接收。

- **[02/2023]**：我们团队在 [**SIAM Hackathon 2023**](https://www.siam.org/conferences/cm/conference/cse23) 中荣获亚马逊云科技（AWS）挑战赛冠军，每位队员获得价值 250 欧元的 SIAM 图书代金券。[获奖证书](/images/talks/2023-02-26-siam-hackathon-delft/certificate.pdf)、[照片 1](/images/talks/2023-02-26-siam-hackathon-delft/photo-1.jpg)、[照片 2](/images/talks/2023-02-26-siam-hackathon-delft/photo-2.jpg)。

- **[01/2023]**：[一篇论文](https://doi.org/10.4208/jcm.2301-m2022-0116)被 [**Journal of Computational Mathematics**](https://www.global-sci.org/jcm/) 接收。

</details>

<!-- <div style="text-align:center; margin:0; padding:0; width:256px;">
  <script type="text/javascript" src="//rf.revolvermaps.com/0/0/1.js?i=5nnta91lqjn&amp;s=240&amp;m=8&amp;v=true&amp;r=false&amp;b=000000&amp;n=true&amp;c=ff0000" async="async"></script>
</div> -->

<div id="footer" style="text-align: center;">
  <div id="footer-text"></div>

  <div id="clustrmaps-widget" style="display: inline-block; width: 10%;">
    <script type="text/javascript" id="clstr_globe"
            src="//clustrmaps.com/globe.js?d=JeMd2-_KfDorS9xXcG81U4Ym48CMW1ZS5ZdTAh9ISAA"></script>
  </div>

  <p style="margin-top: 1em;">
    &copy; Ye Ji | Last updated: {{ site.time | date: "%b. %Y" }}
  </p>
</div>