package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f36272a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36273b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36274c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f36275d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f36276e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36277f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36278g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36279h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f36272a = uuid;
            this.f36273b = i10;
            this.f36274c = i11;
            if (rect != null) {
                this.f36275d = rect;
                if (size != null) {
                    this.f36276e = size;
                    this.f36277f = i12;
                    this.f36278g = z10;
                    this.f36279h = z11;
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
        return this.f36275d;
    }

    @Override // l0.f
    public int b() {
        return this.f36274c;
    }

    @Override // l0.f
    public int c() {
        return this.f36277f;
    }

    @Override // l0.f
    public Size d() {
        return this.f36276e;
    }

    @Override // l0.f
    public int e() {
        return this.f36273b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f36272a.equals(fVar.f()) && this.f36273b == fVar.e() && this.f36274c == fVar.b() && this.f36275d.equals(fVar.a()) && this.f36276e.equals(fVar.d()) && this.f36277f == fVar.c() && this.f36278g == fVar.g() && this.f36279h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f36272a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f36278g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f36272a.hashCode() ^ 1000003) * 1000003) ^ this.f36273b) * 1000003) ^ this.f36274c) * 1000003) ^ this.f36275d.hashCode()) * 1000003) ^ this.f36276e.hashCode()) * 1000003) ^ this.f36277f) * 1000003;
        int i11 = 1237;
        if (this.f36278g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f36279h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f36279h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f36272a + ", getTargets=" + this.f36273b + ", getFormat=" + this.f36274c + ", getCropRect=" + this.f36275d + ", getSize=" + this.f36276e + ", getRotationDegrees=" + this.f36277f + ", isMirroring=" + this.f36278g + ", shouldRespectInputCropRect=" + this.f36279h + "}";
    }
}
