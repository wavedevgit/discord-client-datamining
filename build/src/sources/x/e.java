package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f53082a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f53083b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f53084c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53085d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53086e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f53082a = size;
            if (rect != null) {
                this.f53083b = rect;
                this.f53084c = e0Var;
                this.f53085d = i10;
                this.f53086e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f53084c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f53083b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f53082a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f53086e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f53085d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f53082a.equals(aVar.c()) && this.f53083b.equals(aVar.b()) && ((e0Var = this.f53084c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f53085d == aVar.e() && this.f53086e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f53082a.hashCode() ^ 1000003) * 1000003) ^ this.f53083b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f53084c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f53085d) * 1000003;
        if (this.f53086e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f53082a + ", inputCropRect=" + this.f53083b + ", cameraInternal=" + this.f53084c + ", rotationDegrees=" + this.f53085d + ", mirroring=" + this.f53086e + "}";
    }
}
