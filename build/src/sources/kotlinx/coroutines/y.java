package kotlinx.coroutines;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class y extends b0 implements CompletableJob {

    /* renamed from: i  reason: collision with root package name */
    private final boolean f35137i;

    public y(Job job) {
        super(true);
        j0(job);
        this.f35137i = S0();
    }

    private final boolean S0() {
        g gVar;
        b0 u10;
        g gVar2;
        os.n d02 = d0();
        if (d02 instanceof g) {
            gVar = (g) d02;
        } else {
            gVar = null;
        }
        if (gVar != null && (u10 = gVar.u()) != null) {
            while (!u10.Z()) {
                os.n d03 = u10.d0();
                if (d03 instanceof g) {
                    gVar2 = (g) d03;
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
    public boolean Z() {
        return this.f35137i;
    }

    @Override // kotlinx.coroutines.b0
    public boolean a0() {
        return true;
    }
}
