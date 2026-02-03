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
    private final boolean f10154a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10155b;

    /* renamed from: c  reason: collision with root package name */
    private final x8.b f10156c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10157d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f10158e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10159f;

    /* renamed from: g  reason: collision with root package name */
    private final int f10160g;

    /* renamed from: h  reason: collision with root package name */
    private final int f10161h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10162i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f10163j;

    /* renamed from: k  reason: collision with root package name */
    private final int f10164k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10165l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f10166m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10167n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10168o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f10169p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f10170q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f10171r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f10172s;

    /* renamed from: t  reason: collision with root package name */
    private final long f10173t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f10174u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f10175v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f10176w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f10177x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f10178y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f10179z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0141a {
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
        private final ImagePipelineConfig.Builder f10180a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f10181b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f10182c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f10183d;

        /* renamed from: e  reason: collision with root package name */
        public x8.b f10184e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f10185f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f10186g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f10187h;

        /* renamed from: i  reason: collision with root package name */
        public int f10188i;

        /* renamed from: j  reason: collision with root package name */
        public int f10189j;

        /* renamed from: k  reason: collision with root package name */
        public int f10190k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f10191l;

        /* renamed from: m  reason: collision with root package name */
        public int f10192m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f10193n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f10194o;

        /* renamed from: p  reason: collision with root package name */
        public d f10195p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f10196q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f10197r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f10198s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f10199t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f10200u;

        /* renamed from: v  reason: collision with root package name */
        public long f10201v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f10202w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f10203x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f10204y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f10205z;

        public C0141a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f10180a = configBuilder;
            this.f10188i = 1000;
            this.f10192m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f10199t = a10;
            this.f10204y = true;
            this.f10205z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0141a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0141a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f32464a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0141a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f10198s = z10;
            return Unit.f32464a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0141a e(final boolean z10) {
            return c(new Function0() { // from class: na.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0141a.f(a.C0141a.this, z10);
                    return f10;
                }
            });
        }

        public final C0141a g(final boolean z10) {
            return c(new Function0() { // from class: na.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0141a.h(a.C0141a.this, z10);
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

    public /* synthetic */ a(C0141a c0141a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0141a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f10155b;
    }

    public final boolean C() {
        return this.f10179z;
    }

    public final boolean D() {
        return this.f10176w;
    }

    public final boolean E() {
        return this.f10178y;
    }

    public final boolean F() {
        return this.f10177x;
    }

    public final boolean G() {
        return this.f10172s;
    }

    public final boolean H() {
        return this.f10169p;
    }

    public final Supplier I() {
        return this.f10168o;
    }

    public final boolean J() {
        return this.f10165l;
    }

    public final boolean K() {
        return this.f10166m;
    }

    public final boolean L() {
        return this.f10154a;
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
        return this.f10160g;
    }

    public final boolean e() {
        return this.f10163j;
    }

    public final int f() {
        return this.f10162i;
    }

    public final int g() {
        return this.f10161h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f10175v;
    }

    public final boolean j() {
        return this.f10170q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f10174u;
    }

    public final int m() {
        return this.f10164k;
    }

    public final long n() {
        return this.f10173t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f10167n;
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
        return this.f10171r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f10159f;
    }

    public final boolean w() {
        return this.f10158e;
    }

    public final boolean x() {
        return this.f10157d;
    }

    public final x8.b y() {
        return this.f10156c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0141a c0141a) {
        this.f10154a = c0141a.f10182c;
        this.f10155b = c0141a.f10183d;
        this.f10156c = c0141a.f10184e;
        this.f10157d = c0141a.f10185f;
        this.f10158e = c0141a.f10186g;
        this.f10159f = c0141a.f10187h;
        this.f10160g = c0141a.f10188i;
        this.f10161h = c0141a.f10189j;
        this.f10162i = c0141a.f10190k;
        this.f10163j = c0141a.f10191l;
        this.f10164k = c0141a.f10192m;
        this.f10165l = c0141a.f10193n;
        this.f10166m = c0141a.f10194o;
        d dVar = c0141a.f10195p;
        this.f10167n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0141a.f10196q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f42428b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f10168o = BOOLEAN_FALSE;
        this.f10169p = c0141a.f10197r;
        this.f10170q = c0141a.f10198s;
        this.f10171r = c0141a.f10199t;
        this.f10172s = c0141a.f10200u;
        this.f10173t = c0141a.f10201v;
        this.f10174u = c0141a.f10202w;
        this.f10175v = c0141a.f10203x;
        this.f10176w = c0141a.f10204y;
        this.f10177x = c0141a.f10205z;
        this.f10178y = c0141a.A;
        this.f10179z = c0141a.B;
        this.A = c0141a.C;
        this.G = c0141a.H;
        this.I = c0141a.I;
        this.B = c0141a.D;
        this.C = c0141a.E;
        this.D = c0141a.F;
        this.E = c0141a.G;
        this.F = c0141a.f10181b;
        this.H = c0141a.J;
        this.J = c0141a.K;
        this.K = c0141a.L;
        this.L = c0141a.M;
    }
}
