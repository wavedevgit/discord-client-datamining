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
    public static final b C = new C0790b().o("").a();
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
    public final CharSequence f55735d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55736e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55737i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55738o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55739p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55740q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55741r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55742s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55743t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55744u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55745v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55746w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55747x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55748y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55749z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0790b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55750a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55751b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55752c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55753d;

        /* renamed from: e  reason: collision with root package name */
        private float f55754e;

        /* renamed from: f  reason: collision with root package name */
        private int f55755f;

        /* renamed from: g  reason: collision with root package name */
        private int f55756g;

        /* renamed from: h  reason: collision with root package name */
        private float f55757h;

        /* renamed from: i  reason: collision with root package name */
        private int f55758i;

        /* renamed from: j  reason: collision with root package name */
        private int f55759j;

        /* renamed from: k  reason: collision with root package name */
        private float f55760k;

        /* renamed from: l  reason: collision with root package name */
        private float f55761l;

        /* renamed from: m  reason: collision with root package name */
        private float f55762m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55763n;

        /* renamed from: o  reason: collision with root package name */
        private int f55764o;

        /* renamed from: p  reason: collision with root package name */
        private int f55765p;

        /* renamed from: q  reason: collision with root package name */
        private float f55766q;

        public b a() {
            return new b(this.f55750a, this.f55752c, this.f55753d, this.f55751b, this.f55754e, this.f55755f, this.f55756g, this.f55757h, this.f55758i, this.f55759j, this.f55760k, this.f55761l, this.f55762m, this.f55763n, this.f55764o, this.f55765p, this.f55766q);
        }

        public C0790b b() {
            this.f55763n = false;
            return this;
        }

        public int c() {
            return this.f55756g;
        }

        public int d() {
            return this.f55758i;
        }

        public CharSequence e() {
            return this.f55750a;
        }

        public C0790b f(Bitmap bitmap) {
            this.f55751b = bitmap;
            return this;
        }

        public C0790b g(float f10) {
            this.f55762m = f10;
            return this;
        }

        public C0790b h(float f10, int i10) {
            this.f55754e = f10;
            this.f55755f = i10;
            return this;
        }

        public C0790b i(int i10) {
            this.f55756g = i10;
            return this;
        }

        public C0790b j(Layout.Alignment alignment) {
            this.f55753d = alignment;
            return this;
        }

        public C0790b k(float f10) {
            this.f55757h = f10;
            return this;
        }

        public C0790b l(int i10) {
            this.f55758i = i10;
            return this;
        }

        public C0790b m(float f10) {
            this.f55766q = f10;
            return this;
        }

        public C0790b n(float f10) {
            this.f55761l = f10;
            return this;
        }

        public C0790b o(CharSequence charSequence) {
            this.f55750a = charSequence;
            return this;
        }

        public C0790b p(Layout.Alignment alignment) {
            this.f55752c = alignment;
            return this;
        }

        public C0790b q(float f10, int i10) {
            this.f55760k = f10;
            this.f55759j = i10;
            return this;
        }

        public C0790b r(int i10) {
            this.f55765p = i10;
            return this;
        }

        public C0790b s(int i10) {
            this.f55764o = i10;
            this.f55763n = true;
            return this;
        }

        public C0790b() {
            this.f55750a = null;
            this.f55751b = null;
            this.f55752c = null;
            this.f55753d = null;
            this.f55754e = -3.4028235E38f;
            this.f55755f = Integer.MIN_VALUE;
            this.f55756g = Integer.MIN_VALUE;
            this.f55757h = -3.4028235E38f;
            this.f55758i = Integer.MIN_VALUE;
            this.f55759j = Integer.MIN_VALUE;
            this.f55760k = -3.4028235E38f;
            this.f55761l = -3.4028235E38f;
            this.f55762m = -3.4028235E38f;
            this.f55763n = false;
            this.f55764o = -16777216;
            this.f55765p = Integer.MIN_VALUE;
        }

        private C0790b(b bVar) {
            this.f55750a = bVar.f55735d;
            this.f55751b = bVar.f55738o;
            this.f55752c = bVar.f55736e;
            this.f55753d = bVar.f55737i;
            this.f55754e = bVar.f55739p;
            this.f55755f = bVar.f55740q;
            this.f55756g = bVar.f55741r;
            this.f55757h = bVar.f55742s;
            this.f55758i = bVar.f55743t;
            this.f55759j = bVar.f55748y;
            this.f55760k = bVar.f55749z;
            this.f55761l = bVar.f55744u;
            this.f55762m = bVar.f55745v;
            this.f55763n = bVar.f55746w;
            this.f55764o = bVar.f55747x;
            this.f55765p = bVar.A;
            this.f55766q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0790b c0790b = new C0790b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0790b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0790b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0790b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0790b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0790b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0790b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0790b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0790b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0790b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0790b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0790b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0790b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0790b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0790b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0790b.m(bundle.getFloat(str12));
        }
        return c0790b.a();
    }

    public C0790b b() {
        return new C0790b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f55735d, bVar.f55735d) && this.f55736e == bVar.f55736e && this.f55737i == bVar.f55737i && ((bitmap = this.f55738o) != null ? !((bitmap2 = bVar.f55738o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55738o == null) && this.f55739p == bVar.f55739p && this.f55740q == bVar.f55740q && this.f55741r == bVar.f55741r && this.f55742s == bVar.f55742s && this.f55743t == bVar.f55743t && this.f55744u == bVar.f55744u && this.f55745v == bVar.f55745v && this.f55746w == bVar.f55746w && this.f55747x == bVar.f55747x && this.f55748y == bVar.f55748y && this.f55749z == bVar.f55749z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ii.j.b(this.f55735d, this.f55736e, this.f55737i, this.f55738o, Float.valueOf(this.f55739p), Integer.valueOf(this.f55740q), Integer.valueOf(this.f55741r), Float.valueOf(this.f55742s), Integer.valueOf(this.f55743t), Float.valueOf(this.f55744u), Float.valueOf(this.f55745v), Boolean.valueOf(this.f55746w), Integer.valueOf(this.f55747x), Integer.valueOf(this.f55748y), Float.valueOf(this.f55749z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55735d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55735d = charSequence.toString();
        } else {
            this.f55735d = null;
        }
        this.f55736e = alignment;
        this.f55737i = alignment2;
        this.f55738o = bitmap;
        this.f55739p = f10;
        this.f55740q = i10;
        this.f55741r = i11;
        this.f55742s = f11;
        this.f55743t = i12;
        this.f55744u = f13;
        this.f55745v = f14;
        this.f55746w = z10;
        this.f55747x = i14;
        this.f55748y = i13;
        this.f55749z = f12;
        this.A = i15;
        this.B = f15;
    }
}
