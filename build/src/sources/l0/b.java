package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f36803a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36804b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36805c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f36806d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f36807e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36808f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36809g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36810h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f36803a = uuid;
            this.f36804b = i10;
            this.f36805c = i11;
            if (rect != null) {
                this.f36806d = rect;
                if (size != null) {
                    this.f36807e = size;
                    this.f36808f = i12;
                    this.f36809g = z10;
                    this.f36810h = z11;
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
        return this.f36806d;
    }

    @Override // l0.f
    public int b() {
        return this.f36805c;
    }

    @Override // l0.f
    public int c() {
        return this.f36808f;
    }

    @Override // l0.f
    public Size d() {
        return this.f36807e;
    }

    @Override // l0.f
    public int e() {
        return this.f36804b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f36803a.equals(fVar.f()) && this.f36804b == fVar.e() && this.f36805c == fVar.b() && this.f36806d.equals(fVar.a()) && this.f36807e.equals(fVar.d()) && this.f36808f == fVar.c() && this.f36809g == fVar.g() && this.f36810h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f36803a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f36809g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f36803a.hashCode() ^ 1000003) * 1000003) ^ this.f36804b) * 1000003) ^ this.f36805c) * 1000003) ^ this.f36806d.hashCode()) * 1000003) ^ this.f36807e.hashCode()) * 1000003) ^ this.f36808f) * 1000003;
        int i11 = 1237;
        if (this.f36809g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f36810h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f36810h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f36803a + ", getTargets=" + this.f36804b + ", getFormat=" + this.f36805c + ", getCropRect=" + this.f36806d + ", getSize=" + this.f36807e + ", getRotationDegrees=" + this.f36808f + ", isMirroring=" + this.f36809g + ", shouldRespectInputCropRect=" + this.f36810h + "}";
    }
}
