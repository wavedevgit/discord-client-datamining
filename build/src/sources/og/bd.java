package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f42616a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f42617b;

    /* renamed from: c  reason: collision with root package name */
    private int f42618c;

    /* renamed from: d  reason: collision with root package name */
    private byte f42619d;

    @Override // og.fd
    public final fd a(boolean z10) {
        this.f42617b = true;
        this.f42619d = (byte) (1 | this.f42619d);
        return this;
    }

    @Override // og.fd
    public final fd b(int i10) {
        this.f42618c = 1;
        this.f42619d = (byte) (this.f42619d | 2);
        return this;
    }

    @Override // og.fd
    public final gd c() {
        String str;
        if (this.f42619d == 3 && (str = this.f42616a) != null) {
            return new dd(str, this.f42617b, this.f42618c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f42616a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f42619d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f42619d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f42616a = str;
        return this;
    }
}
