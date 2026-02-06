package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b1 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10588a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private final class a extends s {

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ b1 f10589c;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(b1 b1Var, Consumer consumer) {
            super(consumer);
            Intrinsics.checkNotNullParameter(consumer, "consumer");
            this.f10589c = b1Var;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            CloseableReference closeableReference = null;
            try {
                if (sa.k.L0(kVar) && kVar != null) {
                    closeableReference = kVar.n();
                }
                o().b(closeableReference, i10);
                CloseableReference.z(closeableReference);
            } catch (Throwable th2) {
                CloseableReference.z(closeableReference);
                throw th2;
            }
        }
    }

    public b1(w0 inputProducer) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        this.f10588a = inputProducer;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        this.f10588a.b(new a(this, consumer), context);
    }
}
