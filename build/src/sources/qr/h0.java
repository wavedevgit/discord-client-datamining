package qr;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f48081d;

    /* renamed from: e  reason: collision with root package name */
    private Object f48082e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f48081d = initializer;
        this.f48082e = d0.f48074a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f48082e == d0.f48074a) {
            Function0 function0 = this.f48081d;
            Intrinsics.checkNotNull(function0);
            this.f48082e = function0.invoke();
            this.f48081d = null;
        }
        return this.f48082e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f48082e != d0.f48074a) {
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
