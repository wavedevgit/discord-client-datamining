package kotlinx.coroutines;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y extends b0 implements CompletableJob {

    /* renamed from: i  reason: collision with root package name */
    private final boolean f36379i;

    public y(Job job) {
        super(true);
        h0(job);
        this.f36379i = Q0();
    }

    private final boolean Q0() {
        g gVar;
        b0 u10;
        g gVar2;
        gs.n b02 = b0();
        if (b02 instanceof g) {
            gVar = (g) b02;
        } else {
            gVar = null;
        }
        if (gVar != null && (u10 = gVar.u()) != null) {
            while (!u10.X()) {
                gs.n b03 = u10.b0();
                if (b03 instanceof g) {
                    gVar2 = (g) b03;
                } else {
                    gVar2 = null;
                }
                if (gVar2 != null) {
                    u10 = gVar2.u();
                    if (u10 == null) {
                    }
                }
            }
            return true;
        }
        return false;
    }

    @Override // kotlinx.coroutines.b0
    public boolean X() {
        return this.f36379i;
    }

    @Override // kotlinx.coroutines.b0
    public boolean Y() {
        return true;
    }
}
