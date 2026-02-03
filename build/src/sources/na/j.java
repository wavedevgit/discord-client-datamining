package na;

import com.facebook.cache.disk.DiskCacheConfig;
import com.facebook.common.internal.Supplier;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.Executor;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import na.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final o f39838a;

    /* renamed from: b  reason: collision with root package name */
    private final va.y f39839b;

    /* renamed from: c  reason: collision with root package name */
    private final n f39840c;

    /* renamed from: d  reason: collision with root package name */
    private final la.s f39841d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39842e;

    /* renamed from: f  reason: collision with root package name */
    private final DiskCacheConfig f39843f;

    /* renamed from: g  reason: collision with root package name */
    private final DiskCacheConfig f39844g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f39845h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f39846i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b {

        /* renamed from: a  reason: collision with root package name */
        private final Lazy f39847a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f39848b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f39849c;

        /* renamed from: d  reason: collision with root package name */
        private final Lazy f39850d;

        /* renamed from: e  reason: collision with root package name */
        private final Lazy f39851e;

        /* renamed from: f  reason: collision with root package name */
        private final Lazy f39852f;

        a(final j jVar) {
            lr.o oVar = lr.o.f37119d;
            this.f39847a = lr.l.b(oVar, new Function0() { // from class: na.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    j8.j p10;
                    p10 = j.a.p(j.this);
                    return p10;
                }
            });
            this.f39848b = lr.l.b(oVar, new Function0() { // from class: na.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    la.j o10;
                    o10 = j.a.o(j.a.this, jVar);
                    return o10;
                }
            });
            this.f39849c = lr.l.b(oVar, new Function0() { // from class: na.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    j8.j r10;
                    r10 = j.a.r(j.this);
                    return r10;
                }
            });
            this.f39850d = lr.l.b(oVar, new Function0() { // from class: na.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    la.j q10;
                    q10 = j.a.q(j.a.this, jVar);
                    return q10;
                }
            });
            this.f39851e = lr.l.b(oVar, new Function0() { // from class: na.h
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map k10;
                    k10 = j.a.k(j.this, this);
                    return k10;
                }
            });
            this.f39852f = lr.l.b(oVar, new Function0() { // from class: na.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    o8.f j10;
                    j10 = j.a.j(j.a.this, jVar);
                    return j10;
                }
            });
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final o8.f j(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map l10 = this$0.l();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(l10.size()));
            for (Map.Entry entry : l10.entrySet()) {
                Object key = entry.getKey();
                j8.j jVar = (j8.j) entry.getValue();
                r8.i i10 = this$1.f39839b.i(this$1.f39842e);
                Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
                r8.l j10 = this$1.f39839b.j();
                Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
                Executor f10 = this$1.f39840c.f();
                Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
                Executor b10 = this$1.f39840c.b();
                Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
                linkedHashMap.put(key, new la.j(jVar, i10, j10, f10, b10, this$1.f39841d));
            }
            return o8.f.a(linkedHashMap);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map k(j this$0, a this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map map = this$0.f39845h;
            if (map != null) {
                LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(map.size()));
                for (Map.Entry entry : map.entrySet()) {
                    linkedHashMap.put(entry.getKey(), this$0.f39838a.a((DiskCacheConfig) entry.getValue()));
                }
                return linkedHashMap;
            }
            return kotlin.collections.o0.i();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final la.j o(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            j8.j m10 = this$0.m();
            r8.i i10 = this$1.f39839b.i(this$1.f39842e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            r8.l j10 = this$1.f39839b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f39840c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f39840c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new la.j(m10, i10, j10, f10, b10, this$1.f39841d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final j8.j p(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f39838a.a(this$0.f39843f);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final la.j q(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            j8.j n10 = this$0.n();
            r8.i i10 = this$1.f39839b.i(this$1.f39842e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            r8.l j10 = this$1.f39839b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f39840c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f39840c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new la.j(n10, i10, j10, f10, b10, this$1.f39841d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final j8.j r(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f39838a.a(this$0.f39844g);
        }

        @Override // na.b
        public la.j a() {
            return (la.j) this.f39850d.getValue();
        }

        @Override // na.b
        public la.j b() {
            return (la.j) this.f39848b.getValue();
        }

        @Override // na.b
        public o8.f c() {
            Object value = this.f39852f.getValue();
            Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
            return (o8.f) value;
        }

        public Map l() {
            return (Map) this.f39851e.getValue();
        }

        public j8.j m() {
            return (j8.j) this.f39847a.getValue();
        }

        public j8.j n() {
            return (j8.j) this.f39849c.getValue();
        }
    }

    public j(o fileCacheFactory, va.y poolFactory, n executorSupplier, la.s imageCacheStatsTracker, int i10, DiskCacheConfig mainDiskCacheConfig, DiskCacheConfig smallImageDiskCacheConfig, Map map) {
        Intrinsics.checkNotNullParameter(fileCacheFactory, "fileCacheFactory");
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(executorSupplier, "executorSupplier");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        Intrinsics.checkNotNullParameter(mainDiskCacheConfig, "mainDiskCacheConfig");
        Intrinsics.checkNotNullParameter(smallImageDiskCacheConfig, "smallImageDiskCacheConfig");
        this.f39838a = fileCacheFactory;
        this.f39839b = poolFactory;
        this.f39840c = executorSupplier;
        this.f39841d = imageCacheStatsTracker;
        this.f39842e = i10;
        this.f39843f = mainDiskCacheConfig;
        this.f39844g = smallImageDiskCacheConfig;
        this.f39845h = map;
        this.f39846i = lr.l.b(lr.o.f37119d, new Function0() { // from class: na.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                j.a j10;
                j10 = j.j(j.this);
                return j10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final a j(j this$0) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        return new a(this$0);
    }

    private final b l() {
        return (b) this.f39846i.getValue();
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: k */
    public b get() {
        return l();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public j(o fileCacheFactory, r config) {
        this(fileCacheFactory, config.t(), config.H(), config.B(), config.u(), config.d(), config.j(), config.i());
        Intrinsics.checkNotNullParameter(fileCacheFactory, "fileCacheFactory");
        Intrinsics.checkNotNullParameter(config, "config");
    }
}
