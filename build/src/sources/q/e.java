package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46286a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46287b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f46288c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f46289d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f46286a = i10;
        this.f46287b = i11;
        this.f46288c = z10;
        this.f46289d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f46286a;
    }

    @Override // q.f4.b
    int b() {
        return this.f46287b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f46288c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f46289d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f46286a == bVar.a() && this.f46287b == bVar.b() && this.f46288c == bVar.c() && this.f46289d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f46286a ^ 1000003) * 1000003) ^ this.f46287b) * 1000003;
        int i12 = 1237;
        if (this.f46288c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f46289d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f46286a + ", requiredMaxBitDepth=" + this.f46287b + ", previewStabilizationOn=" + this.f46288c + ", ultraHdrOn=" + this.f46289d + "}";
    }
}
