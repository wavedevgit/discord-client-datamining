package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3169a = (IconCompat) aVar.v(remoteActionCompat.f3169a, 1);
        remoteActionCompat.f3170b = aVar.l(remoteActionCompat.f3170b, 2);
        remoteActionCompat.f3171c = aVar.l(remoteActionCompat.f3171c, 3);
        remoteActionCompat.f3172d = (PendingIntent) aVar.r(remoteActionCompat.f3172d, 4);
        remoteActionCompat.f3173e = aVar.h(remoteActionCompat.f3173e, 5);
        remoteActionCompat.f3174f = aVar.h(remoteActionCompat.f3174f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3169a, 1);
        aVar.D(remoteActionCompat.f3170b, 2);
        aVar.D(remoteActionCompat.f3171c, 3);
        aVar.H(remoteActionCompat.f3172d, 4);
        aVar.z(remoteActionCompat.f3173e, 5);
        aVar.z(remoteActionCompat.f3174f, 6);
    }
}
