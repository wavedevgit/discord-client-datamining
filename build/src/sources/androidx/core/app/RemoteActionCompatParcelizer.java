package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3044a = (IconCompat) aVar.v(remoteActionCompat.f3044a, 1);
        remoteActionCompat.f3045b = aVar.l(remoteActionCompat.f3045b, 2);
        remoteActionCompat.f3046c = aVar.l(remoteActionCompat.f3046c, 3);
        remoteActionCompat.f3047d = (PendingIntent) aVar.r(remoteActionCompat.f3047d, 4);
        remoteActionCompat.f3048e = aVar.h(remoteActionCompat.f3048e, 5);
        remoteActionCompat.f3049f = aVar.h(remoteActionCompat.f3049f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3044a, 1);
        aVar.D(remoteActionCompat.f3045b, 2);
        aVar.D(remoteActionCompat.f3046c, 3);
        aVar.H(remoteActionCompat.f3047d, 4);
        aVar.z(remoteActionCompat.f3048e, 5);
        aVar.z(remoteActionCompat.f3049f, 6);
    }
}
