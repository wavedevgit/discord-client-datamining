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
    private final boolean f10578a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f10579b;

    /* renamed from: c  reason: collision with root package name */
    private final y8.b f10580c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10581d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f10582e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f10583f;

    /* renamed from: g  reason: collision with root package name */
    private final int f10584g;

    /* renamed from: h  reason: collision with root package name */
    private final int f10585h;

    /* renamed from: i  reason: collision with root package name */
    private final int f10586i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f10587j;

    /* renamed from: k  reason: collision with root package name */
    private final int f10588k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f10589l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f10590m;

    /* renamed from: n  reason: collision with root package name */
    private final d f10591n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f10592o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f10593p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f10594q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f10595r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f10596s;

    /* renamed from: t  reason: collision with root package name */
    private final long f10597t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f10598u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f10599v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f10600w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f10601x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f10602y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f10603z;

    /* renamed from: com.facebook.imagepipeline.core.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0177a {
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
        private final ImagePipelineConfig.Builder f10604a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f10605b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f10606c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f10607d;

        /* renamed from: e  reason: collision with root package name */
        public y8.b f10608e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f10609f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f10610g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f10611h;

        /* renamed from: i  reason: collision with root package name */
        public int f10612i;

        /* renamed from: j  reason: collision with root package name */
        public int f10613j;

        /* renamed from: k  reason: collision with root package name */
        public int f10614k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f10615l;

        /* renamed from: m  reason: collision with root package name */
        public int f10616m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f10617n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f10618o;

        /* renamed from: p  reason: collision with root package name */
        public d f10619p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f10620q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f10621r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f10622s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f10623t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f10624u;

        /* renamed from: v  reason: collision with root package name */
        public long f10625v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f10626w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f10627x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f10628y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f10629z;

        public C0177a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f10604a = configBuilder;
            this.f10612i = 1000;
            this.f10616m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f10623t = a10;
            this.f10628y = true;
            this.f10629z = true;
            this.C = 20;
            this.I = 30;
            this.L = new f(false, false, 3, null);
        }

        private final C0177a c(Function0 function0) {
            function0.invoke();
            return this;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit f(C0177a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.M = z10;
            return Unit.f31765a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0177a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f10622s = z10;
            return Unit.f31765a;
        }

        public final a d() {
            return new a(this, null);
        }

        public final C0177a e(final boolean z10) {
            return c(new Function0() { // from class: oa.s
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit f10;
                    f10 = a.C0177a.f(a.C0177a.this, z10);
                    return f10;
                }
            });
        }

        public final C0177a g(final boolean z10) {
            return c(new Function0() { // from class: oa.t
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Unit h10;
                    h10 = a.C0177a.h(a.C0177a.this, z10);
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

    public /* synthetic */ a(C0177a c0177a, DefaultConstructorMarker defaultConstructorMarker) {
        this(c0177a);
    }

    public final boolean A() {
        return this.L;
    }

    public final boolean B() {
        return this.f10579b;
    }

    public final boolean C() {
        return this.f10603z;
    }

    public final boolean D() {
        return this.f10600w;
    }

    public final boolean E() {
        return this.f10602y;
    }

    public final boolean F() {
        return this.f10601x;
    }

    public final boolean G() {
        return this.f10596s;
    }

    public final boolean H() {
        return this.f10593p;
    }

    public final Supplier I() {
        return this.f10592o;
    }

    public final boolean J() {
        return this.f10589l;
    }

    public final boolean K() {
        return this.f10590m;
    }

    public final boolean L() {
        return this.f10578a;
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
        return this.f10584g;
    }

    public final boolean e() {
        return this.f10587j;
    }

    public final int f() {
        return this.f10586i;
    }

    public final int g() {
        return this.f10585h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f10599v;
    }

    public final boolean j() {
        return this.f10594q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f10598u;
    }

    public final int m() {
        return this.f10588k;
    }

    public final long n() {
        return this.f10597t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f10591n;
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
        return this.f10595r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f10583f;
    }

    public final boolean w() {
        return this.f10582e;
    }

    public final boolean x() {
        return this.f10581d;
    }

    public final y8.b y() {
        return this.f10580c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0177a c0177a) {
        this.f10578a = c0177a.f10606c;
        this.f10579b = c0177a.f10607d;
        this.f10580c = c0177a.f10608e;
        this.f10581d = c0177a.f10609f;
        this.f10582e = c0177a.f10610g;
        this.f10583f = c0177a.f10611h;
        this.f10584g = c0177a.f10612i;
        this.f10585h = c0177a.f10613j;
        this.f10586i = c0177a.f10614k;
        this.f10587j = c0177a.f10615l;
        this.f10588k = c0177a.f10616m;
        this.f10589l = c0177a.f10617n;
        this.f10590m = c0177a.f10618o;
        d dVar = c0177a.f10619p;
        this.f10591n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0177a.f10620q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f43065b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f10592o = BOOLEAN_FALSE;
        this.f10593p = c0177a.f10621r;
        this.f10594q = c0177a.f10622s;
        this.f10595r = c0177a.f10623t;
        this.f10596s = c0177a.f10624u;
        this.f10597t = c0177a.f10625v;
        this.f10598u = c0177a.f10626w;
        this.f10599v = c0177a.f10627x;
        this.f10600w = c0177a.f10628y;
        this.f10601x = c0177a.f10629z;
        this.f10602y = c0177a.A;
        this.f10603z = c0177a.B;
        this.A = c0177a.C;
        this.G = c0177a.H;
        this.I = c0177a.I;
        this.B = c0177a.D;
        this.C = c0177a.E;
        this.D = c0177a.F;
        this.E = c0177a.G;
        this.F = c0177a.f10605b;
        this.H = c0177a.J;
        this.J = c0177a.K;
        this.K = c0177a.L;
        this.L = c0177a.M;
    }
}
