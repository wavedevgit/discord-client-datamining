package com.facebook.imagepipeline.producers;

import android.graphics.Bitmap;
import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class j implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10682a;

    /* renamed from: b  reason: collision with root package name */
    private final int f10683b;

    /* renamed from: c  reason: collision with root package name */
    private final int f10684c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10685d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final int f10686c;

        /* renamed from: d  reason: collision with root package name */
        private final int f10687d;

        a(Consumer consumer, int i10, int i11) {
            super(consumer);
            this.f10686c = i10;
            this.f10687d = i11;
        }

        private void p(CloseableReference closeableReference) {
            sa.e eVar;
            Bitmap M1;
            int rowBytes;
            if (closeableReference != null && closeableReference.F0() && (eVar = (sa.e) closeableReference.J()) != null && !eVar.isClosed() && (eVar instanceof sa.f) && (M1 = ((sa.f) eVar).M1()) != null && (rowBytes = M1.getRowBytes() * M1.getHeight()) >= this.f10686c && rowBytes <= this.f10687d) {
                M1.prepareToDraw();
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
        this.f10682a = (w0) o8.j.g(w0Var);
        this.f10683b = i10;
        this.f10684c = i11;
        this.f10685d = z10;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.P() && !this.f10685d) {
            this.f10682a.b(consumer, producerContext);
        } else {
            this.f10682a.b(new a(consumer, this.f10683b, this.f10684c), producerContext);
        }
    }
}
