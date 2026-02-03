package com.facebook.imagepipeline.producers;

import android.util.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class x extends o0 {

    /* renamed from: f  reason: collision with root package name */
    private final la.k f10576f;

    public x(la.k kVar, boolean z10, w0 w0Var) {
        super(w0Var, "EncodedCacheKeyMultiplexProducer", "multiplex_enc_cnt", z10);
        this.f10576f = kVar;
    }

    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: l */
    public sa.k g(sa.k kVar) {
        return sa.k.h(kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: m */
    public Pair j(ProducerContext producerContext) {
        return Pair.create(this.f10576f.getEncodedCacheKey(producerContext.V(), producerContext.a()), producerContext.E0());
    }
}
