package ip;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f30060a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f30061b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f30062c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30063d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f30064e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f30060a = mainScreen;
        this.f30061b = onFabClick;
        this.f30062c = getCurrentForcedStatus;
        this.f30063d = z10;
        this.f30064e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f30062c;
    }

    public final Object b() {
        return this.f30060a;
    }

    public final Function0 c() {
        return this.f30061b;
    }

    public final Function1 d() {
        return this.f30064e;
    }

    public final boolean e() {
        return this.f30063d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f30060a, iVar.f30060a) && Intrinsics.areEqual(this.f30061b, iVar.f30061b) && Intrinsics.areEqual(this.f30062c, iVar.f30062c) && this.f30063d == iVar.f30063d && Intrinsics.areEqual(this.f30064e, iVar.f30064e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f30060a.hashCode() * 31) + this.f30061b.hashCode()) * 31) + this.f30062c.hashCode()) * 31) + Boolean.hashCode(this.f30063d)) * 31) + this.f30064e.hashCode();
    }

    public String toString() {
        Object obj = this.f30060a;
        Function0 function0 = this.f30061b;
        Function0 function02 = this.f30062c;
        boolean z10 = this.f30063d;
        Function1 function1 = this.f30064e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
