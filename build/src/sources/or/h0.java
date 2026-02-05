package or;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f44221d;

    /* renamed from: e  reason: collision with root package name */
    private Object f44222e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f44221d = initializer;
        this.f44222e = d0.f44214a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f44222e == d0.f44214a) {
            Function0 function0 = this.f44221d;
            Intrinsics.checkNotNull(function0);
            this.f44222e = function0.invoke();
            this.f44221d = null;
        }
        return this.f44222e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f44222e != d0.f44214a) {
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
