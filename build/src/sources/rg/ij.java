package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f46754a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f46755b;

    /* renamed from: c  reason: collision with root package name */
    private int f46756c;

    /* renamed from: d  reason: collision with root package name */
    private byte f46757d;

    @Override // rg.nj
    public final nj a(boolean z10) {
        this.f46755b = true;
        this.f46757d = (byte) (1 | this.f46757d);
        return this;
    }

    @Override // rg.nj
    public final nj b(int i10) {
        this.f46756c = 1;
        this.f46757d = (byte) (this.f46757d | 2);
        return this;
    }

    @Override // rg.nj
    public final oj c() {
        String str;
        if (this.f46757d == 3 && (str = this.f46754a) != null) {
            return new kj(str, this.f46755b, this.f46756c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f46754a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f46757d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f46757d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f46754a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
