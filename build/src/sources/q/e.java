package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f43291a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43292b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f43293c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f43294d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f43291a = i10;
        this.f43292b = i11;
        this.f43293c = z10;
        this.f43294d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f43291a;
    }

    @Override // q.f4.b
    int b() {
        return this.f43292b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f43293c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f43294d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f43291a == bVar.a() && this.f43292b == bVar.b() && this.f43293c == bVar.c() && this.f43294d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f43291a ^ 1000003) * 1000003) ^ this.f43292b) * 1000003;
        int i12 = 1237;
        if (this.f43293c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f43294d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f43291a + ", requiredMaxBitDepth=" + this.f43292b + ", previewStabilizationOn=" + this.f43293c + ", ultraHdrOn=" + this.f43294d + "}";
    }
}
