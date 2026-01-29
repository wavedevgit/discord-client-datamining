package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private de f38133a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f38134b;

    public final ce a(de deVar) {
        this.f38133a = deVar;
        return this;
    }

    public final ce b(Integer num) {
        this.f38134b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final fe d() {
        return new fe(this, null);
    }
}
