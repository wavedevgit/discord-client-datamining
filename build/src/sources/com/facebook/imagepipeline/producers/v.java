package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11571a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11572b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11573c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11574c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11575d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.k f11576e;

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            this.f11574c.y().d(this.f11574c, "DiskCacheWriteProducer");
            if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f25398d) {
                ImageRequest I = this.f11574c.I();
                CacheKey encodedCacheKey = this.f11576e.getEncodedCacheKey(I, this.f11574c.a());
                oa.b bVar = (oa.b) this.f11575d.get();
                ma.j a10 = t.a(I, bVar.a(), bVar.b(), bVar.c());
                if (a10 == null) {
                    y0 y10 = this.f11574c.y();
                    ProducerContext producerContext = this.f11574c;
                    y10.k(producerContext, "DiskCacheWriteProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(I.getCacheChoice().ordinal()).toString()), null);
                    o().b(kVar, i10);
                    return;
                }
                a10.p(encodedCacheKey, kVar);
                this.f11574c.y().j(this.f11574c, "DiskCacheWriteProducer", null);
                o().b(kVar, i10);
                return;
            }
            this.f11574c.y().j(this.f11574c, "DiskCacheWriteProducer", null);
            o().b(kVar, i10);
        }

        private a(Consumer consumer, ProducerContext producerContext, Supplier supplier, ma.k kVar) {
            super(consumer);
            this.f11574c = producerContext;
            this.f11575d = supplier;
            this.f11576e = kVar;
        }
    }

    public v(Supplier supplier, ma.k kVar, w0 w0Var) {
        this.f11571a = supplier;
        this.f11572b = kVar;
        this.f11573c = w0Var;
    }

    private void c(Consumer consumer, ProducerContext producerContext) {
        ProducerContext producerContext2;
        if (producerContext.z0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.m("disk", "nil-result_write");
            consumer.b(null, 1);
            return;
        }
        if (producerContext.I().isCacheEnabled(32)) {
            producerContext2 = producerContext;
            consumer = new a(consumer, producerContext2, this.f11571a, this.f11572b);
        } else {
            producerContext2 = producerContext;
        }
        this.f11573c.b(consumer, producerContext2);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        c(consumer, producerContext);
    }
}
