package bq;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.MutableStateFlow;
import ms.l0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class k {

    /* renamed from: a  reason: collision with root package name */
    private final MutableStateFlow f6755a;

    /* renamed from: b  reason: collision with root package name */
    private final Flow f6756b;

    public k(List initialValue) {
        Intrinsics.checkNotNullParameter(initialValue, "initialValue");
        MutableStateFlow a10 = l0.a(initialValue);
        this.f6755a = a10;
        this.f6756b = ms.g.m(a10, 1);
    }

    public final Flow a() {
        return this.f6756b;
    }

    public final List b() {
        return (List) this.f6755a.getValue();
    }

    public final void c(List value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f6755a.setValue(value);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public k(aq.b4 r1) {
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
        throw new UnsupportedOperationException("Method not decompiled: bq.k.<init>(aq.b4):void");
    }
}
