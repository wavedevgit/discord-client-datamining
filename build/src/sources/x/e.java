package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f52803a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f52804b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f52805c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52806d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52807e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f52803a = size;
            if (rect != null) {
                this.f52804b = rect;
                this.f52805c = e0Var;
                this.f52806d = i10;
                this.f52807e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f52805c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f52804b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f52803a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f52807e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f52806d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f52803a.equals(aVar.c()) && this.f52804b.equals(aVar.b()) && ((e0Var = this.f52805c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f52806d == aVar.e() && this.f52807e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f52803a.hashCode() ^ 1000003) * 1000003) ^ this.f52804b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f52805c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f52806d) * 1000003;
        if (this.f52807e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f52803a + ", inputCropRect=" + this.f52804b + ", cameraInternal=" + this.f52805c + ", rotationDegrees=" + this.f52806d + ", mirroring=" + this.f52807e + "}";
    }
}
