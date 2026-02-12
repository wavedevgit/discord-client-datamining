package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.ActionMode;
import android.view.MotionEvent;
import android.view.View;
import android.widget.FrameLayout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ActionBarContainer extends FrameLayout {

    /* renamed from: d  reason: collision with root package name */
    private boolean f1529d;

    /* renamed from: e  reason: collision with root package name */
    private View f1530e;

    /* renamed from: i  reason: collision with root package name */
    private View f1531i;

    /* renamed from: o  reason: collision with root package name */
    private View f1532o;

    /* renamed from: p  reason: collision with root package name */
    Drawable f1533p;

    /* renamed from: q  reason: collision with root package name */
    Drawable f1534q;

    /* renamed from: r  reason: collision with root package name */
    Drawable f1535r;

    /* renamed from: s  reason: collision with root package name */
    boolean f1536s;

    /* renamed from: t  reason: collision with root package name */
    boolean f1537t;

    /* renamed from: u  reason: collision with root package name */
    private int f1538u;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static class a {
        public static void a(ActionBarContainer actionBarContainer) {
            actionBarContainer.invalidateOutline();
        }
    }

    public ActionBarContainer(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        setBackground(new b(this));
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f.j.f23417a);
        this.f1533p = obtainStyledAttributes.getDrawable(f.j.f23422b);
        this.f1534q = obtainStyledAttributes.getDrawable(f.j.f23432d);
        this.f1538u = obtainStyledAttributes.getDimensionPixelSize(f.j.f23462j, -1);
        boolean z10 = true;
        if (getId() == f.f.I) {
            this.f1536s = true;
            this.f1535r = obtainStyledAttributes.getDrawable(f.j.f23427c);
        }
        obtainStyledAttributes.recycle();
        if (!this.f1536s ? this.f1533p != null || this.f1534q != null : this.f1535r != null) {
            z10 = false;
        }
        setWillNotDraw(z10);
    }

    private int a(View view) {
        FrameLayout.LayoutParams layoutParams = (FrameLayout.LayoutParams) view.getLayoutParams();
        return view.getMeasuredHeight() + layoutParams.topMargin + layoutParams.bottomMargin;
    }

    private boolean b(View view) {
        if (view != null && view.getVisibility() != 8 && view.getMeasuredHeight() != 0) {
            return false;
        }
        return true;
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void drawableStateChanged() {
        super.drawableStateChanged();
        Drawable drawable = this.f1533p;
        if (drawable != null && drawable.isStateful()) {
            this.f1533p.setState(getDrawableState());
        }
        Drawable drawable2 = this.f1534q;
        if (drawable2 != null && drawable2.isStateful()) {
            this.f1534q.setState(getDrawableState());
        }
        Drawable drawable3 = this.f1535r;
        if (drawable3 != null && drawable3.isStateful()) {
            this.f1535r.setState(getDrawableState());
        }
    }

    public View getTabContainer() {
        return this.f1530e;
    }

    @Override // android.view.ViewGroup, android.view.View
    public void jumpDrawablesToCurrentState() {
        super.jumpDrawablesToCurrentState();
        Drawable drawable = this.f1533p;
        if (drawable != null) {
            drawable.jumpToCurrentState();
        }
        Drawable drawable2 = this.f1534q;
        if (drawable2 != null) {
            drawable2.jumpToCurrentState();
        }
        Drawable drawable3 = this.f1535r;
        if (drawable3 != null) {
            drawable3.jumpToCurrentState();
        }
    }

    @Override // android.view.View
    public void onFinishInflate() {
        super.onFinishInflate();
        this.f1531i = findViewById(f.f.f23351a);
        this.f1532o = findViewById(f.f.f23357g);
    }

    @Override // android.view.View
    public boolean onHoverEvent(MotionEvent motionEvent) {
        super.onHoverEvent(motionEvent);
        return true;
    }

    @Override // android.view.ViewGroup
    public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
        if (!this.f1529d && !super.onInterceptTouchEvent(motionEvent)) {
            return false;
        }
        return true;
    }

    @Override // android.widget.FrameLayout, android.view.ViewGroup, android.view.View
    public void onLayout(boolean z10, int i10, int i11, int i12, int i13) {
        boolean z11;
        Drawable drawable;
        super.onLayout(z10, i10, i11, i12, i13);
        View view = this.f1530e;
        boolean z12 = true;
        boolean z13 = false;
        if (view != null && view.getVisibility() != 8) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (view != null && view.getVisibility() != 8) {
            int measuredHeight = getMeasuredHeight();
            int i14 = ((FrameLayout.LayoutParams) view.getLayoutParams()).bottomMargin;
            view.layout(i10, (measuredHeight - view.getMeasuredHeight()) - i14, i12, measuredHeight - i14);
        }
        if (this.f1536s) {
            Drawable drawable2 = this.f1535r;
            if (drawable2 != null) {
                drawable2.setBounds(0, 0, getMeasuredWidth(), getMeasuredHeight());
            }
            z12 = z13;
        } else {
            if (this.f1533p != null) {
                if (this.f1531i.getVisibility() == 0) {
                    this.f1533p.setBounds(this.f1531i.getLeft(), this.f1531i.getTop(), this.f1531i.getRight(), this.f1531i.getBottom());
                } else {
                    View view2 = this.f1532o;
                    if (view2 != null && view2.getVisibility() == 0) {
                        this.f1533p.setBounds(this.f1532o.getLeft(), this.f1532o.getTop(), this.f1532o.getRight(), this.f1532o.getBottom());
                    } else {
                        this.f1533p.setBounds(0, 0, 0, 0);
                    }
                }
                z13 = true;
            }
            this.f1537t = z11;
            if (z11 && (drawable = this.f1534q) != null) {
                drawable.setBounds(view.getLeft(), view.getTop(), view.getRight(), view.getBottom());
            }
            z12 = z13;
        }
        if (z12) {
            invalidate();
        }
    }

    @Override // android.widget.FrameLayout, android.view.View
    public void onMeasure(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        if (this.f1531i == null && View.MeasureSpec.getMode(i11) == Integer.MIN_VALUE && (i14 = this.f1538u) >= 0) {
            i11 = View.MeasureSpec.makeMeasureSpec(Math.min(i14, View.MeasureSpec.getSize(i11)), Integer.MIN_VALUE);
        }
        super.onMeasure(i10, i11);
        if (this.f1531i != null) {
            int mode = View.MeasureSpec.getMode(i11);
            View view = this.f1530e;
            if (view != null && view.getVisibility() != 8 && mode != 1073741824) {
                if (!b(this.f1531i)) {
                    i12 = a(this.f1531i);
                } else if (!b(this.f1532o)) {
                    i12 = a(this.f1532o);
                } else {
                    i12 = 0;
                }
                if (mode == Integer.MIN_VALUE) {
                    i13 = View.MeasureSpec.getSize(i11);
                } else {
                    i13 = Integer.MAX_VALUE;
                }
                setMeasuredDimension(getMeasuredWidth(), Math.min(i12 + a(this.f1530e), i13));
            }
        }
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        super.onTouchEvent(motionEvent);
        return true;
    }

    public void setPrimaryBackground(Drawable drawable) {
        Drawable drawable2 = this.f1533p;
        if (drawable2 != null) {
            drawable2.setCallback(null);
            unscheduleDrawable(this.f1533p);
        }
        this.f1533p = drawable;
        if (drawable != null) {
            drawable.setCallback(this);
            View view = this.f1531i;
            if (view != null) {
                this.f1533p.setBounds(view.getLeft(), this.f1531i.getTop(), this.f1531i.getRight(), this.f1531i.getBottom());
            }
        }
        boolean z10 = false;
        if (!this.f1536s ? !(this.f1533p != null || this.f1534q != null) : this.f1535r == null) {
            z10 = true;
        }
        setWillNotDraw(z10);
        invalidate();
        a.a(this);
    }

    public void setSplitBackground(Drawable drawable) {
        Drawable drawable2;
        Drawable drawable3 = this.f1535r;
        if (drawable3 != null) {
            drawable3.setCallback(null);
            unscheduleDrawable(this.f1535r);
        }
        this.f1535r = drawable;
        boolean z10 = false;
        if (drawable != null) {
            drawable.setCallback(this);
            if (this.f1536s && (drawable2 = this.f1535r) != null) {
                drawable2.setBounds(0, 0, getMeasuredWidth(), getMeasuredHeight());
            }
        }
        if (!this.f1536s ? !(this.f1533p != null || this.f1534q != null) : this.f1535r == null) {
            z10 = true;
        }
        setWillNotDraw(z10);
        invalidate();
        a.a(this);
    }

    public void setStackedBackground(Drawable drawable) {
        Drawable drawable2;
        Drawable drawable3 = this.f1534q;
        if (drawable3 != null) {
            drawable3.setCallback(null);
            unscheduleDrawable(this.f1534q);
        }
        this.f1534q = drawable;
        if (drawable != null) {
            drawable.setCallback(this);
            if (this.f1537t && (drawable2 = this.f1534q) != null) {
                drawable2.setBounds(this.f1530e.getLeft(), this.f1530e.getTop(), this.f1530e.getRight(), this.f1530e.getBottom());
            }
        }
        boolean z10 = false;
        if (!this.f1536s ? !(this.f1533p != null || this.f1534q != null) : this.f1535r == null) {
            z10 = true;
        }
        setWillNotDraw(z10);
        invalidate();
        a.a(this);
    }

    public void setTabContainer(p0 p0Var) {
        View view = this.f1530e;
        if (view != null) {
            removeView(view);
        }
        this.f1530e = p0Var;
    }

    public void setTransitioning(boolean z10) {
        int i10;
        this.f1529d = z10;
        if (z10) {
            i10 = 393216;
        } else {
            i10 = 262144;
        }
        setDescendantFocusability(i10);
    }

    @Override // android.view.View
    public void setVisibility(int i10) {
        boolean z10;
        super.setVisibility(i10);
        if (i10 == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        Drawable drawable = this.f1533p;
        if (drawable != null) {
            drawable.setVisible(z10, false);
        }
        Drawable drawable2 = this.f1534q;
        if (drawable2 != null) {
            drawable2.setVisible(z10, false);
        }
        Drawable drawable3 = this.f1535r;
        if (drawable3 != null) {
            drawable3.setVisible(z10, false);
        }
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public ActionMode startActionModeForChild(View view, ActionMode.Callback callback) {
        return null;
    }

    @Override // android.view.View
    protected boolean verifyDrawable(Drawable drawable) {
        if (drawable != this.f1533p || this.f1536s) {
            if (drawable != this.f1534q || !this.f1537t) {
                if ((drawable == this.f1535r && this.f1536s) || super.verifyDrawable(drawable)) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // android.view.ViewGroup, android.view.ViewParent
    public ActionMode startActionModeForChild(View view, ActionMode.Callback callback, int i10) {
        if (i10 != 0) {
            return super.startActionModeForChild(view, callback, i10);
        }
        return null;
    }
}
