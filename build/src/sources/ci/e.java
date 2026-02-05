package ci;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class e implements Parcelable.Creator {
    @Override // android.os.Parcelable.Creator
    public final /* bridge */ /* synthetic */ Object createFromParcel(Parcel parcel) {
        boolean z10;
        PendingIntent pendingIntent = (PendingIntent) parcel.readParcelable(b.class.getClassLoader());
        if (parcel.readInt() != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        return new d(pendingIntent, z10);
    }

    @Override // android.os.Parcelable.Creator
    public final /* synthetic */ Object[] newArray(int i10) {
        return new b[i10];
    }
}
