package up;

import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    private final Object f51467a;

    /* renamed from: b  reason: collision with root package name */
    private final Function0 f51468b;

    /* renamed from: c  reason: collision with root package name */
    private final Function0 f51469c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51470d;

    /* renamed from: e  reason: collision with root package name */
    private final Function1 f51471e;

    public i(Object mainScreen, Function0 onFabClick, Function0 getCurrentForcedStatus, boolean z10, Function1 onSimulateGovIdNfcChanged) {
        Intrinsics.checkNotNullParameter(mainScreen, "mainScreen");
        Intrinsics.checkNotNullParameter(onFabClick, "onFabClick");
        Intrinsics.checkNotNullParameter(getCurrentForcedStatus, "getCurrentForcedStatus");
        Intrinsics.checkNotNullParameter(onSimulateGovIdNfcChanged, "onSimulateGovIdNfcChanged");
        this.f51467a = mainScreen;
        this.f51468b = onFabClick;
        this.f51469c = getCurrentForcedStatus;
        this.f51470d = z10;
        this.f51471e = onSimulateGovIdNfcChanged;
    }

    public final Function0 a() {
        return this.f51469c;
    }

    public final Object b() {
        return this.f51467a;
    }

    public final Function0 c() {
        return this.f51468b;
    }

    public final Function1 d() {
        return this.f51471e;
    }

    public final boolean e() {
        return this.f51470d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (Intrinsics.areEqual(this.f51467a, iVar.f51467a) && Intrinsics.areEqual(this.f51468b, iVar.f51468b) && Intrinsics.areEqual(this.f51469c, iVar.f51469c) && this.f51470d == iVar.f51470d && Intrinsics.areEqual(this.f51471e, iVar.f51471e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (((((((this.f51467a.hashCode() * 31) + this.f51468b.hashCode()) * 31) + this.f51469c.hashCode()) * 31) + Boolean.hashCode(this.f51470d)) * 31) + this.f51471e.hashCode();
    }

    public String toString() {
        Object obj = this.f51467a;
        Function0 function0 = this.f51468b;
        Function0 function02 = this.f51469c;
        boolean z10 = this.f51470d;
        Function1 function1 = this.f51471e;
        return "SandboxScreen(mainScreen=" + obj + ", onFabClick=" + function0 + ", getCurrentForcedStatus=" + function02 + ", simulateGovIdNfc=" + z10 + ", onSimulateGovIdNfcChanged=" + function1 + ")";
    }
}
