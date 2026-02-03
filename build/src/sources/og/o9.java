package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o9 {

    /* renamed from: a  reason: collision with root package name */
    private p9 f43518a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f43519b;

    public final o9 a(p9 p9Var) {
        this.f43518a = p9Var;
        return this;
    }

    public final o9 b(Integer num) {
        this.f43519b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final r9 d() {
        return new r9(this, null);
    }
}
