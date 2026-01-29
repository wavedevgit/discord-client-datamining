package androidx.loader.app;

import android.os.Bundle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.q0;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import n3.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class LoaderManager {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(b bVar);

        void b(b bVar, Object obj);

        b c(int i10, Bundle bundle);
    }

    public static LoaderManager b(LifecycleOwner lifecycleOwner) {
        return new androidx.loader.app.a(lifecycleOwner, ((q0) lifecycleOwner).getViewModelStore());
    }

    public abstract void a(String str, FileDescriptor fileDescriptor, PrintWriter printWriter, String[] strArr);

    public abstract b c(int i10, Bundle bundle, a aVar);

    public abstract void d();
}
