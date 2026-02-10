package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.sequences.Sequence;
import ps.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Job extends CoroutineContext.Element {

    /* renamed from: h  reason: collision with root package name */
    public static final b f34774h = b.f34775d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ void a(Job job, CancellationException cancellationException, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    cancellationException = null;
                }
                job.k(cancellationException);
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
        static final /* synthetic */ b f34775d = new b();

        private b() {
        }
    }

    CancellationException C();

    n0 Q(Function1 function1);

    Object W0(Continuation continuation);

    boolean a();

    ps.n a1(ps.o oVar);

    Sequence getChildren();

    boolean isCancelled();

    boolean isCompleted();

    void k(CancellationException cancellationException);

    boolean start();

    n0 z(boolean z10, boolean z11, Function1 function1);
}
