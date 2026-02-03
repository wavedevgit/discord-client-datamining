package com.facebook.imagepipeline.producers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11318a;

    /* renamed from: com.facebook.imagepipeline.producers.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class C0162a extends s {
        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            if (kVar == null) {
                o().b(null, i10);
                return;
            }
            if (!sa.k.K0(kVar)) {
                kVar.V0();
            }
            o().b(kVar, i10);
        }

        private C0162a(Consumer consumer) {
            super(consumer);
        }
    }

    public a(w0 w0Var) {
        this.f11318a = w0Var;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f11318a.b(new C0162a(consumer), producerContext);
    }
}
