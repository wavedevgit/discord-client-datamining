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
    private Bitmap f48462b;

    /* renamed from: d  reason: collision with root package name */
    private int f48464d;

    /* renamed from: e  reason: collision with root package name */
    private int f48465e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f48461a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f48463c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f48462b;
    }

    public void b(Bitmap bitmap) {
        this.f48462b = bitmap;
        if (bitmap != null) {
            this.f48464d = bitmap.getWidth();
            this.f48465e = this.f48462b.getHeight();
            return;
        }
        this.f48465e = 0;
        this.f48464d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f48462b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f48462b, (Rect) null, getBounds(), this.f48461a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f48463c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f48465e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f48464d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f48465e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f48464d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f48463c = i10;
        this.f48461a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f48461a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f48461a.setFilterBitmap(z10);
    }
}
