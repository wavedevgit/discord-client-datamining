package oa;

import android.content.ContentResolver;
import android.net.Uri;
import android.os.Build;
import com.facebook.imagepipeline.core.DownsampleMode;
import com.facebook.imagepipeline.producers.NetworkFetcher;
import com.facebook.imagepipeline.producers.a1;
import com.facebook.imagepipeline.producers.b1;
import com.facebook.imagepipeline.producers.c1;
import com.facebook.imagepipeline.producers.f1;
import com.facebook.imagepipeline.producers.h1;
import com.facebook.imagepipeline.producers.j1;
import com.facebook.imagepipeline.producers.l1;
import com.facebook.imagepipeline.producers.m1;
import com.facebook.imagepipeline.producers.r0;
import com.facebook.imagepipeline.producers.u0;
import com.facebook.imagepipeline.producers.w0;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class q0 {
    public static final a K = new a(null);
    private final Lazy A;
    private final Lazy B;
    private final Lazy C;
    private final Lazy D;
    private final Lazy E;
    private final Lazy F;
    private final Lazy G;
    private final Lazy H;
    private final Lazy I;
    private final Lazy J;

    /* renamed from: a  reason: collision with root package name */
    private final ContentResolver f40376a;

    /* renamed from: b  reason: collision with root package name */
    private final x f40377b;

    /* renamed from: c  reason: collision with root package name */
    private final NetworkFetcher f40378c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f40379d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f40380e;

    /* renamed from: f  reason: collision with root package name */
    private final h1 f40381f;

    /* renamed from: g  reason: collision with root package name */
    private final DownsampleMode f40382g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f40383h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f40384i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f40385j;

    /* renamed from: k  reason: collision with root package name */
    private final ab.d f40386k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f40387l;

    /* renamed from: m  reason: collision with root package name */
    private final boolean f40388m;

    /* renamed from: n  reason: collision with root package name */
    private final boolean f40389n;

    /* renamed from: o  reason: collision with root package name */
    private final Set f40390o;

    /* renamed from: p  reason: collision with root package name */
    private Map f40391p;

    /* renamed from: q  reason: collision with root package name */
    private Map f40392q;

    /* renamed from: r  reason: collision with root package name */
    private Map f40393r;

    /* renamed from: s  reason: collision with root package name */
    private final Lazy f40394s;

    /* renamed from: t  reason: collision with root package name */
    private final Lazy f40395t;

    /* renamed from: u  reason: collision with root package name */
    private final Lazy f40396u;

    /* renamed from: v  reason: collision with root package name */
    private final Lazy f40397v;

    /* renamed from: w  reason: collision with root package name */
    private final Lazy f40398w;

    /* renamed from: x  reason: collision with root package name */
    private final Lazy f40399x;

    /* renamed from: y  reason: collision with root package name */
    private final Lazy f40400y;

    /* renamed from: z  reason: collision with root package name */
    private final Lazy f40401z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String c(Uri uri) {
            String uri2 = uri.toString();
            Intrinsics.checkNotNullExpressionValue(uri2, "toString(...)");
            if (uri2.length() > 30) {
                String substring = uri2.substring(0, 30);
                Intrinsics.checkNotNullExpressionValue(substring, "substring(...)");
                return substring + "...";
            }
            return uri2;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final void d(ImageRequest imageRequest) {
            boolean z10;
            if (imageRequest.getLowestPermittedRequestLevel().d() <= ImageRequest.RequestLevel.ENCODED_MEMORY_CACHE.d()) {
                z10 = true;
            } else {
                z10 = false;
            }
            p8.j.b(Boolean.valueOf(z10));
        }

        private a() {
        }
    }

    public q0(ContentResolver contentResolver, x producerFactory, NetworkFetcher networkFetcher, boolean z10, boolean z11, h1 threadHandoffProducerQueue, DownsampleMode downsampleMode, boolean z12, boolean z13, boolean z14, ab.d imageTranscoderFactory, boolean z15, boolean z16, boolean z17, Set set) {
        Intrinsics.checkNotNullParameter(contentResolver, "contentResolver");
        Intrinsics.checkNotNullParameter(producerFactory, "producerFactory");
        Intrinsics.checkNotNullParameter(networkFetcher, "networkFetcher");
        Intrinsics.checkNotNullParameter(threadHandoffProducerQueue, "threadHandoffProducerQueue");
        Intrinsics.checkNotNullParameter(downsampleMode, "downsampleMode");
        Intrinsics.checkNotNullParameter(imageTranscoderFactory, "imageTranscoderFactory");
        this.f40376a = contentResolver;
        this.f40377b = producerFactory;
        this.f40378c = networkFetcher;
        this.f40379d = z10;
        this.f40380e = z11;
        this.f40381f = threadHandoffProducerQueue;
        this.f40382g = downsampleMode;
        this.f40383h = z12;
        this.f40384i = z13;
        this.f40385j = z14;
        this.f40386k = imageTranscoderFactory;
        this.f40387l = z15;
        this.f40388m = z16;
        this.f40389n = z17;
        this.f40390o = set;
        this.f40391p = new LinkedHashMap();
        this.f40392q = new LinkedHashMap();
        this.f40393r = new LinkedHashMap();
        this.f40394s = rr.l.a(new Function0() { // from class: oa.y
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                b1 b02;
                b02 = q0.b0(q0.this);
                return b02;
            }
        });
        this.f40395t = rr.l.a(new Function0() { // from class: oa.p0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                b1 V;
                V = q0.V(q0.this);
                return V;
            }
        });
        this.f40396u = rr.l.a(new Function0() { // from class: oa.z
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                b1 T;
                T = q0.T(q0.this);
                return T;
            }
        });
        this.f40397v = rr.l.a(new Function0() { // from class: oa.a0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 c02;
                c02 = q0.c0(q0.this);
                return c02;
            }
        });
        this.f40398w = rr.l.a(new Function0() { // from class: oa.b0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 u10;
                u10 = q0.u(q0.this);
                return u10;
            }
        });
        this.f40399x = rr.l.a(new Function0() { // from class: oa.c0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                f1 d02;
                d02 = q0.d0(q0.this);
                return d02;
            }
        });
        this.f40400y = rr.l.a(new Function0() { // from class: oa.d0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 v10;
                v10 = q0.v(q0.this);
                return v10;
            }
        });
        this.f40401z = rr.l.a(new Function0() { // from class: oa.e0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                f1 W;
                W = q0.W(q0.this);
                return W;
            }
        });
        this.A = rr.l.a(new Function0() { // from class: oa.f0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 t10;
                t10 = q0.t(q0.this);
                return t10;
            }
        });
        this.B = rr.l.a(new Function0() { // from class: oa.g0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 s10;
                s10 = q0.s(q0.this);
                return s10;
            }
        });
        this.C = rr.l.a(new Function0() { // from class: oa.h0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 X;
                X = q0.X(q0.this);
                return X;
            }
        });
        this.D = rr.l.a(new Function0() { // from class: oa.i0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 a02;
                a02 = q0.a0(q0.this);
                return a02;
            }
        });
        this.E = rr.l.a(new Function0() { // from class: oa.j0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 U;
                U = q0.U(q0.this);
                return U;
            }
        });
        this.F = rr.l.a(new Function0() { // from class: oa.k0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 Z;
                Z = q0.Z(q0.this);
                return Z;
            }
        });
        this.G = rr.l.a(new Function0() { // from class: oa.l0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 n02;
                n02 = q0.n0(q0.this);
                return n02;
            }
        });
        this.H = rr.l.a(new Function0() { // from class: oa.m0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 Y;
                Y = q0.Y(q0.this);
                return Y;
            }
        });
        this.I = rr.l.a(new Function0() { // from class: oa.n0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 S;
                S = q0.S(q0.this);
                return S;
            }
        });
        this.J = rr.l.a(new Function0() { // from class: oa.o0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                w0 w10;
                w10 = q0.w(q0.this);
                return w10;
            }
        });
    }

    private final w0 A(ImageRequest imageRequest) {
        w0 O;
        if (!za.b.d()) {
            Uri sourceUri = imageRequest.getSourceUri();
            Intrinsics.checkNotNullExpressionValue(sourceUri, "getSourceUri(...)");
            if (sourceUri != null) {
                int sourceUriType = imageRequest.getSourceUriType();
                if (sourceUriType != 0) {
                    switch (sourceUriType) {
                        case 2:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                return M();
                            }
                            return N();
                        case 3:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                return M();
                            }
                            return K();
                        case 4:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                return M();
                            }
                            if (r8.a.c(this.f40376a.getType(sourceUri))) {
                                return N();
                            }
                            return I();
                        case 5:
                            return H();
                        case 6:
                            return L();
                        case 7:
                            return D();
                        case 8:
                            return R();
                        default:
                            Set set = this.f40390o;
                            if (set != null) {
                                Iterator it = set.iterator();
                                if (it.hasNext()) {
                                    android.support.v4.media.session.b.a(it.next());
                                    throw null;
                                }
                            }
                            String c10 = K.c(sourceUri);
                            throw new IllegalArgumentException("Unsupported uri scheme! Uri is: " + c10);
                    }
                }
                return O();
            }
            throw new IllegalStateException("Uri is null.");
        }
        za.b.a("ProducerSequenceFactory#getBasicDecodedImageSequence");
        try {
            Uri sourceUri2 = imageRequest.getSourceUri();
            Intrinsics.checkNotNullExpressionValue(sourceUri2, "getSourceUri(...)");
            if (sourceUri2 != null) {
                int sourceUriType2 = imageRequest.getSourceUriType();
                if (sourceUriType2 != 0) {
                    switch (sourceUriType2) {
                        case 2:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                w0 M = M();
                                za.b.b();
                                return M;
                            }
                            O = N();
                            break;
                        case 3:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                w0 M2 = M();
                                za.b.b();
                                return M2;
                            }
                            O = K();
                            break;
                        case 4:
                            if (imageRequest.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                                w0 M3 = M();
                                za.b.b();
                                return M3;
                            } else if (r8.a.c(this.f40376a.getType(sourceUri2))) {
                                w0 N = N();
                                za.b.b();
                                return N;
                            } else {
                                O = I();
                                break;
                            }
                        case 5:
                            O = H();
                            break;
                        case 6:
                            O = L();
                            break;
                        case 7:
                            O = D();
                            break;
                        case 8:
                            O = R();
                            break;
                        default:
                            Set set2 = this.f40390o;
                            if (set2 != null) {
                                Iterator it2 = set2.iterator();
                                if (it2.hasNext()) {
                                    android.support.v4.media.session.b.a(it2.next());
                                    throw null;
                                }
                            }
                            String c11 = K.c(sourceUri2);
                            throw new IllegalArgumentException("Unsupported uri scheme! Uri is: " + c11);
                    }
                } else {
                    O = O();
                }
                za.b.b();
                return O;
            }
            throw new IllegalStateException("Uri is null.");
        } catch (Throwable th2) {
            za.b.b();
            throw th2;
        }
    }

    private final synchronized w0 B(w0 w0Var) {
        w0 w0Var2;
        w0Var2 = (w0) this.f40393r.get(w0Var);
        if (w0Var2 == null) {
            w0Var2 = this.f40377b.f(w0Var);
            this.f40393r.put(w0Var, w0Var2);
        }
        return w0Var2;
    }

    private final synchronized w0 F(w0 w0Var) {
        com.facebook.imagepipeline.producers.r k10;
        k10 = this.f40377b.k(w0Var);
        Intrinsics.checkNotNullExpressionValue(k10, "newDelayProducer(...)");
        return k10;
    }

    private final synchronized w0 Q(w0 w0Var) {
        w0 w0Var2;
        w0Var2 = (w0) this.f40391p.get(w0Var);
        if (w0Var2 == null) {
            u0 B = this.f40377b.B(w0Var);
            Intrinsics.checkNotNullExpressionValue(B, "newPostprocessorProducer(...)");
            w0Var2 = this.f40377b.A(B);
            this.f40391p.put(w0Var, w0Var2);
        }
        return w0Var2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 S(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.f0 q10 = this$0.f40377b.q();
        Intrinsics.checkNotNullExpressionValue(q10, "newLocalAssetFetchProducer(...)");
        return this$0.g0(q10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b1 T(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return new b1(this$0.x());
        }
        za.b.a("ProducerSequenceFactory#getLocalContentUriFetchEncodedImageProducerSequence:init");
        try {
            return new b1(this$0.x());
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 U(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.g0 r10 = this$0.f40377b.r();
        Intrinsics.checkNotNullExpressionValue(r10, "newLocalContentUriFetchProducer(...)");
        return this$0.h0(r10, new m1[]{this$0.f40377b.s(), this$0.f40377b.t()});
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b1 V(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return new b1(this$0.y());
        }
        za.b.a("ProducerSequenceFactory#getLocalFileFetchEncodedImageProducerSequence:init");
        try {
            return new b1(this$0.y());
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final f1 W(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return this$0.f40377b.E(this$0.y());
        }
        za.b.a("ProducerSequenceFactory#getLocalFileFetchToEncodedMemoryPrefetchSequence:init");
        try {
            return this$0.f40377b.E(this$0.y());
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 X(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.k0 u10 = this$0.f40377b.u();
        Intrinsics.checkNotNullExpressionValue(u10, "newLocalFileFetchProducer(...)");
        return this$0.g0(u10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 Y(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.l0 v10 = this$0.f40377b.v();
        Intrinsics.checkNotNullExpressionValue(v10, "newLocalResourceFetchProducer(...)");
        return this$0.g0(v10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 Z(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (Build.VERSION.SDK_INT >= 29) {
            com.facebook.imagepipeline.producers.m0 w10 = this$0.f40377b.w();
            Intrinsics.checkNotNullExpressionValue(w10, "newLocalThumbnailBitmapSdk29Producer(...)");
            return this$0.e0(w10);
        }
        throw new Throwable("Unreachable exception. Just to make linter happy for the lazy block.");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 a0(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.n0 x10 = this$0.f40377b.x();
        Intrinsics.checkNotNullExpressionValue(x10, "newLocalVideoThumbnailProducer(...)");
        return this$0.e0(x10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final b1 b0(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return new b1(this$0.z());
        }
        za.b.a("ProducerSequenceFactory#getNetworkFetchEncodedImageProducerSequence:init");
        try {
            return new b1(this$0.z());
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 c0(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return this$0.f0(this$0.C());
        }
        za.b.a("ProducerSequenceFactory#getNetworkFetchSequence:init");
        try {
            return this$0.f0(this$0.C());
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final f1 d0(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return this$0.f40377b.E(this$0.z());
        }
        za.b.a("ProducerSequenceFactory#getNetworkFetchToEncodedMemoryPrefetchSequence");
        try {
            return this$0.f40377b.E(this$0.z());
        } finally {
            za.b.b();
        }
    }

    private final w0 e0(w0 w0Var) {
        com.facebook.imagepipeline.producers.i e10 = this.f40377b.e(w0Var);
        Intrinsics.checkNotNullExpressionValue(e10, "newBitmapMemoryCacheProducer(...)");
        com.facebook.imagepipeline.producers.h d10 = this.f40377b.d(e10);
        Intrinsics.checkNotNullExpressionValue(d10, "newBitmapMemoryCacheKeyMultiplexProducer(...)");
        w0 b10 = this.f40377b.b(d10, this.f40381f);
        Intrinsics.checkNotNullExpressionValue(b10, "newBackgroundThreadHandoffProducer(...)");
        if (!this.f40387l && !this.f40388m) {
            com.facebook.imagepipeline.producers.g c10 = this.f40377b.c(b10);
            Intrinsics.checkNotNullExpressionValue(c10, "newBitmapMemoryCacheGetProducer(...)");
            return c10;
        }
        com.facebook.imagepipeline.producers.g c11 = this.f40377b.c(b10);
        Intrinsics.checkNotNullExpressionValue(c11, "newBitmapMemoryCacheGetProducer(...)");
        com.facebook.imagepipeline.producers.k g10 = this.f40377b.g(c11);
        Intrinsics.checkNotNullExpressionValue(g10, "newBitmapProbeProducer(...)");
        return g10;
    }

    private final w0 g0(w0 w0Var) {
        return h0(w0Var, new m1[]{this.f40377b.t()});
    }

    private final w0 h0(w0 w0Var, m1[] m1VarArr) {
        return f0(m0(k0(w0Var), m1VarArr));
    }

    private final w0 j0(w0 w0Var) {
        com.facebook.imagepipeline.producers.v m10;
        com.facebook.imagepipeline.producers.v m11;
        if (!za.b.d()) {
            if (this.f40384i) {
                r0 z10 = this.f40377b.z(w0Var);
                Intrinsics.checkNotNullExpressionValue(z10, "newPartialDiskCacheProducer(...)");
                m11 = this.f40377b.m(z10);
            } else {
                m11 = this.f40377b.m(w0Var);
            }
            Intrinsics.checkNotNull(m11);
            com.facebook.imagepipeline.producers.u l10 = this.f40377b.l(m11);
            Intrinsics.checkNotNullExpressionValue(l10, "newDiskCacheReadProducer(...)");
            return l10;
        }
        za.b.a("ProducerSequenceFactory#newDiskCacheSequence");
        try {
            if (this.f40384i) {
                r0 z11 = this.f40377b.z(w0Var);
                Intrinsics.checkNotNullExpressionValue(z11, "newPartialDiskCacheProducer(...)");
                m10 = this.f40377b.m(z11);
            } else {
                m10 = this.f40377b.m(w0Var);
            }
            Intrinsics.checkNotNull(m10);
            com.facebook.imagepipeline.producers.u l11 = this.f40377b.l(m10);
            Intrinsics.checkNotNullExpressionValue(l11, "newDiskCacheReadProducer(...)");
            za.b.b();
            return l11;
        } catch (Throwable th2) {
            za.b.b();
            throw th2;
        }
    }

    private final w0 k0(w0 w0Var) {
        if (this.f40385j) {
            w0Var = j0(w0Var);
        }
        w0 o10 = this.f40377b.o(w0Var);
        Intrinsics.checkNotNullExpressionValue(o10, "newEncodedMemoryCacheProducer(...)");
        if (this.f40388m) {
            com.facebook.imagepipeline.producers.z p10 = this.f40377b.p(o10);
            Intrinsics.checkNotNullExpressionValue(p10, "newEncodedProbeProducer(...)");
            com.facebook.imagepipeline.producers.x n10 = this.f40377b.n(p10);
            Intrinsics.checkNotNullExpressionValue(n10, "newEncodedCacheKeyMultiplexProducer(...)");
            return n10;
        }
        com.facebook.imagepipeline.producers.x n11 = this.f40377b.n(o10);
        Intrinsics.checkNotNullExpressionValue(n11, "newEncodedCacheKeyMultiplexProducer(...)");
        return n11;
    }

    private final w0 l0(m1[] m1VarArr) {
        l1 G = this.f40377b.G(m1VarArr);
        Intrinsics.checkNotNullExpressionValue(G, "newThumbnailBranchProducer(...)");
        c1 D = this.f40377b.D(G, true, this.f40386k);
        Intrinsics.checkNotNullExpressionValue(D, "newResizeAndRotateProducer(...)");
        return D;
    }

    private final w0 m0(w0 w0Var, m1[] m1VarArr) {
        com.facebook.imagepipeline.producers.a a10 = x.a(w0Var);
        Intrinsics.checkNotNullExpressionValue(a10, "newAddImageTransformMetaDataProducer(...)");
        j1 F = this.f40377b.F(this.f40377b.D(a10, true, this.f40386k));
        Intrinsics.checkNotNullExpressionValue(F, "newThrottlingProducer(...)");
        com.facebook.imagepipeline.producers.l h10 = x.h(l0(m1VarArr), F);
        Intrinsics.checkNotNullExpressionValue(h10, "newBranchOnSeparateImagesProducer(...)");
        return h10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 n0(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        a1 C = this$0.f40377b.C();
        Intrinsics.checkNotNullExpressionValue(C, "newQualifiedResourceFetchProducer(...)");
        return this$0.g0(C);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 s(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            com.facebook.imagepipeline.producers.g0 r10 = this$0.f40377b.r();
            Intrinsics.checkNotNullExpressionValue(r10, "newLocalContentUriFetchProducer(...)");
            return this$0.f40377b.b(this$0.k0(r10), this$0.f40381f);
        }
        za.b.a("ProducerSequenceFactory#getBackgroundLocalContentUriFetchToEncodeMemorySequence:init");
        try {
            com.facebook.imagepipeline.producers.g0 r11 = this$0.f40377b.r();
            Intrinsics.checkNotNullExpressionValue(r11, "newLocalContentUriFetchProducer(...)");
            return this$0.f40377b.b(this$0.k0(r11), this$0.f40381f);
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 t(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            com.facebook.imagepipeline.producers.k0 u10 = this$0.f40377b.u();
            Intrinsics.checkNotNullExpressionValue(u10, "newLocalFileFetchProducer(...)");
            return this$0.f40377b.b(this$0.k0(u10), this$0.f40381f);
        }
        za.b.a("ProducerSequenceFactory#getBackgroundLocalFileFetchToEncodeMemorySequence");
        try {
            com.facebook.imagepipeline.producers.k0 u11 = this$0.f40377b.u();
            Intrinsics.checkNotNullExpressionValue(u11, "newLocalFileFetchProducer(...)");
            return this$0.f40377b.b(this$0.k0(u11), this$0.f40381f);
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 u(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return this$0.f40377b.b(this$0.C(), this$0.f40381f);
        }
        za.b.a("ProducerSequenceFactory#getBackgroundNetworkFetchToEncodedMemorySequence:init");
        try {
            return this$0.f40377b.b(this$0.C(), this$0.f40381f);
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 v(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        if (!za.b.d()) {
            return this$0.i0(this$0.f40378c);
        }
        za.b.a("ProducerSequenceFactory#getCommonNetworkFetchToEncodedMemorySequence");
        try {
            return this$0.i0(this$0.f40378c);
        } finally {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final w0 w(q0 this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        com.facebook.imagepipeline.producers.n i10 = this$0.f40377b.i();
        Intrinsics.checkNotNullExpressionValue(i10, "newDataFetchProducer(...)");
        return this$0.f0(this$0.f40377b.D(x.a(i10), true, this$0.f40386k));
    }

    public final w0 C() {
        return (w0) this.f40400y.getValue();
    }

    public final w0 D() {
        return (w0) this.J.getValue();
    }

    public final w0 E(ImageRequest imageRequest) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        if (!za.b.d()) {
            w0 A = A(imageRequest);
            if (imageRequest.getPostprocessor() != null) {
                A = Q(A);
            }
            if (this.f40383h) {
                A = B(A);
            }
            if (this.f40389n && imageRequest.getDelayMs() > 0) {
                return F(A);
            }
            return A;
        }
        za.b.a("ProducerSequenceFactory#getDecodedImageProducerSequence");
        try {
            w0 A2 = A(imageRequest);
            if (imageRequest.getPostprocessor() != null) {
                A2 = Q(A2);
            }
            if (this.f40383h) {
                A2 = B(A2);
            }
            if (this.f40389n && imageRequest.getDelayMs() > 0) {
                A2 = F(A2);
            }
            za.b.b();
            return A2;
        } catch (Throwable th2) {
            za.b.b();
            throw th2;
        }
    }

    public final w0 G(ImageRequest imageRequest) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        a aVar = K;
        aVar.d(imageRequest);
        int sourceUriType = imageRequest.getSourceUriType();
        if (sourceUriType != 0) {
            if (sourceUriType != 2 && sourceUriType != 3) {
                Uri sourceUri = imageRequest.getSourceUri();
                Intrinsics.checkNotNullExpressionValue(sourceUri, "getSourceUri(...)");
                String c10 = aVar.c(sourceUri);
                throw new IllegalArgumentException("Unsupported uri scheme for encoded image fetch! Uri is: " + c10);
            }
            return J();
        }
        return P();
    }

    public final w0 H() {
        return (w0) this.I.getValue();
    }

    public final w0 I() {
        return (w0) this.E.getValue();
    }

    public final w0 J() {
        Object value = this.f40401z.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (w0) value;
    }

    public final w0 K() {
        return (w0) this.C.getValue();
    }

    public final w0 L() {
        return (w0) this.H.getValue();
    }

    public final w0 M() {
        return (w0) this.F.getValue();
    }

    public final w0 N() {
        return (w0) this.D.getValue();
    }

    public final w0 O() {
        return (w0) this.f40397v.getValue();
    }

    public final w0 P() {
        Object value = this.f40399x.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (w0) value;
    }

    public final w0 R() {
        return (w0) this.G.getValue();
    }

    public final w0 f0(w0 inputProducer) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        if (!za.b.d()) {
            com.facebook.imagepipeline.producers.o j10 = this.f40377b.j(inputProducer);
            Intrinsics.checkNotNullExpressionValue(j10, "newDecodeProducer(...)");
            return e0(j10);
        }
        za.b.a("ProducerSequenceFactory#newBitmapCacheGetToDecodeSequence");
        try {
            com.facebook.imagepipeline.producers.o j11 = this.f40377b.j(inputProducer);
            Intrinsics.checkNotNullExpressionValue(j11, "newDecodeProducer(...)");
            return e0(j11);
        } finally {
            za.b.b();
        }
    }

    public final synchronized w0 i0(NetworkFetcher networkFetcher) {
        try {
            Intrinsics.checkNotNullParameter(networkFetcher, "networkFetcher");
            boolean z10 = false;
            if (!za.b.d()) {
                w0 y10 = this.f40377b.y(networkFetcher);
                Intrinsics.checkNotNullExpressionValue(y10, "newNetworkFetchProducer(...)");
                com.facebook.imagepipeline.producers.a a10 = x.a(k0(y10));
                Intrinsics.checkNotNullExpressionValue(a10, "newAddImageTransformMetaDataProducer(...)");
                x xVar = this.f40377b;
                if (this.f40379d && this.f40382g != DownsampleMode.f10504i) {
                    z10 = true;
                }
                return xVar.D(a10, z10, this.f40386k);
            }
            za.b.a("ProducerSequenceFactory#createCommonNetworkFetchToEncodedMemorySequence");
            w0 y11 = this.f40377b.y(networkFetcher);
            Intrinsics.checkNotNullExpressionValue(y11, "newNetworkFetchProducer(...)");
            com.facebook.imagepipeline.producers.a a11 = x.a(k0(y11));
            Intrinsics.checkNotNullExpressionValue(a11, "newAddImageTransformMetaDataProducer(...)");
            x xVar2 = this.f40377b;
            if (this.f40379d && this.f40382g != DownsampleMode.f10504i) {
                z10 = true;
            }
            c1 D = xVar2.D(a11, z10, this.f40386k);
            za.b.b();
            return D;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final w0 x() {
        Object value = this.B.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (w0) value;
    }

    public final w0 y() {
        Object value = this.A.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (w0) value;
    }

    public final w0 z() {
        Object value = this.f40398w.getValue();
        Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
        return (w0) value;
    }
}
