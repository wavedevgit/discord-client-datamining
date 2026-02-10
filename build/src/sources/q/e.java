package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f44622a;

    /* renamed from: b  reason: collision with root package name */
    private final int f44623b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f44624c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f44625d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f44622a = i10;
        this.f44623b = i11;
        this.f44624c = z10;
        this.f44625d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f44622a;
    }

    @Override // q.f4.b
    int b() {
        return this.f44623b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f44624c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f44625d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f44622a == bVar.a() && this.f44623b == bVar.b() && this.f44624c == bVar.c() && this.f44625d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f44622a ^ 1000003) * 1000003) ^ this.f44623b) * 1000003;
        int i12 = 1237;
        if (this.f44624c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f44625d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f44622a + ", requiredMaxBitDepth=" + this.f44623b + ", previewStabilizationOn=" + this.f44624c + ", ultraHdrOn=" + this.f44625d + "}";
    }
}
