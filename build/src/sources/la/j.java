package la;

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
    public static final a f37141h = new a(null);

    /* renamed from: i  reason: collision with root package name */
    private static final Class f37142i = j.class;

    /* renamed from: a  reason: collision with root package name */
    private final j8.j f37143a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f37144b;

    /* renamed from: c  reason: collision with root package name */
    private final r8.l f37145c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f37146d;

    /* renamed from: e  reason: collision with root package name */
    private final Executor f37147e;

    /* renamed from: f  reason: collision with root package name */
    private final s f37148f;

    /* renamed from: g  reason: collision with root package name */
    private final a0 f37149g;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(j8.j fileCache, r8.i pooledByteBufferFactory, r8.l pooledByteStreams, Executor readExecutor, Executor writeExecutor, s imageCacheStatsTracker) {
        Intrinsics.checkNotNullParameter(fileCache, "fileCache");
        Intrinsics.checkNotNullParameter(pooledByteBufferFactory, "pooledByteBufferFactory");
        Intrinsics.checkNotNullParameter(pooledByteStreams, "pooledByteStreams");
        Intrinsics.checkNotNullParameter(readExecutor, "readExecutor");
        Intrinsics.checkNotNullParameter(writeExecutor, "writeExecutor");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        this.f37143a = fileCache;
        this.f37144b = pooledByteBufferFactory;
        this.f37145c = pooledByteStreams;
        this.f37146d = readExecutor;
        this.f37147e = writeExecutor;
        this.f37148f = imageCacheStatsTracker;
        a0 d10 = a0.d();
        Intrinsics.checkNotNullExpressionValue(d10, "getInstance(...)");
        this.f37149g = d10;
    }

    private final boolean g(CacheKey cacheKey) {
        sa.k c10 = this.f37149g.c(cacheKey);
        if (c10 != null) {
            c10.close();
            p8.a.z(f37142i, "Found image for %s in staging area", cacheKey.a());
            this.f37148f.e(cacheKey);
            return true;
        }
        p8.a.z(f37142i, "Did not find image for %s in staging area", cacheKey.a());
        this.f37148f.k(cacheKey);
        try {
            return this.f37143a.g(cacheKey);
        } catch (Exception unused) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void i(Object obj, j this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Object e10 = ta.a.e(obj, null);
        try {
            this$0.f37149g.a();
            this$0.f37143a.a();
            return null;
        } finally {
        }
    }

    private final u4.f l(CacheKey cacheKey, sa.k kVar) {
        p8.a.z(f37142i, "Found image for %s in staging area", cacheKey.a());
        this.f37148f.e(cacheKey);
        u4.f h10 = u4.f.h(kVar);
        Intrinsics.checkNotNullExpressionValue(h10, "forResult(...)");
        return h10;
    }

    private final u4.f n(final CacheKey cacheKey, final AtomicBoolean atomicBoolean) {
        try {
            final Object d10 = ta.a.d("BufferedDiskCache_getAsync");
            return u4.f.b(new Callable() { // from class: la.f
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    sa.k o10;
                    o10 = j.o(d10, atomicBoolean, this, cacheKey);
                    return o10;
                }
            }, this.f37146d);
        } catch (Exception e10) {
            p8.a.I(f37142i, e10, "Failed to schedule disk-cache read for %s", cacheKey.a());
            return u4.f.g(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final sa.k o(Object obj, AtomicBoolean isCancelled, j this$0, CacheKey key) {
        Intrinsics.checkNotNullParameter(isCancelled, "$isCancelled");
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ta.a.e(obj, null);
        try {
            if (!isCancelled.get()) {
                sa.k c10 = this$0.f37149g.c(key);
                if (c10 != null) {
                    p8.a.z(f37142i, "Found image for %s in staging area", key.a());
                    this$0.f37148f.e(key);
                } else {
                    p8.a.z(f37142i, "Did not find image for %s in staging area", key.a());
                    this$0.f37148f.k(key);
                    try {
                        r8.h r10 = this$0.r(key);
                        if (r10 == null) {
                            return null;
                        }
                        CloseableReference L0 = CloseableReference.L0(r10);
                        Intrinsics.checkNotNullExpressionValue(L0, "of(...)");
                        try {
                            c10 = new sa.k(L0);
                        } finally {
                            CloseableReference.N(L0);
                        }
                    } catch (Exception unused) {
                        return null;
                    }
                }
                if (!Thread.interrupted()) {
                    return c10;
                }
                p8.a.y(f37142i, "Host thread was interrupted, decreasing reference count");
                c10.close();
                throw new InterruptedException();
            }
            throw new CancellationException();
        } catch (Throwable th2) {
            try {
                ta.a.c(obj, th2);
                throw th2;
            } finally {
                ta.a.f(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void q(Object obj, j this$0, CacheKey key, sa.k kVar) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ta.a.e(obj, null);
        try {
            this$0.u(key, kVar);
        } finally {
        }
    }

    private final r8.h r(CacheKey cacheKey) {
        try {
            Class cls = f37142i;
            p8.a.z(cls, "Disk cache read for %s", cacheKey.a());
            h8.a c10 = this.f37143a.c(cacheKey);
            if (c10 == null) {
                p8.a.z(cls, "Disk cache miss for %s", cacheKey.a());
                this.f37148f.b(cacheKey);
                return null;
            }
            p8.a.z(cls, "Found entry in disk cache for %s", cacheKey.a());
            this.f37148f.i(cacheKey);
            InputStream a10 = c10.a();
            r8.h b10 = this.f37144b.b(a10, (int) c10.size());
            a10.close();
            p8.a.z(cls, "Successful read from disk cache for %s", cacheKey.a());
            return b10;
        } catch (IOException e10) {
            p8.a.I(f37142i, e10, "Exception reading from cache for %s", cacheKey.a());
            this.f37148f.n(cacheKey);
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Void t(Object obj, j this$0, CacheKey key) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(key, "$key");
        Object e10 = ta.a.e(obj, null);
        try {
            this$0.f37149g.g(key);
            this$0.f37143a.f(key);
            return null;
        } finally {
        }
    }

    private final void u(CacheKey cacheKey, final sa.k kVar) {
        Class cls = f37142i;
        p8.a.z(cls, "About to write to disk-cache for key %s", cacheKey.a());
        try {
            this.f37143a.d(cacheKey, new i8.i() { // from class: la.i
                @Override // i8.i
                public final void a(OutputStream outputStream) {
                    j.v(sa.k.this, this, outputStream);
                }
            });
            this.f37148f.c(cacheKey);
            p8.a.z(cls, "Successful disk-cache write for key %s", cacheKey.a());
        } catch (IOException e10) {
            p8.a.I(f37142i, e10, "Failed to write to disk-cache for key %s", cacheKey.a());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void v(sa.k kVar, j this$0, OutputStream os2) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(os2, "os");
        Intrinsics.checkNotNull(kVar);
        InputStream N = kVar.N();
        if (N != null) {
            this$0.f37145c.a(N, os2);
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    public final void f(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f37143a.b(key);
    }

    public final u4.f h() {
        this.f37149g.a();
        final Object d10 = ta.a.d("BufferedDiskCache_clearAll");
        try {
            return u4.f.b(new Callable() { // from class: la.h
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    Void i10;
                    i10 = j.i(d10, this);
                    return i10;
                }
            }, this.f37147e);
        } catch (Exception e10) {
            p8.a.I(f37142i, e10, "Failed to schedule disk-cache clear", new Object[0]);
            return u4.f.g(e10);
        }
    }

    public final boolean j(CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (!this.f37149g.b(key) && !this.f37143a.e(key)) {
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
        if (!ya.b.d()) {
            sa.k c10 = this.f37149g.c(key);
            if (c10 != null && (l10 = l(key, c10)) != null) {
                return l10;
            }
            return n(key, isCancelled);
        }
        ya.b.a("BufferedDiskCache#get");
        try {
            sa.k c11 = this.f37149g.c(key);
            if (c11 != null) {
                n10 = l(key, c11);
                if (n10 == null) {
                }
                ya.b.b();
                return n10;
            }
            n10 = n(key, isCancelled);
            ya.b.b();
            return n10;
        } catch (Throwable th2) {
            ya.b.b();
            throw th2;
        }
    }

    public final void p(final CacheKey key, sa.k encodedImage) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(encodedImage, "encodedImage");
        if (!ya.b.d()) {
            if (sa.k.O0(encodedImage)) {
                this.f37149g.f(key, encodedImage);
                final sa.k h10 = sa.k.h(encodedImage);
                try {
                    final Object d10 = ta.a.d("BufferedDiskCache_putAsync");
                    this.f37147e.execute(new Runnable() { // from class: la.e
                        @Override // java.lang.Runnable
                        public final void run() {
                            j.q(d10, this, key, h10);
                        }
                    });
                    return;
                } catch (Exception e10) {
                    p8.a.I(f37142i, e10, "Failed to schedule disk-cache write for %s", key.a());
                    this.f37149g.h(key, encodedImage);
                    sa.k.l(h10);
                    return;
                }
            }
            throw new IllegalStateException("Check failed.");
        }
        ya.b.a("BufferedDiskCache#put");
        try {
            if (sa.k.O0(encodedImage)) {
                this.f37149g.f(key, encodedImage);
                final sa.k h11 = sa.k.h(encodedImage);
                try {
                    final Object d11 = ta.a.d("BufferedDiskCache_putAsync");
                    this.f37147e.execute(new Runnable() { // from class: la.e
                        @Override // java.lang.Runnable
                        public final void run() {
                            j.q(d11, this, key, h11);
                        }
                    });
                } catch (Exception e11) {
                    p8.a.I(f37142i, e11, "Failed to schedule disk-cache write for %s", key.a());
                    this.f37149g.h(key, encodedImage);
                    sa.k.l(h11);
                }
                Unit unit = Unit.f33074a;
                return;
            }
            throw new IllegalStateException("Check failed.");
        } finally {
            ya.b.b();
        }
    }

    public final u4.f s(final CacheKey key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f37149g.g(key);
        try {
            final Object d10 = ta.a.d("BufferedDiskCache_remove");
            return u4.f.b(new Callable() { // from class: la.g
                @Override // java.util.concurrent.Callable
                public final Object call() {
                    Void t10;
                    t10 = j.t(d10, this, key);
                    return t10;
                }
            }, this.f37147e);
        } catch (Exception e10) {
            p8.a.I(f37142i, e10, "Failed to schedule disk-cache remove for %s", key.a());
            return u4.f.g(e10);
        }
    }
}
