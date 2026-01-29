/** Chunk was on 1113 **/
/** chunk id: 842452, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(131346),
    o = n(353709),
    c = n(837381),
    u = n(317097),
    d = n(319060),
    h = n(397927),
    p = n(817281),
    g = n(534409),
    f = n(711014),
    m = n(240248),
    b = n(263715),
    A = n(941971),
    y = n(447253),
    O = n(531053),
    _ = n(107385),
    x = n(900848),
    j = n(550591),
    v = n(114329),
    E = n(985018),
    C = n(211170),
    S = n(837021);
let I = (0, m.xI)(d.A.FOLDER_ITEM_ANIMATION_DURATION),
    N = (0, o.animated)(h.BJc),
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
                unread: L = !1,
                defaultFolderName: M,
                draggable: k = !1,
                sorting: G = !1,
                onDragStart: U,
                onDragEnd: V,
                onExpandCollapse: B,
                onContextMenu: H,
                renderChildNode: F,
                folderButtonSize: K,
                folderButtonContent: Y,
                "aria-setsize": W,
                "aria-posinset": z
            } = e,
            {
                id: q,
                name: X,
                children: J
            } = d,
            [Q, Z] = l.useState(!1),
            [$, ee] = l.useState(!1),
            et = Q || $,
            en = (0, g.qK)("FolderItem");
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
                null == V || V(), (0, p.um)(f.Ay.getCompatibleGuildFolders())
            },
            collect: e => ({
                dragging: e.isDragging()
            })
        }), ei = l.useCallback(e => {
            ee(e)
        }, []), es = l.useCallback(e => {
            ("ArrowRight" === e.key && !P || "ArrowLeft" === e.key && P) && B()
        }, [B, P]), ea = null != X && "" !== X ? X : null != M && "" !== M ? M : E.intl.string(E.t.xV9hVh), eo = (0, c.Vd)("".concat(q)), ec = "folder-items-".concat(q), eu = (t = J.length, n = (0, h.rdh)(h.LU0.modules.guildbar.FOLDER_SIZE), i = (0, h.rdh)(h.LU0.modules.guildbar.AVATAR_SIZE), t * (i + (o = (0, h.rdh)(h.LU0.space.SPACE_XS))) - o + (o - (n - i) / 2) + (0, h.rdh)(h.LU0.space.SPACE_4)), ed = (0, h.pnh)(!er && P, {
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
        }), eh = l.useCallback(e => null == m ? void 0 : m(q, e), [m, q]), ep = (0, r.jsxs)(x.c, {
            children: [(0, r.jsx)(A.A, {
                disabled: er || P,
                hovered: Q,
                selected: T,
                unread: L,
                className: S.Io
            }), (0, r.jsx)(j.A, {
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
                    children: er ? (0, r.jsx)(_.A, {
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
                        onClick: B,
                        onContextMenu: H,
                        onHoverChange: Z,
                        onKeyDown: es,
                        treeItemProps: eo,
                        folderButtonContent: Y,
                        "aria-setsize": W,
                        "aria-posinset": z
                    })
                })
            }), k ? (0, r.jsx)(O.Ay, {
                name: ea,
                targetNode: d,
                onDragOverChanged: ei
            }) : null]
        }), eg = null != d.color ? d.color : v.DO, ef = eg === v.DO ? void 0 : (0, u.Hl)(eg);
        return (0, r.jsxs)("div", {
            ref: eh,
            className: s()(C.qc, {
                [C.Av]: P,
                [C.Lg]: et
            }),
            style: {
                "--custom-folder-color": null != ef ? ef : ""
            },
            "data-drop-hovering": $,
            children: [!er && P && (0, r.jsx)("span", {
                className: C.GO
            }), ep, ed((e, t, n) => {
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
                    children: J.map((t, n) => F(t, n, J.length, e.height))
                }, l)
            }), k && P ? (0, r.jsx)(O.qv, {
                name: ea,
                targetNode: d
            }) : null]
        })
    })