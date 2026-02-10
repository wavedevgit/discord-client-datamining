package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11434a;

    /* renamed from: b  reason: collision with root package name */
    private final w0 f11435b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private ProducerContext f11436c;

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            l.this.f11435b.b(o(), this.f11436c);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(ta.k kVar, int i10) {
            ImageRequest I = this.f11436c.I();
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
                ta.k.i(kVar);
                l.this.f11435b.b(o(), this.f11436c);
            }
        }

        private a(Consumer consumer, ProducerContext producerContext) {
            super(consumer);
            this.f11436c = producerContext;
        }
    }

    public l(w0 w0Var, w0 w0Var2) {
        this.f11434a = w0Var;
        this.f11435b = w0Var2;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f11434a.b(new a(consumer, producerContext), producerContext);
    }
}
