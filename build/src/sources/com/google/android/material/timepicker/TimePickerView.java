package com.google.android.material.timepicker;

import android.content.Context;
import android.util.AttributeSet;
import android.view.GestureDetector;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Checkable;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.google.android.material.button.MaterialButtonToggleGroup;
import com.google.android.material.chip.Chip;
import yg.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TimePickerView extends ConstraintLayout {

    /* renamed from: d  reason: collision with root package name */
    private final Chip f16251d;

    /* renamed from: e  reason: collision with root package name */
    private final Chip f16252e;

    /* renamed from: i  reason: collision with root package name */
    private final ClockHandView f16253i;

    /* renamed from: o  reason: collision with root package name */
    private final ClockFaceView f16254o;

    /* renamed from: p  reason: collision with root package name */
    private final MaterialButtonToggleGroup f16255p;

    /* renamed from: q  reason: collision with root package name */
    private final View.OnClickListener f16256q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements View.OnClickListener {
        a() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            TimePickerView.i(TimePickerView.this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends GestureDetector.SimpleOnGestureListener {
        b() {
        }

        @Override // android.view.GestureDetector.SimpleOnGestureListener, android.view.GestureDetector.OnDoubleTapListener
        public boolean onDoubleTap(MotionEvent motionEvent) {
            TimePickerView.j(TimePickerView.this);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class c implements View.OnTouchListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ GestureDetector f16259d;

        c(GestureDetector gestureDetector) {
            this.f16259d = gestureDetector;
        }

        @Override // android.view.View.OnTouchListener
        public boolean onTouch(View view, MotionEvent motionEvent) {
            if (((Checkable) view).isChecked()) {
                return this.f16259d.onTouchEvent(motionEvent);
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface d {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface e {
    }

    public TimePickerView(Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0);
    }

    static /* synthetic */ e i(TimePickerView timePickerView) {
        timePickerView.getClass();
        return null;
    }

    static /* synthetic */ d j(TimePickerView timePickerView) {
        timePickerView.getClass();
        return null;
    }

    private void k() {
        this.f16251d.setTag(yg.f.J, 12);
        this.f16252e.setTag(yg.f.J, 10);
        this.f16251d.setOnClickListener(this.f16256q);
        this.f16252e.setOnClickListener(this.f16256q);
        this.f16251d.setAccessibilityClassName("android.view.View");
        this.f16252e.setAccessibilityClassName("android.view.View");
    }

    private void l() {
        c cVar = new c(new GestureDetector(getContext(), new b()));
        this.f16251d.setOnTouchListener(cVar);
        this.f16252e.setOnTouchListener(cVar);
    }

    @Override // android.view.View
    protected void onVisibilityChanged(View view, int i10) {
        super.onVisibilityChanged(view, i10);
        if (view == this && i10 == 0) {
            this.f16252e.sendAccessibilityEvent(8);
        }
    }

    public TimePickerView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f16256q = new a();
        LayoutInflater.from(context).inflate(h.f54454l, this);
        this.f16254o = (ClockFaceView) findViewById(yg.f.f54422k);
        MaterialButtonToggleGroup materialButtonToggleGroup = (MaterialButtonToggleGroup) findViewById(yg.f.f54425n);
        this.f16255p = materialButtonToggleGroup;
        materialButtonToggleGroup.b(new MaterialButtonToggleGroup.d() { // from class: com.google.android.material.timepicker.f
            @Override // com.google.android.material.button.MaterialButtonToggleGroup.d
            public final void a(MaterialButtonToggleGroup materialButtonToggleGroup2, int i11, boolean z10) {
                TimePickerView.this.getClass();
            }
        });
        this.f16251d = (Chip) findViewById(yg.f.f54428q);
        this.f16252e = (Chip) findViewById(yg.f.f54426o);
        this.f16253i = (ClockHandView) findViewById(yg.f.f54423l);
        l();
        k();
    }
}
