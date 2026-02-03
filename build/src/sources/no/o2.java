package no;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o2 extends androidx.lifecycle.n0 {

    /* renamed from: b  reason: collision with root package name */
    private final androidx.lifecycle.b0 f42271b;

    public o2(@NotNull androidx.lifecycle.b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f42271b = savedStateHandle;
    }

    public final androidx.lifecycle.b0 e() {
        return this.f42271b;
    }

    public final void f() {
        for (String str : this.f42271b.f()) {
            this.f42271b.h(str, null);
        }
    }
}
