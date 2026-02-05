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
    public static final b C = new C0782b().o("").a();
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
    public final CharSequence f55459d;

    /* renamed from: e  reason: collision with root package name */
    public final Layout.Alignment f55460e;

    /* renamed from: i  reason: collision with root package name */
    public final Layout.Alignment f55461i;

    /* renamed from: o  reason: collision with root package name */
    public final Bitmap f55462o;

    /* renamed from: p  reason: collision with root package name */
    public final float f55463p;

    /* renamed from: q  reason: collision with root package name */
    public final int f55464q;

    /* renamed from: r  reason: collision with root package name */
    public final int f55465r;

    /* renamed from: s  reason: collision with root package name */
    public final float f55466s;

    /* renamed from: t  reason: collision with root package name */
    public final int f55467t;

    /* renamed from: u  reason: collision with root package name */
    public final float f55468u;

    /* renamed from: v  reason: collision with root package name */
    public final float f55469v;

    /* renamed from: w  reason: collision with root package name */
    public final boolean f55470w;

    /* renamed from: x  reason: collision with root package name */
    public final int f55471x;

    /* renamed from: y  reason: collision with root package name */
    public final int f55472y;

    /* renamed from: z  reason: collision with root package name */
    public final float f55473z;

    /* renamed from: zd.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0782b {

        /* renamed from: a  reason: collision with root package name */
        private CharSequence f55474a;

        /* renamed from: b  reason: collision with root package name */
        private Bitmap f55475b;

        /* renamed from: c  reason: collision with root package name */
        private Layout.Alignment f55476c;

        /* renamed from: d  reason: collision with root package name */
        private Layout.Alignment f55477d;

        /* renamed from: e  reason: collision with root package name */
        private float f55478e;

        /* renamed from: f  reason: collision with root package name */
        private int f55479f;

        /* renamed from: g  reason: collision with root package name */
        private int f55480g;

        /* renamed from: h  reason: collision with root package name */
        private float f55481h;

        /* renamed from: i  reason: collision with root package name */
        private int f55482i;

        /* renamed from: j  reason: collision with root package name */
        private int f55483j;

        /* renamed from: k  reason: collision with root package name */
        private float f55484k;

        /* renamed from: l  reason: collision with root package name */
        private float f55485l;

        /* renamed from: m  reason: collision with root package name */
        private float f55486m;

        /* renamed from: n  reason: collision with root package name */
        private boolean f55487n;

        /* renamed from: o  reason: collision with root package name */
        private int f55488o;

        /* renamed from: p  reason: collision with root package name */
        private int f55489p;

        /* renamed from: q  reason: collision with root package name */
        private float f55490q;

        public b a() {
            return new b(this.f55474a, this.f55476c, this.f55477d, this.f55475b, this.f55478e, this.f55479f, this.f55480g, this.f55481h, this.f55482i, this.f55483j, this.f55484k, this.f55485l, this.f55486m, this.f55487n, this.f55488o, this.f55489p, this.f55490q);
        }

        public C0782b b() {
            this.f55487n = false;
            return this;
        }

        public int c() {
            return this.f55480g;
        }

        public int d() {
            return this.f55482i;
        }

        public CharSequence e() {
            return this.f55474a;
        }

        public C0782b f(Bitmap bitmap) {
            this.f55475b = bitmap;
            return this;
        }

        public C0782b g(float f10) {
            this.f55486m = f10;
            return this;
        }

        public C0782b h(float f10, int i10) {
            this.f55478e = f10;
            this.f55479f = i10;
            return this;
        }

        public C0782b i(int i10) {
            this.f55480g = i10;
            return this;
        }

        public C0782b j(Layout.Alignment alignment) {
            this.f55477d = alignment;
            return this;
        }

        public C0782b k(float f10) {
            this.f55481h = f10;
            return this;
        }

        public C0782b l(int i10) {
            this.f55482i = i10;
            return this;
        }

        public C0782b m(float f10) {
            this.f55490q = f10;
            return this;
        }

        public C0782b n(float f10) {
            this.f55485l = f10;
            return this;
        }

        public C0782b o(CharSequence charSequence) {
            this.f55474a = charSequence;
            return this;
        }

        public C0782b p(Layout.Alignment alignment) {
            this.f55476c = alignment;
            return this;
        }

        public C0782b q(float f10, int i10) {
            this.f55484k = f10;
            this.f55483j = i10;
            return this;
        }

        public C0782b r(int i10) {
            this.f55489p = i10;
            return this;
        }

        public C0782b s(int i10) {
            this.f55488o = i10;
            this.f55487n = true;
            return this;
        }

        public C0782b() {
            this.f55474a = null;
            this.f55475b = null;
            this.f55476c = null;
            this.f55477d = null;
            this.f55478e = -3.4028235E38f;
            this.f55479f = Integer.MIN_VALUE;
            this.f55480g = Integer.MIN_VALUE;
            this.f55481h = -3.4028235E38f;
            this.f55482i = Integer.MIN_VALUE;
            this.f55483j = Integer.MIN_VALUE;
            this.f55484k = -3.4028235E38f;
            this.f55485l = -3.4028235E38f;
            this.f55486m = -3.4028235E38f;
            this.f55487n = false;
            this.f55488o = -16777216;
            this.f55489p = Integer.MIN_VALUE;
        }

        private C0782b(b bVar) {
            this.f55474a = bVar.f55459d;
            this.f55475b = bVar.f55462o;
            this.f55476c = bVar.f55460e;
            this.f55477d = bVar.f55461i;
            this.f55478e = bVar.f55463p;
            this.f55479f = bVar.f55464q;
            this.f55480g = bVar.f55465r;
            this.f55481h = bVar.f55466s;
            this.f55482i = bVar.f55467t;
            this.f55483j = bVar.f55472y;
            this.f55484k = bVar.f55473z;
            this.f55485l = bVar.f55468u;
            this.f55486m = bVar.f55469v;
            this.f55487n = bVar.f55470w;
            this.f55488o = bVar.f55471x;
            this.f55489p = bVar.A;
            this.f55490q = bVar.B;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b c(Bundle bundle) {
        C0782b c0782b = new C0782b();
        CharSequence charSequence = bundle.getCharSequence(D);
        if (charSequence != null) {
            c0782b.o(charSequence);
        }
        Layout.Alignment alignment = (Layout.Alignment) bundle.getSerializable(E);
        if (alignment != null) {
            c0782b.p(alignment);
        }
        Layout.Alignment alignment2 = (Layout.Alignment) bundle.getSerializable(F);
        if (alignment2 != null) {
            c0782b.j(alignment2);
        }
        Bitmap bitmap = (Bitmap) bundle.getParcelable(G);
        if (bitmap != null) {
            c0782b.f(bitmap);
        }
        String str = H;
        if (bundle.containsKey(str)) {
            String str2 = I;
            if (bundle.containsKey(str2)) {
                c0782b.h(bundle.getFloat(str), bundle.getInt(str2));
            }
        }
        String str3 = J;
        if (bundle.containsKey(str3)) {
            c0782b.i(bundle.getInt(str3));
        }
        String str4 = K;
        if (bundle.containsKey(str4)) {
            c0782b.k(bundle.getFloat(str4));
        }
        String str5 = L;
        if (bundle.containsKey(str5)) {
            c0782b.l(bundle.getInt(str5));
        }
        String str6 = N;
        if (bundle.containsKey(str6)) {
            String str7 = M;
            if (bundle.containsKey(str7)) {
                c0782b.q(bundle.getFloat(str6), bundle.getInt(str7));
            }
        }
        String str8 = O;
        if (bundle.containsKey(str8)) {
            c0782b.n(bundle.getFloat(str8));
        }
        String str9 = P;
        if (bundle.containsKey(str9)) {
            c0782b.g(bundle.getFloat(str9));
        }
        String str10 = Q;
        if (bundle.containsKey(str10)) {
            c0782b.s(bundle.getInt(str10));
        }
        if (!bundle.getBoolean(R, false)) {
            c0782b.b();
        }
        String str11 = S;
        if (bundle.containsKey(str11)) {
            c0782b.r(bundle.getInt(str11));
        }
        String str12 = T;
        if (bundle.containsKey(str12)) {
            c0782b.m(bundle.getFloat(str12));
        }
        return c0782b.a();
    }

    public C0782b b() {
        return new C0782b();
    }

    public boolean equals(Object obj) {
        Bitmap bitmap;
        Bitmap bitmap2;
        if (this == obj) {
            return true;
        }
        if (obj != null && b.class == obj.getClass()) {
            b bVar = (b) obj;
            if (TextUtils.equals(this.f55459d, bVar.f55459d) && this.f55460e == bVar.f55460e && this.f55461i == bVar.f55461i && ((bitmap = this.f55462o) != null ? !((bitmap2 = bVar.f55462o) == null || !bitmap.sameAs(bitmap2)) : bVar.f55462o == null) && this.f55463p == bVar.f55463p && this.f55464q == bVar.f55464q && this.f55465r == bVar.f55465r && this.f55466s == bVar.f55466s && this.f55467t == bVar.f55467t && this.f55468u == bVar.f55468u && this.f55469v == bVar.f55469v && this.f55470w == bVar.f55470w && this.f55471x == bVar.f55471x && this.f55472y == bVar.f55472y && this.f55473z == bVar.f55473z && this.A == bVar.A && this.B == bVar.B) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return li.j.b(this.f55459d, this.f55460e, this.f55461i, this.f55462o, Float.valueOf(this.f55463p), Integer.valueOf(this.f55464q), Integer.valueOf(this.f55465r), Float.valueOf(this.f55466s), Integer.valueOf(this.f55467t), Float.valueOf(this.f55468u), Float.valueOf(this.f55469v), Boolean.valueOf(this.f55470w), Integer.valueOf(this.f55471x), Integer.valueOf(this.f55472y), Float.valueOf(this.f55473z), Integer.valueOf(this.A), Float.valueOf(this.B));
    }

    private b(CharSequence charSequence, Layout.Alignment alignment, Layout.Alignment alignment2, Bitmap bitmap, float f10, int i10, int i11, float f11, int i12, int i13, float f12, float f13, float f14, boolean z10, int i14, int i15, float f15) {
        if (charSequence == null) {
            ne.a.e(bitmap);
        } else {
            ne.a.a(bitmap == null);
        }
        if (charSequence instanceof Spanned) {
            this.f55459d = SpannedString.valueOf(charSequence);
        } else if (charSequence != null) {
            this.f55459d = charSequence.toString();
        } else {
            this.f55459d = null;
        }
        this.f55460e = alignment;
        this.f55461i = alignment2;
        this.f55462o = bitmap;
        this.f55463p = f10;
        this.f55464q = i10;
        this.f55465r = i11;
        this.f55466s = f11;
        this.f55467t = i12;
        this.f55468u = f13;
        this.f55469v = f14;
        this.f55470w = z10;
        this.f55471x = i14;
        this.f55472y = i13;
        this.f55473z = f12;
        this.A = i15;
        this.B = f15;
    }
}
