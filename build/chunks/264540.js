/** chunk id: 264540, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => T
}), r(321073), r(839272);
var s = r(627968),
    i = r(64700),
    n = r(503698),
    l = r.n(n),
    a = r(311907),
    o = r(342952),
    c = r(397927),
    d = r(629357),
    u = r(280157),
    f = r(174768),
    h = r(146793),
    x = r(95701),
    p = r(260509),
    m = r(734057),
    _ = r(205761),
    g = r(808728),
    j = r(71393),
    v = r(576705),
    A = r(967198),
    S = r(287809),
    y = r(607567),
    C = r(403362),
    b = r(279250),
    w = r(652215),
    I = r(191850),
    E = r(985018),
    N = r(374166);

function O(e) {
    let {
        result: t,
        onSelectChannel: r
    } = e, i = (0, a.bG)([j.A], () => j.A.getGuild(t.record.guild_id)), n = (0, a.yK)([y.Ay, S.default], () => y.Ay.getVoiceStatesForChannel(t.record).map(e => S.default.getUser(e.user.id)).filter(C.Vq));
    return (0, s.jsxs)(c.DUT, {
        className: N.p8,
        onClick: () => r(t.record.id),
        children: [(0, s.jsxs)("div", {
            className: N.nN,
            children: [(0, s.jsx)("img", {
                alt: "",
                src: null != i ? (0, p.Iv)(i, 32) : void 0,
                className: N.$f
            }), (0, s.jsxs)("div", {
                children: [(0, s.jsxs)(c.Text, {
                    className: N.HA,
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    children: [(0, s.jsx)(c.HKD, {
                        size: "xs",
                        color: "currentColor"
                    }), " ", t.record.name]
                }), (0, s.jsx)(c.Text, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    children: i?.name
                })]
            })]
        }), (0, s.jsx)(o.A, {
            users: n,
            maxUsers: 3,
            hideOverflowCount: !0
        })]
    })
}

function T(e) {
    let {
        onSelectChannel: t,
        className: r
    } = e, {
        search: n,
        query: o,
        results: p
    } = (0, h.A)({
        searchOptions: {
            frecencyBoosters: !0
        }
    }), S = (0, a.yK)([A.A, g.Ay, m.A, j.A, v.A], () => {
        let e = [],
            t = A.A.getGuildId();
        if (null == t) return e;
        for (let r of g.Ay.getVocalChannelIds(t)) {
            let t = m.A.getChannel(r);
            null != t && (0, b.vz)(t, j.A, v.A) && e.push(t)
        }
        return e
    }), y = (0, a.yK)([f.A, m.A, _.A, j.A, v.A], () => {
        let e = [],
            t = new Set;
        for (let r of f.A.getChannelHistory()) {
            let s = m.A.getChannel(r);
            s?.type === w.rbe.GUILD_VOICE && (0, b.vz)(s, j.A, v.A) && (t.add(s.id), e.push(s))
        }
        for (let r of _.A.getFrequentlyWithoutFetchingLatest()) r instanceof x.YB && r.type === w.rbe.GUILD_VOICE && !t.has(r.id) && (0, b.vz)(r, j.A, v.A) && (t.add(r.id), e.push(r));
        return e
    }), T = i.useMemo(() => {
        let e = new Set(y.map(e => e.id)),
            t = new Set(S.map(e => e.id));
        return [...S.toSorted((t, r) => e.has(t.id) && !e.has(r.id) ? -1 : e.has(r.id) && !e.has(t.id) ? 1 : 0).map(e => (0, u.A)(e.id)).filter(C.Vq), ...y.filter(e => !t.has(e.id)).map(e => (0, u.A)(e.id)).filter(C.Vq)]
    }, [y, S]), M = "" !== o ? p : T;
    return (0, s.jsxs)("div", {
        className: l()(N.zr, r),
        children: [(0, s.jsx)("div", {
            className: N.ON,
            children: (0, s.jsx)(c.IWV, {
                placeholder: E.intl.string(E.t["3jvv+6"]),
                query: o,
                onChange: e => n({
                    query: e,
                    resultTypes: [d.rD.VOICE_CHANNEL]
                }),
                onClear: () => n({
                    query: "",
                    resultTypes: [d.rD.VOICE_CHANNEL]
                }),
                autoFocus: !0
            })
        }), M.length > 0 ? (0, s.jsx)(c.B8B, {
            renderListHeader: function() {
                return (0, s.jsx)(c.Text, {
                    variant: "text-xs/semibold",
                    color: "text-muted",
                    children: E.intl.string(I.default.FZ9Fl7)
                })
            },
            sections: [M.length],
            sectionHeight: 0,
            rowHeight: 48,
            renderRow: function(e) {
                let {
                    rowIndex: r
                } = e, i = M[r];
                return (0, s.jsx)(O, {
                    result: i,
                    onSelectChannel: t
                }, i.record.id)
            }
        }) : (0, s.jsx)(R, {})]
    })
}

function R() {
    return (0, s.jsxs)("div", {
        className: N.p$,
        children: [(0, s.jsx)(c.$p$, {
            className: N.Dw,
            size: "md",
            color: c.LU0.colors.ICON_MUTED
        }), (0, s.jsx)(c.Text, {
            className: N.jU,
            variant: "text-lg/medium",
            color: "text-strong",
            children: E.intl.string(I.default.sWGfr9)
        }), (0, s.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            children: E.intl.string(I.default["nBRtt/"])
        })]
    })
}