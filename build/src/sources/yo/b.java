package yo;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b extends Exception {
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b(String message) {
        super(message);
        Intrinsics.checkNotNullParameter(message, "message");
    }
}
