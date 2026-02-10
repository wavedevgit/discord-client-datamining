package ep;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final b f21960a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21961b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e a(String str);
    }

    public e(b logger, String subsystem) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        this.f21960a = logger;
        this.f21961b = subsystem;
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f21960a.f(this.f21961b, ep.a.f21932i, message);
    }
}
