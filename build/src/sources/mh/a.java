package mh;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import oh.g;
import oh.k;
import oh.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable implements n {

    /* renamed from: d  reason: collision with root package name */
    private b f39078d;

    @Override // android.graphics.drawable.Drawable
    /* renamed from: a */
    public a mutate() {
        this.f39078d = new b(this.f39078d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        b bVar = this.f39078d;
        if (bVar.f39080b) {
            bVar.f39079a.draw(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f39078d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f39078d.f39079a.getOpacity();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.f39078d.f39079a.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean onStateChange = super.onStateChange(iArr);
        if (this.f39078d.f39079a.setState(iArr)) {
            onStateChange = true;
        }
        boolean b10 = mh.b.b(iArr);
        b bVar = this.f39078d;
        if (bVar.f39080b != b10) {
            bVar.f39080b = b10;
            return true;
        }
        return onStateChange;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f39078d.f39079a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f39078d.f39079a.setColorFilter(colorFilter);
    }

    @Override // oh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f39078d.f39079a.setShapeAppearanceModel(kVar);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        this.f39078d.f39079a.setTint(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f39078d.f39079a.setTintList(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f39078d.f39079a.setTintMode(mode);
    }

    public a(k kVar) {
        this(new b(new g(kVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        g f39079a;

        /* renamed from: b  reason: collision with root package name */
        boolean f39080b;

        public b(g gVar) {
            this.f39079a = gVar;
            this.f39080b = false;
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
            this.f39079a = (g) bVar.f39079a.getConstantState().newDrawable();
            this.f39080b = bVar.f39080b;
        }
    }

    private a(b bVar) {
        this.f39078d = bVar;
    }
}
