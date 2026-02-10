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
    protected ContentResolver f38739a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f38740b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f38741c;

    /* renamed from: d  reason: collision with root package name */
    protected final s8.a f38742d;

    /* renamed from: e  reason: collision with root package name */
    protected final ra.c f38743e;

    /* renamed from: f  reason: collision with root package name */
    protected final ra.e f38744f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f38745g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f38746h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f38747i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f38748j;

    /* renamed from: k  reason: collision with root package name */
    protected final s8.i f38749k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f38750l;

    /* renamed from: m  reason: collision with root package name */
    protected final ma.w f38751m;

    /* renamed from: n  reason: collision with root package name */
    protected final ma.w f38752n;

    /* renamed from: o  reason: collision with root package name */
    protected final ma.k f38753o;

    /* renamed from: p  reason: collision with root package name */
    protected final ma.d f38754p;

    /* renamed from: q  reason: collision with root package name */
    protected final ma.d f38755q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f38756r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f38757s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f38758t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f38759u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f38760v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f38761w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f38762x;

    public x(Context context, s8.a aVar, ra.c cVar, ra.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, s8.i iVar, ma.w wVar, ma.w wVar2, Supplier supplier, ma.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f38739a = context.getApplicationContext().getContentResolver();
        this.f38740b = context.getApplicationContext().getResources();
        this.f38741c = context.getApplicationContext().getAssets();
        this.f38742d = aVar;
        this.f38743e = cVar;
        this.f38744f = eVar;
        this.f38745g = downsampleMode;
        this.f38746h = z10;
        this.f38747i = z11;
        this.f38748j = nVar;
        this.f38749k = iVar;
        this.f38752n = wVar;
        this.f38751m = wVar2;
        this.f38750l = supplier;
        this.f38753o = kVar;
        this.f38756r = platformBitmapFactory;
        this.f38754p = new ma.d(i13);
        this.f38755q = new ma.d(i13);
        this.f38757s = i10;
        this.f38758t = i11;
        this.f38759u = z12;
        this.f38761w = i12;
        this.f38760v = aVar2;
        this.f38762x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f38752n, this.f38753o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f38756r, this.f38748j.e());
    }

    public a1 C() {
        return new a1(this.f38748j.f(), this.f38749k, this.f38739a);
    }

    public c1 D(w0 w0Var, boolean z10, ab.d dVar) {
        return new c1(this.f38748j.e(), this.f38749k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f38748j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f38752n, this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f38752n, this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f38757s, this.f38758t, this.f38759u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f38751m, this.f38750l, this.f38753o, this.f38754p, this.f38755q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f38749k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f38742d, this.f38748j.d(), this.f38743e, this.f38744f, this.f38745g, this.f38746h, this.f38747i, w0Var, this.f38761w, this.f38760v, null, p8.m.f41523b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f38748j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f38750l, this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f38750l, this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f38753o, this.f38762x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f38751m, this.f38753o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f38750l, this.f38753o, this.f38754p, this.f38755q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f38748j.f(), this.f38749k, this.f38741c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f38748j.f(), this.f38749k, this.f38739a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f38748j.f(), this.f38749k, this.f38739a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f38748j.g(), this.f38749k, this.f38739a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f38748j.f(), this.f38749k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f38748j.f(), this.f38749k, this.f38740b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f38748j.e(), this.f38739a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f38748j.f(), this.f38739a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f38749k, this.f38742d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f38750l, this.f38753o, this.f38749k, this.f38742d, w0Var);
    }
}
