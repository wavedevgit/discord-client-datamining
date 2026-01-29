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
    private final Executor f11712a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f11713b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11714c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11715d;

    /* renamed from: e  reason: collision with root package name */
    private final za.d f11716e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final boolean f11717c;

        /* renamed from: d  reason: collision with root package name */
        private final za.d f11718d;

        /* renamed from: e  reason: collision with root package name */
        private final ProducerContext f11719e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f11720f;

        /* renamed from: g  reason: collision with root package name */
        private final e0 f11721g;

        /* renamed from: com.facebook.imagepipeline.producers.c1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0158a implements e0.d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f11723a;

            C0158a(c1 c1Var) {
                this.f11723a = c1Var;
            }

            @Override // com.facebook.imagepipeline.producers.e0.d
            public void a(sa.k kVar, int i10) {
                if (kVar != null) {
                    a aVar = a.this;
                    aVar.v(kVar, i10, (za.c) o8.j.g(aVar.f11718d.createImageTranscoder(kVar.L(), a.this.f11717c)));
                    return;
                }
                a.this.o().b(null, i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class b extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f11725a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Consumer f11726b;

            b(c1 c1Var, Consumer consumer) {
                this.f11725a = c1Var;
                this.f11726b = consumer;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (a.this.f11719e.L()) {
                    a.this.f11721g.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.f11721g.c();
                a.this.f11720f = true;
                this.f11726b.a();
            }
        }

        a(Consumer consumer, ProducerContext producerContext, boolean z10, za.d dVar) {
            super(consumer);
            this.f11720f = false;
            this.f11719e = producerContext;
            Boolean resizingAllowedOverride = producerContext.V().getResizingAllowedOverride();
            this.f11717c = resizingAllowedOverride != null ? resizingAllowedOverride.booleanValue() : z10;
            this.f11718d = dVar;
            this.f11721g = new e0(c1.this.f11712a, new C0158a(c1.this), 100);
            producerContext.h(new b(c1.this, consumer));
        }

        private sa.k A(sa.k kVar) {
            if (!this.f11719e.V().getRotationOptions().f() && kVar.q1() != 0 && kVar.q1() != -1) {
                return x(kVar, 0);
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(sa.k kVar, int i10, za.c cVar) {
            this.f11719e.F().d(this.f11719e, "ResizeAndRotateProducer");
            ImageRequest V = this.f11719e.V();
            r8.k c10 = c1.this.f11713b.c();
            try {
                try {
                    za.b c11 = cVar.c(kVar, c10, V.getRotationOptions(), V.getResizeOptions(), null, 85, kVar.E());
                    if (c11.a() != 2) {
                        Map y10 = y(kVar, V.getResizeOptions(), c11, cVar.a());
                        CloseableReference J0 = CloseableReference.J0(c10.a());
                        try {
                            sa.k kVar2 = new sa.k(J0);
                            kVar2.B1(fa.b.f24868b);
                            kVar2.U0();
                            this.f11719e.F().j(this.f11719e, "ResizeAndRotateProducer", y10);
                            if (c11.a() != 1) {
                                i10 |= 16;
                            }
                            o().b(kVar2, i10);
                            sa.k.l(kVar2);
                            CloseableReference.N(J0);
                            c10.close();
                            return;
                        } catch (Throwable th2) {
                            CloseableReference.N(J0);
                            throw th2;
                        }
                    }
                    throw new RuntimeException("Error while transcoding the image");
                } catch (Exception e10) {
                    this.f11719e.F().k(this.f11719e, "ResizeAndRotateProducer", e10, null);
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
            if (cVar != fa.b.f24868b && cVar != fa.b.f24878l) {
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
            if (!this.f11719e.F().f(this.f11719e, "ResizeAndRotateProducer")) {
                return null;
            }
            String str3 = kVar.getWidth() + "x" + kVar.getHeight();
            if (resizeOptions != null) {
                str2 = resizeOptions.f11465a + "x" + resizeOptions.f11466b;
            } else {
                str2 = "Unspecified";
            }
            HashMap hashMap = new HashMap();
            hashMap.put("Image format", String.valueOf(kVar.L()));
            hashMap.put("Original size", str3);
            hashMap.put("Requested size", str2);
            hashMap.put("queueTime", String.valueOf(this.f11721g.f()));
            hashMap.put("Transcoder id", str);
            hashMap.put("Transcoding result", String.valueOf(bVar));
            return o8.f.a(hashMap);
        }

        private sa.k z(sa.k kVar) {
            RotationOptions rotationOptions = this.f11719e.V().getRotationOptions();
            if (!rotationOptions.j() && rotationOptions.i()) {
                return x(kVar, rotationOptions.h());
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: B */
        public void h(sa.k kVar, int i10) {
            if (!this.f11720f) {
                boolean d10 = c.d(i10);
                if (kVar == null) {
                    if (d10) {
                        o().b(null, 1);
                        return;
                    }
                    return;
                }
                fa.c L = kVar.L();
                w8.e h10 = c1.h(this.f11719e.V(), kVar, (za.c) o8.j.g(this.f11718d.createImageTranscoder(L, this.f11717c)));
                if (d10 || h10 != w8.e.UNSET) {
                    if (h10 != w8.e.YES) {
                        w(kVar, i10, L);
                    } else if (this.f11721g.k(kVar, i10)) {
                        if (!d10 && !this.f11719e.L()) {
                            return;
                        }
                        this.f11721g.h();
                    }
                }
            }
        }
    }

    public c1(Executor executor, r8.i iVar, w0 w0Var, boolean z10, za.d dVar) {
        this.f11712a = (Executor) o8.j.g(executor);
        this.f11713b = (r8.i) o8.j.g(iVar);
        this.f11714c = (w0) o8.j.g(w0Var);
        this.f11716e = (za.d) o8.j.g(dVar);
        this.f11715d = z10;
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
            return za.e.f55411b.contains(Integer.valueOf(kVar.a1()));
        }
        kVar.y1(0);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static w8.e h(ImageRequest imageRequest, sa.k kVar, za.c cVar) {
        boolean z10;
        if (kVar != null && kVar.L() != fa.c.f24884d) {
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
        this.f11714c.b(new a(consumer, producerContext, this.f11715d, this.f11716e), producerContext);
    }
}
