package w2;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class j extends n {

    /* renamed from: a  reason: collision with root package name */
    private final Throwable f52059a;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j(Throwable readException) {
        super(null);
        Intrinsics.checkNotNullParameter(readException, "readException");
        this.f52059a = readException;
    }

    public final Throwable a() {
        return this.f52059a;
    }
}
