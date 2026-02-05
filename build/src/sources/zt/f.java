package zt;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final eu.g f56285a;

    public f(eu.g delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f56285a = delegate;
    }

    public final eu.g a() {
        return this.f56285a;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public f(int i10, long j10, TimeUnit timeUnit) {
        this(new eu.g(du.e.f21258i, i10, j10, timeUnit));
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
    }

    public f() {
        this(5, 5L, TimeUnit.MINUTES);
    }
}
