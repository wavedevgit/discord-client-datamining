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
    public final CharSequence f12501d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f12502e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f12503i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f12504o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f12505p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f12506q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f12507r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f12508s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f12509t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f12510u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f12511v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f12512w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f12513x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f12514y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f12515z;
    public static final MediaMetadata T = new b().H();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12475a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12476b0 = oe.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12477c0 = oe.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12478d0 = oe.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12479e0 = oe.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12480f0 = oe.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12481g0 = oe.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12482h0 = oe.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12483i0 = oe.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12484j0 = oe.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12485k0 = oe.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12486l0 = oe.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12487m0 = oe.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12488n0 = oe.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12489o0 = oe.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12490p0 = oe.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12491q0 = oe.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12492r0 = oe.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12493s0 = oe.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12494t0 = oe.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12495u0 = oe.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12496v0 = oe.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12497w0 = oe.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12498x0 = oe.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12499y0 = oe.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12500z0 = oe.w0.B0(32);
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
        private CharSequence f12516a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f12517b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f12518c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f12519d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f12520e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f12521f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f12522g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f12523h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f12524i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f12525j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f12526k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f12527l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f12528m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f12529n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f12530o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f12531p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f12532q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f12533r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f12534s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f12535t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f12536u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f12537v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f12538w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f12539x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f12540y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f12541z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f12525j != null && !oe.w0.c(Integer.valueOf(i10), 3) && oe.w0.c(this.f12526k, 3)) {
                return this;
            }
            this.f12525j = (byte[]) bArr.clone();
            this.f12526k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f12501d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f12502e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f12503i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f12504o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f12505p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f12506q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f12507r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f12508s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f12509t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f12510u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f12511v);
                }
                Uri uri = mediaMetadata.f12512w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f12513x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f12514y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f12515z;
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
                metadata.d(i10).f1(this);
            }
            return this;
        }

        public b L(List list) {
            for (int i10 = 0; i10 < list.size(); i10++) {
                Metadata metadata = (Metadata) list.get(i10);
                for (int i11 = 0; i11 < metadata.e(); i11++) {
                    metadata.d(i11).f1(this);
                }
            }
            return this;
        }

        public b M(CharSequence charSequence) {
            this.f12519d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f12518c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f12517b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f12525j = bArr2;
            this.f12526k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f12527l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f12540y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f12541z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f12522g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f12520e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f12530o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f12531p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f12532q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f12524i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f12535t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f12534s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f12533r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f12538w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f12537v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f12536u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f12521f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f12516a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f12529n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f12528m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f12523h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f12539x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f12516a = mediaMetadata.f12501d;
            this.f12517b = mediaMetadata.f12502e;
            this.f12518c = mediaMetadata.f12503i;
            this.f12519d = mediaMetadata.f12504o;
            this.f12520e = mediaMetadata.f12505p;
            this.f12521f = mediaMetadata.f12506q;
            this.f12522g = mediaMetadata.f12507r;
            this.f12523h = mediaMetadata.f12508s;
            this.f12524i = mediaMetadata.f12509t;
            this.f12525j = mediaMetadata.f12510u;
            this.f12526k = mediaMetadata.f12511v;
            this.f12527l = mediaMetadata.f12512w;
            this.f12528m = mediaMetadata.f12513x;
            this.f12529n = mediaMetadata.f12514y;
            this.f12530o = mediaMetadata.f12515z;
            this.f12531p = mediaMetadata.A;
            this.f12532q = mediaMetadata.B;
            this.f12533r = mediaMetadata.D;
            this.f12534s = mediaMetadata.E;
            this.f12535t = mediaMetadata.F;
            this.f12536u = mediaMetadata.G;
            this.f12537v = mediaMetadata.H;
            this.f12538w = mediaMetadata.I;
            this.f12539x = mediaMetadata.J;
            this.f12540y = mediaMetadata.K;
            this.f12541z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f12475a0));
        byte[] byteArray = bundle.getByteArray(f12478d0);
        String str = f12497w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f12479e0)).r0(bundle.getCharSequence(f12490p0)).S(bundle.getCharSequence(f12491q0)).T(bundle.getCharSequence(f12492r0)).Z(bundle.getCharSequence(f12495u0)).R(bundle.getCharSequence(f12496v0)).k0(bundle.getCharSequence(f12498x0)).X(bundle.getBundle(A0));
        String str2 = f12476b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f13829e.a(bundle3));
        }
        String str3 = f12477c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f13829e.a(bundle2));
        }
        String str4 = f12480f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f12481g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f12482h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f12500z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f12483i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f12484j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f12485k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f12486l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f12487m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f12488n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f12489o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f12493s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f12494t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f12499y0;
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
            if (oe.w0.c(this.f12501d, mediaMetadata.f12501d) && oe.w0.c(this.f12502e, mediaMetadata.f12502e) && oe.w0.c(this.f12503i, mediaMetadata.f12503i) && oe.w0.c(this.f12504o, mediaMetadata.f12504o) && oe.w0.c(this.f12505p, mediaMetadata.f12505p) && oe.w0.c(this.f12506q, mediaMetadata.f12506q) && oe.w0.c(this.f12507r, mediaMetadata.f12507r) && oe.w0.c(this.f12508s, mediaMetadata.f12508s) && oe.w0.c(this.f12509t, mediaMetadata.f12509t) && Arrays.equals(this.f12510u, mediaMetadata.f12510u) && oe.w0.c(this.f12511v, mediaMetadata.f12511v) && oe.w0.c(this.f12512w, mediaMetadata.f12512w) && oe.w0.c(this.f12513x, mediaMetadata.f12513x) && oe.w0.c(this.f12514y, mediaMetadata.f12514y) && oe.w0.c(this.f12515z, mediaMetadata.f12515z) && oe.w0.c(this.A, mediaMetadata.A) && oe.w0.c(this.B, mediaMetadata.B) && oe.w0.c(this.D, mediaMetadata.D) && oe.w0.c(this.E, mediaMetadata.E) && oe.w0.c(this.F, mediaMetadata.F) && oe.w0.c(this.G, mediaMetadata.G) && oe.w0.c(this.H, mediaMetadata.H) && oe.w0.c(this.I, mediaMetadata.I) && oe.w0.c(this.J, mediaMetadata.J) && oe.w0.c(this.K, mediaMetadata.K) && oe.w0.c(this.L, mediaMetadata.L) && oe.w0.c(this.M, mediaMetadata.M) && oe.w0.c(this.N, mediaMetadata.N) && oe.w0.c(this.O, mediaMetadata.O) && oe.w0.c(this.P, mediaMetadata.P) && oe.w0.c(this.Q, mediaMetadata.Q) && oe.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f12501d, this.f12502e, this.f12503i, this.f12504o, this.f12505p, this.f12506q, this.f12507r, this.f12508s, this.f12509t, Integer.valueOf(Arrays.hashCode(this.f12510u)), this.f12511v, this.f12512w, this.f12513x, this.f12514y, this.f12515z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f12531p;
        Integer num = bVar.f12530o;
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
        this.f12501d = bVar.f12516a;
        this.f12502e = bVar.f12517b;
        this.f12503i = bVar.f12518c;
        this.f12504o = bVar.f12519d;
        this.f12505p = bVar.f12520e;
        this.f12506q = bVar.f12521f;
        this.f12507r = bVar.f12522g;
        this.f12508s = bVar.f12523h;
        this.f12509t = bVar.f12524i;
        this.f12510u = bVar.f12525j;
        this.f12511v = bVar.f12526k;
        this.f12512w = bVar.f12527l;
        this.f12513x = bVar.f12528m;
        this.f12514y = bVar.f12529n;
        this.f12515z = num;
        this.A = bool;
        this.B = bVar.f12532q;
        this.C = bVar.f12533r;
        this.D = bVar.f12533r;
        this.E = bVar.f12534s;
        this.F = bVar.f12535t;
        this.G = bVar.f12536u;
        this.H = bVar.f12537v;
        this.I = bVar.f12538w;
        this.J = bVar.f12539x;
        this.K = bVar.f12540y;
        this.L = bVar.f12541z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
