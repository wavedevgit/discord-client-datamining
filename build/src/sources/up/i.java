package up;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f50898a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f50899b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f50900c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f50901d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f50902e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f50898a = mainScreen;
        this.f50899b = onFabClick;
        this.f50900c = getCurrentForcedStatus;
        this.f50901d = z10;
        this.f50902e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f50900c;
    }

    public final Object b() {
        return this.f50898a;
    }

    public final Function0 c() {
        return this.f50899b;
    }

    public final Function1 d() {
        return this.f50902e;
    }

    public final boolean e() {
        return this.f50901d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f50898a, iVar.f50898a) && Intrinsics.areEqual(this.f50899b, iVar.f50899b) && Intrinsics.areEqual(this.f50900c, iVar.f50900c) && this.f50901d == iVar.f50901d && Intrinsics.areEqual(this.f50902e, iVar.f50902e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f50898a.hashCode() * 31) + this.f50899b.hashCode()) * 31) + this.f50900c.hashCode()) * 31) + Boolean.hashCode(this.f50901d)) * 31) + this.f50902e.hashCode();
    }

    public String toString() {
        Object obj = this.f50898a;
        Function0 function0 = this.f50899b;
        Function0 function02 = this.f50900c;
        boolean z10 = this.f50901d;
        Function1 function1 = this.f50902e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
