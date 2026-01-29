package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.Map;
import java.util.concurrent.CancellationException;
import java.util.concurrent.atomic.AtomicBoolean;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class u implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11948a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f11949b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11950c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f11951a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11952b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f11953c;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer) {
            this.f11951a = y0Var;
            this.f11952b = producerContext;
            this.f11953c = consumer;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (u.f(fVar)) {
                this.f11951a.c(this.f11952b, "DiskCacheProducer", null);
                this.f11953c.a();
            } else if (fVar.n()) {
                this.f11951a.k(this.f11952b, "DiskCacheProducer", fVar.i(), null);
                u.this.f11950c.b(this.f11953c, this.f11952b);
            } else {
                sa.k kVar = (sa.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f11951a;
                    ProducerContext producerContext = this.f11952b;
                    y0Var.j(producerContext, "DiskCacheProducer", u.e(y0Var, producerContext, true, kVar.C0()));
                    this.f11951a.b(this.f11952b, "DiskCacheProducer", true);
                    this.f11952b.E("disk");
                    this.f11953c.c(1.0f);
                    this.f11953c.b(kVar, 1);
                    kVar.close();
                } else {
                    y0 y0Var2 = this.f11951a;
                    ProducerContext producerContext2 = this.f11952b;
                    y0Var2.j(producerContext2, "DiskCacheProducer", u.e(y0Var2, producerContext2, false, 0));
                    u.this.f11950c.b(this.f11953c, this.f11952b);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f11955a;

        b(AtomicBoolean atomicBoolean) {
            this.f11955a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11955a.set(true);
        }
    }

    public u(Supplier supplier, la.k kVar, w0 w0Var) {
        this.f11948a = supplier;
        this.f11949b = kVar;
        this.f11950c = w0Var;
    }

    static Map e(y0 y0Var, ProducerContext producerContext, boolean z10, int i10) {
        if (!y0Var.f(producerContext, "DiskCacheProducer")) {
            return null;
        }
        if (z10) {
            return o8.f.of("cached_value_found", String.valueOf(z10), "encodedImageSize", String.valueOf(i10));
        }
        return o8.f.of("cached_value_found", String.valueOf(z10));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean f(u4.f fVar) {
        if (!fVar.l()) {
            if (!fVar.n() || !(fVar.i() instanceof CancellationException)) {
                return false;
            }
            return true;
        }
        return true;
    }

    private void g(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.E0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.n("disk", "nil-result_read");
            consumer.b(null, 1);
            return;
        }
        this.f11950c.b(consumer, producerContext);
    }

    private u4.d h(Consumer consumer, ProducerContext producerContext) {
        return new a(producerContext.F(), producerContext, consumer);
    }

    private void i(AtomicBoolean atomicBoolean, ProducerContext producerContext) {
        producerContext.h(new b(atomicBoolean));
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        ImageRequest V = producerContext.V();
        if (!producerContext.V().isCacheEnabled(16)) {
            g(consumer, producerContext);
            return;
        }
        producerContext.F().d(producerContext, "DiskCacheProducer");
        CacheKey encodedCacheKey = this.f11949b.getEncodedCacheKey(V, producerContext.a());
        na.b bVar = (na.b) this.f11948a.get();
        la.j a10 = t.a(V, bVar.a(), bVar.b(), bVar.c());
        if (a10 == null) {
            y0 F = producerContext.F();
            F.k(producerContext, "DiskCacheProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(V.getCacheChoice().ordinal()).toString()), null);
            g(consumer, producerContext);
            return;
        }
        AtomicBoolean atomicBoolean = new AtomicBoolean(false);
        a10.m(encodedCacheKey, atomicBoolean).e(h(consumer, producerContext));
        i(atomicBoolean, producerContext);
    }
}
