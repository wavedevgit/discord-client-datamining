package zt;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f56141d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f56142e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f56141d = firstConnectException;
        this.f56142e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        jr.e.a(this.f56141d, e10);
        this.f56142e = e10;
    }

    public final IOException b() {
        return this.f56141d;
    }

    public final IOException c() {
        return this.f56142e;
    }
}
