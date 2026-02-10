package com.facebook.imagepipeline.producers;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10822a;

    /* renamed from: b  reason: collision with root package name */
    private final int f10823b;

    /* renamed from: c  reason: collision with root package name */
    private final int f10824c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10825d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final int f10826c;

        /* renamed from: d  reason: collision with root package name */
        private final int f10827d;

        a(Consumer consumer, int i10, int i11) {
            super(consumer);
            this.f10826c = i10;
            this.f10827d = i11;
        }

        private void p(CloseableReference closeableReference) {
            ta.e eVar;
            Bitmap L1;
            int rowBytes;
            if (closeableReference != null && closeableReference.D0() && (eVar = (ta.e) closeableReference.J()) != null && !eVar.isClosed() && (eVar instanceof ta.f) && (L1 = ((ta.f) eVar).L1()) != null && (rowBytes = L1.getRowBytes() * L1.getHeight()) >= this.f10826c && rowBytes <= this.f10827d) {
                L1.prepareToDraw();
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: q */
        public void h(CloseableReference closeableReference, int i10) {
            p(closeableReference);
            o().b(closeableReference, i10);
        }
    }

    public j(w0 w0Var, int i10, int i11, boolean z10) {
        boolean z11;
        if (i10 <= i11) {
            z11 = true;
        } else {
            z11 = false;
        }
        p8.j.b(Boolean.valueOf(z11));
        this.f10822a = (w0) p8.j.g(w0Var);
        this.f10823b = i10;
        this.f10824c = i11;
        this.f10825d = z10;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.Q() && !this.f10825d) {
            this.f10822a.b(consumer, producerContext);
        } else {
            this.f10822a.b(new a(consumer, this.f10823b, this.f10824c), producerContext);
        }
    }
}
