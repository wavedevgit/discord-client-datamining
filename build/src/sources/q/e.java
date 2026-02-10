package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f43290a;

    /* renamed from: b  reason: collision with root package name */
    private final int f43291b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f43292c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f43293d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f43290a = i10;
        this.f43291b = i11;
        this.f43292c = z10;
        this.f43293d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f43290a;
    }

    @Override // q.f4.b
    int b() {
        return this.f43291b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f43292c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f43293d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f43290a == bVar.a() && this.f43291b == bVar.b() && this.f43292c == bVar.c() && this.f43293d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f43290a ^ 1000003) * 1000003) ^ this.f43291b) * 1000003;
        int i12 = 1237;
        if (this.f43292c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f43293d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f43290a + ", requiredMaxBitDepth=" + this.f43291b + ", previewStabilizationOn=" + this.f43292c + ", ultraHdrOn=" + this.f43293d + "}";
    }
}
