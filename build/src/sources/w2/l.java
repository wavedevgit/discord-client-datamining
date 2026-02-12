package w2;

import at.k;
import at.q;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final CoroutineScope f52128a;

    /* renamed from: b  reason: collision with root package name */
    private final Function2 f52129b;

    /* renamed from: c  reason: collision with root package name */
    private final at.g f52130c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicInteger f52131d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f52132d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ l f52133e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f52134i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function1 function1, l lVar, Function2 function2) {
            super(1);
            this.f52132d = function1;
            this.f52133e = lVar;
            this.f52134i = function2;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f31988a;
        }

        public final void invoke(Throwable th2) {
            Unit unit;
            this.f52132d.invoke(th2);
            this.f52133e.f52130c.v(th2);
            do {
                Object f10 = at.k.f(this.f52133e.f52130c.o());
                if (f10 == null) {
                    unit = null;
                    continue;
                } else {
                    this.f52134i.invoke(f10, th2);
                    unit = Unit.f31988a;
                    continue;
                }
            } while (unit != null);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f52135d;

        /* renamed from: e  reason: collision with root package name */
        int f52136e;

        b(Continuation continuation) {
            super(2, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new b(continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:16:0x0053, code lost:
            if (r6 != r0) goto L10;
         */
        /* JADX WARN: Code restructure failed: missing block: B:19:0x005f, code lost:
            if (r1.invoke(r6, r5) == r0) goto L12;
         */
        /* JADX WARN: Code restructure failed: missing block: B:20:0x0061, code lost:
            return r0;
         */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:19:0x005f -> B:21:0x0062). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r6) {
            /*
                r5 = this;
                java.lang.Object r0 = gs.b.f()
                int r1 = r5.f52136e
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L22
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r6)
                goto L62
            L12:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r0)
                throw r6
            L1a:
                java.lang.Object r1 = r5.f52135d
                kotlin.jvm.functions.Function2 r1 = (kotlin.jvm.functions.Function2) r1
                kotlin.c.b(r6)
                goto L56
            L22:
                kotlin.c.b(r6)
                w2.l r6 = w2.l.this
                java.util.concurrent.atomic.AtomicInteger r6 = w2.l.c(r6)
                int r6 = r6.get()
                if (r6 <= 0) goto L33
                r6 = r3
                goto L34
            L33:
                r6 = 0
            L34:
                if (r6 == 0) goto L71
            L36:
                w2.l r6 = w2.l.this
                kotlinx.coroutines.CoroutineScope r6 = w2.l.d(r6)
                kotlinx.coroutines.i.h(r6)
                w2.l r6 = w2.l.this
                kotlin.jvm.functions.Function2 r1 = w2.l.a(r6)
                w2.l r6 = w2.l.this
                at.g r6 = w2.l.b(r6)
                r5.f52135d = r1
                r5.f52136e = r3
                java.lang.Object r6 = r6.u(r5)
                if (r6 != r0) goto L56
                goto L61
            L56:
                r4 = 0
                r5.f52135d = r4
                r5.f52136e = r2
                java.lang.Object r6 = r1.invoke(r6, r5)
                if (r6 != r0) goto L62
            L61:
                return r0
            L62:
                w2.l r6 = w2.l.this
                java.util.concurrent.atomic.AtomicInteger r6 = w2.l.c(r6)
                int r6 = r6.decrementAndGet()
                if (r6 != 0) goto L36
                kotlin.Unit r6 = kotlin.Unit.f31988a
                return r6
            L71:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r0 = "Check failed."
                r6.<init>(r0)
                throw r6
            */
            throw new UnsupportedOperationException("Method not decompiled: w2.l.b.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public l(CoroutineScope scope, Function1 onComplete, Function2 onUndeliveredElement, Function2 consumeMessage) {
        Intrinsics.checkNotNullParameter(scope, "scope");
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        Intrinsics.checkNotNullParameter(onUndeliveredElement, "onUndeliveredElement");
        Intrinsics.checkNotNullParameter(consumeMessage, "consumeMessage");
        this.f52128a = scope;
        this.f52129b = consumeMessage;
        this.f52130c = at.j.b(Integer.MAX_VALUE, null, null, 6, null);
        this.f52131d = new AtomicInteger(0);
        Job job = (Job) scope.getCoroutineContext().m(Job.f34997k);
        if (job == null) {
            return;
        }
        job.z0(new a(onComplete, this, onUndeliveredElement));
    }

    public final void e(Object obj) {
        Object d10 = this.f52130c.d(obj);
        if (d10 instanceof k.a) {
            Throwable e10 = at.k.e(d10);
            if (e10 == null) {
                throw new q("Channel was closed normally");
            }
        } else if (at.k.i(d10)) {
            if (this.f52131d.getAndIncrement() == 0) {
                ys.i.d(this.f52128a, null, null, new b(null), 3, null);
            }
        } else {
            throw new IllegalStateException("Check failed.");
        }
    }
}
