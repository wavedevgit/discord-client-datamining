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
    private int f22848b;

    /* renamed from: c  reason: collision with root package name */
    private int f22849c;

    /* renamed from: e  reason: collision with root package name */
    public BlurAlgorithm f22851e;

    /* renamed from: f  reason: collision with root package name */
    private Context f22852f;

    /* renamed from: a  reason: collision with root package name */
    private final RenderNode f22847a = i.a("BlurViewNode");

    /* renamed from: d  reason: collision with root package name */
    private float f22850d = 1.0f;

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
            canvas.drawRenderNode(this.f22847a);
            return;
        }
        if (this.f22851e == null) {
            this.f22851e = new f(this.f22852f);
        }
        this.f22851e.e(bitmap, this.f22850d);
        this.f22851e.c(canvas, bitmap);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public void destroy() {
        this.f22847a.discardDisplayList();
        BlurAlgorithm blurAlgorithm = this.f22851e;
        if (blurAlgorithm != null) {
            blurAlgorithm.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        this.f22850d = f10;
        if (bitmap.getHeight() != this.f22848b || bitmap.getWidth() != this.f22849c) {
            this.f22848b = bitmap.getHeight();
            int width = bitmap.getWidth();
            this.f22849c = width;
            this.f22847a.setPosition(0, 0, width, this.f22848b);
        }
        this.f22847a.beginRecording().drawBitmap(bitmap, 0.0f, 0.0f, (Paint) null);
        this.f22847a.endRecording();
        this.f22847a.setRenderEffect(RenderEffect.createBlurEffect(f10, f10, Shader.TileMode.MIRROR));
        return bitmap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(Context context) {
        this.f22852f = context;
    }
}
