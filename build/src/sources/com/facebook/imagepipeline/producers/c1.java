package com.facebook.imagepipeline.producers;

import com.facebook.common.references.CloseableReference;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import com.facebook.imagepipeline.producers.e0;
import com.facebook.imagepipeline.request.ImageRequest;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c1 implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10694a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f10695b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10696c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10697d;

    /* renamed from: e  reason: collision with root package name */
    private final za.d f10698e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final boolean f10699c;

        /* renamed from: d  reason: collision with root package name */
        private final za.d f10700d;

        /* renamed from: e  reason: collision with root package name */
        private final ProducerContext f10701e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f10702f;

        /* renamed from: g  reason: collision with root package name */
        private final e0 f10703g;

        /* renamed from: com.facebook.imagepipeline.producers.c1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0160a implements e0.d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10705a;

            C0160a(c1 c1Var) {
                this.f10705a = c1Var;
            }

            @Override // com.facebook.imagepipeline.producers.e0.d
            public void a(sa.k kVar, int i10) {
                if (kVar != null) {
                    a aVar = a.this;
                    aVar.v(kVar, i10, (za.c) o8.j.g(aVar.f10700d.createImageTranscoder(kVar.L(), a.this.f10699c)));
                    return;
                }
                a.this.o().b(null, i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class b extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10707a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Consumer f10708b;

            b(c1 c1Var, Consumer consumer) {
                this.f10707a = c1Var;
                this.f10708b = consumer;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (a.this.f10701e.L()) {
                    a.this.f10703g.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.f10703g.c();
                a.this.f10702f = true;
                this.f10708b.a();
            }
        }

        a(Consumer consumer, ProducerContext producerContext, boolean z10, za.d dVar) {
            super(consumer);
            this.f10702f = false;
            this.f10701e = producerContext;
            Boolean resizingAllowedOverride = producerContext.V().getResizingAllowedOverride();
            this.f10699c = resizingAllowedOverride != null ? resizingAllowedOverride.booleanValue() : z10;
            this.f10700d = dVar;
            this.f10703g = new e0(c1.this.f10694a, new C0160a(c1.this), 100);
            producerContext.h(new b(c1.this, consumer));
        }

        private sa.k A(sa.k kVar) {
            if (!this.f10701e.V().getRotationOptions().f() && kVar.q1() != 0 && kVar.q1() != -1) {
                return x(kVar, 0);
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(sa.k kVar, int i10, za.c cVar) {
            this.f10701e.F().d(this.f10701e, "ResizeAndRotateProducer");
            ImageRequest V = this.f10701e.V();
            r8.k c10 = c1.this.f10695b.c();
            try {
                try {
                    za.b c11 = cVar.c(kVar, c10, V.getRotationOptions(), V.getResizeOptions(), null, 85, kVar.E());
                    if (c11.a() != 2) {
                        Map y10 = y(kVar, V.getResizeOptions(), c11, cVar.a());
                        CloseableReference N0 = CloseableReference.N0(c10.a());
                        try {
                            sa.k kVar2 = new sa.k(N0);
                            kVar2.B1(fa.b.f22696b);
                            kVar2.V0();
                            this.f10701e.F().j(this.f10701e, "ResizeAndRotateProducer", y10);
                            if (c11.a() != 1) {
                                i10 |= 16;
                            }
                            o().b(kVar2, i10);
                            sa.k.k(kVar2);
                            CloseableReference.N(N0);
                            c10.close();
                            return;
                        } catch (Throwable th2) {
                            CloseableReference.N(N0);
                            throw th2;
                        }
                    }
                    throw new RuntimeException("Error while transcoding the image");
                } catch (Exception e10) {
                    this.f10701e.F().k(this.f10701e, "ResizeAndRotateProducer", e10, null);
                    if (c.d(i10)) {
                        o().onFailure(e10);
                    }
                    c10.close();
                }
            } catch (Throwable th3) {
                c10.close();
                throw th3;
            }
        }

        private void w(sa.k kVar, int i10, fa.c cVar) {
            sa.k A;
            if (cVar != fa.b.f22696b && cVar != fa.b.f22706l) {
                A = z(kVar);
            } else {
                A = A(kVar);
            }
            o().b(A, i10);
        }

        private sa.k x(sa.k kVar, int i10) {
            sa.k h10 = sa.k.h(kVar);
            if (h10 != null) {
                h10.E1(i10);
            }
            return h10;
        }

        private Map y(sa.k kVar, ResizeOptions resizeOptions, za.b bVar, String str) {
            String str2;
            if (!this.f10701e.F().f(this.f10701e, "ResizeAndRotateProducer")) {
                return null;
            }
            String str3 = kVar.getWidth() + "x" + kVar.getHeight();
            if (resizeOptions != null) {
                str2 = resizeOptions.f10447a + "x" + resizeOptions.f10448b;
            } else {
                str2 = "Unspecified";
            }
            HashMap hashMap = new HashMap();
            hashMap.put("Image format", String.valueOf(kVar.L()));
            hashMap.put("Original size", str3);
            hashMap.put("Requested size", str2);
            hashMap.put("queueTime", String.valueOf(this.f10703g.f()));
            hashMap.put("Transcoder id", str);
            hashMap.put("Transcoding result", String.valueOf(bVar));
            return o8.f.a(hashMap);
        }

        private sa.k z(sa.k kVar) {
            RotationOptions rotationOptions = this.f10701e.V().getRotationOptions();
            if (!rotationOptions.j() && rotationOptions.i()) {
                return x(kVar, rotationOptions.h());
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: B */
        public void h(sa.k kVar, int i10) {
            if (!this.f10702f) {
                boolean d10 = c.d(i10);
                if (kVar == null) {
                    if (d10) {
                        o().b(null, 1);
                        return;
                    }
                    return;
                }
                fa.c L = kVar.L();
                w8.e h10 = c1.h(this.f10701e.V(), kVar, (za.c) o8.j.g(this.f10700d.createImageTranscoder(L, this.f10699c)));
                if (d10 || h10 != w8.e.UNSET) {
                    if (h10 != w8.e.YES) {
                        w(kVar, i10, L);
                    } else if (this.f10703g.k(kVar, i10)) {
                        if (!d10 && !this.f10701e.L()) {
                            return;
                        }
                        this.f10703g.h();
                    }
                }
            }
        }
    }

    public c1(Executor executor, r8.i iVar, w0 w0Var, boolean z10, za.d dVar) {
        this.f10694a = (Executor) o8.j.g(executor);
        this.f10695b = (r8.i) o8.j.g(iVar);
        this.f10696c = (w0) o8.j.g(w0Var);
        this.f10698e = (za.d) o8.j.g(dVar);
        this.f10697d = z10;
    }

    private static boolean f(RotationOptions rotationOptions, sa.k kVar) {
        if (!rotationOptions.f()) {
            if (za.e.e(rotationOptions, kVar) != 0 || g(rotationOptions, kVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static boolean g(RotationOptions rotationOptions, sa.k kVar) {
        if (rotationOptions.i() && !rotationOptions.f()) {
            return za.e.f55283b.contains(Integer.valueOf(kVar.b1()));
        }
        kVar.y1(0);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static w8.e h(ImageRequest imageRequest, sa.k kVar, za.c cVar) {
        boolean z10;
        if (kVar != null && kVar.L() != fa.c.f22712d) {
            if (!cVar.d(kVar.L())) {
                return w8.e.NO;
            }
            if (!f(imageRequest.getRotationOptions(), kVar) && !cVar.b(kVar, imageRequest.getRotationOptions(), imageRequest.getResizeOptions())) {
                z10 = false;
            } else {
                z10 = true;
            }
            return w8.e.e(z10);
        }
        return w8.e.UNSET;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f10696c.b(new a(consumer, producerContext, this.f10697d, this.f10698e), producerContext);
    }
}
