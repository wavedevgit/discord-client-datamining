package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f44006a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44007b;

    /* renamed from: c  reason: collision with root package name */
    private int f44008c;

    /* renamed from: d  reason: collision with root package name */
    private byte f44009d;

    @Override // pg.fd
    public final fd a(boolean z10) {
        this.f44007b = true;
        this.f44009d = (byte) (1 | this.f44009d);
        return this;
    }

    @Override // pg.fd
    public final fd b(int i10) {
        this.f44008c = 1;
        this.f44009d = (byte) (this.f44009d | 2);
        return this;
    }

    @Override // pg.fd
    public final gd c() {
        String str;
        if (this.f44009d == 3 && (str = this.f44006a) != null) {
            return new dd(str, this.f44007b, this.f44008c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f44006a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f44009d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f44009d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f44006a = str;
        return this;
    }
}
