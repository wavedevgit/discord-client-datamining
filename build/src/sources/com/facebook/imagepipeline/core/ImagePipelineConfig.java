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
    private final Bitmap.Config f10486a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10487b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f10488c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f10489d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f10490e;

    /* renamed from: f  reason: collision with root package name */
    private final k f10491f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f10492g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f10493h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f10494i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f10495j;

    /* renamed from: k  reason: collision with root package name */
    private final na.n f10496k;

    /* renamed from: l  reason: collision with root package name */
    private final s f10497l;

    /* renamed from: m  reason: collision with root package name */
    private final c f10498m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10499n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10500o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f10501p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f10502q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f10503r;

    /* renamed from: s  reason: collision with root package name */
    private final r8.d f10504s;

    /* renamed from: t  reason: collision with root package name */
    private final int f10505t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f10506u;

    /* renamed from: v  reason: collision with root package name */
    private final int f10507v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f10508w;

    /* renamed from: x  reason: collision with root package name */
    private final y f10509x;

    /* renamed from: y  reason: collision with root package name */
    private final e f10510y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f10511z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0157a F;
        private boolean G;
        private pa.a H;
        private w I;
        private w J;
        private g K;
        private la.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f10512a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f10513b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f10514c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f10515d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f10516e;

        /* renamed from: f  reason: collision with root package name */
        private k f10517f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f10518g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f10519h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f10520i;

        /* renamed from: j  reason: collision with root package name */
        private na.n f10521j;

        /* renamed from: k  reason: collision with root package name */
        private s f10522k;

        /* renamed from: l  reason: collision with root package name */
        private c f10523l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f10524m;

        /* renamed from: n  reason: collision with root package name */
        private d f10525n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f10526o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f10527p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f10528q;

        /* renamed from: r  reason: collision with root package name */
        private r8.d f10529r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f10530s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f10531t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f10532u;

        /* renamed from: v  reason: collision with root package name */
        private y f10533v;

        /* renamed from: w  reason: collision with root package name */
        private e f10534w;

        /* renamed from: x  reason: collision with root package name */
        private Set f10535x;

        /* renamed from: y  reason: collision with root package name */
        private Set f10536y;

        /* renamed from: z  reason: collision with root package name */
        private Set f10537z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f10519h = DownsampleMode.f10464e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0157a(this);
            this.G = true;
            this.H = new pa.b();
            this.f10518g = context;
        }

        public final c A() {
            return this.f10523l;
        }

        public final qa.d B() {
            return null;
        }

        public final d C() {
            return this.f10525n;
        }

        public final Integer D() {
            return this.f10526o;
        }

        public final DiskCacheConfig E() {
            return this.f10528q;
        }

        public final Integer F() {
            return this.f10530s;
        }

        public final r8.d G() {
            return this.f10529r;
        }

        public final NetworkFetcher H() {
            return this.f10531t;
        }

        public final PlatformBitmapFactory I() {
            return this.f10532u;
        }

        public final y J() {
            return this.f10533v;
        }

        public final e K() {
            return this.f10534w;
        }

        public final Set L() {
            return this.f10536y;
        }

        public final Set M() {
            return this.f10535x;
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
            return this.f10527p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f10513b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f10517f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f10463d);
                return this;
            }
            U(DownsampleMode.f10464e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f10519h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f10528q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f10531t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f10533v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f10535x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0157a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f10512a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f10514c;
        }

        public final la.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f10513b;
        }

        public final w.a h() {
            return this.f10515d;
        }

        public final k i() {
            return this.f10517f;
        }

        public final k8.a j() {
            return null;
        }

        public final pa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f10518g;
        }

        public final Set m() {
            return this.f10537z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f10519h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f10524m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f10520i;
        }

        public final w.a u() {
            return this.f10516e;
        }

        public final na.n v() {
            return this.f10521j;
        }

        public final a.C0157a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f10522k;
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
            x8.c.f53740c = bVar;
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
        private boolean f10538a;

        public final boolean a() {
            return this.f10538a;
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
        return this.f10497l;
    }

    @Override // na.r
    public Supplier C() {
        return this.f10502q;
    }

    @Override // na.r
    public r8.d D() {
        return this.f10504s;
    }

    @Override // na.r
    public DownsampleMode E() {
        return this.f10493h;
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
        return this.f10496k;
    }

    @Override // na.r
    public Set a() {
        return this.A;
    }

    @Override // na.r
    public NetworkFetcher b() {
        return this.f10506u;
    }

    @Override // na.r
    public w c() {
        return this.I;
    }

    @Override // na.r
    public DiskCacheConfig d() {
        return this.f10503r;
    }

    @Override // na.r
    public Set e() {
        return this.f10511z;
    }

    @Override // na.r
    public w.a f() {
        return this.f10489d;
    }

    @Override // na.r
    public w.a g() {
        return this.f10488c;
    }

    @Override // na.r
    public Context getContext() {
        return this.f10492g;
    }

    @Override // na.r
    public e h() {
        return this.f10510y;
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
        return this.f10490e;
    }

    @Override // na.r
    public g l() {
        return this.J;
    }

    @Override // na.r
    public Integer m() {
        return this.f10501p;
    }

    @Override // na.r
    public d n() {
        return this.f10499n;
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
        return this.f10487b;
    }

    @Override // na.r
    public c r() {
        return this.f10498m;
    }

    @Override // na.r
    public Supplier s() {
        return this.f10495j;
    }

    @Override // na.r
    public y t() {
        return this.f10509x;
    }

    @Override // na.r
    public int u() {
        return this.f10505t;
    }

    @Override // na.r
    public Supplier v() {
        return this.f10494i;
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
        return this.f10491f;
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
        this.f10487b = g10;
        w.a h10 = builder.h();
        this.f10488c = h10 == null ? new la.c() : h10;
        w.a u10 = builder.u();
        this.f10489d = u10 == null ? new la.y() : u10;
        this.f10490e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f10486a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f10491f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f10492g = l10;
            this.f10493h = builder.p();
            Supplier t10 = builder.t();
            this.f10495j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f10497l = z10;
            this.f10498m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f42334b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f10500o = BOOLEAN_FALSE;
            a aVar = M;
            this.f10499n = aVar.g(builder);
            this.f10501p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f42333a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f10502q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f10503r = E == null ? aVar.f(builder.l()) : E;
            r8.d G = builder.G();
            if (G == null) {
                G = r8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f10504s = G;
            this.f10505t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f10507v = y10;
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
            this.f10506u = H;
            this.f10508w = builder.I();
            y J = builder.J();
            this.f10509x = J == null ? new y(va.w.n().m()) : J;
            e K = builder.K();
            this.f10510y = K == null ? new qa.g() : K;
            Set M2 = builder.M();
            this.f10511z = M2 == null ? x0.d() : M2;
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
            this.f10496k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
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
            this.f10494i = o10;
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
