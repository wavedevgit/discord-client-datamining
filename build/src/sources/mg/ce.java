package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private de f38149a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f38150b;

    public final ce a(de deVar) {
        this.f38149a = deVar;
        return this;
    }

    public final ce b(Integer num) {
        this.f38150b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final fe d() {
        return new fe(this, null);
    }
}
