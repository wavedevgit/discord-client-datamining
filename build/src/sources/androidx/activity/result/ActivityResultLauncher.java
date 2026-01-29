package androidx.activity.result;

import androidx.activity.result.contract.ActivityResultContract;
import androidx.core.app.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class ActivityResultLauncher {
    public abstract ActivityResultContract a();

    public void b(Object obj) {
        c(obj, null);
    }

    public abstract void c(Object obj, d dVar);

    public abstract void d();
}
