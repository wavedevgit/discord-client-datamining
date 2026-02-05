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
    private final boolean f10539a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10540b;

    /* renamed from: c  reason: collision with root package name */
    private final x8.b f10541c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10542d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f10543e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10544f;

    /* renamed from: g  reason: collision with root package name */
    private final int f10545g;

    /* renamed from: h  reason: collision with root package name */
    private final int f10546h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10547i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f10548j;

    /* renamed from: k  reason: collision with root package name */
    private final int f10549k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10550l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f10551m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10552n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10553o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f10554p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f10555q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f10556r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f10557s;

    /* renamed from: t  reason: collision with root package name */
    private final long f10558t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f10559u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f10560v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f10561w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f10562x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f10563y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f10564z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0157a {
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
        private final ImagePipelineConfig.Builder f10565a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f10566b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f10567c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f10568d;

        /* renamed from: e  reason: collision with root package name */
        public x8.b f10569e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f10570f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f10571g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f10572h;

        /* renamed from: i  reason: collision with root package name */
        public int f10573i;

        /* renamed from: j  reason: collision with root package name */
        public int f10574j;

        /* renamed from: k  reason: collision with root package name */
        public int f10575k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f10576l;

        /* renamed from: m  reason: collision with root package name */
        public int f10577m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f10578n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f10579o;

        /* renamed from: p  reason: collision with root package name */
        public d f10580p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f10581q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f10582r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f10583s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f10584t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f10585u;

        /* renamed from: v  reason: collision with root package name */
        public long f10586v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f10587w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f10588x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f10589y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f10590z;

        public C0157a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f10565a = configBuilder;
            this.f10573i = 1000;
            this.f10577m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f10584t = a10;
            this.f10589y = true;
            this.f10590z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0157a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0157a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f31988a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0157a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f10583s = z10;
            return Unit.f31988a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0157a e(final boolean z10) {
            return c(new Function0() { // from class: na.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0157a.f(a.C0157a.this, z10);
                    return f10;
                }
            });
        }

        public final C0157a g(final boolean z10) {
            return c(new Function0() { // from class: na.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0157a.h(a.C0157a.this, z10);
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

    public /* synthetic */ a(C0157a c0157a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0157a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f10540b;
    }

    public final boolean C() {
        return this.f10564z;
    }

    public final boolean D() {
        return this.f10561w;
    }

    public final boolean E() {
        return this.f10563y;
    }

    public final boolean F() {
        return this.f10562x;
    }

    public final boolean G() {
        return this.f10557s;
    }

    public final boolean H() {
        return this.f10554p;
    }

    public final Supplier I() {
        return this.f10553o;
    }

    public final boolean J() {
        return this.f10550l;
    }

    public final boolean K() {
        return this.f10551m;
    }

    public final boolean L() {
        return this.f10539a;
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
        return this.f10545g;
    }

    public final boolean e() {
        return this.f10548j;
    }

    public final int f() {
        return this.f10547i;
    }

    public final int g() {
        return this.f10546h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f10560v;
    }

    public final boolean j() {
        return this.f10555q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f10559u;
    }

    public final int m() {
        return this.f10549k;
    }

    public final long n() {
        return this.f10558t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f10552n;
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
        return this.f10556r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f10544f;
    }

    public final boolean w() {
        return this.f10543e;
    }

    public final boolean x() {
        return this.f10542d;
    }

    public final x8.b y() {
        return this.f10541c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0157a c0157a) {
        this.f10539a = c0157a.f10567c;
        this.f10540b = c0157a.f10568d;
        this.f10541c = c0157a.f10569e;
        this.f10542d = c0157a.f10570f;
        this.f10543e = c0157a.f10571g;
        this.f10544f = c0157a.f10572h;
        this.f10545g = c0157a.f10573i;
        this.f10546h = c0157a.f10574j;
        this.f10547i = c0157a.f10575k;
        this.f10548j = c0157a.f10576l;
        this.f10549k = c0157a.f10577m;
        this.f10550l = c0157a.f10578n;
        this.f10551m = c0157a.f10579o;
        d dVar = c0157a.f10580p;
        this.f10552n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0157a.f10581q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f42334b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f10553o = BOOLEAN_FALSE;
        this.f10554p = c0157a.f10582r;
        this.f10555q = c0157a.f10583s;
        this.f10556r = c0157a.f10584t;
        this.f10557s = c0157a.f10585u;
        this.f10558t = c0157a.f10586v;
        this.f10559u = c0157a.f10587w;
        this.f10560v = c0157a.f10588x;
        this.f10561w = c0157a.f10589y;
        this.f10562x = c0157a.f10590z;
        this.f10563y = c0157a.A;
        this.f10564z = c0157a.B;
        this.A = c0157a.C;
        this.G = c0157a.H;
        this.I = c0157a.I;
        this.B = c0157a.D;
        this.C = c0157a.E;
        this.D = c0157a.F;
        this.E = c0157a.G;
        this.F = c0157a.f10566b;
        this.H = c0157a.J;
        this.J = c0157a.K;
        this.K = c0157a.L;
        this.L = c0157a.M;
    }
}
