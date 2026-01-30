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
    private final boolean f11557a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11558b;

    /* renamed from: c  reason: collision with root package name */
    private final x8.b f11559c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11560d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f11561e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f11562f;

    /* renamed from: g  reason: collision with root package name */
    private final int f11563g;

    /* renamed from: h  reason: collision with root package name */
    private final int f11564h;

    /* renamed from: i  reason: collision with root package name */
    private final int f11565i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f11566j;

    /* renamed from: k  reason: collision with root package name */
    private final int f11567k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11568l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f11569m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11570n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11571o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f11572p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f11573q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f11574r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f11575s;

    /* renamed from: t  reason: collision with root package name */
    private final long f11576t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f11577u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f11578v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f11579w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f11580x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f11581y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f11582z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0155a {
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
        private final ImagePipelineConfig.Builder f11583a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f11584b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f11585c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f11586d;

        /* renamed from: e  reason: collision with root package name */
        public x8.b f11587e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f11588f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f11589g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f11590h;

        /* renamed from: i  reason: collision with root package name */
        public int f11591i;

        /* renamed from: j  reason: collision with root package name */
        public int f11592j;

        /* renamed from: k  reason: collision with root package name */
        public int f11593k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f11594l;

        /* renamed from: m  reason: collision with root package name */
        public int f11595m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f11596n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f11597o;

        /* renamed from: p  reason: collision with root package name */
        public d f11598p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f11599q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f11600r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f11601s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f11602t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f11603u;

        /* renamed from: v  reason: collision with root package name */
        public long f11604v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f11605w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f11606x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f11607y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f11608z;

        public C0155a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f11583a = configBuilder;
            this.f11591i = 1000;
            this.f11595m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f11602t = a10;
            this.f11607y = true;
            this.f11608z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0155a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0155a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f33298a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0155a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f11601s = z10;
            return Unit.f33298a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0155a e(final boolean z10) {
            return c(new Function0() { // from class: na.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0155a.f(a.C0155a.this, z10);
                    return f10;
                }
            });
        }

        public final C0155a g(final boolean z10) {
            return c(new Function0() { // from class: na.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0155a.h(a.C0155a.this, z10);
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

    public /* synthetic */ a(C0155a c0155a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0155a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f11558b;
    }

    public final boolean C() {
        return this.f11582z;
    }

    public final boolean D() {
        return this.f11579w;
    }

    public final boolean E() {
        return this.f11581y;
    }

    public final boolean F() {
        return this.f11580x;
    }

    public final boolean G() {
        return this.f11575s;
    }

    public final boolean H() {
        return this.f11572p;
    }

    public final Supplier I() {
        return this.f11571o;
    }

    public final boolean J() {
        return this.f11568l;
    }

    public final boolean K() {
        return this.f11569m;
    }

    public final boolean L() {
        return this.f11557a;
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
        return this.f11563g;
    }

    public final boolean e() {
        return this.f11566j;
    }

    public final int f() {
        return this.f11565i;
    }

    public final int g() {
        return this.f11564h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f11578v;
    }

    public final boolean j() {
        return this.f11573q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f11577u;
    }

    public final int m() {
        return this.f11567k;
    }

    public final long n() {
        return this.f11576t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f11570n;
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
        return this.f11574r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f11562f;
    }

    public final boolean w() {
        return this.f11561e;
    }

    public final boolean x() {
        return this.f11560d;
    }

    public final x8.b y() {
        return this.f11559c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0155a c0155a) {
        this.f11557a = c0155a.f11585c;
        this.f11558b = c0155a.f11586d;
        this.f11559c = c0155a.f11587e;
        this.f11560d = c0155a.f11588f;
        this.f11561e = c0155a.f11589g;
        this.f11562f = c0155a.f11590h;
        this.f11563g = c0155a.f11591i;
        this.f11564h = c0155a.f11592j;
        this.f11565i = c0155a.f11593k;
        this.f11566j = c0155a.f11594l;
        this.f11567k = c0155a.f11595m;
        this.f11568l = c0155a.f11596n;
        this.f11569m = c0155a.f11597o;
        d dVar = c0155a.f11598p;
        this.f11570n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0155a.f11599q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f42500b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f11571o = BOOLEAN_FALSE;
        this.f11572p = c0155a.f11600r;
        this.f11573q = c0155a.f11601s;
        this.f11574r = c0155a.f11602t;
        this.f11575s = c0155a.f11603u;
        this.f11576t = c0155a.f11604v;
        this.f11577u = c0155a.f11605w;
        this.f11578v = c0155a.f11606x;
        this.f11579w = c0155a.f11607y;
        this.f11580x = c0155a.f11608z;
        this.f11581y = c0155a.A;
        this.f11582z = c0155a.B;
        this.A = c0155a.C;
        this.G = c0155a.H;
        this.I = c0155a.I;
        this.B = c0155a.D;
        this.C = c0155a.E;
        this.D = c0155a.F;
        this.E = c0155a.G;
        this.F = c0155a.f11584b;
        this.H = c0155a.J;
        this.J = c0155a.K;
        this.K = c0155a.L;
        this.L = c0155a.M;
    }
}
