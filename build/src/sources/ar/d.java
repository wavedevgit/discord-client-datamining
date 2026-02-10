package ar;

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
    private Bitmap f6014b;

    /* renamed from: d  reason: collision with root package name */
    private int f6016d;

    /* renamed from: e  reason: collision with root package name */
    private int f6017e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f6013a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f6015c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f6014b;
    }

    public void b(Bitmap bitmap) {
        this.f6014b = bitmap;
        if (bitmap != null) {
            this.f6016d = bitmap.getWidth();
            this.f6017e = this.f6014b.getHeight();
            return;
        }
        this.f6017e = 0;
        this.f6016d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f6014b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f6014b, (Rect) null, getBounds(), this.f6013a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f6015c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f6017e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f6016d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f6017e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f6016d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f6015c = i10;
        this.f6013a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f6013a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f6013a.setFilterBitmap(z10);
    }
}
