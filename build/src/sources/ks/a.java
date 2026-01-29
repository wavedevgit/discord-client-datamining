package ks;

import java.util.concurrent.CancellationException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends CancellationException {

    /* renamed from: d  reason: collision with root package name */
    public final transient Object f36436d;

    public a(Object obj) {
        super("Flow was aborted, no more elements needed");
        this.f36436d = obj;
    }

    @Override // java.lang.Throwable
    public Throwable fillInStackTrace() {
        setStackTrace(new StackTraceElement[0]);
        return this;
    }
}
