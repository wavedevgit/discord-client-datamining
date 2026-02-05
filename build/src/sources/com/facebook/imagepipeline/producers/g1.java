package com.facebook.imagepipeline.producers;

import android.os.Looper;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g1 implements w0 {

    /* renamed from: c  reason: collision with root package name */
    public static final a f10758c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final w0 f10759a;

    /* renamed from: b  reason: collision with root package name */
    private final h1 f10760b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String c(ProducerContext producerContext) {
            if (ta.a.b()) {
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
        final /* synthetic */ e1 f10761a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ g1 f10762b;

        b(e1 e1Var, g1 g1Var) {
            this.f10761a = e1Var;
            this.f10762b = g1Var;
        }

        @Override // com.facebook.imagepipeline.producers.x0
        public void b() {
            this.f10761a.a();
            this.f10762b.d().a(this.f10761a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends e1 {

        /* renamed from: q  reason: collision with root package name */
        final /* synthetic */ Consumer f10763q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ y0 f10764r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ ProducerContext f10765s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ g1 f10766t;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Consumer consumer, y0 y0Var, ProducerContext producerContext, g1 g1Var) {
            super(consumer, y0Var, producerContext, "BackgroundThreadHandoffProducer");
            this.f10763q = consumer;
            this.f10764r = y0Var;
            this.f10765s = producerContext;
            this.f10766t = g1Var;
        }

        @Override // m8.h
        protected void b(Object obj) {
        }

        @Override // m8.h
        protected Object c() {
            return null;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // com.facebook.imagepipeline.producers.e1, m8.h
        public void f(Object obj) {
            this.f10764r.j(this.f10765s, "BackgroundThreadHandoffProducer", null);
            this.f10766t.c().b(this.f10763q, this.f10765s);
        }
    }

    public g1(w0 inputProducer, h1 threadHandoffProducerQueue) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        Intrinsics.checkNotNullParameter(threadHandoffProducerQueue, "threadHandoffProducerQueue");
        this.f10759a = inputProducer;
        this.f10760b = threadHandoffProducerQueue;
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(Consumer consumer, ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        if (!ya.b.d()) {
            y0 F = context.F();
            a aVar = f10758c;
            if (aVar.d(context)) {
                F.d(context, "BackgroundThreadHandoffProducer");
                F.j(context, "BackgroundThreadHandoffProducer", null);
                this.f10759a.b(consumer, context);
                return;
            }
            c cVar = new c(consumer, F, context, this);
            context.h(new b(cVar, this));
            this.f10760b.b(ta.a.a(cVar, aVar.c(context)));
            return;
        }
        ya.b.a("ThreadHandoffProducer#produceResults");
        try {
            y0 F2 = context.F();
            a aVar2 = f10758c;
            if (aVar2.d(context)) {
                F2.d(context, "BackgroundThreadHandoffProducer");
                F2.j(context, "BackgroundThreadHandoffProducer", null);
                this.f10759a.b(consumer, context);
                return;
            }
            c cVar2 = new c(consumer, F2, context, this);
            context.h(new b(cVar2, this));
            this.f10760b.b(ta.a.a(cVar2, aVar2.c(context)));
            Unit unit = Unit.f31988a;
        } finally {
            ya.b.b();
        }
    }

    public final w0 c() {
        return this.f10759a;
    }

    public final h1 d() {
        return this.f10760b;
    }
}
