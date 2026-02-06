package q;

import q.f4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class e extends f4.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f45819a;

    /* renamed from: b  reason: collision with root package name */
    private final int f45820b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f45821c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f45822d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10, int i11, boolean z10, boolean z11) {
        this.f45819a = i10;
        this.f45820b = i11;
        this.f45821c = z10;
        this.f45822d = z11;
    }

    @Override // q.f4.b
    int a() {
        return this.f45819a;
    }

    @Override // q.f4.b
    int b() {
        return this.f45820b;
    }

    @Override // q.f4.b
    boolean c() {
        return this.f45821c;
    }

    @Override // q.f4.b
    boolean d() {
        return this.f45822d;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof f4.b) {
            f4.b bVar = (f4.b) obj;
            if (this.f45819a == bVar.a() && this.f45820b == bVar.b() && this.f45821c == bVar.c() && this.f45822d == bVar.d()) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int i11 = (((this.f45819a ^ 1000003) * 1000003) ^ this.f45820b) * 1000003;
        int i12 = 1237;
        if (this.f45821c) {
            i10 = 1231;
        } else {
            i10 = 1237;
        }
        int i13 = (i11 ^ i10) * 1000003;
        if (this.f45822d) {
            i12 = 1231;
        }
        return i13 ^ i12;
    }

    public String toString() {
        return "FeatureSettings{cameraMode=" + this.f45819a + ", requiredMaxBitDepth=" + this.f45820b + ", previewStabilizationOn=" + this.f45821c + ", ultraHdrOn=" + this.f45822d + "}";
    }
}
