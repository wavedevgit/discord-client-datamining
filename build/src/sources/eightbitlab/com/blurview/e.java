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
    private int f21613b;

    /* renamed from: c  reason: collision with root package name */
    private int f21614c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f21616e;

    /* renamed from: f  reason: collision with root package name */
    private Context f21617f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f21612a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f21615d = 1.0f;

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
            canvas.drawRenderNode(this.f21612a);
            return;
        }
        if (this.f21616e == null) {
            this.f21616e = new f(this.f21617f);
        }
        this.f21616e.e(bitmap, this.f21615d);
        this.f21616e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f21612a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f21616e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f21615d = f10;
        if (bitmap.getHeight() != this.f21613b || bitmap.getWidth() != this.f21614c) {
            this.f21613b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f21614c = width;
            this.f21612a.setPosition(0, 0, width, this.f21613b);
        }
        this.f21612a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f21612a.endRecording();
        this.f21612a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f21617f = context;
    }
}
