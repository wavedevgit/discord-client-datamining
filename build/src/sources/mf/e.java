package mf;

import android.os.Parcel;
import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class e extends fg.b implements f {
    public e() {
        super("com.google.android.gms.common.moduleinstall.internal.IModuleInstallCallbacks");
    }

    @Override // fg.b
    protected final boolean W0(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        return false;
                    }
                    fg.c.b(parcel);
                    Q0((Status) fg.c.a(parcel, Status.CREATOR));
                } else {
                    fg.c.b(parcel);
                    u((Status) fg.c.a(parcel, Status.CREATOR), (lf.e) fg.c.a(parcel, lf.e.CREATOR));
                }
            } else {
                fg.c.b(parcel);
                N((Status) fg.c.a(parcel, Status.CREATOR), (lf.g) fg.c.a(parcel, lf.g.CREATOR));
            }
        } else {
            fg.c.b(parcel);
            J0((Status) fg.c.a(parcel, Status.CREATOR), (lf.b) fg.c.a(parcel, lf.b.CREATOR));
        }
        return true;
    }
}
