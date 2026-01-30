package kotlinx.coroutines;

import gs.e1;
import gs.n0;
import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends kotlin.coroutines.a implements Job {

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f36336e = new d0();

    private d0() {
        super(Job.f36307j);
    }

    @Override // kotlinx.coroutines.Job
    public n0 C0(Function1 function1) {
        return e1.f27169d;
    }

    @Override // kotlinx.coroutines.Job
    public n0 L(boolean z10, boolean z11, Function1 function1) {
        return e1.f27169d;
    }

    @Override // kotlinx.coroutines.Job
    public CancellationException N() {
        throw new IllegalStateException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public Object X0(Continuation continuation) {
        throw new UnsupportedOperationException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public gs.n Y0(gs.o oVar) {
        return e1.f27169d;
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public Sequence getChildren() {
        return kotlin.sequences.k.j();
    }

    @Override // kotlinx.coroutines.Job, is.v
    public void h(CancellationException cancellationException) {
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
    public boolean start() {
        return false;
    }

    public String toString() {
        return "NonCancellable";
    }
}
