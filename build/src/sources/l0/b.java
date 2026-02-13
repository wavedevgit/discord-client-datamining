package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35941a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35942b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35943c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35944d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35945e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35946f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35947g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35948h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35941a = uuid;
            this.f35942b = i10;
            this.f35943c = i11;
            if (rect != null) {
                this.f35944d = rect;
                if (size != null) {
                    this.f35945e = size;
                    this.f35946f = i12;
                    this.f35947g = z10;
                    this.f35948h = z11;
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
        return this.f35944d;
    }

    @Override // l0.f
    public int b() {
        return this.f35943c;
    }

    @Override // l0.f
    public int c() {
        return this.f35946f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35945e;
    }

    @Override // l0.f
    public int e() {
        return this.f35942b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35941a.equals(fVar.f()) && this.f35942b == fVar.e() && this.f35943c == fVar.b() && this.f35944d.equals(fVar.a()) && this.f35945e.equals(fVar.d()) && this.f35946f == fVar.c() && this.f35947g == fVar.g() && this.f35948h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35941a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35947g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35941a.hashCode() ^ 1000003) * 1000003) ^ this.f35942b) * 1000003) ^ this.f35943c) * 1000003) ^ this.f35944d.hashCode()) * 1000003) ^ this.f35945e.hashCode()) * 1000003) ^ this.f35946f) * 1000003;
        int i11 = 1237;
        if (this.f35947g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35948h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35948h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35941a + ", getTargets=" + this.f35942b + ", getFormat=" + this.f35943c + ", getCropRect=" + this.f35944d + ", getSize=" + this.f35945e + ", getRotationDegrees=" + this.f35946f + ", isMirroring=" + this.f35947g + ", shouldRespectInputCropRect=" + this.f35948h + "}";
    }
}
