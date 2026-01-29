package com.facebook.imagepipeline.producers;

import android.util.Pair;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends o0 {

    /* renamed from: f  reason: collision with root package name */
    private final la.k f11785f;

    public h(la.k kVar, w0 w0Var) {
        super(w0Var, "BitmapMemoryCacheKeyMultiplexProducer", "multiplex_bmp_cnt");
        this.f11785f = kVar;
    }

    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: l */
    public CloseableReference g(CloseableReference closeableReference) {
        return CloseableReference.E(closeableReference);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.producers.o0
    /* renamed from: m */
    public Pair j(ProducerContext producerContext) {
        return Pair.create(this.f11785f.getBitmapCacheKey(producerContext.V(), producerContext.a()), producerContext.E0());
    }
}
