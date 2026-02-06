package com.google.android.material.timepicker;

import ah.h;
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
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TimePickerView extends ConstraintLayout {

    /* renamed from: d  reason: collision with root package name */
    private final Chip f15593d;

    /* renamed from: e  reason: collision with root package name */
    private final Chip f15594e;

    /* renamed from: i  reason: collision with root package name */
    private final ClockHandView f15595i;

    /* renamed from: o  reason: collision with root package name */
    private final ClockFaceView f15596o;

    /* renamed from: p  reason: collision with root package name */
    private final MaterialButtonToggleGroup f15597p;

    /* renamed from: q  reason: collision with root package name */
    private final View.OnClickListener f15598q;

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
        final /* synthetic */ GestureDetector f15601d;

        c(GestureDetector gestureDetector) {
            this.f15601d = gestureDetector;
        }

        @Override // android.view.View.OnTouchListener
        public boolean onTouch(View view, MotionEvent motionEvent) {
            if (((Checkable) view).isChecked()) {
                return this.f15601d.onTouchEvent(motionEvent);
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
        this.f15593d.setTag(ah.f.J, 12);
        this.f15594e.setTag(ah.f.J, 10);
        this.f15593d.setOnClickListener(this.f15598q);
        this.f15594e.setOnClickListener(this.f15598q);
        this.f15593d.setAccessibilityClassName("android.view.View");
        this.f15594e.setAccessibilityClassName("android.view.View");
    }

    private void l() {
        c cVar = new c(new GestureDetector(getContext(), new b()));
        this.f15593d.setOnTouchListener(cVar);
        this.f15594e.setOnTouchListener(cVar);
    }

    @Override // android.view.View
    protected void onVisibilityChanged(View view, int i10) {
        super.onVisibilityChanged(view, i10);
        if (view == this && i10 == 0) {
            this.f15594e.sendAccessibilityEvent(8);
        }
    }

    public TimePickerView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f15598q = new a();
        LayoutInflater.from(context).inflate(h.f762l, this);
        this.f15596o = (ClockFaceView) findViewById(ah.f.f730k);
        MaterialButtonToggleGroup materialButtonToggleGroup = (MaterialButtonToggleGroup) findViewById(ah.f.f733n);
        this.f15597p = materialButtonToggleGroup;
        materialButtonToggleGroup.b(new MaterialButtonToggleGroup.d() { // from class: com.google.android.material.timepicker.f
            @Override // com.google.android.material.button.MaterialButtonToggleGroup.d
            public final void a(MaterialButtonToggleGroup materialButtonToggleGroup2, int i11, boolean z10) {
                TimePickerView.this.getClass();
            }
        });
        this.f15593d = (Chip) findViewById(ah.f.f736q);
        this.f15594e = (Chip) findViewById(ah.f.f734o);
        this.f15595i = (ClockHandView) findViewById(ah.f.f731l);
        l();
        k();
    }
}
