package ir;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f31108d;

    /* renamed from: e  reason: collision with root package name */
    private Object f31109e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f31108d = initializer;
        this.f31109e = d0.f31101a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f31109e == d0.f31101a) {
            Function0 function0 = this.f31108d;
            Intrinsics.checkNotNull(function0);
            this.f31109e = function0.invoke();
            this.f31108d = null;
        }
        return this.f31109e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f31109e != d0.f31101a) {
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
