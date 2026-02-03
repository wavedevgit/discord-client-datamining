package com.facebook.imagepipeline.core;

import android.content.Context;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.bitmaps.PlatformBitmapFactory;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.imagepipeline.core.a;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import la.k;
import la.w;
import na.n;
import na.x;
import o8.m;
import qa.e;
import r8.i;
import r8.l;
import wa.f;
import x8.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {
    public static final b M = new b(null);
    private final int A;
    private final boolean B;
    private final boolean C;
    private final boolean D;
    private final boolean E;
    private final boolean F;
    private final boolean G;
    private final boolean H;
    private final int I;
    private final boolean J;
    private final f K;
    private final boolean L;

    /* renamed from: a  reason: collision with root package name */
    private final boolean f11186a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11187b;

    /* renamed from: c  reason: collision with root package name */
    private final x8.b f11188c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11189d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f11190e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f11191f;

    /* renamed from: g  reason: collision with root package name */
    private final int f11192g;

    /* renamed from: h  reason: collision with root package name */
    private final int f11193h;

    /* renamed from: i  reason: collision with root package name */
    private final int f11194i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f11195j;

    /* renamed from: k  reason: collision with root package name */
    private final int f11196k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11197l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f11198m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11199n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11200o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f11201p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f11202q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f11203r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f11204s;

    /* renamed from: t  reason: collision with root package name */
    private final long f11205t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f11206u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f11207v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f11208w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f11209x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f11210y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f11211z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0160a {
        public boolean A;
        public boolean B;
        public int C;
        public boolean D;
        public boolean E;
        public boolean F;
        public boolean G;
        public boolean H;
        public int I;
        public boolean J;
        public boolean K;
        public f L;
        public boolean M;

        /* renamed from: a  reason: collision with root package name */
        private final ImagePipelineConfig.Builder f11212a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f11213b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f11214c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f11215d;

        /* renamed from: e  reason: collision with root package name */
        public x8.b f11216e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f11217f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f11218g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f11219h;

        /* renamed from: i  reason: collision with root package name */
        public int f11220i;

        /* renamed from: j  reason: collision with root package name */
        public int f11221j;

        /* renamed from: k  reason: collision with root package name */
        public int f11222k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f11223l;

        /* renamed from: m  reason: collision with root package name */
        public int f11224m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f11225n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f11226o;

        /* renamed from: p  reason: collision with root package name */
        public d f11227p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f11228q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f11229r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f11230s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f11231t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f11232u;

        /* renamed from: v  reason: collision with root package name */
        public long f11233v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f11234w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f11235x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f11236y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f11237z;

        public C0160a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f11212a = configBuilder;
            this.f11220i = 1000;
            this.f11224m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f11231t = a10;
            this.f11236y = true;
            this.f11237z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0160a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0160a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f33074a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0160a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f11230s = z10;
            return Unit.f33074a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0160a e(final boolean z10) {
            return c(new Function0() { // from class: na.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0160a.f(a.C0160a.this, z10);
                    return f10;
                }
            });
        }

        public final C0160a g(final boolean z10) {
            return c(new Function0() { // from class: na.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0160a.h(a.C0160a.this, z10);
                    return h10;
                }
            });
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c implements d {
        @Override // com.facebook.imagepipeline.core.a.d
        public x a(Context context, r8.a byteArrayPool, qa.c imageDecoder, e progressiveJpegConfig, DownsampleMode downsampleMode, boolean z10, boolean z11, n executorSupplier, i pooledByteBufferFactory, l pooledByteStreams, w bitmapMemoryCache, w encodedMemoryCache, Supplier diskCachesStoreSupplier, k cacheKeyFactory, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, na.a closeableReferenceFactory, boolean z13, int i13) {
            Intrinsics.checkNotNullParameter(context, "context");
            Intrinsics.checkNotNullParameter(byteArrayPool, "byteArrayPool");
            Intrinsics.checkNotNullParameter(imageDecoder, "imageDecoder");
            Intrinsics.checkNotNullParameter(progressiveJpegConfig, "progressiveJpegConfig");
            Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
            Intrinsics.checkNotNullParameter(executorSupplier, "executorSupplier");
            Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
            Intrinsics.checkNotNullParameter(pooledByteStreams, "pooledByteStreams");
            Intrinsics.checkNotNullParameter(bitmapMemoryCache, "bitmapMemoryCache");
            Intrinsics.checkNotNullParameter(encodedMemoryCache, "encodedMemoryCache");
            Intrinsics.checkNotNullParameter(diskCachesStoreSupplier, "diskCachesStoreSupplier");
            Intrinsics.checkNotNullParameter(cacheKeyFactory, "cacheKeyFactory");
            Intrinsics.checkNotNullParameter(platformBitmapFactory, "platformBitmapFactory");
            Intrinsics.checkNotNullParameter(closeableReferenceFactory, "closeableReferenceFactory");
            return new x(context, byteArrayPool, imageDecoder, progressiveJpegConfig, downsampleMode, z10, z11, executorSupplier, pooledByteBufferFactory, bitmapMemoryCache, encodedMemoryCache, diskCachesStoreSupplier, cacheKeyFactory, platformBitmapFactory, i10, i11, z12, i12, closeableReferenceFactory, z13, i13);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface d {
        x a(Context context, r8.a aVar, qa.c cVar, e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, i iVar, l lVar, w wVar, w wVar2, Supplier supplier, k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, na.a aVar2, boolean z13, int i13);
    }

    public /* synthetic */ a(C0160a c0160a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0160a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f11187b;
    }

    public final boolean C() {
        return this.f11211z;
    }

    public final boolean D() {
        return this.f11208w;
    }

    public final boolean E() {
        return this.f11210y;
    }

    public final boolean F() {
        return this.f11209x;
    }

    public final boolean G() {
        return this.f11204s;
    }

    public final boolean H() {
        return this.f11201p;
    }

    public final Supplier I() {
        return this.f11200o;
    }

    public final boolean J() {
        return this.f11197l;
    }

    public final boolean K() {
        return this.f11198m;
    }

    public final boolean L() {
        return this.f11186a;
    }

    public final boolean a() {
        return this.B;
    }

    public final boolean b() {
        return this.G;
    }

    public final int c() {
        return this.I;
    }

    public final int d() {
        return this.f11192g;
    }

    public final boolean e() {
        return this.f11195j;
    }

    public final int f() {
        return this.f11194i;
    }

    public final int g() {
        return this.f11193h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f11207v;
    }

    public final boolean j() {
        return this.f11202q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f11206u;
    }

    public final int m() {
        return this.f11196k;
    }

    public final long n() {
        return this.f11205t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f11199n;
    }

    public final boolean q() {
        return this.E;
    }

    public final boolean r() {
        return this.D;
    }

    public final boolean s() {
        return this.F;
    }

    public final Supplier t() {
        return this.f11203r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f11191f;
    }

    public final boolean w() {
        return this.f11190e;
    }

    public final boolean x() {
        return this.f11189d;
    }

    public final x8.b y() {
        return this.f11188c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0160a c0160a) {
        this.f11186a = c0160a.f11214c;
        this.f11187b = c0160a.f11215d;
        this.f11188c = c0160a.f11216e;
        this.f11189d = c0160a.f11217f;
        this.f11190e = c0160a.f11218g;
        this.f11191f = c0160a.f11219h;
        this.f11192g = c0160a.f11220i;
        this.f11193h = c0160a.f11221j;
        this.f11194i = c0160a.f11222k;
        this.f11195j = c0160a.f11223l;
        this.f11196k = c0160a.f11224m;
        this.f11197l = c0160a.f11225n;
        this.f11198m = c0160a.f11226o;
        d dVar = c0160a.f11227p;
        this.f11199n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0160a.f11228q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f42628b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f11200o = BOOLEAN_FALSE;
        this.f11201p = c0160a.f11229r;
        this.f11202q = c0160a.f11230s;
        this.f11203r = c0160a.f11231t;
        this.f11204s = c0160a.f11232u;
        this.f11205t = c0160a.f11233v;
        this.f11206u = c0160a.f11234w;
        this.f11207v = c0160a.f11235x;
        this.f11208w = c0160a.f11236y;
        this.f11209x = c0160a.f11237z;
        this.f11210y = c0160a.A;
        this.f11211z = c0160a.B;
        this.A = c0160a.C;
        this.G = c0160a.H;
        this.I = c0160a.I;
        this.B = c0160a.D;
        this.C = c0160a.E;
        this.D = c0160a.F;
        this.E = c0160a.G;
        this.F = c0160a.f11213b;
        this.H = c0160a.J;
        this.J = c0160a.K;
        this.K = c0160a.L;
        this.L = c0160a.M;
    }
}
