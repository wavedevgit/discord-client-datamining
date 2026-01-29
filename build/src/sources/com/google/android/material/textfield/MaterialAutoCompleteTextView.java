package com.google.android.material.textfield;

import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.Context;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.graphics.drawable.RippleDrawable;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.accessibility.AccessibilityManager;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Filterable;
import android.widget.ListAdapter;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.widget.j0;
import androidx.core.view.h0;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class MaterialAutoCompleteTextView extends androidx.appcompat.widget.d {

    /* renamed from: p  reason: collision with root package name */
    private final j0 f16410p;

    /* renamed from: q  reason: collision with root package name */
    private final AccessibilityManager f16411q;

    /* renamed from: r  reason: collision with root package name */
    private final Rect f16412r;

    /* renamed from: s  reason: collision with root package name */
    private final int f16413s;

    /* renamed from: t  reason: collision with root package name */
    private final float f16414t;

    /* renamed from: u  reason: collision with root package name */
    private ColorStateList f16415u;

    /* renamed from: v  reason: collision with root package name */
    private int f16416v;

    /* renamed from: w  reason: collision with root package name */
    private ColorStateList f16417w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements AdapterView.OnItemClickListener {
        a() {
        }

        @Override // android.widget.AdapterView.OnItemClickListener
        public void onItemClick(AdapterView adapterView, View view, int i10, long j10) {
            Object item;
            MaterialAutoCompleteTextView materialAutoCompleteTextView = MaterialAutoCompleteTextView.this;
            if (i10 < 0) {
                item = materialAutoCompleteTextView.f16410p.t();
            } else {
                item = materialAutoCompleteTextView.getAdapter().getItem(i10);
            }
            MaterialAutoCompleteTextView.this.l(item);
            AdapterView.OnItemClickListener onItemClickListener = MaterialAutoCompleteTextView.this.getOnItemClickListener();
            if (onItemClickListener != null) {
                if (view == null || i10 < 0) {
                    view = MaterialAutoCompleteTextView.this.f16410p.w();
                    i10 = MaterialAutoCompleteTextView.this.f16410p.v();
                    j10 = MaterialAutoCompleteTextView.this.f16410p.u();
                }
                onItemClickListener.onItemClick(MaterialAutoCompleteTextView.this.f16410p.n(), view, i10, j10);
            }
            MaterialAutoCompleteTextView.this.f16410p.dismiss();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class b extends ArrayAdapter {

        /* renamed from: d  reason: collision with root package name */
        private ColorStateList f16419d;

        /* renamed from: e  reason: collision with root package name */
        private ColorStateList f16420e;

        b(Context context, int i10, String[] strArr) {
            super(context, i10, strArr);
            f();
        }

        private ColorStateList a() {
            if (c() && d()) {
                int[] iArr = {16843623, -16842919};
                int[] iArr2 = {16842913, -16842919};
                int colorForState = MaterialAutoCompleteTextView.this.f16417w.getColorForState(iArr2, 0);
                int colorForState2 = MaterialAutoCompleteTextView.this.f16417w.getColorForState(iArr, 0);
                return new ColorStateList(new int[][]{iArr2, iArr, new int[0]}, new int[]{eh.a.i(MaterialAutoCompleteTextView.this.f16416v, colorForState), eh.a.i(MaterialAutoCompleteTextView.this.f16416v, colorForState2), MaterialAutoCompleteTextView.this.f16416v});
            }
            return null;
        }

        private Drawable b() {
            if (!c()) {
                return null;
            }
            ColorDrawable colorDrawable = new ColorDrawable(MaterialAutoCompleteTextView.this.f16416v);
            if (this.f16420e != null) {
                s1.a.o(colorDrawable, this.f16419d);
                return new RippleDrawable(this.f16420e, colorDrawable, null);
            }
            return colorDrawable;
        }

        private boolean c() {
            if (MaterialAutoCompleteTextView.this.f16416v != 0) {
                return true;
            }
            return false;
        }

        private boolean d() {
            if (MaterialAutoCompleteTextView.this.f16417w != null) {
                return true;
            }
            return false;
        }

        private ColorStateList e() {
            if (!d()) {
                return null;
            }
            int[] iArr = {16842919};
            return new ColorStateList(new int[][]{iArr, new int[0]}, new int[]{MaterialAutoCompleteTextView.this.f16417w.getColorForState(iArr, 0), 0});
        }

        void f() {
            this.f16420e = e();
            this.f16419d = a();
        }

        @Override // android.widget.ArrayAdapter, android.widget.Adapter
        public View getView(int i10, View view, ViewGroup viewGroup) {
            Drawable drawable;
            View view2 = super.getView(i10, view, viewGroup);
            if (view2 instanceof TextView) {
                TextView textView = (TextView) view2;
                if (MaterialAutoCompleteTextView.this.getText().toString().contentEquals(textView.getText())) {
                    drawable = b();
                } else {
                    drawable = null;
                }
                h0.r0(textView, drawable);
            }
            return view2;
        }
    }

    public MaterialAutoCompleteTextView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, yg.b.f54332b);
    }

    private TextInputLayout f() {
        for (ViewParent parent = getParent(); parent != null; parent = parent.getParent()) {
            if (parent instanceof TextInputLayout) {
                return (TextInputLayout) parent;
            }
        }
        return null;
    }

    private boolean g() {
        if (!i() && !h()) {
            return false;
        }
        return true;
    }

    private boolean h() {
        List<AccessibilityServiceInfo> enabledAccessibilityServiceList;
        AccessibilityManager accessibilityManager = this.f16411q;
        if (accessibilityManager != null && accessibilityManager.isEnabled() && (enabledAccessibilityServiceList = this.f16411q.getEnabledAccessibilityServiceList(16)) != null) {
            for (AccessibilityServiceInfo accessibilityServiceInfo : enabledAccessibilityServiceList) {
                if (accessibilityServiceInfo.getSettingsActivityName() != null && accessibilityServiceInfo.getSettingsActivityName().contains("SwitchAccess")) {
                    return true;
                }
            }
        }
        return false;
    }

    private boolean i() {
        AccessibilityManager accessibilityManager = this.f16411q;
        if (accessibilityManager != null && accessibilityManager.isTouchExplorationEnabled()) {
            return true;
        }
        return false;
    }

    private int j() {
        ListAdapter adapter = getAdapter();
        TextInputLayout f10 = f();
        int i10 = 0;
        if (adapter == null || f10 == null) {
            return 0;
        }
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(getMeasuredWidth(), 0);
        int makeMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(getMeasuredHeight(), 0);
        int min = Math.min(adapter.getCount(), Math.max(0, this.f16410p.v()) + 15);
        View view = null;
        int i11 = 0;
        for (int max = Math.max(0, min - 15); max < min; max++) {
            int itemViewType = adapter.getItemViewType(max);
            if (itemViewType != i10) {
                view = null;
                i10 = itemViewType;
            }
            view = adapter.getView(max, view, f10);
            if (view.getLayoutParams() == null) {
                view.setLayoutParams(new ViewGroup.LayoutParams(-2, -2));
            }
            view.measure(makeMeasureSpec, makeMeasureSpec2);
            i11 = Math.max(i11, view.getMeasuredWidth());
        }
        Drawable f11 = this.f16410p.f();
        if (f11 != null) {
            f11.getPadding(this.f16412r);
            Rect rect = this.f16412r;
            i11 += rect.left + rect.right;
        }
        return i11 + f10.getEndIconView().getMeasuredWidth();
    }

    private void k() {
        TextInputLayout f10 = f();
        if (f10 != null) {
            f10.q0();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void l(Object obj) {
        setText(convertSelectionToString(obj), false);
    }

    @Override // android.widget.AutoCompleteTextView
    public void dismissDropDown() {
        if (g()) {
            this.f16410p.dismiss();
        } else {
            super.dismissDropDown();
        }
    }

    public ColorStateList getDropDownBackgroundTintList() {
        return this.f16415u;
    }

    @Override // android.widget.TextView
    public CharSequence getHint() {
        TextInputLayout f10 = f();
        if (f10 != null && f10.R()) {
            return f10.getHint();
        }
        return super.getHint();
    }

    public float getPopupElevation() {
        return this.f16414t;
    }

    public int getSimpleItemSelectedColor() {
        return this.f16416v;
    }

    public ColorStateList getSimpleItemSelectedRippleColor() {
        return this.f16417w;
    }

    @Override // android.widget.AutoCompleteTextView, android.widget.TextView, android.view.View
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        TextInputLayout f10 = f();
        if (f10 != null && f10.R() && super.getHint() == null && com.google.android.material.internal.e.b()) {
            setHint("");
        }
    }

    @Override // android.widget.AutoCompleteTextView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        this.f16410p.dismiss();
    }

    @Override // android.widget.TextView, android.view.View
    protected void onMeasure(int i10, int i11) {
        super.onMeasure(i10, i11);
        if (View.MeasureSpec.getMode(i10) == Integer.MIN_VALUE) {
            setMeasuredDimension(Math.min(Math.max(getMeasuredWidth(), j()), View.MeasureSpec.getSize(i10)), getMeasuredHeight());
        }
    }

    @Override // android.widget.AutoCompleteTextView, android.widget.TextView, android.view.View
    public void onWindowFocusChanged(boolean z10) {
        if (g()) {
            return;
        }
        super.onWindowFocusChanged(z10);
    }

    @Override // android.widget.AutoCompleteTextView
    public <T extends ListAdapter & Filterable> void setAdapter(T t10) {
        super.setAdapter(t10);
        this.f16410p.l(getAdapter());
    }

    @Override // android.widget.AutoCompleteTextView
    public void setDropDownBackgroundDrawable(Drawable drawable) {
        super.setDropDownBackgroundDrawable(drawable);
        j0 j0Var = this.f16410p;
        if (j0Var != null) {
            j0Var.b(drawable);
        }
    }

    public void setDropDownBackgroundTint(int i10) {
        setDropDownBackgroundTintList(ColorStateList.valueOf(i10));
    }

    public void setDropDownBackgroundTintList(ColorStateList colorStateList) {
        this.f16415u = colorStateList;
        Drawable dropDownBackground = getDropDownBackground();
        if (dropDownBackground instanceof oh.g) {
            ((oh.g) dropDownBackground).X(this.f16415u);
        }
    }

    @Override // android.widget.AutoCompleteTextView
    public void setOnItemSelectedListener(AdapterView.OnItemSelectedListener onItemSelectedListener) {
        super.setOnItemSelectedListener(onItemSelectedListener);
        this.f16410p.K(getOnItemSelectedListener());
    }

    @Override // android.widget.TextView
    public void setRawInputType(int i10) {
        super.setRawInputType(i10);
        k();
    }

    public void setSimpleItemSelectedColor(int i10) {
        this.f16416v = i10;
        if (getAdapter() instanceof b) {
            ((b) getAdapter()).f();
        }
    }

    public void setSimpleItemSelectedRippleColor(ColorStateList colorStateList) {
        this.f16417w = colorStateList;
        if (getAdapter() instanceof b) {
            ((b) getAdapter()).f();
        }
    }

    public void setSimpleItems(int i10) {
        setSimpleItems(getResources().getStringArray(i10));
    }

    @Override // android.widget.AutoCompleteTextView
    public void showDropDown() {
        if (g()) {
            this.f16410p.show();
        } else {
            super.showDropDown();
        }
    }

    public MaterialAutoCompleteTextView(Context context, AttributeSet attributeSet, int i10) {
        super(rh.a.c(context, attributeSet, i10, 0), attributeSet, i10);
        this.f16412r = new Rect();
        Context context2 = getContext();
        TypedArray i11 = com.google.android.material.internal.l.i(context2, attributeSet, yg.k.G2, i10, yg.j.f54502e, new int[0]);
        if (i11.hasValue(yg.k.H2) && i11.getInt(yg.k.H2, 0) == 0) {
            setKeyListener(null);
        }
        this.f16413s = i11.getResourceId(yg.k.K2, yg.h.f54464m);
        this.f16414t = i11.getDimensionPixelOffset(yg.k.I2, yg.d.V);
        if (i11.hasValue(yg.k.J2)) {
            this.f16415u = ColorStateList.valueOf(i11.getColor(yg.k.J2, 0));
        }
        this.f16416v = i11.getColor(yg.k.L2, 0);
        this.f16417w = lh.c.a(context2, i11, yg.k.M2);
        this.f16411q = (AccessibilityManager) context2.getSystemService("accessibility");
        j0 j0Var = new j0(context2);
        this.f16410p = j0Var;
        j0Var.H(true);
        j0Var.B(this);
        j0Var.G(2);
        j0Var.l(getAdapter());
        j0Var.J(new a());
        if (i11.hasValue(yg.k.N2)) {
            setSimpleItems(i11.getResourceId(yg.k.N2, 0));
        }
        i11.recycle();
    }

    public void setSimpleItems(@NonNull String[] strArr) {
        setAdapter(new b(getContext(), this.f16413s, strArr));
    }
}
