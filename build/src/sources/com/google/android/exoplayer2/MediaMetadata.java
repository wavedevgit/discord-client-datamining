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
    public final CharSequence f11884d;

    /* renamed from: e  reason: collision with root package name */
    public final CharSequence f11885e;

    /* renamed from: i  reason: collision with root package name */
    public final CharSequence f11886i;

    /* renamed from: o  reason: collision with root package name */
    public final CharSequence f11887o;

    /* renamed from: p  reason: collision with root package name */
    public final CharSequence f11888p;

    /* renamed from: q  reason: collision with root package name */
    public final CharSequence f11889q;

    /* renamed from: r  reason: collision with root package name */
    public final CharSequence f11890r;

    /* renamed from: s  reason: collision with root package name */
    public final u1 f11891s;

    /* renamed from: t  reason: collision with root package name */
    public final u1 f11892t;

    /* renamed from: u  reason: collision with root package name */
    public final byte[] f11893u;

    /* renamed from: v  reason: collision with root package name */
    public final Integer f11894v;

    /* renamed from: w  reason: collision with root package name */
    public final Uri f11895w;

    /* renamed from: x  reason: collision with root package name */
    public final Integer f11896x;

    /* renamed from: y  reason: collision with root package name */
    public final Integer f11897y;

    /* renamed from: z  reason: collision with root package name */
    public final Integer f11898z;
    public static final MediaMetadata T = new b().H();
    private static final String U = ne.w0.B0(0);
    private static final String V = ne.w0.B0(1);
    private static final String W = ne.w0.B0(2);
    private static final String X = ne.w0.B0(3);
    private static final String Y = ne.w0.B0(4);
    private static final String Z = ne.w0.B0(5);

    /* renamed from: a0  reason: collision with root package name */
    private static final String f11858a0 = ne.w0.B0(6);

    /* renamed from: b0  reason: collision with root package name */
    private static final String f11859b0 = ne.w0.B0(8);

    /* renamed from: c0  reason: collision with root package name */
    private static final String f11860c0 = ne.w0.B0(9);

    /* renamed from: d0  reason: collision with root package name */
    private static final String f11861d0 = ne.w0.B0(10);

    /* renamed from: e0  reason: collision with root package name */
    private static final String f11862e0 = ne.w0.B0(11);

    /* renamed from: f0  reason: collision with root package name */
    private static final String f11863f0 = ne.w0.B0(12);

    /* renamed from: g0  reason: collision with root package name */
    private static final String f11864g0 = ne.w0.B0(13);

    /* renamed from: h0  reason: collision with root package name */
    private static final String f11865h0 = ne.w0.B0(14);

    /* renamed from: i0  reason: collision with root package name */
    private static final String f11866i0 = ne.w0.B0(15);

    /* renamed from: j0  reason: collision with root package name */
    private static final String f11867j0 = ne.w0.B0(16);

    /* renamed from: k0  reason: collision with root package name */
    private static final String f11868k0 = ne.w0.B0(17);

    /* renamed from: l0  reason: collision with root package name */
    private static final String f11869l0 = ne.w0.B0(18);

    /* renamed from: m0  reason: collision with root package name */
    private static final String f11870m0 = ne.w0.B0(19);

    /* renamed from: n0  reason: collision with root package name */
    private static final String f11871n0 = ne.w0.B0(20);

    /* renamed from: o0  reason: collision with root package name */
    private static final String f11872o0 = ne.w0.B0(21);

    /* renamed from: p0  reason: collision with root package name */
    private static final String f11873p0 = ne.w0.B0(22);

    /* renamed from: q0  reason: collision with root package name */
    private static final String f11874q0 = ne.w0.B0(23);

    /* renamed from: r0  reason: collision with root package name */
    private static final String f11875r0 = ne.w0.B0(24);

    /* renamed from: s0  reason: collision with root package name */
    private static final String f11876s0 = ne.w0.B0(25);

    /* renamed from: t0  reason: collision with root package name */
    private static final String f11877t0 = ne.w0.B0(26);

    /* renamed from: u0  reason: collision with root package name */
    private static final String f11878u0 = ne.w0.B0(27);

    /* renamed from: v0  reason: collision with root package name */
    private static final String f11879v0 = ne.w0.B0(28);

    /* renamed from: w0  reason: collision with root package name */
    private static final String f11880w0 = ne.w0.B0(29);

    /* renamed from: x0  reason: collision with root package name */
    private static final String f11881x0 = ne.w0.B0(30);

    /* renamed from: y0  reason: collision with root package name */
    private static final String f11882y0 = ne.w0.B0(31);

    /* renamed from: z0  reason: collision with root package name */
    private static final String f11883z0 = ne.w0.B0(32);
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
        private CharSequence f11899a;

        /* renamed from: b  reason: collision with root package name */
        private CharSequence f11900b;

        /* renamed from: c  reason: collision with root package name */
        private CharSequence f11901c;

        /* renamed from: d  reason: collision with root package name */
        private CharSequence f11902d;

        /* renamed from: e  reason: collision with root package name */
        private CharSequence f11903e;

        /* renamed from: f  reason: collision with root package name */
        private CharSequence f11904f;

        /* renamed from: g  reason: collision with root package name */
        private CharSequence f11905g;

        /* renamed from: h  reason: collision with root package name */
        private u1 f11906h;

        /* renamed from: i  reason: collision with root package name */
        private u1 f11907i;

        /* renamed from: j  reason: collision with root package name */
        private byte[] f11908j;

        /* renamed from: k  reason: collision with root package name */
        private Integer f11909k;

        /* renamed from: l  reason: collision with root package name */
        private Uri f11910l;

        /* renamed from: m  reason: collision with root package name */
        private Integer f11911m;

        /* renamed from: n  reason: collision with root package name */
        private Integer f11912n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f11913o;

        /* renamed from: p  reason: collision with root package name */
        private Boolean f11914p;

        /* renamed from: q  reason: collision with root package name */
        private Boolean f11915q;

        /* renamed from: r  reason: collision with root package name */
        private Integer f11916r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f11917s;

        /* renamed from: t  reason: collision with root package name */
        private Integer f11918t;

        /* renamed from: u  reason: collision with root package name */
        private Integer f11919u;

        /* renamed from: v  reason: collision with root package name */
        private Integer f11920v;

        /* renamed from: w  reason: collision with root package name */
        private Integer f11921w;

        /* renamed from: x  reason: collision with root package name */
        private CharSequence f11922x;

        /* renamed from: y  reason: collision with root package name */
        private CharSequence f11923y;

        /* renamed from: z  reason: collision with root package name */
        private CharSequence f11924z;

        public MediaMetadata H() {
            return new MediaMetadata(this);
        }

        public b I(byte[] bArr, int i10) {
            if (this.f11908j != null && !ne.w0.c(Integer.valueOf(i10), 3) && ne.w0.c(this.f11909k, 3)) {
                return this;
            }
            this.f11908j = (byte[]) bArr.clone();
            this.f11909k = Integer.valueOf(i10);
            return this;
        }

        public b J(MediaMetadata mediaMetadata) {
            if (mediaMetadata != null) {
                CharSequence charSequence = mediaMetadata.f11884d;
                if (charSequence != null) {
                    m0(charSequence);
                }
                CharSequence charSequence2 = mediaMetadata.f11885e;
                if (charSequence2 != null) {
                    O(charSequence2);
                }
                CharSequence charSequence3 = mediaMetadata.f11886i;
                if (charSequence3 != null) {
                    N(charSequence3);
                }
                CharSequence charSequence4 = mediaMetadata.f11887o;
                if (charSequence4 != null) {
                    M(charSequence4);
                }
                CharSequence charSequence5 = mediaMetadata.f11888p;
                if (charSequence5 != null) {
                    W(charSequence5);
                }
                CharSequence charSequence6 = mediaMetadata.f11889q;
                if (charSequence6 != null) {
                    l0(charSequence6);
                }
                CharSequence charSequence7 = mediaMetadata.f11890r;
                if (charSequence7 != null) {
                    U(charSequence7);
                }
                u1 u1Var = mediaMetadata.f11891s;
                if (u1Var != null) {
                    q0(u1Var);
                }
                u1 u1Var2 = mediaMetadata.f11892t;
                if (u1Var2 != null) {
                    d0(u1Var2);
                }
                byte[] bArr = mediaMetadata.f11893u;
                if (bArr != null) {
                    P(bArr, mediaMetadata.f11894v);
                }
                Uri uri = mediaMetadata.f11895w;
                if (uri != null) {
                    Q(uri);
                }
                Integer num = mediaMetadata.f11896x;
                if (num != null) {
                    p0(num);
                }
                Integer num2 = mediaMetadata.f11897y;
                if (num2 != null) {
                    o0(num2);
                }
                Integer num3 = mediaMetadata.f11898z;
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
            this.f11902d = charSequence;
            return this;
        }

        public b N(CharSequence charSequence) {
            this.f11901c = charSequence;
            return this;
        }

        public b O(CharSequence charSequence) {
            this.f11900b = charSequence;
            return this;
        }

        public b P(byte[] bArr, Integer num) {
            byte[] bArr2;
            if (bArr == null) {
                bArr2 = null;
            } else {
                bArr2 = (byte[]) bArr.clone();
            }
            this.f11908j = bArr2;
            this.f11909k = num;
            return this;
        }

        public b Q(Uri uri) {
            this.f11910l = uri;
            return this;
        }

        public b R(CharSequence charSequence) {
            this.D = charSequence;
            return this;
        }

        public b S(CharSequence charSequence) {
            this.f11923y = charSequence;
            return this;
        }

        public b T(CharSequence charSequence) {
            this.f11924z = charSequence;
            return this;
        }

        public b U(CharSequence charSequence) {
            this.f11905g = charSequence;
            return this;
        }

        public b V(Integer num) {
            this.A = num;
            return this;
        }

        public b W(CharSequence charSequence) {
            this.f11903e = charSequence;
            return this;
        }

        public b X(Bundle bundle) {
            this.G = bundle;
            return this;
        }

        public b Y(Integer num) {
            this.f11913o = num;
            return this;
        }

        public b Z(CharSequence charSequence) {
            this.C = charSequence;
            return this;
        }

        public b a0(Boolean bool) {
            this.f11914p = bool;
            return this;
        }

        public b b0(Boolean bool) {
            this.f11915q = bool;
            return this;
        }

        public b c0(Integer num) {
            this.F = num;
            return this;
        }

        public b d0(u1 u1Var) {
            this.f11907i = u1Var;
            return this;
        }

        public b e0(Integer num) {
            this.f11918t = num;
            return this;
        }

        public b f0(Integer num) {
            this.f11917s = num;
            return this;
        }

        public b g0(Integer num) {
            this.f11916r = num;
            return this;
        }

        public b h0(Integer num) {
            this.f11921w = num;
            return this;
        }

        public b i0(Integer num) {
            this.f11920v = num;
            return this;
        }

        public b j0(Integer num) {
            this.f11919u = num;
            return this;
        }

        public b k0(CharSequence charSequence) {
            this.E = charSequence;
            return this;
        }

        public b l0(CharSequence charSequence) {
            this.f11904f = charSequence;
            return this;
        }

        public b m0(CharSequence charSequence) {
            this.f11899a = charSequence;
            return this;
        }

        public b n0(Integer num) {
            this.B = num;
            return this;
        }

        public b o0(Integer num) {
            this.f11912n = num;
            return this;
        }

        public b p0(Integer num) {
            this.f11911m = num;
            return this;
        }

        public b q0(u1 u1Var) {
            this.f11906h = u1Var;
            return this;
        }

        public b r0(CharSequence charSequence) {
            this.f11922x = charSequence;
            return this;
        }

        public b() {
        }

        private b(MediaMetadata mediaMetadata) {
            this.f11899a = mediaMetadata.f11884d;
            this.f11900b = mediaMetadata.f11885e;
            this.f11901c = mediaMetadata.f11886i;
            this.f11902d = mediaMetadata.f11887o;
            this.f11903e = mediaMetadata.f11888p;
            this.f11904f = mediaMetadata.f11889q;
            this.f11905g = mediaMetadata.f11890r;
            this.f11906h = mediaMetadata.f11891s;
            this.f11907i = mediaMetadata.f11892t;
            this.f11908j = mediaMetadata.f11893u;
            this.f11909k = mediaMetadata.f11894v;
            this.f11910l = mediaMetadata.f11895w;
            this.f11911m = mediaMetadata.f11896x;
            this.f11912n = mediaMetadata.f11897y;
            this.f11913o = mediaMetadata.f11898z;
            this.f11914p = mediaMetadata.A;
            this.f11915q = mediaMetadata.B;
            this.f11916r = mediaMetadata.D;
            this.f11917s = mediaMetadata.E;
            this.f11918t = mediaMetadata.F;
            this.f11919u = mediaMetadata.G;
            this.f11920v = mediaMetadata.H;
            this.f11921w = mediaMetadata.I;
            this.f11922x = mediaMetadata.J;
            this.f11923y = mediaMetadata.K;
            this.f11924z = mediaMetadata.L;
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
        b U2 = bVar.m0(bundle.getCharSequence(U)).O(bundle.getCharSequence(V)).N(bundle.getCharSequence(W)).M(bundle.getCharSequence(X)).W(bundle.getCharSequence(Y)).l0(bundle.getCharSequence(Z)).U(bundle.getCharSequence(f11858a0));
        byte[] byteArray = bundle.getByteArray(f11861d0);
        String str = f11880w0;
        if (bundle.containsKey(str)) {
            num = Integer.valueOf(bundle.getInt(str));
        } else {
            num = null;
        }
        U2.P(byteArray, num).Q((Uri) bundle.getParcelable(f11862e0)).r0(bundle.getCharSequence(f11873p0)).S(bundle.getCharSequence(f11874q0)).T(bundle.getCharSequence(f11875r0)).Z(bundle.getCharSequence(f11878u0)).R(bundle.getCharSequence(f11879v0)).k0(bundle.getCharSequence(f11881x0)).X(bundle.getBundle(A0));
        String str2 = f11859b0;
        if (bundle.containsKey(str2) && (bundle3 = bundle.getBundle(str2)) != null) {
            bVar.q0((u1) u1.f13150e.a(bundle3));
        }
        String str3 = f11860c0;
        if (bundle.containsKey(str3) && (bundle2 = bundle.getBundle(str3)) != null) {
            bVar.d0((u1) u1.f13150e.a(bundle2));
        }
        String str4 = f11863f0;
        if (bundle.containsKey(str4)) {
            bVar.p0(Integer.valueOf(bundle.getInt(str4)));
        }
        String str5 = f11864g0;
        if (bundle.containsKey(str5)) {
            bVar.o0(Integer.valueOf(bundle.getInt(str5)));
        }
        String str6 = f11865h0;
        if (bundle.containsKey(str6)) {
            bVar.Y(Integer.valueOf(bundle.getInt(str6)));
        }
        String str7 = f11883z0;
        if (bundle.containsKey(str7)) {
            bVar.a0(Boolean.valueOf(bundle.getBoolean(str7)));
        }
        String str8 = f11866i0;
        if (bundle.containsKey(str8)) {
            bVar.b0(Boolean.valueOf(bundle.getBoolean(str8)));
        }
        String str9 = f11867j0;
        if (bundle.containsKey(str9)) {
            bVar.g0(Integer.valueOf(bundle.getInt(str9)));
        }
        String str10 = f11868k0;
        if (bundle.containsKey(str10)) {
            bVar.f0(Integer.valueOf(bundle.getInt(str10)));
        }
        String str11 = f11869l0;
        if (bundle.containsKey(str11)) {
            bVar.e0(Integer.valueOf(bundle.getInt(str11)));
        }
        String str12 = f11870m0;
        if (bundle.containsKey(str12)) {
            bVar.j0(Integer.valueOf(bundle.getInt(str12)));
        }
        String str13 = f11871n0;
        if (bundle.containsKey(str13)) {
            bVar.i0(Integer.valueOf(bundle.getInt(str13)));
        }
        String str14 = f11872o0;
        if (bundle.containsKey(str14)) {
            bVar.h0(Integer.valueOf(bundle.getInt(str14)));
        }
        String str15 = f11876s0;
        if (bundle.containsKey(str15)) {
            bVar.V(Integer.valueOf(bundle.getInt(str15)));
        }
        String str16 = f11877t0;
        if (bundle.containsKey(str16)) {
            bVar.n0(Integer.valueOf(bundle.getInt(str16)));
        }
        String str17 = f11882y0;
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
            if (ne.w0.c(this.f11884d, mediaMetadata.f11884d) && ne.w0.c(this.f11885e, mediaMetadata.f11885e) && ne.w0.c(this.f11886i, mediaMetadata.f11886i) && ne.w0.c(this.f11887o, mediaMetadata.f11887o) && ne.w0.c(this.f11888p, mediaMetadata.f11888p) && ne.w0.c(this.f11889q, mediaMetadata.f11889q) && ne.w0.c(this.f11890r, mediaMetadata.f11890r) && ne.w0.c(this.f11891s, mediaMetadata.f11891s) && ne.w0.c(this.f11892t, mediaMetadata.f11892t) && Arrays.equals(this.f11893u, mediaMetadata.f11893u) && ne.w0.c(this.f11894v, mediaMetadata.f11894v) && ne.w0.c(this.f11895w, mediaMetadata.f11895w) && ne.w0.c(this.f11896x, mediaMetadata.f11896x) && ne.w0.c(this.f11897y, mediaMetadata.f11897y) && ne.w0.c(this.f11898z, mediaMetadata.f11898z) && ne.w0.c(this.A, mediaMetadata.A) && ne.w0.c(this.B, mediaMetadata.B) && ne.w0.c(this.D, mediaMetadata.D) && ne.w0.c(this.E, mediaMetadata.E) && ne.w0.c(this.F, mediaMetadata.F) && ne.w0.c(this.G, mediaMetadata.G) && ne.w0.c(this.H, mediaMetadata.H) && ne.w0.c(this.I, mediaMetadata.I) && ne.w0.c(this.J, mediaMetadata.J) && ne.w0.c(this.K, mediaMetadata.K) && ne.w0.c(this.L, mediaMetadata.L) && ne.w0.c(this.M, mediaMetadata.M) && ne.w0.c(this.N, mediaMetadata.N) && ne.w0.c(this.O, mediaMetadata.O) && ne.w0.c(this.P, mediaMetadata.P) && ne.w0.c(this.Q, mediaMetadata.Q) && ne.w0.c(this.R, mediaMetadata.R)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return li.j.b(this.f11884d, this.f11885e, this.f11886i, this.f11887o, this.f11888p, this.f11889q, this.f11890r, this.f11891s, this.f11892t, Integer.valueOf(Arrays.hashCode(this.f11893u)), this.f11894v, this.f11895w, this.f11896x, this.f11897y, this.f11898z, this.A, this.B, this.D, this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q, this.R);
    }

    private MediaMetadata(b bVar) {
        Boolean bool = bVar.f11914p;
        Integer num = bVar.f11913o;
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
        this.f11884d = bVar.f11899a;
        this.f11885e = bVar.f11900b;
        this.f11886i = bVar.f11901c;
        this.f11887o = bVar.f11902d;
        this.f11888p = bVar.f11903e;
        this.f11889q = bVar.f11904f;
        this.f11890r = bVar.f11905g;
        this.f11891s = bVar.f11906h;
        this.f11892t = bVar.f11907i;
        this.f11893u = bVar.f11908j;
        this.f11894v = bVar.f11909k;
        this.f11895w = bVar.f11910l;
        this.f11896x = bVar.f11911m;
        this.f11897y = bVar.f11912n;
        this.f11898z = num;
        this.A = bool;
        this.B = bVar.f11915q;
        this.C = bVar.f11916r;
        this.D = bVar.f11916r;
        this.E = bVar.f11917s;
        this.F = bVar.f11918t;
        this.G = bVar.f11919u;
        this.H = bVar.f11920v;
        this.I = bVar.f11921w;
        this.J = bVar.f11922x;
        this.K = bVar.f11923y;
        this.L = bVar.f11924z;
        this.M = bVar.A;
        this.N = bVar.B;
        this.O = bVar.C;
        this.P = bVar.D;
        this.Q = bVar.E;
        this.R = num2;
        this.S = bVar.G;
    }
}
