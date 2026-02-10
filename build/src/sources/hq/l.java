package hq;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ss.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f26497a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f26498b;

    public l(Set initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f26497a = a10;
        this.f26498b = ss.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f26498b;
    }

    public final Set b() {
        return (Set) this.f26497a.getValue();
    }

    public final void c(Set value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f26497a.setValue(value);
    }
}
