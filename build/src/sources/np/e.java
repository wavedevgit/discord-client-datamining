package np;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e {

    /* renamed from: a  reason: collision with root package name */
    private final b f38805a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38806b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        e a(String str);
    }

    public e(b logger, String subsystem) {
        Intrinsics.checkNotNullParameter(logger, "logger");
        Intrinsics.checkNotNullParameter(subsystem, "subsystem");
        this.f38805a = logger;
        this.f38806b = subsystem;
    }

    public final void a(String message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f38805a.f(this.f38806b, np.a.f38777i, message);
    }
}
