package xs;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class t0 extends zs.z {

    /* renamed from: f  reason: collision with root package name */
    private final h0 f54236f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f54237g;

    public /* synthetic */ t0(h0 h0Var, boolean z10, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(h0Var, (i10 & 2) != 0 ? false : z10);
    }

    public boolean equals(Object obj) {
        if (obj instanceof t0) {
            t0 t0Var = (t0) obj;
            if (this.f54236f == t0Var.f54236f && this.f54237g == t0Var.f54237g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54236f.hashCode() * 31) + Boolean.hashCode(this.f54237g);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public t0(h0 padding, boolean z10) {
        super(i.f54133a.d(), Integer.valueOf(padding != h0.f54129e ? 1 : 4), null, padding == h0.f54130i ? 4 : null, 4);
        Intrinsics.checkNotNullParameter(padding, "padding");
        this.f54236f = padding;
        this.f54237g = z10;
    }
}
