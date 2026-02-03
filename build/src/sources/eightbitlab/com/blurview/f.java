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
    private final RenderScript f21572b;

    /* renamed from: c  reason: collision with root package name */
    private final ScriptIntrinsicBlur f21573c;

    /* renamed from: d  reason: collision with root package name */
    private Allocation f21574d;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f21571a = new Paint(2);

    /* renamed from: e  reason: collision with root package name */
    private int f21575e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f21576f = -1;

    public f(Context context) {
        RenderScript create = RenderScript.create(context);
        this.f21572b = create;
        this.f21573c = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
    }

    private boolean f(Bitmap bitmap) {
        if (bitmap.getHeight() == this.f21576f && bitmap.getWidth() == this.f21575e) {
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
        canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f21571a);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public final void destroy() {
        this.f21573c.destroy();
        this.f21572b.destroy();
        Allocation allocation = this.f21574d;
        if (allocation != null) {
            allocation.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        Allocation createFromBitmap = Allocation.createFromBitmap(this.f21572b, bitmap);
        if (!f(bitmap)) {
            Allocation allocation = this.f21574d;
            if (allocation != null) {
                allocation.destroy();
            }
            this.f21574d = Allocation.createTyped(this.f21572b, createFromBitmap.getType());
            this.f21575e = bitmap.getWidth();
            this.f21576f = bitmap.getHeight();
        }
        this.f21573c.setRadius(f10);
        this.f21573c.setInput(createFromBitmap);
        this.f21573c.forEach(this.f21574d);
        this.f21574d.copyTo(bitmap);
        createFromBitmap.destroy();
        return bitmap;
    }
}
