package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o9 {

    /* renamed from: a  reason: collision with root package name */
    private p9 f46128a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f46129b;

    public final o9 a(p9 p9Var) {
        this.f46128a = p9Var;
        return this;
    }

    public final o9 b(Integer num) {
        this.f46129b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final r9 d() {
        return new r9(this, null);
    }
}
