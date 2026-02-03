package ms;

import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class s {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39259d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function3 f39260e;

        /* renamed from: ms.s$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0503a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f39261d;

            /* renamed from: e  reason: collision with root package name */
            int f39262e;

            /* renamed from: o  reason: collision with root package name */
            Object f39264o;

            /* renamed from: p  reason: collision with root package name */
            Object f39265p;

            public C0503a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39261d = obj;
                this.f39262e |= Integer.MIN_VALUE;
                return a.this.collect(null, this);
            }
        }

        public a(Flow flow, Function3 function3) {
            this.f39259d = flow;
            this.f39260e = function3;
        }

        /* JADX WARN: Code restructure failed: missing block: B:23:0x006c, code lost:
            if (r6 == r1) goto L21;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0040  */
        /* JADX WARN: Removed duplicated region for block: B:22:0x0057  */
        @Override // kotlinx.coroutines.flow.Flow
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof ms.s.a.C0503a
                if (r0 == 0) goto L13
                r0 = r7
                ms.s$a$a r0 = (ms.s.a.C0503a) r0
                int r1 = r0.f39262e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39262e = r1
                goto L18
            L13:
                ms.s$a$a r0 = new ms.s$a$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f39261d
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39262e
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L40
                if (r2 == r4) goto L34
                if (r2 != r3) goto L2c
                kotlin.c.b(r7)
                goto L6f
            L2c:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L34:
                java.lang.Object r6 = r0.f39265p
                kotlinx.coroutines.flow.FlowCollector r6 = (kotlinx.coroutines.flow.FlowCollector) r6
                java.lang.Object r2 = r0.f39264o
                ms.s$a r2 = (ms.s.a) r2
                kotlin.c.b(r7)
                goto L53
            L40:
                kotlin.c.b(r7)
                kotlinx.coroutines.flow.Flow r7 = r5.f39259d
                r0.f39264o = r5
                r0.f39265p = r6
                r0.f39262e = r4
                java.lang.Object r7 = ms.g.g(r7, r6, r0)
                if (r7 != r1) goto L52
                goto L6e
            L52:
                r2 = r5
            L53:
                java.lang.Throwable r7 = (java.lang.Throwable) r7
                if (r7 == 0) goto L6f
                kotlin.jvm.functions.Function3 r2 = r2.f39260e
                r4 = 0
                r0.f39264o = r4
                r0.f39265p = r4
                r0.f39262e = r3
                r3 = 6
                kotlin.jvm.internal.InlineMarker.mark(r3)
                java.lang.Object r6 = r2.invoke(r6, r7, r0)
                r7 = 7
                kotlin.jvm.internal.InlineMarker.mark(r7)
                if (r6 != r1) goto L6f
            L6e:
                return r1
            L6f:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.s.a.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f39266d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f39267e;

        /* renamed from: i  reason: collision with root package name */
        int f39268i;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39267e = obj;
            this.f39268i |= Integer.MIN_VALUE;
            return g.g(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ FlowCollector f39269d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f39270e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f39271d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f39272e;

            /* renamed from: o  reason: collision with root package name */
            int f39274o;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39272e = obj;
                this.f39274o |= Integer.MIN_VALUE;
                return c.this.emit(null, this);
            }
        }

        c(FlowCollector flowCollector, Ref.ObjectRef objectRef) {
            this.f39269d = flowCollector;
            this.f39270e = objectRef;
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
        /* JADX WARN: Type inference failed for: r6v2, types: [java.lang.Throwable] */
        /* JADX WARN: Type inference failed for: r6v4, types: [java.lang.Throwable, T] */
        /* JADX WARN: Type inference failed for: r6v6, types: [java.lang.Throwable] */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
            /*
                r4 = this;
                boolean r0 = r6 instanceof ms.s.c.a
                if (r0 == 0) goto L13
                r0 = r6
                ms.s$c$a r0 = (ms.s.c.a) r0
                int r1 = r0.f39274o
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39274o = r1
                goto L18
            L13:
                ms.s$c$a r0 = new ms.s$c$a
                r0.<init>(r6)
            L18:
                java.lang.Object r6 = r0.f39272e
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39274o
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r5 = r0.f39271d
                ms.s$c r5 = (ms.s.c) r5
                kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L2d
                goto L47
            L2d:
                r6 = move-exception
                goto L4c
            L2f:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r6)
                throw r5
            L37:
                kotlin.c.b(r6)
                kotlinx.coroutines.flow.FlowCollector r6 = r4.f39269d     // Catch: java.lang.Throwable -> L4a
                r0.f39271d = r4     // Catch: java.lang.Throwable -> L4a
                r0.f39274o = r3     // Catch: java.lang.Throwable -> L4a
                java.lang.Object r5 = r6.emit(r5, r0)     // Catch: java.lang.Throwable -> L4a
                if (r5 != r1) goto L47
                return r1
            L47:
                kotlin.Unit r5 = kotlin.Unit.f32464a
                return r5
            L4a:
                r6 = move-exception
                r5 = r4
            L4c:
                kotlin.jvm.internal.Ref$ObjectRef r5 = r5.f39270e
                r5.element = r6
                throw r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.s.c.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    public static final Flow a(Flow flow, Function3 function3) {
        return new a(flow, function3);
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object b(kotlinx.coroutines.flow.Flow r4, kotlinx.coroutines.flow.FlowCollector r5, kotlin.coroutines.Continuation r6) {
        /*
            boolean r0 = r6 instanceof ms.s.b
            if (r0 == 0) goto L13
            r0 = r6
            ms.s$b r0 = (ms.s.b) r0
            int r1 = r0.f39268i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f39268i = r1
            goto L18
        L13:
            ms.s$b r0 = new ms.s$b
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f39267e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f39268i
            r3 = 1
            if (r2 == 0) goto L37
            if (r2 != r3) goto L2f
            java.lang.Object r4 = r0.f39266d
            kotlin.jvm.internal.Ref$ObjectRef r4 = (kotlin.jvm.internal.Ref.ObjectRef) r4
            kotlin.c.b(r6)     // Catch: java.lang.Throwable -> L2d
            goto L4f
        L2d:
            r5 = move-exception
            goto L53
        L2f:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L37:
            kotlin.c.b(r6)
            kotlin.jvm.internal.Ref$ObjectRef r6 = new kotlin.jvm.internal.Ref$ObjectRef
            r6.<init>()
            ms.s$c r2 = new ms.s$c     // Catch: java.lang.Throwable -> L51
            r2.<init>(r5, r6)     // Catch: java.lang.Throwable -> L51
            r0.f39266d = r6     // Catch: java.lang.Throwable -> L51
            r0.f39268i = r3     // Catch: java.lang.Throwable -> L51
            java.lang.Object r4 = r4.collect(r2, r0)     // Catch: java.lang.Throwable -> L51
            if (r4 != r1) goto L4f
            return r1
        L4f:
            r4 = 0
            return r4
        L51:
            r5 = move-exception
            r4 = r6
        L53:
            T r4 = r4.element
            java.lang.Throwable r4 = (java.lang.Throwable) r4
            boolean r6 = d(r5, r4)
            if (r6 != 0) goto L76
            kotlin.coroutines.CoroutineContext r6 = r0.getContext()
            boolean r6 = c(r5, r6)
            if (r6 != 0) goto L76
            if (r4 != 0) goto L6a
            return r5
        L6a:
            boolean r6 = r5 instanceof java.util.concurrent.CancellationException
            if (r6 == 0) goto L72
            lr.e.a(r4, r5)
            throw r4
        L72:
            lr.e.a(r5, r4)
            throw r5
        L76:
            throw r5
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.s.b(kotlinx.coroutines.flow.Flow, kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
    }

    private static final boolean c(Throwable th2, CoroutineContext coroutineContext) {
        Job job = (Job) coroutineContext.l(Job.f35473h);
        if (job != null && job.isCancelled()) {
            return d(th2, job.N());
        }
        return false;
    }

    private static final boolean d(Throwable th2, Throwable th3) {
        if (th3 != null && Intrinsics.areEqual(th3, th2)) {
            return true;
        }
        return false;
    }
}
