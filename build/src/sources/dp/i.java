package dp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f22055a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f22056b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f22057c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f22058d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f22059e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f22055a = mainScreen;
        this.f22056b = onFabClick;
        this.f22057c = getCurrentForcedStatus;
        this.f22058d = z10;
        this.f22059e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f22057c;
    }

    public final Object b() {
        return this.f22055a;
    }

    public final Function0 c() {
        return this.f22056b;
    }

    public final Function1 d() {
        return this.f22059e;
    }

    public final boolean e() {
        return this.f22058d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f22055a, iVar.f22055a) && Intrinsics.areEqual(this.f22056b, iVar.f22056b) && Intrinsics.areEqual(this.f22057c, iVar.f22057c) && this.f22058d == iVar.f22058d && Intrinsics.areEqual(this.f22059e, iVar.f22059e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f22055a.hashCode() * 31) + this.f22056b.hashCode()) * 31) + this.f22057c.hashCode()) * 31) + Boolean.hashCode(this.f22058d)) * 31) + this.f22059e.hashCode();
    }

    public String toString() {
        Object obj = this.f22055a;
        Function0 function0 = this.f22056b;
        Function0 function02 = this.f22057c;
        boolean z10 = this.f22058d;
        Function1 function1 = this.f22059e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
