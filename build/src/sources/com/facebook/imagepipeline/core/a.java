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
    private final boolean f10438a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10439b;

    /* renamed from: c  reason: collision with root package name */
    private final x8.b f10440c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10441d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f10442e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10443f;

    /* renamed from: g  reason: collision with root package name */
    private final int f10444g;

    /* renamed from: h  reason: collision with root package name */
    private final int f10445h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10446i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f10447j;

    /* renamed from: k  reason: collision with root package name */
    private final int f10448k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10449l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f10450m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10451n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10452o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f10453p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f10454q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f10455r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f10456s;

    /* renamed from: t  reason: collision with root package name */
    private final long f10457t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f10458u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f10459v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f10460w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f10461x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f10462y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f10463z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0150a {
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
        private final ImagePipelineConfig.Builder f10464a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f10465b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f10466c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f10467d;

        /* renamed from: e  reason: collision with root package name */
        public x8.b f10468e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f10469f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f10470g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f10471h;

        /* renamed from: i  reason: collision with root package name */
        public int f10472i;

        /* renamed from: j  reason: collision with root package name */
        public int f10473j;

        /* renamed from: k  reason: collision with root package name */
        public int f10474k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f10475l;

        /* renamed from: m  reason: collision with root package name */
        public int f10476m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f10477n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f10478o;

        /* renamed from: p  reason: collision with root package name */
        public d f10479p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f10480q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f10481r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f10482s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f10483t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f10484u;

        /* renamed from: v  reason: collision with root package name */
        public long f10485v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f10486w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f10487x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f10488y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f10489z;

        public C0150a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f10464a = configBuilder;
            this.f10472i = 1000;
            this.f10476m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f10483t = a10;
            this.f10488y = true;
            this.f10489z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0150a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0150a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f32008a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0150a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f10482s = z10;
            return Unit.f32008a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0150a e(final boolean z10) {
            return c(new Function0() { // from class: na.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0150a.f(a.C0150a.this, z10);
                    return f10;
                }
            });
        }

        public final C0150a g(final boolean z10) {
            return c(new Function0() { // from class: na.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0150a.h(a.C0150a.this, z10);
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

    public /* synthetic */ a(C0150a c0150a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0150a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f10439b;
    }

    public final boolean C() {
        return this.f10463z;
    }

    public final boolean D() {
        return this.f10460w;
    }

    public final boolean E() {
        return this.f10462y;
    }

    public final boolean F() {
        return this.f10461x;
    }

    public final boolean G() {
        return this.f10456s;
    }

    public final boolean H() {
        return this.f10453p;
    }

    public final Supplier I() {
        return this.f10452o;
    }

    public final boolean J() {
        return this.f10449l;
    }

    public final boolean K() {
        return this.f10450m;
    }

    public final boolean L() {
        return this.f10438a;
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
        return this.f10444g;
    }

    public final boolean e() {
        return this.f10447j;
    }

    public final int f() {
        return this.f10446i;
    }

    public final int g() {
        return this.f10445h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f10459v;
    }

    public final boolean j() {
        return this.f10454q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f10458u;
    }

    public final int m() {
        return this.f10448k;
    }

    public final long n() {
        return this.f10457t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f10451n;
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
        return this.f10455r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f10443f;
    }

    public final boolean w() {
        return this.f10442e;
    }

    public final boolean x() {
        return this.f10441d;
    }

    public final x8.b y() {
        return this.f10440c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0150a c0150a) {
        this.f10438a = c0150a.f10466c;
        this.f10439b = c0150a.f10467d;
        this.f10440c = c0150a.f10468e;
        this.f10441d = c0150a.f10469f;
        this.f10442e = c0150a.f10470g;
        this.f10443f = c0150a.f10471h;
        this.f10444g = c0150a.f10472i;
        this.f10445h = c0150a.f10473j;
        this.f10446i = c0150a.f10474k;
        this.f10447j = c0150a.f10475l;
        this.f10448k = c0150a.f10476m;
        this.f10449l = c0150a.f10477n;
        this.f10450m = c0150a.f10478o;
        d dVar = c0150a.f10479p;
        this.f10451n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0150a.f10480q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f41557b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f10452o = BOOLEAN_FALSE;
        this.f10453p = c0150a.f10481r;
        this.f10454q = c0150a.f10482s;
        this.f10455r = c0150a.f10483t;
        this.f10456s = c0150a.f10484u;
        this.f10457t = c0150a.f10485v;
        this.f10458u = c0150a.f10486w;
        this.f10459v = c0150a.f10487x;
        this.f10460w = c0150a.f10488y;
        this.f10461x = c0150a.f10489z;
        this.f10462y = c0150a.A;
        this.f10463z = c0150a.B;
        this.A = c0150a.C;
        this.G = c0150a.H;
        this.I = c0150a.I;
        this.B = c0150a.D;
        this.C = c0150a.E;
        this.D = c0150a.F;
        this.E = c0150a.G;
        this.F = c0150a.f10465b;
        this.H = c0150a.J;
        this.J = c0150a.K;
        this.K = c0150a.L;
        this.L = c0150a.M;
    }
}
