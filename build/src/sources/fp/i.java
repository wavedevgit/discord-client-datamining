package fp;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f24343a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f24344b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f24345c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f24346d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f24347e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f24343a = mainScreen;
        this.f24344b = onFabClick;
        this.f24345c = getCurrentForcedStatus;
        this.f24346d = z10;
        this.f24347e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f24345c;
    }

    public final Object b() {
        return this.f24343a;
    }

    public final Function0 c() {
        return this.f24344b;
    }

    public final Function1 d() {
        return this.f24347e;
    }

    public final boolean e() {
        return this.f24346d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f24343a, iVar.f24343a) && Intrinsics.areEqual(this.f24344b, iVar.f24344b) && Intrinsics.areEqual(this.f24345c, iVar.f24345c) && this.f24346d == iVar.f24346d && Intrinsics.areEqual(this.f24347e, iVar.f24347e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f24343a.hashCode() * 31) + this.f24344b.hashCode()) * 31) + this.f24345c.hashCode()) * 31) + Boolean.hashCode(this.f24346d)) * 31) + this.f24347e.hashCode();
    }

    public String toString() {
        Object obj = this.f24343a;
        Function0 function0 = this.f24344b;
        Function0 function02 = this.f24345c;
        boolean z10 = this.f24346d;
        Function1 function1 = this.f24347e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
