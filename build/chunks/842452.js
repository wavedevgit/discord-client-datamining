/** Chunk was on 41727 **/
/** chunk id: 842452, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(131346),
    o = n(108531),
    c = n(837381),
    u = n(317097),
    d = n(319060),
    p = n(397927),
    h = n(817281),
    f = n(534409),
    g = n(711014),
    m = n(240248),
    b = n(263715),
    A = n(941971),
    y = n(447253),
    _ = n(531053),
    O = n(107385),
    j = n(900848),
    v = n(550591),
    x = n(114329),
    E = n(985018),
    C = n(211170),
    S = n(837021);
let I = (0, m.xI)(d.A.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, o.animated)(p.BJc),
    T = l.memo(function(e) {
        var t;
        let n, i, o, {
                folderNode: d,
                setNodeRef: m,
                selected: T,
                expanded: P,
                mediaState: w,
                mentionCount: R = 0,
                isMentionLowImportance: D,
                unread: M = !1,
                defaultFolderName: L,
                draggable: k = !1,
                sorting: G = !1,
                onDragStart: U,
                onDragEnd: B,
                onExpandCollapse: V,
                onContextMenu: F,
                renderChildNode: H,
                folderButtonSize: K,
                folderButtonContent: W,
                "aria-setsize": z,
                "aria-posinset": Y
            } = e,
            {
                id: q,
                name: X,
                children: J
            } = d,
            [Q, Z] = l.useState(!1),
            [$, ee] = l.useState(!1),
            et = Q || $,
            en = (0, f.qK)("FolderItem");
        l.useEffect(() => {
            G && Z(!1)
        }, [G]);
        let [{
            dragging: er
        }, el] = (0, a.i)({
            type: b.PJ.FOLDER,
            item: () => (null == U || U(), {
                type: b.PJ.FOLDER,
                nodeId: d.id
            }),
            end() {
                null == B || B(), (0, h.um)(g.Ay.getCompatibleGuildFolders())
            },
            collect: e => ({
                dragging: e.isDragging()
            })
        }), ei = l.useCallback(e => {
            ee(e)
        }, []), es = l.useCallback(e => {
            ("ArrowRight" === e.key && !P || "ArrowLeft" === e.key && P) && V()
        }, [V, P]), ea = null != X && "" !== X ? X : null != L && "" !== L ? L : E.intl.string(E.t.xV9hVh), eo = (0, c.Vd)("".concat(q)), ec = "folder-items-".concat(q), eu = (t = J.length, n = (0, p.rdh)(p.LU0.modules.guildbar.FOLDER_SIZE), i = (0, p.rdh)(p.LU0.modules.guildbar.AVATAR_SIZE), t * (i + (o = (0, p.rdh)(p.LU0.space.SPACE_XS))) - o + (o - (n - i) / 2) + (0, p.rdh)(p.LU0.space.SPACE_4)), ed = (0, p.pnh)(!er && P, {
            from: {
                height: 0
            },
            enter: {
                height: 1
            },
            leave: {
                height: 0
            },
            config: {
                duration: I
            }
        }), ep = l.useCallback(e => null == m ? void 0 : m(q, e), [m, q]), eh = (0, r.jsxs)(j.c, {
            children: [(0, r.jsx)(A.A, {
                disabled: er || P,
                hovered: Q,
                selected: T,
                unread: M,
                className: S.Io
            }), (0, r.jsx)(v.A, {
                text: ea,
                disabled: G,
                selected: T,
                disableWrapper: !0,
                children: (0, r.jsx)("div", {
                    ref: k ? e => {
                        el(e)
                    } : void 0,
                    className: s()(C.MJ, {
                        [C.L0]: "icon" === K || en,
                        [S.oR]: !er && $ && !P
                    }),
                    "data-dnd-name": ea,
                    children: er ? (0, r.jsx)(O.A, {
                        isFolder: !0
                    }) : (0, r.jsx)(y.A, {
                        folderNode: d,
                        expanded: P,
                        sorting: G,
                        mediaState: w,
                        mentionCount: R,
                        isMentionLowImportance: D,
                        tooltipName: ea,
                        folderGroupId: ec,
                        onClick: V,
                        onContextMenu: F,
                        onHoverChange: Z,
                        onKeyDown: es,
                        treeItemProps: eo,
                        folderButtonContent: W,
                        "aria-setsize": z,
                        "aria-posinset": Y
                    })
                })
            }), k ? (0, r.jsx)(_.Ay, {
                name: ea,
                targetNode: d,
                onDragOverChanged: ei
            }) : null]
        }), ef = null != d.color ? d.color : x.DO, eg = ef === x.DO ? void 0 : (0, u.Hl)(ef);
        return (0, r.jsxs)("div", {
            ref: ep,
            className: s()(C.qc, {
                [C.Av]: P,
                [C.Lg]: et
            }),
            style: {
                "--custom-folder-color": null != eg ? eg : ""
            },
            "data-drop-hovering": $,
            children: [!er && P && (0, r.jsx)("span", {
                className: C.GO
            }), eh, ed((e, t, n) => {
                let {
                    key: l
                } = n;
                return t && (0, r.jsx)(N, {
                    id: ec,
                    role: "group",
                    as: "ul",
                    gap: "xs",
                    className: C.TN,
                    style: {
                        height: e.height.to(e => e * eu)
                    },
                    "aria-label": d.name,
                    children: J.map((t, n) => H(t, n, J.length, e.height))
                }, l)
            }), k && P ? (0, r.jsx)(_.qv, {
                name: ea,
                targetNode: d
            }) : null]
        })
    })