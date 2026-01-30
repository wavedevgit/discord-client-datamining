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
    public static final b C = new C0779b().o("").a();
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
    public final CharSequence f55603d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55604e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55605i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55606o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55607p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55608q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55609r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55610s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55611t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55612u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55613v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55614w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55615x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55616y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55617z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0779b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55618a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55619b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55620c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55621d;

        /* renamed from: e  reason: collision with root package name */
        private float f55622e;

        /* renamed from: f  reason: collision with root package name */
        private int f55623f;

        /* renamed from: g  reason: collision with root package name */
        private int f55624g;

        /* renamed from: h  reason: collision with root package name */
        private float f55625h;

        /* renamed from: i  reason: collision with root package name */
        private int f55626i;

        /* renamed from: j  reason: collision with root package name */
        private int f55627j;

        /* renamed from: k  reason: collision with root package name */
        private float f55628k;

        /* renamed from: l  reason: collision with root package name */
        private float f55629l;

        /* renamed from: m  reason: collision with root package name */
        private float f55630m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55631n;

        /* renamed from: o  reason: collision with root package name */
        private int f55632o;

        /* renamed from: p  reason: collision with root package name */
        private int f55633p;

        /* renamed from: q  reason: collision with root package name */
        private float f55634q;

        public b a() {
            return new b(this.f55618a, this.f55620c, this.f55621d, this.f55619b, this.f55622e, this.f55623f, this.f55624g, this.f55625h, this.f55626i, this.f55627j, this.f55628k, this.f55629l, this.f55630m, this.f55631n, this.f55632o, this.f55633p, this.f55634q);
        }

        public C0779b b() {
            this.f55631n = false;
            return this;
        }

        public int c() {
            return this.f55624g;
        }

        public int d() {
            return this.f55626i;
        }

        public CharSequence e() {
            return this.f55618a;
        }

        public C0779b f(Bitmap bitmap) {
            this.f55619b = bitmap;
            return this;
        }

        public C0779b g(float f10) {
            this.f55630m = f10;
            return this;
        }

        public C0779b h(float f10, int i10) {
            this.f55622e = f10;
            this.f55623f = i10;
            return this;
        }

        public C0779b i(int i10) {
            this.f55624g = i10;
            return this;
        }

        public C0779b j(Layout.Alignment alignment) {
            this.f55621d = alignment;
            return this;
        }

        public C0779b k(float f10) {
            this.f55625h = f10;
            return this;
        }

        public C0779b l(int i10) {
            this.f55626i = i10;
            return this;
        }

        public C0779b m(float f10) {
            this.f55634q = f10;
            return this;
        }

        public C0779b n(float f10) {
            this.f55629l = f10;
            return this;
        }

        public C0779b o(CharSequence charSequence) {
            this.f55618a = charSequence;
            return this;
        }

        public C0779b p(Layout.Alignment alignment) {
            this.f55620c = alignment;
            return this;
        }

        public C0779b q(float f10, int i10) {
            this.f55628k = f10;
            this.f55627j = i10;
            return this;
        }

        public C0779b r(int i10) {
            this.f55633p = i10;
            return this;
        }

        public C0779b s(int i10) {
            this.f55632o = i10;
            this.f55631n = true;
            return this;
        }

        public C0779b() {
            this.f55618a = null;
            this.f55619b = null;
            this.f55620c = null;
            this.f55621d = null;
            this.f55622e = -3.4028235E38f;
            this.f55623f = Integer.MIN_VALUE;
            this.f55624g = Integer.MIN_VALUE;
            this.f55625h = -3.4028235E38f;
            this.f55626i = Integer.MIN_VALUE;
            this.f55627j = Integer.MIN_VALUE;
            this.f55628k = -3.4028235E38f;
            this.f55629l = -3.4028235E38f;
            this.f55630m = -3.4028235E38f;
            this.f55631n = false;
            this.f55632o = -16777216;
            this.f55633p = Integer.MIN_VALUE;
        }

        private C0779b(b bVar) {
            this.f55618a = bVar.f55603d;
            this.f55619b = bVar.f55606o;
            this.f55620c = bVar.f55604e;
            this.f55621d = bVar.f55605i;
            this.f55622e = bVar.f55607p;
            this.f55623f = bVar.f55608q;
            this.f55624g = bVar.f55609r;
            this.f55625h = bVar.f55610s;
            this.f55626i = bVar.f55611t;
            this.f55627j = bVar.f55616y;
            this.f55628k = bVar.f55617z;
            this.f55629l = bVar.f55612u;
            this.f55630m = bVar.f55613v;
            this.f55631n = bVar.f55614w;
            this.f55632o = bVar.f55615x;
            this.f55633p = bVar.A;
            this.f55634q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0779b c0779b = new C0779b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0779b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0779b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0779b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0779b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0779b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0779b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0779b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0779b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0779b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0779b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0779b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0779b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0779b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0779b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0779b.m(bundle.getFloat(str12));
        }
        return c0779b.a();
    }

    public C0779b b() {
        return new C0779b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f55603d, bVar.f55603d) && this.f55604e == bVar.f55604e && this.f55605i == bVar.f55605i && ((bitmap = this.f55606o) != null ? !((bitmap2 = bVar.f55606o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55606o == null) && this.f55607p == bVar.f55607p && this.f55608q == bVar.f55608q && this.f55609r == bVar.f55609r && this.f55610s == bVar.f55610s && this.f55611t == bVar.f55611t && this.f55612u == bVar.f55612u && this.f55613v == bVar.f55613v && this.f55614w == bVar.f55614w && this.f55615x == bVar.f55615x && this.f55616y == bVar.f55616y && this.f55617z == bVar.f55617z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f55603d, this.f55604e, this.f55605i, this.f55606o, Float.valueOf(this.f55607p), Integer.valueOf(this.f55608q), Integer.valueOf(this.f55609r), Float.valueOf(this.f55610s), Integer.valueOf(this.f55611t), Float.valueOf(this.f55612u), Float.valueOf(this.f55613v), Boolean.valueOf(this.f55614w), Integer.valueOf(this.f55615x), Integer.valueOf(this.f55616y), Float.valueOf(this.f55617z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55603d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55603d = charSequence.toString();
        } else {
            this.f55603d = null;
        }
        this.f55604e = alignment;
        this.f55605i = alignment2;
        this.f55606o = bitmap;
        this.f55607p = f10;
        this.f55608q = i10;
        this.f55609r = i11;
        this.f55610s = f11;
        this.f55611t = i12;
        this.f55612u = f13;
        this.f55613v = f14;
        this.f55614w = z10;
        this.f55615x = i14;
        this.f55616y = i13;
        this.f55617z = f12;
        this.A = i15;
        this.B = f15;
    }
}
