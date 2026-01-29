package ir;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f31092d;

    /* renamed from: e  reason: collision with root package name */
    private Object f31093e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f31092d = initializer;
        this.f31093e = d0.f31085a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f31093e == d0.f31085a) {
            Function0 function0 = this.f31092d;
            Intrinsics.checkNotNull(function0);
            this.f31093e = function0.invoke();
            this.f31092d = null;
        }
        return this.f31093e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f31093e != d0.f31085a) {
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
