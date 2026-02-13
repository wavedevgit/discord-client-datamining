package z;

import z.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class g extends y0.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f56448a;

    /* renamed from: b  reason: collision with root package name */
    private final x.o0 f56449b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(int i10, x.o0 o0Var) {
        this.f56448a = i10;
        if (o0Var != null) {
            this.f56449b = o0Var;
            return;
        }
        throw new NullPointerException("Null imageCaptureException");
    }

    @Override // z.y0.b
    x.o0 a() {
        return this.f56449b;
    }

    @Override // z.y0.b
    int b() {
        return this.f56448a;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof y0.b) {
            y0.b bVar = (y0.b) obj;
            if (this.f56448a == bVar.b() && this.f56449b.equals(bVar.a())) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((this.f56448a ^ 1000003) * 1000003) ^ this.f56449b.hashCode();
    }

    public String toString() {
        return "CaptureError{requestId=" + this.f56448a + ", imageCaptureException=" + this.f56449b + "}";
    }
}
