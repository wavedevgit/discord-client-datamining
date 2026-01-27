/** Chunk was on 41727 **/
/** chunk id: 157207, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(110259),
    s = n(397927),
    a = n(139286),
    o = n(450510),
    c = n(399925),
    u = n(237607),
    d = n(985018),
    p = n(305711);

function h(e) {
    let {
        onOpenClips: t,
        lastClipsSession: n,
        closePopout: h
    } = e;
    return (l.useEffect(() => () => {
        (0, c.jA)()
    }, []), (0, a.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.HOTSPOT,
        properties: {
            hotspot_location: o._2.CLIPS_CHANNEL_ATTACH_REMINDER
        }
    }), null == n) ? null : (0, r.jsxs)("div", {
        className: p.WG,
        children: [(0, r.jsx)("div", {
            className: p.Yt,
            children: (0, r.jsx)(u.A, {})
        }), (0, r.jsx)(s.Heading, {
            className: p.wx,
            color: "text-strong",
            variant: "heading-md/extrabold",
            children: d.intl.format(d.t["+qxkzC"], {
                count: n.newClipIds.length
            })
        }), (0, r.jsx)(s.Text, {
            color: "text-default",
            className: p.__invalid_content,
            variant: "text-sm/medium",
            children: d.intl.format(d.t["7XX0/X"], {
                applicationName: n.applicationName
            })
        }), (0, r.jsx)("div", {
            className: p.NC,
            children: (0, r.jsxs)(s.ButtonGroup, {
                children: [(0, r.jsx)(s.Button, {
                    variant: "secondary",
                    text: d.intl.string(d.t["7r5Z19"]),
                    onClick: function() {
                        (0, o.sF)(o._2.CLIPS_CHANNEL_ATTACH_REMINDER), h()
                    }
                }), (0, r.jsx)(s.Button, {
                    variant: "primary",
                    text: d.intl.string(d.t.md4qKz),
                    onClick: t
                })]
            })
        })]
    })
}