package gu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f25636d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f25637e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f25636d = firstConnectException;
        this.f25637e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        qr.e.a(this.f25636d, e10);
        this.f25637e = e10;
    }

    public final IOException b() {
        return this.f25636d;
    }

    public final IOException c() {
        return this.f25637e;
    }
}
