/** Chunk was on web.js **/
/** chunk id: 413339, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    PX: () => v,
    S1: () => O,
    gB: () => b
}), n(927092), n(212978), n(597227), n(393431), n(752391), n(532706), n(42231), n(232424), n(757074), n(949626), n(767709), n(65162);
var r = n(284009),
    i = n.n(r),
    a = n(205693),
    o = n(287809),
    s = n(486020),
    l = n(329551),
    c = n(987384),
    u = n(912630),
    d = n(965162),
    f = n(957153),
    p = n(463951),
    _ = n(577718),
    h = n(652215);

function m(e) {
    return new Promise((t, n) => {
        let r = new Image;
        r.crossOrigin = "anonymous", r.onload = () => {
            let e = document.createElement("canvas");
            e.width = _.Im.width, e.height = _.Im.height;
            let n = e.getContext("2d");
            i()(null != n, "Canvas context is missing");
            let a = r.height / r.width,
                o = _.Im.height,
                s = _.Im.height / a,
                l = (e.width - s) / 2,
                c = (e.height - o) / 2;
            n.drawImage(r, l, c, s, o);
            let u = n.getImageData(0, 0, e.width, e.height);
            t({
                data: u.data,
                width: u.width,
                height: u.height,
                pixelFormat: "rgba"
            })
        }, r.onerror = e => n(e), r.src = e
    })
}
async function g(e) {
    let t = await fetch(e),
        n = await t.blob();
    return new Uint8ClampedArray(await n.arrayBuffer())
}

function E(e, t, n, r, i) {
    (0, c.wq)({
        [e]: {
            graph: n,
            target: t,
            image: r,
            blob: i
        }
    })
}
async function y(e, t, n) {
    let r, i = !1;
    if (null == n) return E(e, t, a.gO.NONE);
    if ("blur" === n) return E(e, t, a.gO.BACKGROUND_BLUR);
    if ("string" == typeof n || "number" == typeof n) {
        var o;
        let e = (0, f.A)()[n];
        i = null != (o = e.isVideo) && o, r = e.source
    } else {
        let e = n.asset;
        i = (0, s.VI)(e) || (0, s.q6)(e), r = (0, s.Bo)({
            userId: n.user_id,
            assetId: n.id,
            assetHash: e,
            size: _.Im.width
        })
    }
    if (null != r) try {
        let n = i ? void 0 : await m(r),
            o = i ? await g(r) : void 0;
        E(e, t, a.gO.BACKGROUND_REPLACEMENT, n, o)
    } catch (e) {
        (0, c.Mj)()
    }
}
async function b(e, t) {
    let {
        track: n = !0,
        location: r
    } = t;
    await y(a.Tr.CAMERA_BACKGROUND_LIVE, {
        type: a.Qo.INPUT_DEVICE
    }, e), n && (0, d.Uz)(e, r, "Enabled")
}
async function O(e, t, n) {
    let {
        track: r = !0,
        location: i
    } = n;
    (0, c.Oo)(), await y(a.Tr.CAMERA_BACKGROUND_PREVIEW, {
        type: a.Qo.STREAM,
        streamId: t
    }, e), r && (0, d.Uz)(e, i, "Preview")
}

function v() {
    let e = o.default.getCurrentUser();
    if (null == e) return;
    let t = (0, l.i)(e);
    (0, p.A)() && !u.A.hasBeenApplied && null != t && b(t, {
        track: !1
    }).catch(h.tEg)
}