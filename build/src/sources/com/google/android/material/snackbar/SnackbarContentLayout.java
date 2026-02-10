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
import bh.d;
import bh.f;
import oh.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class SnackbarContentLayout extends LinearLayout implements a {

    /* renamed from: d  reason: collision with root package name */
    private TextView f16256d;

    /* renamed from: e  reason: collision with root package name */
    private Button f16257e;

    /* renamed from: i  reason: collision with root package name */
    private final TimeInterpolator f16258i;

    /* renamed from: o  reason: collision with root package name */
    private int f16259o;

    public SnackbarContentLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f16258i = g.g(context, bh.b.T, ch.a.f8277b);
    }

    private static void d(View view, int i10, int i11) {
        if (view.isPaddingRelative()) {
            view.setPaddingRelative(view.getPaddingStart(), i10, view.getPaddingEnd(), i11);
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
        if (this.f16256d.getPaddingTop() == i11 && this.f16256d.getPaddingBottom() == i12) {
            return z10;
        }
        d(this.f16256d, i11, i12);
        return true;
    }

    @Override // com.google.android.material.snackbar.a
    public void a(int i10, int i11) {
        this.f16256d.setAlpha(0.0f);
        long j10 = i11;
        long j11 = i10;
        this.f16256d.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f16258i).setStartDelay(j11).start();
        if (this.f16257e.getVisibility() == 0) {
            this.f16257e.setAlpha(0.0f);
            this.f16257e.animate().alpha(1.0f).setDuration(j10).setInterpolator(this.f16258i).setStartDelay(j11).start();
        }
    }

    @Override // com.google.android.material.snackbar.a
    public void b(int i10, int i11) {
        this.f16256d.setAlpha(1.0f);
        long j10 = i11;
        long j11 = i10;
        this.f16256d.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f16258i).setStartDelay(j11).start();
        if (this.f16257e.getVisibility() == 0) {
            this.f16257e.setAlpha(1.0f);
            this.f16257e.animate().alpha(0.0f).setDuration(j10).setInterpolator(this.f16258i).setStartDelay(j11).start();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(float f10) {
        if (f10 != 1.0f) {
            this.f16257e.setTextColor(jh.a.j(jh.a.d(this, bh.b.f6751o), this.f16257e.getCurrentTextColor(), f10));
        }
    }

    public Button getActionView() {
        return this.f16257e;
    }

    public TextView getMessageView() {
        return this.f16256d;
    }

    @Override // android.view.View
    protected void onFinishInflate() {
        super.onFinishInflate();
        this.f16256d = (TextView) findViewById(f.U);
        this.f16257e = (Button) findViewById(f.T);
    }

    @Override // android.widget.LinearLayout, android.view.View
    protected void onMeasure(int i10, int i11) {
        boolean z10;
        super.onMeasure(i10, i11);
        if (getOrientation() != 1) {
            int dimensionPixelSize = getResources().getDimensionPixelSize(d.f6802o);
            int dimensionPixelSize2 = getResources().getDimensionPixelSize(d.f6800n);
            Layout layout = this.f16256d.getLayout();
            if (layout != null && layout.getLineCount() > 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f16259o > 0 && this.f16257e.getMeasuredWidth() > this.f16259o) {
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
        this.f16259o = i10;
    }
}
