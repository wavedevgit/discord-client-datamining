package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.internal.Supplier;
import com.facebook.imagepipeline.producers.t;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class v implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Supplier f10994a;

    /* renamed from: b  reason: collision with root package name */
    private final ma.k f10995b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10996c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10997c;

        /* renamed from: d  reason: collision with root package name */
        private final Supplier f10998d;

        /* renamed from: e  reason: collision with root package name */
        private final ma.k f10999e;

        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            this.f10997c.y().d(this.f10997c, "DiskCacheWriteProducer");
            if (!c.e(i10) && kVar != null && !c.l(i10, 10) && kVar.z() != ga.c.f24098d) {
                ImageRequest I = this.f10997c.I();
                CacheKey encodedCacheKey = this.f10999e.getEncodedCacheKey(I, this.f10997c.a());
                oa.b bVar = (oa.b) this.f10998d.get();
                ma.j a10 = t.a(I, bVar.a(), bVar.b(), bVar.c());
                if (a10 == null) {
                    y0 y10 = this.f10997c.y();
                    ProducerContext producerContext = this.f10997c;
                    y10.k(producerContext, "DiskCacheWriteProducer", new t.a("Got no disk cache for CacheChoice: " + Integer.valueOf(I.getCacheChoice().ordinal()).toString()), null);
                    o().b(kVar, i10);
                    return;
                }
                a10.p(encodedCacheKey, kVar);
                this.f10997c.y().j(this.f10997c, "DiskCacheWriteProducer", null);
                o().b(kVar, i10);
                return;
            }
            this.f10997c.y().j(this.f10997c, "DiskCacheWriteProducer", null);
            o().b(kVar, i10);
        }

        private a(Consumer consumer, ProducerContext producerContext, Supplier supplier, ma.k kVar) {
            super(consumer);
            this.f10997c = producerContext;
            this.f10998d = supplier;
            this.f10999e = kVar;
        }
    }

    public v(Supplier supplier, ma.k kVar, w0 w0Var) {
        this.f10994a = supplier;
        this.f10995b = kVar;
        this.f10996c = w0Var;
    }

    private void c(Consumer consumer, ProducerContext producerContext) {
        ProducerContext producerContext2;
        if (producerContext.C0().d() >= ImageRequest.RequestLevel.DISK_CACHE.d()) {
            producerContext.m("disk", "nil-result_write");
            consumer.b(null, 1);
            return;
        }
        if (producerContext.I().isCacheEnabled(32)) {
            producerContext2 = producerContext;
            consumer = new a(consumer, producerContext2, this.f10994a, this.f10995b);
        } else {
            producerContext2 = producerContext;
        }
        this.f10996c.b(consumer, producerContext2);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        c(consumer, producerContext);
    }
}
