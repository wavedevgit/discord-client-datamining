package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f46707a;

    /* renamed from: b  reason: collision with root package name */
    private final int f46708b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f46709c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f46710d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f46707a = i10;
        this.f46708b = i11;
        this.f46709c = z10;
        this.f46710d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f46707a;
    }

    @Override // q.f4.b
    int b() {
        return this.f46708b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f46709c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f46710d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f46707a == bVar.a() && this.f46708b == bVar.b() && this.f46709c == bVar.c() && this.f46710d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f46707a ^ 1000003) * 1000003) ^ this.f46708b) * 1000003;
        int i12 = 1237;
        if (this.f46709c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f46710d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f46707a + ", requiredMaxBitDepth=" + this.f46708b + ", previewStabilizationOn=" + this.f46709c + ", ultraHdrOn=" + this.f46710d + "}";
    }
}
