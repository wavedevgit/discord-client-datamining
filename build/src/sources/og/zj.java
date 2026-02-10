package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class zj extends ek {

    /* renamed from: a  reason: collision with root package name */
    private String f41748a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f41749b;

    /* renamed from: c  reason: collision with root package name */
    private int f41750c;

    /* renamed from: d  reason: collision with root package name */
    private byte f41751d;

    @Override // og.ek
    public final ek a(boolean z10) {
        this.f41749b = true;
        this.f41751d = (byte) (1 | this.f41751d);
        return this;
    }

    @Override // og.ek
    public final ek b(int i10) {
        this.f41750c = 1;
        this.f41751d = (byte) (this.f41751d | 2);
        return this;
    }

    @Override // og.ek
    public final fk c() {
        String str;
        if (this.f41751d == 3 && (str = this.f41748a) != null) {
            return new bk(str, this.f41749b, this.f41750c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f41748a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f41751d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f41751d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final ek d(String str) {
        this.f41748a = str;
        return this;
    }
}
