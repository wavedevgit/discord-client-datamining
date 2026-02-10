package ta;

import com.facebook.imagepipeline.image.ImageInfo;
import java.io.Closeable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface e extends Closeable, ImageInfo, t8.a, z9.a {
    ImageInfo E();

    o F1();

    @Override // java.io.Closeable, java.lang.AutoCloseable
    void close();

    int getHeight();

    int getWidth();

    boolean isClosed();

    boolean l2();

    int w();
}
