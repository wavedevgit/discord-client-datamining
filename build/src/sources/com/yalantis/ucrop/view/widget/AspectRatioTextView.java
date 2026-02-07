package com.yalantis.ucrop.view.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Rect;
import android.text.TextUtils;
import android.util.AttributeSet;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatTextView;
import androidx.core.content.a;
import java.util.Locale;
import vq.b;
import vq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f19956d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f19957e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f19958i;

    /* renamed from: o  reason: collision with root package name */
    private int f19959o;

    /* renamed from: p  reason: collision with root package name */
    private float f19960p;

    /* renamed from: q  reason: collision with root package name */
    private String f19961q;

    /* renamed from: r  reason: collision with root package name */
    private float f19962r;

    /* renamed from: s  reason: collision with root package name */
    private float f19963s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f19958i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), vq.a.f52907j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f19961q = typedArray.getString(h.f52959b);
        this.f19962r = typedArray.getFloat(h.f52960c, 0.0f);
        float f10 = typedArray.getFloat(h.f52961d, 0.0f);
        this.f19963s = f10;
        float f11 = this.f19962r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f19960p = f11 / f10;
        } else {
            this.f19960p = 0.0f;
        }
        this.f19959o = getContext().getResources().getDimensionPixelSize(b.f52918i);
        Paint paint = new Paint(1);
        this.f19958i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(vq.a.f52908k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f19961q)) {
            setText(this.f19961q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f19962r), Integer.valueOf((int) this.f19963s)));
        }
    }

    private void j() {
        if (this.f19960p != 0.0f) {
            float f10 = this.f19962r;
            float f11 = this.f19963s;
            this.f19962r = f11;
            this.f19963s = f10;
            this.f19960p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f19960p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f19957e);
            Rect rect = this.f19957e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f19959o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f19958i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull xq.a aVar) {
        this.f19961q = aVar.a();
        this.f19962r = aVar.b();
        float c10 = aVar.c();
        this.f19963s = c10;
        float f10 = this.f19962r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f19960p = f10 / c10;
        } else {
            this.f19960p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19956d = 1.5f;
        this.f19957e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f52958a));
    }
}
