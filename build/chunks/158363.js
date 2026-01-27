/** Chunk was on 67096 **/
/** chunk id: 158363, original params: e,A,t (module,exports,require) **/
t.d(A, {
    A: () => O
}), t(65821), t(896048);
var r = t(64700),
    n = t(417597),
    l = t(562465),
    a = t(582754),
    i = t(73153),
    s = t(198982),
    o = t(743445),
    d = t(565150),
    u = t(900482),
    c = t(723444),
    g = t(626584),
    f = t(71393),
    p = t(292348),
    m = t(535736),
    v = t(871109),
    h = t(253141),
    b = t(652215),
    q = t(985018);

function C(e, A, t) {
    return A in e ? Object.defineProperty(e, A, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[A] = t, e
}

function j(e) {
    for (var A = 1; A < arguments.length; A++) {
        var t = null != arguments[A] ? arguments[A] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), r.forEach(function(A) {
            C(e, A, t[A])
        })
    }
    return e
}

function U(e, A) {
    return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
        }
        return t
    })(Object(A)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
    }), e
}
let V = new g.A("ProductAttachmentManager");
class x {
    addAttachment(e, A) {
        let t = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= t) throw a.OR.announce(q.intl.formatToPlainString(q.t["0QDZ4J"], {
            maxAttachmentsCount: t
        })), Error("Too many attachments");
        e.target = u.m.GUILD_PRODUCT_ATTACHMENT;
        let r = new o.bK(e, this.guildId);
        r.upload(), r.on("error", t => {
            var n;
            t === b.t02.ENTITY_TOO_LARGE && this.onFileSizeError();
            let l = "number" == typeof t && t > 0 ? -t : -1,
                i = (0, h.kt)(l),
                s = null == (n = e.file) ? void 0 : n.name;
            null != s ? a.OR.announce(q.intl.formatToPlainString(q.t["+YVkfX"], {
                filename: s,
                reason: i
            })) : a.OR.announce(q.intl.formatToPlainString(q.t.mBkf6Z, {
                reason: i
            })), A(e => U(j({}, e), {
                [r.id]: l
            }))
        }), r.on("progress", (e, t) => {
            A(A => U(j({}, A), {
                [r.id]: e / t
            }))
        }), this.uploads = [...this.uploads, r]
    }
    deleteAttachment(e) {
        let A = this.uploads.findIndex(A => A.id === e);
        return -1 !== A && (this.uploads = [...this.uploads], this.uploads.splice(A, 1)[0].cancel(), !0)
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = []
    }
    async saveProductWithAttachments(e) {
        let A, {
                priceTier: t,
                createNewRole: r,
                imageName: n
            } = e,
            a = function(e, A) {
                if (null == e) return {};
                var t, r, n, l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l
                }
                if (l = function(e, A) {
                        if (null == e) return {};
                        var t, r, n = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
                        return n
                    }(e, A), Object.getOwnPropertySymbols)
                    for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l
            }(e, ["priceTier", "createNewRole", "imageName"]);
        if (this.uploads.some(e => e.status === o.jP.ERROR)) throw Error("Cannot create product with failed attachments");
        "unlinkRole" in a && (A = a.unlinkRole);
        let s = this.uploads.filter(e => !this.existingAttachmentIds.has(e.id)),
            d = this.uploads.filter(e => this.existingAttachmentIds.has(e.id)).map(e => {
                var A;
                return {
                    filename: null == (A = e.item.file) ? void 0 : A.name,
                    id: e.id
                }
            }),
            u = (0, c.I)(),
            g = (await u.uploadFiles(s)).map((e, A) => (0, p.OW)(e, A)),
            f = null != this.editSkuId ? l.Bo.patch : l.Bo.post,
            m = null != this.editSkuId ? b.Rsh.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : b.Rsh.GUILD_PRODUCTS(this.guildId),
            v = (await f({
                url: m,
                rejectWithError: !1,
                body: U(j({}, a), {
                    price_tier: t,
                    create_new_role: r,
                    image_name: n,
                    unlink_role: A,
                    attachments: d.length > 0 ? [...d, ...g] : g
                })
            })).body;
        return V.log("Created/updated product:", v), null != v && (null != this.editSkuId ? await i.h.dispatch({
            type: "GUILD_PRODUCT_UPDATE",
            product: v
        }) : await i.h.dispatch({
            type: "GUILD_PRODUCT_CREATE",
            product: v
        })), v
    }
    constructor({
        guildId: e,
        editSkuId: A,
        onFileSizeError: t
    }) {
        var r;
        C(this, "guildId", void 0), C(this, "editSkuId", void 0), C(this, "target", new m.A), C(this, "onFileSizeError", void 0), C(this, "existingAttachmentIds", new Set), C(this, "uploads", []), C(this, "generateInitialProgresses", () => {
            let e = {};
            for (let A of this.uploads) e[A.id] = 1;
            return e
        }), this.editSkuId = A, this.guildId = e, this.onFileSizeError = t;
        const n = null == (r = v.A.getGuildProduct(null != A ? A : "")) ? void 0 : r.attachments;
        null != n && (this.uploads = n.map(A => {
            var t;
            this.existingAttachmentIds.add(A.id);
            let r = new o.bK({
                id: A.id,
                platform: d.xz.WEB,
                origin: "unknown:guild_product_attachment",
                file: {
                    name: A.filename,
                    lastModified: 0,
                    size: null != (t = A.size) ? t : 0
                }
            }, e);
            return r.status = o.jP.COMPLETED, r
        }))
    }
}

function O(e, A) {
    var t;
    let {
        editSkuId: l,
        onFileSizeError: a
    } = A, i = (0, n.bG)([f.A], () => f.A.getGuild(e)), [o, d] = r.useState({
        editSkuId: l,
        onFileSizeError: a
    }), u = r.useMemo(() => new x(j({
        guildId: e
    }, o)), [e, o]), [c, g] = r.useState(u.generateInitialProgresses), [, p] = r.useState(null);
    r.useLayoutEffect(() => {
        g(u.generateInitialProgresses())
    }, [u]);
    let [m, v] = r.useState(), [h, q] = r.useState(), C = r.useCallback(e => {
        u.deleteAttachment(e) && p({})
    }, [u]), U = r.useCallback(e => {
        u.addAttachment(e, g), p({})
    }, [u]), V = r.useCallback(async e => {
        try {
            v(e), q(void 0);
            let A = await u.saveProductWithAttachments(e);
            return null != A && d({
                editSkuId: A.id,
                onFileSizeError: a
            }), p({}), A
        } catch (e) {
            q(e instanceof s.LG ? e : new s.LG(e))
        } finally {
            v(void 0)
        }
    }, [u, a]), O = r.useCallback(() => {
        u.cancelUnusedUploads(), p({})
    }, [u]);
    r.useEffect(() => () => {
        u.cancelUnusedUploads()
    }, [u]);
    let {
        uploads: y
    } = u, P = !y.every(e => u.existingAttachmentIds.has(e.id)) || y.length !== u.existingAttachmentIds.size;
    return {
        addAttachment: U,
        cancelUnusedUploads: O,
        deleteAttachment: C,
        fileUploadProgresses: c,
        uploads: y,
        saveProductWithAttachments: V,
        isSaving: null != m,
        changesSaving: m,
        saveError: h,
        hasUnsavedAttachmentChanges: P,
        canAttachFiles: y.length < u.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (t = null == i ? void 0 : i.features.has(b.GuildFeatures.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && t
    }
}