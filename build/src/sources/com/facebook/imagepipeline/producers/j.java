package com.facebook.imagepipeline.producers;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11400a;

    /* renamed from: b  reason: collision with root package name */
    private final int f11401b;

    /* renamed from: c  reason: collision with root package name */
    private final int f11402c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11403d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final int f11404c;

        /* renamed from: d  reason: collision with root package name */
        private final int f11405d;

        a(Consumer consumer, int i10, int i11) {
            super(consumer);
            this.f11404c = i10;
            this.f11405d = i11;
        }

        private void p(CloseableReference closeableReference) {
            ta.e eVar;
            Bitmap Q1;
            int rowBytes;
            if (closeableReference != null && closeableReference.z0() && (eVar = (ta.e) closeableReference.J()) != null && !eVar.isClosed() && (eVar instanceof ta.f) && (Q1 = ((ta.f) eVar).Q1()) != null && (rowBytes = Q1.getRowBytes() * Q1.getHeight()) >= this.f11404c && rowBytes <= this.f11405d) {
                Q1.prepareToDraw();
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
        this.f11400a = (w0) p8.j.g(w0Var);
        this.f11401b = i10;
        this.f11402c = i11;
        this.f11403d = z10;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.Q() && !this.f11403d) {
            this.f11400a.b(consumer, producerContext);
        } else {
            this.f11400a.b(new a(consumer, this.f11401b, this.f11402c), producerContext);
        }
    }
}
