package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10822a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10823b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10824c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final CacheKey f10825c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f10826d;

        /* renamed from: e  reason: collision with root package name */
        private final la.w f10827e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f10828f;

        public a(Consumer consumer, CacheKey cacheKey, boolean z10, la.w wVar, boolean z11) {
            super(consumer);
            this.f10825c = cacheKey;
            this.f10826d = z10;
            this.f10827e = wVar;
            this.f10828f = z11;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(CloseableReference closeableReference, int i10) {
            CloseableReference closeableReference2 = null;
            if (closeableReference == null) {
                if (c.d(i10)) {
                    o().b(null, i10);
                }
            } else if (c.e(i10) && !this.f10826d) {
            } else {
                if (this.f10828f) {
                    closeableReference2 = this.f10827e.c(this.f10825c, closeableReference);
                }
                try {
                    o().c(1.0f);
                    Consumer o10 = o();
                    if (closeableReference2 != null) {
                        closeableReference = closeableReference2;
                    }
                    o10.b(closeableReference, i10);
                } finally {
                    CloseableReference.z(closeableReference2);
                }
            }
        }
    }

    public t0(la.w wVar, la.k kVar, w0 w0Var) {
        this.f10822a = wVar;
        this.f10823b = kVar;
        this.f10824c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        y0 y10 = producerContext.y();
        ImageRequest I = producerContext.I();
        Object a10 = producerContext.a();
        Postprocessor postprocessor = I.getPostprocessor();
        if (postprocessor != null && postprocessor.getPostprocessorCacheKey() != null) {
            y10.d(producerContext, c());
            CacheKey postprocessedBitmapCacheKey = this.f10823b.getPostprocessedBitmapCacheKey(I, a10);
            Map map = null;
            if (producerContext.I().isCacheEnabled(1)) {
                closeableReference = this.f10822a.get(postprocessedBitmapCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                String c10 = c();
                if (y10.f(producerContext, c())) {
                    map = o8.f.of("cached_value_found", "true");
                }
                y10.j(producerContext, c10, map);
                y10.b(producerContext, "PostprocessedBitmapMemoryCacheProducer", true);
                producerContext.m("memory_bitmap", "postprocessed");
                consumer.c(1.0f);
                consumer.b(closeableReference, 1);
                closeableReference.close();
                return;
            }
            a aVar = new a(consumer, postprocessedBitmapCacheKey, false, this.f10822a, producerContext.I().isCacheEnabled(2));
            String c11 = c();
            if (y10.f(producerContext, c())) {
                map = o8.f.of("cached_value_found", "false");
            }
            y10.j(producerContext, c11, map);
            this.f10824c.b(aVar, producerContext);
            return;
        }
        this.f10824c.b(consumer, producerContext);
    }

    protected String c() {
        return "PostprocessedBitmapMemoryCacheProducer";
    }
}
