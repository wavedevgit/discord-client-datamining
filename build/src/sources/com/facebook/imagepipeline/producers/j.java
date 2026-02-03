package com.facebook.imagepipeline.producers;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10398a;

    /* renamed from: b  reason: collision with root package name */
    private final int f10399b;

    /* renamed from: c  reason: collision with root package name */
    private final int f10400c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10401d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final int f10402c;

        /* renamed from: d  reason: collision with root package name */
        private final int f10403d;

        a(Consumer consumer, int i10, int i11) {
            super(consumer);
            this.f10402c = i10;
            this.f10403d = i11;
        }

        private void p(CloseableReference closeableReference) {
            sa.e eVar;
            Bitmap N1;
            int rowBytes;
            if (closeableReference != null && closeableReference.E0() && (eVar = (sa.e) closeableReference.C0()) != null && !eVar.isClosed() && (eVar instanceof sa.f) && (N1 = ((sa.f) eVar).N1()) != null && (rowBytes = N1.getRowBytes() * N1.getHeight()) >= this.f10402c && rowBytes <= this.f10403d) {
                N1.prepareToDraw();
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
        o8.j.b(Boolean.valueOf(z11));
        this.f10398a = (w0) o8.j.g(w0Var);
        this.f10399b = i10;
        this.f10400c = i11;
        this.f10401d = z10;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.C0() && !this.f10401d) {
            this.f10398a.b(consumer, producerContext);
        } else {
            this.f10398a.b(new a(consumer, this.f10399b, this.f10400c), producerContext);
        }
    }
}
