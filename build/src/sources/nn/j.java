package nn;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import nn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f41982d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f41983e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f41984i;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            x xVar;
            Object f10 = pr.b.f();
            int i10 = this.f41982d;
            if (i10 != 0) {
                if (i10 == 1) {
                    xVar = (x) this.f41983e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                x xVar2 = (x) this.f41984i;
                this.f41983e = xVar2;
                this.f41982d = 1;
                if (((FlowCollector) this.f41983e).emit(xVar2, this) == f10) {
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
            aVar.f41983e = flowCollector;
            aVar.f41984i = xVar;
            return aVar.invokeSuspend(Unit.f33074a);
        }
    }

    public static final Flow a(ks.j0 j0Var) {
        Intrinsics.checkNotNullParameter(j0Var, "<this>");
        return ks.g.N(j0Var, new a(null));
    }
}
