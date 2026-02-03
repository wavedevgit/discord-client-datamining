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
    public final CharSequence f12531d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f12532e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f12533i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f12534o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f12535p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f12536q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f12537r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f12538s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f12539t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f12540u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f12541v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f12542w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f12543x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f12544y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f12545z;
    public static final MediaMetadata T = new b().H();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f12505a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f12506b0 = ne.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f12507c0 = ne.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f12508d0 = ne.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f12509e0 = ne.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f12510f0 = ne.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f12511g0 = ne.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f12512h0 = ne.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f12513i0 = ne.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f12514j0 = ne.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f12515k0 = ne.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f12516l0 = ne.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f12517m0 = ne.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f12518n0 = ne.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f12519o0 = ne.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f12520p0 = ne.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f12521q0 = ne.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f12522r0 = ne.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f12523s0 = ne.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f12524t0 = ne.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f12525u0 = ne.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f12526v0 = ne.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f12527w0 = ne.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f12528x0 = ne.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f12529y0 = ne.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f12530z0 = ne.w0.B0(32);
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
        private CharSequence f12546a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f12547b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f12548c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f12549d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f12550e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f12551f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f12552g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f12553h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f12554i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f12555j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f12556k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f12557l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f12558m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f12559n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f12560o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f12561p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f12562q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f12563r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f12564s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f12565t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f12566u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f12567v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f12568w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f12569x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f12570y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f12571z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f12555j != null && !ne.w0.c(Integer.valueOf(i10), 3) && ne.w0.c(this.f12556k, 3)) {
                return this;
            }
            this.f12555j = (byte[]) bArr.clone();
            this.f12556k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f12531d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f12532e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f12533i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f12534o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f12535p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f12536q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f12537r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f12538s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f12539t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f12540u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f12541v);
                }
                Uri uri = mediaMetadata.f12542w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f12543x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f12544y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f12545z;
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
            this.f12549d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f12548c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f12547b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f12555j = bArr2;
            this.f12556k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f12557l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f12570y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f12571z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f12552g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f12550e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f12560o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f12561p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f12562q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f12554i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f12565t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f12564s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f12563r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f12568w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f12567v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f12566u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f12551f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f12546a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f12559n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f12558m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f12553h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f12569x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f12546a = mediaMetadata.f12531d;
            this.f12547b = mediaMetadata.f12532e;
            this.f12548c = mediaMetadata.f12533i;
            this.f12549d = mediaMetadata.f12534o;
            this.f12550e = mediaMetadata.f12535p;
            this.f12551f = mediaMetadata.f12536q;
            this.f12552g = mediaMetadata.f12537r;
            this.f12553h = mediaMetadata.f12538s;
            this.f12554i = mediaMetadata.f12539t;
            this.f12555j = mediaMetadata.f12540u;
            this.f12556k = mediaMetadata.f12541v;
            this.f12557l = mediaMetadata.f12542w;
            this.f12558m = mediaMetadata.f12543x;
            this.f12559n = mediaMetadata.f12544y;
            this.f12560o = mediaMetadata.f12545z;
            this.f12561p = mediaMetadata.A;
            this.f12562q = mediaMetadata.B;
            this.f12563r = mediaMetadata.D;
            this.f12564s = mediaMetadata.E;
            this.f12565t = mediaMetadata.F;
            this.f12566u = mediaMetadata.G;
            this.f12567v = mediaMetadata.H;
            this.f12568w = mediaMetadata.I;
            this.f12569x = mediaMetadata.J;
            this.f12570y = mediaMetadata.K;
            this.f12571z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f12505a0));
        byte[] byteArray = bundle.getByteArray(f12508d0);
        String str = f12527w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f12509e0)).r0(bundle.getCharSequence(f12520p0)).S(bundle.getCharSequence(f12521q0)).T(bundle.getCharSequence(f12522r0)).Z(bundle.getCharSequence(f12525u0)).R(bundle.getCharSequence(f12526v0)).k0(bundle.getCharSequence(f12528x0)).X(bundle.getBundle(A0));
        String str2 = f12506b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f13797e.a(bundle3));
        }
        String str3 = f12507c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f13797e.a(bundle2));
        }
        String str4 = f12510f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f12511g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f12512h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f12530z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f12513i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f12514j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f12515k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f12516l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f12517m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f12518n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f12519o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f12523s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f12524t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f12529y0;
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
            if (ne.w0.c(this.f12531d, mediaMetadata.f12531d) && ne.w0.c(this.f12532e, mediaMetadata.f12532e) && ne.w0.c(this.f12533i, mediaMetadata.f12533i) && ne.w0.c(this.f12534o, mediaMetadata.f12534o) && ne.w0.c(this.f12535p, mediaMetadata.f12535p) && ne.w0.c(this.f12536q, mediaMetadata.f12536q) && ne.w0.c(this.f12537r, mediaMetadata.f12537r) && ne.w0.c(this.f12538s, mediaMetadata.f12538s) && ne.w0.c(this.f12539t, mediaMetadata.f12539t) && Arrays.equals(this.f12540u, mediaMetadata.f12540u) && ne.w0.c(this.f12541v, mediaMetadata.f12541v) && ne.w0.c(this.f12542w, mediaMetadata.f12542w) && ne.w0.c(this.f12543x, mediaMetadata.f12543x) && ne.w0.c(this.f12544y, mediaMetadata.f12544y) && ne.w0.c(this.f12545z, mediaMetadata.f12545z) && ne.w0.c(this.A, mediaMetadata.A) && ne.w0.c(this.B, mediaMetadata.B) && ne.w0.c(this.D, mediaMetadata.D) && ne.w0.c(this.E, mediaMetadata.E) && ne.w0.c(this.F, mediaMetadata.F) && ne.w0.c(this.G, mediaMetadata.G) && ne.w0.c(this.H, mediaMetadata.H) && ne.w0.c(this.I, mediaMetadata.I) && ne.w0.c(this.J, mediaMetadata.J) && ne.w0.c(this.K, mediaMetadata.K) && ne.w0.c(this.L, mediaMetadata.L) && ne.w0.c(this.M, mediaMetadata.M) && ne.w0.c(this.N, mediaMetadata.N) && ne.w0.c(this.O, mediaMetadata.O) && ne.w0.c(this.P, mediaMetadata.P) && ne.w0.c(this.Q, mediaMetadata.Q) && ne.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f12531d, this.f12532e, this.f12533i, this.f12534o, this.f12535p, this.f12536q, this.f12537r, this.f12538s, this.f12539t, Integer.valueOf(Arrays.hashCode(this.f12540u)), this.f12541v, this.f12542w, this.f12543x, this.f12544y, this.f12545z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f12561p;
        Integer num = bVar.f12560o;
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
        this.f12531d = bVar.f12546a;
        this.f12532e = bVar.f12547b;
        this.f12533i = bVar.f12548c;
        this.f12534o = bVar.f12549d;
        this.f12535p = bVar.f12550e;
        this.f12536q = bVar.f12551f;
        this.f12537r = bVar.f12552g;
        this.f12538s = bVar.f12553h;
        this.f12539t = bVar.f12554i;
        this.f12540u = bVar.f12555j;
        this.f12541v = bVar.f12556k;
        this.f12542w = bVar.f12557l;
        this.f12543x = bVar.f12558m;
        this.f12544y = bVar.f12559n;
        this.f12545z = num;
        this.A = bool;
        this.B = bVar.f12562q;
        this.C = bVar.f12563r;
        this.D = bVar.f12563r;
        this.E = bVar.f12564s;
        this.F = bVar.f12565t;
        this.G = bVar.f12566u;
        this.H = bVar.f12567v;
        this.I = bVar.f12568w;
        this.J = bVar.f12569x;
        this.K = bVar.f12570y;
        this.L = bVar.f12571z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
