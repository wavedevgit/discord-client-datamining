package kp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35214a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f35215b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f35216c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35217d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f35218e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f35214a = mainScreen;
        this.f35215b = onFabClick;
        this.f35216c = getCurrentForcedStatus;
        this.f35217d = z10;
        this.f35218e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f35216c;
    }

    public final Object b() {
        return this.f35214a;
    }

    public final Function0 c() {
        return this.f35215b;
    }

    public final Function1 d() {
        return this.f35218e;
    }

    public final boolean e() {
        return this.f35217d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f35214a, iVar.f35214a) && Intrinsics.areEqual(this.f35215b, iVar.f35215b) && Intrinsics.areEqual(this.f35216c, iVar.f35216c) && this.f35217d == iVar.f35217d && Intrinsics.areEqual(this.f35218e, iVar.f35218e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f35214a.hashCode() * 31) + this.f35215b.hashCode()) * 31) + this.f35216c.hashCode()) * 31) + Boolean.hashCode(this.f35217d)) * 31) + this.f35218e.hashCode();
    }

    public String toString() {
        Object obj = this.f35214a;
        Function0 function0 = this.f35215b;
        Function0 function02 = this.f35216c;
        boolean z10 = this.f35217d;
        Function1 function1 = this.f35218e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
