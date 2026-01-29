package yt;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f55045d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f55046e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f55045d = firstConnectException;
        this.f55046e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        ir.e.a(this.f55045d, e10);
        this.f55046e = e10;
    }

    public final IOException b() {
        return this.f55045d;
    }

    public final IOException c() {
        return this.f55046e;
    }
}
