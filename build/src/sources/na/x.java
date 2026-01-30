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
    protected ContentResolver f39997a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f39998b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f39999c;

    /* renamed from: d  reason: collision with root package name */
    protected final r8.a f40000d;

    /* renamed from: e  reason: collision with root package name */
    protected final qa.c f40001e;

    /* renamed from: f  reason: collision with root package name */
    protected final qa.e f40002f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f40003g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f40004h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f40005i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f40006j;

    /* renamed from: k  reason: collision with root package name */
    protected final r8.i f40007k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f40008l;

    /* renamed from: m  reason: collision with root package name */
    protected final la.w f40009m;

    /* renamed from: n  reason: collision with root package name */
    protected final la.w f40010n;

    /* renamed from: o  reason: collision with root package name */
    protected final la.k f40011o;

    /* renamed from: p  reason: collision with root package name */
    protected final la.d f40012p;

    /* renamed from: q  reason: collision with root package name */
    protected final la.d f40013q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f40014r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f40015s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f40016t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f40017u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f40018v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f40019w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f40020x;

    public x(Context context, r8.a aVar, qa.c cVar, qa.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, r8.i iVar, la.w wVar, la.w wVar2, Supplier supplier, la.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f39997a = context.getApplicationContext().getContentResolver();
        this.f39998b = context.getApplicationContext().getResources();
        this.f39999c = context.getApplicationContext().getAssets();
        this.f40000d = aVar;
        this.f40001e = cVar;
        this.f40002f = eVar;
        this.f40003g = downsampleMode;
        this.f40004h = z10;
        this.f40005i = z11;
        this.f40006j = nVar;
        this.f40007k = iVar;
        this.f40010n = wVar;
        this.f40009m = wVar2;
        this.f40008l = supplier;
        this.f40011o = kVar;
        this.f40014r = platformBitmapFactory;
        this.f40012p = new la.d(i13);
        this.f40013q = new la.d(i13);
        this.f40015s = i10;
        this.f40016t = i11;
        this.f40017u = z12;
        this.f40019w = i12;
        this.f40018v = aVar2;
        this.f40020x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f40010n, this.f40011o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f40014r, this.f40006j.e());
    }

    public a1 C() {
        return new a1(this.f40006j.f(), this.f40007k, this.f39997a);
    }

    public c1 D(w0 w0Var, boolean z10, za.d dVar) {
        return new c1(this.f40006j.e(), this.f40007k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f40006j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f40010n, this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f40010n, this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f40015s, this.f40016t, this.f40017u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f40009m, this.f40008l, this.f40011o, this.f40012p, this.f40013q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f40007k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f40000d, this.f40006j.d(), this.f40001e, this.f40002f, this.f40003g, this.f40004h, this.f40005i, w0Var, this.f40019w, this.f40018v, null, o8.m.f42500b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f40006j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f40008l, this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f40008l, this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f40011o, this.f40020x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f40009m, this.f40011o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f40008l, this.f40011o, this.f40012p, this.f40013q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f40006j.f(), this.f40007k, this.f39999c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f40006j.f(), this.f40007k, this.f39997a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f40006j.f(), this.f40007k, this.f39997a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f40006j.g(), this.f40007k, this.f39997a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f40006j.f(), this.f40007k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f40006j.f(), this.f40007k, this.f39998b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f40006j.e(), this.f39997a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f40006j.f(), this.f39997a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f40007k, this.f40000d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f40008l, this.f40011o, this.f40007k, this.f40000d, w0Var);
    }
}
