package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f43593a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f43594b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f43595c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f43596d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f43597e;

    public final ua d(Integer num) {
        this.f43596d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f43595c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f43594b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f43593a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f43597e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
