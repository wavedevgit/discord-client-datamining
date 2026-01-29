package yp;

import java.util.Set;
import js.l0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f54947a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f54948b;

    public l(Set initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f54947a = a10;
        this.f54948b = js.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f54948b;
    }

    public final Set b() {
        return (Set) this.f54947a.getValue();
    }

    public final void c(Set value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f54947a.setValue(value);
    }
}
