package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35475a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35476b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35477c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35478d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35479e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35480f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35481g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35482h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35475a = uuid;
            this.f35476b = i10;
            this.f35477c = i11;
            if (rect != null) {
                this.f35478d = rect;
                if (size != null) {
                    this.f35479e = size;
                    this.f35480f = i12;
                    this.f35481g = z10;
                    this.f35482h = z11;
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
        return this.f35478d;
    }

    @Override // l0.f
    public int b() {
        return this.f35477c;
    }

    @Override // l0.f
    public int c() {
        return this.f35480f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35479e;
    }

    @Override // l0.f
    public int e() {
        return this.f35476b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35475a.equals(fVar.f()) && this.f35476b == fVar.e() && this.f35477c == fVar.b() && this.f35478d.equals(fVar.a()) && this.f35479e.equals(fVar.d()) && this.f35480f == fVar.c() && this.f35481g == fVar.g() && this.f35482h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35475a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35481g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35475a.hashCode() ^ 1000003) * 1000003) ^ this.f35476b) * 1000003) ^ this.f35477c) * 1000003) ^ this.f35478d.hashCode()) * 1000003) ^ this.f35479e.hashCode()) * 1000003) ^ this.f35480f) * 1000003;
        int i11 = 1237;
        if (this.f35481g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35482h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35482h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35475a + ", getTargets=" + this.f35476b + ", getFormat=" + this.f35477c + ", getCropRect=" + this.f35478d + ", getSize=" + this.f35479e + ", getRotationDegrees=" + this.f35480f + ", isMirroring=" + this.f35481g + ", shouldRespectInputCropRect=" + this.f35482h + "}";
    }
}
