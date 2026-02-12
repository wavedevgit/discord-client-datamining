package xa;

import kotlin.jvm.internal.DefaultConstructorMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f54456a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54457b;

    public f(boolean z10, boolean z11) {
        this.f54456a = z10;
        this.f54457b = z11;
    }

    public final boolean a() {
        return this.f54456a;
    }

    public final boolean b() {
        return this.f54457b;
    }

    public /* synthetic */ f(boolean z10, boolean z11, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? false : z10, (i10 & 2) != 0 ? false : z11);
    }
}
