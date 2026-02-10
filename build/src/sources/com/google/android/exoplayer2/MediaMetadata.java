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
    public final CharSequence f11923d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f11924e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f11925i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f11926o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f11927p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f11928q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f11929r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f11930s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f11931t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f11932u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f11933v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f11934w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f11935x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f11936y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f11937z;
    public static final MediaMetadata T = new b().H();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11897a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11898b0 = oe.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11899c0 = oe.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11900d0 = oe.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11901e0 = oe.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11902f0 = oe.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11903g0 = oe.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11904h0 = oe.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11905i0 = oe.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11906j0 = oe.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11907k0 = oe.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11908l0 = oe.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11909m0 = oe.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11910n0 = oe.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11911o0 = oe.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11912p0 = oe.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11913q0 = oe.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11914r0 = oe.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11915s0 = oe.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11916t0 = oe.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11917u0 = oe.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11918v0 = oe.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11919w0 = oe.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11920x0 = oe.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11921y0 = oe.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11922z0 = oe.w0.B0(32);
    private static final String A0 = oe.w0.B0(1000);
    public static final g.a B0 = new g.a() { // from class: mc.k0
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
        private CharSequence f11938a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f11939b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f11940c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f11941d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f11942e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f11943f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f11944g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f11945h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f11946i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f11947j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f11948k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f11949l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f11950m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f11951n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f11952o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f11953p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f11954q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f11955r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f11956s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f11957t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f11958u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f11959v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f11960w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f11961x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f11962y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f11963z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f11947j != null && !oe.w0.c(Integer.valueOf(i10), 3) && oe.w0.c(this.f11948k, 3)) {
                return this;
            }
            this.f11947j = (byte[]) bArr.clone();
            this.f11948k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f11923d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f11924e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f11925i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f11926o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f11927p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f11928q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f11929r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f11930s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f11931t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f11932u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f11933v);
                }
                Uri uri = mediaMetadata.f11934w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f11935x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f11936y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f11937z;
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
                metadata.d(i10).a1(this);
            }
            return this;
        }

        public b L(List list) {
            for (int i10 = 0; i10 < list.size(); i10++) {
                Metadata metadata = (Metadata) list.get(i10);
                for (int i11 = 0; i11 < metadata.e(); i11++) {
                    metadata.d(i11).a1(this);
                }
            }
            return this;
        }

        public b M(CharSequence charSequence) {
            this.f11941d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f11940c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f11939b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f11947j = bArr2;
            this.f11948k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f11949l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f11962y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f11963z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f11944g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f11942e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f11952o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f11953p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f11954q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f11946i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f11957t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f11956s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f11955r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f11960w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f11959v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f11958u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f11943f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f11938a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f11951n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f11950m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f11945h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f11961x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f11938a = mediaMetadata.f11923d;
            this.f11939b = mediaMetadata.f11924e;
            this.f11940c = mediaMetadata.f11925i;
            this.f11941d = mediaMetadata.f11926o;
            this.f11942e = mediaMetadata.f11927p;
            this.f11943f = mediaMetadata.f11928q;
            this.f11944g = mediaMetadata.f11929r;
            this.f11945h = mediaMetadata.f11930s;
            this.f11946i = mediaMetadata.f11931t;
            this.f11947j = mediaMetadata.f11932u;
            this.f11948k = mediaMetadata.f11933v;
            this.f11949l = mediaMetadata.f11934w;
            this.f11950m = mediaMetadata.f11935x;
            this.f11951n = mediaMetadata.f11936y;
            this.f11952o = mediaMetadata.f11937z;
            this.f11953p = mediaMetadata.A;
            this.f11954q = mediaMetadata.B;
            this.f11955r = mediaMetadata.D;
            this.f11956s = mediaMetadata.E;
            this.f11957t = mediaMetadata.F;
            this.f11958u = mediaMetadata.G;
            this.f11959v = mediaMetadata.H;
            this.f11960w = mediaMetadata.I;
            this.f11961x = mediaMetadata.J;
            this.f11962y = mediaMetadata.K;
            this.f11963z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f11897a0));
        byte[] byteArray = bundle.getByteArray(f11900d0);
        String str = f11919w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f11901e0)).r0(bundle.getCharSequence(f11912p0)).S(bundle.getCharSequence(f11913q0)).T(bundle.getCharSequence(f11914r0)).Z(bundle.getCharSequence(f11917u0)).R(bundle.getCharSequence(f11918v0)).k0(bundle.getCharSequence(f11920x0)).X(bundle.getBundle(A0));
        String str2 = f11898b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f13251e.a(bundle3));
        }
        String str3 = f11899c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f13251e.a(bundle2));
        }
        String str4 = f11902f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f11903g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f11904h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f11922z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f11905i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f11906j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f11907k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f11908l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f11909m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f11910n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f11911o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f11915s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f11916t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f11921y0;
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
            if (oe.w0.c(this.f11923d, mediaMetadata.f11923d) && oe.w0.c(this.f11924e, mediaMetadata.f11924e) && oe.w0.c(this.f11925i, mediaMetadata.f11925i) && oe.w0.c(this.f11926o, mediaMetadata.f11926o) && oe.w0.c(this.f11927p, mediaMetadata.f11927p) && oe.w0.c(this.f11928q, mediaMetadata.f11928q) && oe.w0.c(this.f11929r, mediaMetadata.f11929r) && oe.w0.c(this.f11930s, mediaMetadata.f11930s) && oe.w0.c(this.f11931t, mediaMetadata.f11931t) && Arrays.equals(this.f11932u, mediaMetadata.f11932u) && oe.w0.c(this.f11933v, mediaMetadata.f11933v) && oe.w0.c(this.f11934w, mediaMetadata.f11934w) && oe.w0.c(this.f11935x, mediaMetadata.f11935x) && oe.w0.c(this.f11936y, mediaMetadata.f11936y) && oe.w0.c(this.f11937z, mediaMetadata.f11937z) && oe.w0.c(this.A, mediaMetadata.A) && oe.w0.c(this.B, mediaMetadata.B) && oe.w0.c(this.D, mediaMetadata.D) && oe.w0.c(this.E, mediaMetadata.E) && oe.w0.c(this.F, mediaMetadata.F) && oe.w0.c(this.G, mediaMetadata.G) && oe.w0.c(this.H, mediaMetadata.H) && oe.w0.c(this.I, mediaMetadata.I) && oe.w0.c(this.J, mediaMetadata.J) && oe.w0.c(this.K, mediaMetadata.K) && oe.w0.c(this.L, mediaMetadata.L) && oe.w0.c(this.M, mediaMetadata.M) && oe.w0.c(this.N, mediaMetadata.N) && oe.w0.c(this.O, mediaMetadata.O) && oe.w0.c(this.P, mediaMetadata.P) && oe.w0.c(this.Q, mediaMetadata.Q) && oe.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ni.j.b(this.f11923d, this.f11924e, this.f11925i, this.f11926o, this.f11927p, this.f11928q, this.f11929r, this.f11930s, this.f11931t, Integer.valueOf(Arrays.hashCode(this.f11932u)), this.f11933v, this.f11934w, this.f11935x, this.f11936y, this.f11937z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f11953p;
        Integer num = bVar.f11952o;
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
        this.f11923d = bVar.f11938a;
        this.f11924e = bVar.f11939b;
        this.f11925i = bVar.f11940c;
        this.f11926o = bVar.f11941d;
        this.f11927p = bVar.f11942e;
        this.f11928q = bVar.f11943f;
        this.f11929r = bVar.f11944g;
        this.f11930s = bVar.f11945h;
        this.f11931t = bVar.f11946i;
        this.f11932u = bVar.f11947j;
        this.f11933v = bVar.f11948k;
        this.f11934w = bVar.f11949l;
        this.f11935x = bVar.f11950m;
        this.f11936y = bVar.f11951n;
        this.f11937z = num;
        this.A = bool;
        this.B = bVar.f11954q;
        this.C = bVar.f11955r;
        this.D = bVar.f11955r;
        this.E = bVar.f11956s;
        this.F = bVar.f11957t;
        this.G = bVar.f11958u;
        this.H = bVar.f11959v;
        this.I = bVar.f11960w;
        this.J = bVar.f11961x;
        this.K = bVar.f11962y;
        this.L = bVar.f11963z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
