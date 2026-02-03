package bu;

import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final IOException f6855d;

    /* renamed from: e  reason: collision with root package name */
    private IOException f6856e;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i(IOException firstConnectException) {
        super(firstConnectException);
        Intrinsics.checkNotNullParameter(firstConnectException, "firstConnectException");
        this.f6855d = firstConnectException;
        this.f6856e = firstConnectException;
    }

    public final void a(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        lr.e.a(this.f6855d, e10);
        this.f6856e = e10;
    }

    public final IOException b() {
        return this.f6855d;
    }

    public final IOException c() {
        return this.f6856e;
    }
}
