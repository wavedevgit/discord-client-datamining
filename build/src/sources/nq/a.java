package nq;

import android.view.View;
import kotlin.jvm.internal.Intrinsics;
import pq.k5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f38809a;

    /* renamed from: b  reason: collision with root package name */
    private final View f38810b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f38809a = component;
        this.f38810b = view;
    }

    public final k5 a() {
        return this.f38809a;
    }

    public final View b() {
        return this.f38810b;
    }

    public final k5 c() {
        return this.f38809a;
    }

    public final View d() {
        return this.f38810b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f38809a, aVar.f38809a) && Intrinsics.areEqual(this.f38810b, aVar.f38810b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f38809a.hashCode() * 31) + this.f38810b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f38809a;
        View view = this.f38810b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
