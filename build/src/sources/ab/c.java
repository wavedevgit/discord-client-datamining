package ab;

import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import java.io.OutputStream;
import ta.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface c {
    String a();

    boolean b(ga.c cVar);

    b c(k kVar, OutputStream outputStream, RotationOptions rotationOptions, ResizeOptions resizeOptions, ga.c cVar, Integer num, ColorSpace colorSpace);

    boolean d(k kVar, RotationOptions rotationOptions, ResizeOptions resizeOptions);
}
