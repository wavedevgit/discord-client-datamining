package androidx.collection;

import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import v0.b;
import v0.c;
import v0.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class LruCache {

    /* renamed from: a  reason: collision with root package name */
    private int f2292a;

    /* renamed from: b  reason: collision with root package name */
    private final c f2293b;

    /* renamed from: c  reason: collision with root package name */
    private final b f2294c;

    /* renamed from: d  reason: collision with root package name */
    private int f2295d;

    /* renamed from: e  reason: collision with root package name */
    private int f2296e;

    /* renamed from: f  reason: collision with root package name */
    private int f2297f;

    /* renamed from: g  reason: collision with root package name */
    private int f2298g;

    /* renamed from: h  reason: collision with root package name */
    private int f2299h;

    /* renamed from: i  reason: collision with root package name */
    private int f2300i;

    public LruCache(int i10) {
        boolean z10;
        this.f2292a = i10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            d.a("maxSize <= 0");
        }
        this.f2293b = new c(0, 0.75f);
        this.f2294c = new b();
    }

    private final int h(Object obj, Object obj2) {
        boolean z10;
        int j10 = j(obj, obj2);
        if (j10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (!z10) {
            d.b("Negative size: " + obj + '=' + obj2);
        }
        return j10;
    }

    protected Object a(Object key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return null;
    }

    protected void b(boolean z10, Object key, Object oldValue, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(oldValue, "oldValue");
    }

    public final void c() {
        k(-1);
    }

    public final Object d(Object key) {
        Object d10;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f2294c) {
            Object a10 = this.f2293b.a(key);
            if (a10 != null) {
                this.f2299h++;
                return a10;
            }
            this.f2300i++;
            Object a11 = a(key);
            if (a11 == null) {
                return null;
            }
            synchronized (this.f2294c) {
                try {
                    this.f2297f++;
                    d10 = this.f2293b.d(key, a11);
                    if (d10 != null) {
                        this.f2293b.d(key, d10);
                    } else {
                        this.f2295d += h(key, a11);
                        Unit unit = Unit.f31988a;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            if (d10 != null) {
                b(false, key, a11, d10);
                return d10;
            }
            k(this.f2292a);
            return a11;
        }
    }

    public final int e() {
        int i10;
        synchronized (this.f2294c) {
            i10 = this.f2292a;
        }
        return i10;
    }

    public final Object f(Object key, Object value) {
        Object d10;
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        synchronized (this.f2294c) {
            try {
                this.f2296e++;
                this.f2295d += h(key, value);
                d10 = this.f2293b.d(key, value);
                if (d10 != null) {
                    this.f2295d -= h(key, d10);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (d10 != null) {
            b(false, key, d10, value);
        }
        k(this.f2292a);
        return d10;
    }

    public final Object g(Object key) {
        Object e10;
        Intrinsics.checkNotNullParameter(key, "key");
        synchronized (this.f2294c) {
            try {
                e10 = this.f2293b.e(key);
                if (e10 != null) {
                    this.f2295d -= h(key, e10);
                }
                Unit unit = Unit.f31988a;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        if (e10 != null) {
            b(false, key, e10, null);
        }
        return e10;
    }

    public final int i() {
        int i10;
        synchronized (this.f2294c) {
            i10 = this.f2295d;
        }
        return i10;
    }

    protected int j(Object key, Object value) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(value, "value");
        return 1;
    }

    /* JADX WARN: Code restructure failed: missing block: B:30:0x0062, code lost:
        return;
     */
    /* JADX WARN: Removed duplicated region for block: B:16:0x001c A[Catch: all -> 0x0015, TryCatch #0 {all -> 0x0015, blocks: (B:4:0x0003, B:6:0x0008, B:8:0x0010, B:16:0x001c, B:17:0x0021, B:19:0x0025, B:22:0x002e, B:26:0x0040), top: B:33:0x0003 }] */
    /* JADX WARN: Removed duplicated region for block: B:26:0x0040 A[Catch: all -> 0x0015, TRY_ENTER, TRY_LEAVE, TryCatch #0 {all -> 0x0015, blocks: (B:4:0x0003, B:6:0x0008, B:8:0x0010, B:16:0x001c, B:17:0x0021, B:19:0x0025, B:22:0x002e, B:26:0x0040), top: B:33:0x0003 }] */
    /* JADX WARN: Removed duplicated region for block: B:37:0x003e A[SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void k(int r7) {
        /*
            r6 = this;
        L0:
            v0.b r0 = r6.f2294c
            monitor-enter(r0)
            int r1 = r6.f2295d     // Catch: java.lang.Throwable -> L15
            r2 = 1
            if (r1 < 0) goto L19
            v0.c r1 = r6.f2293b     // Catch: java.lang.Throwable -> L15
            boolean r1 = r1.c()     // Catch: java.lang.Throwable -> L15
            if (r1 == 0) goto L17
            int r1 = r6.f2295d     // Catch: java.lang.Throwable -> L15
            if (r1 != 0) goto L19
            goto L17
        L15:
            r7 = move-exception
            goto L63
        L17:
            r1 = r2
            goto L1a
        L19:
            r1 = 0
        L1a:
            if (r1 != 0) goto L21
            java.lang.String r1 = "LruCache.sizeOf() is reporting inconsistent results!"
            v0.d.b(r1)     // Catch: java.lang.Throwable -> L15
        L21:
            int r1 = r6.f2295d     // Catch: java.lang.Throwable -> L15
            if (r1 <= r7) goto L61
            v0.c r1 = r6.f2293b     // Catch: java.lang.Throwable -> L15
            boolean r1 = r1.c()     // Catch: java.lang.Throwable -> L15
            if (r1 == 0) goto L2e
            goto L61
        L2e:
            v0.c r1 = r6.f2293b     // Catch: java.lang.Throwable -> L15
            java.util.Set r1 = r1.b()     // Catch: java.lang.Throwable -> L15
            java.lang.Iterable r1 = (java.lang.Iterable) r1     // Catch: java.lang.Throwable -> L15
            java.lang.Object r1 = kotlin.collections.CollectionsKt.p0(r1)     // Catch: java.lang.Throwable -> L15
            java.util.Map$Entry r1 = (java.util.Map.Entry) r1     // Catch: java.lang.Throwable -> L15
            if (r1 != 0) goto L40
            monitor-exit(r0)
            return
        L40:
            java.lang.Object r3 = r1.getKey()     // Catch: java.lang.Throwable -> L15
            java.lang.Object r1 = r1.getValue()     // Catch: java.lang.Throwable -> L15
            v0.c r4 = r6.f2293b     // Catch: java.lang.Throwable -> L15
            r4.e(r3)     // Catch: java.lang.Throwable -> L15
            int r4 = r6.f2295d     // Catch: java.lang.Throwable -> L15
            int r5 = r6.h(r3, r1)     // Catch: java.lang.Throwable -> L15
            int r4 = r4 - r5
            r6.f2295d = r4     // Catch: java.lang.Throwable -> L15
            int r4 = r6.f2298g     // Catch: java.lang.Throwable -> L15
            int r4 = r4 + r2
            r6.f2298g = r4     // Catch: java.lang.Throwable -> L15
            monitor-exit(r0)
            r0 = 0
            r6.b(r2, r3, r1, r0)
            goto L0
        L61:
            monitor-exit(r0)
            return
        L63:
            monitor-exit(r0)
            throw r7
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.collection.LruCache.k(int):void");
    }

    public String toString() {
        int i10;
        String str;
        synchronized (this.f2294c) {
            try {
                int i11 = this.f2299h;
                int i12 = this.f2300i + i11;
                if (i12 != 0) {
                    i10 = (i11 * 100) / i12;
                } else {
                    i10 = 0;
                }
                str = "LruCache[maxSize=" + this.f2292a + ",hits=" + this.f2299h + ",misses=" + this.f2300i + ",hitRate=" + i10 + "%]";
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return str;
    }
}
