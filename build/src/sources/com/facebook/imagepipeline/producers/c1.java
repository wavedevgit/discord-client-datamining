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
    private final Executor f11311a;

    /* renamed from: b  reason: collision with root package name */
    private final s8.i f11312b;

    /* renamed from: c  reason: collision with root package name */
    private final w0 f11313c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f11314d;

    /* renamed from: e  reason: collision with root package name */
    private final ab.d f11315e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class a extends s {

        /* renamed from: c  reason: collision with root package name */
        private final boolean f11316c;

        /* renamed from: d  reason: collision with root package name */
        private final ab.d f11317d;

        /* renamed from: e  reason: collision with root package name */
        private final ProducerContext f11318e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f11319f;

        /* renamed from: g  reason: collision with root package name */
        private final e0 f11320g;

        /* renamed from: com.facebook.imagepipeline.producers.c1$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class C0157a implements e0.d {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f11322a;

            C0157a(c1 c1Var) {
                this.f11322a = c1Var;
            }

            @Override // com.facebook.imagepipeline.producers.e0.d
            public void a(ta.k kVar, int i10) {
                if (kVar != null) {
                    a aVar = a.this;
                    aVar.v(kVar, i10, (ab.c) p8.j.g(aVar.f11317d.createImageTranscoder(kVar.z(), a.this.f11316c)));
                    return;
                }
                a.this.o().b(null, i10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        class b extends f {

            /* renamed from: a  reason: collision with root package name */
            final /* synthetic */ c1 f11324a;

            /* renamed from: b  reason: collision with root package name */
            final /* synthetic */ Consumer f11325b;

            b(c1 c1Var, Consumer consumer) {
                this.f11324a = c1Var;
                this.f11325b = consumer;
            }

            @Override // com.facebook.imagepipeline.producers.f, com.facebook.imagepipeline.producers.x0
            public void a() {
                if (a.this.f11318e.z()) {
                    a.this.f11320g.h();
                }
            }

            @Override // com.facebook.imagepipeline.producers.x0
            public void b() {
                a.this.f11320g.c();
                a.this.f11319f = true;
                this.f11325b.a();
            }
        }

        a(Consumer consumer, ProducerContext producerContext, boolean z10, ab.d dVar) {
            super(consumer);
            this.f11319f = false;
            this.f11318e = producerContext;
            Boolean resizingAllowedOverride = producerContext.I().getResizingAllowedOverride();
            this.f11316c = resizingAllowedOverride != null ? resizingAllowedOverride.booleanValue() : z10;
            this.f11317d = dVar;
            this.f11320g = new e0(c1.this.f11311a, new C0157a(c1.this), 100);
            producerContext.h(new b(c1.this, consumer));
        }

        private ta.k A(ta.k kVar) {
            if (!this.f11318e.I().getRotationOptions().f() && kVar.q1() != 0 && kVar.q1() != -1) {
                return x(kVar, 0);
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void v(ta.k kVar, int i10, ab.c cVar) {
            this.f11318e.y().d(this.f11318e, "ResizeAndRotateProducer");
            ImageRequest I = this.f11318e.I();
            s8.k c10 = c1.this.f11312b.c();
            try {
                try {
                    ab.b c11 = cVar.c(kVar, c10, I.getRotationOptions(), I.getResizeOptions(), null, 85, kVar.s());
                    if (c11.a() != 2) {
                        Map y10 = y(kVar, I.getResizeOptions(), c11, cVar.a());
                        CloseableReference E0 = CloseableReference.E0(c10.a());
                        try {
                            ta.k kVar2 = new ta.k(E0);
                            kVar2.b1(ga.b.f25383b);
                            kVar2.L0();
                            this.f11318e.y().j(this.f11318e, "ResizeAndRotateProducer", y10);
                            if (c11.a() != 1) {
                                i10 |= 16;
                            }
                            o().b(kVar2, i10);
                            ta.k.i(kVar2);
                            CloseableReference.z(E0);
                            c10.close();
                            return;
                        } catch (Throwable th2) {
                            CloseableReference.z(E0);
                            throw th2;
                        }
                    }
                    throw new RuntimeException("Error while transcoding the image");
                } catch (Exception e10) {
                    this.f11318e.y().k(this.f11318e, "ResizeAndRotateProducer", e10, null);
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
            if (cVar != ga.b.f25383b && cVar != ga.b.f25393l) {
                A = z(kVar);
            } else {
                A = A(kVar);
            }
            o().b(A, i10);
        }

        private ta.k x(ta.k kVar, int i10) {
            ta.k h10 = ta.k.h(kVar);
            if (h10 != null) {
                h10.f1(i10);
            }
            return h10;
        }

        private Map y(ta.k kVar, ResizeOptions resizeOptions, ab.b bVar, String str) {
            String str2;
            if (!this.f11318e.y().f(this.f11318e, "ResizeAndRotateProducer")) {
                return null;
            }
            String str3 = kVar.getWidth() + "x" + kVar.getHeight();
            if (resizeOptions != null) {
                str2 = resizeOptions.f11064a + "x" + resizeOptions.f11065b;
            } else {
                str2 = "Unspecified";
            }
            HashMap hashMap = new HashMap();
            hashMap.put("Image format", String.valueOf(kVar.z()));
            hashMap.put("Original size", str3);
            hashMap.put("Requested size", str2);
            hashMap.put("queueTime", String.valueOf(this.f11320g.f()));
            hashMap.put("Transcoder id", str);
            hashMap.put("Transcoding result", String.valueOf(bVar));
            return p8.f.a(hashMap);
        }

        private ta.k z(ta.k kVar) {
            RotationOptions rotationOptions = this.f11318e.I().getRotationOptions();
            if (!rotationOptions.j() && rotationOptions.i()) {
                return x(kVar, rotationOptions.h());
            }
            return kVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.c
        /* renamed from: B */
        public void h(ta.k kVar, int i10) {
            if (!this.f11319f) {
                boolean d10 = c.d(i10);
                if (kVar == null) {
                    if (d10) {
                        o().b(null, 1);
                        return;
                    }
                    return;
                }
                ga.c z10 = kVar.z();
                x8.e h10 = c1.h(this.f11318e.I(), kVar, (ab.c) p8.j.g(this.f11317d.createImageTranscoder(z10, this.f11316c)));
                if (d10 || h10 != x8.e.UNSET) {
                    if (h10 != x8.e.YES) {
                        w(kVar, i10, z10);
                    } else if (this.f11320g.k(kVar, i10)) {
                        if (!d10 && !this.f11318e.z()) {
                            return;
                        }
                        this.f11320g.h();
                    }
                }
            }
        }
    }

    public c1(Executor executor, s8.i iVar, w0 w0Var, boolean z10, ab.d dVar) {
        this.f11311a = (Executor) p8.j.g(executor);
        this.f11312b = (s8.i) p8.j.g(iVar);
        this.f11313c = (w0) p8.j.g(w0Var);
        this.f11315e = (ab.d) p8.j.g(dVar);
        this.f11314d = z10;
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
            return ab.e.f530b.contains(Integer.valueOf(kVar.c1()));
        }
        kVar.Z0(0);
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static x8.e h(ImageRequest imageRequest, ta.k kVar, ab.c cVar) {
        boolean z10;
        if (kVar != null && kVar.z() != ga.c.f25399d) {
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
        this.f11313c.b(new a(consumer, producerContext, this.f11314d, this.f11315e), producerContext);
    }
}
