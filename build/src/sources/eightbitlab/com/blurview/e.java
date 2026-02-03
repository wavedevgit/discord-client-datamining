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
    private int f22875b;

    /* renamed from: c  reason: collision with root package name */
    private int f22876c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f22878e;

    /* renamed from: f  reason: collision with root package name */
    private Context f22879f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f22874a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f22877d = 1.0f;

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
            canvas.drawRenderNode(this.f22874a);
            return;
        }
        if (this.f22878e == null) {
            this.f22878e = new f(this.f22879f);
        }
        this.f22878e.e(bitmap, this.f22877d);
        this.f22878e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f22874a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f22878e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f22877d = f10;
        if (bitmap.getHeight() != this.f22875b || bitmap.getWidth() != this.f22876c) {
            this.f22875b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f22876c = width;
            this.f22874a.setPosition(0, 0, width, this.f22875b);
        }
        this.f22874a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f22874a.endRecording();
        this.f22874a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f22879f = context;
    }
}
