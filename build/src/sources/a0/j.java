package a0;

import android.util.Size;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class j extends p2 {

    /* renamed from: a  reason: collision with root package name */
    private final Size f122a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f123b;

    /* renamed from: c  reason: collision with root package name */
    private final Size f124c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f125d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f126e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f127f;

    /* renamed from: g  reason: collision with root package name */
    private final Map f128g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j(Size size, Map map, Size size2, Map map2, Size size3, Map map3, Map map4) {
        if (size != null) {
            this.f122a = size;
            if (map != null) {
                this.f123b = map;
                if (size2 != null) {
                    this.f124c = size2;
                    if (map2 != null) {
                        this.f125d = map2;
                        if (size3 != null) {
                            this.f126e = size3;
                            if (map3 != null) {
                                this.f127f = map3;
                                if (map4 != null) {
                                    this.f128g = map4;
                                    return;
                                }
                                throw new NullPointerException("Null ultraMaximumSizeMap");
                            }
                            throw new NullPointerException("Null maximumSizeMap");
                        }
                        throw new NullPointerException("Null recordSize");
                    }
                    throw new NullPointerException("Null s1440pSizeMap");
                }
                throw new NullPointerException("Null previewSize");
            }
            throw new NullPointerException("Null s720pSizeMap");
        }
        throw new NullPointerException("Null analysisSize");
    }

    @Override // a0.p2
    public Size b() {
        return this.f122a;
    }

    @Override // a0.p2
    public Map d() {
        return this.f127f;
    }

    @Override // a0.p2
    public Size e() {
        return this.f124c;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof p2) {
            p2 p2Var = (p2) obj;
            if (this.f122a.equals(p2Var.b()) && this.f123b.equals(p2Var.j()) && this.f124c.equals(p2Var.e()) && this.f125d.equals(p2Var.h()) && this.f126e.equals(p2Var.f()) && this.f127f.equals(p2Var.d()) && this.f128g.equals(p2Var.l())) {
                return true;
            }
        }
        return false;
    }

    @Override // a0.p2
    public Size f() {
        return this.f126e;
    }

    @Override // a0.p2
    public Map h() {
        return this.f125d;
    }

    public int hashCode() {
        return ((((((((((((this.f122a.hashCode() ^ 1000003) * 1000003) ^ this.f123b.hashCode()) * 1000003) ^ this.f124c.hashCode()) * 1000003) ^ this.f125d.hashCode()) * 1000003) ^ this.f126e.hashCode()) * 1000003) ^ this.f127f.hashCode()) * 1000003) ^ this.f128g.hashCode();
    }

    @Override // a0.p2
    public Map j() {
        return this.f123b;
    }

    @Override // a0.p2
    public Map l() {
        return this.f128g;
    }

    public String toString() {
        return "SurfaceSizeDefinition{analysisSize=" + this.f122a + ", s720pSizeMap=" + this.f123b + ", previewSize=" + this.f124c + ", s1440pSizeMap=" + this.f125d + ", recordSize=" + this.f126e + ", maximumSizeMap=" + this.f127f + ", ultraMaximumSizeMap=" + this.f128g + "}";
    }
}
