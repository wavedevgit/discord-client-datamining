package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f37154a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37155b;

    /* renamed from: c  reason: collision with root package name */
    private int f37156c;

    /* renamed from: d  reason: collision with root package name */
    private byte f37157d;

    @Override // mg.d0
    public final d0 a(boolean z10) {
        this.f37155b = true;
        this.f37157d = (byte) (1 | this.f37157d);
        return this;
    }

    @Override // mg.d0
    public final d0 b(int i10) {
        this.f37156c = 1;
        this.f37157d = (byte) (this.f37157d | 2);
        return this;
    }

    @Override // mg.d0
    public final e0 c() {
        String str;
        if (this.f37157d == 3 && (str = this.f37154a) != null) {
            return new a0(str, this.f37155b, this.f37156c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f37154a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f37157d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f37157d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f37154a = "common";
        return this;
    }
}
