package un;

import android.util.Range;
import android.util.Size;
import kotlin.jvm.internal.Intrinsics;
import sn.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f51604a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f51605b;

    /* renamed from: c  reason: collision with root package name */
    private final double f51606c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f51607d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51608e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f51609f;

    /* renamed from: g  reason: collision with root package name */
    private final o f51610g;

    /* renamed from: h  reason: collision with root package name */
    private final v f51611h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f51604a = id2;
        this.f51605b = size;
        this.f51606c = d10;
        this.f51607d = targetFpsRange;
        this.f51608e = i10;
        this.f51609f = facingMode;
        this.f51610g = additionalOptions;
        this.f51611h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f51610g;
    }

    public final v b() {
        return this.f51611h;
    }

    public final v.b c() {
        return this.f51609f;
    }

    public final String d() {
        return this.f51604a;
    }

    public final int e() {
        return this.f51608e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f51604a, lVar.f51604a) && Intrinsics.areEqual(this.f51605b, lVar.f51605b) && Double.compare(this.f51606c, lVar.f51606c) == 0 && Intrinsics.areEqual(this.f51607d, lVar.f51607d) && this.f51608e == lVar.f51608e && this.f51609f == lVar.f51609f && Intrinsics.areEqual(this.f51610g, lVar.f51610g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f51605b;
    }

    public final Range g() {
        return this.f51607d;
    }

    public int hashCode() {
        return (((((((((((this.f51604a.hashCode() * 31) + this.f51605b.hashCode()) * 31) + Double.hashCode(this.f51606c)) * 31) + this.f51607d.hashCode()) * 31) + Integer.hashCode(this.f51608e)) * 31) + this.f51609f.hashCode()) * 31) + this.f51610g.hashCode();
    }

    public String toString() {
        String str = this.f51604a;
        Size size = this.f51605b;
        double d10 = this.f51606c;
        Range range = this.f51607d;
        int i10 = this.f51608e;
        v.b bVar = this.f51609f;
        o oVar = this.f51610g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
