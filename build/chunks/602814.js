/** chunk id: 602814, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(696986),
    s = n(397927),
    l = n(435582),
    c = n(283488),
    u = n(264322),
    d = n(429913),
    f = n(989837),
    p = n(500049),
    _ = n(735991),
    h = n(717048),
    m = n(129800),
    g = n(644681),
    E = n(723695),
    y = n(73510),
    b = n(985018),
    O = n(123564),
    v = n(291071);
let A = 2048,
    I = 84;

function S(e) {
    var t;
    let {
        context: n,
        application: l,
        sectionName: c
    } = e, A = "channel" === n.type ? n.channel : void 0, S = (0, a.bG)([f.A], () => f.A.entrypoint()), C = null != (t = (0, d.h)(l.id === y.Ik.BUILT_IN ? null : l.id)) ? t : l, N = (0, _.Ag)(C) ? T : E.A, w = i.useRef(null), [R, P] = i.useState(!1), {
        iconURL: D,
        name: L
    } = i.useMemo(() => (0, _.X2)(C, {
        fakeAppIconURL: v,
        size: I
    }), [C]), x = (0, u.A4)(!0, !0), M = (0, u.ON)(null == A ? void 0 : A.guild_id, !0), j = i.useMemo(() => (0, u.Sx)(n, C.id), [x, M, n, C.id]), k = !j.isGuildInstalled && !j.isUserInstalled;
    return i.useEffect(() => {
        k && u.Ay.queryInstallOnDemandApp(C.id, null == A ? void 0 : A.id)
    }, [C.id, null == A ? void 0 : A.id, k]), (0, r.jsxs)(s.d_W, {
        className: O.k,
        fade: !0,
        ref: w,
        role: "region",
        "aria-label": b.intl.formatToPlainString(b.t["4OP4Uk"], {
            applicationName: L
        }),
        children: [(0, r.jsx)(g.A, {
            application: C,
            context: n,
            name: L,
            iconURL: D,
            scrollerRef: w,
            sectionName: c
        }), null != D && (0, r.jsx)(h.A, {
            src: D,
            className: O.Z
        }), (0, r.jsx)(o.A, {
            size: 54
        }), (0, r.jsx)(N, {
            context: n,
            application: C,
            sectionName: c,
            hasCommands: R
        }), S === p.s4.TEXT ? (0, r.jsx)(m.A, {
            context: n,
            application: C,
            sectionName: c,
            installOnDemand: k,
            setHasCommands: P
        }) : null]
    })
}

function T(e) {
    let {
        context: t,
        application: n,
        sectionName: i,
        hasCommands: a
    } = e, o = (0, c.A)({
        applicationId: n.id,
        size: A,
        names: ["embedded_cover"],
        format: "webp"
    }), s = (0, _.Cx)(n), u = null != s && null != s.activity_preview_video_asset_id ? (0, l.A)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, r.jsx)(E.A, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: u,
        sectionName: i,
        hasCommands: a
    })
}