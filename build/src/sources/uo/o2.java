package uo;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o2 extends androidx.lifecycle.n0 {

    /* renamed from: b  reason: collision with root package name */
    private final androidx.lifecycle.b0 f52025b;

    public o2(@NotNull androidx.lifecycle.b0 savedStateHandle) {
        Intrinsics.checkNotNullParameter(savedStateHandle, "savedStateHandle");
        this.f52025b = savedStateHandle;
    }

    public final androidx.lifecycle.b0 e() {
        return this.f52025b;
    }

    public final void f() {
        for (String str : this.f52025b.f()) {
            this.f52025b.h(str, null);
        }
    }
}
