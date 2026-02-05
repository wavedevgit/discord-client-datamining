package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f36865a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f36866b;

    /* renamed from: c  reason: collision with root package name */
    private int f36867c;

    /* renamed from: d  reason: collision with root package name */
    private byte f36868d;

    @Override // lg.d0
    public final d0 a(boolean z10) {
        this.f36866b = true;
        this.f36868d = (byte) (1 | this.f36868d);
        return this;
    }

    @Override // lg.d0
    public final d0 b(int i10) {
        this.f36867c = 1;
        this.f36868d = (byte) (this.f36868d | 2);
        return this;
    }

    @Override // lg.d0
    public final e0 c() {
        String str;
        if (this.f36868d == 3 && (str = this.f36865a) != null) {
            return new a0(str, this.f36866b, this.f36867c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f36865a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f36868d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f36868d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f36865a = "common";
        return this;
    }
}
