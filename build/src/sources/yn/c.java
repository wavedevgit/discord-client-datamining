package yn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f55712a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f55713b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f55712a = region;
        this.f55713b = viewport;
    }

    public final Rect a() {
        return this.f55712a;
    }

    public final Rect b() {
        return this.f55713b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f55712a, cVar.f55712a) && Intrinsics.areEqual(this.f55713b, cVar.f55713b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f55712a.hashCode() * 31) + this.f55713b.hashCode();
    }

    public String toString() {
        Rect rect = this.f55712a;
        Rect rect2 = this.f55713b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
