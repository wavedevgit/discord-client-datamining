package ph;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import rh.g;
import rh.k;
import rh.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable implements n {

    /* renamed from: d  reason: collision with root package name */
    private b f44263d;

    @Override // android.graphics.drawable.Drawable
    /* renamed from: a */
    public a mutate() {
        this.f44263d = new b(this.f44263d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        b bVar = this.f44263d;
        if (bVar.f44265b) {
            bVar.f44264a.draw(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f44263d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f44263d.f44264a.getOpacity();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.f44263d.f44264a.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean onStateChange = super.onStateChange(iArr);
        if (this.f44263d.f44264a.setState(iArr)) {
            onStateChange = true;
        }
        boolean b10 = ph.b.b(iArr);
        b bVar = this.f44263d;
        if (bVar.f44265b != b10) {
            bVar.f44265b = b10;
            return true;
        }
        return onStateChange;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f44263d.f44264a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f44263d.f44264a.setColorFilter(colorFilter);
    }

    @Override // rh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f44263d.f44264a.setShapeAppearanceModel(kVar);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        this.f44263d.f44264a.setTint(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f44263d.f44264a.setTintList(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f44263d.f44264a.setTintMode(mode);
    }

    public a(k kVar) {
        this(new b(new g(kVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        g f44264a;

        /* renamed from: b  reason: collision with root package name */
        boolean f44265b;

        public b(g gVar) {
            this.f44264a = gVar;
            this.f44265b = false;
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
            this.f44264a = (g) bVar.f44264a.getConstantState().newDrawable();
            this.f44265b = bVar.f44265b;
        }
    }

    private a(b bVar) {
        this.f44263d = bVar;
    }
}
