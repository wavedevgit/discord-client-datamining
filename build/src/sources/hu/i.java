package hu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f26595d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f26596e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f26595d = firstConnectException;
        this.f26596e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        rr.e.a(this.f26595d, e10);
        this.f26596e = e10;
    }

    public final IOException b() {
        return this.f26595d;
    }

    public final IOException c() {
        return this.f26596e;
    }
}
