package kotlinx.coroutines;

import gs.n0;
import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface Job extends CoroutineContext.Element {

    /* renamed from: j  reason: collision with root package name */
    public static final b f36307j = b.f36308d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static /* synthetic */ void a(Job job, CancellationException cancellationException, int i10, Object obj) {
            if (obj == null) {
                if ((i10 & 1) != 0) {
                    cancellationException = null;
                }
                job.h(cancellationException);
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
        static final /* synthetic */ b f36308d = new b();

        private b() {
        }
    }

    n0 C0(Function1 function1);

    n0 L(boolean z10, boolean z11, Function1 function1);

    CancellationException N();

    Object X0(Continuation continuation);

    gs.n Y0(gs.o oVar);

    boolean a();

    Sequence getChildren();

    void h(CancellationException cancellationException);

    boolean isCancelled();

    boolean isCompleted();

    boolean start();
}
