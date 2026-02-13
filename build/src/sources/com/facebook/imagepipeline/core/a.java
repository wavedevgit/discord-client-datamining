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
import ma.k;
import ma.w;
import oa.n;
import oa.x;
import p8.m;
import ra.e;
import s8.i;
import s8.l;
import xa.f;
import y8.b;
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
    private final boolean f11156a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11157b;

    /* renamed from: c  reason: collision with root package name */
    private final y8.b f11158c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11159d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f11160e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f11161f;

    /* renamed from: g  reason: collision with root package name */
    private final int f11162g;

    /* renamed from: h  reason: collision with root package name */
    private final int f11163h;

    /* renamed from: i  reason: collision with root package name */
    private final int f11164i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f11165j;

    /* renamed from: k  reason: collision with root package name */
    private final int f11166k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11167l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f11168m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11169n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11170o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f11171p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f11172q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f11173r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f11174s;

    /* renamed from: t  reason: collision with root package name */
    private final long f11175t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f11176u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f11177v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f11178w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f11179x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f11180y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f11181z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0154a {
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
        private final ImagePipelineConfig.Builder f11182a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f11183b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f11184c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f11185d;

        /* renamed from: e  reason: collision with root package name */
        public y8.b f11186e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f11187f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f11188g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f11189h;

        /* renamed from: i  reason: collision with root package name */
        public int f11190i;

        /* renamed from: j  reason: collision with root package name */
        public int f11191j;

        /* renamed from: k  reason: collision with root package name */
        public int f11192k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f11193l;

        /* renamed from: m  reason: collision with root package name */
        public int f11194m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f11195n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f11196o;

        /* renamed from: p  reason: collision with root package name */
        public d f11197p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f11198q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f11199r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f11200s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f11201t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f11202u;

        /* renamed from: v  reason: collision with root package name */
        public long f11203v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f11204w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f11205x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f11206y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f11207z;

        public C0154a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f11182a = configBuilder;
            this.f11190i = 1000;
            this.f11194m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f11201t = a10;
            this.f11206y = true;
            this.f11207z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0154a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0154a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f32556a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0154a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f11200s = z10;
            return Unit.f32556a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0154a e(final boolean z10) {
            return c(new Function0() { // from class: oa.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0154a.f(a.C0154a.this, z10);
                    return f10;
                }
            });
        }

        public final C0154a g(final boolean z10) {
            return c(new Function0() { // from class: oa.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0154a.h(a.C0154a.this, z10);
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
        public x a(Context context, s8.a byteArrayPool, ra.c imageDecoder, e progressiveJpegConfig, DownsampleMode downsampleMode, boolean z10, boolean z11, n executorSupplier, i pooledByteBufferFactory, l pooledByteStreams, w bitmapMemoryCache, w encodedMemoryCache, Supplier diskCachesStoreSupplier, k cacheKeyFactory, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, oa.a closeableReferenceFactory, boolean z13, int i13) {
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
        x a(Context context, s8.a aVar, ra.c cVar, e eVar, DownsampleMode downsampleMode, boolean z10, boolean z11, n nVar, i iVar, l lVar, w wVar, w wVar2, Supplier supplier, k kVar, PlatformBitmapFactory platformBitmapFactory, int i10, int i11, boolean z12, int i12, oa.a aVar2, boolean z13, int i13);
    }

    public /* synthetic */ a(C0154a c0154a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0154a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f11157b;
    }

    public final boolean C() {
        return this.f11181z;
    }

    public final boolean D() {
        return this.f11178w;
    }

    public final boolean E() {
        return this.f11180y;
    }

    public final boolean F() {
        return this.f11179x;
    }

    public final boolean G() {
        return this.f11174s;
    }

    public final boolean H() {
        return this.f11171p;
    }

    public final Supplier I() {
        return this.f11170o;
    }

    public final boolean J() {
        return this.f11167l;
    }

    public final boolean K() {
        return this.f11168m;
    }

    public final boolean L() {
        return this.f11156a;
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
        return this.f11162g;
    }

    public final boolean e() {
        return this.f11165j;
    }

    public final int f() {
        return this.f11164i;
    }

    public final int g() {
        return this.f11163h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f11177v;
    }

    public final boolean j() {
        return this.f11172q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f11176u;
    }

    public final int m() {
        return this.f11166k;
    }

    public final long n() {
        return this.f11175t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f11169n;
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
        return this.f11173r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f11161f;
    }

    public final boolean w() {
        return this.f11160e;
    }

    public final boolean x() {
        return this.f11159d;
    }

    public final y8.b y() {
        return this.f11158c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0154a c0154a) {
        this.f11156a = c0154a.f11184c;
        this.f11157b = c0154a.f11185d;
        this.f11158c = c0154a.f11186e;
        this.f11159d = c0154a.f11187f;
        this.f11160e = c0154a.f11188g;
        this.f11161f = c0154a.f11189h;
        this.f11162g = c0154a.f11190i;
        this.f11163h = c0154a.f11191j;
        this.f11164i = c0154a.f11192k;
        this.f11165j = c0154a.f11193l;
        this.f11166k = c0154a.f11194m;
        this.f11167l = c0154a.f11195n;
        this.f11168m = c0154a.f11196o;
        d dVar = c0154a.f11197p;
        this.f11169n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0154a.f11198q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f42092b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f11170o = BOOLEAN_FALSE;
        this.f11171p = c0154a.f11199r;
        this.f11172q = c0154a.f11200s;
        this.f11173r = c0154a.f11201t;
        this.f11174s = c0154a.f11202u;
        this.f11175t = c0154a.f11203v;
        this.f11176u = c0154a.f11204w;
        this.f11177v = c0154a.f11205x;
        this.f11178w = c0154a.f11206y;
        this.f11179x = c0154a.f11207z;
        this.f11180y = c0154a.A;
        this.f11181z = c0154a.B;
        this.A = c0154a.C;
        this.G = c0154a.H;
        this.I = c0154a.I;
        this.B = c0154a.D;
        this.C = c0154a.E;
        this.D = c0154a.F;
        this.E = c0154a.G;
        this.F = c0154a.f11183b;
        this.H = c0154a.J;
        this.J = c0154a.K;
        this.K = c0154a.L;
        this.L = c0154a.M;
    }
}
