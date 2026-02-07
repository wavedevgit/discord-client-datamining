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
    private final o f38701a;

    /* renamed from: b  reason: collision with root package name */
    private final va.y f38702b;

    /* renamed from: c  reason: collision with root package name */
    private final n f38703c;

    /* renamed from: d  reason: collision with root package name */
    private final la.s f38704d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38705e;

    /* renamed from: f  reason: collision with root package name */
    private final DiskCacheConfig f38706f;

    /* renamed from: g  reason: collision with root package name */
    private final DiskCacheConfig f38707g;

    /* renamed from: h  reason: collision with root package name */
    private final Map f38708h;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f38709i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements b {

        /* renamed from: a  reason: collision with root package name */
        private final Lazy f38710a;

        /* renamed from: b  reason: collision with root package name */
        private final Lazy f38711b;

        /* renamed from: c  reason: collision with root package name */
        private final Lazy f38712c;

        /* renamed from: d  reason: collision with root package name */
        private final Lazy f38713d;

        /* renamed from: e  reason: collision with root package name */
        private final Lazy f38714e;

        /* renamed from: f  reason: collision with root package name */
        private final Lazy f38715f;

        a(final j jVar) {
            qr.o oVar = qr.o.f48091d;
            this.f38710a = qr.l.b(oVar, new Function0() { // from class: na.d
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    j8.j p10;
                    p10 = j.a.p(j.this);
                    return p10;
                }
            });
            this.f38711b = qr.l.b(oVar, new Function0() { // from class: na.e
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    la.j o10;
                    o10 = j.a.o(j.a.this, jVar);
                    return o10;
                }
            });
            this.f38712c = qr.l.b(oVar, new Function0() { // from class: na.f
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    j8.j r10;
                    r10 = j.a.r(j.this);
                    return r10;
                }
            });
            this.f38713d = qr.l.b(oVar, new Function0() { // from class: na.g
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    la.j q10;
                    q10 = j.a.q(j.a.this, jVar);
                    return q10;
                }
            });
            this.f38714e = qr.l.b(oVar, new Function0() { // from class: na.h
                @Override // kotlin.jvm.functions.Function0
                public final Object invoke() {
                    Map k10;
                    k10 = j.a.k(j.this, this);
                    return k10;
                }
            });
            this.f38715f = qr.l.b(oVar, new Function0() { // from class: na.i
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
                r8.i i10 = this$1.f38702b.i(this$1.f38705e);
                Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
                r8.l j10 = this$1.f38702b.j();
                Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
                Executor f10 = this$1.f38703c.f();
                Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
                Executor b10 = this$1.f38703c.b();
                Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
                linkedHashMap.put(key, new la.j(jVar, i10, j10, f10, b10, this$1.f38704d));
            }
            return o8.f.a(linkedHashMap);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final Map k(j this$0, a this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            Map map = this$0.f38708h;
            if (map != null) {
                LinkedHashMap linkedHashMap = new LinkedHashMap(kotlin.collections.o0.e(map.size()));
                for (Map.Entry entry : map.entrySet()) {
                    linkedHashMap.put(entry.getKey(), this$0.f38701a.a((DiskCacheConfig) entry.getValue()));
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
            r8.i i10 = this$1.f38702b.i(this$1.f38705e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            r8.l j10 = this$1.f38702b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f38703c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f38703c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new la.j(m10, i10, j10, f10, b10, this$1.f38704d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final j8.j p(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f38701a.a(this$0.f38706f);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final la.j q(a this$0, j this$1) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(this$1, "this$1");
            j8.j n10 = this$0.n();
            r8.i i10 = this$1.f38702b.i(this$1.f38705e);
            Intrinsics.checkNotNullExpressionValue(i10, "getPooledByteBufferFactory(...)");
            r8.l j10 = this$1.f38702b.j();
            Intrinsics.checkNotNullExpressionValue(j10, "getPooledByteStreams(...)");
            Executor f10 = this$1.f38703c.f();
            Intrinsics.checkNotNullExpressionValue(f10, "forLocalStorageRead(...)");
            Executor b10 = this$1.f38703c.b();
            Intrinsics.checkNotNullExpressionValue(b10, "forLocalStorageWrite(...)");
            return new la.j(n10, i10, j10, f10, b10, this$1.f38704d);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final j8.j r(j this$0) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            return this$0.f38701a.a(this$0.f38707g);
        }

        @Override // na.b
        public la.j a() {
            return (la.j) this.f38713d.getValue();
        }

        @Override // na.b
        public la.j b() {
            return (la.j) this.f38711b.getValue();
        }

        @Override // na.b
        public o8.f c() {
            Object value = this.f38715f.getValue();
            Intrinsics.checkNotNullExpressionValue(value, "getValue(...)");
            return (o8.f) value;
        }

        public Map l() {
            return (Map) this.f38714e.getValue();
        }

        public j8.j m() {
            return (j8.j) this.f38710a.getValue();
        }

        public j8.j n() {
            return (j8.j) this.f38712c.getValue();
        }
    }

    public j(o fileCacheFactory, va.y poolFactory, n executorSupplier, la.s imageCacheStatsTracker, int i10, DiskCacheConfig mainDiskCacheConfig, DiskCacheConfig smallImageDiskCacheConfig, Map map) {
        Intrinsics.checkNotNullParameter(fileCacheFactory, "fileCacheFactory");
        Intrinsics.checkNotNullParameter(poolFactory, "poolFactory");
        Intrinsics.checkNotNullParameter(executorSupplier, "executorSupplier");
        Intrinsics.checkNotNullParameter(imageCacheStatsTracker, "imageCacheStatsTracker");
        Intrinsics.checkNotNullParameter(mainDiskCacheConfig, "mainDiskCacheConfig");
        Intrinsics.checkNotNullParameter(smallImageDiskCacheConfig, "smallImageDiskCacheConfig");
        this.f38701a = fileCacheFactory;
        this.f38702b = poolFactory;
        this.f38703c = executorSupplier;
        this.f38704d = imageCacheStatsTracker;
        this.f38705e = i10;
        this.f38706f = mainDiskCacheConfig;
        this.f38707g = smallImageDiskCacheConfig;
        this.f38708h = map;
        this.f38709i = qr.l.b(qr.o.f48091d, new Function0() { // from class: na.c
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
        return (b) this.f38709i.getValue();
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
