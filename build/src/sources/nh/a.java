package nh;

import android.content.res.ColorStateList;
import android.graphics.Canvas;
import android.graphics.ColorFilter;
import android.graphics.PorterDuff;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import ph.g;
import ph.k;
import ph.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends Drawable implements n {

    /* renamed from: d  reason: collision with root package name */
    private b f41303d;

    @Override // android.graphics.drawable.Drawable
    /* renamed from: a */
    public a mutate() {
        this.f41303d = new b(this.f41303d);
        return this;
    }

    @Override // android.graphics.drawable.Drawable
    public void draw(Canvas canvas) {
        b bVar = this.f41303d;
        if (bVar.f41305b) {
            bVar.f41304a.draw(canvas);
        }
    }

    @Override // android.graphics.drawable.Drawable
    public Drawable.ConstantState getConstantState() {
        return this.f41303d;
    }

    @Override // android.graphics.drawable.Drawable
    public int getOpacity() {
        return this.f41303d.f41304a.getOpacity();
    }

    @Override // android.graphics.drawable.Drawable
    public boolean isStateful() {
        return true;
    }

    @Override // android.graphics.drawable.Drawable
    protected void onBoundsChange(Rect rect) {
        super.onBoundsChange(rect);
        this.f41303d.f41304a.setBounds(rect);
    }

    @Override // android.graphics.drawable.Drawable
    protected boolean onStateChange(int[] iArr) {
        boolean onStateChange = super.onStateChange(iArr);
        if (this.f41303d.f41304a.setState(iArr)) {
            onStateChange = true;
        }
        boolean b10 = nh.b.b(iArr);
        b bVar = this.f41303d;
        if (bVar.f41305b != b10) {
            bVar.f41305b = b10;
            return true;
        }
        return onStateChange;
    }

    @Override // android.graphics.drawable.Drawable
    public void setAlpha(int i10) {
        this.f41303d.f41304a.setAlpha(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setColorFilter(ColorFilter colorFilter) {
        this.f41303d.f41304a.setColorFilter(colorFilter);
    }

    @Override // ph.n
    public void setShapeAppearanceModel(k kVar) {
        this.f41303d.f41304a.setShapeAppearanceModel(kVar);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTint(int i10) {
        this.f41303d.f41304a.setTint(i10);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintList(ColorStateList colorStateList) {
        this.f41303d.f41304a.setTintList(colorStateList);
    }

    @Override // android.graphics.drawable.Drawable
    public void setTintMode(PorterDuff.Mode mode) {
        this.f41303d.f41304a.setTintMode(mode);
    }

    public a(k kVar) {
        this(new b(new g(kVar)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Drawable.ConstantState {

        /* renamed from: a  reason: collision with root package name */
        g f41304a;

        /* renamed from: b  reason: collision with root package name */
        boolean f41305b;

        public b(g gVar) {
            this.f41304a = gVar;
            this.f41305b = false;
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
            this.f41304a = (g) bVar.f41304a.getConstantState().newDrawable();
            this.f41305b = bVar.f41305b;
        }
    }

    private a(b bVar) {
        this.f41303d = bVar;
    }
}
