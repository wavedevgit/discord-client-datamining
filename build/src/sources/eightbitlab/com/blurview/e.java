package eightbitlab.com.blurview;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.RenderEffect;
import android.graphics.RenderNode;
import android.graphics.Shader;
import com.discord.blur.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e implements BlurAlgorithm {

    /* renamed from: b  reason: collision with root package name */
    private int f22843b;

    /* renamed from: c  reason: collision with root package name */
    private int f22844c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f22846e;

    /* renamed from: f  reason: collision with root package name */
    private Context f22847f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f22842a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f22845d = 1.0f;

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap.Config a() {
        return Bitmap.Config.ARGB_8888;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public boolean b() {
        return true;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void c(Canvas canvas, Bitmap bitmap) {
        if (canvas.isHardwareAccelerated()) {
            canvas.drawRenderNode(this.f22842a);
            return;
        }
        if (this.f22846e == null) {
            this.f22846e = new f(this.f22847f);
        }
        this.f22846e.e(bitmap, this.f22845d);
        this.f22846e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f22842a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f22846e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f22845d = f10;
        if (bitmap.getHeight() != this.f22843b || bitmap.getWidth() != this.f22844c) {
            this.f22843b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f22844c = width;
            this.f22842a.setPosition(0, 0, width, this.f22843b);
        }
        this.f22842a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f22842a.endRecording();
        this.f22842a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f22847f = context;
    }
}
