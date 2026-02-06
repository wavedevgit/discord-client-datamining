package androidx.appcompat.widget;

import android.content.Context;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;
import androidx.appcompat.view.ActionMode;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ActionBarContextView extends androidx.appcompat.widget.a {
    private TextView A;
    private int B;
    private int C;
    private boolean D;
    private int E;

    /* renamed from: t  reason: collision with root package name */
    private CharSequence f1840t;

    /* renamed from: u  reason: collision with root package name */
    private CharSequence f1841u;

    /* renamed from: v  reason: collision with root package name */
    private View f1842v;

    /* renamed from: w  reason: collision with root package name */
    private View f1843w;

    /* renamed from: x  reason: collision with root package name */
    private View f1844x;

    /* renamed from: y  reason: collision with root package name */
    private LinearLayout f1845y;

    /* renamed from: z  reason: collision with root package name */
    private TextView f1846z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements View.OnClickListener {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ActionMode f1847d;

        a(ActionMode actionMode) {
            this.f1847d = actionMode;
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            this.f1847d.c();
        }
    }

    public ActionBarContextView(Context context) {
        this(context, null);
    }

    private void i() {
        int i10;
        if (this.f1845y == null) {
            LayoutInflater.from(getContext()).inflate(f.g.f22298a, this);
            LinearLayout linearLayout = (LinearLayout) getChildAt(getChildCount() - 1);
            this.f1845y = linearLayout;
            this.f1846z = (TextView) linearLayout.findViewById(f.f.f22277f);
            this.A = (TextView) this.f1845y.findViewById(f.f.f22276e);
            if (this.B != 0) {
                this.f1846z.setTextAppearance(getContext(), this.B);
            }
            if (this.C != 0) {
                this.A.setTextAppearance(getContext(), this.C);
            }
        }
        this.f1846z.setText(this.f1840t);
        this.A.setText(this.f1841u);
        boolean isEmpty = TextUtils.isEmpty(this.f1840t);
        boolean isEmpty2 = TextUtils.isEmpty(this.f1841u);
        TextView textView = this.A;
        int i11 = 8;
        if (!isEmpty2) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        textView.setVisibility(i10);
        LinearLayout linearLayout2 = this.f1845y;
        if (!isEmpty || !isEmpty2) {
            i11 = 0;
        }
        linearLayout2.setVisibility(i11);
        if (this.f1845y.getParent() == null) {
            addView(this.f1845y);
        }
    }

    @Override // androidx.appcompat.widget.a
    public /* bridge */ /* synthetic */ androidx.core.view.r0 f(int i10, long j10) {
        return super.f(i10, j10);
    }

    public void g() {
        if (this.f1842v == null) {
            k();
        }
    }

    @Override // android.view.ViewGroup
    protected ViewGroup.LayoutParams generateDefaultLayoutParams() {
        return new ViewGroup.MarginLayoutParams(-1, -2);
    }

    @Override // android.view.ViewGroup
    public ViewGroup.LayoutParams generateLayoutParams(AttributeSet attributeSet) {
        return new ViewGroup.MarginLayoutParams(getContext(), attributeSet);
    }

    @Override // androidx.appcompat.widget.a
    public /* bridge */ /* synthetic */ int getAnimatedVisibility() {
        return super.getAnimatedVisibility();
    }

    @Override // androidx.appcompat.widget.a
    public /* bridge */ /* synthetic */ int getContentHeight() {
        return super.getContentHeight();
    }

    public CharSequence getSubtitle() {
        return this.f1841u;
    }

    public CharSequence getTitle() {
        return this.f1840t;
    }

    public void h(ActionMode actionMode) {
        View view = this.f1842v;
        if (view == null) {
            View inflate = LayoutInflater.from(getContext()).inflate(this.E, (ViewGroup) this, false);
            this.f1842v = inflate;
            addView(inflate);
        } else if (view.getParent() == null) {
            addView(this.f1842v);
        }
        View findViewById = this.f1842v.findViewById(f.f.f22281j);
        this.f1843w = findViewById;
        findViewById.setOnClickListener(new a(actionMode));
        androidx.appcompat.view.menu.e eVar = (androidx.appcompat.view.menu.e) actionMode.e();
        c cVar = this.f2022o;
        if (cVar != null) {
            cVar.y();
        }
        c cVar2 = new c(getContext());
        this.f2022o = cVar2;
        cVar2.J(true);
        ViewGroup.LayoutParams layoutParams = new ViewGroup.LayoutParams(-2, -1);
        eVar.c(this.f2022o, this.f2020e);
        ActionMenuView actionMenuView = (ActionMenuView) this.f2022o.o(this);
        this.f2021i = actionMenuView;
        actionMenuView.setBackground(null);
        addView(this.f2021i, layoutParams);
    }

    public boolean j() {
        return this.D;
    }

    public void k() {
        removeAllViews();
        this.f1844x = null;
        this.f2021i = null;
        this.f2022o = null;
        View view = this.f1843w;
        if (view != null) {
            view.setOnClickListener(null);
        }
    }

    public boolean l() {
        c cVar = this.f2022o;
        if (cVar != null) {
            return cVar.K();
        }
        return false;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        c cVar = this.f2022o;
        if (cVar != null) {
            cVar.B();
            this.f2022o.C();
        }
    }

    @Override // androidx.appcompat.widget.a, android.view.View
    public /* bridge */ /* synthetic */ boolean onHoverEvent(MotionEvent motionEvent) {
        return super.onHoverEvent(motionEvent);
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        int paddingLeft;
        int paddingRight;
        int i14;
        int i15;
        boolean b10 = g1.b(this);
        if (b10) {
            paddingLeft = (i12 - i10) - getPaddingRight();
        } else {
            paddingLeft = getPaddingLeft();
        }
        int paddingTop = getPaddingTop();
        int paddingTop2 = ((i13 - i11) - getPaddingTop()) - getPaddingBottom();
        View view = this.f1842v;
        if (view != null && view.getVisibility() != 8) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) this.f1842v.getLayoutParams();
            if (b10) {
                i14 = marginLayoutParams.rightMargin;
            } else {
                i14 = marginLayoutParams.leftMargin;
            }
            if (b10) {
                i15 = marginLayoutParams.leftMargin;
            } else {
                i15 = marginLayoutParams.rightMargin;
            }
            int i16 = i15;
            int d10 = androidx.appcompat.widget.a.d(paddingLeft, i14, b10);
            paddingLeft = androidx.appcompat.widget.a.d(d10 + e(this.f1842v, d10, paddingTop, paddingTop2, b10), i16, b10);
        }
        int i17 = paddingLeft;
        LinearLayout linearLayout = this.f1845y;
        if (linearLayout != null && this.f1844x == null && linearLayout.getVisibility() != 8) {
            i17 += e(this.f1845y, i17, paddingTop, paddingTop2, b10);
        }
        View view2 = this.f1844x;
        if (view2 != null) {
            e(view2, i17, paddingTop, paddingTop2, b10);
        }
        if (b10) {
            paddingRight = getPaddingLeft();
        } else {
            paddingRight = (i12 - i10) - getPaddingRight();
        }
        int i18 = paddingRight;
        ActionMenuView actionMenuView = this.f2021i;
        if (actionMenuView != null) {
            e(actionMenuView, i18, paddingTop, paddingTop2, !b10);
        }
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int i12;
        boolean z10;
        int i13;
        int i14 = 1073741824;
        if (View.MeasureSpec.getMode(i10) == 1073741824) {
            if (View.MeasureSpec.getMode(i11) != 0) {
                int size = View.MeasureSpec.getSize(i10);
                int i15 = this.f2023p;
                if (i15 <= 0) {
                    i15 = View.MeasureSpec.getSize(i11);
                }
                int paddingTop = getPaddingTop() + getPaddingBottom();
                int paddingLeft = (size - getPaddingLeft()) - getPaddingRight();
                int i16 = i15 - paddingTop;
                int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i16, Integer.MIN_VALUE);
                View view = this.f1842v;
                if (view != null) {
                    int c10 = c(view, paddingLeft, makeMeasureSpec, 0);
                    ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) this.f1842v.getLayoutParams();
                    paddingLeft = c10 - (marginLayoutParams.leftMargin + marginLayoutParams.rightMargin);
                }
                ActionMenuView actionMenuView = this.f2021i;
                if (actionMenuView != null && actionMenuView.getParent() == this) {
                    paddingLeft = c(this.f2021i, paddingLeft, makeMeasureSpec, 0);
                }
                LinearLayout linearLayout = this.f1845y;
                if (linearLayout != null && this.f1844x == null) {
                    if (this.D) {
                        this.f1845y.measure(View.MeasureSpec.makeMeasureSpec(0, 0), makeMeasureSpec);
                        int measuredWidth = this.f1845y.getMeasuredWidth();
                        if (measuredWidth <= paddingLeft) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        if (z10) {
                            paddingLeft -= measuredWidth;
                        }
                        LinearLayout linearLayout2 = this.f1845y;
                        if (z10) {
                            i13 = 0;
                        } else {
                            i13 = 8;
                        }
                        linearLayout2.setVisibility(i13);
                    } else {
                        paddingLeft = c(linearLayout, paddingLeft, makeMeasureSpec, 0);
                    }
                }
                View view2 = this.f1844x;
                if (view2 != null) {
                    ViewGroup.LayoutParams layoutParams = view2.getLayoutParams();
                    int i17 = layoutParams.width;
                    if (i17 != -2) {
                        i12 = 1073741824;
                    } else {
                        i12 = Integer.MIN_VALUE;
                    }
                    if (i17 >= 0) {
                        paddingLeft = Math.min(i17, paddingLeft);
                    }
                    int i18 = layoutParams.height;
                    if (i18 == -2) {
                        i14 = Integer.MIN_VALUE;
                    }
                    if (i18 >= 0) {
                        i16 = Math.min(i18, i16);
                    }
                    this.f1844x.measure(View.MeasureSpec.makeMeasureSpec(paddingLeft, i12), View.MeasureSpec.makeMeasureSpec(i16, i14));
                }
                if (this.f2023p <= 0) {
                    int childCount = getChildCount();
                    int i19 = 0;
                    for (int i20 = 0; i20 < childCount; i20++) {
                        int measuredHeight = getChildAt(i20).getMeasuredHeight() + paddingTop;
                        if (measuredHeight > i19) {
                            i19 = measuredHeight;
                        }
                    }
                    setMeasuredDimension(size, i19);
                    return;
                }
                setMeasuredDimension(size, i15);
                return;
            }
            throw new IllegalStateException(getClass().getSimpleName() + " can only be used with android:layout_height=\"wrap_content\"");
        }
        throw new IllegalStateException(getClass().getSimpleName() + " can only be used with android:layout_width=\"match_parent\" (or fill_parent)");
    }

    @Override // androidx.appcompat.widget.a, android.view.View
    public /* bridge */ /* synthetic */ boolean onTouchEvent(MotionEvent motionEvent) {
        return super.onTouchEvent(motionEvent);
    }

    @Override // androidx.appcompat.widget.a
    public void setContentHeight(int i10) {
        this.f2023p = i10;
    }

    public void setCustomView(View view) {
        LinearLayout linearLayout;
        View view2 = this.f1844x;
        if (view2 != null) {
            removeView(view2);
        }
        this.f1844x = view;
        if (view != null && (linearLayout = this.f1845y) != null) {
            removeView(linearLayout);
            this.f1845y = null;
        }
        if (view != null) {
            addView(view);
        }
        requestLayout();
    }

    public void setSubtitle(CharSequence charSequence) {
        this.f1841u = charSequence;
        i();
    }

    public void setTitle(CharSequence charSequence) {
        this.f1840t = charSequence;
        i();
        androidx.core.view.h0.q0(this, charSequence);
    }

    public void setTitleOptional(boolean z10) {
        if (z10 != this.D) {
            requestLayout();
        }
        this.D = z10;
    }

    @Override // androidx.appcompat.widget.a, android.view.View
    public /* bridge */ /* synthetic */ void setVisibility(int i10) {
        super.setVisibility(i10);
    }

    @Override // android.view.ViewGroup
    public boolean shouldDelayChildPressedState() {
        return false;
    }

    public ActionBarContextView(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.f22204g);
    }

    public ActionBarContextView(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        v0 v10 = v0.v(context, attributeSet, f.j.f22456y, i10, 0);
        setBackground(v10.g(f.j.f22461z));
        this.B = v10.n(f.j.D, 0);
        this.C = v10.n(f.j.C, 0);
        this.f2023p = v10.m(f.j.B, 0);
        this.E = v10.n(f.j.A, f.g.f22301d);
        v10.x();
    }
}
