package org.reactnative.maskedview;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.PorterDuff;
import android.graphics.PorterDuffXfermode;
import android.view.View;
import com.facebook.react.views.view.ReactViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a extends ReactViewGroup {

    /* renamed from: d  reason: collision with root package name */
    private Bitmap f41097d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f41098e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f41099i;

    /* renamed from: o  reason: collision with root package name */
    private PorterDuffXfermode f41100o;

    /* renamed from: p  reason: collision with root package name */
    private int f41101p;

    public a(Context context) {
        super(context);
        this.f41097d = null;
        this.f41098e = false;
        this.f41101p = 2;
        this.f41099i = new Paint(1);
        this.f41100o = new PorterDuffXfermode(PorterDuff.Mode.DST_IN);
    }

    public static Bitmap d(View view) {
        view.layout(0, 0, view.getMeasuredWidth(), view.getMeasuredHeight());
        if (view.getMeasuredWidth() > 0 && view.getMeasuredHeight() > 0) {
            Bitmap createBitmap = Bitmap.createBitmap(view.getMeasuredWidth(), view.getMeasuredHeight(), Bitmap.Config.ARGB_8888);
            view.draw(new Canvas(createBitmap));
            return createBitmap;
        }
        return null;
    }

    private void e() {
        View childAt = getChildAt(0);
        if (childAt != null) {
            childAt.setVisibility(0);
            Bitmap bitmap = this.f41097d;
            if (bitmap != null) {
                bitmap.recycle();
            }
            this.f41097d = d(childAt);
            childAt.setVisibility(4);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void dispatchDraw(Canvas canvas) {
        super.dispatchDraw(canvas);
        if (this.f41098e) {
            e();
            this.f41098e = false;
        }
        if (this.f41097d != null) {
            setLayerType(this.f41101p, this.f41099i);
            this.f41099i.setXfermode(this.f41100o);
            canvas.drawBitmap(this.f41097d, 0.0f, 0.0f, this.f41099i);
            this.f41099i.setXfermode(null);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        this.f41098e = true;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public void onDescendantInvalidated(View view, View view2) {
        View childAt;
        super.onDescendantInvalidated(view, view2);
        if (!this.f41098e && (childAt = getChildAt(0)) != null && childAt.equals(view)) {
            this.f41098e = true;
        }
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.react.views.view.ReactViewGroup, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        super.onLayout(z10, i10, i11, i12, i13);
        if (z10) {
            this.f41098e = true;
        }
    }

    public void setRenderingMode(String str) {
        int i10;
        if (str.equals("software")) {
            i10 = 1;
        } else {
            i10 = 2;
        }
        this.f41101p = i10;
    }
}
