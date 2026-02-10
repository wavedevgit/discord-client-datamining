package ho;

import android.util.Range;
import android.util.Size;
import fo.v;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l {

    /* renamed from: a  reason: collision with root package name */
    private final String f27603a;

    /* renamed from: b  reason: collision with root package name */
    private final Size f27604b;

    /* renamed from: c  reason: collision with root package name */
    private final double f27605c;

    /* renamed from: d  reason: collision with root package name */
    private final Range f27606d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27607e;

    /* renamed from: f  reason: collision with root package name */
    private final v.b f27608f;

    /* renamed from: g  reason: collision with root package name */
    private final o f27609g;

    /* renamed from: h  reason: collision with root package name */
    private final v f27610h;

    public l(String id2, Size size, double d10, Range targetFpsRange, int i10, v.b facingMode, o additionalOptions) {
        Intrinsics.checkNotNullParameter(id2, "id");
        Intrinsics.checkNotNullParameter(size, "size");
        Intrinsics.checkNotNullParameter(targetFpsRange, "targetFpsRange");
        Intrinsics.checkNotNullParameter(facingMode, "facingMode");
        Intrinsics.checkNotNullParameter(additionalOptions, "additionalOptions");
        this.f27603a = id2;
        this.f27604b = size;
        this.f27605c = d10;
        this.f27606d = targetFpsRange;
        this.f27607e = i10;
        this.f27608f = facingMode;
        this.f27609g = additionalOptions;
        this.f27610h = new v(id2, facingMode, size, (int) d10);
    }

    public final o a() {
        return this.f27609g;
    }

    public final v b() {
        return this.f27610h;
    }

    public final v.b c() {
        return this.f27608f;
    }

    public final String d() {
        return this.f27603a;
    }

    public final int e() {
        return this.f27607e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof l)) {
            return false;
        }
        l lVar = (l) obj;
        if (Intrinsics.areEqual(this.f27603a, lVar.f27603a) && Intrinsics.areEqual(this.f27604b, lVar.f27604b) && Double.compare(this.f27605c, lVar.f27605c) == 0 && Intrinsics.areEqual(this.f27606d, lVar.f27606d) && this.f27607e == lVar.f27607e && this.f27608f == lVar.f27608f && Intrinsics.areEqual(this.f27609g, lVar.f27609g)) {
            return true;
        }
        return false;
    }

    public final Size f() {
        return this.f27604b;
    }

    public final Range g() {
        return this.f27606d;
    }

    public int hashCode() {
        return (((((((((((this.f27603a.hashCode() * 31) + this.f27604b.hashCode()) * 31) + Double.hashCode(this.f27605c)) * 31) + this.f27606d.hashCode()) * 31) + Integer.hashCode(this.f27607e)) * 31) + this.f27608f.hashCode()) * 31) + this.f27609g.hashCode();
    }

    public String toString() {
        String str = this.f27603a;
        Size size = this.f27604b;
        double d10 = this.f27605c;
        Range range = this.f27606d;
        int i10 = this.f27607e;
        v.b bVar = this.f27608f;
        o oVar = this.f27609g;
        return "CameraChoice(id=" + str + ", size=" + size + ", maxFps=" + d10 + ", targetFpsRange=" + range + ", rotation=" + i10 + ", facingMode=" + bVar + ", additionalOptions=" + oVar + ")";
    }
}
