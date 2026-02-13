package kotlinx.coroutines;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y extends b0 implements CompletableJob {

    /* renamed from: i  reason: collision with root package name */
    private final boolean f35637i;

    public y(Job job) {
        super(true);
        k0(job);
        this.f35637i = V0();
    }

    private final boolean V0() {
        g gVar;
        b0 u10;
        g gVar2;
        ys.n e02 = e0();
        if (e02 instanceof g) {
            gVar = (g) e02;
        } else {
            gVar = null;
        }
        if (gVar != null && (u10 = gVar.u()) != null) {
            while (!u10.a0()) {
                ys.n e03 = u10.e0();
                if (e03 instanceof g) {
                    gVar2 = (g) e03;
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
    public boolean a0() {
        return this.f35637i;
    }

    @Override // kotlinx.coroutines.b0
    public boolean b0() {
        return true;
    }
}
