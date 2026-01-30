package vo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final b f51789a;

    /* renamed from: b  reason: collision with root package name */
    private final String f51790b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e a(String str);
    }

    public e(b logger, String subsystem) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        this.f51789a = logger;
        this.f51790b = subsystem;
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f51789a.f(this.f51790b, vo.a.f51761i, message);
    }
}
