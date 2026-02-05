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
import tq.b;
import tq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f19976d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f19977e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f19978i;

    /* renamed from: o  reason: collision with root package name */
    private int f19979o;

    /* renamed from: p  reason: collision with root package name */
    private float f19980p;

    /* renamed from: q  reason: collision with root package name */
    private String f19981q;

    /* renamed from: r  reason: collision with root package name */
    private float f19982r;

    /* renamed from: s  reason: collision with root package name */
    private float f19983s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f19978i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), tq.a.f50931j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f19981q = typedArray.getString(h.f50983b);
        this.f19982r = typedArray.getFloat(h.f50984c, 0.0f);
        float f10 = typedArray.getFloat(h.f50985d, 0.0f);
        this.f19983s = f10;
        float f11 = this.f19982r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f19980p = f11 / f10;
        } else {
            this.f19980p = 0.0f;
        }
        this.f19979o = getContext().getResources().getDimensionPixelSize(b.f50942i);
        Paint paint = new Paint(1);
        this.f19978i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(tq.a.f50932k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f19981q)) {
            setText(this.f19981q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f19982r), Integer.valueOf((int) this.f19983s)));
        }
    }

    private void j() {
        if (this.f19980p != 0.0f) {
            float f10 = this.f19982r;
            float f11 = this.f19983s;
            this.f19982r = f11;
            this.f19983s = f10;
            this.f19980p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f19980p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f19977e);
            Rect rect = this.f19977e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f19979o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f19978i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull vq.a aVar) {
        this.f19981q = aVar.a();
        this.f19982r = aVar.b();
        float c10 = aVar.c();
        this.f19983s = c10;
        float f10 = this.f19982r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f19980p = f10 / c10;
        } else {
            this.f19980p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f19976d = 1.5f;
        this.f19977e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f50982a));
    }
}
