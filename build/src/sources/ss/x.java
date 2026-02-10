package ss;

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
        final /* synthetic */ Flow f50342d;

        /* renamed from: ss.x$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0689a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50343d;

            /* renamed from: ss.x$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0690a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f50344d;

                /* renamed from: e  reason: collision with root package name */
                int f50345e;

                public C0690a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f50344d = obj;
                    this.f50345e |= Integer.MIN_VALUE;
                    return C0689a.this.emit(null, this);
                }
            }

            public C0689a(FlowCollector flowCollector) {
                this.f50343d = flowCollector;
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
                    boolean r0 = r6 instanceof ss.x.a.C0689a.C0690a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ss.x$a$a$a r0 = (ss.x.a.C0689a.C0690a) r0
                    int r1 = r0.f50345e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f50345e = r1
                    goto L18
                L13:
                    ss.x$a$a$a r0 = new ss.x$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f50344d
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f50345e
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
                    kotlinx.coroutines.flow.FlowCollector r6 = r4.f50343d
                    if (r5 == 0) goto L41
                    r0.f50345e = r3
                    java.lang.Object r5 = r6.emit(r5, r0)
                    if (r5 != r1) goto L41
                    return r1
                L41:
                    kotlin.Unit r5 = kotlin.Unit.f31765a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: ss.x.a.C0689a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public a(Flow flow) {
            this.f50342d = flow;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f50342d.collect(new C0689a(flowCollector), continuation);
            if (collect == xr.b.f()) {
                return collect;
            }
            return Unit.f31765a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Flow f50347d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Function2 f50348e;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ FlowCollector f50349d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Function2 f50350e;

            /* renamed from: ss.x$b$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0691a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f50351d;

                /* renamed from: e  reason: collision with root package name */
                int f50352e;

                /* renamed from: o  reason: collision with root package name */
                Object f50354o;

                /* renamed from: p  reason: collision with root package name */
                Object f50355p;

                public C0691a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f50351d = obj;
                    this.f50352e |= Integer.MIN_VALUE;
                    return a.this.emit(null, this);
                }
            }

            public a(FlowCollector flowCollector, Function2 function2) {
                this.f50349d = flowCollector;
                this.f50350e = function2;
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
                    boolean r0 = r7 instanceof ss.x.b.a.C0691a
                    if (r0 == 0) goto L13
                    r0 = r7
                    ss.x$b$a$a r0 = (ss.x.b.a.C0691a) r0
                    int r1 = r0.f50352e
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f50352e = r1
                    goto L18
                L13:
                    ss.x$b$a$a r0 = new ss.x$b$a$a
                    r0.<init>(r7)
                L18:
                    java.lang.Object r7 = r0.f50351d
                    java.lang.Object r1 = xr.b.f()
                    int r2 = r0.f50352e
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
                    java.lang.Object r6 = r0.f50355p
                    kotlinx.coroutines.flow.FlowCollector r6 = (kotlinx.coroutines.flow.FlowCollector) r6
                    java.lang.Object r2 = r0.f50354o
                    kotlin.c.b(r7)
                    goto L5c
                L3e:
                    kotlin.c.b(r7)
                    kotlinx.coroutines.flow.FlowCollector r7 = r5.f50349d
                    kotlin.jvm.functions.Function2 r2 = r5.f50350e
                    r0.f50354o = r6
                    r0.f50355p = r7
                    r0.f50352e = r4
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
                    r0.f50354o = r7
                    r0.f50355p = r7
                    r0.f50352e = r3
                    java.lang.Object r6 = r6.emit(r2, r0)
                    if (r6 != r1) goto L6a
                L69:
                    return r1
                L6a:
                    kotlin.Unit r6 = kotlin.Unit.f31765a
                    return r6
                */
                throw new UnsupportedOperationException("Method not decompiled: ss.x.b.a.emit(java.lang.Object, kotlin.coroutines.Continuation):java.lang.Object");
            }
        }

        public b(Flow flow, Function2 function2) {
            this.f50347d = flow;
            this.f50348e = function2;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object collect = this.f50347d.collect(new a(flowCollector, this.f50348e), continuation);
            if (collect == xr.b.f()) {
                return collect;
            }
            return Unit.f31765a;
        }
    }

    public static final Flow a(Flow flow) {
        return new a(flow);
    }

    public static final Flow b(Flow flow, Function2 function2) {
        return new b(flow, function2);
    }
}
