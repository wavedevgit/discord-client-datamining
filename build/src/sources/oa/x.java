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
    protected ContentResolver f39308a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f39309b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f39310c;

    /* renamed from: d  reason: collision with root package name */
    protected final s8.a f39311d;

    /* renamed from: e  reason: collision with root package name */
    protected final ra.c f39312e;

    /* renamed from: f  reason: collision with root package name */
    protected final ra.e f39313f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f39314g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f39315h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f39316i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f39317j;

    /* renamed from: k  reason: collision with root package name */
    protected final s8.i f39318k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f39319l;

    /* renamed from: m  reason: collision with root package name */
    protected final ma.w f39320m;

    /* renamed from: n  reason: collision with root package name */
    protected final ma.w f39321n;

    /* renamed from: o  reason: collision with root package name */
    protected final ma.k f39322o;

    /* renamed from: p  reason: collision with root package name */
    protected final ma.d f39323p;

    /* renamed from: q  reason: collision with root package name */
    protected final ma.d f39324q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f39325r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f39326s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f39327t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f39328u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f39329v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f39330w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f39331x;

    public x(Context context, s8.a aVar, ra.c cVar, ra.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, s8.i iVar, ma.w wVar, ma.w wVar2, Supplier supplier, ma.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f39308a = context.getApplicationContext().getContentResolver();
        this.f39309b = context.getApplicationContext().getResources();
        this.f39310c = context.getApplicationContext().getAssets();
        this.f39311d = aVar;
        this.f39312e = cVar;
        this.f39313f = eVar;
        this.f39314g = downsampleMode;
        this.f39315h = z10;
        this.f39316i = z11;
        this.f39317j = nVar;
        this.f39318k = iVar;
        this.f39321n = wVar;
        this.f39320m = wVar2;
        this.f39319l = supplier;
        this.f39322o = kVar;
        this.f39325r = platformBitmapFactory;
        this.f39323p = new ma.d(i13);
        this.f39324q = new ma.d(i13);
        this.f39326s = i10;
        this.f39327t = i11;
        this.f39328u = z12;
        this.f39330w = i12;
        this.f39329v = aVar2;
        this.f39331x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f39321n, this.f39322o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f39325r, this.f39317j.e());
    }

    public a1 C() {
        return new a1(this.f39317j.f(), this.f39318k, this.f39308a);
    }

    public c1 D(w0 w0Var, boolean z10, ab.d dVar) {
        return new c1(this.f39317j.e(), this.f39318k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f39317j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f39321n, this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f39321n, this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f39326s, this.f39327t, this.f39328u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f39320m, this.f39319l, this.f39322o, this.f39323p, this.f39324q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f39318k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f39311d, this.f39317j.d(), this.f39312e, this.f39313f, this.f39314g, this.f39315h, this.f39316i, w0Var, this.f39330w, this.f39329v, null, p8.m.f42092b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f39317j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f39319l, this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f39319l, this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f39322o, this.f39331x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f39320m, this.f39322o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f39319l, this.f39322o, this.f39323p, this.f39324q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f39317j.f(), this.f39318k, this.f39310c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f39317j.f(), this.f39318k, this.f39308a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f39317j.f(), this.f39318k, this.f39308a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f39317j.g(), this.f39318k, this.f39308a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f39317j.f(), this.f39318k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f39317j.f(), this.f39318k, this.f39309b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f39317j.e(), this.f39308a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f39317j.f(), this.f39308a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f39318k, this.f39311d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f39319l, this.f39322o, this.f39318k, this.f39311d, w0Var);
    }
}
