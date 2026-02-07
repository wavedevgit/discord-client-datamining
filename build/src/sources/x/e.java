package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54211a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54212b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54213c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54214d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54215e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54211a = size;
            if (rect != null) {
                this.f54212b = rect;
                this.f54213c = e0Var;
                this.f54214d = i10;
                this.f54215e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54213c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54212b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54211a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54215e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54214d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54211a.equals(aVar.c()) && this.f54212b.equals(aVar.b()) && ((e0Var = this.f54213c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54214d == aVar.e() && this.f54215e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54211a.hashCode() ^ 1000003) * 1000003) ^ this.f54212b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54213c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54214d) * 1000003;
        if (this.f54215e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54211a + ", inputCropRect=" + this.f54212b + ", cameraInternal=" + this.f54213c + ", rotationDegrees=" + this.f54214d + ", mirroring=" + this.f54215e + "}";
    }
}
