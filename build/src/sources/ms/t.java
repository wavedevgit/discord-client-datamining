package ms;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class t {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39275d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f39276e;

        public a(Flow flow, int i10) {
            this.f39275d = flow;
            this.f39276e = i10;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f39275d.collect(new b(new Ref.IntRef(), this.f39276e, flowCollector), continuation);
            if (collect == rr.b.f()) {
                return collect;
            }
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f39277d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f39278e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f39279i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f39280d;

            /* renamed from: i  reason: collision with root package name */
            int f39282i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39280d = obj;
                this.f39282i |= Integer.MIN_VALUE;
                return b.this.emit(null, this);
            }
        }

        b(Ref.IntRef intRef, int i10, FlowCollector flowCollector) {
            this.f39277d = intRef;
            this.f39278e = i10;
            this.f39279i = flowCollector;
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof ms.t.b.a
                if (r0 == 0) goto L13
                r0 = r7
                ms.t$b$a r0 = (ms.t.b.a) r0
                int r1 = r0.f39282i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39282i = r1
                goto L18
            L13:
                ms.t$b$a r0 = new ms.t$b$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f39280d
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39282i
                r3 = 1
                if (r2 == 0) goto L31
                if (r2 != r3) goto L29
                kotlin.c.b(r7)
                goto L47
            L29:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L31:
                kotlin.c.b(r7)
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f39277d
                int r2 = r7.element
                int r4 = r5.f39278e
                if (r2 < r4) goto L4a
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f39279i
                r0.f39282i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L47
                return r1
            L47:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            L4a:
                int r2 = r2 + r3
                r7.element = r2
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.b.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39283d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f39284e;

        public c(Flow flow, Function2 function2) {
            this.f39283d = flow;
            this.f39284e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f39283d.collect(new d(new Ref.BooleanRef(), flowCollector, this.f39284e), continuation);
            if (collect == rr.b.f()) {
                return collect;
            }
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f39285d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f39286e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f39287i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f39288d;

            /* renamed from: e  reason: collision with root package name */
            Object f39289e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f39290i;

            /* renamed from: p  reason: collision with root package name */
            int f39292p;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39290i = obj;
                this.f39292p |= Integer.MIN_VALUE;
                return d.this.emit(null, this);
            }
        }

        d(Ref.BooleanRef booleanRef, FlowCollector flowCollector, Function2 function2) {
            this.f39285d = booleanRef;
            this.f39286e = flowCollector;
            this.f39287i = function2;
        }

        /* JADX WARN: Code restructure failed: missing block: B:21:0x0056, code lost:
            if (r8.emit(r7, r0) == r1) goto L22;
         */
        /* JADX WARN: Code restructure failed: missing block: B:32:0x0085, code lost:
            if (r8.emit(r7, r0) == r1) goto L22;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0025  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0045  */
        /* JADX WARN: Removed duplicated region for block: B:31:0x0074  */
        /* JADX WARN: Removed duplicated region for block: B:36:0x008b  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r7, kotlin.coroutines.Continuation r8) {
            /*
                r6 = this;
                boolean r0 = r8 instanceof ms.t.d.a
                if (r0 == 0) goto L13
                r0 = r8
                ms.t$d$a r0 = (ms.t.d.a) r0
                int r1 = r0.f39292p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39292p = r1
                goto L18
            L13:
                ms.t$d$a r0 = new ms.t$d$a
                r0.<init>(r8)
            L18:
                java.lang.Object r8 = r0.f39290i
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39292p
                r3 = 3
                r4 = 2
                r5 = 1
                if (r2 == 0) goto L45
                if (r2 == r5) goto L41
                if (r2 == r4) goto L37
                if (r2 != r3) goto L2f
                kotlin.c.b(r8)
                goto L88
            L2f:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r8)
                throw r7
            L37:
                java.lang.Object r7 = r0.f39289e
                java.lang.Object r2 = r0.f39288d
                ms.t$d r2 = (ms.t.d) r2
                kotlin.c.b(r8)
                goto L6c
            L41:
                kotlin.c.b(r8)
                goto L59
            L45:
                kotlin.c.b(r8)
                kotlin.jvm.internal.Ref$BooleanRef r8 = r6.f39285d
                boolean r8 = r8.element
                if (r8 == 0) goto L5c
                kotlinx.coroutines.flow.FlowCollector r8 = r6.f39286e
                r0.f39292p = r5
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L59
                goto L87
            L59:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            L5c:
                kotlin.jvm.functions.Function2 r8 = r6.f39287i
                r0.f39288d = r6
                r0.f39289e = r7
                r0.f39292p = r4
                java.lang.Object r8 = r8.invoke(r7, r0)
                if (r8 != r1) goto L6b
                goto L87
            L6b:
                r2 = r6
            L6c:
                java.lang.Boolean r8 = (java.lang.Boolean) r8
                boolean r8 = r8.booleanValue()
                if (r8 != 0) goto L8b
                kotlin.jvm.internal.Ref$BooleanRef r8 = r2.f39285d
                r8.element = r5
                kotlinx.coroutines.flow.FlowCollector r8 = r2.f39286e
                r2 = 0
                r0.f39288d = r2
                r0.f39289e = r2
                r0.f39292p = r3
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L88
            L87:
                return r1
            L88:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            L8b:
                kotlin.Unit r7 = kotlin.Unit.f32464a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.d.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f39293d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f39294e;

        /* renamed from: i  reason: collision with root package name */
        int f39295i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f39294e = obj;
            this.f39295i |= Integer.MIN_VALUE;
            return t.d(null, null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39296d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f39297e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f39298d;

            /* renamed from: e  reason: collision with root package name */
            int f39299e;

            /* renamed from: o  reason: collision with root package name */
            Object f39301o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39298d = obj;
                this.f39299e |= Integer.MIN_VALUE;
                return f.this.collect(null, this);
            }
        }

        public f(Flow flow, int i10) {
            this.f39296d = flow;
            this.f39297e = i10;
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0035  */
        @Override // kotlinx.coroutines.flow.Flow
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r9, kotlin.coroutines.Continuation r10) {
            /*
                r8 = this;
                boolean r0 = r10 instanceof ms.t.f.a
                if (r0 == 0) goto L13
                r0 = r10
                ms.t$f$a r0 = (ms.t.f.a) r0
                int r1 = r0.f39299e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39299e = r1
                goto L18
            L13:
                ms.t$f$a r0 = new ms.t$f$a
                r0.<init>(r10)
            L18:
                java.lang.Object r10 = r0.f39298d
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39299e
                r3 = 1
                if (r2 == 0) goto L35
                if (r2 != r3) goto L2d
                java.lang.Object r9 = r0.f39301o
                kotlin.c.b(r10)     // Catch: ns.a -> L2b
                goto L5d
            L2b:
                r10 = move-exception
                goto L5a
            L2d:
                java.lang.IllegalStateException r9 = new java.lang.IllegalStateException
                java.lang.String r10 = "call to 'resume' before 'invoke' with coroutine"
                r9.<init>(r10)
                throw r9
            L35:
                kotlin.c.b(r10)
                java.lang.Object r10 = new java.lang.Object
                r10.<init>()
                kotlin.jvm.internal.Ref$IntRef r2 = new kotlin.jvm.internal.Ref$IntRef
                r2.<init>()
                kotlinx.coroutines.flow.Flow r4 = r8.f39296d     // Catch: ns.a -> L56
                ms.t$g r5 = new ms.t$g     // Catch: ns.a -> L56
                int r6 = r8.f39297e     // Catch: ns.a -> L56
                r5.<init>(r2, r6, r9, r10)     // Catch: ns.a -> L56
                r0.f39301o = r10     // Catch: ns.a -> L56
                r0.f39299e = r3     // Catch: ns.a -> L56
                java.lang.Object r9 = r4.collect(r5, r0)     // Catch: ns.a -> L56
                if (r9 != r1) goto L5d
                return r1
            L56:
                r9 = move-exception
                r7 = r10
                r10 = r9
                r9 = r7
            L5a:
                ns.p.a(r10, r9)
            L5d:
                kotlin.Unit r9 = kotlin.Unit.f32464a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.f.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f39302d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f39303e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f39304i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f39305o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f39306d;

            /* renamed from: i  reason: collision with root package name */
            int f39308i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39306d = obj;
                this.f39308i |= Integer.MIN_VALUE;
                return g.this.emit(null, this);
            }
        }

        g(Ref.IntRef intRef, int i10, FlowCollector flowCollector, Object obj) {
            this.f39302d = intRef;
            this.f39303e = i10;
            this.f39304i = flowCollector;
            this.f39305o = obj;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x004e, code lost:
            if (r7.emit(r6, r0) == r1) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x005e, code lost:
            if (ms.t.d(r7, r6, r2, r0) == r1) goto L23;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0038  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof ms.t.g.a
                if (r0 == 0) goto L13
                r0 = r7
                ms.t$g$a r0 = (ms.t.g.a) r0
                int r1 = r0.f39308i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39308i = r1
                goto L18
            L13:
                ms.t$g$a r0 = new ms.t$g$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f39306d
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39308i
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L38
                if (r2 == r4) goto L34
                if (r2 != r3) goto L2c
                kotlin.c.b(r7)
                goto L61
            L2c:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L34:
                kotlin.c.b(r7)
                goto L51
            L38:
                kotlin.c.b(r7)
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f39302d
                int r2 = r7.element
                int r2 = r2 + r4
                r7.element = r2
                int r7 = r5.f39303e
                if (r2 >= r7) goto L54
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f39304i
                r0.f39308i = r4
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L51
                goto L60
            L51:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            L54:
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f39304i
                java.lang.Object r2 = r5.f39305o
                r0.f39308i = r3
                java.lang.Object r6 = ms.t.a(r7, r6, r2, r0)
                if (r6 != r1) goto L61
            L60:
                return r1
            L61:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.g.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f39309d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f39310e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f39311d;

            /* renamed from: e  reason: collision with root package name */
            int f39312e;

            /* renamed from: o  reason: collision with root package name */
            Object f39314o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39311d = obj;
                this.f39312e |= Integer.MIN_VALUE;
                return h.this.collect(null, this);
            }
        }

        public h(Flow flow, Function2 function2) {
            this.f39309d = flow;
            this.f39310e = function2;
        }

        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:18:0x0037  */
        @Override // kotlinx.coroutines.flow.Flow
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object collect(kotlinx.coroutines.flow.FlowCollector r6, kotlin.coroutines.Continuation r7) {
            /*
                r5 = this;
                boolean r0 = r7 instanceof ms.t.h.a
                if (r0 == 0) goto L13
                r0 = r7
                ms.t$h$a r0 = (ms.t.h.a) r0
                int r1 = r0.f39312e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39312e = r1
                goto L18
            L13:
                ms.t$h$a r0 = new ms.t$h$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f39311d
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39312e
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r6 = r0.f39314o
                ms.t$i r6 = (ms.t.i) r6
                kotlin.c.b(r7)     // Catch: ns.a -> L2d
                goto L5a
            L2d:
                r7 = move-exception
                goto L50
            L2f:
                java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                r6.<init>(r7)
                throw r6
            L37:
                kotlin.c.b(r7)
                kotlinx.coroutines.flow.Flow r7 = r5.f39309d
                ms.t$i r2 = new ms.t$i
                kotlin.jvm.functions.Function2 r4 = r5.f39310e
                r2.<init>(r4, r6)
                r0.f39314o = r2     // Catch: ns.a -> L4e
                r0.f39312e = r3     // Catch: ns.a -> L4e
                java.lang.Object r6 = r7.collect(r2, r0)     // Catch: ns.a -> L4e
                if (r6 != r1) goto L5a
                return r1
            L4e:
                r7 = move-exception
                r6 = r2
            L50:
                ns.p.a(r7, r6)
                kotlin.coroutines.CoroutineContext r6 = r0.getContext()
                kotlinx.coroutines.z.k(r6)
            L5a:
                kotlin.Unit r6 = kotlin.Unit.f32464a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.h.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function2 f39315d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f39316e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f39317d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f39318e;

            /* renamed from: i  reason: collision with root package name */
            int f39319i;

            /* renamed from: p  reason: collision with root package name */
            Object f39321p;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f39318e = obj;
                this.f39319i |= Integer.MIN_VALUE;
                return i.this.emit(null, this);
            }
        }

        public i(Function2 function2, FlowCollector flowCollector) {
            this.f39315d = function2;
            this.f39316e = flowCollector;
        }

        /* JADX WARN: Code restructure failed: missing block: B:23:0x0078, code lost:
            if (r2.emit(r9, r0) == r1) goto L24;
         */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:16:0x0046  */
        /* JADX WARN: Removed duplicated region for block: B:22:0x006b  */
        /* JADX WARN: Removed duplicated region for block: B:25:0x007b  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x007e  */
        /* JADX WARN: Removed duplicated region for block: B:29:0x0081  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object emit(java.lang.Object r8, kotlin.coroutines.Continuation r9) {
            /*
                r7 = this;
                boolean r0 = r9 instanceof ms.t.i.a
                if (r0 == 0) goto L13
                r0 = r9
                ms.t$i$a r0 = (ms.t.i.a) r0
                int r1 = r0.f39319i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f39319i = r1
                goto L18
            L13:
                ms.t$i$a r0 = new ms.t$i$a
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f39318e
                java.lang.Object r1 = rr.b.f()
                int r2 = r0.f39319i
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                java.lang.Object r8 = r0.f39317d
                ms.t$i r8 = (ms.t.i) r8
                kotlin.c.b(r9)
                goto L7c
            L30:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r9)
                throw r8
            L38:
                java.lang.Object r8 = r0.f39321p
                java.lang.Object r2 = r0.f39317d
                ms.t$i r2 = (ms.t.i) r2
                kotlin.c.b(r9)
                r6 = r9
                r9 = r8
                r8 = r2
                r2 = r6
                goto L63
            L46:
                kotlin.c.b(r9)
                kotlin.jvm.functions.Function2 r9 = r7.f39315d
                r0.f39317d = r7
                r0.f39321p = r8
                r0.f39319i = r4
                r2 = 6
                kotlin.jvm.internal.InlineMarker.mark(r2)
                java.lang.Object r9 = r9.invoke(r8, r0)
                r2 = 7
                kotlin.jvm.internal.InlineMarker.mark(r2)
                if (r9 != r1) goto L60
                goto L7a
            L60:
                r2 = r9
                r9 = r8
                r8 = r7
            L63:
                java.lang.Boolean r2 = (java.lang.Boolean) r2
                boolean r2 = r2.booleanValue()
                if (r2 == 0) goto L7b
                kotlinx.coroutines.flow.FlowCollector r2 = r8.f39316e
                r0.f39317d = r8
                r5 = 0
                r0.f39321p = r5
                r0.f39319i = r3
                java.lang.Object r9 = r2.emit(r9, r0)
                if (r9 != r1) goto L7c
            L7a:
                return r1
            L7b:
                r4 = 0
            L7c:
                if (r4 == 0) goto L81
                kotlin.Unit r8 = kotlin.Unit.f32464a
                return r8
            L81:
                ns.a r9 = new ns.a
                r9.<init>(r8)
                throw r9
            */
            throw new UnsupportedOperationException("Method not decompiled: ms.t.i.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f39322d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39323e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f39324i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function3 f39325o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function3 f39326d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f39327e;

            /* renamed from: ms.t$j$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0504a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f39328d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f39329e;

                /* renamed from: i  reason: collision with root package name */
                int f39330i;

                public C0504a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f39329e = obj;
                    this.f39330i |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(Function3 function3, FlowCollector flowCollector) {
                this.f39326d = function3;
                this.f39327e = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0035  */
            /* JADX WARN: Removed duplicated region for block: B:20:0x0058  */
            /* JADX WARN: Removed duplicated region for block: B:22:0x005b  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof ms.t.j.a.C0504a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ms.t$j$a$a r0 = (ms.t.j.a.C0504a) r0
                    int r1 = r0.f39330i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f39330i = r1
                    goto L18
                L13:
                    ms.t$j$a$a r0 = new ms.t$j$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f39329e
                    java.lang.Object r1 = rr.b.f()
                    int r2 = r0.f39330i
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f39328d
                    ms.t$j$a r5 = (ms.t.j.a) r5
                    kotlin.c.b(r6)
                    goto L50
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlin.jvm.functions.Function3 r6 = r4.f39326d
                    kotlinx.coroutines.flow.FlowCollector r2 = r4.f39327e
                    r0.f39328d = r4
                    r0.f39330i = r3
                    r3 = 6
                    kotlin.jvm.internal.InlineMarker.mark(r3)
                    java.lang.Object r6 = r6.invoke(r2, r5, r0)
                    r5 = 7
                    kotlin.jvm.internal.InlineMarker.mark(r5)
                    if (r6 != r1) goto L4f
                    return r1
                L4f:
                    r5 = r4
                L50:
                    java.lang.Boolean r6 = (java.lang.Boolean) r6
                    boolean r6 = r6.booleanValue()
                    if (r6 == 0) goto L5b
                    kotlin.Unit r5 = kotlin.Unit.f32464a
                    return r5
                L5b:
                    ns.a r6 = new ns.a
                    r6.<init>(r5)
                    throw r6
                */
                throw new UnsupportedOperationException("Method not decompiled: ms.t.j.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(Flow flow, Function3 function3, Continuation continuation) {
            super(2, continuation);
            this.f39324i = flow;
            this.f39325o = function3;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            j jVar = new j(this.f39324i, this.f39325o, continuation);
            jVar.f39323e = obj;
            return jVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            a aVar;
            Object f10 = rr.b.f();
            int i10 = this.f39322d;
            if (i10 != 0) {
                if (i10 == 1) {
                    aVar = (a) this.f39323e;
                    try {
                        kotlin.c.b(obj);
                    } catch (ns.a e10) {
                        e = e10;
                        ns.p.a(e, aVar);
                        kotlinx.coroutines.z.k(getContext());
                        return Unit.f32464a;
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f39324i;
                a aVar2 = new a(this.f39325o, (FlowCollector) this.f39323e);
                try {
                    this.f39323e = aVar2;
                    this.f39322d = 1;
                    if (flow.collect(aVar2, this) == f10) {
                        return f10;
                    }
                } catch (ns.a e11) {
                    e = e11;
                    aVar = aVar2;
                    ns.p.a(e, aVar);
                    kotlinx.coroutines.z.k(getContext());
                    return Unit.f32464a;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((j) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public static final Flow b(Flow flow, int i10) {
        if (i10 >= 0) {
            return new a(flow, i10);
        }
        throw new IllegalArgumentException(("Drop count should be non-negative, but had " + i10).toString());
    }

    public static final Flow c(Flow flow, Function2 function2) {
        return new c(flow, function2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0033  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object d(kotlinx.coroutines.flow.FlowCollector r4, java.lang.Object r5, java.lang.Object r6, kotlin.coroutines.Continuation r7) {
        /*
            boolean r0 = r7 instanceof ms.t.e
            if (r0 == 0) goto L13
            r0 = r7
            ms.t$e r0 = (ms.t.e) r0
            int r1 = r0.f39295i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f39295i = r1
            goto L18
        L13:
            ms.t$e r0 = new ms.t$e
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f39294e
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f39295i
            r3 = 1
            if (r2 == 0) goto L33
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r6 = r0.f39293d
            kotlin.c.b(r7)
            goto L41
        L33:
            kotlin.c.b(r7)
            r0.f39293d = r6
            r0.f39295i = r3
            java.lang.Object r4 = r4.emit(r5, r0)
            if (r4 != r1) goto L41
            return r1
        L41:
            ns.a r4 = new ns.a
            r4.<init>(r6)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ms.t.d(kotlinx.coroutines.flow.FlowCollector, java.lang.Object, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
    }

    public static final Flow e(Flow flow, int i10) {
        if (i10 > 0) {
            return new f(flow, i10);
        }
        throw new IllegalArgumentException(("Requested element count " + i10 + " should be positive").toString());
    }

    public static final Flow f(Flow flow, Function2 function2) {
        return new h(flow, function2);
    }

    public static final Flow g(Flow flow, Function3 function3) {
        return ms.g.v(new j(flow, function3, null));
    }
}
