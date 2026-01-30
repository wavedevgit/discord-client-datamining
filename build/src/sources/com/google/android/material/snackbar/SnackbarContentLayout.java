package com.google.android.material.snackbar;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.text.Layout;
import android.util.AttributeSet;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.core.view.h0;
import jh.g;
import yg.d;
import yg.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SnackbarContentLayout extends LinearLayout implements a {

    /* renamed from: d  reason: collision with root package name */
    private TextView f16397d;

    /* renamed from: e  reason: collision with root package name */
    private Button f16398e;

    /* renamed from: i  reason: collision with root package name */
    private final TimeInterpolator f16399i;

    /* renamed from: o  reason: collision with root package name */
    private int f16400o;

    public SnackbarContentLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16399i = g.g(context, yg.b.P, zg.a.f55675b);
    }

    private static void d(View view, int i10, int i11) {
        if (h0.U(view)) {
            h0.F0(view, h0.E(view), i10, h0.D(view), i11);
        } else {
            view.setPadding(view.getPaddingLeft(), i10, view.getPaddingRight(), i11);
        }
    }

    private boolean e(int i10, int i11, int i12) {
        boolean z10;
        if (i10 != getOrientation()) {
            setOrientation(i10);
            z10 = true;
        } else {
            z10 = false;
        }
        if (this.f16397d.getPaddingTop() == i11 && this.f16397d.getPaddingBottom() == i12) {
            return z10;
        }
        d(this.f16397d, i11, i12);
        return true;
    }

    @Override // com.google.android.material.snackbar.a
    public void a(int i10, int i11) {
        this.f16397d.setAlpha(0.0f);
        long j10 = i11;
        long j11 = i10;
        this.f16397d.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f16399i).setStartDelay(j11).start();
        if (this.f16398e.getVisibility() == 0) {
            this.f16398e.setAlpha(0.0f);
            this.f16398e.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f16399i).setStartDelay(j11).start();
        }
    }

    @Override // com.google.android.material.snackbar.a
    public void b(int i10, int i11) {
        this.f16397d.setAlpha(1.0f);
        long j10 = i11;
        long j11 = i10;
        this.f16397d.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f16399i).setStartDelay(j11).start();
        if (this.f16398e.getVisibility() == 0) {
            this.f16398e.setAlpha(1.0f);
            this.f16398e.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f16399i).setStartDelay(j11).start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(float f10) {
        if (f10 != 1.0f) {
            this.f16398e.setTextColor(eh.a.j(eh.a.d(this, yg.b.f54370o), this.f16398e.getCurrentTextColor(), f10));
        }
    }

    public Button getActionView() {
        return this.f16398e;
    }

    public TextView getMessageView() {
        return this.f16397d;
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.f16397d = (TextView) findViewById(f.L);
        this.f16398e = (Button) findViewById(f.K);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        boolean z10;
        super.onMeasure(i10, i11);
        if (getOrientation() != 1) {
            int dimensionPixelSize = getResources().getDimensionPixelSize(d.f54404g);
            int dimensionPixelSize2 = getResources().getDimensionPixelSize(d.f54402f);
            Layout layout = this.f16397d.getLayout();
            if (layout != null && layout.getLineCount() > 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f16400o > 0 && this.f16398e.getMeasuredWidth() > this.f16400o) {
                if (!e(1, dimensionPixelSize, dimensionPixelSize - dimensionPixelSize2)) {
                    return;
                }
            } else {
                if (!z10) {
                    dimensionPixelSize = dimensionPixelSize2;
                }
                if (!e(0, dimensionPixelSize, dimensionPixelSize)) {
                    return;
                }
            }
            super.onMeasure(i10, i11);
        }
    }

    public void setMaxInlineActionWidth(int i10) {
        this.f16400o = i10;
    }
}
