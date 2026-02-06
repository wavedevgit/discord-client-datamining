package pg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f44785a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f44786b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f44787c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f44788d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f44789e;

    public final ua d(Integer num) {
        this.f44788d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f44787c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f44786b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f44785a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f44789e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
