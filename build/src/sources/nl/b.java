package nl;

import android.media.MediaFormat;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b {
    c a(int i10);

    int b(long j10);

    int c(long j10);

    Surface createInputSurface();

    c d(int i10);

    void e(c cVar);

    void f(MediaFormat mediaFormat);

    void g();

    String getName();

    MediaFormat getOutputFormat();

    void h(int i10);

    boolean isRunning();

    void release();

    void start();

    void stop();
}
