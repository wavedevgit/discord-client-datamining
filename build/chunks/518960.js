/** Chunk was on 80717 **/
/** chunk id: 518960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => I,
    V: () => v
}), n(896048), n(65821);
var r = n(367513),
    i = n(843472),
    l = n(608299),
    o = n(23658),
    a = n(743445),
    s = n(565150),
    c = n(58149),
    u = n(313961),
    d = n(301169),
    p = n(522602),
    m = n(287809),
    f = n(954571),
    g = n(453771),
    O = n(927578),
    h = n(382287),
    E = n(652215),
    _ = n(381941),
    T = n(788868),
    y = n(985018);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function v(e, t, n) {
    let r = m.default.getCurrentUser(),
        i = e.guild_id,
        l = g.o2(i),
        a = Array.from(t).map(e => e.size),
        s = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
        u = a.reduce((e, t) => e + t, 0),
        d = a.length > 0 ? Math.max(...a) : 0,
        p = a.length;
    if (d > l) {
        let t = null == n ? void 0 : n.reduce((e, t) => e + t, 0);
        (0, c.zV)(E.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: l,
            pre_compression_file_sizes: a,
            pre_compression_aggregate_file_size: u,
            num_attachments: p,
            error_type: _.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: s,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t
        }), (0, o.openUploadError)({
            title: y.intl.string(y.t["/tGlcj"]),
            help: (0, h.WQ)(r, i),
            showPremiumUpsell: !(0, O.YE)(r, T.PremiumTypes.TIER_2),
            fileSize: d
        });
        return
    }(0, o.openUploadError)({
        title: y.intl.string(y.t["/tGlcj"]),
        help: y.intl.formatToPlainString(y.t.tUOJdH, {
            maxSize: g.Hb(g.bB())
        })
    })
}
async function I(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: m = !0,
        isThumbnail: g = !1,
        origin: O
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let T = t.getGuildId(),
        I = Array.from(e),
        C = I.map(e => ({
            originalContentType: e.type,
            preCompressionSize: e.size
        }));
    if (await Promise.resolve(), (0, h.fJ)(I, T)) return void v(t, I);
    if (p.A.getUploadCount(t.id, n) + I.length > E.XgB) {
        (0, o.openUploadError)({
            title: y.intl.string(y.t.wOr6hB),
            help: y.intl.formatToPlainString(y.t["qqyp/e"], {
                limit: E.XgB
            })
        }), f.default.track(E.HAw.UPLOAD_FILE_LIMIT_ERROR, {
            existing_count: p.A.getUploadCount(t.id, n),
            new_count: I.length
        });
        return
    }
    if (t.type !== E.rbe.GUILD_VOICE && t.type !== E.rbe.GUILD_STAGE_VOICE || u.A.getChatOpen(t.id) || r.A.updateChatOpen(t.id, !0), m) {
        let e = I.map((e, t) => b({
            file: e,
            platform: s.xz.WEB,
            isThumbnail: g,
            origin: O,
            compressionMetadata: C[t]
        }, null == c ? void 0 : c[t]));
        l.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: n
        })
    } else {
        let e = I.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new a.bK(b({
                file: e,
                platform: s.xz.WEB,
                isThumbnail: g,
                origin: O,
                compressionMetadata: C[n]
            }, r), t.id)
        });
        i.A.sendMessage(t.id, {
            content: "",
            tts: !1,
            invalidEmojis: [],
            validNonShortcutEmojis: []
        }, void 0, {
            eagerDispatch: !1,
            attachmentsToUpload: e,
            location: _.Hx.INSTANT_UPLOAD,
            onAttachmentUploadError: (e, n, r) => {
                (0, d.k)({
                    file: e,
                    guildId: t.getGuildId(),
                    analyticsLocations: [],
                    code: n,
                    reason: r
                })
            }
        })
    }
}