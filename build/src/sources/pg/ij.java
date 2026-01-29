package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f45325a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f45326b;

    /* renamed from: c  reason: collision with root package name */
    private int f45327c;

    /* renamed from: d  reason: collision with root package name */
    private byte f45328d;

    @Override // pg.nj
    public final nj a(boolean z10) {
        this.f45326b = true;
        this.f45328d = (byte) (1 | this.f45328d);
        return this;
    }

    @Override // pg.nj
    public final nj b(int i10) {
        this.f45327c = 1;
        this.f45328d = (byte) (this.f45328d | 2);
        return this;
    }

    @Override // pg.nj
    public final oj c() {
        String str;
        if (this.f45328d == 3 && (str = this.f45325a) != null) {
            return new kj(str, this.f45326b, this.f45327c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f45325a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f45328d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f45328d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f45325a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
