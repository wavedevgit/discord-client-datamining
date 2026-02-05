package ps;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract /* synthetic */ class x {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f46568d;

        /* renamed from: ps.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0588a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f46569d;

            /* renamed from: ps.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0589a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f46570d;

                /* renamed from: e  reason: collision with root package name */
                int f46571e;

                public C0589a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f46570d = obj;
                    this.f46571e |= Integer.MIN_VALUE;
                    return C0588a.this.emit(null, this);
                }
            }

            public C0588a(FlowCollector flowCollector) {
                this.f46569d = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof ps.x.a.C0588a.C0589a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ps.x$a$a$a r0 = (ps.x.a.C0588a.C0589a) r0
                    int r1 = r0.f46571e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f46571e = r1
                    goto L18
                L13:
                    ps.x$a$a$a r0 = new ps.x$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f46570d
                    java.lang.Object r1 = ur.b.f()
                    int r2 = r0.f46571e
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r6)
                    goto L41
                L29:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L31:
                    kotlin.c.b(r6)
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f46569d
                    if (r5 == 0) goto L41
                    r0.f46571e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L41
                    return r1
                L41:
                    kotlin.Unit r5 = kotlin.Unit.f31988a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: ps.x.a.C0588a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public a(Flow flow) {
            this.f46568d = flow;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f46568d.collect(new C0588a(flowCollector), continuation);
            if (collect == ur.b.f()) {
                return collect;
            }
            return Unit.f31988a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f46573d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f46574e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f46575d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f46576e;

            /* renamed from: ps.x$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0590a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f46577d;

                /* renamed from: e  reason: collision with root package name */
                int f46578e;

                /* renamed from: o  reason: collision with root package name */
                Object f46580o;

                /* renamed from: p  reason: collision with root package name */
                Object f46581p;

                public C0590a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f46577d = obj;
                    this.f46578e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, Function2 function2) {
                this.f46575d = flowCollector;
                this.f46576e = function2;
            }

            /* JADX WARN: Code restructure failed: missing block: B:21:0x0067, code lost:
                if (r6.emit(r2, r0) != r1) goto L11;
             */
            /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
            /* JADX WARN: Removed duplicated region for block: B:16:0x003e  */
            @Override // kotlinx.coroutines.flow.FlowCollector
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object emit(java.lang.Object r6, kotlin.coroutines.Continuation r7) {
                /*
                    r5 = this;
                    boolean r0 = r7 instanceof ps.x.b.a.C0590a
                    if (r0 == 0) goto L13
                    r0 = r7
                    ps.x$b$a$a r0 = (ps.x.b.a.C0590a) r0
                    int r1 = r0.f46578e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f46578e = r1
                    goto L18
                L13:
                    ps.x$b$a$a r0 = new ps.x$b$a$a
                    r0.<init>(r7)
                L18:
                    java.lang.Object r7 = r0.f46577d
                    java.lang.Object r1 = ur.b.f()
                    int r2 = r0.f46578e
                    r3 = 2
                    r4 = 1
                    if (r2 == 0) goto L3e
                    if (r2 == r4) goto L34
                    if (r2 != r3) goto L2c
                    kotlin.c.b(r7)
                    goto L6a
                L2c:
                    java.lang.IllegalStateException r6 = new java.lang.IllegalStateException
                    java.lang.String r7 = "call to 'resume' before 'invoke' with coroutine"
                    r6.<init>(r7)
                    throw r6
                L34:
                    java.lang.Object r6 = r0.f46581p
                    kotlinx.coroutines.flow.FlowCollector r6 = (kotlinx.coroutines.flow.FlowCollector) r6
                    java.lang.Object r2 = r0.f46580o
                    kotlin.c.b(r7)
                    goto L5c
                L3e:
                    kotlin.c.b(r7)
                    kotlinx.coroutines.flow.FlowCollector r7 = r5.f46575d
                    kotlin.jvm.functions.Function2 r2 = r5.f46576e
                    r0.f46580o = r6
                    r0.f46581p = r7
                    r0.f46578e = r4
                    r4 = 6
                    kotlin.jvm.internal.InlineMarker.mark(r4)
                    java.lang.Object r2 = r2.invoke(r6, r0)
                    r4 = 7
                    kotlin.jvm.internal.InlineMarker.mark(r4)
                    if (r2 != r1) goto L5a
                    goto L69
                L5a:
                    r2 = r6
                    r6 = r7
                L5c:
                    r7 = 0
                    r0.f46580o = r7
                    r0.f46581p = r7
                    r0.f46578e = r3
                    java.lang.Object r6 = r6.emit(r2, r0)
                    if (r6 != r1) goto L6a
                L69:
                    return r1
                L6a:
                    kotlin.Unit r6 = kotlin.Unit.f31988a
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: ps.x.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public b(Flow flow, Function2 function2) {
            this.f46573d = flow;
            this.f46574e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f46573d.collect(new a(flowCollector, this.f46574e), continuation);
            if (collect == ur.b.f()) {
                return collect;
            }
            return Unit.f31988a;
        }
    }

    public static final Flow a(Flow flow) {
        return new a(flow);
    }

    public static final Flow b(Flow flow, Function2 function2) {
        return new b(flow, function2);
    }
}
