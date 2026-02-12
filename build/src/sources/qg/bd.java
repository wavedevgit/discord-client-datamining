package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f44189a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44190b;

    /* renamed from: c  reason: collision with root package name */
    private int f44191c;

    /* renamed from: d  reason: collision with root package name */
    private byte f44192d;

    @Override // qg.fd
    public final fd a(boolean z10) {
        this.f44190b = true;
        this.f44192d = (byte) (1 | this.f44192d);
        return this;
    }

    @Override // qg.fd
    public final fd b(int i10) {
        this.f44191c = 1;
        this.f44192d = (byte) (this.f44192d | 2);
        return this;
    }

    @Override // qg.fd
    public final gd c() {
        String str;
        if (this.f44192d == 3 && (str = this.f44189a) != null) {
            return new dd(str, this.f44190b, this.f44191c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f44189a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f44192d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f44192d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f44189a = str;
        return this;
    }
}
