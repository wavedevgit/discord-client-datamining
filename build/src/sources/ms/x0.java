package ms;

import java.util.concurrent.CancellationException;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class x0 {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f38958d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f38959e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Function0 f38960i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(Function0 function0, Continuation continuation) {
            super(2, continuation);
            this.f38960i = function0;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f38960i, continuation);
            aVar.f38959e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f38958d == 0) {
                kotlin.c.b(obj);
                return x0.d(((CoroutineScope) this.f38959e).getCoroutineContext(), this.f38960i);
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public static final Object b(CoroutineContext coroutineContext, Function0 function0, Continuation continuation) {
        return g.g(coroutineContext, new a(function0, null), continuation);
    }

    public static /* synthetic */ Object c(CoroutineContext coroutineContext, Function0 function0, Continuation continuation, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            coroutineContext = kotlin.coroutines.e.f32062d;
        }
        return b(coroutineContext, function0, continuation);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Object d(CoroutineContext coroutineContext, Function0 function0) {
        try {
            q1 q1Var = new q1();
            q1Var.B(kotlinx.coroutines.z.m(coroutineContext));
            Object invoke = function0.invoke();
            q1Var.y();
            return invoke;
        } catch (InterruptedException e10) {
            throw new CancellationException("Blocking call was interrupted due to parent cancellation").initCause(e10);
        }
    }
}
