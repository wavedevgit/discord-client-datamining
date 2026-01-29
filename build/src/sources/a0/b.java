package a0;

import android.util.Range;
import android.util.Size;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends a {

    /* renamed from: a  reason: collision with root package name */
    private final o2 f12a;

    /* renamed from: b  reason: collision with root package name */
    private final int f13b;

    /* renamed from: c  reason: collision with root package name */
    private final Size f14c;

    /* renamed from: d  reason: collision with root package name */
    private final x.z f15d;

    /* renamed from: e  reason: collision with root package name */
    private final List f16e;

    /* renamed from: f  reason: collision with root package name */
    private final r0 f17f;

    /* renamed from: g  reason: collision with root package name */
    private final Range f18g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(o2 o2Var, int i10, Size size, x.z zVar, List list, r0 r0Var, Range range) {
        if (o2Var != null) {
            this.f12a = o2Var;
            this.f13b = i10;
            if (size != null) {
                this.f14c = size;
                if (zVar != null) {
                    this.f15d = zVar;
                    if (list != null) {
                        this.f16e = list;
                        this.f17f = r0Var;
                        this.f18g = range;
                        return;
                    }
                    throw new NullPointerException("Null captureTypes");
                }
                throw new NullPointerException("Null dynamicRange");
            }
            throw new NullPointerException("Null size");
        }
        throw new NullPointerException("Null surfaceConfig");
    }

    @Override // a0.a
    public List b() {
        return this.f16e;
    }

    @Override // a0.a
    public x.z c() {
        return this.f15d;
    }

    @Override // a0.a
    public int d() {
        return this.f13b;
    }

    @Override // a0.a
    public r0 e() {
        return this.f17f;
    }

    public boolean equals(Object obj) {
        r0 r0Var;
        Range range;
        if (obj == this) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            if (this.f12a.equals(aVar.g()) && this.f13b == aVar.d() && this.f14c.equals(aVar.f()) && this.f15d.equals(aVar.c()) && this.f16e.equals(aVar.b()) && ((r0Var = this.f17f) != null ? r0Var.equals(aVar.e()) : aVar.e() == null) && ((range = this.f18g) != null ? range.equals(aVar.h()) : aVar.h() == null)) {
                return true;
            }
        }
        return false;
    }

    @Override // a0.a
    public Size f() {
        return this.f14c;
    }

    @Override // a0.a
    public o2 g() {
        return this.f12a;
    }

    @Override // a0.a
    public Range h() {
        return this.f18g;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = (((((((((this.f12a.hashCode() ^ 1000003) * 1000003) ^ this.f13b) * 1000003) ^ this.f14c.hashCode()) * 1000003) ^ this.f15d.hashCode()) * 1000003) ^ this.f16e.hashCode()) * 1000003;
        r0 r0Var = this.f17f;
        int i10 = 0;
        if (r0Var == null) {
            hashCode = 0;
        } else {
            hashCode = r0Var.hashCode();
        }
        int i11 = (hashCode2 ^ hashCode) * 1000003;
        Range range = this.f18g;
        if (range != null) {
            i10 = range.hashCode();
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "AttachedSurfaceInfo{surfaceConfig=" + this.f12a + ", imageFormat=" + this.f13b + ", size=" + this.f14c + ", dynamicRange=" + this.f15d + ", captureTypes=" + this.f16e + ", implementationOptions=" + this.f17f + ", targetFrameRate=" + this.f18g + "}";
    }
}
