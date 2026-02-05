package eq;

import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ps.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f21777a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f21778b;

    public i(Number number) {
        MutableStateFlow a10 = l0.a(number);
        this.f21777a = a10;
        this.f21778b = ps.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f21778b;
    }

    public final Number b() {
        return (Number) this.f21777a.getValue();
    }

    public final void c(Number number) {
        this.f21777a.setValue(number);
    }
}
