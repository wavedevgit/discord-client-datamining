package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11973a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f11974b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11975c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11976c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11977d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f11978e;

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            this.f11976c.F().d(this.f11976c, "DiskCacheWriteProducer");
            if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f24884d) {
                ImageRequest V = this.f11976c.V();
                CacheKey encodedCacheKey = this.f11978e.getEncodedCacheKey(V, this.f11976c.a());
                na.b bVar = (na.b) this.f11977d.get();
                la.j a10 = t.a(V, bVar.a(), bVar.b(), bVar.c());
                if (a10 == null) {
                    y0 F = this.f11976c.F();
                    ProducerContext producerContext = this.f11976c;
                    F.k(producerContext, "DiskCacheWriteProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(V.getCacheChoice().ordinal()).toString()), null);
                    o().b(kVar, i10);
                    return;
                }
                a10.p(encodedCacheKey, kVar);
                this.f11976c.F().j(this.f11976c, "DiskCacheWriteProducer", null);
                o().b(kVar, i10);
                return;
            }
            this.f11976c.F().j(this.f11976c, "DiskCacheWriteProducer", null);
            o().b(kVar, i10);
        }

        private a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar) {
            super(consumer);
            this.f11976c = producerContext;
            this.f11977d = supplier;
            this.f11978e = kVar;
        }
    }

    public v(Supplier supplier, la.k kVar, w0 w0Var) {
        this.f11973a = supplier;
        this.f11974b = kVar;
        this.f11975c = w0Var;
    }

    private void c(Consumer consumer, ProducerContext producerContext) {
        ProducerContext producerContext2;
        if (producerContext.E0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.n("disk", "nil-result_write");
            consumer.b(null, 1);
            return;
        }
        if (producerContext.V().isCacheEnabled(32)) {
            producerContext2 = producerContext;
            consumer = new a(consumer, producerContext2, this.f11973a, this.f11974b);
        } else {
            producerContext2 = producerContext;
        }
        this.f11975c.b(consumer, producerContext2);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        c(consumer, producerContext);
    }
}
