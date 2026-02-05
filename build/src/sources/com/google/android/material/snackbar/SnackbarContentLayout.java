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
import kh.g;
import zg.d;
import zg.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SnackbarContentLayout extends LinearLayout implements a {

    /* renamed from: d  reason: collision with root package name */
    private TextView f15388d;

    /* renamed from: e  reason: collision with root package name */
    private Button f15389e;

    /* renamed from: i  reason: collision with root package name */
    private final TimeInterpolator f15390i;

    /* renamed from: o  reason: collision with root package name */
    private int f15391o;

    public SnackbarContentLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15390i = g.g(context, zg.b.P, ah.a.f626b);
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
        if (this.f15388d.getPaddingTop() == i11 && this.f15388d.getPaddingBottom() == i12) {
            return z10;
        }
        d(this.f15388d, i11, i12);
        return true;
    }

    @Override // com.google.android.material.snackbar.a
    public void a(int i10, int i11) {
        this.f15388d.setAlpha(0.0f);
        long j10 = i11;
        long j11 = i10;
        this.f15388d.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f15390i).setStartDelay(j11).start();
        if (this.f15389e.getVisibility() == 0) {
            this.f15389e.setAlpha(0.0f);
            this.f15389e.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f15390i).setStartDelay(j11).start();
        }
    }

    @Override // com.google.android.material.snackbar.a
    public void b(int i10, int i11) {
        this.f15388d.setAlpha(1.0f);
        long j10 = i11;
        long j11 = i10;
        this.f15388d.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f15390i).setStartDelay(j11).start();
        if (this.f15389e.getVisibility() == 0) {
            this.f15389e.setAlpha(1.0f);
            this.f15389e.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f15390i).setStartDelay(j11).start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(float f10) {
        if (f10 != 1.0f) {
            this.f15389e.setTextColor(fh.a.j(fh.a.d(this, zg.b.f55558o), this.f15389e.getCurrentTextColor(), f10));
        }
    }

    public Button getActionView() {
        return this.f15389e;
    }

    public TextView getMessageView() {
        return this.f15388d;
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.f15388d = (TextView) findViewById(f.L);
        this.f15389e = (Button) findViewById(f.K);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        boolean z10;
        super.onMeasure(i10, i11);
        if (getOrientation() != 1) {
            int dimensionPixelSize = getResources().getDimensionPixelSize(d.f55592g);
            int dimensionPixelSize2 = getResources().getDimensionPixelSize(d.f55590f);
            Layout layout = this.f15388d.getLayout();
            if (layout != null && layout.getLineCount() > 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f15391o > 0 && this.f15389e.getMeasuredWidth() > this.f15391o) {
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
        this.f15391o = i10;
    }
}
