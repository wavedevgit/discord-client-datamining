package com.facebook.imagepipeline.core;

import android.net.Uri;
import android.os.StrictMode;
import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.common.references.CloseableReference;
import com.facebook.datasource.DataSource;
import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.core.ImagePipeline;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.producers.d0;
import com.facebook.imagepipeline.producers.d1;
import com.facebook.imagepipeline.producers.h1;
import com.facebook.imagepipeline.producers.w0;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.ImageRequestBuilder;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicLong;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import la.j;
import la.k;
import la.w;
import na.q0;
import na.r;
import or.p;
import ua.c;
import ua.d;
import w8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ImagePipeline {

    /* renamed from: n  reason: collision with root package name */
    public static final a f10468n = new a(null);

    /* renamed from: o  reason: collision with root package name */
    private static final CancellationException f10469o = new CancellationException("Prefetching is not enabled");

    /* renamed from: p  reason: collision with root package name */
    private static final CancellationException f10470p = new CancellationException("ImageRequest is null");

    /* renamed from: q  reason: collision with root package name */
    private static final CancellationException f10471q = new CancellationException("Modified URL is null");

    /* renamed from: a  reason: collision with root package name */
    private final q0 f10472a;

    /* renamed from: b  reason: collision with root package name */
    private final Supplier f10473b;

    /* renamed from: c  reason: collision with root package name */
    private final Supplier f10474c;

    /* renamed from: d  reason: collision with root package name */
    private final RequestListener f10475d;

    /* renamed from: e  reason: collision with root package name */
    private final d f10476e;

    /* renamed from: f  reason: collision with root package name */
    private final w f10477f;

    /* renamed from: g  reason: collision with root package name */
    private final w f10478g;

    /* renamed from: h  reason: collision with root package name */
    private final k f10479h;

    /* renamed from: i  reason: collision with root package name */
    private final h1 f10480i;

    /* renamed from: j  reason: collision with root package name */
    private final Supplier f10481j;

    /* renamed from: k  reason: collision with root package name */
    private final AtomicLong f10482k;

    /* renamed from: l  reason: collision with root package name */
    private final Supplier f10483l;

    /* renamed from: m  reason: collision with root package name */
    private final r f10484m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f10485a;

        static {
            int[] iArr = new int[ImageRequest.CacheChoice.values().length];
            try {
                iArr[ImageRequest.CacheChoice.DEFAULT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[ImageRequest.CacheChoice.SMALL.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[ImageRequest.CacheChoice.DYNAMIC.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f10485a = iArr;
        }
    }

    public ImagePipeline(q0 producerSequenceFactory, Set requestListeners, Set requestListener2s, Supplier isPrefetchEnabledSupplier, w bitmapMemoryCache, w encodedMemoryCache, Supplier diskCachesStoreSupplier, k cacheKeyFactory, h1 threadHandoffProducerQueue, Supplier suppressBitmapPrefetchingSupplier, Supplier lazyDataSource, k8.a aVar, r config) {
        Intrinsics.checkNotNullParameter(producerSequenceFactory, "producerSequenceFactory");
        Intrinsics.checkNotNullParameter(requestListeners, "requestListeners");
        Intrinsics.checkNotNullParameter(requestListener2s, "requestListener2s");
        Intrinsics.checkNotNullParameter(isPrefetchEnabledSupplier, "isPrefetchEnabledSupplier");
        Intrinsics.checkNotNullParameter(bitmapMemoryCache, "bitmapMemoryCache");
        Intrinsics.checkNotNullParameter(encodedMemoryCache, "encodedMemoryCache");
        Intrinsics.checkNotNullParameter(diskCachesStoreSupplier, "diskCachesStoreSupplier");
        Intrinsics.checkNotNullParameter(cacheKeyFactory, "cacheKeyFactory");
        Intrinsics.checkNotNullParameter(threadHandoffProducerQueue, "threadHandoffProducerQueue");
        Intrinsics.checkNotNullParameter(suppressBitmapPrefetchingSupplier, "suppressBitmapPrefetchingSupplier");
        Intrinsics.checkNotNullParameter(lazyDataSource, "lazyDataSource");
        Intrinsics.checkNotNullParameter(config, "config");
        this.f10472a = producerSequenceFactory;
        this.f10473b = isPrefetchEnabledSupplier;
        this.f10474c = diskCachesStoreSupplier;
        this.f10475d = new c(requestListeners);
        this.f10476e = new ua.b(requestListener2s);
        this.f10482k = new AtomicLong();
        this.f10477f = bitmapMemoryCache;
        this.f10478g = encodedMemoryCache;
        this.f10479h = cacheKeyFactory;
        this.f10480i = threadHandoffProducerQueue;
        this.f10481j = suppressBitmapPrefetchingSupplier;
        this.f10483l = lazyDataSource;
        this.f10484m = config;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean A(Uri uri, CacheKey key) {
        Intrinsics.checkNotNullParameter(uri, "$uri");
        Intrinsics.checkNotNullParameter(key, "key");
        return key.b(uri);
    }

    private final DataSource D(w0 w0Var, ImageRequest imageRequest, ImageRequest.RequestLevel requestLevel, Object obj, RequestListener requestListener, String str) {
        return E(w0Var, imageRequest, requestLevel, obj, requestListener, str, null);
    }

    private final DataSource E(w0 w0Var, ImageRequest imageRequest, ImageRequest.RequestLevel requestLevel, Object obj, RequestListener requestListener, String str, Map map) {
        DataSource b10;
        ImageRequest.RequestLevel a10;
        String p10;
        boolean z10;
        boolean z11;
        if (!ya.b.d()) {
            d0 d0Var = new d0(s(imageRequest, requestListener), this.f10476e);
            try {
                ImageRequest.RequestLevel a11 = ImageRequest.RequestLevel.a(imageRequest.getLowestPermittedRequestLevel(), requestLevel);
                Intrinsics.checkNotNullExpressionValue(a11, "getMax(...)");
                String p11 = p();
                if (!imageRequest.getProgressiveRenderingEnabled() && f.p(imageRequest.getSourceUri())) {
                    z11 = false;
                    d1 d1Var = new d1(imageRequest, p11, str, d0Var, obj, a11, false, z11, imageRequest.getPriority(), this.f10484m);
                    d1Var.W(map);
                    return oa.c.F(w0Var, d1Var, d0Var);
                }
                z11 = true;
                d1 d1Var2 = new d1(imageRequest, p11, str, d0Var, obj, a11, false, z11, imageRequest.getPriority(), this.f10484m);
                d1Var2.W(map);
                return oa.c.F(w0Var, d1Var2, d0Var);
            } catch (Exception e10) {
                return y8.c.b(e10);
            }
        }
        ya.b.a("ImagePipeline#submitFetchRequest");
        try {
            d0 d0Var2 = new d0(s(imageRequest, requestListener), this.f10476e);
            try {
                a10 = ImageRequest.RequestLevel.a(imageRequest.getLowestPermittedRequestLevel(), requestLevel);
                Intrinsics.checkNotNullExpressionValue(a10, "getMax(...)");
                p10 = p();
            } catch (Exception e11) {
                b10 = y8.c.b(e11);
            }
            if (!imageRequest.getProgressiveRenderingEnabled() && f.p(imageRequest.getSourceUri())) {
                z10 = false;
                d1 d1Var3 = new d1(imageRequest, p10, str, d0Var2, obj, a10, false, z10, imageRequest.getPriority(), this.f10484m);
                d1Var3.W(map);
                b10 = oa.c.F(w0Var, d1Var3, d0Var2);
                ya.b.b();
                return b10;
            }
            z10 = true;
            d1 d1Var32 = new d1(imageRequest, p10, str, d0Var2, obj, a10, false, z10, imageRequest.getPriority(), this.f10484m);
            d1Var32.W(map);
            b10 = oa.c.F(w0Var, d1Var32, d0Var2);
            ya.b.b();
            return b10;
        } catch (Throwable th2) {
            ya.b.b();
            throw th2;
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:15:0x0065, code lost:
        if (r1.getProgressiveRenderingEnabled() != false) goto L16;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final com.facebook.datasource.DataSource F(com.facebook.imagepipeline.producers.w0 r11, com.facebook.imagepipeline.request.ImageRequest r12, com.facebook.imagepipeline.request.ImageRequest.RequestLevel r13, java.lang.Object r14, com.facebook.imagepipeline.common.Priority r15, com.facebook.imagepipeline.listener.RequestListener r16) {
        /*
            r10 = this;
            com.facebook.imagepipeline.producers.d0 r3 = new com.facebook.imagepipeline.producers.d0
            r0 = r16
            com.facebook.imagepipeline.listener.RequestListener r0 = r10.s(r12, r0)
            ua.d r1 = r10.f10476e
            r3.<init>(r0, r1)
            android.net.Uri r0 = r12.getSourceUri()
            java.lang.String r1 = "getSourceUri(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
            aa.c r1 = aa.b.f445b
            android.net.Uri r1 = r1.a(r0, r14)
            if (r1 != 0) goto L2a
            java.util.concurrent.CancellationException r11 = com.facebook.imagepipeline.core.ImagePipeline.f10471q
            com.facebook.datasource.DataSource r11 = y8.c.b(r11)
            java.lang.String r12 = "immediateFailedDataSource(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r11, r12)
            return r11
        L2a:
            boolean r0 = kotlin.jvm.internal.Intrinsics.areEqual(r0, r1)
            if (r0 == 0) goto L32
        L30:
            r1 = r12
            goto L3f
        L32:
            com.facebook.imagepipeline.request.ImageRequestBuilder r12 = com.facebook.imagepipeline.request.ImageRequestBuilder.b(r12)
            com.facebook.imagepipeline.request.ImageRequestBuilder r12 = r12.R(r1)
            com.facebook.imagepipeline.request.ImageRequest r12 = r12.a()
            goto L30
        L3f:
            com.facebook.imagepipeline.request.ImageRequest$RequestLevel r12 = r1.getLowestPermittedRequestLevel()     // Catch: java.lang.Exception -> L69
            com.facebook.imagepipeline.request.ImageRequest$RequestLevel r5 = com.facebook.imagepipeline.request.ImageRequest.RequestLevel.a(r12, r13)     // Catch: java.lang.Exception -> L69
            java.lang.String r12 = "getMax(...)"
            kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r5, r12)     // Catch: java.lang.Exception -> L69
            com.facebook.imagepipeline.producers.d1 r0 = new com.facebook.imagepipeline.producers.d1     // Catch: java.lang.Exception -> L69
            java.lang.String r2 = r10.p()     // Catch: java.lang.Exception -> L69
            na.r r12 = r10.f10484m     // Catch: java.lang.Exception -> L69
            com.facebook.imagepipeline.core.a r12 = r12.G()     // Catch: java.lang.Exception -> L69
            if (r12 == 0) goto L6c
            boolean r12 = r12.b()     // Catch: java.lang.Exception -> L69
            r13 = 1
            if (r12 != r13) goto L6c
            boolean r12 = r1.getProgressiveRenderingEnabled()     // Catch: java.lang.Exception -> L69
            if (r12 == 0) goto L6c
        L67:
            r7 = r13
            goto L6e
        L69:
            r0 = move-exception
            r11 = r0
            goto L7d
        L6c:
            r13 = 0
            goto L67
        L6e:
            na.r r9 = r10.f10484m     // Catch: java.lang.Exception -> L69
            r6 = 1
            r4 = r14
            r8 = r15
            r0.<init>(r1, r2, r3, r4, r5, r6, r7, r8, r9)     // Catch: java.lang.Exception -> L69
            oa.d$a r12 = oa.d.f42354j     // Catch: java.lang.Exception -> L69
            com.facebook.datasource.DataSource r11 = r12.a(r11, r0, r3)     // Catch: java.lang.Exception -> L69
            return r11
        L7d:
            com.facebook.datasource.DataSource r11 = y8.c.b(r11)
            return r11
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.imagepipeline.core.ImagePipeline.F(com.facebook.imagepipeline.producers.w0, com.facebook.imagepipeline.request.ImageRequest, com.facebook.imagepipeline.request.ImageRequest$RequestLevel, java.lang.Object, com.facebook.imagepipeline.common.Priority, com.facebook.imagepipeline.listener.RequestListener):com.facebook.datasource.DataSource");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final boolean f(CacheKey it) {
        Intrinsics.checkNotNullParameter(it, "it");
        return true;
    }

    public static /* synthetic */ DataSource n(ImagePipeline imagePipeline, ImageRequest imageRequest, Object obj, ImageRequest.RequestLevel requestLevel, RequestListener requestListener, String str, int i10, Object obj2) {
        if ((i10 & 4) != 0) {
            requestLevel = null;
        }
        if ((i10 & 8) != 0) {
            requestListener = null;
        }
        if ((i10 & 16) != 0) {
            str = null;
        }
        return imagePipeline.m(imageRequest, obj, requestLevel, requestListener, str);
    }

    private final boolean y(ImageRequest imageRequest) {
        Object obj = this.f10474c.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        na.b bVar = (na.b) obj;
        CacheKey encodedCacheKey = this.f10479h.getEncodedCacheKey(imageRequest, null);
        String diskCacheId = imageRequest.getDiskCacheId();
        if (diskCacheId != null) {
            j jVar = (j) bVar.c().get(diskCacheId);
            if (jVar == null) {
                return false;
            }
            Intrinsics.checkNotNull(encodedCacheKey);
            return jVar.k(encodedCacheKey);
        }
        Iterator it = bVar.c().entrySet().iterator();
        while (it.hasNext()) {
            Intrinsics.checkNotNull(encodedCacheKey);
            if (((j) ((Map.Entry) it.next()).getValue()).k(encodedCacheKey)) {
                return true;
            }
        }
        return false;
    }

    private final o8.k z(final Uri uri) {
        return new o8.k() { // from class: na.p
            @Override // o8.k
            public final boolean apply(Object obj) {
                boolean A;
                A = ImagePipeline.A(uri, (CacheKey) obj);
                return A;
            }
        };
    }

    public final DataSource B(ImageRequest imageRequest, Object obj) {
        return C(imageRequest, obj, Priority.f10442i, null);
    }

    public final DataSource C(ImageRequest imageRequest, Object obj, Priority priority, RequestListener requestListener) {
        Intrinsics.checkNotNullParameter(priority, "priority");
        if (!((Boolean) this.f10473b.get()).booleanValue()) {
            DataSource b10 = y8.c.b(f10469o);
            Intrinsics.checkNotNullExpressionValue(b10, "immediateFailedDataSource(...)");
            return b10;
        } else if (imageRequest == null) {
            DataSource b11 = y8.c.b(new NullPointerException("imageRequest is null"));
            Intrinsics.checkNotNull(b11);
            return b11;
        } else {
            try {
                return F(this.f10472a.G(imageRequest), imageRequest, ImageRequest.RequestLevel.FULL_FETCH, obj, priority, requestListener);
            } catch (Exception e10) {
                return y8.c.b(e10);
            }
        }
    }

    public final void c() {
        e();
        d();
    }

    public final void d() {
        Object obj = this.f10474c.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        na.b bVar = (na.b) obj;
        bVar.b().h();
        bVar.a().h();
        Iterator it = bVar.c().entrySet().iterator();
        while (it.hasNext()) {
            ((j) ((Map.Entry) it.next()).getValue()).h();
        }
    }

    public final void e() {
        o8.k kVar = new o8.k() { // from class: na.q
            @Override // o8.k
            public final boolean apply(Object obj) {
                boolean f10;
                f10 = ImagePipeline.f((CacheKey) obj);
                return f10;
            }
        };
        this.f10477f.f(kVar);
        this.f10478g.f(kVar);
    }

    public final void g(Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        j(uri);
        h(uri);
    }

    public final void h(Uri uri) {
        ImageRequest fromUri = ImageRequest.fromUri(uri);
        if (fromUri != null) {
            i(fromUri);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void i(ImageRequest imageRequest) {
        if (imageRequest != null) {
            CacheKey encodedCacheKey = this.f10479h.getEncodedCacheKey(imageRequest, null);
            Object obj = this.f10474c.get();
            Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
            na.b bVar = (na.b) obj;
            j b10 = bVar.b();
            Intrinsics.checkNotNull(encodedCacheKey);
            b10.s(encodedCacheKey);
            bVar.a().s(encodedCacheKey);
            Iterator it = bVar.c().entrySet().iterator();
            while (it.hasNext()) {
                ((j) ((Map.Entry) it.next()).getValue()).s(encodedCacheKey);
            }
        }
    }

    public final void j(Uri uri) {
        Intrinsics.checkNotNullParameter(uri, "uri");
        o8.k z10 = z(uri);
        this.f10477f.f(z10);
        this.f10478g.f(z10);
    }

    public final DataSource k(ImageRequest imageRequest, Object obj) {
        return n(this, imageRequest, obj, null, null, null, 24, null);
    }

    public final DataSource l(ImageRequest imageRequest, Object obj, ImageRequest.RequestLevel lowestPermittedRequestLevelOnSubmit) {
        Intrinsics.checkNotNullParameter(lowestPermittedRequestLevelOnSubmit, "lowestPermittedRequestLevelOnSubmit");
        return n(this, imageRequest, obj, lowestPermittedRequestLevelOnSubmit, null, null, 16, null);
    }

    public final DataSource m(ImageRequest imageRequest, Object obj, ImageRequest.RequestLevel requestLevel, RequestListener requestListener, String str) {
        if (imageRequest == null) {
            DataSource b10 = y8.c.b(new NullPointerException());
            Intrinsics.checkNotNullExpressionValue(b10, "immediateFailedDataSource(...)");
            return b10;
        }
        try {
            w0 E = this.f10472a.E(imageRequest);
            if (requestLevel == null) {
                requestLevel = ImageRequest.RequestLevel.FULL_FETCH;
            }
            return D(E, imageRequest, requestLevel, obj, requestListener, str);
        } catch (Exception e10) {
            return y8.c.b(e10);
        }
    }

    public final DataSource o(ImageRequest imageRequest, Object obj) {
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        return l(imageRequest, obj, ImageRequest.RequestLevel.BITMAP_MEMORY_CACHE);
    }

    public final String p() {
        return String.valueOf(this.f10482k.getAndIncrement());
    }

    public final w q() {
        return this.f10477f;
    }

    public final k r() {
        return this.f10479h;
    }

    public final RequestListener s(ImageRequest imageRequest, RequestListener requestListener) {
        if (imageRequest != null) {
            if (requestListener == null) {
                if (imageRequest.getRequestListener() == null) {
                    return this.f10475d;
                }
                return new c(this.f10475d, imageRequest.getRequestListener());
            } else if (imageRequest.getRequestListener() == null) {
                return new c(this.f10475d, requestListener);
            } else {
                return new c(this.f10475d, requestListener, imageRequest.getRequestListener());
            }
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final boolean t(Uri uri) {
        if (uri == null) {
            return false;
        }
        return this.f10477f.e(z(uri));
    }

    public final boolean u(ImageRequest imageRequest) {
        if (imageRequest == null) {
            return false;
        }
        CacheKey bitmapCacheKey = this.f10479h.getBitmapCacheKey(imageRequest, null);
        w wVar = this.f10477f;
        Intrinsics.checkNotNull(bitmapCacheKey);
        CloseableReference closeableReference = wVar.get(bitmapCacheKey);
        try {
            return CloseableReference.K0(closeableReference);
        } finally {
            CloseableReference.N(closeableReference);
        }
    }

    public final boolean v(Uri uri) {
        if (!w(uri, ImageRequest.CacheChoice.SMALL) && !w(uri, ImageRequest.CacheChoice.DEFAULT) && !w(uri, ImageRequest.CacheChoice.DYNAMIC)) {
            return false;
        }
        return true;
    }

    public final boolean w(Uri uri, ImageRequest.CacheChoice cacheChoice) {
        ImageRequest a10 = ImageRequestBuilder.x(uri).A(cacheChoice).a();
        Intrinsics.checkNotNull(a10);
        return x(a10);
    }

    public final boolean x(ImageRequest imageRequest) {
        boolean k10;
        Intrinsics.checkNotNullParameter(imageRequest, "imageRequest");
        Object obj = this.f10474c.get();
        Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
        na.b bVar = (na.b) obj;
        CacheKey encodedCacheKey = this.f10479h.getEncodedCacheKey(imageRequest, null);
        ImageRequest.CacheChoice cacheChoice = imageRequest.getCacheChoice();
        Intrinsics.checkNotNullExpressionValue(cacheChoice, "getCacheChoice(...)");
        StrictMode.ThreadPolicy allowThreadDiskReads = StrictMode.allowThreadDiskReads();
        try {
            int i10 = b.f10485a[cacheChoice.ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        k10 = y(imageRequest);
                    } else {
                        throw new p();
                    }
                } else {
                    j a10 = bVar.a();
                    Intrinsics.checkNotNull(encodedCacheKey);
                    k10 = a10.k(encodedCacheKey);
                }
            } else {
                j b10 = bVar.b();
                Intrinsics.checkNotNull(encodedCacheKey);
                k10 = b10.k(encodedCacheKey);
            }
            StrictMode.setThreadPolicy(allowThreadDiskReads);
            return k10;
        } catch (Throwable th2) {
            StrictMode.setThreadPolicy(allowThreadDiskReads);
            throw th2;
        }
    }
}
