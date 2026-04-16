/** chunk id: 219480 params = (module,exports,require) **/
l.d(t, {
    A: () => C
}), l(321073);
var n = l(627968),
    a = l(64700),
    i = l(110259),
    s = l(311907),
    r = l(397927),
    d = l(139286),
    o = l(962125),
    c = l(661191),
    u = l(274372),
    m = l(399925),
    h = l(555957),
    p = l(714973),
    x = l(985018),
    f = l(352528);
let g = 16 / 9,
    v = [0, 16, 0, 16],
    j = v[1] + v[3];

function b(e, t) {
    return Math.ceil(t / e)
}

function C(e) {
    let {
        filteredClips: t,
        totalClipCount: l,
        onClipClick: C,
        onEdit: y
    } = e, [N, A] = a.useState(!0), [E, k] = a.useState({
        width: 0,
        height: 0
    }), I = (0, s.bG)([u.A], () => u.A.getSettings().storageLocation), S = (0, s.yK)([u.A], () => u.A.getNewClipIds()), w = (0, s.bG)([u.A], () => u.A.getExportingClipIds().length > 0);
    (0, d.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.CLIP_GALLERY_VIEWED,
        properties: {
            number_of_clips_loaded: t.length
        }
    }, {
        disableTrack: N
    }, [t.length, N]), a.useEffect(() => ((0, m.jA)(), () => {
        (0, m.jA)(), (0, m.Su)()
    }), []);
    let L = a.useMemo(() => {
            let e = [],
                l = new Map,
                n = [],
                a = new Date;
            a.setHours(0, 0, 0, 0);
            let i = a.getTime();
            if (t.forEach(e => {
                    let t = c.default.extractTimestamp(e.id),
                        a = new Date(t);
                    if (a.setHours(0, 0, 0, 0), a.getTime() === i) n.push(e);
                    else {
                        let n = new Date(t).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric"
                            }),
                            a = l.get(n) ?? [];
                        l.set(n, [...a, e])
                    }
                }), n.length > 0) {
                let t = n.some(e => e.isTemporary);
                e.push({
                    type: "today",
                    title: x.intl.string(x.t["kB2R/0"]),
                    description: t ? x.intl.string(x.t["6AXirz"]) : void 0,
                    clips: n
                })
            }
            return Array.from(l.entries()).forEach(t => {
                let [l, n] = t;
                e.push({
                    type: "monthyear",
                    title: l,
                    clips: n
                })
            }), e
        }, [t]),
        {
            width: M
        } = E,
        {
            tileWidth: T,
            columns: R
        } = a.useMemo(() => {
            var e;
            let l, n, a, i, s;
            return e = t.length, a = 16 * ((n = Math.max(1, Math.floor(((l = M - j) + 16) / 336))) - 1), i = Math.max(320, (l - a) / n), s = b(n, e), {
                tileWidth: i,
                columns: n,
                rows: s
            }
        }, [t.length, M]);
    a.useEffect(() => {
        !async function() {
            A(!0);
            try {
                await m.Fb(I)
            } finally {
                A(!1)
            }
        }()
    }, [I]);
    let D = a.useMemo(() => L.map(e => b(R, e.clips.length)), [L, R]),
        O = a.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        P = Math.floor(T / g),
        U = a.useCallback((e, t) => {
            let {
                sectionIndex: l,
                sectionRowIndex: a
            } = t, i = L[l];
            if (null == i) return null;
            let s = a * R,
                r = i.clips.slice(s, s + R);
            return (0, n.jsx)("div", {
                className: f.UX,
                children: r.map(e => (0, n.jsx)("div", {
                    style: {
                        width: T
                    },
                    children: (0, n.jsx)(h.A, {
                        actionsDisabled: w,
                        isNew: S.includes(e.id),
                        onClick: C ?? y,
                        onEdit: y,
                        clip: e
                    })
                }, e.id))
            }, `row-${l}-${a}`)
        }, [L, R, T, w, S, C, y]),
        G = a.useCallback(e => {
            let t = L[e];
            return t?.description != null ? 66 : 44
        }, [L]),
        V = a.useCallback(e => {
            let t = L[e];
            return null == t ? null : (0, n.jsxs)("div", {
                className: f.aE,
                children: [(0, n.jsx)(r.Heading, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: t.title
                }), null != t.description && (0, n.jsx)(r.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: f.yV,
                    children: t.description
                })]
            }, `header-${e}`)
        }, [L]);
    return N || 0 !== L.length ? N ? (0, n.jsx)("div", {
        className: f.dc,
        children: (0, n.jsx)(r.y$y, {})
    }) : (0, n.jsx)(o.A, {
        listPadding: v,
        renderRow: U,
        renderSectionHeader: V,
        rowCount: O,
        rowCountBySection: D,
        rowHeight: P + 68 + 16,
        sectionHeaderHeight: G,
        onResize: k
    }) : (0, n.jsx)(p.A, {
        isEmptyBecauseQuery: l > 0
    })
}