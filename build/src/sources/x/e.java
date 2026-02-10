package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f54303a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f54304b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f54305c;

    /* renamed from: d  reason: collision with root package name */
    private final int f54306d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f54307e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f54303a = size;
            if (rect != null) {
                this.f54304b = rect;
                this.f54305c = e0Var;
                this.f54306d = i10;
                this.f54307e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f54305c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f54304b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f54303a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f54307e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f54306d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f54303a.equals(aVar.c()) && this.f54304b.equals(aVar.b()) && ((e0Var = this.f54305c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f54306d == aVar.e() && this.f54307e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f54303a.hashCode() ^ 1000003) * 1000003) ^ this.f54304b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f54305c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f54306d) * 1000003;
        if (this.f54307e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f54303a + ", inputCropRect=" + this.f54304b + ", cameraInternal=" + this.f54305c + ", rotationDegrees=" + this.f54306d + ", mirroring=" + this.f54307e + "}";
    }
}
