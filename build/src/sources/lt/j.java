package lt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j extends i {

    /* renamed from: c  reason: collision with root package name */
    public static final j f36668c = new j();

    private j() {
    }

    public final void c(char[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        if (array.length == 16384) {
            a(array);
            return;
        }
        throw new IllegalArgumentException(("Inconsistent internal invariant: unexpected array size " + array.length).toString());
    }

    public final char[] d() {
        return super.b(16384);
    }
}
