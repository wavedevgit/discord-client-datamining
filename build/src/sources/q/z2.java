package q;

import android.hardware.camera2.CameraDevice;
import com.google.common.util.concurrent.ListenableFuture;
import java.util.List;
import java.util.Map;
import q.g4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
interface z2 {
    void a(List list);

    boolean b();

    ListenableFuture c(a0.i2 i2Var, CameraDevice cameraDevice, g4.a aVar);

    void close();

    void d();

    void e(a0.i2 i2Var);

    ListenableFuture f(boolean z10);

    List g();

    a0.i2 h();

    void i(Map map);
}
