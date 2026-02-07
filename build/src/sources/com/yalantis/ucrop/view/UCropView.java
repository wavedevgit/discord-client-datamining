package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import vq.e;
import vq.h;
import wq.c;
import wq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private GestureCropImageView f19919d;

    /* renamed from: e  reason: collision with root package name */
    private final OverlayView f19920e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {
        a() {
        }

        @Override // wq.c
        public void a(float f10) {
            UCropView.this.f19920e.setTargetAspectRatio(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements d {
        b() {
        }

        @Override // wq.d
        public void a(RectF rectF) {
            UCropView.this.f19919d.setCropRect(rectF);
        }
    }

    public UCropView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void c() {
        this.f19919d.setCropBoundsChangeListener(new a());
        this.f19920e.setOverlayViewChangeListener(new b());
    }

    @NonNull
    public GestureCropImageView getCropImageView() {
        return this.f19919d;
    }

    @NonNull
    public OverlayView getOverlayView() {
        return this.f19920e;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public UCropView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(e.f52952d, (ViewGroup) this, true);
        this.f19919d = (GestureCropImageView) findViewById(vq.d.f52924b);
        OverlayView overlayView = (OverlayView) findViewById(vq.d.f52947y);
        this.f19920e = overlayView;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, h.f52962e);
        overlayView.g(obtainStyledAttributes);
        this.f19919d.y(obtainStyledAttributes);
        obtainStyledAttributes.recycle();
        c();
    }
}
