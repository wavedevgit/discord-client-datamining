package com.brentvatne.exoplayer;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.FrameLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private float f9326d;

    /* renamed from: e  reason: collision with root package name */
    private int f9327e;

    public a(Context context) {
        this(context, null);
    }

    public void a() {
        this.f9326d = 0.0f;
    }

    public float getAspectRatio() {
        return this.f9326d;
    }

    public int getResizeMode() {
        return this.f9327e;
    }

    @Override // android.widget.FrameLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        float f10;
        float f11;
        super.onMeasure(i10, i11);
        if (this.f9326d != 0.0f) {
            int measuredWidth = getMeasuredWidth();
            int measuredHeight = getMeasuredHeight();
            float f12 = measuredWidth;
            float f13 = measuredHeight;
            float f14 = (this.f9326d / (f12 / f13)) - 1.0f;
            if (Math.abs(f14) <= 0.01f) {
                return;
            }
            int i12 = this.f9327e;
            if (i12 != 1) {
                if (i12 != 2) {
                    if (i12 != 3) {
                        if (i12 != 4) {
                            if (f14 > 0.0f) {
                                f10 = this.f9326d;
                            } else {
                                f11 = this.f9326d;
                            }
                        } else {
                            int i13 = (int) (this.f9326d * f13);
                            if (i13 < measuredWidth) {
                                float f15 = i13;
                                float f16 = f12 / f15;
                                measuredWidth = (int) (f15 * f16);
                                measuredHeight = (int) (f13 * f16);
                            } else {
                                measuredWidth = i13;
                            }
                        }
                    }
                    super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
                }
                f11 = this.f9326d;
                measuredWidth = (int) (f13 * f11);
                super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
            }
            f10 = this.f9326d;
            measuredHeight = (int) (f12 / f10);
            super.onMeasure(View.MeasureSpec.makeMeasureSpec(measuredWidth, 1073741824), View.MeasureSpec.makeMeasureSpec(measuredHeight, 1073741824));
        }
    }

    public void setAspectRatio(float f10) {
        if (this.f9326d != f10) {
            this.f9326d = f10;
            requestLayout();
        }
    }

    public void setResizeMode(int i10) {
        if (this.f9327e != i10) {
            this.f9327e = i10;
            requestLayout();
        }
    }

    public a(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f9327e = 0;
    }
}
