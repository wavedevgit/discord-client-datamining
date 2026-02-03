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
import oq.b;
import oq.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f20588d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f20589e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f20590i;

    /* renamed from: o  reason: collision with root package name */
    private int f20591o;

    /* renamed from: p  reason: collision with root package name */
    private float f20592p;

    /* renamed from: q  reason: collision with root package name */
    private String f20593q;

    /* renamed from: r  reason: collision with root package name */
    private float f20594r;

    /* renamed from: s  reason: collision with root package name */
    private float f20595s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f20590i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), oq.a.f44640j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f20593q = typedArray.getString(h.f44692b);
        this.f20594r = typedArray.getFloat(h.f44693c, 0.0f);
        float f10 = typedArray.getFloat(h.f44694d, 0.0f);
        this.f20595s = f10;
        float f11 = this.f20594r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f20592p = f11 / f10;
        } else {
            this.f20592p = 0.0f;
        }
        this.f20591o = getContext().getResources().getDimensionPixelSize(b.f44651i);
        Paint paint = new Paint(1);
        this.f20590i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(oq.a.f44641k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f20593q)) {
            setText(this.f20593q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f20594r), Integer.valueOf((int) this.f20595s)));
        }
    }

    private void j() {
        if (this.f20592p != 0.0f) {
            float f10 = this.f20594r;
            float f11 = this.f20595s;
            this.f20594r = f11;
            this.f20595s = f10;
            this.f20592p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f20592p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f20589e);
            Rect rect = this.f20589e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f20591o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f20590i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull qq.a aVar) {
        this.f20593q = aVar.a();
        this.f20594r = aVar.b();
        float c10 = aVar.c();
        this.f20595s = c10;
        float f10 = this.f20594r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f20592p = f10 / c10;
        } else {
            this.f20592p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20588d = 1.5f;
        this.f20589e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f44691a));
    }
}
