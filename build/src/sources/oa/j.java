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
    private final o f39247a;

    /* renamed from: b  reason: collision with root package name */
    private final wa.y f39248b;

    /* renamed from: c  reason: collision with root package name */
    private final n f39249c;

    /* renamed from: d  reason: collision with root package name */
    private final ma.s f39250d;

    /* renamed from: e  reason: collision with root package name */
    private final int f39251e;

    /* renamed from: f  reason: collision with root package name */
    private final DiskCacheConfig f39252f;

    /* renamed from: g  reason: collision with root package name */
    private final DiskCacheConfig f39253g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f39254h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f39255i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b {

        /* renamed from: a  reason: collision with root package name */
        private final Lazy f39256a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f39257b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f39258c;

        /* renamed from: d  reason: collision with root package name */
        private final Lazy f39259d;

        /* renamed from: e  reason: collision with root package name */
        private final Lazy f39260e;

        /* renamed from: f  reason: collision with root package name */
        private final Lazy f39261f;

        a(final j jVar) {
            as.o oVar = as.o.f6081d;
            this.f39256a = as.l.a(oVar, new Function0() { // from class: oa.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    k8.j p10;
                    p10 = j.a.p(j.this);
                    return p10;
                }
            });
            this.f39257b = as.l.a(oVar, new Function0() { // from class: oa.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    ma.j o10;
                    o10 = j.a.o(j.a.this, jVar);
                    return o10;
                }
            });
            this.f39258c = as.l.a(oVar, new Function0() { // from class: oa.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    k8.j r10;
                    r10 = j.a.r(j.this);
                    return r10;
                }
            });
            this.f39259d = as.l.a(oVar, new Function0() { // from class: oa.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    ma.j q10;
                    q10 = j.a.q(j.a.this, jVar);
                    return q10;
                }
            });
            this.f39260e = as.l.a(oVar, new Function0() { // from class: oa.h
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map k10;
                    k10 = j.a.k(j.this, this);
                    return k10;
                }
            });
            this.f39261f = as.l.a(oVar, new Function0() { // from class: oa.i
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
                s8.i i10 = this$1.f39248b.i(this$1.f39251e);
                Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
                s8.l j10 = this$1.f39248b.j();
                Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
                Executor f10 = this$1.f39249c.f();
                Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
                Executor b10 = this$1.f39249c.b();
                Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
                linkedHashMap.put(key, new ma.j(jVar, i10, j10, f10, b10, this$1.f39250d));
            }
            return p8.f.a(linkedHashMap);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map k(j this$0, a this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map map = this$0.f39254h;
            if (map != null) {
                LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(map.size()));
                for (Map.Entry entry : map.entrySet()) {
                    linkedHashMap.put(entry.getKey(), this$0.f39247a.a((DiskCacheConfig) entry.getValue()));
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
            s8.i i10 = this$1.f39248b.i(this$1.f39251e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            s8.l j10 = this$1.f39248b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f39249c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f39249c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new ma.j(m10, i10, j10, f10, b10, this$1.f39250d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final k8.j p(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f39247a.a(this$0.f39252f);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final ma.j q(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            k8.j n10 = this$0.n();
            s8.i i10 = this$1.f39248b.i(this$1.f39251e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            s8.l j10 = this$1.f39248b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f39249c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f39249c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new ma.j(n10, i10, j10, f10, b10, this$1.f39250d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final k8.j r(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f39247a.a(this$0.f39253g);
        }

        @Override // oa.b
        public ma.j a() {
            return (ma.j) this.f39259d.getValue();
        }

        @Override // oa.b
        public ma.j b() {
            return (ma.j) this.f39257b.getValue();
        }

        @Override // oa.b
        public p8.f c() {
            Object value = this.f39261f.getValue();
            Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
            return (p8.f) value;
        }

        public Map l() {
            return (Map) this.f39260e.getValue();
        }

        public k8.j m() {
            return (k8.j) this.f39256a.getValue();
        }

        public k8.j n() {
            return (k8.j) this.f39258c.getValue();
        }
    }

    public j(o fileCacheFactory, wa.y poolFactory, n executorSupplier, ma.s imageCacheStatsTracker, int i10, DiskCacheConfig mainDiskCacheConfig, DiskCacheConfig smallImageDiskCacheConfig, Map map) {
        Intrinsics.checkNotNullParameter(fileCacheFactory, "fileCacheFactory");
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(executorSupplier, "executorSupplier");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        Intrinsics.checkNotNullParameter(mainDiskCacheConfig, "mainDiskCacheConfig");
        Intrinsics.checkNotNullParameter(smallImageDiskCacheConfig, "smallImageDiskCacheConfig");
        this.f39247a = fileCacheFactory;
        this.f39248b = poolFactory;
        this.f39249c = executorSupplier;
        this.f39250d = imageCacheStatsTracker;
        this.f39251e = i10;
        this.f39252f = mainDiskCacheConfig;
        this.f39253g = smallImageDiskCacheConfig;
        this.f39254h = map;
        this.f39255i = as.l.a(as.o.f6081d, new Function0() { // from class: oa.c
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
        return (b) this.f39255i.getValue();
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
