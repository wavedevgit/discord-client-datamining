package ng;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f40723a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f40724b;

    /* renamed from: c  reason: collision with root package name */
    private int f40725c;

    /* renamed from: d  reason: collision with root package name */
    private byte f40726d;

    @Override // ng.ek
    public final ek a(boolean z10) {
        this.f40724b = true;
        this.f40726d = (byte) (1 | this.f40726d);
        return this;
    }

    @Override // ng.ek
    public final ek b(int i10) {
        this.f40725c = 1;
        this.f40726d = (byte) (this.f40726d | 2);
        return this;
    }

    @Override // ng.ek
    public final fk c() {
        String str;
        if (this.f40726d == 3 && (str = this.f40723a) != null) {
            return new bk(str, this.f40724b, this.f40725c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f40723a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f40726d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f40726d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f40723a = str;
        return this;
    }
}
