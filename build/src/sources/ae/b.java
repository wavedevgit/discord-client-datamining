package ae;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.text.Layout;
import android.text.Spanned;
import android.text.SpannedString;
import android.text.TextUtils;
import com.google.android.exoplayer2.g;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements com.google.android.exoplayer2.g {
    public static final b C = new C0009b().o("").a();
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
    public static final g.a U = new g.a() { // from class: ae.a
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
    public final CharSequence f706d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f707e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f708i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f709o;

    /* renamed from: p  reason: collision with root package name */
    public final float f710p;

    /* renamed from: q  reason: collision with root package name */
    public final int f711q;

    /* renamed from: r  reason: collision with root package name */
    public final int f712r;

    /* renamed from: s  reason: collision with root package name */
    public final float f713s;

    /* renamed from: t  reason: collision with root package name */
    public final int f714t;

    /* renamed from: u  reason: collision with root package name */
    public final float f715u;

    /* renamed from: v  reason: collision with root package name */
    public final float f716v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f717w;

    /* renamed from: x  reason: collision with root package name */
    public final int f718x;

    /* renamed from: y  reason: collision with root package name */
    public final int f719y;

    /* renamed from: z  reason: collision with root package name */
    public final float f720z;

    /* renamed from: ae.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0009b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f721a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f722b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f723c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f724d;

        /* renamed from: e  reason: collision with root package name */
        private float f725e;

        /* renamed from: f  reason: collision with root package name */
        private int f726f;

        /* renamed from: g  reason: collision with root package name */
        private int f727g;

        /* renamed from: h  reason: collision with root package name */
        private float f728h;

        /* renamed from: i  reason: collision with root package name */
        private int f729i;

        /* renamed from: j  reason: collision with root package name */
        private int f730j;

        /* renamed from: k  reason: collision with root package name */
        private float f731k;

        /* renamed from: l  reason: collision with root package name */
        private float f732l;

        /* renamed from: m  reason: collision with root package name */
        private float f733m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f734n;

        /* renamed from: o  reason: collision with root package name */
        private int f735o;

        /* renamed from: p  reason: collision with root package name */
        private int f736p;

        /* renamed from: q  reason: collision with root package name */
        private float f737q;

        public b a() {
            return new b(this.f721a, this.f723c, this.f724d, this.f722b, this.f725e, this.f726f, this.f727g, this.f728h, this.f729i, this.f730j, this.f731k, this.f732l, this.f733m, this.f734n, this.f735o, this.f736p, this.f737q);
        }

        public C0009b b() {
            this.f734n = false;
            return this;
        }

        public int c() {
            return this.f727g;
        }

        public int d() {
            return this.f729i;
        }

        public CharSequence e() {
            return this.f721a;
        }

        public C0009b f(Bitmap bitmap) {
            this.f722b = bitmap;
            return this;
        }

        public C0009b g(float f10) {
            this.f733m = f10;
            return this;
        }

        public C0009b h(float f10, int i10) {
            this.f725e = f10;
            this.f726f = i10;
            return this;
        }

        public C0009b i(int i10) {
            this.f727g = i10;
            return this;
        }

        public C0009b j(Layout.Alignment alignment) {
            this.f724d = alignment;
            return this;
        }

        public C0009b k(float f10) {
            this.f728h = f10;
            return this;
        }

        public C0009b l(int i10) {
            this.f729i = i10;
            return this;
        }

        public C0009b m(float f10) {
            this.f737q = f10;
            return this;
        }

        public C0009b n(float f10) {
            this.f732l = f10;
            return this;
        }

        public C0009b o(CharSequence charSequence) {
            this.f721a = charSequence;
            return this;
        }

        public C0009b p(Layout.Alignment alignment) {
            this.f723c = alignment;
            return this;
        }

        public C0009b q(float f10, int i10) {
            this.f731k = f10;
            this.f730j = i10;
            return this;
        }

        public C0009b r(int i10) {
            this.f736p = i10;
            return this;
        }

        public C0009b s(int i10) {
            this.f735o = i10;
            this.f734n = true;
            return this;
        }

        public C0009b() {
            this.f721a = null;
            this.f722b = null;
            this.f723c = null;
            this.f724d = null;
            this.f725e = -3.4028235E38f;
            this.f726f = Integer.MIN_VALUE;
            this.f727g = Integer.MIN_VALUE;
            this.f728h = -3.4028235E38f;
            this.f729i = Integer.MIN_VALUE;
            this.f730j = Integer.MIN_VALUE;
            this.f731k = -3.4028235E38f;
            this.f732l = -3.4028235E38f;
            this.f733m = -3.4028235E38f;
            this.f734n = false;
            this.f735o = -16777216;
            this.f736p = Integer.MIN_VALUE;
        }

        private C0009b(b bVar) {
            this.f721a = bVar.f706d;
            this.f722b = bVar.f709o;
            this.f723c = bVar.f707e;
            this.f724d = bVar.f708i;
            this.f725e = bVar.f710p;
            this.f726f = bVar.f711q;
            this.f727g = bVar.f712r;
            this.f728h = bVar.f713s;
            this.f729i = bVar.f714t;
            this.f730j = bVar.f719y;
            this.f731k = bVar.f720z;
            this.f732l = bVar.f715u;
            this.f733m = bVar.f716v;
            this.f734n = bVar.f717w;
            this.f735o = bVar.f718x;
            this.f736p = bVar.A;
            this.f737q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0009b c0009b = new C0009b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0009b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0009b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0009b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0009b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0009b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0009b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0009b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0009b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0009b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0009b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0009b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0009b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0009b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0009b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0009b.m(bundle.getFloat(str12));
        }
        return c0009b.a();
    }

    public C0009b b() {
        return new C0009b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f706d, bVar.f706d) && this.f707e == bVar.f707e && this.f708i == bVar.f708i && ((bitmap = this.f709o) != null ? !((bitmap2 = bVar.f709o) == null || !bitmap.sameAs(bitmap2)) : bVar.f709o == null) && this.f710p == bVar.f710p && this.f711q == bVar.f711q && this.f712r == bVar.f712r && this.f713s == bVar.f713s && this.f714t == bVar.f714t && this.f715u == bVar.f715u && this.f716v == bVar.f716v && this.f717w == bVar.f717w && this.f718x == bVar.f718x && this.f719y == bVar.f719y && this.f720z == bVar.f720z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return pi.j.b(this.f706d, this.f707e, this.f708i, this.f709o, Float.valueOf(this.f710p), Integer.valueOf(this.f711q), Integer.valueOf(this.f712r), Float.valueOf(this.f713s), Integer.valueOf(this.f714t), Float.valueOf(this.f715u), Float.valueOf(this.f716v), Boolean.valueOf(this.f717w), Integer.valueOf(this.f718x), Integer.valueOf(this.f719y), Float.valueOf(this.f720z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            oe.a.e(bitmap);
        } else {
            oe.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f706d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f706d = charSequence.toString();
        } else {
            this.f706d = null;
        }
        this.f707e = alignment;
        this.f708i = alignment2;
        this.f709o = bitmap;
        this.f710p = f10;
        this.f711q = i10;
        this.f712r = i11;
        this.f713s = f11;
        this.f714t = i12;
        this.f715u = f13;
        this.f716v = f14;
        this.f717w = z10;
        this.f718x = i14;
        this.f719y = i13;
        this.f720z = f12;
        this.A = i15;
        this.B = f15;
    }
}
