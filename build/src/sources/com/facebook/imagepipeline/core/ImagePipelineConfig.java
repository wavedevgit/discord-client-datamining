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
    private final Bitmap.Config f10101a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10102b;

    /* renamed from: c  reason: collision with root package name */
    private final w.a f10103c;

    /* renamed from: d  reason: collision with root package name */
    private final w.a f10104d;

    /* renamed from: e  reason: collision with root package name */
    private final n.b f10105e;

    /* renamed from: f  reason: collision with root package name */
    private final k f10106f;

    /* renamed from: g  reason: collision with root package name */
    private final Context f10107g;

    /* renamed from: h  reason: collision with root package name */
    private final DownsampleMode f10108h;

    /* renamed from: i  reason: collision with root package name */
    private final Supplier f10109i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f10110j;

    /* renamed from: k  reason: collision with root package name */
    private final na.n f10111k;

    /* renamed from: l  reason: collision with root package name */
    private final s f10112l;

    /* renamed from: m  reason: collision with root package name */
    private final c f10113m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10114n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10115o;

    /* renamed from: p  reason: collision with root package name */
    private final Integer f10116p;

    /* renamed from: q  reason: collision with root package name */
    private final Supplier f10117q;

    /* renamed from: r  reason: collision with root package name */
    private final DiskCacheConfig f10118r;

    /* renamed from: s  reason: collision with root package name */
    private final r8.d f10119s;

    /* renamed from: t  reason: collision with root package name */
    private final int f10120t;

    /* renamed from: u  reason: collision with root package name */
    private final NetworkFetcher f10121u;

    /* renamed from: v  reason: collision with root package name */
    private final int f10122v;

    /* renamed from: w  reason: collision with root package name */
    private final PlatformBitmapFactory f10123w;

    /* renamed from: x  reason: collision with root package name */
    private final y f10124x;

    /* renamed from: y  reason: collision with root package name */
    private final e f10125y;

    /* renamed from: z  reason: collision with root package name */
    private final Set f10126z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Builder {
        private boolean A;
        private DiskCacheConfig B;
        private o C;
        private Supplier D;
        private int E;
        private final a.C0141a F;
        private boolean G;
        private pa.a H;
        private w I;
        private w J;
        private g K;
        private la.a L;
        private Map M;

        /* renamed from: a  reason: collision with root package name */
        private Bitmap.Config f10127a;

        /* renamed from: b  reason: collision with root package name */
        private Supplier f10128b;

        /* renamed from: c  reason: collision with root package name */
        private n.b f10129c;

        /* renamed from: d  reason: collision with root package name */
        private w.a f10130d;

        /* renamed from: e  reason: collision with root package name */
        private w.a f10131e;

        /* renamed from: f  reason: collision with root package name */
        private k f10132f;

        /* renamed from: g  reason: collision with root package name */
        private final Context f10133g;

        /* renamed from: h  reason: collision with root package name */
        private DownsampleMode f10134h;

        /* renamed from: i  reason: collision with root package name */
        private Supplier f10135i;

        /* renamed from: j  reason: collision with root package name */
        private na.n f10136j;

        /* renamed from: k  reason: collision with root package name */
        private s f10137k;

        /* renamed from: l  reason: collision with root package name */
        private c f10138l;

        /* renamed from: m  reason: collision with root package name */
        private Supplier f10139m;

        /* renamed from: n  reason: collision with root package name */
        private d f10140n;

        /* renamed from: o  reason: collision with root package name */
        private Integer f10141o;

        /* renamed from: p  reason: collision with root package name */
        private Supplier f10142p;

        /* renamed from: q  reason: collision with root package name */
        private DiskCacheConfig f10143q;

        /* renamed from: r  reason: collision with root package name */
        private r8.d f10144r;

        /* renamed from: s  reason: collision with root package name */
        private Integer f10145s;

        /* renamed from: t  reason: collision with root package name */
        private NetworkFetcher f10146t;

        /* renamed from: u  reason: collision with root package name */
        private PlatformBitmapFactory f10147u;

        /* renamed from: v  reason: collision with root package name */
        private y f10148v;

        /* renamed from: w  reason: collision with root package name */
        private e f10149w;

        /* renamed from: x  reason: collision with root package name */
        private Set f10150x;

        /* renamed from: y  reason: collision with root package name */
        private Set f10151y;

        /* renamed from: z  reason: collision with root package name */
        private Set f10152z;

        public Builder(Context context) {
            Intrinsics.checkNotNullParameter(context, "context");
            this.f10134h = DownsampleMode.f10079e;
            this.A = true;
            this.E = -1;
            this.F = new a.C0141a(this);
            this.G = true;
            this.H = new pa.b();
            this.f10133g = context;
        }

        public final c A() {
            return this.f10138l;
        }

        public final qa.d B() {
            return null;
        }

        public final d C() {
            return this.f10140n;
        }

        public final Integer D() {
            return this.f10141o;
        }

        public final DiskCacheConfig E() {
            return this.f10143q;
        }

        public final Integer F() {
            return this.f10145s;
        }

        public final r8.d G() {
            return this.f10144r;
        }

        public final NetworkFetcher H() {
            return this.f10146t;
        }

        public final PlatformBitmapFactory I() {
            return this.f10147u;
        }

        public final y J() {
            return this.f10148v;
        }

        public final e K() {
            return this.f10149w;
        }

        public final Set L() {
            return this.f10151y;
        }

        public final Set M() {
            return this.f10150x;
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
            return this.f10142p;
        }

        public final Builder R(Supplier supplier) {
            if (supplier != null) {
                this.f10128b = supplier;
                return this;
            }
            throw new IllegalStateException("Required value was null.");
        }

        public final Builder S(k kVar) {
            this.f10132f = kVar;
            return this;
        }

        public final Builder T(boolean z10) {
            if (z10) {
                U(DownsampleMode.f10078d);
                return this;
            }
            U(DownsampleMode.f10079e);
            return this;
        }

        public final Builder U(DownsampleMode downsampleMode) {
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            this.f10134h = downsampleMode;
            return this;
        }

        public final Builder V(DiskCacheConfig diskCacheConfig) {
            this.f10143q = diskCacheConfig;
            return this;
        }

        public final Builder W(NetworkFetcher networkFetcher) {
            this.f10146t = networkFetcher;
            return this;
        }

        public final Builder X(y yVar) {
            this.f10148v = yVar;
            return this;
        }

        public final Builder Y(Set set) {
            this.f10150x = set;
            return this;
        }

        public final Builder Z(DiskCacheConfig diskCacheConfig) {
            this.B = diskCacheConfig;
            return this;
        }

        public final ImagePipelineConfig a() {
            return new ImagePipelineConfig(this, null);
        }

        public final a.C0141a b() {
            return this.F;
        }

        public final Bitmap.Config c() {
            return this.f10127a;
        }

        public final w d() {
            return this.I;
        }

        public final n.b e() {
            return this.f10129c;
        }

        public final la.a f() {
            return this.L;
        }

        public final Supplier g() {
            return this.f10128b;
        }

        public final w.a h() {
            return this.f10130d;
        }

        public final k i() {
            return this.f10132f;
        }

        public final k8.a j() {
            return null;
        }

        public final pa.a k() {
            return this.H;
        }

        public final Context l() {
            return this.f10133g;
        }

        public final Set m() {
            return this.f10152z;
        }

        public final boolean n() {
            return this.G;
        }

        public final Supplier o() {
            return this.D;
        }

        public final DownsampleMode p() {
            return this.f10134h;
        }

        public final Map q() {
            return this.M;
        }

        public final Supplier r() {
            return this.f10139m;
        }

        public final w s() {
            return this.J;
        }

        public final Supplier t() {
            return this.f10135i;
        }

        public final w.a u() {
            return this.f10131e;
        }

        public final na.n v() {
            return this.f10136j;
        }

        public final a.C0141a w() {
            return this.F;
        }

        public final o x() {
            return this.C;
        }

        public final int y() {
            return this.E;
        }

        public final s z() {
            return this.f10137k;
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
            x8.c.f53196c = bVar;
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
        private boolean f10153a;

        public final boolean a() {
            return this.f10153a;
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
        return this.f10112l;
    }

    @Override // na.r
    public Supplier C() {
        return this.f10117q;
    }

    @Override // na.r
    public r8.d D() {
        return this.f10119s;
    }

    @Override // na.r
    public DownsampleMode E() {
        return this.f10108h;
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
        return this.f10111k;
    }

    @Override // na.r
    public Set a() {
        return this.A;
    }

    @Override // na.r
    public NetworkFetcher b() {
        return this.f10121u;
    }

    @Override // na.r
    public w c() {
        return this.I;
    }

    @Override // na.r
    public DiskCacheConfig d() {
        return this.f10118r;
    }

    @Override // na.r
    public Set e() {
        return this.f10126z;
    }

    @Override // na.r
    public w.a f() {
        return this.f10104d;
    }

    @Override // na.r
    public w.a g() {
        return this.f10103c;
    }

    @Override // na.r
    public Context getContext() {
        return this.f10107g;
    }

    @Override // na.r
    public e h() {
        return this.f10125y;
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
        return this.f10105e;
    }

    @Override // na.r
    public g l() {
        return this.J;
    }

    @Override // na.r
    public Integer m() {
        return this.f10116p;
    }

    @Override // na.r
    public d n() {
        return this.f10114n;
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
        return this.f10102b;
    }

    @Override // na.r
    public c r() {
        return this.f10113m;
    }

    @Override // na.r
    public Supplier s() {
        return this.f10110j;
    }

    @Override // na.r
    public y t() {
        return this.f10124x;
    }

    @Override // na.r
    public int u() {
        return this.f10120t;
    }

    @Override // na.r
    public Supplier v() {
        return this.f10109i;
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
        return this.f10106f;
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
        this.f10102b = g10;
        w.a h10 = builder.h();
        this.f10103c = h10 == null ? new la.c() : h10;
        w.a u10 = builder.u();
        this.f10104d = u10 == null ? new la.y() : u10;
        this.f10105e = builder.e();
        Bitmap.Config c10 = builder.c();
        this.f10101a = c10 == null ? Bitmap.Config.ARGB_8888 : c10;
        k i10 = builder.i();
        if (i10 == null) {
            i10 = DefaultCacheKeyFactory.getInstance();
            Intrinsics.checkNotNullExpressionValue(i10, "getInstance(...)");
        }
        this.f10106f = i10;
        Context l10 = builder.l();
        if (l10 != null) {
            this.f10107g = l10;
            this.f10108h = builder.p();
            Supplier t10 = builder.t();
            this.f10110j = t10 == null ? new p() : t10;
            s z10 = builder.z();
            if (z10 == null) {
                z10 = z.o();
                Intrinsics.checkNotNullExpressionValue(z10, "getInstance(...)");
            }
            this.f10112l = z10;
            this.f10113m = builder.A();
            Supplier BOOLEAN_FALSE = builder.r();
            if (BOOLEAN_FALSE == null) {
                BOOLEAN_FALSE = m.f42428b;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
            }
            this.f10115o = BOOLEAN_FALSE;
            a aVar = M;
            this.f10114n = aVar.g(builder);
            this.f10116p = builder.D();
            Supplier BOOLEAN_TRUE = builder.Q();
            if (BOOLEAN_TRUE == null) {
                BOOLEAN_TRUE = m.f42427a;
                Intrinsics.checkNotNullExpressionValue(BOOLEAN_TRUE, "BOOLEAN_TRUE");
            }
            this.f10117q = BOOLEAN_TRUE;
            DiskCacheConfig E = builder.E();
            this.f10118r = E == null ? aVar.f(builder.l()) : E;
            r8.d G = builder.G();
            if (G == null) {
                G = r8.e.b();
                Intrinsics.checkNotNullExpressionValue(G, "getInstance(...)");
            }
            this.f10119s = G;
            this.f10120t = aVar.h(builder, G());
            int y10 = builder.y() < 0 ? 30000 : builder.y();
            this.f10122v = y10;
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
            this.f10121u = H;
            this.f10123w = builder.I();
            y J = builder.J();
            this.f10124x = J == null ? new y(va.w.n().m()) : J;
            e K = builder.K();
            this.f10125y = K == null ? new qa.g() : K;
            Set M2 = builder.M();
            this.f10126z = M2 == null ? x0.d() : M2;
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
            this.f10111k = v10 == null ? new DefaultExecutorSupplier(e10) : v10;
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
            this.f10109i = o10;
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
