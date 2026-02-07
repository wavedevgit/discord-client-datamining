package oh;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import qh.g;
import qh.k;
import qh.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable implements n {

    /* renamed from: d  reason: collision with root package name */
    private b f42803d;

    @Override // android.graphics.drawable.Drawable
    /* renamed from: a */
    public a mutate() {
        this.f42803d = new b(this.f42803d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        b bVar = this.f42803d;
        if (bVar.f42805b) {
            bVar.f42804a.draw(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f42803d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f42803d.f42804a.getOpacity();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.f42803d.f42804a.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean onStateChange = super.onStateChange(iArr);
        if (this.f42803d.f42804a.setState(iArr)) {
            onStateChange = true;
        }
        boolean b10 = oh.b.b(iArr);
        b bVar = this.f42803d;
        if (bVar.f42805b != b10) {
            bVar.f42805b = b10;
            return true;
        }
        return onStateChange;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f42803d.f42804a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f42803d.f42804a.setColorFilter(colorFilter);
    }

    @Override // qh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f42803d.f42804a.setShapeAppearanceModel(kVar);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        this.f42803d.f42804a.setTint(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f42803d.f42804a.setTintList(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f42803d.f42804a.setTintMode(mode);
    }

    public a(k kVar) {
        this(new b(new g(kVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        g f42804a;

        /* renamed from: b  reason: collision with root package name */
        boolean f42805b;

        public b(g gVar) {
            this.f42804a = gVar;
            this.f42805b = false;
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        /* renamed from: a */
        public a newDrawable() {
            return new a(new b(this));
        }

        @Override // android.graphics.drawable.Drawable.ConstantState
        public int getChangingConfigurations() {
            return 0;
        }

        public b(b bVar) {
            this.f42804a = (g) bVar.f42804a.getConstantState().newDrawable();
            this.f42805b = bVar.f42805b;
        }
    }

    private a(b bVar) {
        this.f42803d = bVar;
    }
}
