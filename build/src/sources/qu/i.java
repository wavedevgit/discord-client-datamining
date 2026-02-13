package qu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f46327d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f46328e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f46327d = firstConnectException;
        this.f46328e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        as.e.a(this.f46327d, e10);
        this.f46328e = e10;
    }

    public final IOException b() {
        return this.f46327d;
    }

    public final IOException c() {
        return this.f46328e;
    }
}
