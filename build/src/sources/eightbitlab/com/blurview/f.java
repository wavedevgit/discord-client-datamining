package eightbitlab.com.blurview;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.renderscript.Allocation;
import android.renderscript.Element;
import android.renderscript.RenderScript;
import android.renderscript.ScriptIntrinsicBlur;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class f implements BlurAlgorithm {

    /* renamed from: b  reason: collision with root package name */
    private final RenderScript f21619b;

    /* renamed from: c  reason: collision with root package name */
    private final ScriptIntrinsicBlur f21620c;

    /* renamed from: d  reason: collision with root package name */
    private Allocation f21621d;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f21618a = new Paint(2);

    /* renamed from: e  reason: collision with root package name */
    private int f21622e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f21623f = -1;

    public f(Context context) {
        RenderScript create = RenderScript.create(context);
        this.f21619b = create;
        this.f21620c = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
    }

    private boolean f(Bitmap bitmap) {
        if (bitmap.getHeight() == this.f21623f && bitmap.getWidth() == this.f21622e) {
            return true;
        }
        return false;
    }

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
        canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f21618a);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public final void destroy() {
        this.f21620c.destroy();
        this.f21619b.destroy();
        Allocation allocation = this.f21621d;
        if (allocation != null) {
            allocation.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        Allocation createFromBitmap = Allocation.createFromBitmap(this.f21619b, bitmap);
        if (!f(bitmap)) {
            Allocation allocation = this.f21621d;
            if (allocation != null) {
                allocation.destroy();
            }
            this.f21621d = Allocation.createTyped(this.f21619b, createFromBitmap.getType());
            this.f21622e = bitmap.getWidth();
            this.f21623f = bitmap.getHeight();
        }
        this.f21620c.setRadius(f10);
        this.f21620c.setInput(createFromBitmap);
        this.f21620c.forEach(this.f21621d);
        this.f21621d.copyTo(bitmap);
        createFromBitmap.destroy();
        return bitmap;
    }
}
