package rr;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f49199d;

    /* renamed from: e  reason: collision with root package name */
    private Object f49200e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f49199d = initializer;
        this.f49200e = d0.f49192a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f49200e == d0.f49192a) {
            Function0 function0 = this.f49199d;
            Intrinsics.checkNotNull(function0);
            this.f49200e = function0.invoke();
            this.f49199d = null;
        }
        return this.f49200e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f49200e != d0.f49192a) {
            return true;
        }
        return false;
    }

    public String toString() {
        if (isInitialized()) {
            return String.valueOf(getValue());
        }
        return "Lazy value not initialized yet.";
    }
}
