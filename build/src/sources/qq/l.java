package qq;

import bt.l0;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f45638a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f45639b;

    public l(Set initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f45638a = a10;
        this.f45639b = bt.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f45639b;
    }

    public final Set b() {
        return (Set) this.f45638a.getValue();
    }

    public final void c(Set value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f45638a.setValue(value);
    }
}
