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
    private final boolean f11155a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f11156b;

    /* renamed from: c  reason: collision with root package name */
    private final y8.b f11157c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11158d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f11159e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f11160f;

    /* renamed from: g  reason: collision with root package name */
    private final int f11161g;

    /* renamed from: h  reason: collision with root package name */
    private final int f11162h;

    /* renamed from: i  reason: collision with root package name */
    private final int f11163i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f11164j;

    /* renamed from: k  reason: collision with root package name */
    private final int f11165k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f11166l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f11167m;

    /* renamed from: n  reason: collision with root package name */
    private final d f11168n;

    /* renamed from: o  reason: collision with root package name */
    private final Supplier f11169o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f11170p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f11171q;

    /* renamed from: r  reason: collision with root package name */
    private final Supplier f11172r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f11173s;

    /* renamed from: t  reason: collision with root package name */
    private final long f11174t;

    /* renamed from: u  reason: collision with root package name */
    private final boolean f11175u;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f11176v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f11177w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f11178x;

    /* renamed from: y  reason: collision with root package name */
    private final boolean f11179y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f11180z;

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
        private final ImagePipelineConfig.Builder f11181a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f11182b;

        /* renamed from: c  reason: collision with root package name */
        public boolean f11183c;

        /* renamed from: d  reason: collision with root package name */
        public boolean f11184d;

        /* renamed from: e  reason: collision with root package name */
        public y8.b f11185e;

        /* renamed from: f  reason: collision with root package name */
        public boolean f11186f;

        /* renamed from: g  reason: collision with root package name */
        public boolean f11187g;

        /* renamed from: h  reason: collision with root package name */
        public boolean f11188h;

        /* renamed from: i  reason: collision with root package name */
        public int f11189i;

        /* renamed from: j  reason: collision with root package name */
        public int f11190j;

        /* renamed from: k  reason: collision with root package name */
        public int f11191k;

        /* renamed from: l  reason: collision with root package name */
        public boolean f11192l;

        /* renamed from: m  reason: collision with root package name */
        public int f11193m;

        /* renamed from: n  reason: collision with root package name */
        public boolean f11194n;

        /* renamed from: o  reason: collision with root package name */
        public boolean f11195o;

        /* renamed from: p  reason: collision with root package name */
        public d f11196p;

        /* renamed from: q  reason: collision with root package name */
        public Supplier f11197q;

        /* renamed from: r  reason: collision with root package name */
        public boolean f11198r;

        /* renamed from: s  reason: collision with root package name */
        public boolean f11199s;

        /* renamed from: t  reason: collision with root package name */
        public Supplier f11200t;

        /* renamed from: u  reason: collision with root package name */
        public boolean f11201u;

        /* renamed from: v  reason: collision with root package name */
        public long f11202v;

        /* renamed from: w  reason: collision with root package name */
        public boolean f11203w;

        /* renamed from: x  reason: collision with root package name */
        public boolean f11204x;

        /* renamed from: y  reason: collision with root package name */
        public boolean f11205y;

        /* renamed from: z  reason: collision with root package name */
        public boolean f11206z;

        public C0154a(ImagePipelineConfig.Builder configBuilder) {
            Intrinsics.checkNotNullParameter(configBuilder, "configBuilder");
            this.f11181a = configBuilder;
            this.f11189i = 1000;
            this.f11193m = RecyclerView.ItemAnimator.FLAG_MOVED;
            Supplier a10 = m.a(Boolean.FALSE);
            Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
            this.f11200t = a10;
            this.f11205y = true;
            this.f11206z = true;
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
            return Unit.f31987a;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Unit h(C0154a this$0, boolean z10) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            this$0.f11199s = z10;
            return Unit.f31987a;
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
        return this.f11156b;
    }

    public final boolean C() {
        return this.f11180z;
    }

    public final boolean D() {
        return this.f11177w;
    }

    public final boolean E() {
        return this.f11179y;
    }

    public final boolean F() {
        return this.f11178x;
    }

    public final boolean G() {
        return this.f11173s;
    }

    public final boolean H() {
        return this.f11170p;
    }

    public final Supplier I() {
        return this.f11169o;
    }

    public final boolean J() {
        return this.f11166l;
    }

    public final boolean K() {
        return this.f11167m;
    }

    public final boolean L() {
        return this.f11155a;
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
        return this.f11161g;
    }

    public final boolean e() {
        return this.f11164j;
    }

    public final int f() {
        return this.f11163i;
    }

    public final int g() {
        return this.f11162h;
    }

    public final boolean h() {
        return this.H;
    }

    public final boolean i() {
        return this.f11176v;
    }

    public final boolean j() {
        return this.f11171q;
    }

    public final boolean k() {
        return this.C;
    }

    public final boolean l() {
        return this.f11175u;
    }

    public final int m() {
        return this.f11165k;
    }

    public final long n() {
        return this.f11174t;
    }

    public final f o() {
        return this.K;
    }

    public final d p() {
        return this.f11168n;
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
        return this.f11172r;
    }

    public final int u() {
        return this.A;
    }

    public final boolean v() {
        return this.f11160f;
    }

    public final boolean w() {
        return this.f11159e;
    }

    public final boolean x() {
        return this.f11158d;
    }

    public final y8.b y() {
        return this.f11157c;
    }

    public final b.a z() {
        return null;
    }

    private a(C0154a c0154a) {
        this.f11155a = c0154a.f11183c;
        this.f11156b = c0154a.f11184d;
        this.f11157c = c0154a.f11185e;
        this.f11158d = c0154a.f11186f;
        this.f11159e = c0154a.f11187g;
        this.f11160f = c0154a.f11188h;
        this.f11161g = c0154a.f11189i;
        this.f11162h = c0154a.f11190j;
        this.f11163i = c0154a.f11191k;
        this.f11164j = c0154a.f11192l;
        this.f11165k = c0154a.f11193m;
        this.f11166l = c0154a.f11194n;
        this.f11167m = c0154a.f11195o;
        d dVar = c0154a.f11196p;
        this.f11168n = dVar == null ? new c() : dVar;
        Supplier BOOLEAN_FALSE = c0154a.f11197q;
        if (BOOLEAN_FALSE == null) {
            BOOLEAN_FALSE = m.f41523b;
            Intrinsics.checkNotNullExpressionValue(BOOLEAN_FALSE, "BOOLEAN_FALSE");
        }
        this.f11169o = BOOLEAN_FALSE;
        this.f11170p = c0154a.f11198r;
        this.f11171q = c0154a.f11199s;
        this.f11172r = c0154a.f11200t;
        this.f11173s = c0154a.f11201u;
        this.f11174t = c0154a.f11202v;
        this.f11175u = c0154a.f11203w;
        this.f11176v = c0154a.f11204x;
        this.f11177w = c0154a.f11205y;
        this.f11178x = c0154a.f11206z;
        this.f11179y = c0154a.A;
        this.f11180z = c0154a.B;
        this.A = c0154a.C;
        this.G = c0154a.H;
        this.I = c0154a.I;
        this.B = c0154a.D;
        this.C = c0154a.E;
        this.D = c0154a.F;
        this.E = c0154a.G;
        this.F = c0154a.f11182b;
        this.H = c0154a.J;
        this.J = c0154a.K;
        this.K = c0154a.L;
        this.L = c0154a.M;
    }
}
