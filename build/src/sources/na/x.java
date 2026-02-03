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
    protected ContentResolver f39860a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f39861b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f39862c;

    /* renamed from: d  reason: collision with root package name */
    protected final r8.a f39863d;

    /* renamed from: e  reason: collision with root package name */
    protected final qa.c f39864e;

    /* renamed from: f  reason: collision with root package name */
    protected final qa.e f39865f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f39866g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f39867h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f39868i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f39869j;

    /* renamed from: k  reason: collision with root package name */
    protected final r8.i f39870k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f39871l;

    /* renamed from: m  reason: collision with root package name */
    protected final la.w f39872m;

    /* renamed from: n  reason: collision with root package name */
    protected final la.w f39873n;

    /* renamed from: o  reason: collision with root package name */
    protected final la.k f39874o;

    /* renamed from: p  reason: collision with root package name */
    protected final la.d f39875p;

    /* renamed from: q  reason: collision with root package name */
    protected final la.d f39876q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f39877r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f39878s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f39879t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f39880u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f39881v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f39882w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f39883x;

    public x(Context context, r8.a aVar, qa.c cVar, qa.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, r8.i iVar, la.w wVar, la.w wVar2, Supplier supplier, la.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f39860a = context.getApplicationContext().getContentResolver();
        this.f39861b = context.getApplicationContext().getResources();
        this.f39862c = context.getApplicationContext().getAssets();
        this.f39863d = aVar;
        this.f39864e = cVar;
        this.f39865f = eVar;
        this.f39866g = downsampleMode;
        this.f39867h = z10;
        this.f39868i = z11;
        this.f39869j = nVar;
        this.f39870k = iVar;
        this.f39873n = wVar;
        this.f39872m = wVar2;
        this.f39871l = supplier;
        this.f39874o = kVar;
        this.f39877r = platformBitmapFactory;
        this.f39875p = new la.d(i13);
        this.f39876q = new la.d(i13);
        this.f39878s = i10;
        this.f39879t = i11;
        this.f39880u = z12;
        this.f39882w = i12;
        this.f39881v = aVar2;
        this.f39883x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f39873n, this.f39874o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f39877r, this.f39869j.e());
    }

    public a1 C() {
        return new a1(this.f39869j.f(), this.f39870k, this.f39860a);
    }

    public c1 D(w0 w0Var, boolean z10, za.d dVar) {
        return new c1(this.f39869j.e(), this.f39870k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f39869j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f39873n, this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f39873n, this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f39878s, this.f39879t, this.f39880u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f39872m, this.f39871l, this.f39874o, this.f39875p, this.f39876q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f39870k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f39863d, this.f39869j.d(), this.f39864e, this.f39865f, this.f39866g, this.f39867h, this.f39868i, w0Var, this.f39882w, this.f39881v, null, o8.m.f42628b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f39869j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f39871l, this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f39871l, this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f39874o, this.f39883x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f39872m, this.f39874o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f39871l, this.f39874o, this.f39875p, this.f39876q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f39869j.f(), this.f39870k, this.f39862c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f39869j.f(), this.f39870k, this.f39860a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f39869j.f(), this.f39870k, this.f39860a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f39869j.g(), this.f39870k, this.f39860a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f39869j.f(), this.f39870k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f39869j.f(), this.f39870k, this.f39861b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f39869j.e(), this.f39860a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f39869j.f(), this.f39860a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f39870k, this.f39863d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f39871l, this.f39874o, this.f39870k, this.f39863d, w0Var);
    }
}
