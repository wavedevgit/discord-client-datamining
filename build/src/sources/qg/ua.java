package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f46347a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f46348b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f46349c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f46350d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f46351e;

    public final ua d(Integer num) {
        this.f46350d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f46349c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f46348b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f46347a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f46351e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
