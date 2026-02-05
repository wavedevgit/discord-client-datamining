package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10955a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10956b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10957c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10958c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f10959d;

        /* renamed from: e  reason: collision with root package name */
        private final la.k f10960e;

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            this.f10958c.F().d(this.f10958c, "DiskCacheWriteProducer");
            if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.L() != fa.c.f22712d) {
                ImageRequest V = this.f10958c.V();
                CacheKey encodedCacheKey = this.f10960e.getEncodedCacheKey(V, this.f10958c.a());
                na.b bVar = (na.b) this.f10959d.get();
                la.j a10 = t.a(V, bVar.a(), bVar.b(), bVar.c());
                if (a10 == null) {
                    y0 F = this.f10958c.F();
                    ProducerContext producerContext = this.f10958c;
                    F.k(producerContext, "DiskCacheWriteProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(V.getCacheChoice().ordinal()).toString()), null);
                    o().b(kVar, i10);
                    return;
                }
                a10.p(encodedCacheKey, kVar);
                this.f10958c.F().j(this.f10958c, "DiskCacheWriteProducer", null);
                o().b(kVar, i10);
                return;
            }
            this.f10958c.F().j(this.f10958c, "DiskCacheWriteProducer", null);
            o().b(kVar, i10);
        }

        private a(Consumer consumer, ProducerContext producerContext, Supplier supplier, la.k kVar) {
            super(consumer);
            this.f10958c = producerContext;
            this.f10959d = supplier;
            this.f10960e = kVar;
        }
    }

    public v(Supplier supplier, la.k kVar, w0 w0Var) {
        this.f10955a = supplier;
        this.f10956b = kVar;
        this.f10957c = w0Var;
    }

    private void c(Consumer consumer, ProducerContext producerContext) {
        ProducerContext producerContext2;
        if (producerContext.E0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.m("disk", "nil-result_write");
            consumer.b(null, 1);
            return;
        }
        if (producerContext.V().isCacheEnabled(32)) {
            producerContext2 = producerContext;
            consumer = new a(consumer, producerContext2, this.f10955a, this.f10956b);
        } else {
            producerContext2 = producerContext;
        }
        this.f10957c.b(consumer, producerContext2);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        c(consumer, producerContext);
    }
}
