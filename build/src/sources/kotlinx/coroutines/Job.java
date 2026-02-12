package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.sequences.Sequence;
import ys.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Job extends CoroutineContext.Element {

    /* renamed from: k  reason: collision with root package name */
    public static final b f34997k = b.f34998d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ void a(Job job, CancellationException cancellationException, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    cancellationException = null;
                }
                job.i(cancellationException);
                return;
            }
            throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: cancel");
        }

        public static Object b(Job job, Object obj, Function2 function2) {
            return CoroutineContext.Element.a.a(job, obj, function2);
        }

        public static CoroutineContext.Element c(Job job, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.b(job, bVar);
        }

        public static CoroutineContext d(Job job, CoroutineContext.b bVar) {
            return CoroutineContext.Element.a.c(job, bVar);
        }

        public static CoroutineContext e(Job job, CoroutineContext coroutineContext) {
            return CoroutineContext.Element.a.d(job, coroutineContext);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements CoroutineContext.b {

        /* renamed from: d  reason: collision with root package name */
        static final /* synthetic */ b f34998d = new b();

        private b() {
        }
    }

    n0 C(boolean z10, boolean z11, Function1 function1);

    CancellationException I();

    Object S0(Continuation continuation);

    boolean a();

    Sequence getChildren();

    void i(CancellationException cancellationException);

    boolean isCancelled();

    boolean isCompleted();

    boolean start();

    ys.n y(ys.o oVar);

    n0 z0(Function1 function1);
}
