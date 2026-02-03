package bq;

import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6757a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6758b;

    public l(Set initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f6757a = a10;
        this.f6758b = ms.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f6758b;
    }

    public final Set b() {
        return (Set) this.f6757a.getValue();
    }

    public final void c(Set value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f6757a.setValue(value);
    }
}
