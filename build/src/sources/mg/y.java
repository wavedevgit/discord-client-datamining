package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f37202a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37203b;

    /* renamed from: c  reason: collision with root package name */
    private int f37204c;

    /* renamed from: d  reason: collision with root package name */
    private byte f37205d;

    @Override // mg.d0
    public final d0 a(boolean z10) {
        this.f37203b = true;
        this.f37205d = (byte) (1 | this.f37205d);
        return this;
    }

    @Override // mg.d0
    public final d0 b(int i10) {
        this.f37204c = 1;
        this.f37205d = (byte) (this.f37205d | 2);
        return this;
    }

    @Override // mg.d0
    public final e0 c() {
        String str;
        if (this.f37205d == 3 && (str = this.f37202a) != null) {
            return new a0(str, this.f37203b, this.f37204c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f37202a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f37205d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f37205d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f37202a = "common";
        return this;
    }
}
