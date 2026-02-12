package oa;

import com.facebook.cache.disk.DiskCacheConfig;
import com.facebook.common.internal.Supplier;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.Executor;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import oa.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final o f38679a;

    /* renamed from: b  reason: collision with root package name */
    private final wa.y f38680b;

    /* renamed from: c  reason: collision with root package name */
    private final n f38681c;

    /* renamed from: d  reason: collision with root package name */
    private final ma.s f38682d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38683e;

    /* renamed from: f  reason: collision with root package name */
    private final DiskCacheConfig f38684f;

    /* renamed from: g  reason: collision with root package name */
    private final DiskCacheConfig f38685g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f38686h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f38687i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b {

        /* renamed from: a  reason: collision with root package name */
        private final Lazy f38688a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f38689b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f38690c;

        /* renamed from: d  reason: collision with root package name */
        private final Lazy f38691d;

        /* renamed from: e  reason: collision with root package name */
        private final Lazy f38692e;

        /* renamed from: f  reason: collision with root package name */
        private final Lazy f38693f;

        a(final j jVar) {
            as.o oVar = as.o.f6081d;
            this.f38688a = as.l.a(oVar, new Function0() { // from class: oa.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    k8.j p10;
                    p10 = j.a.p(j.this);
                    return p10;
                }
            });
            this.f38689b = as.l.a(oVar, new Function0() { // from class: oa.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    ma.j o10;
                    o10 = j.a.o(j.a.this, jVar);
                    return o10;
                }
            });
            this.f38690c = as.l.a(oVar, new Function0() { // from class: oa.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    k8.j r10;
                    r10 = j.a.r(j.this);
                    return r10;
                }
            });
            this.f38691d = as.l.a(oVar, new Function0() { // from class: oa.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    ma.j q10;
                    q10 = j.a.q(j.a.this, jVar);
                    return q10;
                }
            });
            this.f38692e = as.l.a(oVar, new Function0() { // from class: oa.h
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map k10;
                    k10 = j.a.k(j.this, this);
                    return k10;
                }
            });
            this.f38693f = as.l.a(oVar, new Function0() { // from class: oa.i
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    p8.f j10;
                    j10 = j.a.j(j.a.this, jVar);
                    return j10;
                }
            });
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final p8.f j(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map l10 = this$0.l();
            LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(l10.size()));
            for (Map.Entry entry : l10.entrySet()) {
                Object key = entry.getKey();
                k8.j jVar = (k8.j) entry.getValue();
                s8.i i10 = this$1.f38680b.i(this$1.f38683e);
                Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
                s8.l j10 = this$1.f38680b.j();
                Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
                Executor f10 = this$1.f38681c.f();
                Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
                Executor b10 = this$1.f38681c.b();
                Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
                linkedHashMap.put(key, new ma.j(jVar, i10, j10, f10, b10, this$1.f38682d));
            }
            return p8.f.a(linkedHashMap);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map k(j this$0, a this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map map = this$0.f38686h;
            if (map != null) {
                LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(map.size()));
                for (Map.Entry entry : map.entrySet()) {
                    linkedHashMap.put(entry.getKey(), this$0.f38679a.a((DiskCacheConfig) entry.getValue()));
                }
                return linkedHashMap;
            }
            return kotlin.collections.o0.i();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ma.j o(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            k8.j m10 = this$0.m();
            s8.i i10 = this$1.f38680b.i(this$1.f38683e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            s8.l j10 = this$1.f38680b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f38681c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f38681c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new ma.j(m10, i10, j10, f10, b10, this$1.f38682d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final k8.j p(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f38679a.a(this$0.f38684f);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ma.j q(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            k8.j n10 = this$0.n();
            s8.i i10 = this$1.f38680b.i(this$1.f38683e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            s8.l j10 = this$1.f38680b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f38681c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f38681c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new ma.j(n10, i10, j10, f10, b10, this$1.f38682d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final k8.j r(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f38679a.a(this$0.f38685g);
        }

        @Override // oa.b
        public ma.j a() {
            return (ma.j) this.f38691d.getValue();
        }

        @Override // oa.b
        public ma.j b() {
            return (ma.j) this.f38689b.getValue();
        }

        @Override // oa.b
        public p8.f c() {
            Object value = this.f38693f.getValue();
            Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
            return (p8.f) value;
        }

        public Map l() {
            return (Map) this.f38692e.getValue();
        }

        public k8.j m() {
            return (k8.j) this.f38688a.getValue();
        }

        public k8.j n() {
            return (k8.j) this.f38690c.getValue();
        }
    }

    public j(o fileCacheFactory, wa.y poolFactory, n executorSupplier, ma.s imageCacheStatsTracker, int i10, DiskCacheConfig mainDiskCacheConfig, DiskCacheConfig smallImageDiskCacheConfig, Map map) {
        Intrinsics.checkNotNullParameter(fileCacheFactory, "fileCacheFactory");
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(executorSupplier, "executorSupplier");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        Intrinsics.checkNotNullParameter(mainDiskCacheConfig, "mainDiskCacheConfig");
        Intrinsics.checkNotNullParameter(smallImageDiskCacheConfig, "smallImageDiskCacheConfig");
        this.f38679a = fileCacheFactory;
        this.f38680b = poolFactory;
        this.f38681c = executorSupplier;
        this.f38682d = imageCacheStatsTracker;
        this.f38683e = i10;
        this.f38684f = mainDiskCacheConfig;
        this.f38685g = smallImageDiskCacheConfig;
        this.f38686h = map;
        this.f38687i = as.l.a(as.o.f6081d, new Function0() { // from class: oa.c
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
        return (b) this.f38687i.getValue();
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
