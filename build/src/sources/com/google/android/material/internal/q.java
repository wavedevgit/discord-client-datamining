package com.google.android.material.internal;

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ImageButton;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q extends ImageButton {

    /* renamed from: d  reason: collision with root package name */
    private int f15940d;

    public q(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f15940d = getVisibility();
    }

    public final void b(int i10, boolean z10) {
        super.setVisibility(i10);
        if (z10) {
            this.f15940d = i10;
        }
    }

    public final int getUserSetVisibility() {
        return this.f15940d;
    }

    @Override // android.widget.ImageView, android.view.View
    public void setVisibility(int i10) {
        b(i10, true);
    }
}
