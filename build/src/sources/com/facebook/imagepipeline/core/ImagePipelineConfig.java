package com.facebook.imagepipeline.core;

import ab.d;
import android.app.ActivityManager;
import android.content.Context;
import android.graphics.Bitmap;
import android.os.Build;
import com.facebook.cache.disk.DiskCacheConfig;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.cache.DefaultCacheKeyFactory;
import com.facebook.imagepipeline.core.a;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import com.facebook.imagepipeline.producers.b0;
import java.util.Map;
import java.util.Set;
import kotlin.collections.x0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ma.k;
import ma.l;
import ma.n;
import ma.p;
import ma.s;
import ma.w;
import ma.z;
import n8.g;
import oa.j;
import oa.o;
import oa.r;
import p8.m;
import ra.c;
import ra.e;
import wa.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImagePipelineConfig implements r {
    public static final a M = new a(null);
    private static b N = new b();
    private final Set A;
    private final Set B;
    private final boolean C;
    private final DiskCacheConfig D;
    private final com.facebook.imagepipeline.core.a E;
    private final boolean F;
    private final qa.a G;
    private final w H;
    private final w I;
    private final g J;
    private final ma.a K;
    private final Map L;

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.Config f11102a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f11103b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f11104c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f11105d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f11106e;

    /* renamed from: f  reason: collision with root package name */
    private final k f11107f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f11108g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f11109h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f11110i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f11111j;

    /* renamed from: k  reason: collision with root package name */
    private final oa.n f11112k;

    /* renamed from: l  reason: collision with root package name */
    private final s f11113l;

    /* renamed from: m  reason: collision with root package name */
    private final c f11114m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11115n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11116o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f11117p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f11118q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f11119r;

    /* renamed from: s  reason: collision with root package name */
    private final s8.d f11120s;

    /* renamed from: t  reason: collision with root package name */
    private final int f11121t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f11122u;

    /* renamed from: v  reason: collision with root package name */
    private final int f11123v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f11124w;

    /* renamed from: x  reason: collision with root package name */
    private final y f11125x;

    /* renamed from: y  reason: collision with root package name */
    private final e f11126y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f11127z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0154a F;
        private boolean G;
        private qa.a H;
        private w I;
        private w J;
        private g K;
        private ma.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f11128a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f11129b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f11130c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f11131d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f11132e;

        /* renamed from: f  reason: collision with root package name */
        private k f11133f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f11134g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f11135h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f11136i;

        /* renamed from: j  reason: collision with root package name */
        private oa.n f11137j;

        /* renamed from: k  reason: collision with root package name */
        private s f11138k;

        /* renamed from: l  reason: collision with root package name */
        private c f11139l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f11140m;

        /* renamed from: n  reason: collision with root package name */
        private d f11141n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f11142o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f11143p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f11144q;

        /* renamed from: r  reason: collision with root package name */
        private s8.d f11145r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f11146s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f11147t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f11148u;

        /* renamed from: v  reason: collision with root package name */
        private y f11149v;

        /* renamed from: w  reason: collision with root package name */
        private e f11150w;

        /* renamed from: x  reason: collision with root package name */
        private Set f11151x;

        /* renamed from: y  reason: collision with root package name */
        private Set f11152y;

        /* renamed from: z  reason: collision with root package name */
        private Set f11153z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f11135h = DownsampleMode.f11080e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0154a(this);
            this.G = true;
            this.H = new qa.b();
            this.f11134g = context;
        }

        public final c A() {
            return this.f11139l;
        }

        public final ra.d B() {
            return null;
        }

        public final d C() {
            return this.f11141n;
        }

        public final Integer D() {
            return this.f11142o;
        }

        public final DiskCacheConfig E() {
            return this.f11144q;
        }

        public final Integer F() {
            return this.f11146s;
        }

        public final s8.d G() {
            return this.f11145r;
        }

        public final NetworkFetcher H() {
            return this.f11147t;
        }

        public final PlatformBitmapFactory I() {
            return this.f11148u;
        }

        public final y J() {
            return this.f11149v;
        }

        public final e K() {
            return this.f11150w;
        }

        public final Set L() {
            return this.f11152y;
        }

        public final Set M() {
            return this.f11151x;
        }

        public final boolean N() {
            return this.A;
        }

        public final g O() {
            return this.K;
        }

        public final DiskCacheConfig P() {
            return this.B;
        }

        public final Supplier Q() {
            return this.f11143p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f11129b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f11133f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f11079d);
                return this;
            }
            U(DownsampleMode.f11080e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f11135h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f11144q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f11147t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f11149v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f11151x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0154a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f11128a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f11130c;
        }

        public final ma.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f11129b;
        }

        public final w.a h() {
            return this.f11131d;
        }

        public final k i() {
            return this.f11133f;
        }

        public final l8.a j() {
            return null;
        }

        public final qa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f11134g;
        }

        public final Set m() {
            return this.f11153z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f11135h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f11140m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f11136i;
        }

        public final w.a u() {
            return this.f11132e;
        }

        public final oa.n v() {
            return this.f11137j;
        }

        public final a.C0154a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f11138k;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final DiskCacheConfig f(Context context) {
            DiskCacheConfig n10;
            if (!za.b.d()) {
                n10 = DiskCacheConfig.m(context).n();
            } else {
                za.b.a("DiskCacheConfig.getDefaultMainDiskCacheConfig");
                try {
                    n10 = DiskCacheConfig.m(context).n();
                } finally {
                    za.b.b();
                }
            }
            Intrinsics.checkNotNullExpressionValue(n10, "traceSection(...)");
            return n10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final d g(Builder builder) {
            if (builder.C() != null && builder.D() != null) {
                throw new IllegalStateException("You can't define a custom ImageTranscoderFactory and provide an ImageTranscoderType");
            }
            return builder.C();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final int h(Builder builder, com.facebook.imagepipeline.core.a aVar) {
            Integer F = builder.F();
            if (F != null) {
                return F.intValue();
            }
            if (aVar.n() == 2 && Build.VERSION.SDK_INT >= 27) {
                return 2;
            }
            if (aVar.n() == 1) {
                return 1;
            }
            aVar.n();
            return 0;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void j(y8.b bVar, com.facebook.imagepipeline.core.a aVar, y8.a aVar2) {
            y8.c.f55473c = bVar;
            aVar.z();
            if (aVar2 != null) {
                bVar.b(aVar2);
            }
        }

        public final b e() {
            return ImagePipelineConfig.N;
        }

        public final Builder i(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            return new Builder(context);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private boolean f11154a;

        public final boolean a() {
            return this.f11154a;
        }
    }

    public /* synthetic */ ImagePipelineConfig(Builder builder, DefaultConstructorMarker defaultConstructorMarker) {
        this(builder);
    }

    public static final b J() {
        return M.e();
    }

    public static final Builder K(Context context) {
        return M.i(context);
    }

    @Override // oa.r
    public Set A() {
        return this.B;
    }

    @Override // oa.r
    public s B() {
        return this.f11113l;
    }

    @Override // oa.r
    public Supplier C() {
        return this.f11118q;
    }

    @Override // oa.r
    public s8.d D() {
        return this.f11120s;
    }

    @Override // oa.r
    public DownsampleMode E() {
        return this.f11109h;
    }

    @Override // oa.r
    public l8.a F() {
        return null;
    }

    @Override // oa.r
    public com.facebook.imagepipeline.core.a G() {
        return this.E;
    }

    @Override // oa.r
    public oa.n H() {
        return this.f11112k;
    }

    @Override // oa.r
    public Set a() {
        return this.A;
    }

    @Override // oa.r
    public NetworkFetcher b() {
        return this.f11122u;
    }

    @Override // oa.r
    public w c() {
        return this.I;
    }

    @Override // oa.r
    public DiskCacheConfig d() {
        return this.f11119r;
    }

    @Override // oa.r
    public Set e() {
        return this.f11127z;
    }

    @Override // oa.r
    public w.a f() {
        return this.f11105d;
    }

    @Override // oa.r
    public w.a g() {
        return this.f11104c;
    }

    @Override // oa.r
    public Context getContext() {
        return this.f11108g;
    }

    @Override // oa.r
    public e h() {
        return this.f11126y;
    }

    @Override // oa.r
    public Map i() {
        return this.L;
    }

    @Override // oa.r
    public DiskCacheConfig j() {
        return this.D;
    }

    @Override // oa.r
    public n.b k() {
        return this.f11106e;
    }

    @Override // oa.r
    public g l() {
        return this.J;
    }

    @Override // oa.r
    public Integer m() {
        return this.f11117p;
    }

    @Override // oa.r
    public d n() {
        return this.f11115n;
    }

    @Override // oa.r
    public ra.d o() {
        return null;
    }

    @Override // oa.r
    public boolean p() {
        return this.F;
    }

    @Override // oa.r
    public Supplier q() {
        return this.f11103b;
    }

    @Override // oa.r
    public c r() {
        return this.f11114m;
    }

    @Override // oa.r
    public Supplier s() {
        return this.f11111j;
    }

    @Override // oa.r
    public y t() {
        return this.f11125x;
    }

    @Override // oa.r
    public int u() {
        return this.f11121t;
    }

    @Override // oa.r
    public Supplier v() {
        return this.f11110i;
    }

    @Override // oa.r
    public qa.a w() {
        return this.G;
    }

    @Override // oa.r
    public ma.a x() {
        return this.K;
    }

    @Override // oa.r
    public k y() {
        return this.f11107f;
    }

    @Override // oa.r
    public boolean z() {
        return this.C;
    }

    private ImagePipelineConfig(Builder builder) {
        NetworkFetcher H;
        if (za.b.d()) {
            za.b.a("ImagePipelineConfig()");
        }
        this.E = builder.w().d();
        Supplier g10 = builder.g();
        if (g10 == null) {
            Object systemService = builder.l().getSystemService("activity");
            if (systemService != null) {
                Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.ActivityManager");
                g10 = new ma.o((ActivityManager) systemService);
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        this.f11103b = g10;
        w.a h10 = builder.h();
        this.f11104c = h10 == null ? new ma.c() : h10;
        w.a u10 = builder.u();
        this.f11105d = u10 == null ? new ma.y() : u10;
        this.f11106e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f11102a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f11107f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f11108g = l10;
            this.f11109h = builder.p();
            Supplier t10 = builder.t();
            this.f11111j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f11113l = z10;
            this.f11114m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f41523b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f11116o = BOOLEAN_FALSE;
            a aVar = M;
            this.f11115n = aVar.g(builder);
            this.f11117p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f41522a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f11118q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f11119r = E == null ? aVar.f(builder.l()) : E;
            s8.d G = builder.G();
            if (G == null) {
                G = s8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f11120s = G;
            this.f11121t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f11123v = y10;
            if (!za.b.d()) {
                H = builder.H();
                if (H == null) {
                    H = new b0(y10);
                }
            } else {
                za.b.a("ImagePipelineConfig->mNetworkFetcher");
                try {
                    H = builder.H();
                    H = H == null ? new b0(y10) : H;
                } finally {
                    za.b.b();
                }
            }
            this.f11122u = H;
            this.f11124w = builder.I();
            y J = builder.J();
            this.f11125x = J == null ? new y(wa.w.n().m()) : J;
            e K = builder.K();
            this.f11126y = K == null ? new ra.g() : K;
            Set M2 = builder.M();
            this.f11127z = M2 == null ? x0.d() : M2;
            Set L = builder.L();
            this.A = L == null ? x0.d() : L;
            Set m10 = builder.m();
            this.B = m10 == null ? x0.d() : m10;
            this.C = builder.N();
            DiskCacheConfig P = builder.P();
            this.D = P == null ? d() : P;
            builder.B();
            int e10 = t().e();
            oa.n v10 = builder.v();
            this.f11112k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
            this.F = builder.n();
            builder.j();
            this.G = builder.k();
            this.H = builder.d();
            ma.a f10 = builder.f();
            this.K = f10 == null ? new l() : f10;
            this.I = builder.s();
            this.J = builder.O();
            this.L = builder.q();
            Supplier o10 = builder.o();
            if (o10 == null) {
                o x10 = builder.x();
                o10 = new j(x10 == null ? new oa.k(new oa.m()) : x10, this);
            }
            this.f11110i = o10;
            y8.b y11 = G().y();
            if (y11 != null) {
                aVar.j(y11, G(), new la.c(t()));
            }
            if (za.b.d()) {
                return;
            }
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }
}
