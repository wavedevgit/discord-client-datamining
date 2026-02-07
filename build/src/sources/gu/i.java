package gu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f25684d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f25685e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f25684d = firstConnectException;
        this.f25685e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        qr.e.a(this.f25684d, e10);
        this.f25685e = e10;
    }

    public final IOException b() {
        return this.f25684d;
    }

    public final IOException c() {
        return this.f25685e;
    }
}
