package fo;

import fo.x;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f24039d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f24040e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f24041i;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            x xVar;
            Object f10 = gs.b.f();
            int i10 = this.f24039d;
            if (i10 != 0) {
                if (i10 == 1) {
                    xVar = (x) this.f24040e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                x xVar2 = (x) this.f24041i;
                this.f24040e = xVar2;
                this.f24039d = 1;
                if (((FlowCollector) this.f24040e).emit(xVar2, this) == f10) {
                    return f10;
                }
                xVar = xVar2;
            }
            return kotlin.coroutines.jvm.internal.b.a(!(xVar instanceof x.a));
        }

        @Override // kotlin.jvm.functions.Function3
        /* renamed from: j */
        public final Object invoke(FlowCollector flowCollector, x xVar, Continuation continuation) {
            a aVar = new a(continuation);
            aVar.f24040e = flowCollector;
            aVar.f24041i = xVar;
            return aVar.invokeSuspend(Unit.f31987a);
        }
    }

    public static final Flow a(bt.j0 j0Var) {
        Intrinsics.checkNotNullParameter(j0Var, "<this>");
        return bt.g.N(j0Var, new a(null));
    }
}
