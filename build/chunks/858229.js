/** chunk id: 858229, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(391958),
    a = n(985018),
    o = n(816925);

function c(e) {
    let {
        onChange: t,
        initialValue: n,
        maxWordCount: c,
        collapsed: d = !1
    } = e, [u, g] = i.useState(!d);
    return (0, r.jsx)(l.Nt8, {
        isExpanded: u,
        collapsibleContent: (0, r.jsx)(s.A, {
            onChangeText: t,
            maxWordCount: c,
            className: o.ft,
            textAreaClassName: o.cC,
            subtitleText: a.intl.formatToMarkdownString(a.t.qm7UZ8, {}),
            initialValue: n
        }),
        className: o.uR,
        children: e => {
            let {
                onClick: t
            } = e;
            return (0, r.jsx)(l.DUT, {
                onClick: e => {
                    g(!u), t(e)
                },
                children: (0, r.jsxs)("div", {
                    className: o.wx,
                    children: [(0, r.jsx)(l.Heading, {
                        variant: "text-sm/medium",
                        children: a.intl.string(a.t.lbE2Nm)
                    }), u ? (0, r.jsx)(l.tN5, {
                        size: "md",
                        color: "currentColor",
                        className: o.UE
                    }) : (0, r.jsx)(l.abt, {
                        size: "md",
                        color: "currentColor",
                        className: o.UE
                    })]
                })
            })
        }
    })
}