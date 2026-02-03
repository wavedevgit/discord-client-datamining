package eightbitlab.com.blurview;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.os.Build;
import android.util.AttributeSet;
import android.util.Log;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class BlurView extends FrameLayout {
    private static final String TAG = "BlurView";
    BlurController blurController;
    private int overlayColor;

    public BlurView(Context context) {
        super(context);
        this.blurController = new b();
        a(null, 0);
    }

    private void a(AttributeSet attributeSet, int i10) {
        TypedArray obtainStyledAttributes = getContext().obtainStyledAttributes(attributeSet, d.f22872a, i10, 0);
        this.overlayColor = obtainStyledAttributes.getColor(d.f22873b, 0);
        obtainStyledAttributes.recycle();
    }

    @NonNull
    private BlurAlgorithm getBlurAlgorithm() {
        if (Build.VERSION.SDK_INT >= 31) {
            return new e();
        }
        return new f(getContext());
    }

    @Override // android.view.View
    public void draw(Canvas canvas) {
        if (this.blurController.f(canvas)) {
            super.draw(canvas);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        if (!isHardwareAccelerated()) {
            Log.e(TAG, "BlurView can't be used in not hardware-accelerated window!");
        } else {
            this.blurController.c(true);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.blurController.c(false);
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        this.blurController.e();
    }

    public BlurViewFacade setBlurAutoUpdate(boolean z10) {
        return this.blurController.c(z10);
    }

    public BlurViewFacade setBlurEnabled(boolean z10) {
        return this.blurController.b(z10);
    }

    public BlurViewFacade setBlurRadius(float f10) {
        return this.blurController.g(f10);
    }

    public BlurViewFacade setOverlayColor(int i10) {
        this.overlayColor = i10;
        return this.blurController.a(i10);
    }

    public BlurViewFacade setupWith(@NonNull ViewGroup viewGroup, BlurAlgorithm blurAlgorithm) {
        this.blurController.destroy();
        c cVar = new c(this, viewGroup, this.overlayColor, blurAlgorithm);
        this.blurController = cVar;
        return cVar;
    }

    public BlurView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.blurController = new b();
        a(attributeSet, 0);
    }

    public BlurViewFacade setupWith(@NonNull ViewGroup viewGroup) {
        return setupWith(viewGroup, getBlurAlgorithm());
    }
}
