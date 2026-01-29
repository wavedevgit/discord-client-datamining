package rq;

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
    private Bitmap f48446b;

    /* renamed from: d  reason: collision with root package name */
    private int f48448d;

    /* renamed from: e  reason: collision with root package name */
    private int f48449e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f48445a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f48447c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f48446b;
    }

    public void b(Bitmap bitmap) {
        this.f48446b = bitmap;
        if (bitmap != null) {
            this.f48448d = bitmap.getWidth();
            this.f48449e = this.f48446b.getHeight();
            return;
        }
        this.f48449e = 0;
        this.f48448d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f48446b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f48446b, (Rect) null, getBounds(), this.f48445a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f48447c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f48449e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f48448d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f48449e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f48448d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f48447c = i10;
        this.f48445a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f48445a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f48445a.setFilterBitmap(z10);
    }
}
