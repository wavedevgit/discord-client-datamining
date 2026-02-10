package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35372a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35373b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35374c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35375d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35376e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35377f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35378g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35379h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35372a = uuid;
            this.f35373b = i10;
            this.f35374c = i11;
            if (rect != null) {
                this.f35375d = rect;
                if (size != null) {
                    this.f35376e = size;
                    this.f35377f = i12;
                    this.f35378g = z10;
                    this.f35379h = z11;
                    return;
                }
                throw new NullPointerException("Null getSize");
            }
            throw new NullPointerException("Null getCropRect");
        }
        throw new NullPointerException("Null getUuid");
    }

    @Override // l0.f
    public Rect a() {
        return this.f35375d;
    }

    @Override // l0.f
    public int b() {
        return this.f35374c;
    }

    @Override // l0.f
    public int c() {
        return this.f35377f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35376e;
    }

    @Override // l0.f
    public int e() {
        return this.f35373b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35372a.equals(fVar.f()) && this.f35373b == fVar.e() && this.f35374c == fVar.b() && this.f35375d.equals(fVar.a()) && this.f35376e.equals(fVar.d()) && this.f35377f == fVar.c() && this.f35378g == fVar.g() && this.f35379h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35372a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35378g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35372a.hashCode() ^ 1000003) * 1000003) ^ this.f35373b) * 1000003) ^ this.f35374c) * 1000003) ^ this.f35375d.hashCode()) * 1000003) ^ this.f35376e.hashCode()) * 1000003) ^ this.f35377f) * 1000003;
        int i11 = 1237;
        if (this.f35378g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35379h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35379h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35372a + ", getTargets=" + this.f35373b + ", getFormat=" + this.f35374c + ", getCropRect=" + this.f35375d + ", getSize=" + this.f35376e + ", getRotationDegrees=" + this.f35377f + ", isMirroring=" + this.f35378g + ", shouldRespectInputCropRect=" + this.f35379h + "}";
    }
}
