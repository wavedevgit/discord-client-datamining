package wf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public enum x implements a {
    RS256(-257),
    RS384(-258),
    RS512(-259),
    LEGACY_RS1(-262),
    PS256(-37),
    PS384(-38),
    PS512(-39),
    RS1(-65535);
    

    /* renamed from: d  reason: collision with root package name */
    private final int f52574d;

    x(int i10) {
        this.f52574d = i10;
    }

    @Override // wf.a
    public int a() {
        return this.f52574d;
    }
}
