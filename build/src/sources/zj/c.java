package zj;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.o;
import androidx.lifecycle.w;
import com.google.android.gms.tasks.Task;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface c extends Closeable, o, ef.f {
    @Override // java.io.Closeable, java.lang.AutoCloseable
    @w(Lifecycle.a.ON_DESTROY)
    void close();

    Task g(vj.a aVar);
}
