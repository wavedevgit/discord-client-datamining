package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class ij extends nj {

    /* renamed from: a  reason: collision with root package name */
    private String f47133a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f47134b;

    /* renamed from: c  reason: collision with root package name */
    private int f47135c;

    /* renamed from: d  reason: collision with root package name */
    private byte f47136d;

    @Override // qg.nj
    public final nj a(boolean z10) {
        this.f47134b = true;
        this.f47136d = (byte) (1 | this.f47136d);
        return this;
    }

    @Override // qg.nj
    public final nj b(int i10) {
        this.f47135c = 1;
        this.f47136d = (byte) (this.f47136d | 2);
        return this;
    }

    @Override // qg.nj
    public final oj c() {
        String str;
        if (this.f47136d == 3 && (str = this.f47133a) != null) {
            return new kj(str, this.f47134b, this.f47135c, null);
        }
        StringBuilder sb2 = new StringBuilder();
        if (this.f47133a == null) {
            sb2.append(" libraryName");
        }
        if ((this.f47136d & 1) == 0) {
            sb2.append(" enableFirelog");
        }
        if ((this.f47136d & 2) == 0) {
            sb2.append(" firelogEventType");
        }
        throw new IllegalStateException("Missing required properties:".concat(sb2.toString()));
    }

    public final nj d(String str) {
        if (str != null) {
            this.f47133a = str;
            return this;
        }
        throw new NullPointerException("Null libraryName");
    }
}
