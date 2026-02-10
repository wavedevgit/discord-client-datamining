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
    private final RenderScript f22853b;

    /* renamed from: c  reason: collision with root package name */
    private final ScriptIntrinsicBlur f22854c;

    /* renamed from: d  reason: collision with root package name */
    private Allocation f22855d;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f22852a = new Paint(2);

    /* renamed from: e  reason: collision with root package name */
    private int f22856e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f22857f = -1;

    public f(Context context) {
        RenderScript create = RenderScript.create(context);
        this.f22853b = create;
        this.f22854c = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
    }

    private boolean f(Bitmap bitmap) {
        if (bitmap.getHeight() == this.f22857f && bitmap.getWidth() == this.f22856e) {
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
        canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f22852a);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public final void destroy() {
        this.f22854c.destroy();
        this.f22853b.destroy();
        Allocation allocation = this.f22855d;
        if (allocation != null) {
            allocation.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        Allocation createFromBitmap = Allocation.createFromBitmap(this.f22853b, bitmap);
        if (!f(bitmap)) {
            Allocation allocation = this.f22855d;
            if (allocation != null) {
                allocation.destroy();
            }
            this.f22855d = Allocation.createTyped(this.f22853b, createFromBitmap.getType());
            this.f22856e = bitmap.getWidth();
            this.f22857f = bitmap.getHeight();
        }
        this.f22854c.setRadius(f10);
        this.f22854c.setInput(createFromBitmap);
        this.f22854c.forEach(this.f22855d);
        this.f22855d.copyTo(bitmap);
        createFromBitmap.destroy();
        return bitmap;
    }
}
