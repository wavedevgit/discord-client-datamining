package com.google.android.gms.internal.fido;

import java.util.concurrent.Delayed;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g4 extends u3 implements ScheduledFuture, c4 {

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledFuture f13614e;

    public g4(c4 c4Var, ScheduledFuture scheduledFuture) {
        super(c4Var);
        this.f13614e = scheduledFuture;
    }

    @Override // java.util.concurrent.Future
    public final boolean cancel(boolean z10) {
        boolean cancel = e().cancel(z10);
        if (cancel) {
            this.f13614e.cancel(z10);
        }
        return cancel;
    }

    @Override // java.lang.Comparable
    public final /* bridge */ /* synthetic */ int compareTo(Delayed delayed) {
        return this.f13614e.compareTo(delayed);
    }

    @Override // java.util.concurrent.Delayed
    public final long getDelay(TimeUnit timeUnit) {
        return this.f13614e.getDelay(timeUnit);
    }
}
