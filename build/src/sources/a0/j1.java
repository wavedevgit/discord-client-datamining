package a0;

import android.view.Surface;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface j1 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        void a(j1 j1Var);
    }

    androidx.camera.core.n b();

    int c();

    void close();

    void d();

    void e(a aVar, Executor executor);

    int f();

    androidx.camera.core.n g();

    int getHeight();

    Surface getSurface();

    int getWidth();
}
