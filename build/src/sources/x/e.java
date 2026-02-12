package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54036a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54037b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54038c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54039d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54040e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54036a = size;
            if (rect != null) {
                this.f54037b = rect;
                this.f54038c = e0Var;
                this.f54039d = i10;
                this.f54040e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54038c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54037b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54036a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54040e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54039d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54036a.equals(aVar.c()) && this.f54037b.equals(aVar.b()) && ((e0Var = this.f54038c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54039d == aVar.e() && this.f54040e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54036a.hashCode() ^ 1000003) * 1000003) ^ this.f54037b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54038c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54039d) * 1000003;
        if (this.f54040e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54036a + ", inputCropRect=" + this.f54037b + ", cameraInternal=" + this.f54038c + ", rotationDegrees=" + this.f54039d + ", mirroring=" + this.f54040e + "}";
    }
}
