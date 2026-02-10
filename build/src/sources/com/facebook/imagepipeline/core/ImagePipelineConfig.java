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
    private final Bitmap.Config f10525a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10526b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f10527c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f10528d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f10529e;

    /* renamed from: f  reason: collision with root package name */
    private final k f10530f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f10531g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f10532h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f10533i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f10534j;

    /* renamed from: k  reason: collision with root package name */
    private final oa.n f10535k;

    /* renamed from: l  reason: collision with root package name */
    private final s f10536l;

    /* renamed from: m  reason: collision with root package name */
    private final c f10537m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10538n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10539o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f10540p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f10541q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f10542r;

    /* renamed from: s  reason: collision with root package name */
    private final s8.d f10543s;

    /* renamed from: t  reason: collision with root package name */
    private final int f10544t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f10545u;

    /* renamed from: v  reason: collision with root package name */
    private final int f10546v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f10547w;

    /* renamed from: x  reason: collision with root package name */
    private final y f10548x;

    /* renamed from: y  reason: collision with root package name */
    private final e f10549y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f10550z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0177a F;
        private boolean G;
        private qa.a H;
        private w I;
        private w J;
        private g K;
        private ma.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f10551a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f10552b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f10553c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f10554d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f10555e;

        /* renamed from: f  reason: collision with root package name */
        private k f10556f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f10557g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f10558h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f10559i;

        /* renamed from: j  reason: collision with root package name */
        private oa.n f10560j;

        /* renamed from: k  reason: collision with root package name */
        private s f10561k;

        /* renamed from: l  reason: collision with root package name */
        private c f10562l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f10563m;

        /* renamed from: n  reason: collision with root package name */
        private d f10564n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f10565o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f10566p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f10567q;

        /* renamed from: r  reason: collision with root package name */
        private s8.d f10568r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f10569s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f10570t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f10571u;

        /* renamed from: v  reason: collision with root package name */
        private y f10572v;

        /* renamed from: w  reason: collision with root package name */
        private e f10573w;

        /* renamed from: x  reason: collision with root package name */
        private Set f10574x;

        /* renamed from: y  reason: collision with root package name */
        private Set f10575y;

        /* renamed from: z  reason: collision with root package name */
        private Set f10576z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f10558h = DownsampleMode.f10503e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0177a(this);
            this.G = true;
            this.H = new qa.b();
            this.f10557g = context;
        }

        public final c A() {
            return this.f10562l;
        }

        public final ra.d B() {
            return null;
        }

        public final d C() {
            return this.f10564n;
        }

        public final Integer D() {
            return this.f10565o;
        }

        public final DiskCacheConfig E() {
            return this.f10567q;
        }

        public final Integer F() {
            return this.f10569s;
        }

        public final s8.d G() {
            return this.f10568r;
        }

        public final NetworkFetcher H() {
            return this.f10570t;
        }

        public final PlatformBitmapFactory I() {
            return this.f10571u;
        }

        public final y J() {
            return this.f10572v;
        }

        public final e K() {
            return this.f10573w;
        }

        public final Set L() {
            return this.f10575y;
        }

        public final Set M() {
            return this.f10574x;
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
            return this.f10566p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f10552b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f10556f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f10502d);
                return this;
            }
            U(DownsampleMode.f10503e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f10558h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f10567q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f10570t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f10572v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f10574x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0177a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f10551a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f10553c;
        }

        public final ma.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f10552b;
        }

        public final w.a h() {
            return this.f10554d;
        }

        public final k i() {
            return this.f10556f;
        }

        public final l8.a j() {
            return null;
        }

        public final qa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f10557g;
        }

        public final Set m() {
            return this.f10576z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f10558h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f10563m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f10559i;
        }

        public final w.a u() {
            return this.f10555e;
        }

        public final oa.n v() {
            return this.f10560j;
        }

        public final a.C0177a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f10561k;
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
            y8.c.f55542c = bVar;
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
        private boolean f10577a;

        public final boolean a() {
            return this.f10577a;
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
        return this.f10536l;
    }

    @Override // oa.r
    public Supplier C() {
        return this.f10541q;
    }

    @Override // oa.r
    public s8.d D() {
        return this.f10543s;
    }

    @Override // oa.r
    public DownsampleMode E() {
        return this.f10532h;
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
        return this.f10535k;
    }

    @Override // oa.r
    public Set a() {
        return this.A;
    }

    @Override // oa.r
    public NetworkFetcher b() {
        return this.f10545u;
    }

    @Override // oa.r
    public w c() {
        return this.I;
    }

    @Override // oa.r
    public DiskCacheConfig d() {
        return this.f10542r;
    }

    @Override // oa.r
    public Set e() {
        return this.f10550z;
    }

    @Override // oa.r
    public w.a f() {
        return this.f10528d;
    }

    @Override // oa.r
    public w.a g() {
        return this.f10527c;
    }

    @Override // oa.r
    public Context getContext() {
        return this.f10531g;
    }

    @Override // oa.r
    public e h() {
        return this.f10549y;
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
        return this.f10529e;
    }

    @Override // oa.r
    public g l() {
        return this.J;
    }

    @Override // oa.r
    public Integer m() {
        return this.f10540p;
    }

    @Override // oa.r
    public d n() {
        return this.f10538n;
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
        return this.f10526b;
    }

    @Override // oa.r
    public c r() {
        return this.f10537m;
    }

    @Override // oa.r
    public Supplier s() {
        return this.f10534j;
    }

    @Override // oa.r
    public y t() {
        return this.f10548x;
    }

    @Override // oa.r
    public int u() {
        return this.f10544t;
    }

    @Override // oa.r
    public Supplier v() {
        return this.f10533i;
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
        return this.f10530f;
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
        this.f10526b = g10;
        w.a h10 = builder.h();
        this.f10527c = h10 == null ? new ma.c() : h10;
        w.a u10 = builder.u();
        this.f10528d = u10 == null ? new ma.y() : u10;
        this.f10529e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f10525a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f10530f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f10531g = l10;
            this.f10532h = builder.p();
            Supplier t10 = builder.t();
            this.f10534j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f10536l = z10;
            this.f10537m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f43065b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f10539o = BOOLEAN_FALSE;
            a aVar = M;
            this.f10538n = aVar.g(builder);
            this.f10540p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f43064a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f10541q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f10542r = E == null ? aVar.f(builder.l()) : E;
            s8.d G = builder.G();
            if (G == null) {
                G = s8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f10543s = G;
            this.f10544t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f10546v = y10;
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
            this.f10545u = H;
            this.f10547w = builder.I();
            y J = builder.J();
            this.f10548x = J == null ? new y(wa.w.n().m()) : J;
            e K = builder.K();
            this.f10549y = K == null ? new ra.g() : K;
            Set M2 = builder.M();
            this.f10550z = M2 == null ? x0.d() : M2;
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
            this.f10535k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
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
            this.f10533i = o10;
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
