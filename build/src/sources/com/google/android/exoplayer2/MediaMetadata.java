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
    public final CharSequence f12902d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f12903e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f12904i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f12905o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f12906p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f12907q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f12908r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f12909s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f12910t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f12911u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f12912v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f12913w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f12914x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f12915y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f12916z;
    public static final MediaMetadata T = new b().H();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12876a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12877b0 = ne.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12878c0 = ne.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12879d0 = ne.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12880e0 = ne.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12881f0 = ne.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12882g0 = ne.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12883h0 = ne.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12884i0 = ne.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12885j0 = ne.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12886k0 = ne.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12887l0 = ne.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12888m0 = ne.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12889n0 = ne.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12890o0 = ne.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12891p0 = ne.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12892q0 = ne.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12893r0 = ne.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12894s0 = ne.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12895t0 = ne.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12896u0 = ne.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12897v0 = ne.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12898w0 = ne.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12899x0 = ne.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12900y0 = ne.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12901z0 = ne.w0.B0(32);
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
        private CharSequence f12917a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f12918b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f12919c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f12920d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f12921e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f12922f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f12923g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f12924h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f12925i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f12926j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f12927k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f12928l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f12929m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f12930n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f12931o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f12932p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f12933q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f12934r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f12935s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f12936t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f12937u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f12938v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f12939w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f12940x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f12941y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f12942z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f12926j != null && !ne.w0.c(Integer.valueOf(i10), 3) && ne.w0.c(this.f12927k, 3)) {
                return this;
            }
            this.f12926j = (byte[]) bArr.clone();
            this.f12927k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f12902d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f12903e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f12904i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f12905o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f12906p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f12907q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f12908r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f12909s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f12910t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f12911u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f12912v);
                }
                Uri uri = mediaMetadata.f12913w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f12914x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f12915y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f12916z;
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
                metadata.d(i10).d1(this);
            }
            return this;
        }

        public b L(List list) {
            for (int i10 = 0; i10 < list.size(); i10++) {
                Metadata metadata = (Metadata) list.get(i10);
                for (int i11 = 0; i11 < metadata.e(); i11++) {
                    metadata.d(i11).d1(this);
                }
            }
            return this;
        }

        public b M(CharSequence charSequence) {
            this.f12920d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f12919c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f12918b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f12926j = bArr2;
            this.f12927k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f12928l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f12941y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f12942z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f12923g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f12921e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f12931o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f12932p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f12933q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f12925i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f12936t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f12935s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f12934r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f12939w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f12938v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f12937u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f12922f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f12917a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f12930n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f12929m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f12924h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f12940x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f12917a = mediaMetadata.f12902d;
            this.f12918b = mediaMetadata.f12903e;
            this.f12919c = mediaMetadata.f12904i;
            this.f12920d = mediaMetadata.f12905o;
            this.f12921e = mediaMetadata.f12906p;
            this.f12922f = mediaMetadata.f12907q;
            this.f12923g = mediaMetadata.f12908r;
            this.f12924h = mediaMetadata.f12909s;
            this.f12925i = mediaMetadata.f12910t;
            this.f12926j = mediaMetadata.f12911u;
            this.f12927k = mediaMetadata.f12912v;
            this.f12928l = mediaMetadata.f12913w;
            this.f12929m = mediaMetadata.f12914x;
            this.f12930n = mediaMetadata.f12915y;
            this.f12931o = mediaMetadata.f12916z;
            this.f12932p = mediaMetadata.A;
            this.f12933q = mediaMetadata.B;
            this.f12934r = mediaMetadata.D;
            this.f12935s = mediaMetadata.E;
            this.f12936t = mediaMetadata.F;
            this.f12937u = mediaMetadata.G;
            this.f12938v = mediaMetadata.H;
            this.f12939w = mediaMetadata.I;
            this.f12940x = mediaMetadata.J;
            this.f12941y = mediaMetadata.K;
            this.f12942z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f12876a0));
        byte[] byteArray = bundle.getByteArray(f12879d0);
        String str = f12898w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f12880e0)).r0(bundle.getCharSequence(f12891p0)).S(bundle.getCharSequence(f12892q0)).T(bundle.getCharSequence(f12893r0)).Z(bundle.getCharSequence(f12896u0)).R(bundle.getCharSequence(f12897v0)).k0(bundle.getCharSequence(f12899x0)).X(bundle.getBundle(A0));
        String str2 = f12877b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f14168e.a(bundle3));
        }
        String str3 = f12878c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f14168e.a(bundle2));
        }
        String str4 = f12881f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f12882g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f12883h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f12901z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f12884i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f12885j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f12886k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f12887l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f12888m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f12889n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f12890o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f12894s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f12895t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f12900y0;
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
            if (ne.w0.c(this.f12902d, mediaMetadata.f12902d) && ne.w0.c(this.f12903e, mediaMetadata.f12903e) && ne.w0.c(this.f12904i, mediaMetadata.f12904i) && ne.w0.c(this.f12905o, mediaMetadata.f12905o) && ne.w0.c(this.f12906p, mediaMetadata.f12906p) && ne.w0.c(this.f12907q, mediaMetadata.f12907q) && ne.w0.c(this.f12908r, mediaMetadata.f12908r) && ne.w0.c(this.f12909s, mediaMetadata.f12909s) && ne.w0.c(this.f12910t, mediaMetadata.f12910t) && Arrays.equals(this.f12911u, mediaMetadata.f12911u) && ne.w0.c(this.f12912v, mediaMetadata.f12912v) && ne.w0.c(this.f12913w, mediaMetadata.f12913w) && ne.w0.c(this.f12914x, mediaMetadata.f12914x) && ne.w0.c(this.f12915y, mediaMetadata.f12915y) && ne.w0.c(this.f12916z, mediaMetadata.f12916z) && ne.w0.c(this.A, mediaMetadata.A) && ne.w0.c(this.B, mediaMetadata.B) && ne.w0.c(this.D, mediaMetadata.D) && ne.w0.c(this.E, mediaMetadata.E) && ne.w0.c(this.F, mediaMetadata.F) && ne.w0.c(this.G, mediaMetadata.G) && ne.w0.c(this.H, mediaMetadata.H) && ne.w0.c(this.I, mediaMetadata.I) && ne.w0.c(this.J, mediaMetadata.J) && ne.w0.c(this.K, mediaMetadata.K) && ne.w0.c(this.L, mediaMetadata.L) && ne.w0.c(this.M, mediaMetadata.M) && ne.w0.c(this.N, mediaMetadata.N) && ne.w0.c(this.O, mediaMetadata.O) && ne.w0.c(this.P, mediaMetadata.P) && ne.w0.c(this.Q, mediaMetadata.Q) && ne.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f12902d, this.f12903e, this.f12904i, this.f12905o, this.f12906p, this.f12907q, this.f12908r, this.f12909s, this.f12910t, Integer.valueOf(Arrays.hashCode(this.f12911u)), this.f12912v, this.f12913w, this.f12914x, this.f12915y, this.f12916z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f12932p;
        Integer num = bVar.f12931o;
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
        this.f12902d = bVar.f12917a;
        this.f12903e = bVar.f12918b;
        this.f12904i = bVar.f12919c;
        this.f12905o = bVar.f12920d;
        this.f12906p = bVar.f12921e;
        this.f12907q = bVar.f12922f;
        this.f12908r = bVar.f12923g;
        this.f12909s = bVar.f12924h;
        this.f12910t = bVar.f12925i;
        this.f12911u = bVar.f12926j;
        this.f12912v = bVar.f12927k;
        this.f12913w = bVar.f12928l;
        this.f12914x = bVar.f12929m;
        this.f12915y = bVar.f12930n;
        this.f12916z = num;
        this.A = bool;
        this.B = bVar.f12933q;
        this.C = bVar.f12934r;
        this.D = bVar.f12934r;
        this.E = bVar.f12935s;
        this.F = bVar.f12936t;
        this.G = bVar.f12937u;
        this.H = bVar.f12938v;
        this.I = bVar.f12939w;
        this.J = bVar.f12940x;
        this.K = bVar.f12941y;
        this.L = bVar.f12942z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
