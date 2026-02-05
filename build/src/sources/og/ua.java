package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ua {

    /* renamed from: a  reason: collision with root package name */
    private v9 f43443a;

    /* renamed from: b  reason: collision with root package name */
    private r9 f43444b;

    /* renamed from: c  reason: collision with root package name */
    private n9 f43445c;

    /* renamed from: d  reason: collision with root package name */
    private Integer f43446d;

    /* renamed from: e  reason: collision with root package name */
    private Integer f43447e;

    public final ua d(Integer num) {
        this.f43446d = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final ua e(n9 n9Var) {
        this.f43445c = n9Var;
        return this;
    }

    public final ua f(r9 r9Var) {
        this.f43444b = r9Var;
        return this;
    }

    public final ua g(v9 v9Var) {
        this.f43443a = v9Var;
        return this;
    }

    public final ua h(Integer num) {
        this.f43447e = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final wa i() {
        return new wa(this, null);
    }
}
