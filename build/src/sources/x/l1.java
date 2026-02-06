package x;

import android.graphics.Rect;
import android.util.Size;
import android.view.Surface;
import androidx.core.util.Consumer;
import java.io.Closeable;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface l1 extends Closeable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class a {
        public static a f(Size size, Rect rect, a0.e0 e0Var, int i10, boolean z10) {
            return new e(size, rect, e0Var, i10, z10);
        }

        public abstract a0.e0 a();

        public abstract Rect b();

        public abstract Size c();

        public abstract boolean d();

        public abstract int e();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class b {
        public static b c(int i10, l1 l1Var) {
            return new f(i10, l1Var);
        }

        public abstract int a();

        public abstract l1 b();
    }

    void Q(float[] fArr, float[] fArr2, boolean z10);

    @Override // java.io.Closeable, java.lang.AutoCloseable
    void close();

    int getFormat();

    Size getSize();

    void h1(float[] fArr, float[] fArr2);

    Surface i1(Executor executor, Consumer consumer);
}
