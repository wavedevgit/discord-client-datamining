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
import fr.b;
import fr.h;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class AspectRatioTextView extends AppCompatTextView {

    /* renamed from: d  reason: collision with root package name */
    private final float f20977d;

    /* renamed from: e  reason: collision with root package name */
    private final Rect f20978e;

    /* renamed from: i  reason: collision with root package name */
    private Paint f20979i;

    /* renamed from: o  reason: collision with root package name */
    private int f20980o;

    /* renamed from: p  reason: collision with root package name */
    private float f20981p;

    /* renamed from: q  reason: collision with root package name */
    private String f20982q;

    /* renamed from: r  reason: collision with root package name */
    private float f20983r;

    /* renamed from: s  reason: collision with root package name */
    private float f20984s;

    public AspectRatioTextView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void f(int i10) {
        Paint paint = this.f20979i;
        if (paint != null) {
            paint.setColor(i10);
        }
        setTextColor(new ColorStateList(new int[][]{new int[]{16842913}, new int[]{0}}, new int[]{i10, a.c(getContext(), fr.a.f24230j)}));
    }

    private void h(TypedArray typedArray) {
        setGravity(1);
        this.f20982q = typedArray.getString(h.f24312b);
        this.f20983r = typedArray.getFloat(h.f24313c, 0.0f);
        float f10 = typedArray.getFloat(h.f24314d, 0.0f);
        this.f20984s = f10;
        float f11 = this.f20983r;
        if (f11 != 0.0f && f10 != 0.0f) {
            this.f20981p = f11 / f10;
        } else {
            this.f20981p = 0.0f;
        }
        this.f20980o = getContext().getResources().getDimensionPixelSize(b.f24241i);
        Paint paint = new Paint(1);
        this.f20979i = paint;
        paint.setStyle(Paint.Style.FILL);
        i();
        f(getResources().getColor(fr.a.f24231k));
        typedArray.recycle();
    }

    private void i() {
        if (!TextUtils.isEmpty(this.f20982q)) {
            setText(this.f20982q);
        } else {
            setText(String.format(Locale.US, "%d:%d", Integer.valueOf((int) this.f20983r), Integer.valueOf((int) this.f20984s)));
        }
    }

    private void j() {
        if (this.f20981p != 0.0f) {
            float f10 = this.f20983r;
            float f11 = this.f20984s;
            this.f20983r = f11;
            this.f20984s = f10;
            this.f20981p = f11 / f10;
        }
    }

    public float g(boolean z10) {
        if (z10) {
            j();
            i();
        }
        return this.f20981p;
    }

    @Override // android.widget.TextView, android.view.View
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (isSelected()) {
            canvas.getClipBounds(this.f20978e);
            Rect rect = this.f20978e;
            float f10 = rect.bottom - (rect.top / 2.0f);
            int i10 = this.f20980o;
            canvas.drawCircle((rect.right - rect.left) / 2.0f, f10 - (i10 * 1.5f), i10 / 2.0f, this.f20979i);
        }
    }

    public void setActiveColor(int i10) {
        f(i10);
        invalidate();
    }

    public void setAspectRatio(@NonNull hr.a aVar) {
        this.f20982q = aVar.a();
        this.f20983r = aVar.b();
        float c10 = aVar.c();
        this.f20984s = c10;
        float f10 = this.f20983r;
        if (f10 != 0.0f && c10 != 0.0f) {
            this.f20981p = f10 / c10;
        } else {
            this.f20981p = 0.0f;
        }
        i();
    }

    public AspectRatioTextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f20977d = 1.5f;
        this.f20978e = new Rect();
        h(context.obtainStyledAttributes(attributeSet, h.f24311a));
    }
}
