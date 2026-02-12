package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35373a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35374b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35375c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35376d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35377e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35378f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35379g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35380h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35373a = uuid;
            this.f35374b = i10;
            this.f35375c = i11;
            if (rect != null) {
                this.f35376d = rect;
                if (size != null) {
                    this.f35377e = size;
                    this.f35378f = i12;
                    this.f35379g = z10;
                    this.f35380h = z11;
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
        return this.f35376d;
    }

    @Override // l0.f
    public int b() {
        return this.f35375c;
    }

    @Override // l0.f
    public int c() {
        return this.f35378f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35377e;
    }

    @Override // l0.f
    public int e() {
        return this.f35374b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35373a.equals(fVar.f()) && this.f35374b == fVar.e() && this.f35375c == fVar.b() && this.f35376d.equals(fVar.a()) && this.f35377e.equals(fVar.d()) && this.f35378f == fVar.c() && this.f35379g == fVar.g() && this.f35380h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35373a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35379g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35373a.hashCode() ^ 1000003) * 1000003) ^ this.f35374b) * 1000003) ^ this.f35375c) * 1000003) ^ this.f35376d.hashCode()) * 1000003) ^ this.f35377e.hashCode()) * 1000003) ^ this.f35378f) * 1000003;
        int i11 = 1237;
        if (this.f35379g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35380h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35380h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35373a + ", getTargets=" + this.f35374b + ", getFormat=" + this.f35375c + ", getCropRect=" + this.f35376d + ", getSize=" + this.f35377e + ", getRotationDegrees=" + this.f35378f + ", isMirroring=" + this.f35379g + ", shouldRespectInputCropRect=" + this.f35380h + "}";
    }
}
