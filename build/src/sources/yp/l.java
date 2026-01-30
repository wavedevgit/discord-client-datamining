package yp;

import java.util.Set;
import js.l0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54963a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54964b;

    public l(Set initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f54963a = a10;
        this.f54964b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54964b;
    }

    public final Set b() {
        return (Set) this.f54963a.getValue();
    }

    public final void c(Set value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54963a.setValue(value);
    }
}
