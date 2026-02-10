package androidx.core.app;

import android.app.PendingIntent;
import androidx.core.graphics.drawable.IconCompat;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class RemoteActionCompatParcelizer {
    public static RemoteActionCompat read(androidx.versionedparcelable.a aVar) {
        RemoteActionCompat remoteActionCompat = new RemoteActionCompat();
        remoteActionCompat.f3195a = (IconCompat) aVar.v(remoteActionCompat.f3195a, 1);
        remoteActionCompat.f3196b = aVar.l(remoteActionCompat.f3196b, 2);
        remoteActionCompat.f3197c = aVar.l(remoteActionCompat.f3197c, 3);
        remoteActionCompat.f3198d = (PendingIntent) aVar.r(remoteActionCompat.f3198d, 4);
        remoteActionCompat.f3199e = aVar.h(remoteActionCompat.f3199e, 5);
        remoteActionCompat.f3200f = aVar.h(remoteActionCompat.f3200f, 6);
        return remoteActionCompat;
    }

    public static void write(RemoteActionCompat remoteActionCompat, androidx.versionedparcelable.a aVar) {
        aVar.x(false, false);
        aVar.M(remoteActionCompat.f3195a, 1);
        aVar.D(remoteActionCompat.f3196b, 2);
        aVar.D(remoteActionCompat.f3197c, 3);
        aVar.H(remoteActionCompat.f3198d, 4);
        aVar.z(remoteActionCompat.f3199e, 5);
        aVar.z(remoteActionCompat.f3200f, 6);
    }
}
