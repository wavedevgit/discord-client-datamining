package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f36199a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36200b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36201c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f36202d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f36203e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36204f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36205g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36206h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f36199a = uuid;
            this.f36200b = i10;
            this.f36201c = i11;
            if (rect != null) {
                this.f36202d = rect;
                if (size != null) {
                    this.f36203e = size;
                    this.f36204f = i12;
                    this.f36205g = z10;
                    this.f36206h = z11;
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
        return this.f36202d;
    }

    @Override // l0.f
    public int b() {
        return this.f36201c;
    }

    @Override // l0.f
    public int c() {
        return this.f36204f;
    }

    @Override // l0.f
    public Size d() {
        return this.f36203e;
    }

    @Override // l0.f
    public int e() {
        return this.f36200b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f36199a.equals(fVar.f()) && this.f36200b == fVar.e() && this.f36201c == fVar.b() && this.f36202d.equals(fVar.a()) && this.f36203e.equals(fVar.d()) && this.f36204f == fVar.c() && this.f36205g == fVar.g() && this.f36206h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f36199a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f36205g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f36199a.hashCode() ^ 1000003) * 1000003) ^ this.f36200b) * 1000003) ^ this.f36201c) * 1000003) ^ this.f36202d.hashCode()) * 1000003) ^ this.f36203e.hashCode()) * 1000003) ^ this.f36204f) * 1000003;
        int i11 = 1237;
        if (this.f36205g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f36206h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f36206h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f36199a + ", getTargets=" + this.f36200b + ", getFormat=" + this.f36201c + ", getCropRect=" + this.f36202d + ", getSize=" + this.f36203e + ", getRotationDegrees=" + this.f36204f + ", isMirroring=" + this.f36205g + ", shouldRespectInputCropRect=" + this.f36206h + "}";
    }
}
