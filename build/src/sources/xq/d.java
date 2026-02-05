package xq;

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
    private Bitmap f54075b;

    /* renamed from: d  reason: collision with root package name */
    private int f54077d;

    /* renamed from: e  reason: collision with root package name */
    private int f54078e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f54074a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f54076c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f54075b;
    }

    public void b(Bitmap bitmap) {
        this.f54075b = bitmap;
        if (bitmap != null) {
            this.f54077d = bitmap.getWidth();
            this.f54078e = this.f54075b.getHeight();
            return;
        }
        this.f54078e = 0;
        this.f54077d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f54075b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f54075b, (Rect) null, getBounds(), this.f54074a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f54076c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f54078e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f54077d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f54078e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f54077d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f54076c = i10;
        this.f54074a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f54074a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f54074a.setFilterBitmap(z10);
    }
}
