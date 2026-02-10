package as;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f6071d;

    /* renamed from: e  reason: collision with root package name */
    private Object f6072e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f6071d = initializer;
        this.f6072e = d0.f6064a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f6072e == d0.f6064a) {
            Function0 function0 = this.f6071d;
            Intrinsics.checkNotNull(function0);
            this.f6072e = function0.invoke();
            this.f6071d = null;
        }
        return this.f6072e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f6072e != d0.f6064a) {
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
