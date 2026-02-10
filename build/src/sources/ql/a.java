package ql;

import android.media.MediaFormat;
import android.view.Surface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface a {
    c a(int i10);

    int b(long j10);

    int c(long j10);

    void d(c cVar);

    c e(int i10);

    void f(MediaFormat mediaFormat, Surface surface);

    void g(int i10, boolean z10);

    String getName();

    MediaFormat getOutputFormat();

    boolean isRunning();

    void release();

    void start();

    void stop();
}
