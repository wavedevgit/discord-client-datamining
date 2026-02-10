package nf;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e extends gg.b implements f {
    public e() {
        super("com.google.android.gms.common.moduleinstall.internal.IModuleInstallCallbacks");
    }

    @Override // gg.b
    protected final boolean W0(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        return false;
                    }
                    gg.c.b(parcel);
                    O0((Status) gg.c.a(parcel, Status.CREATOR));
                } else {
                    gg.c.b(parcel);
                    n((Status) gg.c.a(parcel, Status.CREATOR), (mf.e) gg.c.a(parcel, mf.e.CREATOR));
                }
            } else {
                gg.c.b(parcel);
                R0((Status) gg.c.a(parcel, Status.CREATOR), (mf.g) gg.c.a(parcel, mf.g.CREATOR));
            }
        } else {
            gg.c.b(parcel);
            R((Status) gg.c.a(parcel, Status.CREATOR), (mf.b) gg.c.a(parcel, mf.b.CREATOR));
        }
        return true;
    }
}
