package androidx.camera.core;

import android.graphics.Rect;
import android.media.Image;
import java.nio.ByteBuffer;
import x.p0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface n extends AutoCloseable {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        ByteBuffer f();

        int g();

        int h();
    }

    p0 A();

    void A0(Rect rect);

    Image B();

    @Override // java.lang.AutoCloseable
    void close();

    a[] d1();

    int getFormat();

    int getHeight();

    int getWidth();
}
