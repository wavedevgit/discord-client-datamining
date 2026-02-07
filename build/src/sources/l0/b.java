package l0;

import android.graphics.Rect;
import android.util.Size;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class b extends f {

    /* renamed from: a  reason: collision with root package name */
    private final UUID f35640a;

    /* renamed from: b  reason: collision with root package name */
    private final int f35641b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35642c;

    /* renamed from: d  reason: collision with root package name */
    private final Rect f35643d;

    /* renamed from: e  reason: collision with root package name */
    private final Size f35644e;

    /* renamed from: f  reason: collision with root package name */
    private final int f35645f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35646g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f35647h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(UUID uuid, int i10, int i11, Rect rect, Size size, int i12, boolean z10, boolean z11) {
        if (uuid != null) {
            this.f35640a = uuid;
            this.f35641b = i10;
            this.f35642c = i11;
            if (rect != null) {
                this.f35643d = rect;
                if (size != null) {
                    this.f35644e = size;
                    this.f35645f = i12;
                    this.f35646g = z10;
                    this.f35647h = z11;
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
        return this.f35643d;
    }

    @Override // l0.f
    public int b() {
        return this.f35642c;
    }

    @Override // l0.f
    public int c() {
        return this.f35645f;
    }

    @Override // l0.f
    public Size d() {
        return this.f35644e;
    }

    @Override // l0.f
    public int e() {
        return this.f35641b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f35640a.equals(fVar.f()) && this.f35641b == fVar.e() && this.f35642c == fVar.b() && this.f35643d.equals(fVar.a()) && this.f35644e.equals(fVar.d()) && this.f35645f == fVar.c() && this.f35646g == fVar.g() && this.f35647h == fVar.j()) {
                return true;
            }
        }
        return false;
    }

    @Override // l0.f
    UUID f() {
        return this.f35640a;
    }

    @Override // l0.f
    public boolean g() {
        return this.f35646g;
    }

    public int hashCode() {
        int i10;
        int hashCode = (((((((((((this.f35640a.hashCode() ^ 1000003) * 1000003) ^ this.f35641b) * 1000003) ^ this.f35642c) * 1000003) ^ this.f35643d.hashCode()) * 1000003) ^ this.f35644e.hashCode()) * 1000003) ^ this.f35645f) * 1000003;
        int i11 = 1237;
        if (this.f35646g) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i12 = (hashCode ^ i10) * 1000003;
        if (this.f35647h) {
            i11 = 1231;
        }
        return i12 ^ i11;
    }

    @Override // l0.f
    public boolean j() {
        return this.f35647h;
    }

    public String toString() {
        return "OutConfig{getUuid=" + this.f35640a + ", getTargets=" + this.f35641b + ", getFormat=" + this.f35642c + ", getCropRect=" + this.f35643d + ", getSize=" + this.f35644e + ", getRotationDegrees=" + this.f35645f + ", isMirroring=" + this.f35646g + ", shouldRespectInputCropRect=" + this.f35647h + "}";
    }
}
