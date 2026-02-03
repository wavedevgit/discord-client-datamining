package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f36938a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36939b;

    /* renamed from: c  reason: collision with root package name */
    private int f36940c;

    /* renamed from: d  reason: collision with root package name */
    private byte f36941d;

    @Override // lg.d0
    public final d0 a(boolean z10) {
        this.f36939b = true;
        this.f36941d = (byte) (1 | this.f36941d);
        return this;
    }

    @Override // lg.d0
    public final d0 b(int i10) {
        this.f36940c = 1;
        this.f36941d = (byte) (this.f36941d | 2);
        return this;
    }

    @Override // lg.d0
    public final e0 c() {
        String str;
        if (this.f36941d == 3 && (str = this.f36938a) != null) {
            return new a0(str, this.f36939b, this.f36940c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f36938a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f36941d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f36941d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f36938a = "common";
        return this;
    }
}
