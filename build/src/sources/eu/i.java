package eu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f21881d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f21882e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f21881d = firstConnectException;
        this.f21882e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        or.e.a(this.f21881d, e10);
        this.f21882e = e10;
    }

    public final IOException b() {
        return this.f21881d;
    }

    public final IOException c() {
        return this.f21882e;
    }
}
