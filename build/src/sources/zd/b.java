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
    public final CharSequence f55587d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55588e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55589i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55590o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55591p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55592q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55593r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55594s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55595t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55596u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55597v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55598w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55599x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55600y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55601z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0779b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55602a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55603b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55604c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55605d;

        /* renamed from: e  reason: collision with root package name */
        private float f55606e;

        /* renamed from: f  reason: collision with root package name */
        private int f55607f;

        /* renamed from: g  reason: collision with root package name */
        private int f55608g;

        /* renamed from: h  reason: collision with root package name */
        private float f55609h;

        /* renamed from: i  reason: collision with root package name */
        private int f55610i;

        /* renamed from: j  reason: collision with root package name */
        private int f55611j;

        /* renamed from: k  reason: collision with root package name */
        private float f55612k;

        /* renamed from: l  reason: collision with root package name */
        private float f55613l;

        /* renamed from: m  reason: collision with root package name */
        private float f55614m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55615n;

        /* renamed from: o  reason: collision with root package name */
        private int f55616o;

        /* renamed from: p  reason: collision with root package name */
        private int f55617p;

        /* renamed from: q  reason: collision with root package name */
        private float f55618q;

        public b a() {
            return new b(this.f55602a, this.f55604c, this.f55605d, this.f55603b, this.f55606e, this.f55607f, this.f55608g, this.f55609h, this.f55610i, this.f55611j, this.f55612k, this.f55613l, this.f55614m, this.f55615n, this.f55616o, this.f55617p, this.f55618q);
        }

        public C0779b b() {
            this.f55615n = false;
            return this;
        }

        public int c() {
            return this.f55608g;
        }

        public int d() {
            return this.f55610i;
        }

        public CharSequence e() {
            return this.f55602a;
        }

        public C0779b f(Bitmap bitmap) {
            this.f55603b = bitmap;
            return this;
        }

        public C0779b g(float f10) {
            this.f55614m = f10;
            return this;
        }

        public C0779b h(float f10, int i10) {
            this.f55606e = f10;
            this.f55607f = i10;
            return this;
        }

        public C0779b i(int i10) {
            this.f55608g = i10;
            return this;
        }

        public C0779b j(Layout.Alignment alignment) {
            this.f55605d = alignment;
            return this;
        }

        public C0779b k(float f10) {
            this.f55609h = f10;
            return this;
        }

        public C0779b l(int i10) {
            this.f55610i = i10;
            return this;
        }

        public C0779b m(float f10) {
            this.f55618q = f10;
            return this;
        }

        public C0779b n(float f10) {
            this.f55613l = f10;
            return this;
        }

        public C0779b o(CharSequence charSequence) {
            this.f55602a = charSequence;
            return this;
        }

        public C0779b p(Layout.Alignment alignment) {
            this.f55604c = alignment;
            return this;
        }

        public C0779b q(float f10, int i10) {
            this.f55612k = f10;
            this.f55611j = i10;
            return this;
        }

        public C0779b r(int i10) {
            this.f55617p = i10;
            return this;
        }

        public C0779b s(int i10) {
            this.f55616o = i10;
            this.f55615n = true;
            return this;
        }

        public C0779b() {
            this.f55602a = null;
            this.f55603b = null;
            this.f55604c = null;
            this.f55605d = null;
            this.f55606e = -3.4028235E38f;
            this.f55607f = Integer.MIN_VALUE;
            this.f55608g = Integer.MIN_VALUE;
            this.f55609h = -3.4028235E38f;
            this.f55610i = Integer.MIN_VALUE;
            this.f55611j = Integer.MIN_VALUE;
            this.f55612k = -3.4028235E38f;
            this.f55613l = -3.4028235E38f;
            this.f55614m = -3.4028235E38f;
            this.f55615n = false;
            this.f55616o = -16777216;
            this.f55617p = Integer.MIN_VALUE;
        }

        private C0779b(b bVar) {
            this.f55602a = bVar.f55587d;
            this.f55603b = bVar.f55590o;
            this.f55604c = bVar.f55588e;
            this.f55605d = bVar.f55589i;
            this.f55606e = bVar.f55591p;
            this.f55607f = bVar.f55592q;
            this.f55608g = bVar.f55593r;
            this.f55609h = bVar.f55594s;
            this.f55610i = bVar.f55595t;
            this.f55611j = bVar.f55600y;
            this.f55612k = bVar.f55601z;
            this.f55613l = bVar.f55596u;
            this.f55614m = bVar.f55597v;
            this.f55615n = bVar.f55598w;
            this.f55616o = bVar.f55599x;
            this.f55617p = bVar.A;
            this.f55618q = bVar.B;
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
            if (TextUtils.equals(this.f55587d, bVar.f55587d) && this.f55588e == bVar.f55588e && this.f55589i == bVar.f55589i && ((bitmap = this.f55590o) != null ? !((bitmap2 = bVar.f55590o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55590o == null) && this.f55591p == bVar.f55591p && this.f55592q == bVar.f55592q && this.f55593r == bVar.f55593r && this.f55594s == bVar.f55594s && this.f55595t == bVar.f55595t && this.f55596u == bVar.f55596u && this.f55597v == bVar.f55597v && this.f55598w == bVar.f55598w && this.f55599x == bVar.f55599x && this.f55600y == bVar.f55600y && this.f55601z == bVar.f55601z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f55587d, this.f55588e, this.f55589i, this.f55590o, Float.valueOf(this.f55591p), Integer.valueOf(this.f55592q), Integer.valueOf(this.f55593r), Float.valueOf(this.f55594s), Integer.valueOf(this.f55595t), Float.valueOf(this.f55596u), Float.valueOf(this.f55597v), Boolean.valueOf(this.f55598w), Integer.valueOf(this.f55599x), Integer.valueOf(this.f55600y), Float.valueOf(this.f55601z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55587d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55587d = charSequence.toString();
        } else {
            this.f55587d = null;
        }
        this.f55588e = alignment;
        this.f55589i = alignment2;
        this.f55590o = bitmap;
        this.f55591p = f10;
        this.f55592q = i10;
        this.f55593r = i11;
        this.f55594s = f11;
        this.f55595t = i12;
        this.f55596u = f13;
        this.f55597v = f14;
        this.f55598w = z10;
        this.f55599x = i14;
        this.f55600y = i13;
        this.f55601z = f12;
        this.A = i15;
        this.B = f15;
    }
}
