package og;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private de f40824a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f40825b;

    public final ce a(de deVar) {
        this.f40824a = deVar;
        return this;
    }

    public final ce b(Integer num) {
        this.f40825b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final fe d() {
        return new fe(this, null);
    }
}
