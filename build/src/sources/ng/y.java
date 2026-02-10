package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f38887a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38888b;

    /* renamed from: c  reason: collision with root package name */
    private int f38889c;

    /* renamed from: d  reason: collision with root package name */
    private byte f38890d;

    @Override // ng.d0
    public final d0 a(boolean z10) {
        this.f38888b = true;
        this.f38890d = (byte) (1 | this.f38890d);
        return this;
    }

    @Override // ng.d0
    public final d0 b(int i10) {
        this.f38889c = 1;
        this.f38890d = (byte) (this.f38890d | 2);
        return this;
    }

    @Override // ng.d0
    public final e0 c() {
        String str;
        if (this.f38890d == 3 && (str = this.f38887a) != null) {
            return new a0(str, this.f38888b, this.f38889c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f38887a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f38890d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f38890d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f38887a = "common";
        return this;
    }
}
