package jr;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h0 implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f32171d;

    /* renamed from: e  reason: collision with root package name */
    private Object f32172e;

    public h0(Function0 initializer) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f32171d = initializer;
        this.f32172e = d0.f32164a;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        if (this.f32172e == d0.f32164a) {
            Function0 function0 = this.f32171d;
            Intrinsics.checkNotNull(function0);
            this.f32172e = function0.invoke();
            this.f32171d = null;
        }
        return this.f32172e;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f32172e != d0.f32164a) {
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
