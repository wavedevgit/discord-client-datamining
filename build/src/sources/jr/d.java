package jr;

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
    private Bitmap f31300b;

    /* renamed from: d  reason: collision with root package name */
    private int f31302d;

    /* renamed from: e  reason: collision with root package name */
    private int f31303e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f31299a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f31301c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f31300b;
    }

    public void b(Bitmap bitmap) {
        this.f31300b = bitmap;
        if (bitmap != null) {
            this.f31302d = bitmap.getWidth();
            this.f31303e = this.f31300b.getHeight();
            return;
        }
        this.f31303e = 0;
        this.f31302d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f31300b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f31300b, (Rect) null, getBounds(), this.f31299a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f31301c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f31303e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f31302d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f31303e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f31302d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f31301c = i10;
        this.f31299a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f31299a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f31299a.setFilterBitmap(z10);
    }
}
