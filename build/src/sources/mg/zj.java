package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f39053a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f39054b;

    /* renamed from: c  reason: collision with root package name */
    private int f39055c;

    /* renamed from: d  reason: collision with root package name */
    private byte f39056d;

    @Override // mg.ek
    public final ek a(boolean z10) {
        this.f39054b = true;
        this.f39056d = (byte) (1 | this.f39056d);
        return this;
    }

    @Override // mg.ek
    public final ek b(int i10) {
        this.f39055c = 1;
        this.f39056d = (byte) (this.f39056d | 2);
        return this;
    }

    @Override // mg.ek
    public final fk c() {
        String str;
        if (this.f39056d == 3 && (str = this.f39053a) != null) {
            return new bk(str, this.f39054b, this.f39055c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f39053a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f39056d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f39056d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f39053a = str;
        return this;
    }
}
