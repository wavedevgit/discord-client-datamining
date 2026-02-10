package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f40074a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40075b;

    /* renamed from: c  reason: collision with root package name */
    private int f40076c;

    /* renamed from: d  reason: collision with root package name */
    private byte f40077d;

    @Override // og.ek
    public final ek a(boolean z10) {
        this.f40075b = true;
        this.f40077d = (byte) (1 | this.f40077d);
        return this;
    }

    @Override // og.ek
    public final ek b(int i10) {
        this.f40076c = 1;
        this.f40077d = (byte) (this.f40077d | 2);
        return this;
    }

    @Override // og.ek
    public final fk c() {
        String str;
        if (this.f40077d == 3 && (str = this.f40074a) != null) {
            return new bk(str, this.f40075b, this.f40076c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f40074a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f40077d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f40077d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f40074a = str;
        return this;
    }
}
