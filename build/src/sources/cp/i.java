package cp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f20996a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f20997b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f20998c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f20999d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f21000e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f20996a = mainScreen;
        this.f20997b = onFabClick;
        this.f20998c = getCurrentForcedStatus;
        this.f20999d = z10;
        this.f21000e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f20998c;
    }

    public final Object b() {
        return this.f20996a;
    }

    public final Function0 c() {
        return this.f20997b;
    }

    public final Function1 d() {
        return this.f21000e;
    }

    public final boolean e() {
        return this.f20999d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f20996a, iVar.f20996a) && Intrinsics.areEqual(this.f20997b, iVar.f20997b) && Intrinsics.areEqual(this.f20998c, iVar.f20998c) && this.f20999d == iVar.f20999d && Intrinsics.areEqual(this.f21000e, iVar.f21000e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f20996a.hashCode() * 31) + this.f20997b.hashCode()) * 31) + this.f20998c.hashCode()) * 31) + Boolean.hashCode(this.f20999d)) * 31) + this.f21000e.hashCode();
    }

    public String toString() {
        Object obj = this.f20996a;
        Function0 function0 = this.f20997b;
        Function0 function02 = this.f20998c;
        boolean z10 = this.f20999d;
        Function1 function1 = this.f21000e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
