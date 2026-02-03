package ks;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Ref;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i0 implements g0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36457d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f36458e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ j0 f36459i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ks.i0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0464a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.BooleanRef f36460d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f36461e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ks.i0$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0465a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f36462d;

                /* renamed from: i  reason: collision with root package name */
                int f36464i;

                C0465a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f36462d = obj;
                    this.f36464i |= Integer.MIN_VALUE;
                    return C0464a.this.a(0, this);
                }
            }

            C0464a(Ref.BooleanRef booleanRef, FlowCollector flowCollector) {
                this.f36460d = booleanRef;
                this.f36461e = flowCollector;
            }

            /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
            /* JADX WARN: Removed duplicated region for block: B:14:0x0031  */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public final java.lang.Object a(int r5, kotlin.coroutines.Continuation r6) {
                /*
                    r4 = this;
                    boolean r0 = r6 instanceof ks.i0.a.C0464a.C0465a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ks.i0$a$a$a r0 = (ks.i0.a.C0464a.C0465a) r0
                    int r1 = r0.f36464i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f36464i = r1
                    goto L18
                L13:
                    ks.i0$a$a$a r0 = new ks.i0$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f36462d
                    java.lang.Object r1 = pr.b.f()
                    int r2 = r0.f36464i
                    r3 = 1
                    if (r2 == 0) goto L31
                    if (r2 != r3) goto L29
                    kotlin.c.b(r6)
                    goto L4b
                L29:
                    java.lang.IllegalStateException r5 = new java.lang.IllegalStateException
                    java.lang.String r6 = "call to 'resume' before 'invoke' with coroutine"
                    r5.<init>(r6)
                    throw r5
                L31:
                    kotlin.c.b(r6)
                    if (r5 <= 0) goto L4e
                    kotlin.jvm.internal.Ref$BooleanRef r5 = r4.f36460d
                    boolean r6 = r5.element
                    if (r6 != 0) goto L4e
                    r5.element = r3
                    kotlinx.coroutines.flow.FlowCollector r5 = r4.f36461e
                    ks.e0 r6 = ks.e0.f36428d
                    r0.f36464i = r3
                    java.lang.Object r5 = r5.emit(r6, r0)
                    if (r5 != r1) goto L4b
                    return r1
                L4b:
                    kotlin.Unit r5 = kotlin.Unit.f33074a
                    return r5
                L4e:
                    kotlin.Unit r5 = kotlin.Unit.f33074a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: ks.i0.a.C0464a.a(int, kotlin.coroutines.Continuation):java.lang.Object");
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                return a(((Number) obj).intValue(), continuation);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(j0 j0Var, Continuation continuation) {
            super(2, continuation);
            this.f36459i = j0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f36459i, continuation);
            aVar.f36458e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = pr.b.f();
            int i10 = this.f36457d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                Ref.BooleanRef booleanRef = new Ref.BooleanRef();
                j0 j0Var = this.f36459i;
                C0464a c0464a = new C0464a(booleanRef, (FlowCollector) this.f36458e);
                this.f36457d = 1;
                if (j0Var.collect(c0464a, this) == f10) {
                    return f10;
                }
            }
            throw new jr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f33074a);
        }
    }

    @Override // ks.g0
    public Flow a(j0 j0Var) {
        return g.v(new a(j0Var, null));
    }

    public String toString() {
        return "SharingStarted.Lazily";
    }
}
