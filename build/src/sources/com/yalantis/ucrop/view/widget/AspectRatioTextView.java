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
import wq.b;
import wq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f20096d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f20097e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f20098i;

    /* renamed from: o  reason: collision with root package name */
    private int f20099o;

    /* renamed from: p  reason: collision with root package name */
    private float f20100p;

    /* renamed from: q  reason: collision with root package name */
    private String f20101q;

    /* renamed from: r  reason: collision with root package name */
    private float f20102r;

    /* renamed from: s  reason: collision with root package name */
    private float f20103s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f20098i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), wq.a.f53934j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f20101q = typedArray.getString(h.f53986b);
        this.f20102r = typedArray.getFloat(h.f53987c, 0.0f);
        float f10 = typedArray.getFloat(h.f53988d, 0.0f);
        this.f20103s = f10;
        float f11 = this.f20102r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f20100p = f11 / f10;
        } else {
            this.f20100p = 0.0f;
        }
        this.f20099o = getContext().getResources().getDimensionPixelSize(b.f53945i);
        Paint paint = new Paint(1);
        this.f20098i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(wq.a.f53935k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f20101q)) {
            setText(this.f20101q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f20102r), Integer.valueOf((int) this.f20103s)));
        }
    }

    private void j() {
        if (this.f20100p != 0.0f) {
            float f10 = this.f20102r;
            float f11 = this.f20103s;
            this.f20102r = f11;
            this.f20103s = f10;
            this.f20100p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f20100p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f20097e);
            Rect rect = this.f20097e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f20099o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f20098i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull yq.a aVar) {
        this.f20101q = aVar.a();
        this.f20102r = aVar.b();
        float c10 = aVar.c();
        this.f20103s = c10;
        float f10 = this.f20102r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f20100p = f10 / c10;
        } else {
            this.f20100p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20096d = 1.5f;
        this.f20097e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f53985a));
    }
}
