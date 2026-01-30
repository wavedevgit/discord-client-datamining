package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f36689a;

    /* renamed from: b  reason: collision with root package name */
    private final int f36690b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36691c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f36692d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f36693e;

    /* renamed from: f  reason: collision with root package name */
    private final int f36694f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36695g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f36696h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f36689a = uuid;
            this.f36690b = i10;
            this.f36691c = i11;
            if (rect != null) {
                this.f36692d = rect;
                if (size != null) {
                    this.f36693e = size;
                    this.f36694f = i12;
                    this.f36695g = z10;
                    this.f36696h = z11;
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
        return this.f36692d;
    }

    @Override // l0.f
    public int b() {
        return this.f36691c;
    }

    @Override // l0.f
    public int c() {
        return this.f36694f;
    }

    @Override // l0.f
    public Size d() {
        return this.f36693e;
    }

    @Override // l0.f
    public int e() {
        return this.f36690b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f36689a.equals(fVar.f()) && this.f36690b == fVar.e() && this.f36691c == fVar.b() && this.f36692d.equals(fVar.a()) && this.f36693e.equals(fVar.d()) && this.f36694f == fVar.c() && this.f36695g == fVar.g() && this.f36696h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f36689a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f36695g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f36689a.hashCode() ^ 1000003) * 1000003) ^ this.f36690b) * 1000003) ^ this.f36691c) * 1000003) ^ this.f36692d.hashCode()) * 1000003) ^ this.f36693e.hashCode()) * 1000003) ^ this.f36694f) * 1000003;
        int i11 = 1237;
        if (this.f36695g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f36696h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f36696h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f36689a + ", getTargets=" + this.f36690b + ", getFormat=" + this.f36691c + ", getCropRect=" + this.f36692d + ", getSize=" + this.f36693e + ", getRotationDegrees=" + this.f36694f + ", isMirroring=" + this.f36695g + ", shouldRespectInputCropRect=" + this.f36696h + "}";
    }
}
