package mn;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function3;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import mn.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function3 {

        /* renamed from: d  reason: collision with root package name */
        int f39223d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f39224e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f39225i;

        a(Continuation continuation) {
            super(3, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            x xVar;
            Object f10 = or.b.f();
            int i10 = this.f39223d;
            if (i10 != 0) {
                if (i10 == 1) {
                    xVar = (x) this.f39224e;
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                x xVar2 = (x) this.f39225i;
                this.f39224e = xVar2;
                this.f39223d = 1;
                if (((FlowCollector) this.f39224e).emit(xVar2, this) == f10) {
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
            aVar.f39224e = flowCollector;
            aVar.f39225i = xVar;
            return aVar.invokeSuspend(Unit.f33282a);
        }
    }

    public static final Flow a(js.j0 j0Var) {
        Intrinsics.checkNotNullParameter(j0Var, "<this>");
        return js.g.N(j0Var, new a(null));
    }
}
