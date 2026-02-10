package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class od {

    /* renamed from: a  reason: collision with root package name */
    private pd f48592a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f48593b;

    public final od a(pd pdVar) {
        this.f48592a = pdVar;
        return this;
    }

    public final od b(Integer num) {
        this.f48593b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final rd d() {
        return new rd(this, null);
    }
}
