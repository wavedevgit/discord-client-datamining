/** chunk id: 518960, original params: e,t,n (module,exports,require) **/
n.d(t, {
    R: () => C,
    V: () => y
}), n(896048), n(65821);
var r = n(367513),
    i = n(843472),
    o = n(608299),
    a = n(23658),
    l = n(743445),
    _ = n(565150),
    c = n(58149),
    s = n(313961),
    d = n(301169),
    u = n(522602),
    p = n(287809),
    f = n(954571),
    m = n(453771),
    g = n(927578),
    h = n(382287),
    I = n(652215),
    O = n(381941),
    b = n(788868),
    E = n(985018);

function T(e) {
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

function y(e, t, n) {
    let r = p.default.getCurrentUser(),
        i = e.guild_id,
        o = m.o2(i),
        l = Array.from(t).map(e => e.size),
        _ = Array.from(t).map(e => null != e.type ? e.type : "unknown"),
        s = l.reduce((e, t) => e + t, 0),
        d = l.length > 0 ? Math.max(...l) : 0,
        u = l.length;
    if (d > o) {
        let t = null == n ? void 0 : n.reduce((e, t) => e + t, 0);
        (0, c.zV)(I.HAw.FILE_SIZE_LIMIT_EXCEEDED, {
            channel_id: e.id,
            guild_id: i,
            user_individual_file_size_limit: o,
            pre_compression_file_sizes: l,
            pre_compression_aggregate_file_size: s,
            num_attachments: u,
            error_type: O.ty.UPLOAD_ATTACHMENT_MAX_SIZE_ERROR,
            attachment_mimetypes: _,
            post_compression_file_sizes: n,
            post_compression_aggregate_file_size: t
        }), (0, a.openUploadError)({
            title: E.intl.string(E.t["/tGlcj"]),
            help: (0, h.WQ)(r, i),
            showPremiumUpsell: !(0, g.YE)(r, b.PremiumTypes.TIER_2),
            fileSize: d
        });
        return
    }(0, a.openUploadError)({
        title: E.intl.string(E.t["/tGlcj"]),
        help: E.intl.formatToPlainString(E.t.tUOJdH, {
            maxSize: m.Hb(m.bB())
        })
    })
}
async function C(e, t, n) {
    let {
        filesMetadata: c,
        requireConfirm: p = !0,
        isThumbnail: m = !1,
        origin: g
    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.length < 1) return;
    if (null != c && c.length !== e.length) throw Error("Unexpected mismatch between files and file metadata");
    let b = t.getGuildId(),
        C = Array.from(e),
        x = C.map(e => ({
            originalContentType: e.type,
            preCompressionSize: e.size
        }));
    if (await Promise.resolve(), (0, h.fJ)(C, b)) return void y(t, C);
    if (u.A.getUploadCount(t.id, n) + C.length > I.XgB) {
        (0, a.openUploadError)({
            title: E.intl.string(E.t.wOr6hB),
            help: E.intl.formatToPlainString(E.t["qqyp/e"], {
                limit: I.XgB
            })
        }), f.default.track(I.HAw.UPLOAD_FILE_LIMIT_ERROR, {
            existing_count: u.A.getUploadCount(t.id, n),
            new_count: C.length
        });
        return
    }
    if (t.type !== I.rbe.GUILD_VOICE && t.type !== I.rbe.GUILD_STAGE_VOICE || s.A.getChatOpen(t.id) || r.A.updateChatOpen(t.id, !0), p) {
        let e = C.map((e, t) => T({
            file: e,
            platform: _.xz.WEB,
            isThumbnail: m,
            origin: g,
            compressionMetadata: x[t]
        }, null == c ? void 0 : c[t]));
        o.A.addFiles({
            files: e,
            channelId: t.id,
            draftType: n
        })
    } else {
        let e = C.map((e, n) => {
            let r = null != c ? c[n] : {};
            return new l.bK(T({
                file: e,
                platform: _.xz.WEB,
                isThumbnail: m,
                origin: g,
                compressionMetadata: x[n]
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
            location: O.Hx.INSTANT_UPLOAD,
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