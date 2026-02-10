package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3198a = (IconCompat) aVar.v(remoteActionCompat.f3198a, 1);
        remoteActionCompat.f3199b = aVar.l(remoteActionCompat.f3199b, 2);
        remoteActionCompat.f3200c = aVar.l(remoteActionCompat.f3200c, 3);
        remoteActionCompat.f3201d = (PendingIntent) aVar.r(remoteActionCompat.f3201d, 4);
        remoteActionCompat.f3202e = aVar.h(remoteActionCompat.f3202e, 5);
        remoteActionCompat.f3203f = aVar.h(remoteActionCompat.f3203f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3198a, 1);
        aVar.D(remoteActionCompat.f3199b, 2);
        aVar.D(remoteActionCompat.f3200c, 3);
        aVar.H(remoteActionCompat.f3201d, 4);
        aVar.z(remoteActionCompat.f3202e, 5);
        aVar.z(remoteActionCompat.f3203f, 6);
    }
}
