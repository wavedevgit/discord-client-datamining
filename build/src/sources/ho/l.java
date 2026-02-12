package ho;

import android.util.Range;
import android.util.Size;
import fo.v;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f27604a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f27605b;

    /* renamed from: c  reason: collision with root package name */
    private final double f27606c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f27607d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27608e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f27609f;

    /* renamed from: g  reason: collision with root package name */
    private final o f27610g;

    /* renamed from: h  reason: collision with root package name */
    private final v f27611h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f27604a = id2;
        this.f27605b = size;
        this.f27606c = d10;
        this.f27607d = targetFpsRange;
        this.f27608e = i10;
        this.f27609f = facingMode;
        this.f27610g = additionalOptions;
        this.f27611h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f27610g;
    }

    public final v b() {
        return this.f27611h;
    }

    public final v.b c() {
        return this.f27609f;
    }

    public final String d() {
        return this.f27604a;
    }

    public final int e() {
        return this.f27608e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f27604a, lVar.f27604a) && Intrinsics.areEqual(this.f27605b, lVar.f27605b) && Double.compare(this.f27606c, lVar.f27606c) == 0 && Intrinsics.areEqual(this.f27607d, lVar.f27607d) && this.f27608e == lVar.f27608e && this.f27609f == lVar.f27609f && Intrinsics.areEqual(this.f27610g, lVar.f27610g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f27605b;
    }

    public final Range g() {
        return this.f27607d;
    }

    public int hashCode() {
        return (((((((((((this.f27604a.hashCode() * 31) + this.f27605b.hashCode()) * 31) + Double.hashCode(this.f27606c)) * 31) + this.f27607d.hashCode()) * 31) + Integer.hashCode(this.f27608e)) * 31) + this.f27609f.hashCode()) * 31) + this.f27610g.hashCode();
    }

    public String toString() {
        String str = this.f27604a;
        Size size = this.f27605b;
        double d10 = this.f27606c;
        Range range = this.f27607d;
        int i10 = this.f27608e;
        v.b bVar = this.f27609f;
        o oVar = this.f27610g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
