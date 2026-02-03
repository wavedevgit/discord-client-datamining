package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10433a;

    /* renamed from: b  reason: collision with root package name */
    private final w0 f10434b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private ProducerContext f10435c;

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            l.this.f10434b.b(o(), this.f10435c);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            ImageRequest V = this.f10435c.V();
            boolean d10 = c.d(i10);
            boolean c10 = n1.c(kVar, V.getResizeOptions());
            if (kVar != null && (c10 || V.getLocalThumbnailPreviewsEnabled())) {
                if (d10 && c10) {
                    o().b(kVar, i10);
                } else {
                    o().b(kVar, c.n(i10, 1));
                }
            }
            if (d10 && !c10 && !V.getLoadThumbnailOnlyForAndroidSdkAboveQ()) {
                sa.k.l(kVar);
                l.this.f10434b.b(o(), this.f10435c);
            }
        }

        private a(Consumer consumer, ProducerContext producerContext) {
            super(consumer);
            this.f10435c = producerContext;
        }
    }

    public l(w0 w0Var, w0 w0Var2) {
        this.f10433a = w0Var;
        this.f10434b = w0Var2;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f10433a.b(new a(consumer, producerContext), producerContext);
    }
}
