package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3088a = (IconCompat) aVar.v(remoteActionCompat.f3088a, 1);
        remoteActionCompat.f3089b = aVar.l(remoteActionCompat.f3089b, 2);
        remoteActionCompat.f3090c = aVar.l(remoteActionCompat.f3090c, 3);
        remoteActionCompat.f3091d = (PendingIntent) aVar.r(remoteActionCompat.f3091d, 4);
        remoteActionCompat.f3092e = aVar.h(remoteActionCompat.f3092e, 5);
        remoteActionCompat.f3093f = aVar.h(remoteActionCompat.f3093f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3088a, 1);
        aVar.D(remoteActionCompat.f3089b, 2);
        aVar.D(remoteActionCompat.f3090c, 3);
        aVar.H(remoteActionCompat.f3091d, 4);
        aVar.z(remoteActionCompat.f3092e, 5);
        aVar.z(remoteActionCompat.f3093f, 6);
    }
}
