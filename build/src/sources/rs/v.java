package rs;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class v {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f49483d;

        public a(Ref.ObjectRef objectRef) {
            this.f49483d = objectRef;
        }

        /* JADX WARN: Multi-variable type inference failed */
        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            this.f49483d.element = obj;
            throw new ss.a(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function2 f49484d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f49485e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f49486d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f49487e;

            /* renamed from: i  reason: collision with root package name */
            int f49488i;

            /* renamed from: p  reason: collision with root package name */
            Object f49490p;

            public a(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f49487e = obj;
                this.f49488i |= Integer.MIN_VALUE;
                return b.this.emit(null, this);
            }
        }

        public b(Function2 function2, Ref.ObjectRef objectRef) {
            this.f49484d = function2;
            this.f49485e = objectRef;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
        /* JADX WARN: Removed duplicated region for block: B:14:0x0037  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x005a  */
        /* JADX WARN: Removed duplicated region for block: B:22:0x005d  */
        @Override // kotlinx.coroutines.flow.FlowCollector
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
            /*
                r4 = this;
                boolean r0 = r6 instanceof rs.v.b.a
                if (r0 == 0) goto L13
                r0 = r6
                rs.v$b$a r0 = (rs.v.b.a) r0
                int r1 = r0.f49488i
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f49488i = r1
                goto L18
            L13:
                rs.v$b$a r0 = new rs.v$b$a
                r0.<init>(r6)
            L18:
                java.lang.Object r6 = r0.f49487e
                java.lang.Object r1 = wr.b.f()
                int r2 = r0.f49488i
                r3 = 1
                if (r2 == 0) goto L37
                if (r2 != r3) goto L2f
                java.lang.Object r5 = r0.f49490p
                java.lang.Object r0 = r0.f49486d
                rs.v$b r0 = (rs.v.b) r0
                kotlin.c.b(r6)
                goto L52
            L2f:
                java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                r5.<init>(r6)
                throw r5
            L37:
                kotlin.c.b(r6)
                kotlin.jvm.functions.Function2 r6 = r4.f49484d
                r0.f49486d = r4
                r0.f49490p = r5
                r0.f49488i = r3
                r2 = 6
                kotlin.jvm.internal.InlineMarker.mark(r2)
                java.lang.Object r6 = r6.invoke(r5, r0)
                r0 = 7
                kotlin.jvm.internal.InlineMarker.mark(r0)
                if (r6 != r1) goto L51
                return r1
            L51:
                r0 = r4
            L52:
                java.lang.Boolean r6 = (java.lang.Boolean) r6
                boolean r6 = r6.booleanValue()
                if (r6 != 0) goto L5d
                kotlin.Unit r5 = kotlin.Unit.f32056a
                return r5
            L5d:
                kotlin.jvm.internal.Ref$ObjectRef r6 = r0.f49485e
                r6.element = r5
                ss.a r5 = new ss.a
                r5.<init>(r0)
                throw r5
            */
            throw new UnsupportedOperationException("Method not decompiled: rs.v.b.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49491d;

        /* renamed from: e  reason: collision with root package name */
        Object f49492e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f49493i;

        /* renamed from: o  reason: collision with root package name */
        int f49494o;

        c(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49493i = obj;
            this.f49494o |= Integer.MIN_VALUE;
            return g.s(null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49495d;

        /* renamed from: e  reason: collision with root package name */
        Object f49496e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f49497i;

        /* renamed from: o  reason: collision with root package name */
        int f49498o;

        d(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49497i = obj;
            this.f49498o |= Integer.MIN_VALUE;
            return g.t(null, null, this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e implements FlowCollector {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.ObjectRef f49499d;

        public e(Ref.ObjectRef objectRef) {
            this.f49499d = objectRef;
        }

        /* JADX WARN: Multi-variable type inference failed */
        @Override // kotlinx.coroutines.flow.FlowCollector
        public Object emit(Object obj, Continuation continuation) {
            this.f49499d.element = obj;
            throw new ss.a(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class f extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f49500d;

        /* renamed from: e  reason: collision with root package name */
        Object f49501e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f49502i;

        /* renamed from: o  reason: collision with root package name */
        int f49503o;

        f(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f49502i = obj;
            this.f49503o |= Integer.MIN_VALUE;
            return g.u(null, this);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x006f A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0070  */
    /* JADX WARN: Type inference failed for: r2v1, types: [T, ts.e0] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object a(kotlinx.coroutines.flow.Flow r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof rs.v.c
            if (r0 == 0) goto L13
            r0 = r5
            rs.v$c r0 = (rs.v.c) r0
            int r1 = r0.f49494o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f49494o = r1
            goto L18
        L13:
            rs.v$c r0 = new rs.v$c
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f49493i
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f49494o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r4 = r0.f49492e
            rs.v$a r4 = (rs.v.a) r4
            java.lang.Object r1 = r0.f49491d
            kotlin.jvm.internal.Ref$ObjectRef r1 = (kotlin.jvm.internal.Ref.ObjectRef) r1
            kotlin.c.b(r5)     // Catch: ss.a -> L31
            goto L69
        L31:
            r5 = move-exception
            goto L5f
        L33:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L3b:
            kotlin.c.b(r5)
            kotlin.jvm.internal.Ref$ObjectRef r5 = new kotlin.jvm.internal.Ref$ObjectRef
            r5.<init>()
            ts.e0 r2 = ss.t.f50147a
            r5.element = r2
            rs.v$a r2 = new rs.v$a
            r2.<init>(r5)
            r0.f49491d = r5     // Catch: ss.a -> L5b
            r0.f49492e = r2     // Catch: ss.a -> L5b
            r0.f49494o = r3     // Catch: ss.a -> L5b
            java.lang.Object r4 = r4.collect(r2, r0)     // Catch: ss.a -> L5b
            if (r4 != r1) goto L59
            return r1
        L59:
            r1 = r5
            goto L69
        L5b:
            r4 = move-exception
            r1 = r5
            r5 = r4
            r4 = r2
        L5f:
            ss.p.a(r5, r4)
            kotlin.coroutines.CoroutineContext r4 = r0.getContext()
            kotlinx.coroutines.z.k(r4)
        L69:
            T r4 = r1.element
            ts.e0 r5 = ss.t.f50147a
            if (r4 == r5) goto L70
            return r4
        L70:
            java.util.NoSuchElementException r4 = new java.util.NoSuchElementException
            java.lang.String r5 = "Expected at least one element"
            r4.<init>(r5)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.v.a(kotlinx.coroutines.flow.Flow, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003b  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x006f A[RETURN] */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0070  */
    /* JADX WARN: Type inference failed for: r2v1, types: [T, ts.e0] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object b(kotlinx.coroutines.flow.Flow r4, kotlin.jvm.functions.Function2 r5, kotlin.coroutines.Continuation r6) {
        /*
            boolean r0 = r6 instanceof rs.v.d
            if (r0 == 0) goto L13
            r0 = r6
            rs.v$d r0 = (rs.v.d) r0
            int r1 = r0.f49498o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f49498o = r1
            goto L18
        L13:
            rs.v$d r0 = new rs.v$d
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f49497i
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f49498o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r4 = r0.f49496e
            rs.v$b r4 = (rs.v.b) r4
            java.lang.Object r5 = r0.f49495d
            kotlin.jvm.internal.Ref$ObjectRef r5 = (kotlin.jvm.internal.Ref.ObjectRef) r5
            kotlin.c.b(r6)     // Catch: ss.a -> L31
            goto L69
        L31:
            r6 = move-exception
            goto L5f
        L33:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L3b:
            kotlin.c.b(r6)
            kotlin.jvm.internal.Ref$ObjectRef r6 = new kotlin.jvm.internal.Ref$ObjectRef
            r6.<init>()
            ts.e0 r2 = ss.t.f50147a
            r6.element = r2
            rs.v$b r2 = new rs.v$b
            r2.<init>(r5, r6)
            r0.f49495d = r6     // Catch: ss.a -> L5b
            r0.f49496e = r2     // Catch: ss.a -> L5b
            r0.f49498o = r3     // Catch: ss.a -> L5b
            java.lang.Object r4 = r4.collect(r2, r0)     // Catch: ss.a -> L5b
            if (r4 != r1) goto L59
            return r1
        L59:
            r5 = r6
            goto L69
        L5b:
            r4 = move-exception
            r5 = r6
            r6 = r4
            r4 = r2
        L5f:
            ss.p.a(r6, r4)
            kotlin.coroutines.CoroutineContext r4 = r0.getContext()
            kotlinx.coroutines.z.k(r4)
        L69:
            T r4 = r5.element
            ts.e0 r5 = ss.t.f50147a
            if (r4 == r5) goto L70
            return r4
        L70:
            java.util.NoSuchElementException r4 = new java.util.NoSuchElementException
            java.lang.String r5 = "Expected at least one element matching the predicate"
            r4.<init>(r5)
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.v.b(kotlinx.coroutines.flow.Flow, kotlin.jvm.functions.Function2, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:18:0x003b  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object c(kotlinx.coroutines.flow.Flow r4, kotlin.coroutines.Continuation r5) {
        /*
            boolean r0 = r5 instanceof rs.v.f
            if (r0 == 0) goto L13
            r0 = r5
            rs.v$f r0 = (rs.v.f) r0
            int r1 = r0.f49503o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f49503o = r1
            goto L18
        L13:
            rs.v$f r0 = new rs.v$f
            r0.<init>(r5)
        L18:
            java.lang.Object r5 = r0.f49502i
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f49503o
            r3 = 1
            if (r2 == 0) goto L3b
            if (r2 != r3) goto L33
            java.lang.Object r4 = r0.f49501e
            rs.v$e r4 = (rs.v.e) r4
            java.lang.Object r1 = r0.f49500d
            kotlin.jvm.internal.Ref$ObjectRef r1 = (kotlin.jvm.internal.Ref.ObjectRef) r1
            kotlin.c.b(r5)     // Catch: ss.a -> L31
            goto L65
        L31:
            r5 = move-exception
            goto L5b
        L33:
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L3b:
            kotlin.c.b(r5)
            kotlin.jvm.internal.Ref$ObjectRef r5 = new kotlin.jvm.internal.Ref$ObjectRef
            r5.<init>()
            rs.v$e r2 = new rs.v$e
            r2.<init>(r5)
            r0.f49500d = r5     // Catch: ss.a -> L57
            r0.f49501e = r2     // Catch: ss.a -> L57
            r0.f49503o = r3     // Catch: ss.a -> L57
            java.lang.Object r4 = r4.collect(r2, r0)     // Catch: ss.a -> L57
            if (r4 != r1) goto L55
            return r1
        L55:
            r1 = r5
            goto L65
        L57:
            r4 = move-exception
            r1 = r5
            r5 = r4
            r4 = r2
        L5b:
            ss.p.a(r5, r4)
            kotlin.coroutines.CoroutineContext r4 = r0.getContext()
            kotlinx.coroutines.z.k(r4)
        L65:
            T r4 = r1.element
            return r4
        */
        throw new UnsupportedOperationException("Method not decompiled: rs.v.c(kotlinx.coroutines.flow.Flow, kotlin.coroutines.Continuation):java.lang.Object");
    }
}
