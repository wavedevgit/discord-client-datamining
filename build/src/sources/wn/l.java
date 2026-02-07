package wn;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import un.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f54052a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f54053b;

    /* renamed from: c  reason: collision with root package name */
    private final double f54054c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f54055d;

    /* renamed from: e  reason: collision with root package name */
    private final int f54056e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f54057f;

    /* renamed from: g  reason: collision with root package name */
    private final o f54058g;

    /* renamed from: h  reason: collision with root package name */
    private final v f54059h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f54052a = id2;
        this.f54053b = size;
        this.f54054c = d10;
        this.f54055d = targetFpsRange;
        this.f54056e = i10;
        this.f54057f = facingMode;
        this.f54058g = additionalOptions;
        this.f54059h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f54058g;
    }

    public final v b() {
        return this.f54059h;
    }

    public final v.b c() {
        return this.f54057f;
    }

    public final String d() {
        return this.f54052a;
    }

    public final int e() {
        return this.f54056e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f54052a, lVar.f54052a) && Intrinsics.areEqual(this.f54053b, lVar.f54053b) && Double.compare(this.f54054c, lVar.f54054c) == 0 && Intrinsics.areEqual(this.f54055d, lVar.f54055d) && this.f54056e == lVar.f54056e && this.f54057f == lVar.f54057f && Intrinsics.areEqual(this.f54058g, lVar.f54058g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f54053b;
    }

    public final Range g() {
        return this.f54055d;
    }

    public int hashCode() {
        return (((((((((((this.f54052a.hashCode() * 31) + this.f54053b.hashCode()) * 31) + Double.hashCode(this.f54054c)) * 31) + this.f54055d.hashCode()) * 31) + Integer.hashCode(this.f54056e)) * 31) + this.f54057f.hashCode()) * 31) + this.f54058g.hashCode();
    }

    public String toString() {
        String str = this.f54052a;
        Size size = this.f54053b;
        double d10 = this.f54054c;
        Range range = this.f54055d;
        int i10 = this.f54056e;
        v.b bVar = this.f54057f;
        o oVar = this.f54058g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
