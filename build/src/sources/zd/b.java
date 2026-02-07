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
    public final CharSequence f56238d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f56239e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f56240i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f56241o;

    /* renamed from: p  reason: collision with root package name */
    public final float f56242p;

    /* renamed from: q  reason: collision with root package name */
    public final int f56243q;

    /* renamed from: r  reason: collision with root package name */
    public final int f56244r;

    /* renamed from: s  reason: collision with root package name */
    public final float f56245s;

    /* renamed from: t  reason: collision with root package name */
    public final int f56246t;

    /* renamed from: u  reason: collision with root package name */
    public final float f56247u;

    /* renamed from: v  reason: collision with root package name */
    public final float f56248v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f56249w;

    /* renamed from: x  reason: collision with root package name */
    public final int f56250x;

    /* renamed from: y  reason: collision with root package name */
    public final int f56251y;

    /* renamed from: z  reason: collision with root package name */
    public final float f56252z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0770b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f56253a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f56254b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f56255c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f56256d;

        /* renamed from: e  reason: collision with root package name */
        private float f56257e;

        /* renamed from: f  reason: collision with root package name */
        private int f56258f;

        /* renamed from: g  reason: collision with root package name */
        private int f56259g;

        /* renamed from: h  reason: collision with root package name */
        private float f56260h;

        /* renamed from: i  reason: collision with root package name */
        private int f56261i;

        /* renamed from: j  reason: collision with root package name */
        private int f56262j;

        /* renamed from: k  reason: collision with root package name */
        private float f56263k;

        /* renamed from: l  reason: collision with root package name */
        private float f56264l;

        /* renamed from: m  reason: collision with root package name */
        private float f56265m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f56266n;

        /* renamed from: o  reason: collision with root package name */
        private int f56267o;

        /* renamed from: p  reason: collision with root package name */
        private int f56268p;

        /* renamed from: q  reason: collision with root package name */
        private float f56269q;

        public b a() {
            return new b(this.f56253a, this.f56255c, this.f56256d, this.f56254b, this.f56257e, this.f56258f, this.f56259g, this.f56260h, this.f56261i, this.f56262j, this.f56263k, this.f56264l, this.f56265m, this.f56266n, this.f56267o, this.f56268p, this.f56269q);
        }

        public C0770b b() {
            this.f56266n = false;
            return this;
        }

        public int c() {
            return this.f56259g;
        }

        public int d() {
            return this.f56261i;
        }

        public CharSequence e() {
            return this.f56253a;
        }

        public C0770b f(Bitmap bitmap) {
            this.f56254b = bitmap;
            return this;
        }

        public C0770b g(float f10) {
            this.f56265m = f10;
            return this;
        }

        public C0770b h(float f10, int i10) {
            this.f56257e = f10;
            this.f56258f = i10;
            return this;
        }

        public C0770b i(int i10) {
            this.f56259g = i10;
            return this;
        }

        public C0770b j(Layout.Alignment alignment) {
            this.f56256d = alignment;
            return this;
        }

        public C0770b k(float f10) {
            this.f56260h = f10;
            return this;
        }

        public C0770b l(int i10) {
            this.f56261i = i10;
            return this;
        }

        public C0770b m(float f10) {
            this.f56269q = f10;
            return this;
        }

        public C0770b n(float f10) {
            this.f56264l = f10;
            return this;
        }

        public C0770b o(CharSequence charSequence) {
            this.f56253a = charSequence;
            return this;
        }

        public C0770b p(Layout.Alignment alignment) {
            this.f56255c = alignment;
            return this;
        }

        public C0770b q(float f10, int i10) {
            this.f56263k = f10;
            this.f56262j = i10;
            return this;
        }

        public C0770b r(int i10) {
            this.f56268p = i10;
            return this;
        }

        public C0770b s(int i10) {
            this.f56267o = i10;
            this.f56266n = true;
            return this;
        }

        public C0770b() {
            this.f56253a = null;
            this.f56254b = null;
            this.f56255c = null;
            this.f56256d = null;
            this.f56257e = -3.4028235E38f;
            this.f56258f = Integer.MIN_VALUE;
            this.f56259g = Integer.MIN_VALUE;
            this.f56260h = -3.4028235E38f;
            this.f56261i = Integer.MIN_VALUE;
            this.f56262j = Integer.MIN_VALUE;
            this.f56263k = -3.4028235E38f;
            this.f56264l = -3.4028235E38f;
            this.f56265m = -3.4028235E38f;
            this.f56266n = false;
            this.f56267o = -16777216;
            this.f56268p = Integer.MIN_VALUE;
        }

        private C0770b(b bVar) {
            this.f56253a = bVar.f56238d;
            this.f56254b = bVar.f56241o;
            this.f56255c = bVar.f56239e;
            this.f56256d = bVar.f56240i;
            this.f56257e = bVar.f56242p;
            this.f56258f = bVar.f56243q;
            this.f56259g = bVar.f56244r;
            this.f56260h = bVar.f56245s;
            this.f56261i = bVar.f56246t;
            this.f56262j = bVar.f56251y;
            this.f56263k = bVar.f56252z;
            this.f56264l = bVar.f56247u;
            this.f56265m = bVar.f56248v;
            this.f56266n = bVar.f56249w;
            this.f56267o = bVar.f56250x;
            this.f56268p = bVar.A;
            this.f56269q = bVar.B;
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
            if (TextUtils.equals(this.f56238d, bVar.f56238d) && this.f56239e == bVar.f56239e && this.f56240i == bVar.f56240i && ((bitmap = this.f56241o) != null ? !((bitmap2 = bVar.f56241o) == null || !bitmap.sameAs(bitmap2)) : bVar.f56241o == null) && this.f56242p == bVar.f56242p && this.f56243q == bVar.f56243q && this.f56244r == bVar.f56244r && this.f56245s == bVar.f56245s && this.f56246t == bVar.f56246t && this.f56247u == bVar.f56247u && this.f56248v == bVar.f56248v && this.f56249w == bVar.f56249w && this.f56250x == bVar.f56250x && this.f56251y == bVar.f56251y && this.f56252z == bVar.f56252z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return mi.j.b(this.f56238d, this.f56239e, this.f56240i, this.f56241o, Float.valueOf(this.f56242p), Integer.valueOf(this.f56243q), Integer.valueOf(this.f56244r), Float.valueOf(this.f56245s), Integer.valueOf(this.f56246t), Float.valueOf(this.f56247u), Float.valueOf(this.f56248v), Boolean.valueOf(this.f56249w), Integer.valueOf(this.f56250x), Integer.valueOf(this.f56251y), Float.valueOf(this.f56252z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f56238d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f56238d = charSequence.toString();
        } else {
            this.f56238d = null;
        }
        this.f56239e = alignment;
        this.f56240i = alignment2;
        this.f56241o = bitmap;
        this.f56242p = f10;
        this.f56243q = i10;
        this.f56244r = i11;
        this.f56245s = f11;
        this.f56246t = i12;
        this.f56247u = f13;
        this.f56248v = f14;
        this.f56249w = z10;
        this.f56250x = i14;
        this.f56251y = i13;
        this.f56252z = f12;
        this.A = i15;
        this.B = f15;
    }
}
