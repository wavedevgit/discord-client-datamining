package com.facebook.drawee.view;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.Bitmap;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;
import android.widget.ImageView;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import com.facebook.drawee.view.AspectRatioMeasure;
import o8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a extends ImageView {
    private static boolean sGlobalLegacyVisibilityHandlingEnabled = false;
    private float mAspectRatio;
    private DraweeHolder mDraweeHolder;
    private Object mExtraData;
    private boolean mInitialised;
    private boolean mLegacyVisibilityHandlingEnabled;
    private final AspectRatioMeasure.Spec mMeasureSpec;

    public a(Context context) {
        super(context);
        this.mMeasureSpec = new AspectRatioMeasure.Spec();
        this.mAspectRatio = 0.0f;
        this.mInitialised = false;
        this.mLegacyVisibilityHandlingEnabled = false;
        this.mExtraData = null;
        a(context);
    }

    private void a(Context context) {
        try {
            if (ya.b.d()) {
                ya.b.a("DraweeView#init");
            }
            if (this.mInitialised) {
                if (ya.b.d()) {
                    ya.b.b();
                    return;
                }
                return;
            }
            boolean z10 = true;
            this.mInitialised = true;
            this.mDraweeHolder = DraweeHolder.c(null, context);
            ColorStateList imageTintList = getImageTintList();
            if (imageTintList == null) {
                if (ya.b.d()) {
                    ya.b.b();
                    return;
                }
                return;
            }
            setColorFilter(imageTintList.getDefaultColor());
            if (!sGlobalLegacyVisibilityHandlingEnabled || context.getApplicationInfo().targetSdkVersion < 24) {
                z10 = false;
            }
            this.mLegacyVisibilityHandlingEnabled = z10;
            if (ya.b.d()) {
                ya.b.b();
            }
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }

    private void b() {
        Drawable drawable;
        boolean z10;
        if (this.mLegacyVisibilityHandlingEnabled && (drawable = getDrawable()) != null) {
            if (getVisibility() == 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            drawable.setVisible(z10, false);
        }
    }

    public static void setGlobalLegacyVisibilityHandlingEnabled(boolean z10) {
        sGlobalLegacyVisibilityHandlingEnabled = z10;
    }

    protected void doAttach() {
        this.mDraweeHolder.j();
    }

    protected void doDetach() {
        this.mDraweeHolder.k();
    }

    public float getAspectRatio() {
        return this.mAspectRatio;
    }

    public DraweeController getController() {
        return this.mDraweeHolder.e();
    }

    public Object getExtraData() {
        return this.mExtraData;
    }

    public DraweeHierarchy getHierarchy() {
        return this.mDraweeHolder.f();
    }

    public Drawable getTopLevelDrawable() {
        return this.mDraweeHolder.g();
    }

    public boolean hasController() {
        if (this.mDraweeHolder.e() != null) {
            return true;
        }
        return false;
    }

    public boolean hasHierarchy() {
        return this.mDraweeHolder.h();
    }

    protected void onAttach() {
        doAttach();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        b();
        onAttach();
    }

    protected void onDetach() {
        doDetach();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        b();
        onDetach();
    }

    @Override // android.view.View
    public void onFinishTemporaryDetach() {
        super.onFinishTemporaryDetach();
        b();
        onAttach();
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onMeasure(int i10, int i11) {
        AspectRatioMeasure.Spec spec = this.mMeasureSpec;
        spec.f10819a = i10;
        spec.f10820b = i11;
        AspectRatioMeasure.b(spec, this.mAspectRatio, getLayoutParams(), getPaddingLeft() + getPaddingRight(), getPaddingTop() + getPaddingBottom());
        AspectRatioMeasure.Spec spec2 = this.mMeasureSpec;
        super.onMeasure(spec2.f10819a, spec2.f10820b);
    }

    @Override // android.view.View
    public void onStartTemporaryDetach() {
        super.onStartTemporaryDetach();
        b();
        onDetach();
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (this.mDraweeHolder.l(motionEvent)) {
            return true;
        }
        return super.onTouchEvent(motionEvent);
    }

    @Override // android.view.View
    protected void onVisibilityChanged(View view, int i10) {
        super.onVisibilityChanged(view, i10);
        b();
    }

    public void resetActualImage() {
        setController(null);
    }

    public void setAspectRatio(float f10) {
        if (f10 == this.mAspectRatio) {
            return;
        }
        this.mAspectRatio = f10;
        requestLayout();
    }

    public void setController(DraweeController draweeController) {
        this.mDraweeHolder.p(draweeController);
        super.setImageDrawable(this.mDraweeHolder.g());
    }

    public void setExtraData(Object obj) {
        this.mExtraData = obj;
    }

    public void setHierarchy(DraweeHierarchy draweeHierarchy) {
        this.mDraweeHolder.q(draweeHierarchy);
        super.setImageDrawable(this.mDraweeHolder.g());
    }

    @Override // android.widget.ImageView
    @Deprecated
    public void setImageBitmap(Bitmap bitmap) {
        a(getContext());
        this.mDraweeHolder.o();
        super.setImageBitmap(bitmap);
    }

    @Override // android.widget.ImageView
    @Deprecated
    public void setImageDrawable(Drawable drawable) {
        a(getContext());
        this.mDraweeHolder.o();
        super.setImageDrawable(drawable);
    }

    @Override // android.widget.ImageView
    @Deprecated
    public void setImageResource(int i10) {
        a(getContext());
        this.mDraweeHolder.o();
        super.setImageResource(i10);
    }

    @Override // android.widget.ImageView
    @Deprecated
    public void setImageURI(Uri uri) {
        a(getContext());
        this.mDraweeHolder.o();
        super.setImageURI(uri);
    }

    public void setLegacyVisibilityHandlingEnabled(boolean z10) {
        this.mLegacyVisibilityHandlingEnabled = z10;
    }

    @Override // android.view.View
    public String toString() {
        String str;
        h.a b10 = h.b(this);
        DraweeHolder draweeHolder = this.mDraweeHolder;
        if (draweeHolder != null) {
            str = draweeHolder.toString();
        } else {
            str = "<no holder set>";
        }
        return b10.b("holder", str).toString();
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.mMeasureSpec = new AspectRatioMeasure.Spec();
        this.mAspectRatio = 0.0f;
        this.mInitialised = false;
        this.mLegacyVisibilityHandlingEnabled = false;
        this.mExtraData = null;
        a(context);
    }
}
