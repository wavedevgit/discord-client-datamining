package ws;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final int f53008a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f53009b;

    public i(int i10, Function0 message) {
        Intrinsics.checkNotNullParameter(message, "message");
        this.f53008a = i10;
        this.f53009b = message;
    }

    public final Function0 a() {
        return this.f53009b;
    }

    public final int b() {
        return this.f53008a;
    }
}
