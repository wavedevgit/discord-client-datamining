package com.facebook.imagepipeline.producers;

import android.os.Looper;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 implements w0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a f11374c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11375a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f11376b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String c(ProducerContext producerContext) {
            if (ua.a.b()) {
                String id2 = producerContext.getId();
                return "ThreadHandoffProducer_produceResults_" + id2;
            }
            return null;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean d(ProducerContext producerContext) {
            if (!producerContext.i().G().k() || Looper.getMainLooper().getThread() == Thread.currentThread()) {
                return false;
            }
            return true;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends f {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ e1 f11377a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g1 f11378b;

        b(e1 e1Var, g1 g1Var) {
            this.f11377a = e1Var;
            this.f11378b = g1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f11377a.a();
            this.f11378b.d().a(this.f11377a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Consumer f11379q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f11380r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f11381s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g1 f11382t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Consumer consumer, y0 y0Var, ProducerContext producerContext, g1 g1Var) {
            super(consumer, y0Var, producerContext, "BackgroundThreadHandoffProducer");
            this.f11379q = consumer;
            this.f11380r = y0Var;
            this.f11381s = producerContext;
            this.f11382t = g1Var;
        }

        @Override // n8.h
        protected void b(Object obj) {
        }

        @Override // n8.h
        protected Object c() {
            return null;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, n8.h
        public void f(Object obj) {
            this.f11380r.j(this.f11381s, "BackgroundThreadHandoffProducer", null);
            this.f11382t.c().b(this.f11379q, this.f11381s);
        }
    }

    public g1(w0 inputProducer, h1 threadHandoffProducerQueue) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        Intrinsics.checkNotNullParameter(threadHandoffProducerQueue, "threadHandoffProducerQueue");
        this.f11375a = inputProducer;
        this.f11376b = threadHandoffProducerQueue;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!za.b.d()) {
            y0 y10 = context.y();
            a aVar = f11374c;
            if (aVar.d(context)) {
                y10.d(context, "BackgroundThreadHandoffProducer");
                y10.j(context, "BackgroundThreadHandoffProducer", null);
                this.f11375a.b(consumer, context);
                return;
            }
            c cVar = new c(consumer, y10, context, this);
            context.h(new b(cVar, this));
            this.f11376b.b(ua.a.a(cVar, aVar.c(context)));
            return;
        }
        za.b.a("ThreadHandoffProducer#produceResults");
        try {
            y0 y11 = context.y();
            a aVar2 = f11374c;
            if (aVar2.d(context)) {
                y11.d(context, "BackgroundThreadHandoffProducer");
                y11.j(context, "BackgroundThreadHandoffProducer", null);
                this.f11375a.b(consumer, context);
                return;
            }
            c cVar2 = new c(consumer, y11, context, this);
            context.h(new b(cVar2, this));
            this.f11376b.b(ua.a.a(cVar2, aVar2.c(context)));
            Unit unit = Unit.f31987a;
        } finally {
            za.b.b();
        }
    }

    public final w0 c() {
        return this.f11375a;
    }

    public final h1 d() {
        return this.f11376b;
    }
}
