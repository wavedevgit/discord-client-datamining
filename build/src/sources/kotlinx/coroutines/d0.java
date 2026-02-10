package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
import ps.e1;
import ps.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends kotlin.coroutines.a implements Job {

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f34803e = new d0();

    private d0() {
        super(Job.f34774h);
    }

    @Override // kotlinx.coroutines.Job
    public CancellationException C() {
        throw new IllegalStateException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public n0 Q(Function1 function1) {
        return e1.f44505d;
    }

    @Override // kotlinx.coroutines.Job
    public Object W0(Continuation continuation) {
        throw new UnsupportedOperationException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public ps.n a1(ps.o oVar) {
        return e1.f44505d;
    }

    @Override // kotlinx.coroutines.Job
    public Sequence getChildren() {
        return kotlin.sequences.k.j();
    }

    @Override // kotlinx.coroutines.Job
    public boolean isCancelled() {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public boolean isCompleted() {
        return false;
    }

    @Override // kotlinx.coroutines.Job
    public void k(CancellationException cancellationException) {
    }

    @Override // kotlinx.coroutines.Job
    public boolean start() {
        return false;
    }

    public String toString() {
        return "NonCancellable";
    }

    @Override // kotlinx.coroutines.Job
    public n0 z(boolean z10, boolean z11, Function1 function1) {
        return e1.f44505d;
    }
}
