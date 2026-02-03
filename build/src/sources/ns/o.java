package ns;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.functions.Function3;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Flow {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function3 f42007d;

        public a(Function3 function3) {
            this.f42007d = function3;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object a10 = o.a(new b(this.f42007d, flowCollector, null), continuation);
            if (a10 == rr.b.f()) {
                return a10;
            }
            return Unit.f32464a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f42008d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f42009e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function3 f42010i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f42011o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function3 function3, FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f42010i = function3;
            this.f42011o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f42010i, this.f42011o, continuation);
            bVar.f42009e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f42008d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function3 function3 = this.f42010i;
                FlowCollector flowCollector = this.f42011o;
                this.f42008d = 1;
                if (function3.invoke((CoroutineScope) this.f42009e, flowCollector, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32464a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    public static final Object a(Function2 function2, Continuation continuation) {
        n nVar = new n(continuation.getContext(), continuation);
        Object d10 = ps.b.d(nVar, nVar, function2);
        if (d10 == rr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return d10;
    }

    public static final Flow b(Function3 function3) {
        return new a(function3);
    }
}
