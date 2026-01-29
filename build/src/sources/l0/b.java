package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f36673a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36674b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36675c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f36676d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f36677e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36678f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36679g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36680h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f36673a = uuid;
            this.f36674b = i10;
            this.f36675c = i11;
            if (rect != null) {
                this.f36676d = rect;
                if (size != null) {
                    this.f36677e = size;
                    this.f36678f = i12;
                    this.f36679g = z10;
                    this.f36680h = z11;
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
        return this.f36676d;
    }

    @Override // l0.f
    public int b() {
        return this.f36675c;
    }

    @Override // l0.f
    public int c() {
        return this.f36678f;
    }

    @Override // l0.f
    public Size d() {
        return this.f36677e;
    }

    @Override // l0.f
    public int e() {
        return this.f36674b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f36673a.equals(fVar.f()) && this.f36674b == fVar.e() && this.f36675c == fVar.b() && this.f36676d.equals(fVar.a()) && this.f36677e.equals(fVar.d()) && this.f36678f == fVar.c() && this.f36679g == fVar.g() && this.f36680h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f36673a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f36679g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f36673a.hashCode() ^ 1000003) * 1000003) ^ this.f36674b) * 1000003) ^ this.f36675c) * 1000003) ^ this.f36676d.hashCode()) * 1000003) ^ this.f36677e.hashCode()) * 1000003) ^ this.f36678f) * 1000003;
        int i11 = 1237;
        if (this.f36679g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f36680h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f36680h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f36673a + ", getTargets=" + this.f36674b + ", getFormat=" + this.f36675c + ", getCropRect=" + this.f36676d + ", getSize=" + this.f36677e + ", getRotationDegrees=" + this.f36678f + ", isMirroring=" + this.f36679g + ", shouldRespectInputCropRect=" + this.f36680h + "}";
    }
}
