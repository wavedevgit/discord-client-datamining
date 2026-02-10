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
    public final CharSequence f12500d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f12501e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f12502i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f12503o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f12504p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f12505q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f12506r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f12507s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f12508t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f12509u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f12510v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f12511w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f12512x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f12513y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f12514z;
    public static final MediaMetadata T = new b().H();
    private static final String U = oe.w0.B0(0);
    private static final String V = oe.w0.B0(1);
    private static final String W = oe.w0.B0(2);
    private static final String X = oe.w0.B0(3);
    private static final String Y = oe.w0.B0(4);
    private static final String Z = oe.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12474a0 = oe.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12475b0 = oe.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12476c0 = oe.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12477d0 = oe.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12478e0 = oe.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12479f0 = oe.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12480g0 = oe.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12481h0 = oe.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12482i0 = oe.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12483j0 = oe.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12484k0 = oe.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12485l0 = oe.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12486m0 = oe.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12487n0 = oe.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12488o0 = oe.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12489p0 = oe.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12490q0 = oe.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12491r0 = oe.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12492s0 = oe.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12493t0 = oe.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12494u0 = oe.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12495v0 = oe.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12496w0 = oe.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12497x0 = oe.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12498y0 = oe.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12499z0 = oe.w0.B0(32);
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
        private CharSequence f12515a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f12516b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f12517c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f12518d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f12519e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f12520f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f12521g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f12522h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f12523i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f12524j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f12525k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f12526l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f12527m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f12528n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f12529o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f12530p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f12531q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f12532r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f12533s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f12534t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f12535u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f12536v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f12537w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f12538x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f12539y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f12540z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f12524j != null && !oe.w0.c(Integer.valueOf(i10), 3) && oe.w0.c(this.f12525k, 3)) {
                return this;
            }
            this.f12524j = (byte[]) bArr.clone();
            this.f12525k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f12500d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f12501e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f12502i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f12503o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f12504p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f12505q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f12506r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f12507s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f12508t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f12509u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f12510v);
                }
                Uri uri = mediaMetadata.f12511w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f12512x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f12513y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f12514z;
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
            this.f12518d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f12517c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f12516b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f12524j = bArr2;
            this.f12525k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f12526l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f12539y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f12540z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f12521g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f12519e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f12529o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f12530p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f12531q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f12523i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f12534t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f12533s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f12532r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f12537w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f12536v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f12535u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f12520f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f12515a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f12528n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f12527m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f12522h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f12538x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f12515a = mediaMetadata.f12500d;
            this.f12516b = mediaMetadata.f12501e;
            this.f12517c = mediaMetadata.f12502i;
            this.f12518d = mediaMetadata.f12503o;
            this.f12519e = mediaMetadata.f12504p;
            this.f12520f = mediaMetadata.f12505q;
            this.f12521g = mediaMetadata.f12506r;
            this.f12522h = mediaMetadata.f12507s;
            this.f12523i = mediaMetadata.f12508t;
            this.f12524j = mediaMetadata.f12509u;
            this.f12525k = mediaMetadata.f12510v;
            this.f12526l = mediaMetadata.f12511w;
            this.f12527m = mediaMetadata.f12512x;
            this.f12528n = mediaMetadata.f12513y;
            this.f12529o = mediaMetadata.f12514z;
            this.f12530p = mediaMetadata.A;
            this.f12531q = mediaMetadata.B;
            this.f12532r = mediaMetadata.D;
            this.f12533s = mediaMetadata.E;
            this.f12534t = mediaMetadata.F;
            this.f12535u = mediaMetadata.G;
            this.f12536v = mediaMetadata.H;
            this.f12537w = mediaMetadata.I;
            this.f12538x = mediaMetadata.J;
            this.f12539y = mediaMetadata.K;
            this.f12540z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f12474a0));
        byte[] byteArray = bundle.getByteArray(f12477d0);
        String str = f12496w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f12478e0)).r0(bundle.getCharSequence(f12489p0)).S(bundle.getCharSequence(f12490q0)).T(bundle.getCharSequence(f12491r0)).Z(bundle.getCharSequence(f12494u0)).R(bundle.getCharSequence(f12495v0)).k0(bundle.getCharSequence(f12497x0)).X(bundle.getBundle(A0));
        String str2 = f12475b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f13828e.a(bundle3));
        }
        String str3 = f12476c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f13828e.a(bundle2));
        }
        String str4 = f12479f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f12480g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f12481h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f12499z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f12482i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f12483j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f12484k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f12485l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f12486m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f12487n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f12488o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f12492s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f12493t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f12498y0;
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
            if (oe.w0.c(this.f12500d, mediaMetadata.f12500d) && oe.w0.c(this.f12501e, mediaMetadata.f12501e) && oe.w0.c(this.f12502i, mediaMetadata.f12502i) && oe.w0.c(this.f12503o, mediaMetadata.f12503o) && oe.w0.c(this.f12504p, mediaMetadata.f12504p) && oe.w0.c(this.f12505q, mediaMetadata.f12505q) && oe.w0.c(this.f12506r, mediaMetadata.f12506r) && oe.w0.c(this.f12507s, mediaMetadata.f12507s) && oe.w0.c(this.f12508t, mediaMetadata.f12508t) && Arrays.equals(this.f12509u, mediaMetadata.f12509u) && oe.w0.c(this.f12510v, mediaMetadata.f12510v) && oe.w0.c(this.f12511w, mediaMetadata.f12511w) && oe.w0.c(this.f12512x, mediaMetadata.f12512x) && oe.w0.c(this.f12513y, mediaMetadata.f12513y) && oe.w0.c(this.f12514z, mediaMetadata.f12514z) && oe.w0.c(this.A, mediaMetadata.A) && oe.w0.c(this.B, mediaMetadata.B) && oe.w0.c(this.D, mediaMetadata.D) && oe.w0.c(this.E, mediaMetadata.E) && oe.w0.c(this.F, mediaMetadata.F) && oe.w0.c(this.G, mediaMetadata.G) && oe.w0.c(this.H, mediaMetadata.H) && oe.w0.c(this.I, mediaMetadata.I) && oe.w0.c(this.J, mediaMetadata.J) && oe.w0.c(this.K, mediaMetadata.K) && oe.w0.c(this.L, mediaMetadata.L) && oe.w0.c(this.M, mediaMetadata.M) && oe.w0.c(this.N, mediaMetadata.N) && oe.w0.c(this.O, mediaMetadata.O) && oe.w0.c(this.P, mediaMetadata.P) && oe.w0.c(this.Q, mediaMetadata.Q) && oe.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f12500d, this.f12501e, this.f12502i, this.f12503o, this.f12504p, this.f12505q, this.f12506r, this.f12507s, this.f12508t, Integer.valueOf(Arrays.hashCode(this.f12509u)), this.f12510v, this.f12511w, this.f12512x, this.f12513y, this.f12514z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f12530p;
        Integer num = bVar.f12529o;
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
        this.f12500d = bVar.f12515a;
        this.f12501e = bVar.f12516b;
        this.f12502i = bVar.f12517c;
        this.f12503o = bVar.f12518d;
        this.f12504p = bVar.f12519e;
        this.f12505q = bVar.f12520f;
        this.f12506r = bVar.f12521g;
        this.f12507s = bVar.f12522h;
        this.f12508t = bVar.f12523i;
        this.f12509u = bVar.f12524j;
        this.f12510v = bVar.f12525k;
        this.f12511w = bVar.f12526l;
        this.f12512x = bVar.f12527m;
        this.f12513y = bVar.f12528n;
        this.f12514z = num;
        this.A = bool;
        this.B = bVar.f12531q;
        this.C = bVar.f12532r;
        this.D = bVar.f12532r;
        this.E = bVar.f12533s;
        this.F = bVar.f12534t;
        this.G = bVar.f12535u;
        this.H = bVar.f12536v;
        this.I = bVar.f12537w;
        this.J = bVar.f12538x;
        this.K = bVar.f12539y;
        this.L = bVar.f12540z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
