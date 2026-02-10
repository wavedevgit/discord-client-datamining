package qu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f45758d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f45759e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f45758d = firstConnectException;
        this.f45759e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        as.e.a(this.f45758d, e10);
        this.f45759e = e10;
    }

    public final IOException b() {
        return this.f45758d;
    }

    public final IOException c() {
        return this.f45759e;
    }
}
