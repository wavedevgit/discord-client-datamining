package com.facebook.imagepipeline.producers;

import android.util.Pair;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class x extends o0 {

    /* renamed from: f  reason: collision with root package name */
    private final ma.k f11578f;

    public x(ma.k kVar, boolean z10, w0 w0Var) {
        super(w0Var, "EncodedCacheKeyMultiplexProducer", "multiplex_enc_cnt", z10);
        this.f11578f = kVar;
    }

    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: l */
    public ta.k g(ta.k kVar) {
        return ta.k.h(kVar);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: m */
    public Pair j(ProducerContext producerContext) {
        return Pair.create(this.f11578f.getEncodedCacheKey(producerContext.I(), producerContext.a()), producerContext.z0());
    }
}
