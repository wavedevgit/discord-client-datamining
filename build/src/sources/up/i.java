package up;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f50899a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f50900b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f50901c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50902d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f50903e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f50899a = mainScreen;
        this.f50900b = onFabClick;
        this.f50901c = getCurrentForcedStatus;
        this.f50902d = z10;
        this.f50903e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f50901c;
    }

    public final Object b() {
        return this.f50899a;
    }

    public final Function0 c() {
        return this.f50900b;
    }

    public final Function1 d() {
        return this.f50903e;
    }

    public final boolean e() {
        return this.f50902d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f50899a, iVar.f50899a) && Intrinsics.areEqual(this.f50900b, iVar.f50900b) && Intrinsics.areEqual(this.f50901c, iVar.f50901c) && this.f50902d == iVar.f50902d && Intrinsics.areEqual(this.f50903e, iVar.f50903e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f50899a.hashCode() * 31) + this.f50900b.hashCode()) * 31) + this.f50901c.hashCode()) * 31) + Boolean.hashCode(this.f50902d)) * 31) + this.f50903e.hashCode();
    }

    public String toString() {
        Object obj = this.f50899a;
        Function0 function0 = this.f50900b;
        Function0 function02 = this.f50901c;
        boolean z10 = this.f50902d;
        Function1 function1 = this.f50903e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
