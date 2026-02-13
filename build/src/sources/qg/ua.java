package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f45584a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f45585b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f45586c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f45587d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f45588e;

    public final ua d(Integer num) {
        this.f45587d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f45586c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f45585b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f45584a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f45588e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
