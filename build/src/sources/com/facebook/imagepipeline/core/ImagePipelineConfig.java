package com.facebook.imagepipeline.core;

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
import la.k;
import la.l;
import la.n;
import la.p;
import la.s;
import la.w;
import la.z;
import m8.g;
import na.j;
import na.o;
import na.r;
import o8.m;
import qa.c;
import qa.e;
import va.y;
import za.d;
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
    private final pa.a G;
    private final w H;
    private final w I;
    private final g J;
    private final la.a K;
    private final Map L;

    /* renamed from: a  reason: collision with root package name */
    private final Bitmap.Config f11133a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f11134b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f11135c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f11136d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f11137e;

    /* renamed from: f  reason: collision with root package name */
    private final k f11138f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f11139g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f11140h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f11141i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f11142j;

    /* renamed from: k  reason: collision with root package name */
    private final na.n f11143k;

    /* renamed from: l  reason: collision with root package name */
    private final s f11144l;

    /* renamed from: m  reason: collision with root package name */
    private final c f11145m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11146n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11147o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f11148p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f11149q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f11150r;

    /* renamed from: s  reason: collision with root package name */
    private final r8.d f11151s;

    /* renamed from: t  reason: collision with root package name */
    private final int f11152t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f11153u;

    /* renamed from: v  reason: collision with root package name */
    private final int f11154v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f11155w;

    /* renamed from: x  reason: collision with root package name */
    private final y f11156x;

    /* renamed from: y  reason: collision with root package name */
    private final e f11157y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f11158z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0160a F;
        private boolean G;
        private pa.a H;
        private w I;
        private w J;
        private g K;
        private la.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f11159a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f11160b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f11161c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f11162d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f11163e;

        /* renamed from: f  reason: collision with root package name */
        private k f11164f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f11165g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f11166h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f11167i;

        /* renamed from: j  reason: collision with root package name */
        private na.n f11168j;

        /* renamed from: k  reason: collision with root package name */
        private s f11169k;

        /* renamed from: l  reason: collision with root package name */
        private c f11170l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f11171m;

        /* renamed from: n  reason: collision with root package name */
        private d f11172n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f11173o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f11174p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f11175q;

        /* renamed from: r  reason: collision with root package name */
        private r8.d f11176r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f11177s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f11178t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f11179u;

        /* renamed from: v  reason: collision with root package name */
        private y f11180v;

        /* renamed from: w  reason: collision with root package name */
        private e f11181w;

        /* renamed from: x  reason: collision with root package name */
        private Set f11182x;

        /* renamed from: y  reason: collision with root package name */
        private Set f11183y;

        /* renamed from: z  reason: collision with root package name */
        private Set f11184z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f11166h = DownsampleMode.f11111e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0160a(this);
            this.G = true;
            this.H = new pa.b();
            this.f11165g = context;
        }

        public final c A() {
            return this.f11170l;
        }

        public final qa.d B() {
            return null;
        }

        public final d C() {
            return this.f11172n;
        }

        public final Integer D() {
            return this.f11173o;
        }

        public final DiskCacheConfig E() {
            return this.f11175q;
        }

        public final Integer F() {
            return this.f11177s;
        }

        public final r8.d G() {
            return this.f11176r;
        }

        public final NetworkFetcher H() {
            return this.f11178t;
        }

        public final PlatformBitmapFactory I() {
            return this.f11179u;
        }

        public final y J() {
            return this.f11180v;
        }

        public final e K() {
            return this.f11181w;
        }

        public final Set L() {
            return this.f11183y;
        }

        public final Set M() {
            return this.f11182x;
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
            return this.f11174p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f11160b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f11164f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f11110d);
                return this;
            }
            U(DownsampleMode.f11111e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f11166h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f11175q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f11178t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f11180v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f11182x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0160a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f11159a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f11161c;
        }

        public final la.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f11160b;
        }

        public final w.a h() {
            return this.f11162d;
        }

        public final k i() {
            return this.f11164f;
        }

        public final k8.a j() {
            return null;
        }

        public final pa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f11165g;
        }

        public final Set m() {
            return this.f11184z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f11166h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f11171m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f11167i;
        }

        public final w.a u() {
            return this.f11163e;
        }

        public final na.n v() {
            return this.f11168j;
        }

        public final a.C0160a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f11169k;
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
            if (!ya.b.d()) {
                n10 = DiskCacheConfig.m(context).n();
            } else {
                ya.b.a("DiskCacheConfig.getDefaultMainDiskCacheConfig");
                try {
                    n10 = DiskCacheConfig.m(context).n();
                } finally {
                    ya.b.b();
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
        public final void j(x8.b bVar, com.facebook.imagepipeline.core.a aVar, x8.a aVar2) {
            x8.c.f53478c = bVar;
            aVar.z();
            if (aVar2 != null) {
                bVar.a(aVar2);
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
        private boolean f11185a;

        public final boolean a() {
            return this.f11185a;
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

    @Override // na.r
    public Set A() {
        return this.B;
    }

    @Override // na.r
    public s B() {
        return this.f11144l;
    }

    @Override // na.r
    public Supplier C() {
        return this.f11149q;
    }

    @Override // na.r
    public r8.d D() {
        return this.f11151s;
    }

    @Override // na.r
    public DownsampleMode E() {
        return this.f11140h;
    }

    @Override // na.r
    public k8.a F() {
        return null;
    }

    @Override // na.r
    public com.facebook.imagepipeline.core.a G() {
        return this.E;
    }

    @Override // na.r
    public na.n H() {
        return this.f11143k;
    }

    @Override // na.r
    public Set a() {
        return this.A;
    }

    @Override // na.r
    public NetworkFetcher b() {
        return this.f11153u;
    }

    @Override // na.r
    public w c() {
        return this.I;
    }

    @Override // na.r
    public DiskCacheConfig d() {
        return this.f11150r;
    }

    @Override // na.r
    public Set e() {
        return this.f11158z;
    }

    @Override // na.r
    public w.a f() {
        return this.f11136d;
    }

    @Override // na.r
    public w.a g() {
        return this.f11135c;
    }

    @Override // na.r
    public Context getContext() {
        return this.f11139g;
    }

    @Override // na.r
    public e h() {
        return this.f11157y;
    }

    @Override // na.r
    public Map i() {
        return this.L;
    }

    @Override // na.r
    public DiskCacheConfig j() {
        return this.D;
    }

    @Override // na.r
    public n.b k() {
        return this.f11137e;
    }

    @Override // na.r
    public g l() {
        return this.J;
    }

    @Override // na.r
    public Integer m() {
        return this.f11148p;
    }

    @Override // na.r
    public d n() {
        return this.f11146n;
    }

    @Override // na.r
    public qa.d o() {
        return null;
    }

    @Override // na.r
    public boolean p() {
        return this.F;
    }

    @Override // na.r
    public Supplier q() {
        return this.f11134b;
    }

    @Override // na.r
    public c r() {
        return this.f11145m;
    }

    @Override // na.r
    public Supplier s() {
        return this.f11142j;
    }

    @Override // na.r
    public y t() {
        return this.f11156x;
    }

    @Override // na.r
    public int u() {
        return this.f11152t;
    }

    @Override // na.r
    public Supplier v() {
        return this.f11141i;
    }

    @Override // na.r
    public pa.a w() {
        return this.G;
    }

    @Override // na.r
    public la.a x() {
        return this.K;
    }

    @Override // na.r
    public k y() {
        return this.f11138f;
    }

    @Override // na.r
    public boolean z() {
        return this.C;
    }

    private ImagePipelineConfig(Builder builder) {
        NetworkFetcher H;
        if (ya.b.d()) {
            ya.b.a("ImagePipelineConfig()");
        }
        this.E = builder.w().d();
        Supplier g10 = builder.g();
        if (g10 == null) {
            Object systemService = builder.l().getSystemService("activity");
            if (systemService != null) {
                Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.app.ActivityManager");
                g10 = new la.o((ActivityManager) systemService);
            } else {
                throw new IllegalStateException("Required value was null.");
            }
        }
        this.f11134b = g10;
        w.a h10 = builder.h();
        this.f11135c = h10 == null ? new la.c() : h10;
        w.a u10 = builder.u();
        this.f11136d = u10 == null ? new la.y() : u10;
        this.f11137e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f11133a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f11138f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f11139g = l10;
            this.f11140h = builder.p();
            Supplier t10 = builder.t();
            this.f11142j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f11144l = z10;
            this.f11145m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f42628b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f11147o = BOOLEAN_FALSE;
            a aVar = M;
            this.f11146n = aVar.g(builder);
            this.f11148p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f42627a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f11149q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f11150r = E == null ? aVar.f(builder.l()) : E;
            r8.d G = builder.G();
            if (G == null) {
                G = r8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f11151s = G;
            this.f11152t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f11154v = y10;
            if (!ya.b.d()) {
                H = builder.H();
                if (H == null) {
                    H = new b0(y10);
                }
            } else {
                ya.b.a("ImagePipelineConfig->mNetworkFetcher");
                try {
                    H = builder.H();
                    H = H == null ? new b0(y10) : H;
                } finally {
                    ya.b.b();
                }
            }
            this.f11153u = H;
            this.f11155w = builder.I();
            y J = builder.J();
            this.f11156x = J == null ? new y(va.w.n().m()) : J;
            e K = builder.K();
            this.f11157y = K == null ? new qa.g() : K;
            Set M2 = builder.M();
            this.f11158z = M2 == null ? x0.d() : M2;
            Set L = builder.L();
            this.A = L == null ? x0.d() : L;
            Set m10 = builder.m();
            this.B = m10 == null ? x0.d() : m10;
            this.C = builder.N();
            DiskCacheConfig P = builder.P();
            this.D = P == null ? d() : P;
            builder.B();
            int e10 = t().e();
            na.n v10 = builder.v();
            this.f11143k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
            this.F = builder.n();
            builder.j();
            this.G = builder.k();
            this.H = builder.d();
            la.a f10 = builder.f();
            this.K = f10 == null ? new l() : f10;
            this.I = builder.s();
            this.J = builder.O();
            this.L = builder.q();
            Supplier o10 = builder.o();
            if (o10 == null) {
                o x10 = builder.x();
                o10 = new j(x10 == null ? new na.k(new na.m()) : x10, this);
            }
            this.f11141i = o10;
            x8.b y11 = G().y();
            if (y11 != null) {
                aVar.j(y11, G(), new ka.c(t()));
            }
            if (ya.b.d()) {
                return;
            }
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }
}
