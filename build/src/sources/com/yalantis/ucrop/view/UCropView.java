package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import oq.e;
import oq.h;
import pq.c;
import pq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private GestureCropImageView f20551d;

    /* renamed from: e  reason: collision with root package name */
    private final OverlayView f20552e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {
        a() {
        }

        @Override // pq.c
        public void a(float f10) {
            UCropView.this.f20552e.setTargetAspectRatio(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements d {
        b() {
        }

        @Override // pq.d
        public void a(RectF rectF) {
            UCropView.this.f20551d.setCropRect(rectF);
        }
    }

    public UCropView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void c() {
        this.f20551d.setCropBoundsChangeListener(new a());
        this.f20552e.setOverlayViewChangeListener(new b());
    }

    @NonNull
    public GestureCropImageView getCropImageView() {
        return this.f20551d;
    }

    @NonNull
    public OverlayView getOverlayView() {
        return this.f20552e;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public UCropView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(e.f44685d, (ViewGroup) this, true);
        this.f20551d = (GestureCropImageView) findViewById(oq.d.f44657b);
        OverlayView overlayView = (OverlayView) findViewById(oq.d.f44680y);
        this.f20552e = overlayView;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, h.f44695e);
        overlayView.g(obtainStyledAttributes);
        this.f20551d.y(obtainStyledAttributes);
        obtainStyledAttributes.recycle();
        c();
    }
}
