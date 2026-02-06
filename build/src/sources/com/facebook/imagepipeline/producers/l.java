package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10717a;

    /* renamed from: b  reason: collision with root package name */
    private final w0 f10718b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private ProducerContext f10719c;

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            l.this.f10718b.b(o(), this.f10719c);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            ImageRequest I = this.f10719c.I();
            boolean d10 = c.d(i10);
            boolean c10 = n1.c(kVar, I.getResizeOptions());
            if (kVar != null && (c10 || I.getLocalThumbnailPreviewsEnabled())) {
                if (d10 && c10) {
                    o().b(kVar, i10);
                } else {
                    o().b(kVar, c.n(i10, 1));
                }
            }
            if (d10 && !c10 && !I.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                sa.k.k(kVar);
                l.this.f10718b.b(o(), this.f10719c);
            }
        }

        private a(Consumer consumer, ProducerContext producerContext) {
            super(consumer);
            this.f10719c = producerContext;
        }
    }

    public l(w0 w0Var, w0 w0Var2) {
        this.f10717a = w0Var;
        this.f10718b = w0Var2;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f10717a.b(new a(consumer, producerContext), producerContext);
    }
}
