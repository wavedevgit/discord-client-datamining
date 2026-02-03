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
    private b f38855d;

    @Override // android.graphics.drawable.Drawable
    /* renamed from: a */
    public a mutate() {
        this.f38855d = new b(this.f38855d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        b bVar = this.f38855d;
        if (bVar.f38857b) {
            bVar.f38856a.draw(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f38855d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f38855d.f38856a.getOpacity();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.f38855d.f38856a.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean onStateChange = super.onStateChange(iArr);
        if (this.f38855d.f38856a.setState(iArr)) {
            onStateChange = true;
        }
        boolean b10 = mh.b.b(iArr);
        b bVar = this.f38855d;
        if (bVar.f38857b != b10) {
            bVar.f38857b = b10;
            return true;
        }
        return onStateChange;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f38855d.f38856a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f38855d.f38856a.setColorFilter(colorFilter);
    }

    @Override // oh.n
    public void setShapeAppearanceModel(k kVar) {
        this.f38855d.f38856a.setShapeAppearanceModel(kVar);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        this.f38855d.f38856a.setTint(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f38855d.f38856a.setTintList(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f38855d.f38856a.setTintMode(mode);
    }

    public a(k kVar) {
        this(new b(new g(kVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        g f38856a;

        /* renamed from: b  reason: collision with root package name */
        boolean f38857b;

        public b(g gVar) {
            this.f38856a = gVar;
            this.f38857b = false;
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
            this.f38856a = (g) bVar.f38856a.getConstantState().newDrawable();
            this.f38857b = bVar.f38857b;
        }
    }

    private a(b bVar) {
        this.f38855d = bVar;
    }
}
