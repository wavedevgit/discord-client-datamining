package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f11572a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f11573b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11574c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f11575c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f11576d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.k f11577e;

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            this.f11575c.y().d(this.f11575c, "DiskCacheWriteProducer");
            if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f25399d) {
                ImageRequest I = this.f11575c.I();
                CacheKey encodedCacheKey = this.f11577e.getEncodedCacheKey(I, this.f11575c.a());
                oa.b bVar = (oa.b) this.f11576d.get();
                ma.j a10 = t.a(I, bVar.a(), bVar.b(), bVar.c());
                if (a10 == null) {
                    y0 y10 = this.f11575c.y();
                    ProducerContext producerContext = this.f11575c;
                    y10.k(producerContext, "DiskCacheWriteProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(I.getCacheChoice().ordinal()).toString()), null);
                    o().b(kVar, i10);
                    return;
                }
                a10.p(encodedCacheKey, kVar);
                this.f11575c.y().j(this.f11575c, "DiskCacheWriteProducer", null);
                o().b(kVar, i10);
                return;
            }
            this.f11575c.y().j(this.f11575c, "DiskCacheWriteProducer", null);
            o().b(kVar, i10);
        }

        private a(Consumer consumer, ProducerContext producerContext, Supplier supplier, ma.k kVar) {
            super(consumer);
            this.f11575c = producerContext;
            this.f11576d = supplier;
            this.f11577e = kVar;
        }
    }

    public v(Supplier supplier, ma.k kVar, w0 w0Var) {
        this.f11572a = supplier;
        this.f11573b = kVar;
        this.f11574c = w0Var;
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
            consumer = new a(consumer, producerContext2, this.f11572a, this.f11573b);
        } else {
            producerContext2 = producerContext;
        }
        this.f11574c.b(consumer, producerContext2);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        c(consumer, producerContext);
    }
}
