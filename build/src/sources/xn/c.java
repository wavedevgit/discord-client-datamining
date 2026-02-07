package xn;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f54777a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54778b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f54777a = region;
        this.f54778b = viewport;
    }

    public final Rect a() {
        return this.f54777a;
    }

    public final Rect b() {
        return this.f54778b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f54777a, cVar.f54777a) && Intrinsics.areEqual(this.f54778b, cVar.f54778b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f54777a.hashCode() * 31) + this.f54778b.hashCode();
    }

    public String toString() {
        Rect rect = this.f54777a;
        Rect rect2 = this.f54778b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
