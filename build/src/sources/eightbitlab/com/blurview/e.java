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
    private int f21692b;

    /* renamed from: c  reason: collision with root package name */
    private int f21693c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f21695e;

    /* renamed from: f  reason: collision with root package name */
    private Context f21696f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f21691a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f21694d = 1.0f;

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
            canvas.drawRenderNode(this.f21691a);
            return;
        }
        if (this.f21695e == null) {
            this.f21695e = new f(this.f21696f);
        }
        this.f21695e.e(bitmap, this.f21694d);
        this.f21695e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f21691a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f21695e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f21694d = f10;
        if (bitmap.getHeight() != this.f21692b || bitmap.getWidth() != this.f21693c) {
            this.f21692b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f21693c = width;
            this.f21691a.setPosition(0, 0, width, this.f21692b);
        }
        this.f21691a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f21691a.endRecording();
        this.f21691a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f21696f = context;
    }
}
