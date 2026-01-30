package ks;

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
        final /* synthetic */ Function3 f36525d;

        public a(Function3 function3) {
            this.f36525d = function3;
        }

        @Override // kotlinx.coroutines.flow.Flow
        public Object collect(FlowCollector flowCollector, Continuation continuation) {
            Object a10 = o.a(new b(this.f36525d, flowCollector, null), continuation);
            if (a10 == or.b.f()) {
                return a10;
            }
            return Unit.f33298a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static final class b extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f36526d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f36527e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function3 f36528i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FlowCollector f36529o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        b(Function3 function3, FlowCollector flowCollector, Continuation continuation) {
            super(2, continuation);
            this.f36528i = function3;
            this.f36529o = flowCollector;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            b bVar = new b(this.f36528i, this.f36529o, continuation);
            bVar.f36527e = obj;
            return bVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = or.b.f();
            int i10 = this.f36526d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Function3 function3 = this.f36528i;
                FlowCollector flowCollector = this.f36529o;
                this.f36526d = 1;
                if (function3.invoke((CoroutineScope) this.f36527e, flowCollector, this) == f10) {
                    return f10;
                }
            }
            return Unit.f33298a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((b) create(coroutineScope, continuation)).invokeSuspend(Unit.f33298a);
        }
    }

    public static final Object a(Function2 function2, Continuation continuation) {
        n nVar = new n(continuation.getContext(), continuation);
        Object d10 = ms.b.d(nVar, nVar, function2);
        if (d10 == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        return d10;
    }

    public static final Flow b(Function3 function3) {
        return new a(function3);
    }
}
