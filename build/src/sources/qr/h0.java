package qr;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f48033d;

    /* renamed from: e  reason: collision with root package name */
    private Object f48034e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f48033d = initializer;
        this.f48034e = d0.f48026a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f48034e == d0.f48026a) {
            Function0 function0 = this.f48033d;
            Intrinsics.checkNotNull(function0);
            this.f48034e = function0.invoke();
            this.f48033d = null;
        }
        return this.f48034e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f48034e != d0.f48026a) {
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
