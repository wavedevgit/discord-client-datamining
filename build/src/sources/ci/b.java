package ci;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements Parcelable {
    public static final Parcelable.Creator<b> CREATOR = new e();

    public static b c(PendingIntent pendingIntent, boolean z10) {
        return new d(pendingIntent, false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract PendingIntent a();

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract boolean b();

    @Override // android.os.Parcelable
    public final int describeContents() {
        return 0;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        parcel.writeParcelable(a(), 0);
        parcel.writeInt(b() ? 1 : 0);
    }
}
