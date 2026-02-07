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
    private final Executor f10593a;

    /* renamed from: b  reason: collision with root package name */
    private final r8.i f10594b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f10595c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f10596d;

    /* renamed from: e  reason: collision with root package name */
    private final za.d f10597e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final boolean f10598c;

        /* renamed from: d  reason: collision with root package name */
        private final za.d f10599d;

        /* renamed from: e  reason: collision with root package name */
        private final ProducerContext f10600e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f10601f;

        /* renamed from: g  reason: collision with root package name */
        private final e0 f10602g;

        /* renamed from: com.facebook.imagepipeline.producers.c1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0153a implements e0.d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10604a;

            C0153a(c1 c1Var) {
                this.f10604a = c1Var;
            }

            @Override // com.facebook.imagepipeline.producers.e0.d
            public void a(sa.k kVar, int i10) {
                if (kVar != null) {
                    a aVar = a.this;
                    aVar.v(kVar, i10, (za.c) o8.j.g(aVar.f10599d.createImageTranscoder(kVar.z(), a.this.f10598c)));
                    return;
                }
                a.this.o().b(null, i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class b extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f10606a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Consumer f10607b;

            b(c1 c1Var, Consumer consumer) {
                this.f10606a = c1Var;
                this.f10607b = consumer;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (a.this.f10600e.z()) {
                    a.this.f10602g.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.f10602g.c();
                a.this.f10601f = true;
                this.f10607b.a();
            }
        }

        a(Consumer consumer, ProducerContext producerContext, boolean z10, za.d dVar) {
            super(consumer);
            this.f10601f = false;
            this.f10600e = producerContext;
            Boolean resizingAllowedOverride = producerContext.I().getResizingAllowedOverride();
            this.f10598c = resizingAllowedOverride != null ? resizingAllowedOverride.booleanValue() : z10;
            this.f10599d = dVar;
            this.f10602g = new e0(c1.this.f10593a, new C0153a(c1.this), 100);
            producerContext.g(new b(c1.this, consumer));
        }

        private sa.k A(sa.k kVar) {
            if (!this.f10600e.I().getRotationOptions().f() && kVar.p1() != 0 && kVar.p1() != -1) {
                return x(kVar, 0);
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(sa.k kVar, int i10, za.c cVar) {
            this.f10600e.y().d(this.f10600e, "ResizeAndRotateProducer");
            ImageRequest I = this.f10600e.I();
            r8.k c10 = c1.this.f10594b.c();
            try {
                try {
                    za.b c11 = cVar.c(kVar, c10, I.getRotationOptions(), I.getResizeOptions(), null, 85, kVar.s());
                    if (c11.a() != 2) {
                        Map y10 = y(kVar, I.getResizeOptions(), c11, cVar.a());
                        CloseableReference K0 = CloseableReference.K0(c10.a());
                        try {
                            sa.k kVar2 = new sa.k(K0);
                            kVar2.A1(fa.b.f22997b);
                            kVar2.O0();
                            this.f10600e.y().j(this.f10600e, "ResizeAndRotateProducer", y10);
                            if (c11.a() != 1) {
                                i10 |= 16;
                            }
                            o().b(kVar2, i10);
                            sa.k.k(kVar2);
                            CloseableReference.z(K0);
                            c10.close();
                            return;
                        } catch (Throwable th2) {
                            CloseableReference.z(K0);
                            throw th2;
                        }
                    }
                    throw new RuntimeException("Error while transcoding the image");
                } catch (Exception e10) {
                    this.f10600e.y().k(this.f10600e, "ResizeAndRotateProducer", e10, null);
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
            if (cVar != fa.b.f22997b && cVar != fa.b.f23007l) {
                A = z(kVar);
            } else {
                A = A(kVar);
            }
            o().b(A, i10);
        }

        private sa.k x(sa.k kVar, int i10) {
            sa.k g10 = sa.k.g(kVar);
            if (g10 != null) {
                g10.D1(i10);
            }
            return g10;
        }

        private Map y(sa.k kVar, ResizeOptions resizeOptions, za.b bVar, String str) {
            String str2;
            if (!this.f10600e.y().f(this.f10600e, "ResizeAndRotateProducer")) {
                return null;
            }
            String str3 = kVar.getWidth() + "x" + kVar.getHeight();
            if (resizeOptions != null) {
                str2 = resizeOptions.f10346a + "x" + resizeOptions.f10347b;
            } else {
                str2 = "Unspecified";
            }
            HashMap hashMap = new HashMap();
            hashMap.put("Image format", String.valueOf(kVar.z()));
            hashMap.put("Original size", str3);
            hashMap.put("Requested size", str2);
            hashMap.put("queueTime", String.valueOf(this.f10602g.f()));
            hashMap.put("Transcoder id", str);
            hashMap.put("Transcoding result", String.valueOf(bVar));
            return o8.f.a(hashMap);
        }

        private sa.k z(sa.k kVar) {
            RotationOptions rotationOptions = this.f10600e.I().getRotationOptions();
            if (!rotationOptions.j() && rotationOptions.i()) {
                return x(kVar, rotationOptions.h());
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: B */
        public void h(sa.k kVar, int i10) {
            if (!this.f10601f) {
                boolean d10 = c.d(i10);
                if (kVar == null) {
                    if (d10) {
                        o().b(null, 1);
                        return;
                    }
                    return;
                }
                fa.c z10 = kVar.z();
                w8.e h10 = c1.h(this.f10600e.I(), kVar, (za.c) o8.j.g(this.f10599d.createImageTranscoder(z10, this.f10598c)));
                if (d10 || h10 != w8.e.UNSET) {
                    if (h10 != w8.e.YES) {
                        w(kVar, i10, z10);
                    } else if (this.f10602g.k(kVar, i10)) {
                        if (!d10 && !this.f10600e.z()) {
                            return;
                        }
                        this.f10602g.h();
                    }
                }
            }
        }
    }

    public c1(Executor executor, r8.i iVar, w0 w0Var, boolean z10, za.d dVar) {
        this.f10593a = (Executor) o8.j.g(executor);
        this.f10594b = (r8.i) o8.j.g(iVar);
        this.f10595c = (w0) o8.j.g(w0Var);
        this.f10597e = (za.d) o8.j.g(dVar);
        this.f10596d = z10;
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
            return za.e.f56062b.contains(Integer.valueOf(kVar.a1()));
        }
        kVar.x1(0);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static w8.e h(ImageRequest imageRequest, sa.k kVar, za.c cVar) {
        boolean z10;
        if (kVar != null && kVar.z() != fa.c.f23013d) {
            if (!cVar.d(kVar.z())) {
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
        this.f10595c.b(new a(consumer, producerContext, this.f10596d, this.f10597e), producerContext);
    }
}
