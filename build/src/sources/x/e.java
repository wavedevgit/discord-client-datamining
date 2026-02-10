package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54035a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54036b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54037c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54038d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54039e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54035a = size;
            if (rect != null) {
                this.f54036b = rect;
                this.f54037c = e0Var;
                this.f54038d = i10;
                this.f54039e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54037c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54036b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54035a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54039e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54038d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54035a.equals(aVar.c()) && this.f54036b.equals(aVar.b()) && ((e0Var = this.f54037c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54038d == aVar.e() && this.f54039e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54035a.hashCode() ^ 1000003) * 1000003) ^ this.f54036b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54037c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54038d) * 1000003;
        if (this.f54039e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54035a + ", inputCropRect=" + this.f54036b + ", cameraInternal=" + this.f54037c + ", rotationDegrees=" + this.f54038d + ", mirroring=" + this.f54039e + "}";
    }
}
