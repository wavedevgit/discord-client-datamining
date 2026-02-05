package hu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends IOException {

    /* renamed from: d  reason: collision with root package name */
    public final b f27181d;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(b errorCode) {
        super("stream was reset: " + errorCode);
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        this.f27181d = errorCode;
    }
}
