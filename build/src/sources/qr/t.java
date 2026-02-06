package qr;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f48053d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f48054e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f48055i;

    public t(Function0 initializer, Object obj) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f48053d = initializer;
        this.f48054e = d0.f48026a;
        this.f48055i = obj == null ? this : obj;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj;
        Object obj2 = this.f48054e;
        d0 d0Var = d0.f48026a;
        if (obj2 != d0Var) {
            return obj2;
        }
        synchronized (this.f48055i) {
            obj = this.f48054e;
            if (obj == d0Var) {
                Function0 function0 = this.f48053d;
                Intrinsics.checkNotNull(function0);
                obj = function0.invoke();
                this.f48054e = obj;
                this.f48053d = null;
            }
        }
        return obj;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f48054e != d0.f48026a) {
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
