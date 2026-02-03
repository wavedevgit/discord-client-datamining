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
    private Bitmap f50839b;

    /* renamed from: d  reason: collision with root package name */
    private int f50841d;

    /* renamed from: e  reason: collision with root package name */
    private int f50842e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f50838a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f50840c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f50839b;
    }

    public void b(Bitmap bitmap) {
        this.f50839b = bitmap;
        if (bitmap != null) {
            this.f50841d = bitmap.getWidth();
            this.f50842e = this.f50839b.getHeight();
            return;
        }
        this.f50842e = 0;
        this.f50841d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f50839b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f50839b, (Rect) null, getBounds(), this.f50838a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f50840c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f50842e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f50841d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f50842e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f50841d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f50840c = i10;
        this.f50838a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f50838a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f50838a.setFilterBitmap(z10);
    }
}
