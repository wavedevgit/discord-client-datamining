package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.TypedArray;
import android.database.DataSetObserver;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Handler;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.AbsListView;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.PopupWindow;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j0 implements k.e {
    private static Method R;
    private static Method S;
    private View A;
    private int B;
    private DataSetObserver C;
    private View D;
    private Drawable E;
    private AdapterView.OnItemClickListener F;
    private AdapterView.OnItemSelectedListener G;
    final i H;
    private final h I;
    private final g J;
    private final e K;
    private Runnable L;
    final Handler M;
    private final Rect N;
    private Rect O;
    private boolean P;
    PopupWindow Q;

    /* renamed from: d  reason: collision with root package name */
    private Context f1833d;

    /* renamed from: e  reason: collision with root package name */
    private ListAdapter f1834e;

    /* renamed from: i  reason: collision with root package name */
    f0 f1835i;

    /* renamed from: o  reason: collision with root package name */
    private int f1836o;

    /* renamed from: p  reason: collision with root package name */
    private int f1837p;

    /* renamed from: q  reason: collision with root package name */
    private int f1838q;

    /* renamed from: r  reason: collision with root package name */
    private int f1839r;

    /* renamed from: s  reason: collision with root package name */
    private int f1840s;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1841t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f1842u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1843v;

    /* renamed from: w  reason: collision with root package name */
    private int f1844w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1845x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f1846y;

    /* renamed from: z  reason: collision with root package name */
    int f1847z;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            View r10 = j0.this.r();
            if (r10 != null && r10.getWindowToken() != null) {
                j0.this.show();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements AdapterView.OnItemSelectedListener {
        b() {
        }

        @Override // android.widget.AdapterView.OnItemSelectedListener
        public void onItemSelected(AdapterView adapterView, View view, int i10, long j10) {
            f0 f0Var;
            if (i10 != -1 && (f0Var = j0.this.f1835i) != null) {
                f0Var.setListSelectionHidden(false);
            }
        }

        @Override // android.widget.AdapterView.OnItemSelectedListener
        public void onNothingSelected(AdapterView adapterView) {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class c {
        static int a(PopupWindow popupWindow, View view, int i10, boolean z10) {
            return popupWindow.getMaxAvailableHeight(view, i10, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {
        static void a(PopupWindow popupWindow, Rect rect) {
            popupWindow.setEpicenterBounds(rect);
        }

        static void b(PopupWindow popupWindow, boolean z10) {
            popupWindow.setIsClippedToScreen(z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e implements Runnable {
        e() {
        }

        @Override // java.lang.Runnable
        public void run() {
            j0.this.p();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class f extends DataSetObserver {
        f() {
        }

        @Override // android.database.DataSetObserver
        public void onChanged() {
            if (j0.this.isShowing()) {
                j0.this.show();
            }
        }

        @Override // android.database.DataSetObserver
        public void onInvalidated() {
            j0.this.dismiss();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class g implements AbsListView.OnScrollListener {
        g() {
        }

        @Override // android.widget.AbsListView.OnScrollListener
        public void onScroll(AbsListView absListView, int i10, int i11, int i12) {
        }

        @Override // android.widget.AbsListView.OnScrollListener
        public void onScrollStateChanged(AbsListView absListView, int i10) {
            if (i10 == 1 && !j0.this.y() && j0.this.Q.getContentView() != null) {
                j0 j0Var = j0.this;
                j0Var.M.removeCallbacks(j0Var.H);
                j0.this.H.run();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class h implements View.OnTouchListener {
        h() {
        }

        @Override // android.view.View.OnTouchListener
        public boolean onTouch(View view, MotionEvent motionEvent) {
            PopupWindow popupWindow;
            int action = motionEvent.getAction();
            int x10 = (int) motionEvent.getX();
            int y10 = (int) motionEvent.getY();
            if (action == 0 && (popupWindow = j0.this.Q) != null && popupWindow.isShowing() && x10 >= 0 && x10 < j0.this.Q.getWidth() && y10 >= 0 && y10 < j0.this.Q.getHeight()) {
                j0 j0Var = j0.this;
                j0Var.M.postDelayed(j0Var.H, 250L);
                return false;
            } else if (action == 1) {
                j0 j0Var2 = j0.this;
                j0Var2.M.removeCallbacks(j0Var2.H);
                return false;
            } else {
                return false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i implements Runnable {
        i() {
        }

        @Override // java.lang.Runnable
        public void run() {
            f0 f0Var = j0.this.f1835i;
            if (f0Var != null && f0Var.isAttachedToWindow() && j0.this.f1835i.getCount() > j0.this.f1835i.getChildCount()) {
                int childCount = j0.this.f1835i.getChildCount();
                j0 j0Var = j0.this;
                if (childCount <= j0Var.f1847z) {
                    j0Var.Q.setInputMethodMode(2);
                    j0.this.show();
                }
            }
        }
    }

    static {
        if (Build.VERSION.SDK_INT <= 28) {
            try {
                R = PopupWindow.class.getDeclaredMethod("setClipToScreenEnabled", Boolean.TYPE);
            } catch (NoSuchMethodException unused) {
                Log.i("ListPopupWindow", "Could not find method setClipToScreenEnabled() on PopupWindow. Oh well.");
            }
            try {
                S = PopupWindow.class.getDeclaredMethod("setEpicenterBounds", Rect.class);
            } catch (NoSuchMethodException unused2) {
                Log.i("ListPopupWindow", "Could not find method setEpicenterBounds(Rect) on PopupWindow. Oh well.");
            }
        }
    }

    public j0(Context context) {
        this(context, null, f.a.C);
    }

    private void A() {
        View view = this.A;
        if (view != null) {
            ViewParent parent = view.getParent();
            if (parent instanceof ViewGroup) {
                ((ViewGroup) parent).removeView(this.A);
            }
        }
    }

    private void M(boolean z10) {
        if (Build.VERSION.SDK_INT <= 28) {
            Method method = R;
            if (method != null) {
                try {
                    method.invoke(this.Q, Boolean.valueOf(z10));
                    return;
                } catch (Exception unused) {
                    Log.i("ListPopupWindow", "Could not call setClipToScreenEnabled() on PopupWindow. Oh well.");
                    return;
                }
            }
            return;
        }
        d.b(this.Q, z10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    private int o() {
        int i10;
        int i11;
        int makeMeasureSpec;
        int i12;
        boolean z10 = true;
        if (this.f1835i == null) {
            Context context = this.f1833d;
            this.L = new a();
            f0 q10 = q(context, !this.P);
            this.f1835i = q10;
            Drawable drawable = this.E;
            if (drawable != null) {
                q10.setSelector(drawable);
            }
            this.f1835i.setAdapter(this.f1834e);
            this.f1835i.setOnItemClickListener(this.F);
            this.f1835i.setFocusable(true);
            this.f1835i.setFocusableInTouchMode(true);
            this.f1835i.setOnItemSelectedListener(new b());
            this.f1835i.setOnScrollListener(this.J);
            AdapterView.OnItemSelectedListener onItemSelectedListener = this.G;
            if (onItemSelectedListener != null) {
                this.f1835i.setOnItemSelectedListener(onItemSelectedListener);
            }
            f0 f0Var = this.f1835i;
            View view = this.A;
            if (view != null) {
                LinearLayout linearLayout = new LinearLayout(context);
                linearLayout.setOrientation(1);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(-1, 0, 1.0f);
                int i13 = this.B;
                if (i13 != 0) {
                    if (i13 != 1) {
                        Log.e("ListPopupWindow", "Invalid hint position " + this.B);
                    } else {
                        linearLayout.addView(f0Var, layoutParams);
                        linearLayout.addView(view);
                    }
                } else {
                    linearLayout.addView(view);
                    linearLayout.addView(f0Var, layoutParams);
                }
                int i14 = this.f1837p;
                if (i14 >= 0) {
                    i12 = Integer.MIN_VALUE;
                } else {
                    i14 = 0;
                    i12 = 0;
                }
                view.measure(View.MeasureSpec.makeMeasureSpec(i14, i12), 0);
                LinearLayout.LayoutParams layoutParams2 = (LinearLayout.LayoutParams) view.getLayoutParams();
                i10 = view.getMeasuredHeight() + layoutParams2.topMargin + layoutParams2.bottomMargin;
                f0Var = linearLayout;
            } else {
                i10 = 0;
            }
            this.Q.setContentView(f0Var);
        } else {
            ViewGroup viewGroup = (ViewGroup) this.Q.getContentView();
            View view2 = this.A;
            if (view2 != null) {
                LinearLayout.LayoutParams layoutParams3 = (LinearLayout.LayoutParams) view2.getLayoutParams();
                i10 = view2.getMeasuredHeight() + layoutParams3.topMargin + layoutParams3.bottomMargin;
            } else {
                i10 = 0;
            }
        }
        Drawable background = this.Q.getBackground();
        if (background != null) {
            background.getPadding(this.N);
            Rect rect = this.N;
            int i15 = rect.top;
            i11 = rect.bottom + i15;
            if (!this.f1841t) {
                this.f1839r = -i15;
            }
        } else {
            this.N.setEmpty();
            i11 = 0;
        }
        if (this.Q.getInputMethodMode() != 2) {
            z10 = false;
        }
        int s10 = s(r(), this.f1839r, z10);
        if (!this.f1845x && this.f1836o != -1) {
            int i16 = this.f1837p;
            if (i16 != -2) {
                if (i16 != -1) {
                    makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i16, 1073741824);
                } else {
                    int i17 = this.f1833d.getResources().getDisplayMetrics().widthPixels;
                    Rect rect2 = this.N;
                    makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i17 - (rect2.left + rect2.right), 1073741824);
                }
            } else {
                int i18 = this.f1833d.getResources().getDisplayMetrics().widthPixels;
                Rect rect3 = this.N;
                makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(i18 - (rect3.left + rect3.right), Integer.MIN_VALUE);
            }
            int d10 = this.f1835i.d(makeMeasureSpec, 0, -1, s10 - i10, -1);
            if (d10 > 0) {
                i10 += i11 + this.f1835i.getPaddingTop() + this.f1835i.getPaddingBottom();
            }
            return d10 + i10;
        }
        return s10 + i11;
    }

    private int s(View view, int i10, boolean z10) {
        return c.a(this.Q, view, i10, z10);
    }

    public void B(View view) {
        this.D = view;
    }

    public void C(int i10) {
        this.Q.setAnimationStyle(i10);
    }

    public void D(int i10) {
        Drawable background = this.Q.getBackground();
        if (background != null) {
            background.getPadding(this.N);
            Rect rect = this.N;
            this.f1837p = rect.left + rect.right + i10;
            return;
        }
        P(i10);
    }

    public void E(int i10) {
        this.f1844w = i10;
    }

    public void F(Rect rect) {
        Rect rect2;
        if (rect != null) {
            rect2 = new Rect(rect);
        } else {
            rect2 = null;
        }
        this.O = rect2;
    }

    public void G(int i10) {
        this.Q.setInputMethodMode(i10);
    }

    public void H(boolean z10) {
        this.P = z10;
        this.Q.setFocusable(z10);
    }

    public void I(PopupWindow.OnDismissListener onDismissListener) {
        this.Q.setOnDismissListener(onDismissListener);
    }

    public void J(AdapterView.OnItemClickListener onItemClickListener) {
        this.F = onItemClickListener;
    }

    public void K(AdapterView.OnItemSelectedListener onItemSelectedListener) {
        this.G = onItemSelectedListener;
    }

    public void L(boolean z10) {
        this.f1843v = true;
        this.f1842u = z10;
    }

    public void N(int i10) {
        this.B = i10;
    }

    public void O(int i10) {
        f0 f0Var = this.f1835i;
        if (isShowing() && f0Var != null) {
            f0Var.setListSelectionHidden(false);
            f0Var.setSelection(i10);
            if (f0Var.getChoiceMode() != 0) {
                f0Var.setItemChecked(i10, true);
            }
        }
    }

    public void P(int i10) {
        this.f1837p = i10;
    }

    public void b(Drawable drawable) {
        this.Q.setBackgroundDrawable(drawable);
    }

    public int c() {
        return this.f1838q;
    }

    public void d(int i10) {
        this.f1838q = i10;
    }

    @Override // k.e
    public void dismiss() {
        this.Q.dismiss();
        A();
        this.Q.setContentView(null);
        this.f1835i = null;
        this.M.removeCallbacks(this.H);
    }

    public Drawable f() {
        return this.Q.getBackground();
    }

    public void h(int i10) {
        this.f1839r = i10;
        this.f1841t = true;
    }

    @Override // k.e
    public boolean isShowing() {
        return this.Q.isShowing();
    }

    public int k() {
        if (!this.f1841t) {
            return 0;
        }
        return this.f1839r;
    }

    public void l(ListAdapter listAdapter) {
        DataSetObserver dataSetObserver = this.C;
        if (dataSetObserver == null) {
            this.C = new f();
        } else {
            ListAdapter listAdapter2 = this.f1834e;
            if (listAdapter2 != null) {
                listAdapter2.unregisterDataSetObserver(dataSetObserver);
            }
        }
        this.f1834e = listAdapter;
        if (listAdapter != null) {
            listAdapter.registerDataSetObserver(this.C);
        }
        f0 f0Var = this.f1835i;
        if (f0Var != null) {
            f0Var.setAdapter(this.f1834e);
        }
    }

    @Override // k.e
    public ListView n() {
        return this.f1835i;
    }

    public void p() {
        f0 f0Var = this.f1835i;
        if (f0Var != null) {
            f0Var.setListSelectionHidden(true);
            f0Var.requestLayout();
        }
    }

    f0 q(Context context, boolean z10) {
        return new f0(context, z10);
    }

    public View r() {
        return this.D;
    }

    @Override // k.e
    public void show() {
        int i10;
        int i11;
        int i12;
        int i13;
        int o10 = o();
        boolean y10 = y();
        androidx.core.widget.i.b(this.Q, this.f1840s);
        boolean z10 = true;
        if (this.Q.isShowing()) {
            if (r().isAttachedToWindow()) {
                int i14 = this.f1837p;
                if (i14 == -1) {
                    i14 = -1;
                } else if (i14 == -2) {
                    i14 = r().getWidth();
                }
                int i15 = this.f1836o;
                if (i15 == -1) {
                    if (!y10) {
                        o10 = -1;
                    }
                    if (y10) {
                        PopupWindow popupWindow = this.Q;
                        if (this.f1837p == -1) {
                            i13 = -1;
                        } else {
                            i13 = 0;
                        }
                        popupWindow.setWidth(i13);
                        this.Q.setHeight(0);
                    } else {
                        PopupWindow popupWindow2 = this.Q;
                        if (this.f1837p == -1) {
                            i12 = -1;
                        } else {
                            i12 = 0;
                        }
                        popupWindow2.setWidth(i12);
                        this.Q.setHeight(-1);
                    }
                } else if (i15 != -2) {
                    o10 = i15;
                }
                PopupWindow popupWindow3 = this.Q;
                if (this.f1846y || this.f1845x) {
                    z10 = false;
                }
                popupWindow3.setOutsideTouchable(z10);
                PopupWindow popupWindow4 = this.Q;
                View r10 = r();
                int i16 = this.f1838q;
                int i17 = this.f1839r;
                if (i14 < 0) {
                    i10 = -1;
                } else {
                    i10 = i14;
                }
                if (o10 < 0) {
                    i11 = -1;
                } else {
                    i11 = o10;
                }
                popupWindow4.update(r10, i16, i17, i10, i11);
                return;
            }
            return;
        }
        int i18 = this.f1837p;
        if (i18 == -1) {
            i18 = -1;
        } else if (i18 == -2) {
            i18 = r().getWidth();
        }
        int i19 = this.f1836o;
        if (i19 == -1) {
            o10 = -1;
        } else if (i19 != -2) {
            o10 = i19;
        }
        this.Q.setWidth(i18);
        this.Q.setHeight(o10);
        M(true);
        PopupWindow popupWindow5 = this.Q;
        if (this.f1846y || this.f1845x) {
            z10 = false;
        }
        popupWindow5.setOutsideTouchable(z10);
        this.Q.setTouchInterceptor(this.I);
        if (this.f1843v) {
            androidx.core.widget.i.a(this.Q, this.f1842u);
        }
        if (Build.VERSION.SDK_INT <= 28) {
            Method method = S;
            if (method != null) {
                try {
                    method.invoke(this.Q, this.O);
                } catch (Exception e10) {
                    Log.e("ListPopupWindow", "Could not invoke setEpicenterBounds on PopupWindow", e10);
                }
            }
        } else {
            d.a(this.Q, this.O);
        }
        androidx.core.widget.i.c(this.Q, r(), this.f1838q, this.f1839r, this.f1844w);
        this.f1835i.setSelection(-1);
        if (!this.P || this.f1835i.isInTouchMode()) {
            p();
        }
        if (!this.P) {
            this.M.post(this.K);
        }
    }

    public Object t() {
        if (!isShowing()) {
            return null;
        }
        return this.f1835i.getSelectedItem();
    }

    public long u() {
        if (!isShowing()) {
            return Long.MIN_VALUE;
        }
        return this.f1835i.getSelectedItemId();
    }

    public int v() {
        if (!isShowing()) {
            return -1;
        }
        return this.f1835i.getSelectedItemPosition();
    }

    public View w() {
        if (!isShowing()) {
            return null;
        }
        return this.f1835i.getSelectedView();
    }

    public int x() {
        return this.f1837p;
    }

    public boolean y() {
        if (this.Q.getInputMethodMode() == 2) {
            return true;
        }
        return false;
    }

    public boolean z() {
        return this.P;
    }

    public j0(Context context, AttributeSet attributeSet, int i10) {
        this(context, attributeSet, i10, 0);
    }

    public j0(Context context, AttributeSet attributeSet, int i10, int i11) {
        this.f1836o = -2;
        this.f1837p = -2;
        this.f1840s = RNCWebViewManager.COMMAND_CLEAR_HISTORY;
        this.f1844w = 0;
        this.f1845x = false;
        this.f1846y = false;
        this.f1847z = Integer.MAX_VALUE;
        this.B = 0;
        this.H = new i();
        this.I = new h();
        this.J = new g();
        this.K = new e();
        this.N = new Rect();
        this.f1833d = context;
        this.M = new Handler(context.getMainLooper());
        TypedArray obtainStyledAttributes = context.obtainStyledAttributes(attributeSet, f.j.f22092l1, i10, i11);
        this.f1838q = obtainStyledAttributes.getDimensionPixelOffset(f.j.f22097m1, 0);
        int dimensionPixelOffset = obtainStyledAttributes.getDimensionPixelOffset(f.j.f22102n1, 0);
        this.f1839r = dimensionPixelOffset;
        if (dimensionPixelOffset != 0) {
            this.f1841t = true;
        }
        obtainStyledAttributes.recycle();
        o oVar = new o(context, attributeSet, i10, i11);
        this.Q = oVar;
        oVar.setInputMethodMode(1);
    }
}
