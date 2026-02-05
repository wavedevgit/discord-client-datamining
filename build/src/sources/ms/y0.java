package ms;

import java.util.concurrent.CancellationException;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class y0 extends CancellationException {

    /* renamed from: d  reason: collision with root package name */
    private final transient Job f38961d;

    public y0(String str, Throwable th2, Job job) {
        super(str);
        this.f38961d = job;
        if (th2 != null) {
            initCause(th2);
        }
    }

    public final Job a() {
        Job job = this.f38961d;
        if (job == null) {
            return kotlinx.coroutines.d0.f35026e;
        }
        return job;
    }

    public boolean equals(Object obj) {
        if (obj != this) {
            if (obj instanceof y0) {
                y0 y0Var = (y0) obj;
                if (!Intrinsics.areEqual(y0Var.getMessage(), getMessage()) || !Intrinsics.areEqual(y0Var.a(), a()) || !Intrinsics.areEqual(y0Var.getCause(), getCause())) {
                    return false;
                }
                return true;
            }
            return false;
        }
        return true;
    }

    @Override // java.lang.Throwable
    public Throwable fillInStackTrace() {
        setStackTrace(new StackTraceElement[0]);
        return this;
    }

    public int hashCode() {
        int i10;
        String message = getMessage();
        Intrinsics.checkNotNull(message);
        int hashCode = message.hashCode() * 31;
        Job a10 = a();
        int i11 = 0;
        if (a10 != null) {
            i10 = a10.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        Throwable cause = getCause();
        if (cause != null) {
            i11 = cause.hashCode();
        }
        return i12 + i11;
    }

    @Override // java.lang.Throwable
    public String toString() {
        return super.toString() + "; job=" + a();
    }
}
