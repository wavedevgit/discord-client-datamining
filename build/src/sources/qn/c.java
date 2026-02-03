package qn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f47802a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f47803b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f47802a = region;
        this.f47803b = viewport;
    }

    public final Rect a() {
        return this.f47802a;
    }

    public final Rect b() {
        return this.f47803b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f47802a, cVar.f47802a) && Intrinsics.areEqual(this.f47803b, cVar.f47803b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f47802a.hashCode() * 31) + this.f47803b.hashCode();
    }

    public String toString() {
        Rect rect = this.f47802a;
        Rect rect2 = this.f47803b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
