package com.google.android.exoplayer2;

import android.net.Uri;
import android.os.Bundle;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.google.android.exoplayer2.MediaMetadata;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.metadata.Metadata;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class MediaMetadata implements g {
    public final Boolean A;
    public final Boolean B;
    public final Integer C;
    public final Integer D;
    public final Integer E;
    public final Integer F;
    public final Integer G;
    public final Integer H;
    public final Integer I;
    public final CharSequence J;
    public final CharSequence K;
    public final CharSequence L;
    public final Integer M;
    public final Integer N;
    public final CharSequence O;
    public final CharSequence P;
    public final CharSequence Q;
    public final Integer R;
    public final Bundle S;

    /* renamed from: d  reason: collision with root package name */
    public final CharSequence f11499d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f11500e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f11501i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f11502o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f11503p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f11504q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f11505r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f11506s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f11507t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f11508u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f11509v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f11510w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f11511x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f11512y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f11513z;
    public static final MediaMetadata T = new b().H();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11473a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11474b0 = ne.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11475c0 = ne.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11476d0 = ne.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11477e0 = ne.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11478f0 = ne.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11479g0 = ne.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11480h0 = ne.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11481i0 = ne.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11482j0 = ne.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11483k0 = ne.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11484l0 = ne.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11485m0 = ne.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11486n0 = ne.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11487o0 = ne.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11488p0 = ne.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11489q0 = ne.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11490r0 = ne.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11491s0 = ne.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11492t0 = ne.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11493u0 = ne.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11494v0 = ne.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11495w0 = ne.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11496x0 = ne.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11497y0 = ne.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11498z0 = ne.w0.B0(32);
    private static final String A0 = ne.w0.B0(1000);
    public static final g.a B0 = new g.a() { // from class: lc.k0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            MediaMetadata c10;
            c10 = MediaMetadata.c(bundle);
            return c10;
        }
    };

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        private Integer A;
        private Integer B;
        private CharSequence C;
        private CharSequence D;
        private CharSequence E;
        private Integer F;
        private Bundle G;

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f11514a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f11515b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f11516c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f11517d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f11518e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f11519f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f11520g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f11521h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f11522i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f11523j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f11524k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f11525l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f11526m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f11527n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f11528o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f11529p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f11530q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f11531r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f11532s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f11533t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f11534u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f11535v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f11536w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f11537x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f11538y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f11539z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f11523j != null && !ne.w0.c(Integer.valueOf(i10), 3) && ne.w0.c(this.f11524k, 3)) {
                return this;
            }
            this.f11523j = (byte[]) bArr.clone();
            this.f11524k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f11499d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f11500e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f11501i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f11502o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f11503p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f11504q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f11505r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f11506s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f11507t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f11508u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f11509v);
                }
                Uri uri = mediaMetadata.f11510w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f11511x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f11512y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f11513z;
                if (num3 != null) {
                    Y(num3);
                }
                Boolean bool = mediaMetadata.A;
                if (bool != null) {
                    a0(bool);
                }
                Boolean bool2 = mediaMetadata.B;
                if (bool2 != null) {
                    b0(bool2);
                }
                Integer num4 = mediaMetadata.C;
                if (num4 != null) {
                    g0(num4);
                }
                Integer num5 = mediaMetadata.D;
                if (num5 != null) {
                    g0(num5);
                }
                Integer num6 = mediaMetadata.E;
                if (num6 != null) {
                    f0(num6);
                }
                Integer num7 = mediaMetadata.F;
                if (num7 != null) {
                    e0(num7);
                }
                Integer num8 = mediaMetadata.G;
                if (num8 != null) {
                    j0(num8);
                }
                Integer num9 = mediaMetadata.H;
                if (num9 != null) {
                    i0(num9);
                }
                Integer num10 = mediaMetadata.I;
                if (num10 != null) {
                    h0(num10);
                }
                CharSequence charSequence8 = mediaMetadata.J;
                if (charSequence8 != null) {
                    r0(charSequence8);
                }
                CharSequence charSequence9 = mediaMetadata.K;
                if (charSequence9 != null) {
                    S(charSequence9);
                }
                CharSequence charSequence10 = mediaMetadata.L;
                if (charSequence10 != null) {
                    T(charSequence10);
                }
                Integer num11 = mediaMetadata.M;
                if (num11 != null) {
                    V(num11);
                }
                Integer num12 = mediaMetadata.N;
                if (num12 != null) {
                    n0(num12);
                }
                CharSequence charSequence11 = mediaMetadata.O;
                if (charSequence11 != null) {
                    Z(charSequence11);
                }
                CharSequence charSequence12 = mediaMetadata.P;
                if (charSequence12 != null) {
                    R(charSequence12);
                }
                CharSequence charSequence13 = mediaMetadata.Q;
                if (charSequence13 != null) {
                    k0(charSequence13);
                }
                Integer num13 = mediaMetadata.R;
                if (num13 != null) {
                    c0(num13);
                }
                Bundle bundle = mediaMetadata.S;
                if (bundle != null) {
                    X(bundle);
                }
            }
            return this;
        }

        public b K(Metadata metadata) {
            for (int i10 = 0; i10 < metadata.e(); i10++) {
                metadata.d(i10).e1(this);
            }
            return this;
        }

        public b L(List list) {
            for (int i10 = 0; i10 < list.size(); i10++) {
                Metadata metadata = (Metadata) list.get(i10);
                for (int i11 = 0; i11 < metadata.e(); i11++) {
                    metadata.d(i11).e1(this);
                }
            }
            return this;
        }

        public b M(CharSequence charSequence) {
            this.f11517d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f11516c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f11515b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f11523j = bArr2;
            this.f11524k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f11525l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f11538y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f11539z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f11520g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f11518e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f11528o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f11529p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f11530q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f11522i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f11533t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f11532s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f11531r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f11536w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f11535v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f11534u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f11519f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f11514a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f11527n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f11526m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f11521h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f11537x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f11514a = mediaMetadata.f11499d;
            this.f11515b = mediaMetadata.f11500e;
            this.f11516c = mediaMetadata.f11501i;
            this.f11517d = mediaMetadata.f11502o;
            this.f11518e = mediaMetadata.f11503p;
            this.f11519f = mediaMetadata.f11504q;
            this.f11520g = mediaMetadata.f11505r;
            this.f11521h = mediaMetadata.f11506s;
            this.f11522i = mediaMetadata.f11507t;
            this.f11523j = mediaMetadata.f11508u;
            this.f11524k = mediaMetadata.f11509v;
            this.f11525l = mediaMetadata.f11510w;
            this.f11526m = mediaMetadata.f11511x;
            this.f11527n = mediaMetadata.f11512y;
            this.f11528o = mediaMetadata.f11513z;
            this.f11529p = mediaMetadata.A;
            this.f11530q = mediaMetadata.B;
            this.f11531r = mediaMetadata.D;
            this.f11532s = mediaMetadata.E;
            this.f11533t = mediaMetadata.F;
            this.f11534u = mediaMetadata.G;
            this.f11535v = mediaMetadata.H;
            this.f11536w = mediaMetadata.I;
            this.f11537x = mediaMetadata.J;
            this.f11538y = mediaMetadata.K;
            this.f11539z = mediaMetadata.L;
            this.A = mediaMetadata.M;
            this.B = mediaMetadata.N;
            this.C = mediaMetadata.O;
            this.D = mediaMetadata.P;
            this.E = mediaMetadata.Q;
            this.F = mediaMetadata.R;
            this.G = mediaMetadata.S;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static MediaMetadata c(Bundle bundle) {
        Integer num;
        Bundle bundle2;
        Bundle bundle3;
        b bVar = new b();
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f11473a0));
        byte[] byteArray = bundle.getByteArray(f11476d0);
        String str = f11495w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f11477e0)).r0(bundle.getCharSequence(f11488p0)).S(bundle.getCharSequence(f11489q0)).T(bundle.getCharSequence(f11490r0)).Z(bundle.getCharSequence(f11493u0)).R(bundle.getCharSequence(f11494v0)).k0(bundle.getCharSequence(f11496x0)).X(bundle.getBundle(A0));
        String str2 = f11474b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f12765e.a(bundle3));
        }
        String str3 = f11475c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f12765e.a(bundle2));
        }
        String str4 = f11478f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f11479g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f11480h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f11498z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f11481i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f11482j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f11483k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f11484l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f11485m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f11486n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f11487o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f11491s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f11492t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f11497y0;
        if (bundle.containsKey(str17)) {
            bVar.c0(Integer.valueOf(bundle.getInt(str17)));
        }
        return bVar.H();
    }

    private static int d(int i10) {
        switch (i10) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
            case 32:
            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                return 1;
            case 20:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
            case 28:
            case 29:
            case 30:
            default:
                return 0;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                return 2;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                return 3;
            case 23:
                return 4;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                return 5;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                return 6;
        }
    }

    private static int e(int i10) {
        switch (i10) {
            case 1:
                return 0;
            case 2:
                return 21;
            case 3:
                return 22;
            case 4:
                return 23;
            case 5:
                return 24;
            case 6:
                return 25;
            default:
                return 20;
        }
    }

    public b b() {
        return new b();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && MediaMetadata.class == obj.getClass()) {
            MediaMetadata mediaMetadata = (MediaMetadata) obj;
            if (ne.w0.c(this.f11499d, mediaMetadata.f11499d) && ne.w0.c(this.f11500e, mediaMetadata.f11500e) && ne.w0.c(this.f11501i, mediaMetadata.f11501i) && ne.w0.c(this.f11502o, mediaMetadata.f11502o) && ne.w0.c(this.f11503p, mediaMetadata.f11503p) && ne.w0.c(this.f11504q, mediaMetadata.f11504q) && ne.w0.c(this.f11505r, mediaMetadata.f11505r) && ne.w0.c(this.f11506s, mediaMetadata.f11506s) && ne.w0.c(this.f11507t, mediaMetadata.f11507t) && Arrays.equals(this.f11508u, mediaMetadata.f11508u) && ne.w0.c(this.f11509v, mediaMetadata.f11509v) && ne.w0.c(this.f11510w, mediaMetadata.f11510w) && ne.w0.c(this.f11511x, mediaMetadata.f11511x) && ne.w0.c(this.f11512y, mediaMetadata.f11512y) && ne.w0.c(this.f11513z, mediaMetadata.f11513z) && ne.w0.c(this.A, mediaMetadata.A) && ne.w0.c(this.B, mediaMetadata.B) && ne.w0.c(this.D, mediaMetadata.D) && ne.w0.c(this.E, mediaMetadata.E) && ne.w0.c(this.F, mediaMetadata.F) && ne.w0.c(this.G, mediaMetadata.G) && ne.w0.c(this.H, mediaMetadata.H) && ne.w0.c(this.I, mediaMetadata.I) && ne.w0.c(this.J, mediaMetadata.J) && ne.w0.c(this.K, mediaMetadata.K) && ne.w0.c(this.L, mediaMetadata.L) && ne.w0.c(this.M, mediaMetadata.M) && ne.w0.c(this.N, mediaMetadata.N) && ne.w0.c(this.O, mediaMetadata.O) && ne.w0.c(this.P, mediaMetadata.P) && ne.w0.c(this.Q, mediaMetadata.Q) && ne.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f11499d, this.f11500e, this.f11501i, this.f11502o, this.f11503p, this.f11504q, this.f11505r, this.f11506s, this.f11507t, Integer.valueOf(Arrays.hashCode(this.f11508u)), this.f11509v, this.f11510w, this.f11511x, this.f11512y, this.f11513z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f11529p;
        Integer num = bVar.f11528o;
        Integer num2 = bVar.F;
        if (bool != null) {
            if (!bool.booleanValue()) {
                num = -1;
            } else if (num == null || num.intValue() == -1) {
                num = Integer.valueOf(num2 != null ? d(num2.intValue()) : 0);
            }
        } else if (num != null) {
            boolean z10 = num.intValue() != -1;
            bool = Boolean.valueOf(z10);
            if (z10 && num2 == null) {
                num2 = Integer.valueOf(e(num.intValue()));
            }
        }
        this.f11499d = bVar.f11514a;
        this.f11500e = bVar.f11515b;
        this.f11501i = bVar.f11516c;
        this.f11502o = bVar.f11517d;
        this.f11503p = bVar.f11518e;
        this.f11504q = bVar.f11519f;
        this.f11505r = bVar.f11520g;
        this.f11506s = bVar.f11521h;
        this.f11507t = bVar.f11522i;
        this.f11508u = bVar.f11523j;
        this.f11509v = bVar.f11524k;
        this.f11510w = bVar.f11525l;
        this.f11511x = bVar.f11526m;
        this.f11512y = bVar.f11527n;
        this.f11513z = num;
        this.A = bool;
        this.B = bVar.f11530q;
        this.C = bVar.f11531r;
        this.D = bVar.f11531r;
        this.E = bVar.f11532s;
        this.F = bVar.f11533t;
        this.G = bVar.f11534u;
        this.H = bVar.f11535v;
        this.I = bVar.f11536w;
        this.J = bVar.f11537x;
        this.K = bVar.f11538y;
        this.L = bVar.f11539z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
