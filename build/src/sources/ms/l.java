package ms;

import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class l {
    public static final void a(CancellableContinuation cancellableContinuation, n0 n0Var) {
        c(cancellableContinuation, new o0(n0Var));
    }

    public static final kotlinx.coroutines.e b(Continuation continuation) {
        if (!(continuation instanceof rs.i)) {
            return new kotlinx.coroutines.e(continuation, 1);
        }
        kotlinx.coroutines.e n10 = ((rs.i) continuation).n();
        if (n10 != null) {
            if (!n10.Q()) {
                n10 = null;
            }
            if (n10 != null) {
                return n10;
            }
        }
        return new kotlinx.coroutines.e(continuation, 2);
    }

    public static final void c(CancellableContinuation cancellableContinuation, kotlinx.coroutines.d dVar) {
        if (cancellableContinuation instanceof kotlinx.coroutines.e) {
            ((kotlinx.coroutines.e) cancellableContinuation).K(dVar);
            return;
        }
        throw new UnsupportedOperationException("third-party implementation of CancellableContinuation is not supported");
    }
}
