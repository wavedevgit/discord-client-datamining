package com.yalantis.ucrop.view;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.RectF;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.annotation.NonNull;
import nq.e;
import nq.h;
import oq.c;
import oq.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class UCropView extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private GestureCropImageView f20918d;

    /* renamed from: e  reason: collision with root package name */
    private final OverlayView f20919e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements c {
        a() {
        }

        @Override // oq.c
        public void a(float f10) {
            UCropView.this.f20919e.setTargetAspectRatio(f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b implements d {
        b() {
        }

        @Override // oq.d
        public void a(RectF rectF) {
            UCropView.this.f20918d.setCropRect(rectF);
        }
    }

    public UCropView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    private void c() {
        this.f20918d.setCropBoundsChangeListener(new a());
        this.f20919e.setOverlayViewChangeListener(new b());
    }

    @NonNull
    public GestureCropImageView getCropImageView() {
        return this.f20918d;
    }

    @NonNull
    public OverlayView getOverlayView() {
        return this.f20919e;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public UCropView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        LayoutInflater.from(context).inflate(e.f42131d, (ViewGroup) this, true);
        this.f20918d = (GestureCropImageView) findViewById(nq.d.f42103b);
        OverlayView overlayView = (OverlayView) findViewById(nq.d.f42126y);
        this.f20919e = overlayView;
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, h.f42141e);
        overlayView.g(obtainStyledAttributes);
        this.f20918d.y(obtainStyledAttributes);
        obtainStyledAttributes.recycle();
        c();
    }
}
