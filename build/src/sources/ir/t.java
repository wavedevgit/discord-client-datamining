package ir;

import java.io.Serializable;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class t implements Lazy, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private Function0 f31128d;

    /* renamed from: e  reason: collision with root package name */
    private volatile Object f31129e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f31130i;

    public t(Function0 initializer, Object obj) {
        Intrinsics.checkNotNullParameter(initializer, "initializer");
        this.f31128d = initializer;
        this.f31129e = d0.f31101a;
        this.f31130i = obj == null ? this : obj;
    }

    @Override // kotlin.Lazy
    public Object getValue() {
        Object obj;
        Object obj2 = this.f31129e;
        d0 d0Var = d0.f31101a;
        if (obj2 != d0Var) {
            return obj2;
        }
        synchronized (this.f31130i) {
            obj = this.f31129e;
            if (obj == d0Var) {
                Function0 function0 = this.f31128d;
                Intrinsics.checkNotNull(function0);
                obj = function0.invoke();
                this.f31129e = obj;
                this.f31128d = null;
            }
        }
        return obj;
    }

    @Override // kotlin.Lazy
    public boolean isInitialized() {
        if (this.f31129e != d0.f31101a) {
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
