/** chunk id: 253141 params = (module,exports,require) **/
n.d(t, {
    EY: () => d,
    KW: () => c,
    a: () => a,
    ig: () => o,
    kt: () => s
});
var i = n(198982);
n(576705);
var r = n(652215),
    l = n(985018);
let a = "_role";

function s(e) {
    if (!(e >= 0)) switch (-e) {
        case r.t02.ENTITY_TOO_LARGE:
            return l.intl.string(l.t.YbdEFK);
        case r.t02.INVALID_SKU_ATTACHMENT_NO_ARCHIVES:
            return l.intl.string(l.t.ZaXBoD);
        case 1:
            return l.intl.string(l.t.R0RpRX);
        default:
            return l.intl.formatToPlainString(l.t.cYwlp9, {
                code: -e
            })
    }
}

function o(e) {
    let {
        newRoleParams: t
    } = e;
    if (null != t && "" === t.name.trim()) {
        var n;
        return n = l.intl.string(l.t["V0B/k6"]), new i.LG({
            status: 400,
            body: {
                message: "Invalid form body",
                errors: {
                    [a]: {
                        _errors: [{
                            code: "",
                            message: n
                        }]
                    }
                }
            }
        })
    }
}

function d(e) {
    let {
        guildProductListing: t,
        name: n,
        priceTier: i,
        description: r,
        image: l,
        imageName: a,
        isImageChanged: s,
        newRoleParams: o,
        hasUnsavedAttachmentChanges: d
    } = e, c = {};
    t?.name !== n && "" !== n.trim() && (c.name = n), (t?.description ?? "") !== r && (c.description = r), t?.price_tier !== i && null != i && (c.priceTier = i), null != o && "" !== o.name.trim() ? c.createNewRole = !0 : null === o && (c.unlinkRole = !0), l.startsWith("data:") && (s || null == t && (Object.keys(c).length > 0 || d)) && (c.image = l, c.imageName = a);
    let u = Object.keys(c).length > 0 || d;
    return {
        changes: c,
        hasUnsavedChanges: u,
        canSaveForDraft: u,
        canSaveForPublished: u,
        canPublishOrUnpublish: !(null == t || u)
    }
}

function c(e, t) {
    return `${location.protocol}//${location.host}${r.BVt.GUILD_PRODUCT(e,t)}`
}