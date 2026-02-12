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
    protected ContentResolver f38740a;

    /* renamed from: b  reason: collision with root package name */
    protected Resources f38741b;

    /* renamed from: c  reason: collision with root package name */
    protected AssetManager f38742c;

    /* renamed from: d  reason: collision with root package name */
    protected final s8.a f38743d;

    /* renamed from: e  reason: collision with root package name */
    protected final ra.c f38744e;

    /* renamed from: f  reason: collision with root package name */
    protected final ra.e f38745f;

    /* renamed from: g  reason: collision with root package name */
    protected final DownsampleMode f38746g;

    /* renamed from: h  reason: collision with root package name */
    protected final boolean f38747h;

    /* renamed from: i  reason: collision with root package name */
    protected final boolean f38748i;

    /* renamed from: j  reason: collision with root package name */
    protected final n f38749j;

    /* renamed from: k  reason: collision with root package name */
    protected final s8.i f38750k;

    /* renamed from: l  reason: collision with root package name */
    protected final Supplier f38751l;

    /* renamed from: m  reason: collision with root package name */
    protected final ma.w f38752m;

    /* renamed from: n  reason: collision with root package name */
    protected final ma.w f38753n;

    /* renamed from: o  reason: collision with root package name */
    protected final ma.k f38754o;

    /* renamed from: p  reason: collision with root package name */
    protected final ma.d f38755p;

    /* renamed from: q  reason: collision with root package name */
    protected final ma.d f38756q;

    /* renamed from: r  reason: collision with root package name */
    protected final PlatformBitmapFactory f38757r;

    /* renamed from: s  reason: collision with root package name */
    protected final int f38758s;

    /* renamed from: t  reason: collision with root package name */
    protected final int f38759t;

    /* renamed from: u  reason: collision with root package name */
    protected boolean f38760u;

    /* renamed from: v  reason: collision with root package name */
    protected final a f38761v;

    /* renamed from: w  reason: collision with root package name */
    protected final int f38762w;

    /* renamed from: x  reason: collision with root package name */
    protected final boolean f38763x;

    public x(Context context, s8.a aVar, ra.c cVar, ra.e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, s8.i iVar, ma.w wVar, ma.w wVar2, Supplier supplier, ma.k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, a aVar2, boolean z13, int i13) {
        this.f38740a = context.getApplicationContext().getContentResolver();
        this.f38741b = context.getApplicationContext().getResources();
        this.f38742c = context.getApplicationContext().getAssets();
        this.f38743d = aVar;
        this.f38744e = cVar;
        this.f38745f = eVar;
        this.f38746g = downsampleMode;
        this.f38747h = z10;
        this.f38748i = z11;
        this.f38749j = nVar;
        this.f38750k = iVar;
        this.f38753n = wVar;
        this.f38752m = wVar2;
        this.f38751l = supplier;
        this.f38754o = kVar;
        this.f38757r = platformBitmapFactory;
        this.f38755p = new ma.d(i13);
        this.f38756q = new ma.d(i13);
        this.f38758s = i10;
        this.f38759t = i11;
        this.f38760u = z12;
        this.f38762w = i12;
        this.f38761v = aVar2;
        this.f38763x = z13;
    }

    public static com.facebook.imagepipeline.producers.a a(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.a(w0Var);
    }

    public static com.facebook.imagepipeline.producers.l h(w0 w0Var, w0 w0Var2) {
        return new com.facebook.imagepipeline.producers.l(w0Var, w0Var2);
    }

    public t0 A(w0 w0Var) {
        return new t0(this.f38753n, this.f38754o, w0Var);
    }

    public u0 B(w0 w0Var) {
        return new u0(w0Var, this.f38757r, this.f38749j.e());
    }

    public a1 C() {
        return new a1(this.f38749j.f(), this.f38750k, this.f38740a);
    }

    public c1 D(w0 w0Var, boolean z10, ab.d dVar) {
        return new c1(this.f38749j.e(), this.f38750k, w0Var, z10, dVar);
    }

    public f1 E(w0 w0Var) {
        return new f1(w0Var);
    }

    public j1 F(w0 w0Var) {
        return new j1(5, this.f38749j.a(), w0Var);
    }

    public l1 G(m1[] m1VarArr) {
        return new l1(m1VarArr);
    }

    public w0 b(w0 w0Var, h1 h1Var) {
        return new g1(w0Var, h1Var);
    }

    public com.facebook.imagepipeline.producers.g c(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.g(this.f38753n, this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.h d(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.h(this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.i e(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.i(this.f38753n, this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.j f(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.j(w0Var, this.f38758s, this.f38759t, this.f38760u);
    }

    public com.facebook.imagepipeline.producers.k g(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.k(this.f38752m, this.f38751l, this.f38754o, this.f38755p, this.f38756q, w0Var);
    }

    public com.facebook.imagepipeline.producers.n i() {
        return new com.facebook.imagepipeline.producers.n(this.f38750k);
    }

    public com.facebook.imagepipeline.producers.o j(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.o(this.f38743d, this.f38749j.d(), this.f38744e, this.f38745f, this.f38746g, this.f38747h, this.f38748i, w0Var, this.f38762w, this.f38761v, null, p8.m.f41524b);
    }

    public com.facebook.imagepipeline.producers.r k(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.r(w0Var, this.f38749j.c());
    }

    public com.facebook.imagepipeline.producers.u l(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.u(this.f38751l, this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.v m(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.v(this.f38751l, this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.x n(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.x(this.f38754o, this.f38763x, w0Var);
    }

    public w0 o(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.y(this.f38752m, this.f38754o, w0Var);
    }

    public com.facebook.imagepipeline.producers.z p(w0 w0Var) {
        return new com.facebook.imagepipeline.producers.z(this.f38751l, this.f38754o, this.f38755p, this.f38756q, w0Var);
    }

    public com.facebook.imagepipeline.producers.f0 q() {
        return new com.facebook.imagepipeline.producers.f0(this.f38749j.f(), this.f38750k, this.f38742c);
    }

    public com.facebook.imagepipeline.producers.g0 r() {
        return new com.facebook.imagepipeline.producers.g0(this.f38749j.f(), this.f38750k, this.f38740a);
    }

    public com.facebook.imagepipeline.producers.h0 s() {
        return new com.facebook.imagepipeline.producers.h0(this.f38749j.f(), this.f38750k, this.f38740a);
    }

    public LocalExifThumbnailProducer t() {
        return new LocalExifThumbnailProducer(this.f38749j.g(), this.f38750k, this.f38740a);
    }

    public com.facebook.imagepipeline.producers.k0 u() {
        return new com.facebook.imagepipeline.producers.k0(this.f38749j.f(), this.f38750k);
    }

    public com.facebook.imagepipeline.producers.l0 v() {
        return new com.facebook.imagepipeline.producers.l0(this.f38749j.f(), this.f38750k, this.f38741b);
    }

    public com.facebook.imagepipeline.producers.m0 w() {
        return new com.facebook.imagepipeline.producers.m0(this.f38749j.e(), this.f38740a);
    }

    public com.facebook.imagepipeline.producers.n0 x() {
        return new com.facebook.imagepipeline.producers.n0(this.f38749j.f(), this.f38740a);
    }

    public w0 y(NetworkFetcher networkFetcher) {
        return new com.facebook.imagepipeline.producers.q0(this.f38750k, this.f38743d, networkFetcher);
    }

    public r0 z(w0 w0Var) {
        return new r0(this.f38751l, this.f38754o, this.f38750k, this.f38743d, w0Var);
    }
}
