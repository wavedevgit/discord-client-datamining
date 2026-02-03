package l9;

import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import com.facebook.drawee.drawable.b0;
import com.facebook.drawee.drawable.c0;
import com.facebook.drawee.drawable.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends f implements b0 {

    /* renamed from: d  reason: collision with root package name */
    Drawable f36579d;

    /* renamed from: e  reason: collision with root package name */
    private c0 f36580e;

    public b(Drawable drawable) {
        super(drawable);
        this.f36579d = null;
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        if (isVisible()) {
            c0 c0Var = this.f36580e;
            if (c0Var != null) {
                c0Var.onDraw();
            }
            super.draw(canvas);
            Drawable drawable = this.f36579d;
            if (drawable != null) {
                drawable.setBounds(getBounds());
                this.f36579d.draw(canvas);
            }
        }
    }

    @Override // com.facebook.drawee.drawable.b0
    public void g(c0 c0Var) {
        this.f36580e = c0Var;
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicHeight() {
        return -1;
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public int getIntrinsicWidth() {
        return -1;
    }

    public void i(Drawable drawable) {
        this.f36579d = drawable;
        invalidateSelf();
    }

    @Override // com.facebook.drawee.drawable.f, android.graphics.drawable.Drawable
    public boolean setVisible(boolean z10, boolean z11) {
        c0 c0Var = this.f36580e;
        if (c0Var != null) {
            c0Var.n(z10);
        }
        return super.setVisible(z10, z11);
    }
}
