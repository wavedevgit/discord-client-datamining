/** chunk id: 157207 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(399925),
    r = n(237607),
    o = n(985018),
    c = n(280508);

function d(e) {
    let {
        onOpenClips: t,
        lastClipsSession: n,
        closePopout: d
    } = e;
    return (l.useEffect(() => () => {
        (0, a.jA)()
    }, []), null == n) ? null : (0, i.jsxs)("div", {
        className: c.WG,
        children: [(0, i.jsx)("div", {
            className: c.Yt,
            children: (0, i.jsx)(r.A, {})
        }), (0, i.jsx)(s.Heading, {
            className: c.wx,
            color: "text-strong",
            variant: "heading-md/extrabold",
            children: o.intl.format(o.t["+qxkzC"], {
                count: n.newClipIds.length
            })
        }), (0, i.jsx)(s.Text, {
            color: "text-default",
            className: c.__invalid_content,
            variant: "text-sm/medium",
            children: o.intl.format(o.t["7XX0/X"], {
                applicationName: n.applicationName
            })
        }), (0, i.jsx)("div", {
            className: c.NC,
            children: (0, i.jsxs)(s.ButtonGroup, {
                children: [(0, i.jsx)(s.Button, {
                    variant: "secondary",
                    text: o.intl.string(o.t["7r5Z19"]),
                    onClick: function() {
                        (0, a.Mt)(!1), d()
                    }
                }), (0, i.jsx)(s.Button, {
                    variant: "primary",
                    text: o.intl.string(o.t.md4qKz),
                    onClick: t
                })]
            })
        })]
    })
}