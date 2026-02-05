package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ce {

    /* renamed from: a  reason: collision with root package name */
    private de f37588a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f37589b;

    public final ce a(de deVar) {
        this.f37588a = deVar;
        return this;
    }

    public final ce b(Integer num) {
        this.f37589b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final fe d() {
        return new fe(this, null);
    }
}
