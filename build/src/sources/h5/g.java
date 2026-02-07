package h5;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g implements l {

    /* renamed from: a  reason: collision with root package name */
    private final View f25842a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f25843b;

    public g(View view, boolean z10) {
        this.f25842a = view;
        this.f25843b = z10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof g) {
            g gVar = (g) obj;
            if (Intrinsics.areEqual(getView(), gVar.getView()) && f() == gVar.f()) {
                return true;
            }
            return false;
        }
        return false;
    }

    @Override // h5.l
    public boolean f() {
        return this.f25843b;
    }

    @Override // h5.l
    public View getView() {
        return this.f25842a;
    }

    public int hashCode() {
        return (getView().hashCode() * 31) + Boolean.hashCode(f());
    }
}
