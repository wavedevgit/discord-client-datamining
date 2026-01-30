package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f39073a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f39074b;

    /* renamed from: c  reason: collision with root package name */
    private int f39075c;

    /* renamed from: d  reason: collision with root package name */
    private byte f39076d;

    @Override // mg.ek
    public final ek a(boolean z10) {
        this.f39074b = true;
        this.f39076d = (byte) (1 | this.f39076d);
        return this;
    }

    @Override // mg.ek
    public final ek b(int i10) {
        this.f39075c = 1;
        this.f39076d = (byte) (this.f39076d | 2);
        return this;
    }

    @Override // mg.ek
    public final fk c() {
        String str;
        if (this.f39076d == 3 && (str = this.f39073a) != null) {
            return new bk(str, this.f39074b, this.f39075c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f39073a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f39076d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f39076d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f39073a = str;
        return this;
    }
}
