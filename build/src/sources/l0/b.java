package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35592a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35593b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35594c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35595d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35596e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35597f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35598g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35599h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35592a = uuid;
            this.f35593b = i10;
            this.f35594c = i11;
            if (rect != null) {
                this.f35595d = rect;
                if (size != null) {
                    this.f35596e = size;
                    this.f35597f = i12;
                    this.f35598g = z10;
                    this.f35599h = z11;
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
        return this.f35595d;
    }

    @Override // l0.f
    public int b() {
        return this.f35594c;
    }

    @Override // l0.f
    public int c() {
        return this.f35597f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35596e;
    }

    @Override // l0.f
    public int e() {
        return this.f35593b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35592a.equals(fVar.f()) && this.f35593b == fVar.e() && this.f35594c == fVar.b() && this.f35595d.equals(fVar.a()) && this.f35596e.equals(fVar.d()) && this.f35597f == fVar.c() && this.f35598g == fVar.g() && this.f35599h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35592a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35598g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35592a.hashCode() ^ 1000003) * 1000003) ^ this.f35593b) * 1000003) ^ this.f35594c) * 1000003) ^ this.f35595d.hashCode()) * 1000003) ^ this.f35596e.hashCode()) * 1000003) ^ this.f35597f) * 1000003;
        int i11 = 1237;
        if (this.f35598g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35599h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35599h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35592a + ", getTargets=" + this.f35593b + ", getFormat=" + this.f35594c + ", getCropRect=" + this.f35595d + ", getSize=" + this.f35596e + ", getRotationDegrees=" + this.f35597f + ", isMirroring=" + this.f35598g + ", shouldRespectInputCropRect=" + this.f35599h + "}";
    }
}
