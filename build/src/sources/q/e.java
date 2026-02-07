package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f45867a;

    /* renamed from: b  reason: collision with root package name */
    private final int f45868b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f45869c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f45870d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f45867a = i10;
        this.f45868b = i11;
        this.f45869c = z10;
        this.f45870d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f45867a;
    }

    @Override // q.f4.b
    int b() {
        return this.f45868b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f45869c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f45870d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f45867a == bVar.a() && this.f45868b == bVar.b() && this.f45869c == bVar.c() && this.f45870d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f45867a ^ 1000003) * 1000003) ^ this.f45868b) * 1000003;
        int i12 = 1237;
        if (this.f45869c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f45870d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f45867a + ", requiredMaxBitDepth=" + this.f45868b + ", previewStabilizationOn=" + this.f45869c + ", ultraHdrOn=" + this.f45870d + "}";
    }
}
