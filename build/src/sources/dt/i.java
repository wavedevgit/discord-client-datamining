package dt;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f21155a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f21156b;

    public i(int i10, Function0 message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f21155a = i10;
        this.f21156b = message;
    }

    public final Function0 a() {
        return this.f21156b;
    }

    public final int b() {
        return this.f21155a;
    }
}
