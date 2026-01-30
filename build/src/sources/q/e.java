package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46302a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46303b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f46304c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f46305d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f46302a = i10;
        this.f46303b = i11;
        this.f46304c = z10;
        this.f46305d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f46302a;
    }

    @Override // q.f4.b
    int b() {
        return this.f46303b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f46304c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f46305d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f46302a == bVar.a() && this.f46303b == bVar.b() && this.f46304c == bVar.c() && this.f46305d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f46302a ^ 1000003) * 1000003) ^ this.f46303b) * 1000003;
        int i12 = 1237;
        if (this.f46304c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f46305d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f46302a + ", requiredMaxBitDepth=" + this.f46303b + ", previewStabilizationOn=" + this.f46304c + ", ultraHdrOn=" + this.f46305d + "}";
    }
}
