package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3057a = (IconCompat) aVar.v(remoteActionCompat.f3057a, 1);
        remoteActionCompat.f3058b = aVar.l(remoteActionCompat.f3058b, 2);
        remoteActionCompat.f3059c = aVar.l(remoteActionCompat.f3059c, 3);
        remoteActionCompat.f3060d = (PendingIntent) aVar.r(remoteActionCompat.f3060d, 4);
        remoteActionCompat.f3061e = aVar.h(remoteActionCompat.f3061e, 5);
        remoteActionCompat.f3062f = aVar.h(remoteActionCompat.f3062f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3057a, 1);
        aVar.D(remoteActionCompat.f3058b, 2);
        aVar.D(remoteActionCompat.f3059c, 3);
        aVar.H(remoteActionCompat.f3060d, 4);
        aVar.z(remoteActionCompat.f3061e, 5);
        aVar.z(remoteActionCompat.f3062f, 6);
    }
}
