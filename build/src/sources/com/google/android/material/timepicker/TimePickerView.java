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
import zg.h;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class TimePickerView extends ConstraintLayout {

    /* renamed from: d  reason: collision with root package name */
    private final Chip f15613d;

    /* renamed from: e  reason: collision with root package name */
    private final Chip f15614e;

    /* renamed from: i  reason: collision with root package name */
    private final ClockHandView f15615i;

    /* renamed from: o  reason: collision with root package name */
    private final ClockFaceView f15616o;

    /* renamed from: p  reason: collision with root package name */
    private final MaterialButtonToggleGroup f15617p;

    /* renamed from: q  reason: collision with root package name */
    private final View.OnClickListener f15618q;

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
        final /* synthetic */ GestureDetector f15621d;

        c(GestureDetector gestureDetector) {
            this.f15621d = gestureDetector;
        }

        @Override // android.view.View.OnTouchListener
        public boolean onTouch(View view, MotionEvent motionEvent) {
            if (((Checkable) view).isChecked()) {
                return this.f15621d.onTouchEvent(motionEvent);
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
        this.f15613d.setTag(zg.f.J, 12);
        this.f15614e.setTag(zg.f.J, 10);
        this.f15613d.setOnClickListener(this.f15618q);
        this.f15614e.setOnClickListener(this.f15618q);
        this.f15613d.setAccessibilityClassName("android.view.View");
        this.f15614e.setAccessibilityClassName("android.view.View");
    }

    private void l() {
        c cVar = new c(new GestureDetector(getContext(), new b()));
        this.f15613d.setOnTouchListener(cVar);
        this.f15614e.setOnTouchListener(cVar);
    }

    @Override // android.view.View
    protected void onVisibilityChanged(View view, int i10) {
        super.onVisibilityChanged(view, i10);
        if (view == this && i10 == 0) {
            this.f15614e.sendAccessibilityEvent(8);
        }
    }

    public TimePickerView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.f15618q = new a();
        LayoutInflater.from(context).inflate(h.f55667l, this);
        this.f15616o = (ClockFaceView) findViewById(zg.f.f55635k);
        MaterialButtonToggleGroup materialButtonToggleGroup = (MaterialButtonToggleGroup) findViewById(zg.f.f55638n);
        this.f15617p = materialButtonToggleGroup;
        materialButtonToggleGroup.b(new MaterialButtonToggleGroup.d() { // from class: com.google.android.material.timepicker.f
            @Override // com.google.android.material.button.MaterialButtonToggleGroup.d
            public final void a(MaterialButtonToggleGroup materialButtonToggleGroup2, int i11, boolean z10) {
                TimePickerView.this.getClass();
            }
        });
        this.f15613d = (Chip) findViewById(zg.f.f55641q);
        this.f15614e = (Chip) findViewById(zg.f.f55639o);
        this.f15615i = (ClockHandView) findViewById(zg.f.f55636l);
        l();
        k();
    }
}
