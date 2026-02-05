package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.util.AttributeSet;
import android.widget.ImageButton;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l extends ImageButton {

    /* renamed from: d  reason: collision with root package name */
    private final AppCompatBackgroundHelper f1855d;

    /* renamed from: e  reason: collision with root package name */
    private final AppCompatImageHelper f1856e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f1857i;

    public l(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.A);
    }

    @Override // android.widget.ImageView, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.b();
        }
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            appCompatImageHelper.c();
        }
    }

    public ColorStateList getSupportBackgroundTintList() {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            return appCompatBackgroundHelper.c();
        }
        return null;
    }

    public PorterDuff.Mode getSupportBackgroundTintMode() {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            return appCompatBackgroundHelper.d();
        }
        return null;
    }

    public ColorStateList getSupportImageTintList() {
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            return appCompatImageHelper.d();
        }
        return null;
    }

    public PorterDuff.Mode getSupportImageTintMode() {
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            return appCompatImageHelper.e();
        }
        return null;
    }

    @Override // android.widget.ImageView, android.view.View
    public boolean hasOverlappingRendering() {
        if (this.f1856e.f() && super.hasOverlappingRendering()) {
            return true;
        }
        return false;
    }

    @Override // android.view.View
    public void setBackgroundDrawable(Drawable drawable) {
        super.setBackgroundDrawable(drawable);
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.f(drawable);
        }
    }

    @Override // android.view.View
    public void setBackgroundResource(int i10) {
        super.setBackgroundResource(i10);
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.g(i10);
        }
    }

    @Override // android.widget.ImageView
    public void setImageBitmap(Bitmap bitmap) {
        super.setImageBitmap(bitmap);
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            appCompatImageHelper.c();
        }
    }

    @Override // android.widget.ImageView
    public void setImageDrawable(Drawable drawable) {
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null && drawable != null && !this.f1857i) {
            appCompatImageHelper.h(drawable);
        }
        super.setImageDrawable(drawable);
        AppCompatImageHelper appCompatImageHelper2 = this.f1856e;
        if (appCompatImageHelper2 != null) {
            appCompatImageHelper2.c();
            if (!this.f1857i) {
                this.f1856e.b();
            }
        }
    }

    @Override // android.widget.ImageView
    public void setImageLevel(int i10) {
        super.setImageLevel(i10);
        this.f1857i = true;
    }

    @Override // android.widget.ImageView
    public void setImageResource(int i10) {
        this.f1856e.i(i10);
    }

    @Override // android.widget.ImageView
    public void setImageURI(Uri uri) {
        super.setImageURI(uri);
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            appCompatImageHelper.c();
        }
    }

    public void setSupportBackgroundTintList(ColorStateList colorStateList) {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.i(colorStateList);
        }
    }

    public void setSupportBackgroundTintMode(PorterDuff.Mode mode) {
        AppCompatBackgroundHelper appCompatBackgroundHelper = this.f1855d;
        if (appCompatBackgroundHelper != null) {
            appCompatBackgroundHelper.j(mode);
        }
    }

    public void setSupportImageTintList(ColorStateList colorStateList) {
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            appCompatImageHelper.j(colorStateList);
        }
    }

    public void setSupportImageTintMode(PorterDuff.Mode mode) {
        AppCompatImageHelper appCompatImageHelper = this.f1856e;
        if (appCompatImageHelper != null) {
            appCompatImageHelper.k(mode);
        }
    }

    public l(Context context, AttributeSet attributeSet, int i10) {
        super(s0.b(context), attributeSet, i10);
        this.f1857i = false;
        r0.a(this, getContext());
        AppCompatBackgroundHelper appCompatBackgroundHelper = new AppCompatBackgroundHelper(this);
        this.f1855d = appCompatBackgroundHelper;
        appCompatBackgroundHelper.e(attributeSet, i10);
        AppCompatImageHelper appCompatImageHelper = new AppCompatImageHelper(this);
        this.f1856e = appCompatImageHelper;
        appCompatImageHelper.g(attributeSet, i10);
    }
}
