package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f47181a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47182b;

    /* renamed from: c  reason: collision with root package name */
    private int f47183c;

    /* renamed from: d  reason: collision with root package name */
    private byte f47184d;

    @Override // qg.nj
    public final nj a(boolean z10) {
        this.f47182b = true;
        this.f47184d = (byte) (1 | this.f47184d);
        return this;
    }

    @Override // qg.nj
    public final nj b(int i10) {
        this.f47183c = 1;
        this.f47184d = (byte) (this.f47184d | 2);
        return this;
    }

    @Override // qg.nj
    public final oj c() {
        String str;
        if (this.f47184d == 3 && (str = this.f47181a) != null) {
            return new kj(str, this.f47182b, this.f47183c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f47181a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f47184d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f47184d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f47181a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
