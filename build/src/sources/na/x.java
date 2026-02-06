package na;

import android.content.ContentResolver;
import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.producers.LocalExifThumbnailProducer;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import com.facebook.imagepipeline.producers.a1;
import com.facebook.imagepipeline.producers.c1;
import com.facebook.imagepipeline.producers.f1;
import com.facebook.imagepipeline.producers.g1;
import com.facebook.imagepipeline.producers.h1;
import com.facebook.imagepipeline.producers.j1;
import com.facebook.imagepipeline.producers.l1;
import com.facebook.imagepipeline.producers.m1;
import com.facebook.imagepipeline.producers.r0;
import com.facebook.imagepipeline.producers.t0;
import com.facebook.imagepipeline.producers.u0;
import com.facebook.imagepipeline.producers.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class x {

    /* renamed from: a  reason: collision with root package name */
    protected ContentResolver f38714a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f38715b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f38716c;

    /* renamed from: d  reason: collision with root package name */
    protected final r8.a f38717d;

    /* renamed from: e  reason: collision with root package name */
    protected final qa.c f38718e;

    /* renamed from: f  reason: collision with root package name */
    protected final qa.e f38719f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f38720g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f38721h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f38722i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f38723j;

    /* renamed from: k  reason: collision with root package name */
    protected final r8.i f38724k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f38725l;

    /* renamed from: m  reason: collision with root package name */
    protected final la.w f38726m;

    /* renamed from: n  reason: collision with root package name */
    protected final la.w f38727n;

    /* renamed from: o  reason: collision with root package name */
    protected final la.k f38728o;

    /* renamed from: p  reason: collision with root package name */
    protected final la.d f38729p;

    /* renamed from: q  reason: collision with root package name */
    protected final la.d f38730q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f38731r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f38732s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f38733t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f38734u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f38735v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f38736w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f38737x;

    public x(Context context, r8.a aVar, qa.c cVar, qa.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, r8.i iVar, la.w wVar, la.w wVar2, Supplier supplier, la.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f38714a = context.getApplicationContext().getContentResolver();
        this.f38715b = context.getApplicationContext().getResources();
        this.f38716c = context.getApplicationContext().getAssets();
        this.f38717d = aVar;
        this.f38718e = cVar;
        this.f38719f = eVar;
        this.f38720g = downsampleMode;
        this.f38721h = z10;
        this.f38722i = z11;
        this.f38723j = nVar;
        this.f38724k = iVar;
        this.f38727n = wVar;
        this.f38726m = wVar2;
        this.f38725l = supplier;
        this.f38728o = kVar;
        this.f38731r = platformBitmapFactory;
        this.f38729p = new la.d(i13);
        this.f38730q = new la.d(i13);
        this.f38732s = i10;
        this.f38733t = i11;
        this.f38734u = z12;
        this.f38736w = i12;
        this.f38735v = aVar2;
        this.f38737x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f38727n, this.f38728o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f38731r, this.f38723j.e());
    }

    public a1 C() {
        return new a1(this.f38723j.f(), this.f38724k, this.f38714a);
    }

    public c1 D(w0 w0Var, boolean z10, za.d dVar) {
        return new c1(this.f38723j.e(), this.f38724k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f38723j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f38727n, this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f38727n, this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f38732s, this.f38733t, this.f38734u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f38726m, this.f38725l, this.f38728o, this.f38729p, this.f38730q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f38724k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f38717d, this.f38723j.d(), this.f38718e, this.f38719f, this.f38720g, this.f38721h, this.f38722i, w0Var, this.f38736w, this.f38735v, null, o8.m.f41557b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f38723j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f38725l, this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f38725l, this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f38728o, this.f38737x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f38726m, this.f38728o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f38725l, this.f38728o, this.f38729p, this.f38730q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f38723j.f(), this.f38724k, this.f38716c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f38723j.f(), this.f38724k, this.f38714a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f38723j.f(), this.f38724k, this.f38714a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f38723j.g(), this.f38724k, this.f38714a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f38723j.f(), this.f38724k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f38723j.f(), this.f38724k, this.f38715b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f38723j.e(), this.f38714a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f38723j.f(), this.f38714a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f38724k, this.f38717d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f38725l, this.f38728o, this.f38724k, this.f38717d, w0Var);
    }
}
