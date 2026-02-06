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
    private final RenderScript f21580b;

    /* renamed from: c  reason: collision with root package name */
    private final ScriptIntrinsicBlur f21581c;

    /* renamed from: d  reason: collision with root package name */
    private Allocation f21582d;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f21579a = new Paint(2);

    /* renamed from: e  reason: collision with root package name */
    private int f21583e = -1;

    /* renamed from: f  reason: collision with root package name */
    private int f21584f = -1;

    public f(Context context) {
        RenderScript create = RenderScript.create(context);
        this.f21580b = create;
        this.f21581c = ScriptIntrinsicBlur.create(create, Element.U8_4(create));
    }

    private boolean f(Bitmap bitmap) {
        if (bitmap.getHeight() == this.f21584f && bitmap.getWidth() == this.f21583e) {
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
        canvas.drawBitmap(bitmap, 0.0f, 0.0f, this.f21579a);
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public float d() {
        return 6.0f;
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public final void destroy() {
        this.f21581c.destroy();
        this.f21580b.destroy();
        Allocation allocation = this.f21582d;
        if (allocation != null) {
            allocation.destroy();
        }
    }

    @Override // eightbitlab.com.blurview.BlurAlgorithm
    public Bitmap e(Bitmap bitmap, float f10) {
        Allocation createFromBitmap = Allocation.createFromBitmap(this.f21580b, bitmap);
        if (!f(bitmap)) {
            Allocation allocation = this.f21582d;
            if (allocation != null) {
                allocation.destroy();
            }
            this.f21582d = Allocation.createTyped(this.f21580b, createFromBitmap.getType());
            this.f21583e = bitmap.getWidth();
            this.f21584f = bitmap.getHeight();
        }
        this.f21581c.setRadius(f10);
        this.f21581c.setInput(createFromBitmap);
        this.f21581c.forEach(this.f21582d);
        this.f21582d.copyTo(bitmap);
        createFromBitmap.destroy();
        return bitmap;
    }
}
