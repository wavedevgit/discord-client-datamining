package zd;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.text.Layout;
import android.text.Spanned;
import android.text.SpannedString;
import android.text.TextUtils;
import com.google.android.exoplayer2.g;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements com.google.android.exoplayer2.g {
    public static final b C = new C0784b().o("").a();
    private static final String D = w0.B0(0);
    private static final String E = w0.B0(1);
    private static final String F = w0.B0(2);
    private static final String G = w0.B0(3);
    private static final String H = w0.B0(4);
    private static final String I = w0.B0(5);
    private static final String J = w0.B0(6);
    private static final String K = w0.B0(7);
    private static final String L = w0.B0(8);
    private static final String M = w0.B0(9);
    private static final String N = w0.B0(10);
    private static final String O = w0.B0(11);
    private static final String P = w0.B0(12);
    private static final String Q = w0.B0(13);
    private static final String R = w0.B0(14);
    private static final String S = w0.B0(15);
    private static final String T = w0.B0(16);
    public static final g.a U = new g.a() { // from class: zd.a
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            b c10;
            c10 = b.c(bundle);
            return c10;
        }
    };
    public final int A;
    public final float B;

    /* renamed from: d  reason: collision with root package name */
    public final CharSequence f55873d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55874e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55875i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55876o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55877p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55878q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55879r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55880s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55881t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55882u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55883v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55884w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55885x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55886y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55887z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0784b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55888a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55889b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55890c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55891d;

        /* renamed from: e  reason: collision with root package name */
        private float f55892e;

        /* renamed from: f  reason: collision with root package name */
        private int f55893f;

        /* renamed from: g  reason: collision with root package name */
        private int f55894g;

        /* renamed from: h  reason: collision with root package name */
        private float f55895h;

        /* renamed from: i  reason: collision with root package name */
        private int f55896i;

        /* renamed from: j  reason: collision with root package name */
        private int f55897j;

        /* renamed from: k  reason: collision with root package name */
        private float f55898k;

        /* renamed from: l  reason: collision with root package name */
        private float f55899l;

        /* renamed from: m  reason: collision with root package name */
        private float f55900m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55901n;

        /* renamed from: o  reason: collision with root package name */
        private int f55902o;

        /* renamed from: p  reason: collision with root package name */
        private int f55903p;

        /* renamed from: q  reason: collision with root package name */
        private float f55904q;

        public b a() {
            return new b(this.f55888a, this.f55890c, this.f55891d, this.f55889b, this.f55892e, this.f55893f, this.f55894g, this.f55895h, this.f55896i, this.f55897j, this.f55898k, this.f55899l, this.f55900m, this.f55901n, this.f55902o, this.f55903p, this.f55904q);
        }

        public C0784b b() {
            this.f55901n = false;
            return this;
        }

        public int c() {
            return this.f55894g;
        }

        public int d() {
            return this.f55896i;
        }

        public CharSequence e() {
            return this.f55888a;
        }

        public C0784b f(Bitmap bitmap) {
            this.f55889b = bitmap;
            return this;
        }

        public C0784b g(float f10) {
            this.f55900m = f10;
            return this;
        }

        public C0784b h(float f10, int i10) {
            this.f55892e = f10;
            this.f55893f = i10;
            return this;
        }

        public C0784b i(int i10) {
            this.f55894g = i10;
            return this;
        }

        public C0784b j(Layout.Alignment alignment) {
            this.f55891d = alignment;
            return this;
        }

        public C0784b k(float f10) {
            this.f55895h = f10;
            return this;
        }

        public C0784b l(int i10) {
            this.f55896i = i10;
            return this;
        }

        public C0784b m(float f10) {
            this.f55904q = f10;
            return this;
        }

        public C0784b n(float f10) {
            this.f55899l = f10;
            return this;
        }

        public C0784b o(CharSequence charSequence) {
            this.f55888a = charSequence;
            return this;
        }

        public C0784b p(Layout.Alignment alignment) {
            this.f55890c = alignment;
            return this;
        }

        public C0784b q(float f10, int i10) {
            this.f55898k = f10;
            this.f55897j = i10;
            return this;
        }

        public C0784b r(int i10) {
            this.f55903p = i10;
            return this;
        }

        public C0784b s(int i10) {
            this.f55902o = i10;
            this.f55901n = true;
            return this;
        }

        public C0784b() {
            this.f55888a = null;
            this.f55889b = null;
            this.f55890c = null;
            this.f55891d = null;
            this.f55892e = -3.4028235E38f;
            this.f55893f = Integer.MIN_VALUE;
            this.f55894g = Integer.MIN_VALUE;
            this.f55895h = -3.4028235E38f;
            this.f55896i = Integer.MIN_VALUE;
            this.f55897j = Integer.MIN_VALUE;
            this.f55898k = -3.4028235E38f;
            this.f55899l = -3.4028235E38f;
            this.f55900m = -3.4028235E38f;
            this.f55901n = false;
            this.f55902o = -16777216;
            this.f55903p = Integer.MIN_VALUE;
        }

        private C0784b(b bVar) {
            this.f55888a = bVar.f55873d;
            this.f55889b = bVar.f55876o;
            this.f55890c = bVar.f55874e;
            this.f55891d = bVar.f55875i;
            this.f55892e = bVar.f55877p;
            this.f55893f = bVar.f55878q;
            this.f55894g = bVar.f55879r;
            this.f55895h = bVar.f55880s;
            this.f55896i = bVar.f55881t;
            this.f55897j = bVar.f55886y;
            this.f55898k = bVar.f55887z;
            this.f55899l = bVar.f55882u;
            this.f55900m = bVar.f55883v;
            this.f55901n = bVar.f55884w;
            this.f55902o = bVar.f55885x;
            this.f55903p = bVar.A;
            this.f55904q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0784b c0784b = new C0784b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0784b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0784b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0784b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0784b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0784b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0784b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0784b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0784b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0784b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0784b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0784b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0784b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0784b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0784b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0784b.m(bundle.getFloat(str12));
        }
        return c0784b.a();
    }

    public C0784b b() {
        return new C0784b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f55873d, bVar.f55873d) && this.f55874e == bVar.f55874e && this.f55875i == bVar.f55875i && ((bitmap = this.f55876o) != null ? !((bitmap2 = bVar.f55876o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55876o == null) && this.f55877p == bVar.f55877p && this.f55878q == bVar.f55878q && this.f55879r == bVar.f55879r && this.f55880s == bVar.f55880s && this.f55881t == bVar.f55881t && this.f55882u == bVar.f55882u && this.f55883v == bVar.f55883v && this.f55884w == bVar.f55884w && this.f55885x == bVar.f55885x && this.f55886y == bVar.f55886y && this.f55887z == bVar.f55887z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f55873d, this.f55874e, this.f55875i, this.f55876o, Float.valueOf(this.f55877p), Integer.valueOf(this.f55878q), Integer.valueOf(this.f55879r), Float.valueOf(this.f55880s), Integer.valueOf(this.f55881t), Float.valueOf(this.f55882u), Float.valueOf(this.f55883v), Boolean.valueOf(this.f55884w), Integer.valueOf(this.f55885x), Integer.valueOf(this.f55886y), Float.valueOf(this.f55887z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55873d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55873d = charSequence.toString();
        } else {
            this.f55873d = null;
        }
        this.f55874e = alignment;
        this.f55875i = alignment2;
        this.f55876o = bitmap;
        this.f55877p = f10;
        this.f55878q = i10;
        this.f55879r = i11;
        this.f55880s = f11;
        this.f55881t = i12;
        this.f55882u = f13;
        this.f55883v = f14;
        this.f55884w = z10;
        this.f55885x = i14;
        this.f55886y = i13;
        this.f55887z = f12;
        this.A = i15;
        this.B = f15;
    }
}
