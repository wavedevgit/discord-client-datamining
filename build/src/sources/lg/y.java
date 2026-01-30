package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y extends d0 {

    /* renamed from: a  reason: collision with root package name */
    private String f37355a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f37356b;

    /* renamed from: c  reason: collision with root package name */
    private int f37357c;

    /* renamed from: d  reason: collision with root package name */
    private byte f37358d;

    @Override // lg.d0
    public final d0 a(boolean z10) {
        this.f37356b = true;
        this.f37358d = (byte) (1 | this.f37358d);
        return this;
    }

    @Override // lg.d0
    public final d0 b(int i10) {
        this.f37357c = 1;
        this.f37358d = (byte) (this.f37358d | 2);
        return this;
    }

    @Override // lg.d0
    public final e0 c() {
        String str;
        if (this.f37358d == 3 && (str = this.f37355a) != null) {
            return new a0(str, this.f37356b, this.f37357c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f37355a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f37358d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f37358d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final d0 d(String str) {
        this.f37355a = "common";
        return this;
    }
}
