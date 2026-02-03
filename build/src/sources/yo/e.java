package yo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final b f55154a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55155b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e a(String str);
    }

    public e(b logger, String subsystem) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        this.f55154a = logger;
        this.f55155b = subsystem;
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f55154a.f(this.f55155b, yo.a.f55126i, message);
    }
}
