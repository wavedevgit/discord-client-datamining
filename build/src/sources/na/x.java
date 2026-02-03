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
    protected ContentResolver f39899a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f39900b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f39901c;

    /* renamed from: d  reason: collision with root package name */
    protected final r8.a f39902d;

    /* renamed from: e  reason: collision with root package name */
    protected final qa.c f39903e;

    /* renamed from: f  reason: collision with root package name */
    protected final qa.e f39904f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f39905g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f39906h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f39907i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f39908j;

    /* renamed from: k  reason: collision with root package name */
    protected final r8.i f39909k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f39910l;

    /* renamed from: m  reason: collision with root package name */
    protected final la.w f39911m;

    /* renamed from: n  reason: collision with root package name */
    protected final la.w f39912n;

    /* renamed from: o  reason: collision with root package name */
    protected final la.k f39913o;

    /* renamed from: p  reason: collision with root package name */
    protected final la.d f39914p;

    /* renamed from: q  reason: collision with root package name */
    protected final la.d f39915q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f39916r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f39917s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f39918t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f39919u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f39920v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f39921w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f39922x;

    public x(Context context, r8.a aVar, qa.c cVar, qa.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, r8.i iVar, la.w wVar, la.w wVar2, Supplier supplier, la.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f39899a = context.getApplicationContext().getContentResolver();
        this.f39900b = context.getApplicationContext().getResources();
        this.f39901c = context.getApplicationContext().getAssets();
        this.f39902d = aVar;
        this.f39903e = cVar;
        this.f39904f = eVar;
        this.f39905g = downsampleMode;
        this.f39906h = z10;
        this.f39907i = z11;
        this.f39908j = nVar;
        this.f39909k = iVar;
        this.f39912n = wVar;
        this.f39911m = wVar2;
        this.f39910l = supplier;
        this.f39913o = kVar;
        this.f39916r = platformBitmapFactory;
        this.f39914p = new la.d(i13);
        this.f39915q = new la.d(i13);
        this.f39917s = i10;
        this.f39918t = i11;
        this.f39919u = z12;
        this.f39921w = i12;
        this.f39920v = aVar2;
        this.f39922x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f39912n, this.f39913o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f39916r, this.f39908j.e());
    }

    public a1 C() {
        return new a1(this.f39908j.f(), this.f39909k, this.f39899a);
    }

    public c1 D(w0 w0Var, boolean z10, za.d dVar) {
        return new c1(this.f39908j.e(), this.f39909k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f39908j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f39912n, this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f39912n, this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f39917s, this.f39918t, this.f39919u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f39911m, this.f39910l, this.f39913o, this.f39914p, this.f39915q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f39909k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f39902d, this.f39908j.d(), this.f39903e, this.f39904f, this.f39905g, this.f39906h, this.f39907i, w0Var, this.f39921w, this.f39920v, null, o8.m.f42428b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f39908j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f39910l, this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f39910l, this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f39913o, this.f39922x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f39911m, this.f39913o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f39910l, this.f39913o, this.f39914p, this.f39915q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f39908j.f(), this.f39909k, this.f39901c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f39908j.f(), this.f39909k, this.f39899a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f39908j.f(), this.f39909k, this.f39899a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f39908j.g(), this.f39909k, this.f39899a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f39908j.f(), this.f39909k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f39908j.f(), this.f39909k, this.f39900b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f39908j.e(), this.f39899a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f39908j.f(), this.f39899a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f39909k, this.f39902d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f39910l, this.f39913o, this.f39909k, this.f39902d, w0Var);
    }
}
