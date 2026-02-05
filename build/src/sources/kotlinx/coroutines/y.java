package kotlinx.coroutines;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y extends b0 implements CompletableJob {

    /* renamed from: i  reason: collision with root package name */
    private final boolean f35069i;

    public y(Job job) {
        super(true);
        i0(job);
        this.f35069i = Q0();
    }

    private final boolean Q0() {
        g gVar;
        b0 u10;
        g gVar2;
        ms.n c02 = c0();
        if (c02 instanceof g) {
            gVar = (g) c02;
        } else {
            gVar = null;
        }
        if (gVar != null && (u10 = gVar.u()) != null) {
            while (!u10.Y()) {
                ms.n c03 = u10.c0();
                if (c03 instanceof g) {
                    gVar2 = (g) c03;
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
    public boolean Y() {
        return this.f35069i;
    }

    @Override // kotlinx.coroutines.b0
    public boolean Z() {
        return true;
    }
}
