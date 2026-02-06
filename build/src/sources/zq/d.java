package zq;

import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class d extends Drawable {

    /* renamed from: b  reason: collision with root package name */
    private Bitmap f56436b;

    /* renamed from: d  reason: collision with root package name */
    private int f56438d;

    /* renamed from: e  reason: collision with root package name */
    private int f56439e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f56435a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f56437c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f56436b;
    }

    public void b(Bitmap bitmap) {
        this.f56436b = bitmap;
        if (bitmap != null) {
            this.f56438d = bitmap.getWidth();
            this.f56439e = this.f56436b.getHeight();
            return;
        }
        this.f56439e = 0;
        this.f56438d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f56436b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f56436b, (Rect) null, getBounds(), this.f56435a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f56437c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f56439e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f56438d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f56439e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f56438d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f56437c = i10;
        this.f56435a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f56435a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f56435a.setFilterBitmap(z10);
    }
}
