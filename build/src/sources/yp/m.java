package yp;

import js.l0;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54949a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54950b;

    public m(boolean z10) {
        MutableStateFlow a10 = l0.a(Boolean.valueOf(z10));
        this.f54949a = a10;
        this.f54950b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54950b;
    }

    public final boolean b() {
        return ((Boolean) this.f54949a.getValue()).booleanValue();
    }

    public final void c(boolean z10) {
        this.f54949a.setValue(Boolean.valueOf(z10));
    }
}
