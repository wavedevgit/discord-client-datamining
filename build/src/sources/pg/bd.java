package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f43958a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f43959b;

    /* renamed from: c  reason: collision with root package name */
    private int f43960c;

    /* renamed from: d  reason: collision with root package name */
    private byte f43961d;

    @Override // pg.fd
    public final fd a(boolean z10) {
        this.f43959b = true;
        this.f43961d = (byte) (1 | this.f43961d);
        return this;
    }

    @Override // pg.fd
    public final fd b(int i10) {
        this.f43960c = 1;
        this.f43961d = (byte) (this.f43961d | 2);
        return this;
    }

    @Override // pg.fd
    public final gd c() {
        String str;
        if (this.f43961d == 3 && (str = this.f43958a) != null) {
            return new dd(str, this.f43959b, this.f43960c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f43958a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f43961d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f43961d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f43958a = str;
        return this;
    }
}
