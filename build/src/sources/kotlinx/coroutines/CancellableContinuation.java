package kotlinx.coroutines;

import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function3;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface CancellableContinuation extends Continuation {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ boolean a(CancellableContinuation cancellableContinuation, Throwable th2, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    th2 = null;
                }
                return cancellableContinuation.h(th2);
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: cancel");
        }
    }

    void A(Object obj);

    boolean a();

    void c(Function1 function1);

    Object e(Throwable th2);

    void f(CoroutineDispatcher coroutineDispatcher, Throwable th2);

    boolean h(Throwable th2);

    boolean isCompleted();

    void r(Object obj, Function3 function3);

    void t(CoroutineDispatcher coroutineDispatcher, Object obj);

    Object w(Object obj, Object obj2, Function3 function3);
}
