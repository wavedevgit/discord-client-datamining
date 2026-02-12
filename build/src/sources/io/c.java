package io;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f28022a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f28023b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f28022a = region;
        this.f28023b = viewport;
    }

    public final Rect a() {
        return this.f28022a;
    }

    public final Rect b() {
        return this.f28023b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f28022a, cVar.f28022a) && Intrinsics.areEqual(this.f28023b, cVar.f28023b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f28022a.hashCode() * 31) + this.f28023b.hashCode();
    }

    public String toString() {
        Rect rect = this.f28022a;
        Rect rect2 = this.f28023b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
