package w2;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class h extends n {

    /* renamed from: a  reason: collision with root package name */
    private final Throwable f53344a;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public h(Throwable finalException) {
        super(null);
        Intrinsics.checkNotNullParameter(finalException, "finalException");
        this.f53344a = finalException;
    }

    public final Throwable a() {
        return this.f53344a;
    }
}
