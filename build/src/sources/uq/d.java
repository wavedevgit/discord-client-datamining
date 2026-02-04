package uq;

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
    private Bitmap f50836b;

    /* renamed from: d  reason: collision with root package name */
    private int f50838d;

    /* renamed from: e  reason: collision with root package name */
    private int f50839e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f50835a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f50837c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f50836b;
    }

    public void b(Bitmap bitmap) {
        this.f50836b = bitmap;
        if (bitmap != null) {
            this.f50838d = bitmap.getWidth();
            this.f50839e = this.f50836b.getHeight();
            return;
        }
        this.f50839e = 0;
        this.f50838d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f50836b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f50836b, (Rect) null, getBounds(), this.f50835a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f50837c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f50839e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f50838d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f50839e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f50838d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f50837c = i10;
        this.f50835a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f50835a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f50835a.setFilterBitmap(z10);
    }
}
