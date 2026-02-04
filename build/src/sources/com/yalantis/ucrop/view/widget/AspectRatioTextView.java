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
import qq.b;
import qq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f19570d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f19571e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f19572i;

    /* renamed from: o  reason: collision with root package name */
    private int f19573o;

    /* renamed from: p  reason: collision with root package name */
    private float f19574p;

    /* renamed from: q  reason: collision with root package name */
    private String f19575q;

    /* renamed from: r  reason: collision with root package name */
    private float f19576r;

    /* renamed from: s  reason: collision with root package name */
    private float f19577s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f19572i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), qq.a.f48064j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f19575q = typedArray.getString(h.f48116b);
        this.f19576r = typedArray.getFloat(h.f48117c, 0.0f);
        float f10 = typedArray.getFloat(h.f48118d, 0.0f);
        this.f19577s = f10;
        float f11 = this.f19576r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f19574p = f11 / f10;
        } else {
            this.f19574p = 0.0f;
        }
        this.f19573o = getContext().getResources().getDimensionPixelSize(b.f48075i);
        Paint paint = new Paint(1);
        this.f19572i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(qq.a.f48065k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f19575q)) {
            setText(this.f19575q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f19576r), Integer.valueOf((int) this.f19577s)));
        }
    }

    private void j() {
        if (this.f19574p != 0.0f) {
            float f10 = this.f19576r;
            float f11 = this.f19577s;
            this.f19576r = f11;
            this.f19577s = f10;
            this.f19574p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f19574p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f19571e);
            Rect rect = this.f19571e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f19573o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f19572i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull sq.a aVar) {
        this.f19575q = aVar.a();
        this.f19576r = aVar.b();
        float c10 = aVar.c();
        this.f19577s = c10;
        float f10 = this.f19576r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f19574p = f10 / c10;
        } else {
            this.f19574p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19570d = 1.5f;
        this.f19571e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f48115a));
    }
}
