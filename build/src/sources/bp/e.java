package bp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final b f7096a;

    /* renamed from: b  reason: collision with root package name */
    private final String f7097b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e a(String str);
    }

    public e(b logger, String subsystem) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        this.f7096a = logger;
        this.f7097b = subsystem;
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f7096a.f(this.f7097b, bp.a.f7068i, message);
    }
}
