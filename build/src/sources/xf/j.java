package xf;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements Parcelable.Creator {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static void c(i iVar, Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, iVar.b(), i10, false);
        hf.c.b(parcel, a10);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: a */
    public i createFromParcel(Parcel parcel) {
        int A = hf.b.A(parcel);
        PendingIntent pendingIntent = null;
        while (parcel.dataPosition() < A) {
            int r10 = hf.b.r(parcel);
            if (hf.b.l(r10) != 1) {
                hf.b.z(parcel, r10);
            } else {
                pendingIntent = (PendingIntent) hf.b.e(parcel, r10, PendingIntent.CREATOR);
            }
        }
        hf.b.k(parcel, A);
        return new i(pendingIntent);
    }

    @Override // android.os.Parcelable.Creator
    /* renamed from: b */
    public i[] newArray(int i10) {
        return new i[i10];
    }
}
