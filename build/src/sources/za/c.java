package za;

import android.graphics.ColorSpace;
import com.facebook.imagepipeline.common.ResizeOptions;
import com.facebook.imagepipeline.common.RotationOptions;
import java.io.OutputStream;
import sa.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface c {
    String a();

    boolean b(k kVar, RotationOptions rotationOptions, ResizeOptions resizeOptions);

    b c(k kVar, OutputStream outputStream, RotationOptions rotationOptions, ResizeOptions resizeOptions, fa.c cVar, Integer num, ColorSpace colorSpace);

    boolean d(fa.c cVar);
}
