package ep;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o2 extends androidx.lifecycle.n0 {

    /* renamed from: b  reason: collision with root package name */
    private final androidx.lifecycle.b0 f23206b;

    public o2(@NotNull androidx.lifecycle.b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f23206b = savedStateHandle;
    }

    public final androidx.lifecycle.b0 e() {
        return this.f23206b;
    }

    public final void f() {
        for (String str : this.f23206b.f()) {
            this.f23206b.h(str, null);
        }
    }
}
