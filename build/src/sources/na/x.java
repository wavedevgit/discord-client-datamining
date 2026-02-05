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
    protected ContentResolver f39359a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f39360b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f39361c;

    /* renamed from: d  reason: collision with root package name */
    protected final r8.a f39362d;

    /* renamed from: e  reason: collision with root package name */
    protected final qa.c f39363e;

    /* renamed from: f  reason: collision with root package name */
    protected final qa.e f39364f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f39365g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f39366h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f39367i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f39368j;

    /* renamed from: k  reason: collision with root package name */
    protected final r8.i f39369k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f39370l;

    /* renamed from: m  reason: collision with root package name */
    protected final la.w f39371m;

    /* renamed from: n  reason: collision with root package name */
    protected final la.w f39372n;

    /* renamed from: o  reason: collision with root package name */
    protected final la.k f39373o;

    /* renamed from: p  reason: collision with root package name */
    protected final la.d f39374p;

    /* renamed from: q  reason: collision with root package name */
    protected final la.d f39375q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f39376r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f39377s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f39378t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f39379u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f39380v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f39381w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f39382x;

    public x(Context context, r8.a aVar, qa.c cVar, qa.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, r8.i iVar, la.w wVar, la.w wVar2, Supplier supplier, la.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f39359a = context.getApplicationContext().getContentResolver();
        this.f39360b = context.getApplicationContext().getResources();
        this.f39361c = context.getApplicationContext().getAssets();
        this.f39362d = aVar;
        this.f39363e = cVar;
        this.f39364f = eVar;
        this.f39365g = downsampleMode;
        this.f39366h = z10;
        this.f39367i = z11;
        this.f39368j = nVar;
        this.f39369k = iVar;
        this.f39372n = wVar;
        this.f39371m = wVar2;
        this.f39370l = supplier;
        this.f39373o = kVar;
        this.f39376r = platformBitmapFactory;
        this.f39374p = new la.d(i13);
        this.f39375q = new la.d(i13);
        this.f39377s = i10;
        this.f39378t = i11;
        this.f39379u = z12;
        this.f39381w = i12;
        this.f39380v = aVar2;
        this.f39382x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f39372n, this.f39373o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f39376r, this.f39368j.e());
    }

    public a1 C() {
        return new a1(this.f39368j.f(), this.f39369k, this.f39359a);
    }

    public c1 D(w0 w0Var, boolean z10, za.d dVar) {
        return new c1(this.f39368j.e(), this.f39369k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f39368j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f39372n, this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f39372n, this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f39377s, this.f39378t, this.f39379u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f39371m, this.f39370l, this.f39373o, this.f39374p, this.f39375q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f39369k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f39362d, this.f39368j.d(), this.f39363e, this.f39364f, this.f39365g, this.f39366h, this.f39367i, w0Var, this.f39381w, this.f39380v, null, o8.m.f42334b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f39368j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f39370l, this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f39370l, this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f39373o, this.f39382x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f39371m, this.f39373o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f39370l, this.f39373o, this.f39374p, this.f39375q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f39368j.f(), this.f39369k, this.f39361c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f39368j.f(), this.f39369k, this.f39359a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f39368j.f(), this.f39369k, this.f39359a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f39368j.g(), this.f39369k, this.f39359a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f39368j.f(), this.f39369k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f39368j.f(), this.f39369k, this.f39360b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f39368j.e(), this.f39359a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f39368j.f(), this.f39359a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f39369k, this.f39362d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f39370l, this.f39373o, this.f39369k, this.f39362d, w0Var);
    }
}
