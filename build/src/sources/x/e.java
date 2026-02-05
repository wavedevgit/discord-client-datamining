package x;

import android.graphics.Rect;
import android.util.Size;
import x.l1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends l1.a {

    /* renamed from: a  reason: collision with root package name */
    private final Size f53344a;

    /* renamed from: b  reason: collision with root package name */
    private final Rect f53345b;

    /* renamed from: c  reason: collision with root package name */
    private final a0.e0 f53346c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53347d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f53348e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
        if (size != null) {
            this.f53344a = size;
            if (rect != null) {
                this.f53345b = rect;
                this.f53346c = e0Var;
                this.f53347d = i10;
                this.f53348e = z10;
                return;
            }
            throw new NullPointerException("Null inputCropRect");
        }
        throw new NullPointerException("Null inputSize");
    }

    @Override // x.l1.a
    public a0.e0 a() {
        return this.f53346c;
    }

    @Override // x.l1.a
    public Rect b() {
        return this.f53345b;
    }

    @Override // x.l1.a
    public Size c() {
        return this.f53344a;
    }

    @Override // x.l1.a
    public boolean d() {
        return this.f53348e;
    }

    @Override // x.l1.a
    public int e() {
        return this.f53347d;
    }

    public boolean equals(Object obj) {
        a0.e0 e0Var;
        if (obj == this) {
            return true;
        }
        if (obj instanceof l1.a) {
            l1.a aVar = (l1.a) obj;
            if (this.f53344a.equals(aVar.c()) && this.f53345b.equals(aVar.b()) && ((e0Var = this.f53346c) != null ? e0Var.equals(aVar.a()) : aVar.a() == null) && this.f53347d == aVar.e() && this.f53348e == aVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int i10;
        int hashCode2 = (((this.f53344a.hashCode() ^ 1000003) * 1000003) ^ this.f53345b.hashCode()) * 1000003;
        a0.e0 e0Var = this.f53346c;
        if (e0Var == null) {
            hashCode = 0;
        } else {
            hashCode = e0Var.hashCode();
        }
        int i11 = (((hashCode2 ^ hashCode) * 1000003) ^ this.f53347d) * 1000003;
        if (this.f53348e) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        return i11 ^ i10;
    }

    public String toString() {
        return "CameraInputInfo{inputSize=" + this.f53344a + ", inputCropRect=" + this.f53345b + ", cameraInternal=" + this.f53346c + ", rotationDegrees=" + this.f53347d + ", mirroring=" + this.f53348e + "}";
    }
}
