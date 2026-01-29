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
import nq.b;
import nq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f20955d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f20956e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f20957i;

    /* renamed from: o  reason: collision with root package name */
    private int f20958o;

    /* renamed from: p  reason: collision with root package name */
    private float f20959p;

    /* renamed from: q  reason: collision with root package name */
    private String f20960q;

    /* renamed from: r  reason: collision with root package name */
    private float f20961r;

    /* renamed from: s  reason: collision with root package name */
    private float f20962s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f20957i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), nq.a.f42070j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f20960q = typedArray.getString(h.f42122b);
        this.f20961r = typedArray.getFloat(h.f42123c, 0.0f);
        float f10 = typedArray.getFloat(h.f42124d, 0.0f);
        this.f20962s = f10;
        float f11 = this.f20961r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f20959p = f11 / f10;
        } else {
            this.f20959p = 0.0f;
        }
        this.f20958o = getContext().getResources().getDimensionPixelSize(b.f42081i);
        Paint paint = new Paint(1);
        this.f20957i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(nq.a.f42071k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f20960q)) {
            setText(this.f20960q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f20961r), Integer.valueOf((int) this.f20962s)));
        }
    }

    private void j() {
        if (this.f20959p != 0.0f) {
            float f10 = this.f20961r;
            float f11 = this.f20962s;
            this.f20961r = f11;
            this.f20962s = f10;
            this.f20959p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f20959p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f20956e);
            Rect rect = this.f20956e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f20958o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f20957i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull pq.a aVar) {
        this.f20960q = aVar.a();
        this.f20961r = aVar.b();
        float c10 = aVar.c();
        this.f20962s = c10;
        float f10 = this.f20961r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f20959p = f10 / c10;
        } else {
            this.f20959p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20955d = 1.5f;
        this.f20956e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f42121a));
    }
}
