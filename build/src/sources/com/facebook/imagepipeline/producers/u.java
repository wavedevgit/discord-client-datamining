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
    private final Supplier f10930a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10931b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10932c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a implements u4.d {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ y0 f10933a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10934b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Consumer f10935c;

        a(y0 y0Var, ProducerContext producerContext, Consumer consumer) {
            this.f10933a = y0Var;
            this.f10934b = producerContext;
            this.f10935c = consumer;
        }

        @Override // u4.d
        /* renamed from: b */
        public Void a(u4.f fVar) {
            if (u.f(fVar)) {
                this.f10933a.c(this.f10934b, "DiskCacheProducer", null);
                this.f10935c.a();
            } else if (fVar.n()) {
                this.f10933a.k(this.f10934b, "DiskCacheProducer", fVar.i(), null);
                u.this.f10932c.b(this.f10935c, this.f10934b);
            } else {
                sa.k kVar = (sa.k) fVar.j();
                if (kVar != null) {
                    y0 y0Var = this.f10933a;
                    ProducerContext producerContext = this.f10934b;
                    y0Var.j(producerContext, "DiskCacheProducer", u.e(y0Var, producerContext, true, kVar.C0()));
                    this.f10933a.b(this.f10934b, "DiskCacheProducer", true);
                    this.f10934b.E("disk");
                    this.f10935c.c(1.0f);
                    this.f10935c.b(kVar, 1);
                    kVar.close();
                } else {
                    y0 y0Var2 = this.f10933a;
                    ProducerContext producerContext2 = this.f10934b;
                    y0Var2.j(producerContext2, "DiskCacheProducer", u.e(y0Var2, producerContext2, false, 0));
                    u.this.f10932c.b(this.f10935c, this.f10934b);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ AtomicBoolean f10937a;

        b(AtomicBoolean atomicBoolean) {
            this.f10937a = atomicBoolean;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10937a.set(true);
        }
    }

    public u(Supplier supplier, la.k kVar, w0 w0Var) {
        this.f10930a = supplier;
        this.f10931b = kVar;
        this.f10932c = w0Var;
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
            producerContext.m("disk", "nil-result_read");
            consumer.b(null, 1);
            return;
        }
        this.f10932c.b(consumer, producerContext);
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
        CacheKey encodedCacheKey = this.f10931b.getEncodedCacheKey(V, producerContext.a());
        na.b bVar = (na.b) this.f10930a.get();
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
