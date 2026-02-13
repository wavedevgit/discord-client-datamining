package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class bd extends fd {

    /* renamed from: a  reason: collision with root package name */
    private String f44757a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f44758b;

    /* renamed from: c  reason: collision with root package name */
    private int f44759c;

    /* renamed from: d  reason: collision with root package name */
    private byte f44760d;

    @Override // qg.fd
    public final fd a(boolean z10) {
        this.f44758b = true;
        this.f44760d = (byte) (1 | this.f44760d);
        return this;
    }

    @Override // qg.fd
    public final fd b(int i10) {
        this.f44759c = 1;
        this.f44760d = (byte) (this.f44760d | 2);
        return this;
    }

    @Override // qg.fd
    public final gd c() {
        String str;
        if (this.f44760d == 3 && (str = this.f44757a) != null) {
            return new dd(str, this.f44758b, this.f44759c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f44757a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f44760d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f44760d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final fd d(String str) {
        this.f44757a = str;
        return this;
    }
}
