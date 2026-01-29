package mo;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o2 extends androidx.lifecycle.n0 {

    /* renamed from: b  reason: collision with root package name */
    private final androidx.lifecycle.b0 f39512b;

    public o2(@NotNull androidx.lifecycle.b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f39512b = savedStateHandle;
    }

    public final androidx.lifecycle.b0 e() {
        return this.f39512b;
    }

    public final void f() {
        for (String str : this.f39512b.f()) {
            this.f39512b.h(str, null);
        }
    }
}
