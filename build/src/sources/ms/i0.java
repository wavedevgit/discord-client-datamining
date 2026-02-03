package ms;

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
        int f39184d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39185e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ j0 f39186i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ms.i0$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class C0497a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ Ref.BooleanRef f39187d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ FlowCollector f39188e;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: ms.i0$a$a$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class C0498a extends kotlin.coroutines.jvm.internal.d {

                /* renamed from: d  reason: collision with root package name */
                /* synthetic */ Object f39189d;

                /* renamed from: i  reason: collision with root package name */
                int f39191i;

                C0498a(Continuation continuation) {
                    super(continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    this.f39189d = obj;
                    this.f39191i |= Integer.MIN_VALUE;
                    return C0497a.this.a(0, this);
                }
            }

            C0497a(Ref.BooleanRef booleanRef, FlowCollector flowCollector) {
                this.f39187d = booleanRef;
                this.f39188e = flowCollector;
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
                    boolean r0 = r6 instanceof ms.i0.a.C0497a.C0498a
                    if (r0 == 0) goto L13
                    r0 = r6
                    ms.i0$a$a$a r0 = (ms.i0.a.C0497a.C0498a) r0
                    int r1 = r0.f39191i
                    r2 = -2147483648(0xffffffff80000000, float:-0.0)
                    r3 = r1 & r2
                    if (r3 == 0) goto L13
                    int r1 = r1 - r2
                    r0.f39191i = r1
                    goto L18
                L13:
                    ms.i0$a$a$a r0 = new ms.i0$a$a$a
                    r0.<init>(r6)
                L18:
                    java.lang.Object r6 = r0.f39189d
                    java.lang.Object r1 = rr.b.f()
                    int r2 = r0.f39191i
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
                    kotlin.jvm.internal.Ref$BooleanRef r5 = r4.f39187d
                    boolean r6 = r5.element
                    if (r6 != 0) goto L4e
                    r5.element = r3
                    kotlinx.coroutines.flow.FlowCollector r5 = r4.f39188e
                    ms.e0 r6 = ms.e0.f39155d
                    r0.f39191i = r3
                    java.lang.Object r5 = r5.emit(r6, r0)
                    if (r5 != r1) goto L4b
                    return r1
                L4b:
                    kotlin.Unit r5 = kotlin.Unit.f32464a
                    return r5
                L4e:
                    kotlin.Unit r5 = kotlin.Unit.f32464a
                    return r5
                */
                throw new UnsupportedOperationException("Method not decompiled: ms.i0.a.C0497a.a(int, kotlin.coroutines.Continuation):java.lang.Object");
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                return a(((Number) obj).intValue(), continuation);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(j0 j0Var, Continuation continuation) {
            super(2, continuation);
            this.f39186i = j0Var;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f39186i, continuation);
            aVar.f39185e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f39184d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                Ref.BooleanRef booleanRef = new Ref.BooleanRef();
                j0 j0Var = this.f39186i;
                C0497a c0497a = new C0497a(booleanRef, (FlowCollector) this.f39185e);
                this.f39184d = 1;
                if (j0Var.collect(c0497a, this) == f10) {
                    return f10;
                }
            }
            throw new lr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(FlowCollector flowCollector, Continuation continuation) {
            return ((a) create(flowCollector, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    @Override // ms.g0
    public Flow a(j0 j0Var) {
        return g.v(new a(j0Var, null));
    }

    public String toString() {
        return "SharingStarted.Lazily";
    }
}
