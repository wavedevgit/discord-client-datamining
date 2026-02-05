package eq;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ps.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f21781a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f21782b;

    public k(List initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f21781a = a10;
        this.f21782b = ps.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f21782b;
    }

    public final List b() {
        return (List) this.f21781a.getValue();
    }

    public final void c(List value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f21781a.setValue(value);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public k(dq.b4 r1) {
        /*
            r0 = this;
            if (r1 != 0) goto L7
            java.util.List r1 = kotlin.collections.CollectionsKt.l()
            goto Lb
        L7:
            java.util.List r1 = kotlin.collections.CollectionsKt.e(r1)
        Lb:
            r0.<init>(r1)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: eq.k.<init>(dq.b4):void");
    }
}
