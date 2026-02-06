package kp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35166a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f35167b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f35168c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35169d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f35170e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f35166a = mainScreen;
        this.f35167b = onFabClick;
        this.f35168c = getCurrentForcedStatus;
        this.f35169d = z10;
        this.f35170e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f35168c;
    }

    public final Object b() {
        return this.f35166a;
    }

    public final Function0 c() {
        return this.f35167b;
    }

    public final Function1 d() {
        return this.f35170e;
    }

    public final boolean e() {
        return this.f35169d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f35166a, iVar.f35166a) && Intrinsics.areEqual(this.f35167b, iVar.f35167b) && Intrinsics.areEqual(this.f35168c, iVar.f35168c) && this.f35169d == iVar.f35169d && Intrinsics.areEqual(this.f35170e, iVar.f35170e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f35166a.hashCode() * 31) + this.f35167b.hashCode()) * 31) + this.f35168c.hashCode()) * 31) + Boolean.hashCode(this.f35169d)) * 31) + this.f35170e.hashCode();
    }

    public String toString() {
        Object obj = this.f35166a;
        Function0 function0 = this.f35167b;
        Function0 function02 = this.f35168c;
        boolean z10 = this.f35169d;
        Function1 function1 = this.f35170e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
