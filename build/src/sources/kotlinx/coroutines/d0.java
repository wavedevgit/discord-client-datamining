package kotlinx.coroutines;

import java.util.concurrent.CancellationException;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.sequences.Sequence;
import ys.e1;
import ys.n0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 extends kotlin.coroutines.a implements Job {

    /* renamed from: e  reason: collision with root package name */
    public static final d0 f35026e = new d0();

    private d0() {
        super(Job.f34997k);
    }

    @Override // kotlinx.coroutines.Job
    public n0 C(boolean z10, boolean z11, Function1 function1) {
        return e1.f55792d;
    }

    @Override // kotlinx.coroutines.Job
    public CancellationException I() {
        throw new IllegalStateException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public Object S0(Continuation continuation) {
        throw new UnsupportedOperationException("This job is always active");
    }

    @Override // kotlinx.coroutines.Job
    public boolean a() {
        return true;
    }

    @Override // kotlinx.coroutines.Job
    public Sequence getChildren() {
        return kotlin.sequences.k.j();
    }

    @Override // kotlinx.coroutines.Job, at.v
    public void i(CancellationException cancellationException) {
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

    @Override // kotlinx.coroutines.Job
    public ys.n y(ys.o oVar) {
        return e1.f55792d;
    }

    @Override // kotlinx.coroutines.Job
    public n0 z0(Function1 function1) {
        return e1.f55792d;
    }
}
