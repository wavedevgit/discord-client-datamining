package yj;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import com.google.android.gms.tasks.Task;
import ff.f;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a extends Closeable, o, f {
    @Override // java.lang.AutoCloseable, yj.a
    @w(Lifecycle.a.ON_DESTROY)
    void close();

    Task e(ck.a aVar);
}
