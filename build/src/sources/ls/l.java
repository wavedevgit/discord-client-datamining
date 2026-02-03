package ls;

import java.util.concurrent.atomic.AtomicInteger;
import js.w;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        Object f37585d;

        /* renamed from: e  reason: collision with root package name */
        Object f37586e;

        /* renamed from: i  reason: collision with root package name */
        int f37587i;

        /* renamed from: o  reason: collision with root package name */
        int f37588o;

        /* renamed from: p  reason: collision with root package name */
        int f37589p;

        /* renamed from: q  reason: collision with root package name */
        private /* synthetic */ Object f37590q;

        /* renamed from: r  reason: collision with root package name */
        final /* synthetic */ Flow[] f37591r;

        /* renamed from: s  reason: collision with root package name */
        final /* synthetic */ Function0 f37592s;

        /* renamed from: t  reason: collision with root package name */
        final /* synthetic */ Function3 f37593t;

        /* renamed from: u  reason: collision with root package name */
        final /* synthetic */ FlowCollector f37594u;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ls.l$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0491a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f37595d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Flow[] f37596e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ int f37597i;

            /* renamed from: o  reason: collision with root package name */
            final /* synthetic */ AtomicInteger f37598o;

            /* renamed from: p  reason: collision with root package name */
            final /* synthetic */ js.g f37599p;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ls.l$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0492a implements FlowCollector {

                /* renamed from: d  reason: collision with root package name */
                final /* synthetic */ js.g f37600d;

                /* renamed from: e  reason: collision with root package name */
                final /* synthetic */ int f37601e;

                /* JADX INFO: Access modifiers changed from: package-private */
                /* renamed from: ls.l$a$a$a$a  reason: collision with other inner class name */
                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class C0493a extends kotlin.coroutines.jvm.internal.d {

                    /* renamed from: d  reason: collision with root package name */
                    /* synthetic */ Object f37602d;

                    /* renamed from: i  reason: collision with root package name */
                    int f37604i;

                    C0493a(Continuation continuation) {
                        super(continuation);
                    }

                    @Override // kotlin.coroutines.jvm.internal.a
                    public final Object invokeSuspend(Object obj) {
                        this.f37602d = obj;
                        this.f37604i |= Integer.MIN_VALUE;
                        return C0492a.this.emit(null, this);
                    }
                }

                C0492a(js.g gVar, int i10) {
                    this.f37600d = gVar;
                    this.f37601e = i10;
                }

                /* JADX WARN: Code restructure failed: missing block: B:17:0x004a, code lost:
                    if (r8.u(r2, r0) == r1) goto L19;
                 */
                /* JADX WARN: Code restructure failed: missing block: B:20:0x0053, code lost:
                    if (hs.x1.a(r0) != r1) goto L11;
                 */
                /* JADX WARN: Code restructure failed: missing block: B:21:0x0055, code lost:
                    return r1;
                 */
                /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
                /* JADX WARN: Removed duplicated region for block: B:16:0x0038  */
                @Override // kotlinx.coroutines.flow.FlowCollector
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public final java.lang.Object emit(java.lang.Object r7, kotlin.coroutines.Continuation r8) {
                    /*
                        r6 = this;
                        boolean r0 = r8 instanceof ls.l.a.C0491a.C0492a.C0493a
                        if (r0 == 0) goto L13
                        r0 = r8
                        ls.l$a$a$a$a r0 = (ls.l.a.C0491a.C0492a.C0493a) r0
                        int r1 = r0.f37604i
                        r2 = -2147483648(0xffffffff80000000, float:-0.0)
                        r3 = r1 & r2
                        if (r3 == 0) goto L13
                        int r1 = r1 - r2
                        r0.f37604i = r1
                        goto L18
                    L13:
                        ls.l$a$a$a$a r0 = new ls.l$a$a$a$a
                        r0.<init>(r8)
                    L18:
                        java.lang.Object r8 = r0.f37602d
                        java.lang.Object r1 = pr.b.f()
                        int r2 = r0.f37604i
                        r3 = 2
                        r4 = 1
                        if (r2 == 0) goto L38
                        if (r2 == r4) goto L34
                        if (r2 != r3) goto L2c
                        kotlin.c.b(r8)
                        goto L56
                    L2c:
                        java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                        java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
                        r7.<init>(r8)
                        throw r7
                    L34:
                        kotlin.c.b(r8)
                        goto L4d
                    L38:
                        kotlin.c.b(r8)
                        js.g r8 = r6.f37600d
                        kotlin.collections.IndexedValue r2 = new kotlin.collections.IndexedValue
                        int r5 = r6.f37601e
                        r2.<init>(r5, r7)
                        r0.f37604i = r4
                        java.lang.Object r7 = r8.u(r2, r0)
                        if (r7 != r1) goto L4d
                        goto L55
                    L4d:
                        r0.f37604i = r3
                        java.lang.Object r7 = hs.x1.a(r0)
                        if (r7 != r1) goto L56
                    L55:
                        return r1
                    L56:
                        kotlin.Unit r7 = kotlin.Unit.f33074a
                        return r7
                    */
                    throw new UnsupportedOperationException("Method not decompiled: ls.l.a.C0491a.C0492a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0491a(Flow[] flowArr, int i10, AtomicInteger atomicInteger, js.g gVar, Continuation continuation) {
                super(2, continuation);
                this.f37596e = flowArr;
                this.f37597i = i10;
                this.f37598o = atomicInteger;
                this.f37599p = gVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0491a(this.f37596e, this.f37597i, this.f37598o, this.f37599p, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                AtomicInteger atomicInteger;
                Object f10 = pr.b.f();
                int i10 = this.f37595d;
                try {
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        kotlin.c.b(obj);
                        Flow[] flowArr = this.f37596e;
                        int i11 = this.f37597i;
                        Flow flow = flowArr[i11];
                        C0492a c0492a = new C0492a(this.f37599p, i11);
                        this.f37595d = 1;
                        if (flow.collect(c0492a, this) == f10) {
                            return f10;
                        }
                    }
                    if (atomicInteger.decrementAndGet() == 0) {
                        w.a.a(this.f37599p, null, 1, null);
                    }
                    return Unit.f33074a;
                } finally {
                    if (this.f37598o.decrementAndGet() == 0) {
                        w.a.a(this.f37599p, null, 1, null);
                    }
                }
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0491a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Flow[] flowArr, Function0 function0, Function3 function3, FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f37591r = flowArr;
            this.f37592s = function0;
            this.f37593t = function3;
            this.f37594u = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f37591r, this.f37592s, this.f37593t, this.f37594u, continuation);
            aVar.f37590q = obj;
            return aVar;
        }

        /* JADX WARN: Code restructure failed: missing block: B:39:0x0106, code lost:
            if (r10.invoke(r11, r9, r21) == r1) goto L34;
         */
        /* JADX WARN: Code restructure failed: missing block: B:42:0x0126, code lost:
            if (r11.invoke(r12, r10, r21) == r1) goto L34;
         */
        /* JADX WARN: Removed duplicated region for block: B:23:0x00af  */
        /* JADX WARN: Removed duplicated region for block: B:26:0x00be  */
        /* JADX WARN: Removed duplicated region for block: B:28:0x00c1 A[LOOP:0: B:28:0x00c1->B:34:0x00e4, LOOP_START, PHI: r6 r10 
          PHI: (r6v4 int) = (r6v3 int), (r6v5 int) binds: [B:25:0x00bc, B:34:0x00e4] A[DONT_GENERATE, DONT_INLINE]
          PHI: (r10v5 kotlin.collections.IndexedValue) = (r10v4 kotlin.collections.IndexedValue), (r10v18 kotlin.collections.IndexedValue) binds: [B:25:0x00bc, B:34:0x00e4] A[DONT_GENERATE, DONT_INLINE]] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:35:0x00e6 -> B:44:0x0129). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:39:0x0106 -> B:44:0x0129). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:42:0x0126 -> B:44:0x0129). Please submit an issue!!! */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r22) {
            /*
                Method dump skipped, instructions count: 304
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: ls.l.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    public static final Object a(FlowCollector flowCollector, Flow[] flowArr, Function0 function0, Function3 function3, Continuation continuation) {
        Object a10 = o.a(new a(flowArr, function0, function3, flowCollector, null), continuation);
        if (a10 == pr.b.f()) {
            return a10;
        }
        return Unit.f33074a;
    }
}
