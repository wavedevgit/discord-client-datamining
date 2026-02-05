package bq;

import android.view.View;
import dq.k5;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final k5 f7100a;

    /* renamed from: b  reason: collision with root package name */
    private final View f7101b;

    public a(k5 component, View view) {
        Intrinsics.checkNotNullParameter(component, "component");
        Intrinsics.checkNotNullParameter(view, "view");
        this.f7100a = component;
        this.f7101b = view;
    }

    public final k5 a() {
        return this.f7100a;
    }

    public final View b() {
        return this.f7101b;
    }

    public final k5 c() {
        return this.f7100a;
    }

    public final View d() {
        return this.f7101b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        a aVar = (a) obj;
        if (Intrinsics.areEqual(this.f7100a, aVar.f7100a) && Intrinsics.areEqual(this.f7101b, aVar.f7101b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7100a.hashCode() * 31) + this.f7101b.hashCode();
    }

    public String toString() {
        k5 k5Var = this.f7100a;
        View view = this.f7101b;
        return "ComponentView(component=" + k5Var + ", view=" + view + ")";
    }
}
