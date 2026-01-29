package eightbitlab.com.blurview;

import android.graphics.Bitmap;
import android.graphics.Canvas;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface BlurAlgorithm {
    Bitmap.Config a();

    boolean b();

    void c(Canvas canvas, Bitmap bitmap);

    float d();

    void destroy();

    Bitmap e(Bitmap bitmap, float f10);
}
