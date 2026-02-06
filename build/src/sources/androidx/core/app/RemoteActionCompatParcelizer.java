package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3498a = (IconCompat) aVar.v(remoteActionCompat.f3498a, 1);
        remoteActionCompat.f3499b = aVar.l(remoteActionCompat.f3499b, 2);
        remoteActionCompat.f3500c = aVar.l(remoteActionCompat.f3500c, 3);
        remoteActionCompat.f3501d = (PendingIntent) aVar.r(remoteActionCompat.f3501d, 4);
        remoteActionCompat.f3502e = aVar.h(remoteActionCompat.f3502e, 5);
        remoteActionCompat.f3503f = aVar.h(remoteActionCompat.f3503f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3498a, 1);
        aVar.D(remoteActionCompat.f3499b, 2);
        aVar.D(remoteActionCompat.f3500c, 3);
        aVar.H(remoteActionCompat.f3501d, 4);
        aVar.z(remoteActionCompat.f3502e, 5);
        aVar.z(remoteActionCompat.f3503f, 6);
    }
}
