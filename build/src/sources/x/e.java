package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f52800a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f52801b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f52802c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52803d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52804e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f52800a = size;
            if (rect != null) {
                this.f52801b = rect;
                this.f52802c = e0Var;
                this.f52803d = i10;
                this.f52804e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f52802c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f52801b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f52800a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f52804e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f52803d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f52800a.equals(aVar.c()) && this.f52801b.equals(aVar.b()) && ((e0Var = this.f52802c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f52803d == aVar.e() && this.f52804e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f52800a.hashCode() ^ 1000003) * 1000003) ^ this.f52801b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f52802c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f52803d) * 1000003;
        if (this.f52804e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f52800a + ", inputCropRect=" + this.f52801b + ", cameraInternal=" + this.f52802c + ", rotationDegrees=" + this.f52803d + ", mirroring=" + this.f52804e + "}";
    }
}
