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
    public static final b C = new C0770b().o("").a();
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
    public final CharSequence f56190d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f56191e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f56192i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f56193o;

    /* renamed from: p  reason: collision with root package name */
    public final float f56194p;

    /* renamed from: q  reason: collision with root package name */
    public final int f56195q;

    /* renamed from: r  reason: collision with root package name */
    public final int f56196r;

    /* renamed from: s  reason: collision with root package name */
    public final float f56197s;

    /* renamed from: t  reason: collision with root package name */
    public final int f56198t;

    /* renamed from: u  reason: collision with root package name */
    public final float f56199u;

    /* renamed from: v  reason: collision with root package name */
    public final float f56200v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f56201w;

    /* renamed from: x  reason: collision with root package name */
    public final int f56202x;

    /* renamed from: y  reason: collision with root package name */
    public final int f56203y;

    /* renamed from: z  reason: collision with root package name */
    public final float f56204z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0770b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f56205a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f56206b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f56207c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f56208d;

        /* renamed from: e  reason: collision with root package name */
        private float f56209e;

        /* renamed from: f  reason: collision with root package name */
        private int f56210f;

        /* renamed from: g  reason: collision with root package name */
        private int f56211g;

        /* renamed from: h  reason: collision with root package name */
        private float f56212h;

        /* renamed from: i  reason: collision with root package name */
        private int f56213i;

        /* renamed from: j  reason: collision with root package name */
        private int f56214j;

        /* renamed from: k  reason: collision with root package name */
        private float f56215k;

        /* renamed from: l  reason: collision with root package name */
        private float f56216l;

        /* renamed from: m  reason: collision with root package name */
        private float f56217m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f56218n;

        /* renamed from: o  reason: collision with root package name */
        private int f56219o;

        /* renamed from: p  reason: collision with root package name */
        private int f56220p;

        /* renamed from: q  reason: collision with root package name */
        private float f56221q;

        public b a() {
            return new b(this.f56205a, this.f56207c, this.f56208d, this.f56206b, this.f56209e, this.f56210f, this.f56211g, this.f56212h, this.f56213i, this.f56214j, this.f56215k, this.f56216l, this.f56217m, this.f56218n, this.f56219o, this.f56220p, this.f56221q);
        }

        public C0770b b() {
            this.f56218n = false;
            return this;
        }

        public int c() {
            return this.f56211g;
        }

        public int d() {
            return this.f56213i;
        }

        public CharSequence e() {
            return this.f56205a;
        }

        public C0770b f(Bitmap bitmap) {
            this.f56206b = bitmap;
            return this;
        }

        public C0770b g(float f10) {
            this.f56217m = f10;
            return this;
        }

        public C0770b h(float f10, int i10) {
            this.f56209e = f10;
            this.f56210f = i10;
            return this;
        }

        public C0770b i(int i10) {
            this.f56211g = i10;
            return this;
        }

        public C0770b j(Layout.Alignment alignment) {
            this.f56208d = alignment;
            return this;
        }

        public C0770b k(float f10) {
            this.f56212h = f10;
            return this;
        }

        public C0770b l(int i10) {
            this.f56213i = i10;
            return this;
        }

        public C0770b m(float f10) {
            this.f56221q = f10;
            return this;
        }

        public C0770b n(float f10) {
            this.f56216l = f10;
            return this;
        }

        public C0770b o(CharSequence charSequence) {
            this.f56205a = charSequence;
            return this;
        }

        public C0770b p(Layout.Alignment alignment) {
            this.f56207c = alignment;
            return this;
        }

        public C0770b q(float f10, int i10) {
            this.f56215k = f10;
            this.f56214j = i10;
            return this;
        }

        public C0770b r(int i10) {
            this.f56220p = i10;
            return this;
        }

        public C0770b s(int i10) {
            this.f56219o = i10;
            this.f56218n = true;
            return this;
        }

        public C0770b() {
            this.f56205a = null;
            this.f56206b = null;
            this.f56207c = null;
            this.f56208d = null;
            this.f56209e = -3.4028235E38f;
            this.f56210f = Integer.MIN_VALUE;
            this.f56211g = Integer.MIN_VALUE;
            this.f56212h = -3.4028235E38f;
            this.f56213i = Integer.MIN_VALUE;
            this.f56214j = Integer.MIN_VALUE;
            this.f56215k = -3.4028235E38f;
            this.f56216l = -3.4028235E38f;
            this.f56217m = -3.4028235E38f;
            this.f56218n = false;
            this.f56219o = -16777216;
            this.f56220p = Integer.MIN_VALUE;
        }

        private C0770b(b bVar) {
            this.f56205a = bVar.f56190d;
            this.f56206b = bVar.f56193o;
            this.f56207c = bVar.f56191e;
            this.f56208d = bVar.f56192i;
            this.f56209e = bVar.f56194p;
            this.f56210f = bVar.f56195q;
            this.f56211g = bVar.f56196r;
            this.f56212h = bVar.f56197s;
            this.f56213i = bVar.f56198t;
            this.f56214j = bVar.f56203y;
            this.f56215k = bVar.f56204z;
            this.f56216l = bVar.f56199u;
            this.f56217m = bVar.f56200v;
            this.f56218n = bVar.f56201w;
            this.f56219o = bVar.f56202x;
            this.f56220p = bVar.A;
            this.f56221q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0770b c0770b = new C0770b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0770b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0770b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0770b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0770b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0770b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0770b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0770b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0770b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0770b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0770b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0770b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0770b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0770b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0770b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0770b.m(bundle.getFloat(str12));
        }
        return c0770b.a();
    }

    public C0770b b() {
        return new C0770b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f56190d, bVar.f56190d) && this.f56191e == bVar.f56191e && this.f56192i == bVar.f56192i && ((bitmap = this.f56193o) != null ? !((bitmap2 = bVar.f56193o) == null || !bitmap.sameAs(bitmap2)) : bVar.f56193o == null) && this.f56194p == bVar.f56194p && this.f56195q == bVar.f56195q && this.f56196r == bVar.f56196r && this.f56197s == bVar.f56197s && this.f56198t == bVar.f56198t && this.f56199u == bVar.f56199u && this.f56200v == bVar.f56200v && this.f56201w == bVar.f56201w && this.f56202x == bVar.f56202x && this.f56203y == bVar.f56203y && this.f56204z == bVar.f56204z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return mi.j.b(this.f56190d, this.f56191e, this.f56192i, this.f56193o, Float.valueOf(this.f56194p), Integer.valueOf(this.f56195q), Integer.valueOf(this.f56196r), Float.valueOf(this.f56197s), Integer.valueOf(this.f56198t), Float.valueOf(this.f56199u), Float.valueOf(this.f56200v), Boolean.valueOf(this.f56201w), Integer.valueOf(this.f56202x), Integer.valueOf(this.f56203y), Float.valueOf(this.f56204z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f56190d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f56190d = charSequence.toString();
        } else {
            this.f56190d = null;
        }
        this.f56191e = alignment;
        this.f56192i = alignment2;
        this.f56193o = bitmap;
        this.f56194p = f10;
        this.f56195q = i10;
        this.f56196r = i11;
        this.f56197s = f11;
        this.f56198t = i12;
        this.f56199u = f13;
        this.f56200v = f14;
        this.f56201w = z10;
        this.f56202x = i14;
        this.f56203y = i13;
        this.f56204z = f12;
        this.A = i15;
        this.B = f15;
    }
}
