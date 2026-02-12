package com.google.android.material.internal;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Path;
import android.util.AttributeSet;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ClippableRoundedCornerLayout extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private Path f15848d;

    /* renamed from: e  reason: collision with root package name */
    private float[] f15849e;

    public ClippableRoundedCornerLayout(@NonNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.f15849e = new float[]{0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void dispatchDraw(Canvas canvas) {
        if (this.f15848d == null) {
            super.dispatchDraw(canvas);
            return;
        }
        int save = canvas.save();
        canvas.clipPath(this.f15848d);
        super.dispatchDraw(canvas);
        canvas.restoreToCount(save);
    }

    @NonNull
    public float[] getCornerRadii() {
        return this.f15849e;
    }
}
