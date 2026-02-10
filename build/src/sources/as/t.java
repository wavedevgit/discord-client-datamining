package as;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f6091d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f6092e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f6093i;

    public t(Function0 initializer, Object obj) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f6091d = initializer;
        this.f6092e = d0.f6064a;
        this.f6093i = obj == null ? this : obj;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj;
        Object obj2 = this.f6092e;
        d0 d0Var = d0.f6064a;
        if (obj2 != d0Var) {
            return obj2;
        }
        synchronized (this.f6093i) {
            obj = this.f6092e;
            if (obj == d0Var) {
                Function0 function0 = this.f6091d;
                Intrinsics.checkNotNull(function0);
                obj = function0.invoke();
                this.f6092e = obj;
                this.f6091d = null;
            }
        }
        return obj;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f6092e != d0.f6064a) {
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

    public /* synthetic */ t(Function0 function0, Object obj, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(function0, (i10 & 2) != 0 ? null : obj);
    }
}
