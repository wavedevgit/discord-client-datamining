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
    private final Executor f10733a;

    /* renamed from: b  reason: collision with root package name */
    private final s8.i f10734b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10735c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10736d;

    /* renamed from: e  reason: collision with root package name */
    private final ab.d f10737e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final boolean f10738c;

        /* renamed from: d  reason: collision with root package name */
        private final ab.d f10739d;

        /* renamed from: e  reason: collision with root package name */
        private final ProducerContext f10740e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f10741f;

        /* renamed from: g  reason: collision with root package name */
        private final e0 f10742g;

        /* renamed from: com.facebook.imagepipeline.producers.c1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0180a implements e0.d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10744a;

            C0180a(c1 c1Var) {
                this.f10744a = c1Var;
            }

            @Override // com.facebook.imagepipeline.producers.e0.d
            public void a(ta.k kVar, int i10) {
                if (kVar != null) {
                    a aVar = a.this;
                    aVar.v(kVar, i10, (ab.c) p8.j.g(aVar.f10739d.createImageTranscoder(kVar.z(), a.this.f10738c)));
                    return;
                }
                a.this.o().b(null, i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class b extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10746a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Consumer f10747b;

            b(c1 c1Var, Consumer consumer) {
                this.f10746a = c1Var;
                this.f10747b = consumer;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (a.this.f10740e.z()) {
                    a.this.f10742g.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.f10742g.c();
                a.this.f10741f = true;
                this.f10747b.a();
            }
        }

        a(Consumer consumer, ProducerContext producerContext, boolean z10, ab.d dVar) {
            super(consumer);
            this.f10741f = false;
            this.f10740e = producerContext;
            Boolean resizingAllowedOverride = producerContext.I().getResizingAllowedOverride();
            this.f10738c = resizingAllowedOverride != null ? resizingAllowedOverride.booleanValue() : z10;
            this.f10739d = dVar;
            this.f10742g = new e0(c1.this.f10733a, new C0180a(c1.this), 100);
            producerContext.g(new b(c1.this, consumer));
        }

        private ta.k A(ta.k kVar) {
            if (!this.f10740e.I().getRotationOptions().f() && kVar.l1() != 0 && kVar.l1() != -1) {
                return x(kVar, 0);
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(ta.k kVar, int i10, ab.c cVar) {
            this.f10740e.y().d(this.f10740e, "ResizeAndRotateProducer");
            ImageRequest I = this.f10740e.I();
            s8.k c10 = c1.this.f10734b.c();
            try {
                try {
                    ab.b c11 = cVar.c(kVar, c10, I.getRotationOptions(), I.getResizeOptions(), null, 85, kVar.s());
                    if (c11.a() != 2) {
                        Map y10 = y(kVar, I.getResizeOptions(), c11, cVar.a());
                        CloseableReference H0 = CloseableReference.H0(c10.a());
                        try {
                            ta.k kVar2 = new ta.k(H0);
                            kVar2.w1(ga.b.f24082b);
                            kVar2.R0();
                            this.f10740e.y().j(this.f10740e, "ResizeAndRotateProducer", y10);
                            if (c11.a() != 1) {
                                i10 |= 16;
                            }
                            o().b(kVar2, i10);
                            ta.k.k(kVar2);
                            CloseableReference.z(H0);
                            c10.close();
                            return;
                        } catch (Throwable th2) {
                            CloseableReference.z(H0);
                            throw th2;
                        }
                    }
                    throw new RuntimeException("Error while transcoding the image");
                } catch (Exception e10) {
                    this.f10740e.y().k(this.f10740e, "ResizeAndRotateProducer", e10, null);
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

        private void w(ta.k kVar, int i10, ga.c cVar) {
            ta.k A;
            if (cVar != ga.b.f24082b && cVar != ga.b.f24092l) {
                A = z(kVar);
            } else {
                A = A(kVar);
            }
            o().b(A, i10);
        }

        private ta.k x(ta.k kVar, int i10) {
            ta.k g10 = ta.k.g(kVar);
            if (g10 != null) {
                g10.z1(i10);
            }
            return g10;
        }

        private Map y(ta.k kVar, ResizeOptions resizeOptions, ab.b bVar, String str) {
            String str2;
            if (!this.f10740e.y().f(this.f10740e, "ResizeAndRotateProducer")) {
                return null;
            }
            String str3 = kVar.getWidth() + "x" + kVar.getHeight();
            if (resizeOptions != null) {
                str2 = resizeOptions.f10486a + "x" + resizeOptions.f10487b;
            } else {
                str2 = "Unspecified";
            }
            HashMap hashMap = new HashMap();
            hashMap.put("Image format", String.valueOf(kVar.z()));
            hashMap.put("Original size", str3);
            hashMap.put("Requested size", str2);
            hashMap.put("queueTime", String.valueOf(this.f10742g.f()));
            hashMap.put("Transcoder id", str);
            hashMap.put("Transcoding result", String.valueOf(bVar));
            return p8.f.a(hashMap);
        }

        private ta.k z(ta.k kVar) {
            RotationOptions rotationOptions = this.f10740e.I().getRotationOptions();
            if (!rotationOptions.j() && rotationOptions.i()) {
                return x(kVar, rotationOptions.h());
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: B */
        public void h(ta.k kVar, int i10) {
            if (!this.f10741f) {
                boolean d10 = c.d(i10);
                if (kVar == null) {
                    if (d10) {
                        o().b(null, 1);
                        return;
                    }
                    return;
                }
                ga.c z10 = kVar.z();
                x8.e h10 = c1.h(this.f10740e.I(), kVar, (ab.c) p8.j.g(this.f10739d.createImageTranscoder(z10, this.f10738c)));
                if (d10 || h10 != x8.e.UNSET) {
                    if (h10 != x8.e.YES) {
                        w(kVar, i10, z10);
                    } else if (this.f10742g.k(kVar, i10)) {
                        if (!d10 && !this.f10740e.z()) {
                            return;
                        }
                        this.f10742g.h();
                    }
                }
            }
        }
    }

    public c1(Executor executor, s8.i iVar, w0 w0Var, boolean z10, ab.d dVar) {
        this.f10733a = (Executor) p8.j.g(executor);
        this.f10734b = (s8.i) p8.j.g(iVar);
        this.f10735c = (w0) p8.j.g(w0Var);
        this.f10737e = (ab.d) p8.j.g(dVar);
        this.f10736d = z10;
    }

    private static boolean f(RotationOptions rotationOptions, ta.k kVar) {
        if (!rotationOptions.f()) {
            if (ab.e.e(rotationOptions, kVar) != 0 || g(rotationOptions, kVar)) {
                return true;
            }
            return false;
        }
        return false;
    }

    private static boolean g(RotationOptions rotationOptions, ta.k kVar) {
        if (rotationOptions.i() && !rotationOptions.f()) {
            return ab.e.f530b.contains(Integer.valueOf(kVar.X0()));
        }
        kVar.s1(0);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static x8.e h(ImageRequest imageRequest, ta.k kVar, ab.c cVar) {
        boolean z10;
        if (kVar != null && kVar.z() != ga.c.f24098d) {
            if (!cVar.b(kVar.z())) {
                return x8.e.NO;
            }
            if (!f(imageRequest.getRotationOptions(), kVar) && !cVar.d(kVar, imageRequest.getRotationOptions(), imageRequest.getResizeOptions())) {
                z10 = false;
            } else {
                z10 = true;
            }
            return x8.e.e(z10);
        }
        return x8.e.UNSET;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext producerContext) {
        this.f10735c.b(new a(consumer, producerContext, this.f10736d, this.f10737e), producerContext);
    }
}
