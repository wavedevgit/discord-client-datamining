/** chunk id: 255481, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
});
var s = r(627968),
    i = r(64700),
    n = r(141931),
    l = r(397927),
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
            if (null == e) return;
            if (h(!0), e.id?.startsWith(n.fS.CAMERA)) {
                "url" in e && (r(e.url), h(!1));
                return
            }
            if ("url" in e && "" !== e.url) {
                r(e.url), h(!1);
                return
            }
            let t = "windowHandle" in e ? e.windowHandle : void 0;
            if (null != t) {
                try {
                    let e = a.Ay.getMediaEngine(),
                        s = await e.getSingleWindowPreview(t, 960, 540);
                    if (null != s) {
                        r(s.url), h(!1);
                        return
                    }
                } catch {}
                let {
                    windowSources: e
                } = await (0, c.d)({
                    width: 960,
                    height: 540,
                    types: [n.fS.WINDOW]
                }), s = e.find(e => (0, o.A)(e.id, t));
                null != s && (r(s.url), h(!1));
                return
            }
            let {
                screenSources: s,
                windowSources: i
            } = await (0, c.d)({
                width: 960,
                height: 540,
                types: [n.fS.SCREEN, n.fS.WINDOW]
            }), l = i.find(t => "windowHandle" in e ? (0, o.A)(t.id, e.windowHandle) : t.id === e.id) ?? s.find(t => e.id === t.id);
            null != l && (r(l.url), h(!1))
        }()
    }, [e]), (0, s.jsx)("div", {
        className: u.z,
        children: f ? (0, s.jsx)(l.y$y, {}) : null != t ? (0, s.jsx)("img", {
            src: t,
            alt: "",
            className: u.Q
        }) : null
    })
}