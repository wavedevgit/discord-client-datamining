/** chunk id: 255481, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
}), r(896048);
var n = r(627968),
    i = r(64700),
    l = r(141931),
    s = r(397927),
    a = r(430452),
    o = r(830012),
    c = r(920281),
    d = r(688465),
    u = r(977529);

function f() {
    let [{
        selectedSource: e
    }] = (0, d.tS)(), [t, r] = i.useState(null), [f, h] = i.useState(!0);
    return i.useEffect(() => {
        !async function() {
            var t, n;
            if (null == e) return;
            if (h(!0), null == (n = e.id) ? void 0 : n.startsWith(l.fS.CAMERA)) {
                "url" in e && (r(e.url), h(!1));
                return
            }
            if ("url" in e && "" !== e.url) {
                r(e.url), h(!1);
                return
            }
            let i = "windowHandle" in e ? e.windowHandle : void 0;
            if (null != i) {
                try {
                    let e = a.A.getMediaEngine(),
                        t = await e.getSingleWindowPreview(i, 960, 540);
                    if (null != t) {
                        r(t.url), h(!1);
                        return
                    }
                } catch (e) {}
                let {
                    windowSources: e
                } = await (0, c.d)({
                    width: 960,
                    height: 540,
                    types: [l.fS.WINDOW]
                }), t = e.find(e => (0, o.A)(e.id, i));
                null != t && (r(t.url), h(!1));
                return
            }
            let {
                screenSources: s,
                windowSources: d
            } = await (0, c.d)({
                width: 960,
                height: 540,
                types: [l.fS.SCREEN, l.fS.WINDOW]
            }), u = null != (t = d.find(t => "windowHandle" in e ? (0, o.A)(t.id, e.windowHandle) : t.id === e.id)) ? t : s.find(t => e.id === t.id);
            null != u && (r(u.url), h(!1))
        }()
    }, [e]), (0, n.jsx)("div", {
        className: u.z,
        children: f ? (0, n.jsx)(s.y$y, {}) : null != t ? (0, n.jsx)("img", {
            src: t,
            alt: "",
            className: u.Q
        }) : null
    })
}