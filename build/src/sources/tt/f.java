package tt;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final yt.g f49923a;

    public f(yt.g delegate) {
        Intrinsics.checkNotNullParameter(delegate, "delegate");
        this.f49923a = delegate;
    }

    public final yt.g a() {
        return this.f49923a;
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public f(int i10, long j10, TimeUnit timeUnit) {
        this(new yt.g(xt.e.f53825i, i10, j10, timeUnit));
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
    }

    public f() {
        this(5, 5L, TimeUnit.MINUTES);
    }
}
