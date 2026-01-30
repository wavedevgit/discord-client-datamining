package js;

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
        final /* synthetic */ Flow f32629d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f32630e;

        public a(Flow flow, int i10) {
            this.f32629d = flow;
            this.f32630e = i10;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f32629d.collect(new b(new Ref.IntRef(), this.f32630e, flowCollector), continuation);
            if (collect == or.b.f()) {
                return collect;
            }
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f32631d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f32632e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f32633i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f32634d;

            /* renamed from: i  reason: collision with root package name */
            int f32636i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32634d = obj;
                this.f32636i |= Integer.MIN_VALUE;
                return b.this.emit(null, this);
            }
        }

        b(Ref.IntRef intRef, int i10, FlowCollector flowCollector) {
            this.f32631d = intRef;
            this.f32632e = i10;
            this.f32633i = flowCollector;
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
                boolean r0 = r7 instanceof js.t.b.a
                if (r0 == 0) goto L13
                r0 = r7
                js.t$b$a r0 = (js.t.b.a) r0
                int r1 = r0.f32636i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32636i = r1
                goto L18
            L13:
                js.t$b$a r0 = new js.t$b$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f32634d
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32636i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f32631d
                int r2 = r7.element
                int r4 = r5.f32632e
                if (r2 < r4) goto L4a
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f32633i
                r0.f32636i = r3
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L47
                return r1
            L47:
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            L4a:
                int r2 = r2 + r3
                r7.element = r2
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.b.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f32637d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f32638e;

        public c(Flow flow, Function2 function2) {
            this.f32637d = flow;
            this.f32638e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f32637d.collect(new d(new Ref.BooleanRef(), flowCollector, this.f32638e), continuation);
            if (collect == or.b.f()) {
                return collect;
            }
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class d implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f32639d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f32640e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f32641i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f32642d;

            /* renamed from: e  reason: collision with root package name */
            Object f32643e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f32644i;

            /* renamed from: p  reason: collision with root package name */
            int f32646p;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32644i = obj;
                this.f32646p |= Integer.MIN_VALUE;
                return d.this.emit(null, this);
            }
        }

        d(Ref.BooleanRef booleanRef, FlowCollector flowCollector, Function2 function2) {
            this.f32639d = booleanRef;
            this.f32640e = flowCollector;
            this.f32641i = function2;
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
                boolean r0 = r8 instanceof js.t.d.a
                if (r0 == 0) goto L13
                r0 = r8
                js.t$d$a r0 = (js.t.d.a) r0
                int r1 = r0.f32646p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32646p = r1
                goto L18
            L13:
                js.t$d$a r0 = new js.t$d$a
                r0.<init>(r8)
            L18:
                java.lang.Object r8 = r0.f32644i
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32646p
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
                java.lang.Object r7 = r0.f32643e
                java.lang.Object r2 = r0.f32642d
                js.t$d r2 = (js.t.d) r2
                kotlin.c.b(r8)
                goto L6c
            L41:
                kotlin.c.b(r8)
                goto L59
            L45:
                kotlin.c.b(r8)
                kotlin.jvm.internal.Ref$BooleanRef r8 = r6.f32639d
                boolean r8 = r8.element
                if (r8 == 0) goto L5c
                kotlinx.coroutines.flow.FlowCollector r8 = r6.f32640e
                r0.f32646p = r5
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L59
                goto L87
            L59:
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            L5c:
                kotlin.jvm.functions.Function2 r8 = r6.f32641i
                r0.f32642d = r6
                r0.f32643e = r7
                r0.f32646p = r4
                java.lang.Object r8 = r8.invoke(r7, r0)
                if (r8 != r1) goto L6b
                goto L87
            L6b:
                r2 = r6
            L6c:
                java.lang.Boolean r8 = (java.lang.Boolean) r8
                boolean r8 = r8.booleanValue()
                if (r8 != 0) goto L8b
                kotlin.jvm.internal.Ref$BooleanRef r8 = r2.f32639d
                r8.element = r5
                kotlinx.coroutines.flow.FlowCollector r8 = r2.f32640e
                r2 = 0
                r0.f32642d = r2
                r0.f32643e = r2
                r0.f32646p = r3
                java.lang.Object r7 = r8.emit(r7, r0)
                if (r7 != r1) goto L88
            L87:
                return r1
            L88:
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            L8b:
                kotlin.Unit r7 = kotlin.Unit.f33298a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.d.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f32647d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f32648e;

        /* renamed from: i  reason: collision with root package name */
        int f32649i;

        e(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f32648e = obj;
            this.f32649i |= Integer.MIN_VALUE;
            return t.d(null, null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f32650d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f32651e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f32652d;

            /* renamed from: e  reason: collision with root package name */
            int f32653e;

            /* renamed from: o  reason: collision with root package name */
            Object f32655o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32652d = obj;
                this.f32653e |= Integer.MIN_VALUE;
                return f.this.collect(null, this);
            }
        }

        public f(Flow flow, int i10) {
            this.f32650d = flow;
            this.f32651e = i10;
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
                boolean r0 = r10 instanceof js.t.f.a
                if (r0 == 0) goto L13
                r0 = r10
                js.t$f$a r0 = (js.t.f.a) r0
                int r1 = r0.f32653e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32653e = r1
                goto L18
            L13:
                js.t$f$a r0 = new js.t$f$a
                r0.<init>(r10)
            L18:
                java.lang.Object r10 = r0.f32652d
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32653e
                r3 = 1
                if (r2 == 0) goto L35
                if (r2 != r3) goto L2d
                java.lang.Object r9 = r0.f32655o
                kotlin.c.b(r10)     // Catch: ks.a -> L2b
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
                kotlinx.coroutines.flow.Flow r4 = r8.f32650d     // Catch: ks.a -> L56
                js.t$g r5 = new js.t$g     // Catch: ks.a -> L56
                int r6 = r8.f32651e     // Catch: ks.a -> L56
                r5.<init>(r2, r6, r9, r10)     // Catch: ks.a -> L56
                r0.f32655o = r10     // Catch: ks.a -> L56
                r0.f32653e = r3     // Catch: ks.a -> L56
                java.lang.Object r9 = r4.collect(r5, r0)     // Catch: ks.a -> L56
                if (r9 != r1) goto L5d
                return r1
            L56:
                r9 = move-exception
                r7 = r10
                r10 = r9
                r9 = r7
            L5a:
                ks.p.a(r10, r9)
            L5d:
                kotlin.Unit r9 = kotlin.Unit.f33298a
                return r9
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.f.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class g implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.IntRef f32656d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ int f32657e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ FlowCollector f32658i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Object f32659o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f32660d;

            /* renamed from: i  reason: collision with root package name */
            int f32662i;

            a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32660d = obj;
                this.f32662i |= Integer.MIN_VALUE;
                return g.this.emit(null, this);
            }
        }

        g(Ref.IntRef intRef, int i10, FlowCollector flowCollector, Object obj) {
            this.f32656d = intRef;
            this.f32657e = i10;
            this.f32658i = flowCollector;
            this.f32659o = obj;
        }

        /* JADX WARN: Code restructure failed: missing block: B:19:0x004e, code lost:
            if (r7.emit(r6, r0) == r1) goto L23;
         */
        /* JADX WARN: Code restructure failed: missing block: B:24:0x005e, code lost:
            if (js.t.d(r7, r6, r2, r0) == r1) goto L23;
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
                boolean r0 = r7 instanceof js.t.g.a
                if (r0 == 0) goto L13
                r0 = r7
                js.t$g$a r0 = (js.t.g.a) r0
                int r1 = r0.f32662i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32662i = r1
                goto L18
            L13:
                js.t$g$a r0 = new js.t$g$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f32660d
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32662i
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
                kotlin.jvm.internal.Ref$IntRef r7 = r5.f32656d
                int r2 = r7.element
                int r2 = r2 + r4
                r7.element = r2
                int r7 = r5.f32657e
                if (r2 >= r7) goto L54
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f32658i
                r0.f32662i = r4
                java.lang.Object r6 = r7.emit(r6, r0)
                if (r6 != r1) goto L51
                goto L60
            L51:
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            L54:
                kotlinx.coroutines.flow.FlowCollector r7 = r5.f32658i
                java.lang.Object r2 = r5.f32659o
                r0.f32662i = r3
                java.lang.Object r6 = js.t.a(r7, r6, r2, r0)
                if (r6 != r1) goto L61
            L60:
                return r1
            L61:
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.g.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class h implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f32663d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f32664e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            /* synthetic */ Object f32665d;

            /* renamed from: e  reason: collision with root package name */
            int f32666e;

            /* renamed from: o  reason: collision with root package name */
            Object f32668o;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32665d = obj;
                this.f32666e |= Integer.MIN_VALUE;
                return h.this.collect(null, this);
            }
        }

        public h(Flow flow, Function2 function2) {
            this.f32663d = flow;
            this.f32664e = function2;
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
                boolean r0 = r7 instanceof js.t.h.a
                if (r0 == 0) goto L13
                r0 = r7
                js.t$h$a r0 = (js.t.h.a) r0
                int r1 = r0.f32666e
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32666e = r1
                goto L18
            L13:
                js.t$h$a r0 = new js.t$h$a
                r0.<init>(r7)
            L18:
                java.lang.Object r7 = r0.f32665d
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32666e
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r6 = r0.f32668o
                js.t$i r6 = (js.t.i) r6
                kotlin.c.b(r7)     // Catch: ks.a -> L2d
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
                kotlinx.coroutines.flow.Flow r7 = r5.f32663d
                js.t$i r2 = new js.t$i
                kotlin.jvm.functions.Function2 r4 = r5.f32664e
                r2.<init>(r4, r6)
                r0.f32668o = r2     // Catch: ks.a -> L4e
                r0.f32666e = r3     // Catch: ks.a -> L4e
                java.lang.Object r6 = r7.collect(r2, r0)     // Catch: ks.a -> L4e
                if (r6 != r1) goto L5a
                return r1
            L4e:
                r7 = move-exception
                r6 = r2
            L50:
                ks.p.a(r7, r6)
                kotlin.coroutines.CoroutineContext r6 = r0.getContext()
                kotlinx.coroutines.z.k(r6)
            L5a:
                kotlin.Unit r6 = kotlin.Unit.f33298a
                return r6
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.h.collect(kotlinx.coroutines.flow.FlowCollector, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class i implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function2 f32669d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ FlowCollector f32670e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f32671d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f32672e;

            /* renamed from: i  reason: collision with root package name */
            int f32673i;

            /* renamed from: p  reason: collision with root package name */
            Object f32675p;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f32672e = obj;
                this.f32673i |= Integer.MIN_VALUE;
                return i.this.emit(null, this);
            }
        }

        public i(Function2 function2, FlowCollector flowCollector) {
            this.f32669d = function2;
            this.f32670e = flowCollector;
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
                boolean r0 = r9 instanceof js.t.i.a
                if (r0 == 0) goto L13
                r0 = r9
                js.t$i$a r0 = (js.t.i.a) r0
                int r1 = r0.f32673i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f32673i = r1
                goto L18
            L13:
                js.t$i$a r0 = new js.t$i$a
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f32672e
                java.lang.Object r1 = or.b.f()
                int r2 = r0.f32673i
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L38
                if (r2 != r3) goto L30
                java.lang.Object r8 = r0.f32671d
                js.t$i r8 = (js.t.i) r8
                kotlin.c.b(r9)
                goto L7c
            L30:
                java.lang.IllegalStateException r8 = new java.lang.IllegalStateException
                java.lang.String r9 = "call to 'resume' before 'invoke' with coroutine"
                r8.<init>(r9)
                throw r8
            L38:
                java.lang.Object r8 = r0.f32675p
                java.lang.Object r2 = r0.f32671d
                js.t$i r2 = (js.t.i) r2
                kotlin.c.b(r9)
                r6 = r9
                r9 = r8
                r8 = r2
                r2 = r6
                goto L63
            L46:
                kotlin.c.b(r9)
                kotlin.jvm.functions.Function2 r9 = r7.f32669d
                r0.f32671d = r7
                r0.f32675p = r8
                r0.f32673i = r4
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
                kotlinx.coroutines.flow.FlowCollector r2 = r8.f32670e
                r0.f32671d = r8
                r5 = 0
                r0.f32675p = r5
                r0.f32673i = r3
                java.lang.Object r9 = r2.emit(r9, r0)
                if (r9 != r1) goto L7c
            L7a:
                return r1
            L7b:
                r4 = 0
            L7c:
                if (r4 == 0) goto L81
                kotlin.Unit r8 = kotlin.Unit.f33298a
                return r8
            L81:
                ks.a r9 = new ks.a
                r9.<init>(r8)
                throw r9
            */
            throw new UnsupportedOperationException("Method not decompiled: js.t.i.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class j extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f32676d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f32677e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Flow f32678i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ Function3 f32679o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Function3 f32680d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f32681e;

            /* renamed from: js.t$j$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0440a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                Object f32682d;

                /* renamed from: e  reason: collision with root package name */
                /* synthetic */ Object f32683e;

                /* renamed from: i  reason: collision with root package name */
                int f32684i;

                public C0440a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f32683e = obj;
                    this.f32684i |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(Function3 function3, FlowCollector flowCollector) {
                this.f32680d = function3;
                this.f32681e = flowCollector;
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
                    boolean r0 = r6 instanceof js.t.j.a.C0440a
                    if (r0 == 0) goto L13
                    r0 = r6
                    js.t$j$a$a r0 = (js.t.j.a.C0440a) r0
                    int r1 = r0.f32684i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f32684i = r1
                    goto L18
                L13:
                    js.t$j$a$a r0 = new js.t$j$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f32683e
                    java.lang.Object r1 = or.b.f()
                    int r2 = r0.f32684i
                    r3 = 1
                    if (r2 == 0) goto L35
                    if (r2 != r3) goto L2d
                    java.lang.Object r5 = r0.f32682d
                    js.t$j$a r5 = (js.t.j.a) r5
                    kotlin.c.b(r6)
                    goto L50
                L2d:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L35:
                    kotlin.c.b(r6)
                    kotlin.jvm.functions.Function3 r6 = r4.f32680d
                    kotlinx.coroutines.flow.FlowCollector r2 = r4.f32681e
                    r0.f32682d = r4
                    r0.f32684i = r3
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
                    kotlin.Unit r5 = kotlin.Unit.f33298a
                    return r5
                L5b:
                    ks.a r6 = new ks.a
                    r6.<init>(r5)
                    throw r6
                */
                throw new UnsupportedOperationException("Method not decompiled: js.t.j.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        j(Flow flow, Function3 function3, Continuation continuation) {
            super(2, continuation);
            this.f32678i = flow;
            this.f32679o = function3;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            j jVar = new j(this.f32678i, this.f32679o, continuation);
            jVar.f32677e = obj;
            return jVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            a aVar;
            Object f10 = or.b.f();
            int i10 = this.f32676d;
            if (i10 != 0) {
                if (i10 == 1) {
                    aVar = (a) this.f32677e;
                    try {
                        kotlin.c.b(obj);
                    } catch (ks.a e10) {
                        e = e10;
                        ks.p.a(e, aVar);
                        kotlinx.coroutines.z.k(getContext());
                        return Unit.f33298a;
                    }
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow flow = this.f32678i;
                a aVar2 = new a(this.f32679o, (FlowCollector) this.f32677e);
                try {
                    this.f32677e = aVar2;
                    this.f32676d = 1;
                    if (flow.collect(aVar2, this) == f10) {
                        return f10;
                    }
                } catch (ks.a e11) {
                    e = e11;
                    aVar = aVar2;
                    ks.p.a(e, aVar);
                    kotlinx.coroutines.z.k(getContext());
                    return Unit.f33298a;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((j) create(flowCollector, continuation)).invokeSuspend(Unit.f33298a);
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
            boolean r0 = r7 instanceof js.t.e
            if (r0 == 0) goto L13
            r0 = r7
            js.t$e r0 = (js.t.e) r0
            int r1 = r0.f32649i
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f32649i = r1
            goto L18
        L13:
            js.t$e r0 = new js.t$e
            r0.<init>(r7)
        L18:
            java.lang.Object r7 = r0.f32648e
            java.lang.Object r1 = or.b.f()
            int r2 = r0.f32649i
            r3 = 1
            if (r2 == 0) goto L33
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r6 = r0.f32647d
            kotlin.c.b(r7)
            goto L41
        L33:
            kotlin.c.b(r7)
            r0.f32647d = r6
            r0.f32649i = r3
            java.lang.Object r4 = r4.emit(r5, r0)
            if (r4 != r1) goto L41
            return r1
        L41:
            ks.a r4 = new ks.a
            r4.<init>(r6)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: js.t.d(kotlinx.coroutines.flow.FlowCollector, java.lang.Object, java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
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
        return js.g.v(new j(flow, function3, null));
    }
}
