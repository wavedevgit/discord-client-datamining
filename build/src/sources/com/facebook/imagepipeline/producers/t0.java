package com.facebook.imagepipeline.producers;

import com.facebook.cache.common.CacheKey;
import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.imagepipeline.request.Postprocessor;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t0 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final la.w f10923a;

    /* renamed from: b  reason: collision with root package name */
    private final la.k f10924b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10925c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final CacheKey f10926c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f10927d;

        /* renamed from: e  reason: collision with root package name */
        private final la.w f10928e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f10929f;

        public a(Consumer consumer, CacheKey cacheKey, boolean z10, la.w wVar, boolean z11) {
            super(consumer);
            this.f10926c = cacheKey;
            this.f10927d = z10;
            this.f10928e = wVar;
            this.f10929f = z11;
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
            } else if (c.e(i10) && !this.f10927d) {
            } else {
                if (this.f10929f) {
                    closeableReference2 = this.f10928e.c(this.f10926c, closeableReference);
                }
                try {
                    o().c(1.0f);
                    Consumer o10 = o();
                    if (closeableReference2 != null) {
                        closeableReference = closeableReference2;
                    }
                    o10.b(closeableReference, i10);
                } finally {
                    CloseableReference.N(closeableReference2);
                }
            }
        }
    }

    public t0(la.w wVar, la.k kVar, w0 w0Var) {
        this.f10923a = wVar;
        this.f10924b = kVar;
        this.f10925c = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        CloseableReference closeableReference;
        y0 F = producerContext.F();
        ImageRequest V = producerContext.V();
        Object a10 = producerContext.a();
        Postprocessor postprocessor = V.getPostprocessor();
        if (postprocessor != null && postprocessor.getPostprocessorCacheKey() != null) {
            F.d(producerContext, c());
            CacheKey postprocessedBitmapCacheKey = this.f10924b.getPostprocessedBitmapCacheKey(V, a10);
            Map map = null;
            if (producerContext.V().isCacheEnabled(1)) {
                closeableReference = this.f10923a.get(postprocessedBitmapCacheKey);
            } else {
                closeableReference = null;
            }
            if (closeableReference != null) {
                String c10 = c();
                if (F.f(producerContext, c())) {
                    map = o8.f.of("cached_value_found", "true");
                }
                F.j(producerContext, c10, map);
                F.b(producerContext, "PostprocessedBitmapMemoryCacheProducer", true);
                producerContext.m("memory_bitmap", "postprocessed");
                consumer.c(1.0f);
                consumer.b(closeableReference, 1);
                closeableReference.close();
                return;
            }
            a aVar = new a(consumer, postprocessedBitmapCacheKey, false, this.f10923a, producerContext.V().isCacheEnabled(2));
            String c11 = c();
            if (F.f(producerContext, c())) {
                map = o8.f.of("cached_value_found", "false");
            }
            F.j(producerContext, c11, map);
            this.f10925c.b(aVar, producerContext);
            return;
        }
        this.f10925c.b(consumer, producerContext);
    }

    protected String c() {
        return "PostprocessedBitmapMemoryCacheProducer";
    }
}
