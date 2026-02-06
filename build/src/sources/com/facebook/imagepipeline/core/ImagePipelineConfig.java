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
    private final Bitmap.Config f10385a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10386b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f10387c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f10388d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f10389e;

    /* renamed from: f  reason: collision with root package name */
    private final k f10390f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f10391g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f10392h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f10393i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f10394j;

    /* renamed from: k  reason: collision with root package name */
    private final na.n f10395k;

    /* renamed from: l  reason: collision with root package name */
    private final s f10396l;

    /* renamed from: m  reason: collision with root package name */
    private final c f10397m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10398n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10399o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f10400p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f10401q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f10402r;

    /* renamed from: s  reason: collision with root package name */
    private final r8.d f10403s;

    /* renamed from: t  reason: collision with root package name */
    private final int f10404t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f10405u;

    /* renamed from: v  reason: collision with root package name */
    private final int f10406v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f10407w;

    /* renamed from: x  reason: collision with root package name */
    private final y f10408x;

    /* renamed from: y  reason: collision with root package name */
    private final e f10409y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f10410z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0150a F;
        private boolean G;
        private pa.a H;
        private w I;
        private w J;
        private g K;
        private la.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f10411a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f10412b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f10413c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f10414d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f10415e;

        /* renamed from: f  reason: collision with root package name */
        private k f10416f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f10417g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f10418h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f10419i;

        /* renamed from: j  reason: collision with root package name */
        private na.n f10420j;

        /* renamed from: k  reason: collision with root package name */
        private s f10421k;

        /* renamed from: l  reason: collision with root package name */
        private c f10422l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f10423m;

        /* renamed from: n  reason: collision with root package name */
        private d f10424n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f10425o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f10426p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f10427q;

        /* renamed from: r  reason: collision with root package name */
        private r8.d f10428r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f10429s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f10430t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f10431u;

        /* renamed from: v  reason: collision with root package name */
        private y f10432v;

        /* renamed from: w  reason: collision with root package name */
        private e f10433w;

        /* renamed from: x  reason: collision with root package name */
        private Set f10434x;

        /* renamed from: y  reason: collision with root package name */
        private Set f10435y;

        /* renamed from: z  reason: collision with root package name */
        private Set f10436z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f10418h = DownsampleMode.f10363e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0150a(this);
            this.G = true;
            this.H = new pa.b();
            this.f10417g = context;
        }

        public final c A() {
            return this.f10422l;
        }

        public final qa.d B() {
            return null;
        }

        public final d C() {
            return this.f10424n;
        }

        public final Integer D() {
            return this.f10425o;
        }

        public final DiskCacheConfig E() {
            return this.f10427q;
        }

        public final Integer F() {
            return this.f10429s;
        }

        public final r8.d G() {
            return this.f10428r;
        }

        public final NetworkFetcher H() {
            return this.f10430t;
        }

        public final PlatformBitmapFactory I() {
            return this.f10431u;
        }

        public final y J() {
            return this.f10432v;
        }

        public final e K() {
            return this.f10433w;
        }

        public final Set L() {
            return this.f10435y;
        }

        public final Set M() {
            return this.f10434x;
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
            return this.f10426p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f10412b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f10416f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f10362d);
                return this;
            }
            U(DownsampleMode.f10363e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f10418h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f10427q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f10430t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f10432v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f10434x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0150a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f10411a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f10413c;
        }

        public final la.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f10412b;
        }

        public final w.a h() {
            return this.f10414d;
        }

        public final k i() {
            return this.f10416f;
        }

        public final k8.a j() {
            return null;
        }

        public final pa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f10417g;
        }

        public final Set m() {
            return this.f10436z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f10418h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f10423m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f10419i;
        }

        public final w.a u() {
            return this.f10415e;
        }

        public final na.n v() {
            return this.f10420j;
        }

        public final a.C0150a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f10421k;
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
            x8.c.f54559c = bVar;
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
        private boolean f10437a;

        public final boolean a() {
            return this.f10437a;
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
        return this.f10396l;
    }

    @Override // na.r
    public Supplier C() {
        return this.f10401q;
    }

    @Override // na.r
    public r8.d D() {
        return this.f10403s;
    }

    @Override // na.r
    public DownsampleMode E() {
        return this.f10392h;
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
        return this.f10395k;
    }

    @Override // na.r
    public Set a() {
        return this.A;
    }

    @Override // na.r
    public NetworkFetcher b() {
        return this.f10405u;
    }

    @Override // na.r
    public w c() {
        return this.I;
    }

    @Override // na.r
    public DiskCacheConfig d() {
        return this.f10402r;
    }

    @Override // na.r
    public Set e() {
        return this.f10410z;
    }

    @Override // na.r
    public w.a f() {
        return this.f10388d;
    }

    @Override // na.r
    public w.a g() {
        return this.f10387c;
    }

    @Override // na.r
    public Context getContext() {
        return this.f10391g;
    }

    @Override // na.r
    public e h() {
        return this.f10409y;
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
        return this.f10389e;
    }

    @Override // na.r
    public g l() {
        return this.J;
    }

    @Override // na.r
    public Integer m() {
        return this.f10400p;
    }

    @Override // na.r
    public d n() {
        return this.f10398n;
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
        return this.f10386b;
    }

    @Override // na.r
    public c r() {
        return this.f10397m;
    }

    @Override // na.r
    public Supplier s() {
        return this.f10394j;
    }

    @Override // na.r
    public y t() {
        return this.f10408x;
    }

    @Override // na.r
    public int u() {
        return this.f10404t;
    }

    @Override // na.r
    public Supplier v() {
        return this.f10393i;
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
        return this.f10390f;
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
        this.f10386b = g10;
        w.a h10 = builder.h();
        this.f10387c = h10 == null ? new la.c() : h10;
        w.a u10 = builder.u();
        this.f10388d = u10 == null ? new la.y() : u10;
        this.f10389e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f10385a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f10390f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f10391g = l10;
            this.f10392h = builder.p();
            Supplier t10 = builder.t();
            this.f10394j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f10396l = z10;
            this.f10397m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f41557b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f10399o = BOOLEAN_FALSE;
            a aVar = M;
            this.f10398n = aVar.g(builder);
            this.f10400p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f41556a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f10401q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f10402r = E == null ? aVar.f(builder.l()) : E;
            r8.d G = builder.G();
            if (G == null) {
                G = r8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f10403s = G;
            this.f10404t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f10406v = y10;
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
            this.f10405u = H;
            this.f10407w = builder.I();
            y J = builder.J();
            this.f10408x = J == null ? new y(va.w.n().m()) : J;
            e K = builder.K();
            this.f10409y = K == null ? new qa.g() : K;
            Set M2 = builder.M();
            this.f10410z = M2 == null ? x0.d() : M2;
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
            this.f10395k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
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
            this.f10393i = o10;
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
