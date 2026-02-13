package ho;

import android.util.Range;
import android.util.Size;
import fo.v;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f28172a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f28173b;

    /* renamed from: c  reason: collision with root package name */
    private final double f28174c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f28175d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28176e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f28177f;

    /* renamed from: g  reason: collision with root package name */
    private final o f28178g;

    /* renamed from: h  reason: collision with root package name */
    private final v f28179h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f28172a = id2;
        this.f28173b = size;
        this.f28174c = d10;
        this.f28175d = targetFpsRange;
        this.f28176e = i10;
        this.f28177f = facingMode;
        this.f28178g = additionalOptions;
        this.f28179h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f28178g;
    }

    public final v b() {
        return this.f28179h;
    }

    public final v.b c() {
        return this.f28177f;
    }

    public final String d() {
        return this.f28172a;
    }

    public final int e() {
        return this.f28176e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f28172a, lVar.f28172a) && Intrinsics.areEqual(this.f28173b, lVar.f28173b) && Double.compare(this.f28174c, lVar.f28174c) == 0 && Intrinsics.areEqual(this.f28175d, lVar.f28175d) && this.f28176e == lVar.f28176e && this.f28177f == lVar.f28177f && Intrinsics.areEqual(this.f28178g, lVar.f28178g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f28173b;
    }

    public final Range g() {
        return this.f28175d;
    }

    public int hashCode() {
        return (((((((((((this.f28172a.hashCode() * 31) + this.f28173b.hashCode()) * 31) + Double.hashCode(this.f28174c)) * 31) + this.f28175d.hashCode()) * 31) + Integer.hashCode(this.f28176e)) * 31) + this.f28177f.hashCode()) * 31) + this.f28178g.hashCode();
    }

    public String toString() {
        String str = this.f28172a;
        Size size = this.f28173b;
        double d10 = this.f28174c;
        Range range = this.f28175d;
        int i10 = this.f28176e;
        v.b bVar = this.f28177f;
        o oVar = this.f28178g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
