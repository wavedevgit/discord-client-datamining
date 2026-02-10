package ss;

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
        final /* synthetic */ Flow f50246d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f50247e;

        public a(Flow flow, int i10) {
            this.f50246d = flow;
            this.f50247e = i10;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f50246d.collect(new b(new Ref.IntRef(), this.f50247e, flowCollector), continuation);
            if (collect == xr.b.f()) {
                return collect;
            }
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f50248d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f50249e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50250i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f50251d;

            /* renamed from: i  reason: collision with root package name */
            int f50253i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50251d = obj;
                this.f50253i |= Integer.MIN_VALUE;
                return b.this.emit(null, this);
            }
        }

        b(Ref.IntRef intRef, int i10, FlowCollector flowCollector) {
            this.f50248d = intRef;
            this.f50249e = i10;
            this.f50250i = flowCollector;
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
                boolean r0 = r7 instanceof ss.t.b.a
                if (r0 == 0) goto L13
                r0 = r7
                ss.t$b$a r0 = (ss.t.b.a) r0
                int r1 = r0.f50253i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50253i = r1
                goto L18
            L13:
                ss.t$b$a r0 = new ss.t$b$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f50251d
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50253i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f50248d
                int r2 = r7.element
                int r4 = r5.f50249e
                if (r2 < r4) goto L4a
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f50250i
                r0.f50253i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L47
                return r1
            L47:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            L4a:
                int r2 = r2 + r3
                r7.element = r2
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.b.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f50254d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50255e;

        public c(Flow flow, Function2 function2) {
            this.f50254d = flow;
            this.f50255e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f50254d.collect(new d(new Ref.BooleanRef(), flowCollector, this.f50255e), continuation);
            if (collect == xr.b.f()) {
                return collect;
            }
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f50256d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50257e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f50258i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f50259d;

            /* renamed from: e  reason: collision with root package name */
            Object f50260e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f50261i;

            /* renamed from: p  reason: collision with root package name */
            int f50263p;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50261i = obj;
                this.f50263p |= Integer.MIN_VALUE;
                return d.this.emit(null, this);
            }
        }

        d(Ref.BooleanRef booleanRef, FlowCollector flowCollector, Function2 function2) {
            this.f50256d = booleanRef;
            this.f50257e = flowCollector;
            this.f50258i = function2;
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
                boolean r0 = r8 instanceof ss.t.d.a
                if (r0 == 0) goto L13
                r0 = r8
                ss.t$d$a r0 = (ss.t.d.a) r0
                int r1 = r0.f50263p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50263p = r1
                goto L18
            L13:
                ss.t$d$a r0 = new ss.t$d$a
                r0.<init>(r8)
            L18:
                java.lang.Object r8 = r0.f50261i
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50263p
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
                java.lang.Object r7 = r0.f50260e
                java.lang.Object r2 = r0.f50259d
                ss.t$d r2 = (ss.t.d) r2
                kotlin.c.b(r8)
                goto L6c
            L41:
                kotlin.c.b(r8)
                goto L59
            L45:
                kotlin.c.b(r8)
                kotlin.jvm.internal.Ref$BooleanRef r8 = r6.f50256d
                boolean r8 = r8.element
                if (r8 == 0) goto L5c
                kotlinx.coroutines.flow.FlowCollector r8 = r6.f50257e
                r0.f50263p = r5
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L59
                goto L87
            L59:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            L5c:
                kotlin.jvm.functions.Function2 r8 = r6.f50258i
                r0.f50259d = r6
                r0.f50260e = r7
                r0.f50263p = r4
                java.lang.Object r8 = r8.invoke(r7, r0)
                if (r8 != r1) goto L6b
                goto L87
            L6b:
                r2 = r6
            L6c:
                java.lang.Boolean r8 = (java.lang.Boolean) r8
                boolean r8 = r8.booleanValue()
                if (r8 != 0) goto L8b
                kotlin.jvm.internal.Ref$BooleanRef r8 = r2.f50256d
                r8.element = r5
                kotlinx.coroutines.flow.FlowCollector r8 = r2.f50257e
                r2 = 0
                r0.f50259d = r2
                r0.f50260e = r2
                r0.f50263p = r3
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L88
            L87:
                return r1
            L88:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            L8b:
                kotlin.Unit r7 = kotlin.Unit.f31765a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.d.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f50264d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f50265e;

        /* renamed from: i  reason: collision with root package name */
        int f50266i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f50265e = obj;
            this.f50266i |= Integer.MIN_VALUE;
            return t.d(null, null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f50267d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f50268e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f50269d;

            /* renamed from: e  reason: collision with root package name */
            int f50270e;

            /* renamed from: o  reason: collision with root package name */
            Object f50272o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50269d = obj;
                this.f50270e |= Integer.MIN_VALUE;
                return f.this.collect(null, this);
            }
        }

        public f(Flow flow, int i10) {
            this.f50267d = flow;
            this.f50268e = i10;
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
                boolean r0 = r10 instanceof ss.t.f.a
                if (r0 == 0) goto L13
                r0 = r10
                ss.t$f$a r0 = (ss.t.f.a) r0
                int r1 = r0.f50270e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50270e = r1
                goto L18
            L13:
                ss.t$f$a r0 = new ss.t$f$a
                r0.<init>(r10)
            L18:
                java.lang.Object r10 = r0.f50269d
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50270e
                r3 = 1
                if (r2 == 0) goto L35
                if (r2 != r3) goto L2d
                java.lang.Object r9 = r0.f50272o
                kotlin.c.b(r10)     // Catch: ts.a -> L2b
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
                kotlinx.coroutines.flow.Flow r4 = r8.f50267d     // Catch: ts.a -> L56
                ss.t$g r5 = new ss.t$g     // Catch: ts.a -> L56
                int r6 = r8.f50268e     // Catch: ts.a -> L56
                r5.<init>(r2, r6, r9, r10)     // Catch: ts.a -> L56
                r0.f50272o = r10     // Catch: ts.a -> L56
                r0.f50270e = r3     // Catch: ts.a -> L56
                java.lang.Object r9 = r4.collect(r5, r0)     // Catch: ts.a -> L56
                if (r9 != r1) goto L5d
                return r1
            L56:
                r9 = move-exception
                r7 = r10
                r10 = r9
                r9 = r7
            L5a:
                ts.p.a(r10, r9)
            L5d:
                kotlin.Unit r9 = kotlin.Unit.f31765a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.f.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f50273d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f50274e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50275i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f50276o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f50277d;

            /* renamed from: i  reason: collision with root package name */
            int f50279i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50277d = obj;
                this.f50279i |= Integer.MIN_VALUE;
                return g.this.emit(null, this);
            }
        }

        g(Ref.IntRef intRef, int i10, FlowCollector flowCollector, Object obj) {
            this.f50273d = intRef;
            this.f50274e = i10;
            this.f50275i = flowCollector;
            this.f50276o = obj;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x004e, code lost:
            if (r7.emit(r6, r0) == r1) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x005e, code lost:
            if (ss.t.d(r7, r6, r2, r0) == r1) goto L23;
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
                boolean r0 = r7 instanceof ss.t.g.a
                if (r0 == 0) goto L13
                r0 = r7
                ss.t$g$a r0 = (ss.t.g.a) r0
                int r1 = r0.f50279i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50279i = r1
                goto L18
            L13:
                ss.t$g$a r0 = new ss.t$g$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f50277d
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50279i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f50273d
                int r2 = r7.element
                int r2 = r2 + r4
                r7.element = r2
                int r7 = r5.f50274e
                if (r2 >= r7) goto L54
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f50275i
                r0.f50279i = r4
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L51
                goto L60
            L51:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            L54:
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f50275i
                java.lang.Object r2 = r5.f50276o
                r0.f50279i = r3
                java.lang.Object r6 = ss.t.a(r7, r6, r2, r0)
                if (r6 != r1) goto L61
            L60:
                return r1
            L61:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.g.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f50280d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50281e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f50282d;

            /* renamed from: e  reason: collision with root package name */
            int f50283e;

            /* renamed from: o  reason: collision with root package name */
            Object f50285o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50282d = obj;
                this.f50283e |= Integer.MIN_VALUE;
                return h.this.collect(null, this);
            }
        }

        public h(Flow flow, Function2 function2) {
            this.f50280d = flow;
            this.f50281e = function2;
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
                boolean r0 = r7 instanceof ss.t.h.a
                if (r0 == 0) goto L13
                r0 = r7
                ss.t$h$a r0 = (ss.t.h.a) r0
                int r1 = r0.f50283e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50283e = r1
                goto L18
            L13:
                ss.t$h$a r0 = new ss.t$h$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f50282d
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50283e
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r6 = r0.f50285o
                ss.t$i r6 = (ss.t.i) r6
                kotlin.c.b(r7)     // Catch: ts.a -> L2d
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
                kotlinx.coroutines.flow.Flow r7 = r5.f50280d
                ss.t$i r2 = new ss.t$i
                kotlin.jvm.functions.Function2 r4 = r5.f50281e
                r2.<init>(r4, r6)
                r0.f50285o = r2     // Catch: ts.a -> L4e
                r0.f50283e = r3     // Catch: ts.a -> L4e
                java.lang.Object r6 = r7.collect(r2, r0)     // Catch: ts.a -> L4e
                if (r6 != r1) goto L5a
                return r1
            L4e:
                r7 = move-exception
                r6 = r2
            L50:
                ts.p.a(r7, r6)
                kotlin.coroutines.CoroutineContext r6 = r0.getContext()
                kotlinx.coroutines.z.k(r6)
            L5a:
                kotlin.Unit r6 = kotlin.Unit.f31765a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.h.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function2 f50286d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f50287e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f50288d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f50289e;

            /* renamed from: i  reason: collision with root package name */
            int f50290i;

            /* renamed from: p  reason: collision with root package name */
            Object f50292p;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f50289e = obj;
                this.f50290i |= Integer.MIN_VALUE;
                return i.this.emit(null, this);
            }
        }

        public i(Function2 function2, FlowCollector flowCollector) {
            this.f50286d = function2;
            this.f50287e = flowCollector;
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
                boolean r0 = r9 instanceof ss.t.i.a
                if (r0 == 0) goto L13
                r0 = r9
                ss.t$i$a r0 = (ss.t.i.a) r0
                int r1 = r0.f50290i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f50290i = r1
                goto L18
            L13:
                ss.t$i$a r0 = new ss.t$i$a
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f50289e
                java.lang.Object r1 = xr.b.f()
                int r2 = r0.f50290i
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                java.lang.Object r8 = r0.f50288d
                ss.t$i r8 = (ss.t.i) r8
                kotlin.c.b(r9)
                goto L7c
            L30:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r9)
                throw r8
            L38:
                java.lang.Object r8 = r0.f50292p
                java.lang.Object r2 = r0.f50288d
                ss.t$i r2 = (ss.t.i) r2
                kotlin.c.b(r9)
                r6 = r9
                r9 = r8
                r8 = r2
                r2 = r6
                goto L63
            L46:
                kotlin.c.b(r9)
                kotlin.jvm.functions.Function2 r9 = r7.f50286d
                r0.f50288d = r7
                r0.f50292p = r8
                r0.f50290i = r4
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
                kotlinx.coroutines.flow.FlowCollector r2 = r8.f50287e
                r0.f50288d = r8
                r5 = 0
                r0.f50292p = r5
                r0.f50290i = r3
                java.lang.Object r9 = r2.emit(r9, r0)
                if (r9 != r1) goto L7c
            L7a:
                return r1
            L7b:
                r4 = 0
            L7c:
                if (r4 == 0) goto L81
                kotlin.Unit r8 = kotlin.Unit.f31765a
                return r8
            L81:
                ts.a r9 = new ts.a
                r9.<init>(r8)
                throw r9
            */
            throw new UnsupportedOperationException("Method not decompiled: ss.t.i.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f50293d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f50294e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f50295i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function3 f50296o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function3 f50297d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50298e;

            /* renamed from: ss.t$j$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0686a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f50299d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f50300e;

                /* renamed from: i  reason: collision with root package name */
                int f50301i;

                public C0686a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f50300e = obj;
                    this.f50301i |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(Function3 function3, FlowCollector flowCollector) {
                this.f50297d = function3;
                this.f50298e = flowCollector;
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
                    boolean r0 = r6 instanceof ss.t.j.a.C0686a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ss.t$j$a$a r0 = (ss.t.j.a.C0686a) r0
                    int r1 = r0.f50301i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f50301i = r1
                    goto L18
                L13:
                    ss.t$j$a$a r0 = new ss.t$j$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f50300e
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f50301i
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f50299d
                    ss.t$j$a r5 = (ss.t.j.a) r5
                    kotlin.c.b(r6)
                    goto L50
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlin.jvm.functions.Function3 r6 = r4.f50297d
                    kotlinx.coroutines.flow.FlowCollector r2 = r4.f50298e
                    r0.f50299d = r4
                    r0.f50301i = r3
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
                    kotlin.Unit r5 = kotlin.Unit.f31765a
                    return r5
                L5b:
                    ts.a r6 = new ts.a
                    r6.<init>(r5)
                    throw r6
                */
                throw new UnsupportedOperationException("Method not decompiled: ss.t.j.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(Flow flow, Function3 function3, Continuation continuation) {
            super(2, continuation);
            this.f50295i = flow;
            this.f50296o = function3;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            j jVar = new j(this.f50295i, this.f50296o, continuation);
            jVar.f50294e = obj;
            return jVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            a aVar;
            Object f10 = xr.b.f();
            int i10 = this.f50293d;
            if (i10 != 0) {
                if (i10 == 1) {
                    aVar = (a) this.f50294e;
                    try {
                        kotlin.c.b(obj);
                    } catch (ts.a e10) {
                        e = e10;
                        ts.p.a(e, aVar);
                        kotlinx.coroutines.z.k(getContext());
                        return Unit.f31765a;
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f50295i;
                a aVar2 = new a(this.f50296o, (FlowCollector) this.f50294e);
                try {
                    this.f50294e = aVar2;
                    this.f50293d = 1;
                    if (flow.collect(aVar2, this) == f10) {
                        return f10;
                    }
                } catch (ts.a e11) {
                    e = e11;
                    aVar = aVar2;
                    ts.p.a(e, aVar);
                    kotlinx.coroutines.z.k(getContext());
                    return Unit.f31765a;
                }
            }
            return Unit.f31765a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((j) create(flowCollector, continuation)).invokeSuspend(Unit.f31765a);
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
            boolean r0 = r7 instanceof ss.t.e
            if (r0 == 0) goto L13
            r0 = r7
            ss.t$e r0 = (ss.t.e) r0
            int r1 = r0.f50266i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f50266i = r1
            goto L18
        L13:
            ss.t$e r0 = new ss.t$e
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f50265e
            java.lang.Object r1 = xr.b.f()
            int r2 = r0.f50266i
            r3 = 1
            if (r2 == 0) goto L33
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r6 = r0.f50264d
            kotlin.c.b(r7)
            goto L41
        L33:
            kotlin.c.b(r7)
            r0.f50264d = r6
            r0.f50266i = r3
            java.lang.Object r4 = r4.emit(r5, r0)
            if (r4 != r1) goto L41
            return r1
        L41:
            ts.a r4 = new ts.a
            r4.<init>(r6)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ss.t.d(kotlinx.coroutines.flow.FlowCollector, java.lang.Object, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
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
        return ss.g.v(new j(flow, function3, null));
    }
}
