package kg;

import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b extends d implements c {
    public b() {
        super("com.google.android.gms.location.internal.ISettingsCallbacks");
    }

    @Override // kg.d
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        if (i10 == 1) {
            h.d(parcel);
            V((tg.f) h.a(parcel, tg.f.CREATOR));
            return true;
        }
        return false;
    }
}
