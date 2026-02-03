package com.facebook.imagepipeline.producers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f1 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11399a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends s {
        a(Consumer consumer) {
            super(consumer);
        }

        @Override // com.facebook.imagepipeline.producers.c
        protected void h(Object obj, int i10) {
            if (c.d(i10)) {
                o().b(null, i10);
            }
        }
    }

    public f1(w0 w0Var) {
        this.f11399a = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f11399a.b(new a(consumer), producerContext);
    }
}
