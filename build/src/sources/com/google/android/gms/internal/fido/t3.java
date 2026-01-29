package com.google.android.gms.internal.fido;

import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t3 extends x0 implements Future {
    /* JADX INFO: Access modifiers changed from: protected */
    public abstract Future e();

    @Override // java.util.concurrent.Future
    public final Object get() {
        return e().get();
    }

    @Override // java.util.concurrent.Future
    public final boolean isCancelled() {
        return e().isCancelled();
    }

    @Override // java.util.concurrent.Future
    public final boolean isDone() {
        return e().isDone();
    }

    @Override // java.util.concurrent.Future
    public final Object get(long j10, TimeUnit timeUnit) {
        return e().get(j10, timeUnit);
    }
}
