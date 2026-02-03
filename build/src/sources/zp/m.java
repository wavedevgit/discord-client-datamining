package zp;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ks.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f56045a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f56046b;

    public m(boolean z10) {
        MutableStateFlow a10 = l0.a(Boolean.valueOf(z10));
        this.f56045a = a10;
        this.f56046b = ks.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f56046b;
    }

    public final boolean b() {
        return ((Boolean) this.f56045a.getValue()).booleanValue();
    }

    public final void c(boolean z10) {
        this.f56045a.setValue(Boolean.valueOf(z10));
    }
}
