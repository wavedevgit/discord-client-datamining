package xa;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f55024a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55025b;

    public f(boolean z10, boolean z11) {
        this.f55024a = z10;
        this.f55025b = z11;
    }

    public final boolean a() {
        return this.f55024a;
    }

    public final boolean b() {
        return this.f55025b;
    }

    public /* synthetic */ f(boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11);
    }
}
