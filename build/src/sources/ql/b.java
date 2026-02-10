package ql;

import android.media.MediaFormat;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface b {
    c a(int i10);

    int b(long j10);

    int c(long j10);

    Surface createInputSurface();

    void d(c cVar);

    c e(int i10);

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
