package oa;

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
    protected ContentResolver f40413a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f40414b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f40415c;

    /* renamed from: d  reason: collision with root package name */
    protected final s8.a f40416d;

    /* renamed from: e  reason: collision with root package name */
    protected final ra.c f40417e;

    /* renamed from: f  reason: collision with root package name */
    protected final ra.e f40418f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f40419g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f40420h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f40421i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f40422j;

    /* renamed from: k  reason: collision with root package name */
    protected final s8.i f40423k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f40424l;

    /* renamed from: m  reason: collision with root package name */
    protected final ma.w f40425m;

    /* renamed from: n  reason: collision with root package name */
    protected final ma.w f40426n;

    /* renamed from: o  reason: collision with root package name */
    protected final ma.k f40427o;

    /* renamed from: p  reason: collision with root package name */
    protected final ma.d f40428p;

    /* renamed from: q  reason: collision with root package name */
    protected final ma.d f40429q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f40430r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f40431s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f40432t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f40433u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f40434v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f40435w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f40436x;

    public x(Context context, s8.a aVar, ra.c cVar, ra.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, s8.i iVar, ma.w wVar, ma.w wVar2, Supplier supplier, ma.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f40413a = context.getApplicationContext().getContentResolver();
        this.f40414b = context.getApplicationContext().getResources();
        this.f40415c = context.getApplicationContext().getAssets();
        this.f40416d = aVar;
        this.f40417e = cVar;
        this.f40418f = eVar;
        this.f40419g = downsampleMode;
        this.f40420h = z10;
        this.f40421i = z11;
        this.f40422j = nVar;
        this.f40423k = iVar;
        this.f40426n = wVar;
        this.f40425m = wVar2;
        this.f40424l = supplier;
        this.f40427o = kVar;
        this.f40430r = platformBitmapFactory;
        this.f40428p = new ma.d(i13);
        this.f40429q = new ma.d(i13);
        this.f40431s = i10;
        this.f40432t = i11;
        this.f40433u = z12;
        this.f40435w = i12;
        this.f40434v = aVar2;
        this.f40436x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f40426n, this.f40427o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f40430r, this.f40422j.e());
    }

    public a1 C() {
        return new a1(this.f40422j.f(), this.f40423k, this.f40413a);
    }

    public c1 D(w0 w0Var, boolean z10, ab.d dVar) {
        return new c1(this.f40422j.e(), this.f40423k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f40422j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f40426n, this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f40426n, this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f40431s, this.f40432t, this.f40433u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f40425m, this.f40424l, this.f40427o, this.f40428p, this.f40429q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f40423k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f40416d, this.f40422j.d(), this.f40417e, this.f40418f, this.f40419g, this.f40420h, this.f40421i, w0Var, this.f40435w, this.f40434v, null, p8.m.f43065b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f40422j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f40424l, this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f40424l, this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f40427o, this.f40436x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f40425m, this.f40427o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f40424l, this.f40427o, this.f40428p, this.f40429q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f40422j.f(), this.f40423k, this.f40415c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f40422j.f(), this.f40423k, this.f40413a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f40422j.f(), this.f40423k, this.f40413a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f40422j.g(), this.f40423k, this.f40413a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f40422j.f(), this.f40423k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f40422j.f(), this.f40423k, this.f40414b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f40422j.e(), this.f40413a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f40422j.f(), this.f40413a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f40423k, this.f40416d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f40424l, this.f40427o, this.f40423k, this.f40416d, w0Var);
    }
}
