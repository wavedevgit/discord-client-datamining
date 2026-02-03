package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f38850a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f38851b;

    /* renamed from: c  reason: collision with root package name */
    private int f38852c;

    /* renamed from: d  reason: collision with root package name */
    private byte f38853d;

    @Override // mg.ek
    public final ek a(boolean z10) {
        this.f38851b = true;
        this.f38853d = (byte) (1 | this.f38853d);
        return this;
    }

    @Override // mg.ek
    public final ek b(int i10) {
        this.f38852c = 1;
        this.f38853d = (byte) (this.f38853d | 2);
        return this;
    }

    @Override // mg.ek
    public final fk c() {
        String str;
        if (this.f38853d == 3 && (str = this.f38850a) != null) {
            return new bk(str, this.f38851b, this.f38852c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f38850a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f38853d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f38853d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f38850a = str;
        return this;
    }
}
