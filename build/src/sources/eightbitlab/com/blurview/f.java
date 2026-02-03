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
    private final RenderScript f22881b;

    /* renamed from: c  reason: collision with root package name */
    private final ScriptIntrinsicBlur f22882c;

    /* renamed from: d  reason: collision with root package name */
    private Allocation f22883d;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f22880a = new Paint(2);

    /* renamed from: e  reason: collision with root package name */
    private int f22884e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f22885f = -1;

    public f(Context context) {
        RenderScript create = RenderScript.create(context);
        this.f22881b = create;
        this.f22882c = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
    }

    private boolean f(Bitmap bitmap) {
        if (bitmap.getHeight() == this.f22885f && bitmap.getWidth() == this.f22884e) {
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
        canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f22880a);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public final void destroy() {
        this.f22882c.destroy();
        this.f22881b.destroy();
        Allocation allocation = this.f22883d;
        if (allocation != null) {
            allocation.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        Allocation createFromBitmap = Allocation.createFromBitmap(this.f22881b, bitmap);
        if (!f(bitmap)) {
            Allocation allocation = this.f22883d;
            if (allocation != null) {
                allocation.destroy();
            }
            this.f22883d = Allocation.createTyped(this.f22881b, createFromBitmap.getType());
            this.f22884e = bitmap.getWidth();
            this.f22885f = bitmap.getHeight();
        }
        this.f22882c.setRadius(f10);
        this.f22882c.setInput(createFromBitmap);
        this.f22882c.forEach(this.f22883d);
        this.f22883d.copyTo(bitmap);
        createFromBitmap.destroy();
        return bitmap;
    }
}
