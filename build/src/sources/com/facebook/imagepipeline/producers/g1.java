package com.facebook.imagepipeline.producers;

import android.os.Looper;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 implements w0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a f10797c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10798a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f10799b;

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
            if (!producerContext.k().G().k() || Looper.getMainLooper().getThread() == Thread.currentThread()) {
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
        final /* synthetic */ e1 f10800a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g1 f10801b;

        b(e1 e1Var, g1 g1Var) {
            this.f10800a = e1Var;
            this.f10801b = g1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10800a.a();
            this.f10801b.d().a(this.f10800a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Consumer f10802q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f10803r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10804s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g1 f10805t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Consumer consumer, y0 y0Var, ProducerContext producerContext, g1 g1Var) {
            super(consumer, y0Var, producerContext, "BackgroundThreadHandoffProducer");
            this.f10802q = consumer;
            this.f10803r = y0Var;
            this.f10804s = producerContext;
            this.f10805t = g1Var;
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
            this.f10803r.j(this.f10804s, "BackgroundThreadHandoffProducer", null);
            this.f10805t.c().b(this.f10802q, this.f10804s);
        }
    }

    public g1(w0 inputProducer, h1 threadHandoffProducerQueue) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        Intrinsics.checkNotNullParameter(threadHandoffProducerQueue, "threadHandoffProducerQueue");
        this.f10798a = inputProducer;
        this.f10799b = threadHandoffProducerQueue;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!za.b.d()) {
            y0 y10 = context.y();
            a aVar = f10797c;
            if (aVar.d(context)) {
                y10.d(context, "BackgroundThreadHandoffProducer");
                y10.j(context, "BackgroundThreadHandoffProducer", null);
                this.f10798a.b(consumer, context);
                return;
            }
            c cVar = new c(consumer, y10, context, this);
            context.g(new b(cVar, this));
            this.f10799b.b(ua.a.a(cVar, aVar.c(context)));
            return;
        }
        za.b.a("ThreadHandoffProducer#produceResults");
        try {
            y0 y11 = context.y();
            a aVar2 = f10797c;
            if (aVar2.d(context)) {
                y11.d(context, "BackgroundThreadHandoffProducer");
                y11.j(context, "BackgroundThreadHandoffProducer", null);
                this.f10798a.b(consumer, context);
                return;
            }
            c cVar2 = new c(consumer, y11, context, this);
            context.g(new b(cVar2, this));
            this.f10799b.b(ua.a.a(cVar2, aVar2.c(context)));
            Unit unit = Unit.f31765a;
        } finally {
            za.b.b();
        }
    }

    public final w0 c() {
        return this.f10798a;
    }

    public final h1 d() {
        return this.f10799b;
    }
}
