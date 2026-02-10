package lp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f36293a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f36294b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f36295c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36296d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f36297e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f36293a = mainScreen;
        this.f36294b = onFabClick;
        this.f36295c = getCurrentForcedStatus;
        this.f36296d = z10;
        this.f36297e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f36295c;
    }

    public final Object b() {
        return this.f36293a;
    }

    public final Function0 c() {
        return this.f36294b;
    }

    public final Function1 d() {
        return this.f36297e;
    }

    public final boolean e() {
        return this.f36296d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f36293a, iVar.f36293a) && Intrinsics.areEqual(this.f36294b, iVar.f36294b) && Intrinsics.areEqual(this.f36295c, iVar.f36295c) && this.f36296d == iVar.f36296d && Intrinsics.areEqual(this.f36297e, iVar.f36297e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f36293a.hashCode() * 31) + this.f36294b.hashCode()) * 31) + this.f36295c.hashCode()) * 31) + Boolean.hashCode(this.f36296d)) * 31) + this.f36297e.hashCode();
    }

    public String toString() {
        Object obj = this.f36293a;
        Function0 function0 = this.f36294b;
        Function0 function02 = this.f36295c;
        boolean z10 = this.f36296d;
        Function1 function1 = this.f36297e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
