package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import tq.e;
import tq.h;
import uq.c;
import uq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private GestureCropImageView f19939d;

    /* renamed from: e  reason: collision with root package name */
    private final OverlayView f19940e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {
        a() {
        }

        @Override // uq.c
        public void a(float f10) {
            UCropView.this.f19940e.setTargetAspectRatio(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements d {
        b() {
        }

        @Override // uq.d
        public void a(RectF rectF) {
            UCropView.this.f19939d.setCropRect(rectF);
        }
    }

    public UCropView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void c() {
        this.f19939d.setCropBoundsChangeListener(new a());
        this.f19940e.setOverlayViewChangeListener(new b());
    }

    @NonNull
    public GestureCropImageView getCropImageView() {
        return this.f19939d;
    }

    @NonNull
    public OverlayView getOverlayView() {
        return this.f19940e;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public UCropView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(e.f50976d, (ViewGroup) this, true);
        this.f19939d = (GestureCropImageView) findViewById(tq.d.f50948b);
        OverlayView overlayView = (OverlayView) findViewById(tq.d.f50971y);
        this.f19940e = overlayView;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, h.f50986e);
        overlayView.g(obtainStyledAttributes);
        this.f19939d.y(obtainStyledAttributes);
        obtainStyledAttributes.recycle();
        c();
    }
}
