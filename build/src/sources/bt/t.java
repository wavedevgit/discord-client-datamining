package bt;

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
        final /* synthetic */ Flow f7675d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7676e;

        public a(Flow flow, int i10) {
            this.f7675d = flow;
            this.f7676e = i10;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f7675d.collect(new b(new Ref.IntRef(), this.f7676e, flowCollector), continuation);
            if (collect == gs.b.f()) {
                return collect;
            }
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f7677d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7678e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f7679i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f7680d;

            /* renamed from: i  reason: collision with root package name */
            int f7682i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7680d = obj;
                this.f7682i |= Integer.MIN_VALUE;
                return b.this.emit(null, this);
            }
        }

        b(Ref.IntRef intRef, int i10, FlowCollector flowCollector) {
            this.f7677d = intRef;
            this.f7678e = i10;
            this.f7679i = flowCollector;
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
                boolean r0 = r7 instanceof bt.t.b.a
                if (r0 == 0) goto L13
                r0 = r7
                bt.t$b$a r0 = (bt.t.b.a) r0
                int r1 = r0.f7682i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7682i = r1
                goto L18
            L13:
                bt.t$b$a r0 = new bt.t$b$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f7680d
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7682i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f7677d
                int r2 = r7.element
                int r4 = r5.f7678e
                if (r2 < r4) goto L4a
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f7679i
                r0.f7682i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L47
                return r1
            L47:
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            L4a:
                int r2 = r2 + r3
                r7.element = r2
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.b.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f7683d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f7684e;

        public c(Flow flow, Function2 function2) {
            this.f7683d = flow;
            this.f7684e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f7683d.collect(new d(new Ref.BooleanRef(), flowCollector, this.f7684e), continuation);
            if (collect == gs.b.f()) {
                return collect;
            }
            return Unit.f32556a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f7685d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f7686e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f7687i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f7688d;

            /* renamed from: e  reason: collision with root package name */
            Object f7689e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f7690i;

            /* renamed from: p  reason: collision with root package name */
            int f7692p;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7690i = obj;
                this.f7692p |= Integer.MIN_VALUE;
                return d.this.emit(null, this);
            }
        }

        d(Ref.BooleanRef booleanRef, FlowCollector flowCollector, Function2 function2) {
            this.f7685d = booleanRef;
            this.f7686e = flowCollector;
            this.f7687i = function2;
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
                boolean r0 = r8 instanceof bt.t.d.a
                if (r0 == 0) goto L13
                r0 = r8
                bt.t$d$a r0 = (bt.t.d.a) r0
                int r1 = r0.f7692p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7692p = r1
                goto L18
            L13:
                bt.t$d$a r0 = new bt.t$d$a
                r0.<init>(r8)
            L18:
                java.lang.Object r8 = r0.f7690i
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7692p
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
                java.lang.Object r7 = r0.f7689e
                java.lang.Object r2 = r0.f7688d
                bt.t$d r2 = (bt.t.d) r2
                kotlin.c.b(r8)
                goto L6c
            L41:
                kotlin.c.b(r8)
                goto L59
            L45:
                kotlin.c.b(r8)
                kotlin.jvm.internal.Ref$BooleanRef r8 = r6.f7685d
                boolean r8 = r8.element
                if (r8 == 0) goto L5c
                kotlinx.coroutines.flow.FlowCollector r8 = r6.f7686e
                r0.f7692p = r5
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L59
                goto L87
            L59:
                kotlin.Unit r7 = kotlin.Unit.f32556a
                return r7
            L5c:
                kotlin.jvm.functions.Function2 r8 = r6.f7687i
                r0.f7688d = r6
                r0.f7689e = r7
                r0.f7692p = r4
                java.lang.Object r8 = r8.invoke(r7, r0)
                if (r8 != r1) goto L6b
                goto L87
            L6b:
                r2 = r6
            L6c:
                java.lang.Boolean r8 = (java.lang.Boolean) r8
                boolean r8 = r8.booleanValue()
                if (r8 != 0) goto L8b
                kotlin.jvm.internal.Ref$BooleanRef r8 = r2.f7685d
                r8.element = r5
                kotlinx.coroutines.flow.FlowCollector r8 = r2.f7686e
                r2 = 0
                r0.f7688d = r2
                r0.f7689e = r2
                r0.f7692p = r3
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L88
            L87:
                return r1
            L88:
                kotlin.Unit r7 = kotlin.Unit.f32556a
                return r7
            L8b:
                kotlin.Unit r7 = kotlin.Unit.f32556a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.d.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f7693d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f7694e;

        /* renamed from: i  reason: collision with root package name */
        int f7695i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f7694e = obj;
            this.f7695i |= Integer.MIN_VALUE;
            return t.d(null, null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f7696d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7697e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f7698d;

            /* renamed from: e  reason: collision with root package name */
            int f7699e;

            /* renamed from: o  reason: collision with root package name */
            Object f7701o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7698d = obj;
                this.f7699e |= Integer.MIN_VALUE;
                return f.this.collect(null, this);
            }
        }

        public f(Flow flow, int i10) {
            this.f7696d = flow;
            this.f7697e = i10;
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
                boolean r0 = r10 instanceof bt.t.f.a
                if (r0 == 0) goto L13
                r0 = r10
                bt.t$f$a r0 = (bt.t.f.a) r0
                int r1 = r0.f7699e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7699e = r1
                goto L18
            L13:
                bt.t$f$a r0 = new bt.t$f$a
                r0.<init>(r10)
            L18:
                java.lang.Object r10 = r0.f7698d
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7699e
                r3 = 1
                if (r2 == 0) goto L35
                if (r2 != r3) goto L2d
                java.lang.Object r9 = r0.f7701o
                kotlin.c.b(r10)     // Catch: ct.a -> L2b
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
                kotlinx.coroutines.flow.Flow r4 = r8.f7696d     // Catch: ct.a -> L56
                bt.t$g r5 = new bt.t$g     // Catch: ct.a -> L56
                int r6 = r8.f7697e     // Catch: ct.a -> L56
                r5.<init>(r2, r6, r9, r10)     // Catch: ct.a -> L56
                r0.f7701o = r10     // Catch: ct.a -> L56
                r0.f7699e = r3     // Catch: ct.a -> L56
                java.lang.Object r9 = r4.collect(r5, r0)     // Catch: ct.a -> L56
                if (r9 != r1) goto L5d
                return r1
            L56:
                r9 = move-exception
                r7 = r10
                r10 = r9
                r9 = r7
            L5a:
                ct.p.a(r10, r9)
            L5d:
                kotlin.Unit r9 = kotlin.Unit.f32556a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.f.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f7702d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f7703e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f7704i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f7705o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f7706d;

            /* renamed from: i  reason: collision with root package name */
            int f7708i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7706d = obj;
                this.f7708i |= Integer.MIN_VALUE;
                return g.this.emit(null, this);
            }
        }

        g(Ref.IntRef intRef, int i10, FlowCollector flowCollector, Object obj) {
            this.f7702d = intRef;
            this.f7703e = i10;
            this.f7704i = flowCollector;
            this.f7705o = obj;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x004e, code lost:
            if (r7.emit(r6, r0) == r1) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x005e, code lost:
            if (bt.t.d(r7, r6, r2, r0) == r1) goto L23;
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
                boolean r0 = r7 instanceof bt.t.g.a
                if (r0 == 0) goto L13
                r0 = r7
                bt.t$g$a r0 = (bt.t.g.a) r0
                int r1 = r0.f7708i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7708i = r1
                goto L18
            L13:
                bt.t$g$a r0 = new bt.t$g$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f7706d
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7708i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f7702d
                int r2 = r7.element
                int r2 = r2 + r4
                r7.element = r2
                int r7 = r5.f7703e
                if (r2 >= r7) goto L54
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f7704i
                r0.f7708i = r4
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L51
                goto L60
            L51:
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            L54:
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f7704i
                java.lang.Object r2 = r5.f7705o
                r0.f7708i = r3
                java.lang.Object r6 = bt.t.a(r7, r6, r2, r0)
                if (r6 != r1) goto L61
            L60:
                return r1
            L61:
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.g.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f7709d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f7710e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f7711d;

            /* renamed from: e  reason: collision with root package name */
            int f7712e;

            /* renamed from: o  reason: collision with root package name */
            Object f7714o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7711d = obj;
                this.f7712e |= Integer.MIN_VALUE;
                return h.this.collect(null, this);
            }
        }

        public h(Flow flow, Function2 function2) {
            this.f7709d = flow;
            this.f7710e = function2;
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
                boolean r0 = r7 instanceof bt.t.h.a
                if (r0 == 0) goto L13
                r0 = r7
                bt.t$h$a r0 = (bt.t.h.a) r0
                int r1 = r0.f7712e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7712e = r1
                goto L18
            L13:
                bt.t$h$a r0 = new bt.t$h$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f7711d
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7712e
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r6 = r0.f7714o
                bt.t$i r6 = (bt.t.i) r6
                kotlin.c.b(r7)     // Catch: ct.a -> L2d
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
                kotlinx.coroutines.flow.Flow r7 = r5.f7709d
                bt.t$i r2 = new bt.t$i
                kotlin.jvm.functions.Function2 r4 = r5.f7710e
                r2.<init>(r4, r6)
                r0.f7714o = r2     // Catch: ct.a -> L4e
                r0.f7712e = r3     // Catch: ct.a -> L4e
                java.lang.Object r6 = r7.collect(r2, r0)     // Catch: ct.a -> L4e
                if (r6 != r1) goto L5a
                return r1
            L4e:
                r7 = move-exception
                r6 = r2
            L50:
                ct.p.a(r7, r6)
                kotlin.coroutines.CoroutineContext r6 = r0.getContext()
                kotlinx.coroutines.z.k(r6)
            L5a:
                kotlin.Unit r6 = kotlin.Unit.f32556a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.h.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function2 f7715d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f7716e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f7717d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f7718e;

            /* renamed from: i  reason: collision with root package name */
            int f7719i;

            /* renamed from: p  reason: collision with root package name */
            Object f7721p;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f7718e = obj;
                this.f7719i |= Integer.MIN_VALUE;
                return i.this.emit(null, this);
            }
        }

        public i(Function2 function2, FlowCollector flowCollector) {
            this.f7715d = function2;
            this.f7716e = flowCollector;
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
                boolean r0 = r9 instanceof bt.t.i.a
                if (r0 == 0) goto L13
                r0 = r9
                bt.t$i$a r0 = (bt.t.i.a) r0
                int r1 = r0.f7719i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f7719i = r1
                goto L18
            L13:
                bt.t$i$a r0 = new bt.t$i$a
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f7718e
                java.lang.Object r1 = gs.b.f()
                int r2 = r0.f7719i
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                java.lang.Object r8 = r0.f7717d
                bt.t$i r8 = (bt.t.i) r8
                kotlin.c.b(r9)
                goto L7c
            L30:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r9)
                throw r8
            L38:
                java.lang.Object r8 = r0.f7721p
                java.lang.Object r2 = r0.f7717d
                bt.t$i r2 = (bt.t.i) r2
                kotlin.c.b(r9)
                r6 = r9
                r9 = r8
                r8 = r2
                r2 = r6
                goto L63
            L46:
                kotlin.c.b(r9)
                kotlin.jvm.functions.Function2 r9 = r7.f7715d
                r0.f7717d = r7
                r0.f7721p = r8
                r0.f7719i = r4
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
                kotlinx.coroutines.flow.FlowCollector r2 = r8.f7716e
                r0.f7717d = r8
                r5 = 0
                r0.f7721p = r5
                r0.f7719i = r3
                java.lang.Object r9 = r2.emit(r9, r0)
                if (r9 != r1) goto L7c
            L7a:
                return r1
            L7b:
                r4 = 0
            L7c:
                if (r4 == 0) goto L81
                kotlin.Unit r8 = kotlin.Unit.f32556a
                return r8
            L81:
                ct.a r9 = new ct.a
                r9.<init>(r8)
                throw r9
            */
            throw new UnsupportedOperationException("Method not decompiled: bt.t.i.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f7722d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f7723e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f7724i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function3 f7725o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function3 f7726d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f7727e;

            /* renamed from: bt.t$j$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0118a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f7728d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f7729e;

                /* renamed from: i  reason: collision with root package name */
                int f7730i;

                public C0118a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f7729e = obj;
                    this.f7730i |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(Function3 function3, FlowCollector flowCollector) {
                this.f7726d = function3;
                this.f7727e = flowCollector;
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
                    boolean r0 = r6 instanceof bt.t.j.a.C0118a
                    if (r0 == 0) goto L13
                    r0 = r6
                    bt.t$j$a$a r0 = (bt.t.j.a.C0118a) r0
                    int r1 = r0.f7730i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f7730i = r1
                    goto L18
                L13:
                    bt.t$j$a$a r0 = new bt.t$j$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f7729e
                    java.lang.Object r1 = gs.b.f()
                    int r2 = r0.f7730i
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f7728d
                    bt.t$j$a r5 = (bt.t.j.a) r5
                    kotlin.c.b(r6)
                    goto L50
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlin.jvm.functions.Function3 r6 = r4.f7726d
                    kotlinx.coroutines.flow.FlowCollector r2 = r4.f7727e
                    r0.f7728d = r4
                    r0.f7730i = r3
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
                    kotlin.Unit r5 = kotlin.Unit.f32556a
                    return r5
                L5b:
                    ct.a r6 = new ct.a
                    r6.<init>(r5)
                    throw r6
                */
                throw new UnsupportedOperationException("Method not decompiled: bt.t.j.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(Flow flow, Function3 function3, Continuation continuation) {
            super(2, continuation);
            this.f7724i = flow;
            this.f7725o = function3;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            j jVar = new j(this.f7724i, this.f7725o, continuation);
            jVar.f7723e = obj;
            return jVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            a aVar;
            Object f10 = gs.b.f();
            int i10 = this.f7722d;
            if (i10 != 0) {
                if (i10 == 1) {
                    aVar = (a) this.f7723e;
                    try {
                        kotlin.c.b(obj);
                    } catch (ct.a e10) {
                        e = e10;
                        ct.p.a(e, aVar);
                        kotlinx.coroutines.z.k(getContext());
                        return Unit.f32556a;
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f7724i;
                a aVar2 = new a(this.f7725o, (FlowCollector) this.f7723e);
                try {
                    this.f7723e = aVar2;
                    this.f7722d = 1;
                    if (flow.collect(aVar2, this) == f10) {
                        return f10;
                    }
                } catch (ct.a e11) {
                    e = e11;
                    aVar = aVar2;
                    ct.p.a(e, aVar);
                    kotlinx.coroutines.z.k(getContext());
                    return Unit.f32556a;
                }
            }
            return Unit.f32556a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((j) create(flowCollector, continuation)).invokeSuspend(Unit.f32556a);
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
            boolean r0 = r7 instanceof bt.t.e
            if (r0 == 0) goto L13
            r0 = r7
            bt.t$e r0 = (bt.t.e) r0
            int r1 = r0.f7695i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f7695i = r1
            goto L18
        L13:
            bt.t$e r0 = new bt.t$e
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f7694e
            java.lang.Object r1 = gs.b.f()
            int r2 = r0.f7695i
            r3 = 1
            if (r2 == 0) goto L33
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r6 = r0.f7693d
            kotlin.c.b(r7)
            goto L41
        L33:
            kotlin.c.b(r7)
            r0.f7693d = r6
            r0.f7695i = r3
            java.lang.Object r4 = r4.emit(r5, r0)
            if (r4 != r1) goto L41
            return r1
        L41:
            ct.a r4 = new ct.a
            r4.<init>(r6)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: bt.t.d(kotlinx.coroutines.flow.FlowCollector, java.lang.Object, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
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
        return bt.g.v(new j(flow, function3, null));
    }
}
