package io;

import android.graphics.Rect;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final Rect f28590a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f28591b;

    public c(Rect region, Rect viewport) {
        Intrinsics.checkNotNullParameter(region, "region");
        Intrinsics.checkNotNullParameter(viewport, "viewport");
        this.f28590a = region;
        this.f28591b = viewport;
    }

    public final Rect a() {
        return this.f28590a;
    }

    public final Rect b() {
        return this.f28591b;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f28590a, cVar.f28590a) && Intrinsics.areEqual(this.f28591b, cVar.f28591b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f28590a.hashCode() * 31) + this.f28591b.hashCode();
    }

    public String toString() {
        Rect rect = this.f28590a;
        Rect rect2 = this.f28591b;
        return "ViewfinderInfo(region=" + rect + ", viewport=" + rect2 + ")";
    }
}
