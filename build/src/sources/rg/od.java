package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class od {

    /* renamed from: a  reason: collision with root package name */
    private pd f47615a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f47616b;

    public final od a(pd pdVar) {
        this.f47615a = pdVar;
        return this;
    }

    public final od b(Integer num) {
        this.f47616b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final rd d() {
        return new rd(this, null);
    }
}
