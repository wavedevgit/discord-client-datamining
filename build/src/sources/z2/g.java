package z2;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f55566d;

        /* renamed from: e  reason: collision with root package name */
        /* synthetic */ Object f55567e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function2 f55568i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function2 function2, Continuation continuation) {
            super(2, continuation);
            this.f55568i = function2;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f55568i, continuation);
            aVar.f55567e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f55566d;
            if (i10 != 0) {
                if (i10 == 1) {
                    z2.a aVar = (z2.a) this.f55567e;
                    kotlin.c.b(obj);
                    return aVar;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }
            kotlin.c.b(obj);
            z2.a c10 = ((d) this.f55567e).c();
            Function2 function2 = this.f55568i;
            this.f55567e = c10;
            this.f55566d = 1;
            if (function2.invoke(c10, this) == f10) {
                return f10;
            }
            return c10;
        }

        @Override // kotlin.jvm.functions.Function2
        /* renamed from: j */
        public final Object invoke(d dVar, Continuation continuation) {
            return ((a) create(dVar, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public static final Object a(w2.f fVar, Function2 function2, Continuation continuation) {
        return fVar.a(new a(function2, null), continuation);
    }
}
