package cu;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final hu.g f20269a;

    public f(hu.g delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f20269a = delegate;
    }

    public final hu.g a() {
        return this.f20269a;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public f(int i10, long j10, TimeUnit timeUnit) {
        this(new hu.g(gu.e.f24820i, i10, j10, timeUnit));
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
    }

    public f() {
        this(5, 5L, TimeUnit.MINUTES);
    }
}
