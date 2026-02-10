package qg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f45015a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f45016b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f45017c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f45018d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f45019e;

    public final ua d(Integer num) {
        this.f45018d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f45017c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f45016b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f45015a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f45019e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
