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
    private int f21566b;

    /* renamed from: c  reason: collision with root package name */
    private int f21567c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f21569e;

    /* renamed from: f  reason: collision with root package name */
    private Context f21570f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f21565a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f21568d = 1.0f;

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
            canvas.drawRenderNode(this.f21565a);
            return;
        }
        if (this.f21569e == null) {
            this.f21569e = new f(this.f21570f);
        }
        this.f21569e.e(bitmap, this.f21568d);
        this.f21569e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f21565a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f21569e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f21568d = f10;
        if (bitmap.getHeight() != this.f21566b || bitmap.getWidth() != this.f21567c) {
            this.f21566b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f21567c = width;
            this.f21565a.setPosition(0, 0, width, this.f21566b);
        }
        this.f21565a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f21565a.endRecording();
        this.f21565a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f21570f = context;
    }
}
