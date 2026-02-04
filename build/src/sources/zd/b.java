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
    public final CharSequence f55870d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55871e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55872i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55873o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55874p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55875q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55876r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55877s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55878t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55879u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55880v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55881w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55882x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55883y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55884z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0784b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55885a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55886b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55887c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55888d;

        /* renamed from: e  reason: collision with root package name */
        private float f55889e;

        /* renamed from: f  reason: collision with root package name */
        private int f55890f;

        /* renamed from: g  reason: collision with root package name */
        private int f55891g;

        /* renamed from: h  reason: collision with root package name */
        private float f55892h;

        /* renamed from: i  reason: collision with root package name */
        private int f55893i;

        /* renamed from: j  reason: collision with root package name */
        private int f55894j;

        /* renamed from: k  reason: collision with root package name */
        private float f55895k;

        /* renamed from: l  reason: collision with root package name */
        private float f55896l;

        /* renamed from: m  reason: collision with root package name */
        private float f55897m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55898n;

        /* renamed from: o  reason: collision with root package name */
        private int f55899o;

        /* renamed from: p  reason: collision with root package name */
        private int f55900p;

        /* renamed from: q  reason: collision with root package name */
        private float f55901q;

        public b a() {
            return new b(this.f55885a, this.f55887c, this.f55888d, this.f55886b, this.f55889e, this.f55890f, this.f55891g, this.f55892h, this.f55893i, this.f55894j, this.f55895k, this.f55896l, this.f55897m, this.f55898n, this.f55899o, this.f55900p, this.f55901q);
        }

        public C0784b b() {
            this.f55898n = false;
            return this;
        }

        public int c() {
            return this.f55891g;
        }

        public int d() {
            return this.f55893i;
        }

        public CharSequence e() {
            return this.f55885a;
        }

        public C0784b f(Bitmap bitmap) {
            this.f55886b = bitmap;
            return this;
        }

        public C0784b g(float f10) {
            this.f55897m = f10;
            return this;
        }

        public C0784b h(float f10, int i10) {
            this.f55889e = f10;
            this.f55890f = i10;
            return this;
        }

        public C0784b i(int i10) {
            this.f55891g = i10;
            return this;
        }

        public C0784b j(Layout.Alignment alignment) {
            this.f55888d = alignment;
            return this;
        }

        public C0784b k(float f10) {
            this.f55892h = f10;
            return this;
        }

        public C0784b l(int i10) {
            this.f55893i = i10;
            return this;
        }

        public C0784b m(float f10) {
            this.f55901q = f10;
            return this;
        }

        public C0784b n(float f10) {
            this.f55896l = f10;
            return this;
        }

        public C0784b o(CharSequence charSequence) {
            this.f55885a = charSequence;
            return this;
        }

        public C0784b p(Layout.Alignment alignment) {
            this.f55887c = alignment;
            return this;
        }

        public C0784b q(float f10, int i10) {
            this.f55895k = f10;
            this.f55894j = i10;
            return this;
        }

        public C0784b r(int i10) {
            this.f55900p = i10;
            return this;
        }

        public C0784b s(int i10) {
            this.f55899o = i10;
            this.f55898n = true;
            return this;
        }

        public C0784b() {
            this.f55885a = null;
            this.f55886b = null;
            this.f55887c = null;
            this.f55888d = null;
            this.f55889e = -3.4028235E38f;
            this.f55890f = Integer.MIN_VALUE;
            this.f55891g = Integer.MIN_VALUE;
            this.f55892h = -3.4028235E38f;
            this.f55893i = Integer.MIN_VALUE;
            this.f55894j = Integer.MIN_VALUE;
            this.f55895k = -3.4028235E38f;
            this.f55896l = -3.4028235E38f;
            this.f55897m = -3.4028235E38f;
            this.f55898n = false;
            this.f55899o = -16777216;
            this.f55900p = Integer.MIN_VALUE;
        }

        private C0784b(b bVar) {
            this.f55885a = bVar.f55870d;
            this.f55886b = bVar.f55873o;
            this.f55887c = bVar.f55871e;
            this.f55888d = bVar.f55872i;
            this.f55889e = bVar.f55874p;
            this.f55890f = bVar.f55875q;
            this.f55891g = bVar.f55876r;
            this.f55892h = bVar.f55877s;
            this.f55893i = bVar.f55878t;
            this.f55894j = bVar.f55883y;
            this.f55895k = bVar.f55884z;
            this.f55896l = bVar.f55879u;
            this.f55897m = bVar.f55880v;
            this.f55898n = bVar.f55881w;
            this.f55899o = bVar.f55882x;
            this.f55900p = bVar.A;
            this.f55901q = bVar.B;
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
            if (TextUtils.equals(this.f55870d, bVar.f55870d) && this.f55871e == bVar.f55871e && this.f55872i == bVar.f55872i && ((bitmap = this.f55873o) != null ? !((bitmap2 = bVar.f55873o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55873o == null) && this.f55874p == bVar.f55874p && this.f55875q == bVar.f55875q && this.f55876r == bVar.f55876r && this.f55877s == bVar.f55877s && this.f55878t == bVar.f55878t && this.f55879u == bVar.f55879u && this.f55880v == bVar.f55880v && this.f55881w == bVar.f55881w && this.f55882x == bVar.f55882x && this.f55883y == bVar.f55883y && this.f55884z == bVar.f55884z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f55870d, this.f55871e, this.f55872i, this.f55873o, Float.valueOf(this.f55874p), Integer.valueOf(this.f55875q), Integer.valueOf(this.f55876r), Float.valueOf(this.f55877s), Integer.valueOf(this.f55878t), Float.valueOf(this.f55879u), Float.valueOf(this.f55880v), Boolean.valueOf(this.f55881w), Integer.valueOf(this.f55882x), Integer.valueOf(this.f55883y), Float.valueOf(this.f55884z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55870d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55870d = charSequence.toString();
        } else {
            this.f55870d = null;
        }
        this.f55871e = alignment;
        this.f55872i = alignment2;
        this.f55873o = bitmap;
        this.f55874p = f10;
        this.f55875q = i10;
        this.f55876r = i11;
        this.f55877s = f11;
        this.f55878t = i12;
        this.f55879u = f13;
        this.f55880v = f14;
        this.f55881w = z10;
        this.f55882x = i14;
        this.f55883y = i13;
        this.f55884z = f12;
        this.A = i15;
        this.B = f15;
    }
}
