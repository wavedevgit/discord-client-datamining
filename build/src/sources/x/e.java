package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54604a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54605b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54606c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54607d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54608e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54604a = size;
            if (rect != null) {
                this.f54605b = rect;
                this.f54606c = e0Var;
                this.f54607d = i10;
                this.f54608e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54606c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54605b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54604a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54608e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54607d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54604a.equals(aVar.c()) && this.f54605b.equals(aVar.b()) && ((e0Var = this.f54606c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54607d == aVar.e() && this.f54608e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54604a.hashCode() ^ 1000003) * 1000003) ^ this.f54605b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54606c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54607d) * 1000003;
        if (this.f54608e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54604a + ", inputCropRect=" + this.f54605b + ", cameraInternal=" + this.f54606c + ", rotationDegrees=" + this.f54607d + ", mirroring=" + this.f54608e + "}";
    }
}
