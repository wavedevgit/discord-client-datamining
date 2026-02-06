package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.ResizeOptions;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l1 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final m1[] f10723a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final ProducerContext f10724c;

        /* renamed from: d  reason: collision with root package name */
        private final int f10725d;

        /* renamed from: e  reason: collision with root package name */
        private final ResizeOptions f10726e;

        public a(Consumer consumer, ProducerContext producerContext, int i10) {
            super(consumer);
            this.f10724c = producerContext;
            this.f10725d = i10;
            this.f10726e = producerContext.I().getResizeOptions();
        }

        @Override // com.facebook.imagepipeline.producers.s, com.facebook.imagepipeline.producers.c
        protected void g(Throwable th2) {
            if (!l1.this.e(this.f10725d + 1, o(), this.f10724c)) {
                o().onFailure(th2);
            }
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: p */
        public void h(sa.k kVar, int i10) {
            if (kVar != null && (c.e(i10) || n1.c(kVar, this.f10726e))) {
                o().b(kVar, i10);
            } else if (c.d(i10)) {
                sa.k.k(kVar);
                if (!l1.this.e(this.f10725d + 1, o(), this.f10724c)) {
                    o().b(null, 1);
                }
            }
        }
    }

    public l1(m1... m1VarArr) {
        m1[] m1VarArr2 = (m1[]) o8.j.g(m1VarArr);
        this.f10723a = m1VarArr2;
        o8.j.e(0, m1VarArr2.length);
    }

    private int d(int i10, ResizeOptions resizeOptions) {
        while (true) {
            m1[] m1VarArr = this.f10723a;
            if (i10 < m1VarArr.length) {
                if (m1VarArr[i10].a(resizeOptions)) {
                    return i10;
                }
                i10++;
            } else {
                return -1;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public boolean e(int i10, Consumer consumer, ProducerContext producerContext) {
        int d10 = d(i10, producerContext.I().getResizeOptions());
        if (d10 == -1) {
            return false;
        }
        this.f10723a[d10].b(new a(consumer, producerContext, d10), producerContext);
        return true;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        if (producerContext.I().getResizeOptions() == null) {
            consumer.b(null, 1);
        } else if (!e(0, consumer, producerContext)) {
            consumer.b(null, 1);
        }
    }
}
