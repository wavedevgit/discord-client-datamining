package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54163a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54164b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54165c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54166d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54167e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54163a = size;
            if (rect != null) {
                this.f54164b = rect;
                this.f54165c = e0Var;
                this.f54166d = i10;
                this.f54167e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54165c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54164b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54163a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54167e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54166d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54163a.equals(aVar.c()) && this.f54164b.equals(aVar.b()) && ((e0Var = this.f54165c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54166d == aVar.e() && this.f54167e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54163a.hashCode() ^ 1000003) * 1000003) ^ this.f54164b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54165c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54166d) * 1000003;
        if (this.f54167e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54163a + ", inputCropRect=" + this.f54164b + ", cameraInternal=" + this.f54165c + ", rotationDegrees=" + this.f54166d + ", mirroring=" + this.f54167e + "}";
    }
}
