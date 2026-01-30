package vs;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f51932a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f51933b;

    public i(int i10, Function0 message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f51932a = i10;
        this.f51933b = message;
    }

    public final Function0 a() {
        return this.f51933b;
    }

    public final int b() {
        return this.f51932a;
    }
}
