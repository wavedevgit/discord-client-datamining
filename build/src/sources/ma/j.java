package ma;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.concurrent.Callable;
import java.util.concurrent.CancellationException;
import java.util.concurrent.Executor;
import java.util.concurrent.atomic.AtomicBoolean;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j {

    /* renamed from: h  reason: collision with root package name */
    public static final a f36184h = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final Class f36185i = j.class;

    /* renamed from: a  reason: collision with root package name */
    private final k8.j f36186a;

    /* renamed from: b  reason: collision with root package name */
    private final s8.i f36187b;

    /* renamed from: c  reason: collision with root package name */
    private final s8.l f36188c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f36189d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f36190e;

    /* renamed from: f  reason: collision with root package name */
    private final s f36191f;

    /* renamed from: g  reason: collision with root package name */
    private final a0 f36192g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(k8.j fileCache, s8.i pooledByteBufferFactory, s8.l pooledByteStreams, Executor readExecutor, Executor writeExecutor, s imageCacheStatsTracker) {
        Intrinsics.checkNotNullParameter(fileCache, "fileCache");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
        Intrinsics.checkNotNullParameter(pooledByteStreams, "pooledByteStreams");
        Intrinsics.checkNotNullParameter(readExecutor, "readExecutor");
        Intrinsics.checkNotNullParameter(writeExecutor, "writeExecutor");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        this.f36186a = fileCache;
        this.f36187b = pooledByteBufferFactory;
        this.f36188c = pooledByteStreams;
        this.f36189d = readExecutor;
        this.f36190e = writeExecutor;
        this.f36191f = imageCacheStatsTracker;
        a0 d10 = a0.d();
        Intrinsics.checkNotNullExpressionValue(d10, "getInstance(...)");
        this.f36192g = d10;
    }

    private final boolean g(CacheKey cacheKey) {
        ta.k c10 = this.f36192g.c(cacheKey);
        if (c10 != null) {
            c10.close();
            q8.a.z(f36185i, "Found image for %s in staging area", cacheKey.a());
            this.f36191f.e(cacheKey);
            return true;
        }
        q8.a.z(f36185i, "Did not find image for %s in staging area", cacheKey.a());
        this.f36191f.k(cacheKey);
        try {
            return this.f36186a.g(cacheKey);
        } catch (Exception unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void i(Object obj, j this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Object e10 = ua.a.e(obj, null);
        try {
            this$0.f36192g.a();
            this$0.f36186a.a();
            return null;
        } finally {
        }
    }

    private final u4.f l(CacheKey cacheKey, ta.k kVar) {
        q8.a.z(f36185i, "Found image for %s in staging area", cacheKey.a());
        this.f36191f.e(cacheKey);
        u4.f h10 = u4.f.h(kVar);
        Intrinsics.checkNotNullExpressionValue(h10, "forResult(...)");
        return h10;
    }

    private final u4.f n(final CacheKey cacheKey, final AtomicBoolean atomicBoolean) {
        try {
            final Object d10 = ua.a.d("BufferedDiskCache_getAsync");
            return u4.f.b(new Callable() { // from class: ma.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    ta.k o10;
                    o10 = j.o(d10, atomicBoolean, this, cacheKey);
                    return o10;
                }
            }, this.f36189d);
        } catch (Exception e10) {
            q8.a.I(f36185i, e10, "Failed to schedule disk-cache read for %s", cacheKey.a());
            return u4.f.g(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ta.k o(Object obj, AtomicBoolean isCancelled, j this$0, CacheKey key) {
        Intrinsics.checkNotNullParameter(isCancelled, "$isCancelled");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ua.a.e(obj, null);
        try {
            if (!isCancelled.get()) {
                ta.k c10 = this$0.f36192g.c(key);
                if (c10 != null) {
                    q8.a.z(f36185i, "Found image for %s in staging area", key.a());
                    this$0.f36191f.e(key);
                } else {
                    q8.a.z(f36185i, "Did not find image for %s in staging area", key.a());
                    this$0.f36191f.k(key);
                    try {
                        s8.h r10 = this$0.r(key);
                        if (r10 == null) {
                            return null;
                        }
                        CloseableReference E0 = CloseableReference.E0(r10);
                        Intrinsics.checkNotNullExpressionValue(E0, "of(...)");
                        try {
                            c10 = new ta.k(E0);
                        } finally {
                            CloseableReference.z(E0);
                        }
                    } catch (Exception unused) {
                        return null;
                    }
                }
                if (!Thread.interrupted()) {
                    return c10;
                }
                q8.a.y(f36185i, "Host thread was interrupted, decreasing reference count");
                c10.close();
                throw new InterruptedException();
            }
            throw new CancellationException();
        } catch (Throwable th2) {
            try {
                ua.a.c(obj, th2);
                throw th2;
            } finally {
                ua.a.f(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(Object obj, j this$0, CacheKey key, ta.k kVar) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ua.a.e(obj, null);
        try {
            this$0.u(key, kVar);
        } finally {
        }
    }

    private final s8.h r(CacheKey cacheKey) {
        try {
            Class cls = f36185i;
            q8.a.z(cls, "Disk cache read for %s", cacheKey.a());
            i8.a d10 = this.f36186a.d(cacheKey);
            if (d10 == null) {
                q8.a.z(cls, "Disk cache miss for %s", cacheKey.a());
                this.f36191f.b(cacheKey);
                return null;
            }
            q8.a.z(cls, "Found entry in disk cache for %s", cacheKey.a());
            this.f36191f.h(cacheKey);
            InputStream a10 = d10.a();
            s8.h b10 = this.f36187b.b(a10, (int) d10.size());
            a10.close();
            q8.a.z(cls, "Successful read from disk cache for %s", cacheKey.a());
            return b10;
        } catch (IOException e10) {
            q8.a.I(f36185i, e10, "Exception reading from cache for %s", cacheKey.a());
            this.f36191f.n(cacheKey);
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void t(Object obj, j this$0, CacheKey key) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ua.a.e(obj, null);
        try {
            this$0.f36192g.g(key);
            this$0.f36186a.f(key);
            return null;
        } finally {
        }
    }

    private final void u(CacheKey cacheKey, final ta.k kVar) {
        Class cls = f36185i;
        q8.a.z(cls, "About to write to disk-cache for key %s", cacheKey.a());
        try {
            this.f36186a.c(cacheKey, new j8.i() { // from class: ma.i
                @Override // j8.i
                public final void a(OutputStream outputStream) {
                    j.v(ta.k.this, this, outputStream);
                }
            });
            this.f36191f.c(cacheKey);
            q8.a.z(cls, "Successful disk-cache write for key %s", cacheKey.a());
        } catch (IOException e10) {
            q8.a.I(f36185i, e10, "Failed to write to disk-cache for key %s", cacheKey.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(ta.k kVar, j this$0, OutputStream os2) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(os2, "os");
        Intrinsics.checkNotNull(kVar);
        InputStream C = kVar.C();
        if (C != null) {
            this$0.f36188c.a(C, os2);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void f(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f36186a.b(key);
    }

    public final u4.f h() {
        this.f36192g.a();
        final Object d10 = ua.a.d("BufferedDiskCache_clearAll");
        try {
            return u4.f.b(new Callable() { // from class: ma.h
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    Void i10;
                    i10 = j.i(d10, this);
                    return i10;
                }
            }, this.f36190e);
        } catch (Exception e10) {
            q8.a.I(f36185i, e10, "Failed to schedule disk-cache clear", new Object[0]);
            return u4.f.g(e10);
        }
    }

    public final boolean j(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (!this.f36192g.b(key) && !this.f36186a.e(key)) {
            return false;
        }
        return true;
    }

    public final boolean k(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (j(key)) {
            return true;
        }
        return g(key);
    }

    public final u4.f m(CacheKey key, AtomicBoolean isCancelled) {
        u4.f n10;
        u4.f l10;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(isCancelled, "isCancelled");
        if (!za.b.d()) {
            ta.k c10 = this.f36192g.c(key);
            if (c10 != null && (l10 = l(key, c10)) != null) {
                return l10;
            }
            return n(key, isCancelled);
        }
        za.b.a("BufferedDiskCache#get");
        try {
            ta.k c11 = this.f36192g.c(key);
            if (c11 != null) {
                n10 = l(key, c11);
                if (n10 == null) {
                }
                za.b.b();
                return n10;
            }
            n10 = n(key, isCancelled);
            za.b.b();
            return n10;
        } catch (Throwable th2) {
            za.b.b();
            throw th2;
        }
    }

    public final void p(final CacheKey key, ta.k encodedImage) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (!za.b.d()) {
            if (ta.k.H0(encodedImage)) {
                this.f36192g.f(key, encodedImage);
                final ta.k h10 = ta.k.h(encodedImage);
                try {
                    final Object d10 = ua.a.d("BufferedDiskCache_putAsync");
                    this.f36190e.execute(new Runnable() { // from class: ma.e
                        @Override // java.lang.Runnable
                        public final void run() {
                            j.q(d10, this, key, h10);
                        }
                    });
                    return;
                } catch (Exception e10) {
                    q8.a.I(f36185i, e10, "Failed to schedule disk-cache write for %s", key.a());
                    this.f36192g.h(key, encodedImage);
                    ta.k.i(h10);
                    return;
                }
            }
            throw new IllegalStateException("Check failed.");
        }
        za.b.a("BufferedDiskCache#put");
        try {
            if (ta.k.H0(encodedImage)) {
                this.f36192g.f(key, encodedImage);
                final ta.k h11 = ta.k.h(encodedImage);
                try {
                    final Object d11 = ua.a.d("BufferedDiskCache_putAsync");
                    this.f36190e.execute(new Runnable() { // from class: ma.e
                        @Override // java.lang.Runnable
                        public final void run() {
                            j.q(d11, this, key, h11);
                        }
                    });
                } catch (Exception e11) {
                    q8.a.I(f36185i, e11, "Failed to schedule disk-cache write for %s", key.a());
                    this.f36192g.h(key, encodedImage);
                    ta.k.i(h11);
                }
                Unit unit = Unit.f31988a;
                return;
            }
            throw new IllegalStateException("Check failed.");
        } finally {
            za.b.b();
        }
    }

    public final u4.f s(final CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f36192g.g(key);
        try {
            final Object d10 = ua.a.d("BufferedDiskCache_remove");
            return u4.f.b(new Callable() { // from class: ma.g
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    Void t10;
                    t10 = j.t(d10, this, key);
                    return t10;
                }
            }, this.f36190e);
        } catch (Exception e10) {
            q8.a.I(f36185i, e10, "Failed to schedule disk-cache remove for %s", key.a());
            return u4.f.g(e10);
        }
    }
}
