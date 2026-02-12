package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f40075a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40076b;

    /* renamed from: c  reason: collision with root package name */
    private int f40077c;

    /* renamed from: d  reason: collision with root package name */
    private byte f40078d;

    @Override // og.ek
    public final ek a(boolean z10) {
        this.f40076b = true;
        this.f40078d = (byte) (1 | this.f40078d);
        return this;
    }

    @Override // og.ek
    public final ek b(int i10) {
        this.f40077c = 1;
        this.f40078d = (byte) (this.f40078d | 2);
        return this;
    }

    @Override // og.ek
    public final fk c() {
        String str;
        if (this.f40078d == 3 && (str = this.f40075a) != null) {
            return new bk(str, this.f40076b, this.f40077c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f40075a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f40078d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f40078d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f40075a = str;
        return this;
    }
}
