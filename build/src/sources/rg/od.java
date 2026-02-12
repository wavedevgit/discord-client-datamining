package rg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class od {

    /* renamed from: a  reason: collision with root package name */
    private pd f47047a;

    /* renamed from: b  reason: collision with root package name */
    private Integer f47048b;

    public final od a(pd pdVar) {
        this.f47047a = pdVar;
        return this;
    }

    public final od b(Integer num) {
        this.f47048b = Integer.valueOf(num.intValue() & Integer.MAX_VALUE);
        return this;
    }

    public final rd d() {
        return new rd(this, null);
    }
}
