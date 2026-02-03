package sq;

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
    private Bitmap f49243b;

    /* renamed from: d  reason: collision with root package name */
    private int f49245d;

    /* renamed from: e  reason: collision with root package name */
    private int f49246e;

    /* renamed from: a  reason: collision with root package name */
    private final Paint f49242a = new Paint(2);

    /* renamed from: c  reason: collision with root package name */
    private int f49244c = SetSpanOperation.SPAN_MAX_PRIORITY;

    public d(Bitmap bitmap) {
        b(bitmap);
    }

    public Bitmap a() {
        return this.f49243b;
    }

    public void b(Bitmap bitmap) {
        this.f49243b = bitmap;
        if (bitmap != null) {
            this.f49245d = bitmap.getWidth();
            this.f49246e = this.f49243b.getHeight();
            return;
        }
        this.f49246e = 0;
        this.f49245d = 0;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        Bitmap bitmap = this.f49243b;
        if (bitmap != null && !bitmap.isRecycled()) {
            canvas.drawBitmap(this.f49243b, (Rect) null, getBounds(), this.f49242a);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public int getAlpha() {
        return this.f49244c;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return this.f49246e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return this.f49245d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumHeight() {
        return this.f49246e;
    }

    @Override // android.graphics.drawable.Drawable
    public int getMinimumWidth() {
        return this.f49245d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return -3;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f49244c = i10;
        this.f49242a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f49242a.setColorFilter(colorFilter);
    }

    @Override // android.graphics.drawable.Drawable
    public void setFilterBitmap(boolean z10) {
        this.f49242a.setFilterBitmap(z10);
    }
}
