package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.ColorStateList;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Parcel;
import android.os.Parcelable;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.ContextThemeWrapper;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import androidx.annotation.NonNull;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.ActionMenuView;
import androidx.core.view.MenuHostHelper;
import androidx.core.view.MenuProvider;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class Toolbar extends ViewGroup implements androidx.core.view.n {
    private int A;
    private int B;
    private int C;
    private int D;
    private o0 E;
    private int F;
    private int G;
    private int H;
    private CharSequence I;
    private CharSequence J;
    private ColorStateList K;
    private ColorStateList L;
    private boolean M;
    private boolean N;
    private final ArrayList O;
    private final ArrayList P;
    private final int[] Q;
    final MenuHostHelper R;
    private ArrayList S;
    h T;
    private final ActionMenuView.e U;
    private z0 V;
    private androidx.appcompat.widget.c W;

    /* renamed from: a0  reason: collision with root package name */
    private f f1528a0;

    /* renamed from: b0  reason: collision with root package name */
    private j.a f1529b0;

    /* renamed from: c0  reason: collision with root package name */
    e.a f1530c0;

    /* renamed from: d  reason: collision with root package name */
    ActionMenuView f1531d;

    /* renamed from: d0  reason: collision with root package name */
    private boolean f1532d0;

    /* renamed from: e  reason: collision with root package name */
    private TextView f1533e;

    /* renamed from: e0  reason: collision with root package name */
    private OnBackInvokedCallback f1534e0;

    /* renamed from: f0  reason: collision with root package name */
    private OnBackInvokedDispatcher f1535f0;

    /* renamed from: g0  reason: collision with root package name */
    private boolean f1536g0;

    /* renamed from: h0  reason: collision with root package name */
    private final Runnable f1537h0;

    /* renamed from: i  reason: collision with root package name */
    private TextView f1538i;

    /* renamed from: o  reason: collision with root package name */
    private ImageButton f1539o;

    /* renamed from: p  reason: collision with root package name */
    private ImageView f1540p;

    /* renamed from: q  reason: collision with root package name */
    private Drawable f1541q;

    /* renamed from: r  reason: collision with root package name */
    private CharSequence f1542r;

    /* renamed from: s  reason: collision with root package name */
    ImageButton f1543s;

    /* renamed from: t  reason: collision with root package name */
    View f1544t;

    /* renamed from: u  reason: collision with root package name */
    private Context f1545u;

    /* renamed from: v  reason: collision with root package name */
    private int f1546v;

    /* renamed from: w  reason: collision with root package name */
    private int f1547w;

    /* renamed from: x  reason: collision with root package name */
    private int f1548x;

    /* renamed from: y  reason: collision with root package name */
    int f1549y;

    /* renamed from: z  reason: collision with root package name */
    private int f1550z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ActionMenuView.e {
        a() {
        }

        @Override // androidx.appcompat.widget.ActionMenuView.e
        public boolean onMenuItemClick(MenuItem menuItem) {
            if (Toolbar.this.R.h(menuItem)) {
                return true;
            }
            h hVar = Toolbar.this.T;
            if (hVar != null) {
                return hVar.onMenuItemClick(menuItem);
            }
            return false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Runnable {
        b() {
        }

        @Override // java.lang.Runnable
        public void run() {
            Toolbar.this.Q();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements e.a {
        c() {
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            e.a aVar = Toolbar.this.f1530c0;
            if (aVar != null && aVar.a(eVar, menuItem)) {
                return true;
            }
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (!Toolbar.this.f1531d.H()) {
                Toolbar.this.R.i(eVar);
            }
            e.a aVar = Toolbar.this.f1530c0;
            if (aVar != null) {
                aVar.b(eVar);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements View.OnClickListener {
        d() {
        }

        @Override // android.view.View.OnClickListener
        public void onClick(View view) {
            Toolbar.this.e();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class e {
        static OnBackInvokedDispatcher a(@NonNull View view) {
            return view.findOnBackInvokedDispatcher();
        }

        @NonNull
        static OnBackInvokedCallback b(@NonNull final Runnable runnable) {
            Objects.requireNonNull(runnable);
            return new OnBackInvokedCallback() { // from class: androidx.appcompat.widget.y0
                public final void onBackInvoked() {
                    runnable.run();
                }
            };
        }

        static void c(@NonNull Object obj, @NonNull Object obj2) {
            ((OnBackInvokedDispatcher) obj).registerOnBackInvokedCallback(1000000, (OnBackInvokedCallback) obj2);
        }

        static void d(@NonNull Object obj, @NonNull Object obj2) {
            ((OnBackInvokedDispatcher) obj).unregisterOnBackInvokedCallback((OnBackInvokedCallback) obj2);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class f implements androidx.appcompat.view.menu.j {

        /* renamed from: d  reason: collision with root package name */
        androidx.appcompat.view.menu.e f1555d;

        /* renamed from: e  reason: collision with root package name */
        androidx.appcompat.view.menu.g f1556e;

        f() {
        }

        @Override // androidx.appcompat.view.menu.j
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
        }

        @Override // androidx.appcompat.view.menu.j
        public boolean b(androidx.appcompat.view.menu.e eVar, androidx.appcompat.view.menu.g gVar) {
            Toolbar.this.g();
            ViewParent parent = Toolbar.this.f1543s.getParent();
            Toolbar toolbar = Toolbar.this;
            if (parent != toolbar) {
                if (parent instanceof ViewGroup) {
                    ((ViewGroup) parent).removeView(toolbar.f1543s);
                }
                Toolbar toolbar2 = Toolbar.this;
                toolbar2.addView(toolbar2.f1543s);
            }
            Toolbar.this.f1544t = gVar.getActionView();
            this.f1556e = gVar;
            ViewParent parent2 = Toolbar.this.f1544t.getParent();
            Toolbar toolbar3 = Toolbar.this;
            if (parent2 != toolbar3) {
                if (parent2 instanceof ViewGroup) {
                    ((ViewGroup) parent2).removeView(toolbar3.f1544t);
                }
                g generateDefaultLayoutParams = Toolbar.this.generateDefaultLayoutParams();
                Toolbar toolbar4 = Toolbar.this;
                generateDefaultLayoutParams.f893a = (toolbar4.f1549y & 112) | 8388611;
                generateDefaultLayoutParams.f1558b = 2;
                toolbar4.f1544t.setLayoutParams(generateDefaultLayoutParams);
                Toolbar toolbar5 = Toolbar.this;
                toolbar5.addView(toolbar5.f1544t);
            }
            Toolbar.this.I();
            Toolbar.this.requestLayout();
            gVar.r(true);
            View view = Toolbar.this.f1544t;
            if (view instanceof androidx.appcompat.view.b) {
                ((androidx.appcompat.view.b) view).onActionViewExpanded();
            }
            Toolbar.this.R();
            return true;
        }

        @Override // androidx.appcompat.view.menu.j
        public boolean d(androidx.appcompat.view.menu.m mVar) {
            return false;
        }

        @Override // androidx.appcompat.view.menu.j
        public void e(boolean z10) {
            if (this.f1556e != null) {
                androidx.appcompat.view.menu.e eVar = this.f1555d;
                if (eVar != null) {
                    int size = eVar.size();
                    for (int i10 = 0; i10 < size; i10++) {
                        if (this.f1555d.getItem(i10) == this.f1556e) {
                            return;
                        }
                    }
                }
                g(this.f1555d, this.f1556e);
            }
        }

        @Override // androidx.appcompat.view.menu.j
        public boolean f() {
            return false;
        }

        @Override // androidx.appcompat.view.menu.j
        public boolean g(androidx.appcompat.view.menu.e eVar, androidx.appcompat.view.menu.g gVar) {
            View view = Toolbar.this.f1544t;
            if (view instanceof androidx.appcompat.view.b) {
                ((androidx.appcompat.view.b) view).onActionViewCollapsed();
            }
            Toolbar toolbar = Toolbar.this;
            toolbar.removeView(toolbar.f1544t);
            Toolbar toolbar2 = Toolbar.this;
            toolbar2.removeView(toolbar2.f1543s);
            Toolbar toolbar3 = Toolbar.this;
            toolbar3.f1544t = null;
            toolbar3.a();
            this.f1556e = null;
            Toolbar.this.requestLayout();
            gVar.r(false);
            Toolbar.this.R();
            return true;
        }

        @Override // androidx.appcompat.view.menu.j
        public void h(Context context, androidx.appcompat.view.menu.e eVar) {
            androidx.appcompat.view.menu.g gVar;
            androidx.appcompat.view.menu.e eVar2 = this.f1555d;
            if (eVar2 != null && (gVar = this.f1556e) != null) {
                eVar2.f(gVar);
            }
            this.f1555d = eVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface h {
        boolean onMenuItemClick(MenuItem menuItem);
    }

    public Toolbar(Context context) {
        this(context, null);
    }

    private int C(View view, int i10, int[] iArr, int i11) {
        g gVar = (g) view.getLayoutParams();
        int i12 = ((ViewGroup.MarginLayoutParams) gVar).leftMargin - iArr[0];
        int max = i10 + Math.max(0, i12);
        iArr[0] = Math.max(0, -i12);
        int q10 = q(view, i11);
        int measuredWidth = view.getMeasuredWidth();
        view.layout(max, q10, max + measuredWidth, view.getMeasuredHeight() + q10);
        return max + measuredWidth + ((ViewGroup.MarginLayoutParams) gVar).rightMargin;
    }

    private int D(View view, int i10, int[] iArr, int i11) {
        g gVar = (g) view.getLayoutParams();
        int i12 = ((ViewGroup.MarginLayoutParams) gVar).rightMargin - iArr[1];
        int max = i10 - Math.max(0, i12);
        iArr[1] = Math.max(0, -i12);
        int q10 = q(view, i11);
        int measuredWidth = view.getMeasuredWidth();
        view.layout(max - measuredWidth, q10, max, view.getMeasuredHeight() + q10);
        return max - (measuredWidth + ((ViewGroup.MarginLayoutParams) gVar).leftMargin);
    }

    private int E(View view, int i10, int i11, int i12, int i13, int[] iArr) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        int i14 = marginLayoutParams.leftMargin - iArr[0];
        int i15 = marginLayoutParams.rightMargin - iArr[1];
        int max = Math.max(0, i14) + Math.max(0, i15);
        iArr[0] = Math.max(0, -i14);
        iArr[1] = Math.max(0, -i15);
        view.measure(ViewGroup.getChildMeasureSpec(i10, getPaddingLeft() + getPaddingRight() + max + i11, marginLayoutParams.width), ViewGroup.getChildMeasureSpec(i12, getPaddingTop() + getPaddingBottom() + marginLayoutParams.topMargin + marginLayoutParams.bottomMargin + i13, marginLayoutParams.height));
        return view.getMeasuredWidth() + max;
    }

    private void F(View view, int i10, int i11, int i12, int i13, int i14) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        int childMeasureSpec = ViewGroup.getChildMeasureSpec(i10, getPaddingLeft() + getPaddingRight() + marginLayoutParams.leftMargin + marginLayoutParams.rightMargin + i11, marginLayoutParams.width);
        int childMeasureSpec2 = ViewGroup.getChildMeasureSpec(i12, getPaddingTop() + getPaddingBottom() + marginLayoutParams.topMargin + marginLayoutParams.bottomMargin + i13, marginLayoutParams.height);
        int mode = View.MeasureSpec.getMode(childMeasureSpec2);
        if (mode != 1073741824 && i14 >= 0) {
            if (mode != 0) {
                i14 = Math.min(View.MeasureSpec.getSize(childMeasureSpec2), i14);
            }
            childMeasureSpec2 = View.MeasureSpec.makeMeasureSpec(i14, 1073741824);
        }
        view.measure(childMeasureSpec, childMeasureSpec2);
    }

    private void G() {
        Menu menu = getMenu();
        ArrayList<MenuItem> currentMenuItems = getCurrentMenuItems();
        this.R.f(menu, getMenuInflater());
        ArrayList<MenuItem> currentMenuItems2 = getCurrentMenuItems();
        currentMenuItems2.removeAll(currentMenuItems);
        this.S = currentMenuItems2;
    }

    private void H() {
        removeCallbacks(this.f1537h0);
        post(this.f1537h0);
    }

    private boolean O() {
        if (!this.f1532d0) {
            return false;
        }
        int childCount = getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = getChildAt(i10);
            if (P(childAt) && childAt.getMeasuredWidth() > 0 && childAt.getMeasuredHeight() > 0) {
                return false;
            }
        }
        return true;
    }

    private boolean P(View view) {
        if (view != null && view.getParent() == this && view.getVisibility() != 8) {
            return true;
        }
        return false;
    }

    private void b(List list, int i10) {
        boolean z10;
        if (getLayoutDirection() == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        int childCount = getChildCount();
        int b10 = androidx.core.view.j.b(i10, getLayoutDirection());
        list.clear();
        if (z10) {
            for (int i11 = childCount - 1; i11 >= 0; i11--) {
                View childAt = getChildAt(i11);
                g gVar = (g) childAt.getLayoutParams();
                if (gVar.f1558b == 0 && P(childAt) && p(gVar.f893a) == b10) {
                    list.add(childAt);
                }
            }
            return;
        }
        for (int i12 = 0; i12 < childCount; i12++) {
            View childAt2 = getChildAt(i12);
            g gVar2 = (g) childAt2.getLayoutParams();
            if (gVar2.f1558b == 0 && P(childAt2) && p(gVar2.f893a) == b10) {
                list.add(childAt2);
            }
        }
    }

    private void c(View view, boolean z10) {
        g gVar;
        ViewGroup.LayoutParams layoutParams = view.getLayoutParams();
        if (layoutParams == null) {
            gVar = generateDefaultLayoutParams();
        } else if (!checkLayoutParams(layoutParams)) {
            gVar = generateLayoutParams(layoutParams);
        } else {
            gVar = (g) layoutParams;
        }
        gVar.f1558b = 1;
        if (z10 && this.f1544t != null) {
            view.setLayoutParams(gVar);
            this.P.add(view);
            return;
        }
        addView(view, gVar);
    }

    private ArrayList<MenuItem> getCurrentMenuItems() {
        ArrayList<MenuItem> arrayList = new ArrayList<>();
        Menu menu = getMenu();
        for (int i10 = 0; i10 < menu.size(); i10++) {
            arrayList.add(menu.getItem(i10));
        }
        return arrayList;
    }

    private MenuInflater getMenuInflater() {
        return new androidx.appcompat.view.e(getContext());
    }

    private void h() {
        if (this.E == null) {
            this.E = new o0();
        }
    }

    private void i() {
        if (this.f1540p == null) {
            this.f1540p = new m(getContext());
        }
    }

    private void j() {
        k();
        if (this.f1531d.L() == null) {
            androidx.appcompat.view.menu.e eVar = (androidx.appcompat.view.menu.e) this.f1531d.getMenu();
            if (this.f1528a0 == null) {
                this.f1528a0 = new f();
            }
            this.f1531d.setExpandedActionViewsExclusive(true);
            eVar.c(this.f1528a0, this.f1545u);
            R();
        }
    }

    private void k() {
        if (this.f1531d == null) {
            ActionMenuView actionMenuView = new ActionMenuView(getContext());
            this.f1531d = actionMenuView;
            actionMenuView.setPopupTheme(this.f1546v);
            this.f1531d.setOnMenuItemClickListener(this.U);
            this.f1531d.M(this.f1529b0, new c());
            g generateDefaultLayoutParams = generateDefaultLayoutParams();
            generateDefaultLayoutParams.f893a = (this.f1549y & 112) | 8388613;
            this.f1531d.setLayoutParams(generateDefaultLayoutParams);
            c(this.f1531d, false);
        }
    }

    private void l() {
        if (this.f1539o == null) {
            this.f1539o = new l(getContext(), null, f.a.L);
            g generateDefaultLayoutParams = generateDefaultLayoutParams();
            generateDefaultLayoutParams.f893a = (this.f1549y & 112) | 8388611;
            this.f1539o.setLayoutParams(generateDefaultLayoutParams);
        }
    }

    private int p(int i10) {
        int layoutDirection = getLayoutDirection();
        int b10 = androidx.core.view.j.b(i10, layoutDirection) & 7;
        if (b10 != 1 && b10 != 3 && b10 != 5) {
            if (layoutDirection != 1) {
                return 3;
            }
            return 5;
        }
        return b10;
    }

    private int q(View view, int i10) {
        int i11;
        g gVar = (g) view.getLayoutParams();
        int measuredHeight = view.getMeasuredHeight();
        if (i10 > 0) {
            i11 = (measuredHeight - i10) / 2;
        } else {
            i11 = 0;
        }
        int r10 = r(gVar.f893a);
        if (r10 != 48) {
            if (r10 != 80) {
                int paddingTop = getPaddingTop();
                int paddingBottom = getPaddingBottom();
                int height = getHeight();
                int i12 = (((height - paddingTop) - paddingBottom) - measuredHeight) / 2;
                int i13 = ((ViewGroup.MarginLayoutParams) gVar).topMargin;
                if (i12 < i13) {
                    i12 = i13;
                } else {
                    int i14 = (((height - paddingBottom) - measuredHeight) - i12) - paddingTop;
                    int i15 = ((ViewGroup.MarginLayoutParams) gVar).bottomMargin;
                    if (i14 < i15) {
                        i12 = Math.max(0, i12 - (i15 - i14));
                    }
                }
                return paddingTop + i12;
            }
            return (((getHeight() - getPaddingBottom()) - measuredHeight) - ((ViewGroup.MarginLayoutParams) gVar).bottomMargin) - i11;
        }
        return getPaddingTop() - i11;
    }

    private int r(int i10) {
        int i11 = i10 & 112;
        if (i11 != 16 && i11 != 48 && i11 != 80) {
            return this.H & 112;
        }
        return i11;
    }

    private int s(View view) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        return marginLayoutParams.getMarginStart() + marginLayoutParams.getMarginEnd();
    }

    private int t(View view) {
        ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) view.getLayoutParams();
        return marginLayoutParams.topMargin + marginLayoutParams.bottomMargin;
    }

    private int u(List list, int[] iArr) {
        int i10 = iArr[0];
        int i11 = iArr[1];
        int size = list.size();
        int i12 = 0;
        int i13 = 0;
        while (i12 < size) {
            View view = (View) list.get(i12);
            g gVar = (g) view.getLayoutParams();
            int i14 = ((ViewGroup.MarginLayoutParams) gVar).leftMargin - i10;
            int i15 = ((ViewGroup.MarginLayoutParams) gVar).rightMargin - i11;
            int max = Math.max(0, i14);
            int max2 = Math.max(0, i15);
            int max3 = Math.max(0, -i14);
            int max4 = Math.max(0, -i15);
            i13 += max + view.getMeasuredWidth() + max2;
            i12++;
            i11 = max4;
            i10 = max3;
        }
        return i13;
    }

    private boolean z(View view) {
        if (view.getParent() != this && !this.P.contains(view)) {
            return false;
        }
        return true;
    }

    public boolean A() {
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null && actionMenuView.G()) {
            return true;
        }
        return false;
    }

    public boolean B() {
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null && actionMenuView.H()) {
            return true;
        }
        return false;
    }

    void I() {
        for (int childCount = getChildCount() - 1; childCount >= 0; childCount--) {
            View childAt = getChildAt(childCount);
            if (((g) childAt.getLayoutParams()).f1558b != 2 && childAt != this.f1531d) {
                removeViewAt(childCount);
                this.P.add(childAt);
            }
        }
    }

    public void J(int i10, int i11) {
        h();
        this.E.g(i10, i11);
    }

    public void K(androidx.appcompat.view.menu.e eVar, androidx.appcompat.widget.c cVar) {
        if (eVar != null || this.f1531d != null) {
            k();
            androidx.appcompat.view.menu.e L = this.f1531d.L();
            if (L == eVar) {
                return;
            }
            if (L != null) {
                L.P(this.W);
                L.P(this.f1528a0);
            }
            if (this.f1528a0 == null) {
                this.f1528a0 = new f();
            }
            cVar.G(true);
            if (eVar != null) {
                eVar.c(cVar, this.f1545u);
                eVar.c(this.f1528a0, this.f1545u);
            } else {
                cVar.h(this.f1545u, null);
                this.f1528a0.h(this.f1545u, null);
                cVar.e(true);
                this.f1528a0.e(true);
            }
            this.f1531d.setPopupTheme(this.f1546v);
            this.f1531d.setPresenter(cVar);
            this.W = cVar;
            R();
        }
    }

    public void L(j.a aVar, e.a aVar2) {
        this.f1529b0 = aVar;
        this.f1530c0 = aVar2;
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null) {
            actionMenuView.M(aVar, aVar2);
        }
    }

    public void M(Context context, int i10) {
        this.f1548x = i10;
        TextView textView = this.f1538i;
        if (textView != null) {
            textView.setTextAppearance(context, i10);
        }
    }

    public void N(Context context, int i10) {
        this.f1547w = i10;
        TextView textView = this.f1533e;
        if (textView != null) {
            textView.setTextAppearance(context, i10);
        }
    }

    public boolean Q() {
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null && actionMenuView.N()) {
            return true;
        }
        return false;
    }

    void R() {
        boolean z10;
        OnBackInvokedDispatcher onBackInvokedDispatcher;
        if (Build.VERSION.SDK_INT >= 33) {
            OnBackInvokedDispatcher a10 = e.a(this);
            if (v() && a10 != null && isAttachedToWindow() && this.f1536g0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f1535f0 == null) {
                if (this.f1534e0 == null) {
                    this.f1534e0 = e.b(new Runnable() { // from class: androidx.appcompat.widget.w0
                        @Override // java.lang.Runnable
                        public final void run() {
                            Toolbar.this.e();
                        }
                    });
                }
                e.c(a10, this.f1534e0);
                this.f1535f0 = a10;
            } else if (!z10 && (onBackInvokedDispatcher = this.f1535f0) != null) {
                e.d(onBackInvokedDispatcher, this.f1534e0);
                this.f1535f0 = null;
            }
        }
    }

    void a() {
        for (int size = this.P.size() - 1; size >= 0; size--) {
            addView((View) this.P.get(size));
        }
        this.P.clear();
    }

    @Override // androidx.core.view.n
    public void addMenuProvider(MenuProvider menuProvider) {
        this.R.c(menuProvider);
    }

    @Override // android.view.ViewGroup
    protected boolean checkLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (super.checkLayoutParams(layoutParams) && (layoutParams instanceof g)) {
            return true;
        }
        return false;
    }

    public boolean d() {
        ActionMenuView actionMenuView;
        if (getVisibility() == 0 && (actionMenuView = this.f1531d) != null && actionMenuView.I()) {
            return true;
        }
        return false;
    }

    public void e() {
        androidx.appcompat.view.menu.g gVar;
        f fVar = this.f1528a0;
        if (fVar == null) {
            gVar = null;
        } else {
            gVar = fVar.f1556e;
        }
        if (gVar != null) {
            gVar.collapseActionView();
        }
    }

    public void f() {
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null) {
            actionMenuView.z();
        }
    }

    void g() {
        if (this.f1543s == null) {
            l lVar = new l(getContext(), null, f.a.L);
            this.f1543s = lVar;
            lVar.setImageDrawable(this.f1541q);
            this.f1543s.setContentDescription(this.f1542r);
            g generateDefaultLayoutParams = generateDefaultLayoutParams();
            generateDefaultLayoutParams.f893a = (this.f1549y & 112) | 8388611;
            generateDefaultLayoutParams.f1558b = 2;
            this.f1543s.setLayoutParams(generateDefaultLayoutParams);
            this.f1543s.setOnClickListener(new d());
        }
    }

    public CharSequence getCollapseContentDescription() {
        ImageButton imageButton = this.f1543s;
        if (imageButton != null) {
            return imageButton.getContentDescription();
        }
        return null;
    }

    public Drawable getCollapseIcon() {
        ImageButton imageButton = this.f1543s;
        if (imageButton != null) {
            return imageButton.getDrawable();
        }
        return null;
    }

    public int getContentInsetEnd() {
        o0 o0Var = this.E;
        if (o0Var != null) {
            return o0Var.a();
        }
        return 0;
    }

    public int getContentInsetEndWithActions() {
        int i10 = this.G;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        return getContentInsetEnd();
    }

    public int getContentInsetLeft() {
        o0 o0Var = this.E;
        if (o0Var != null) {
            return o0Var.b();
        }
        return 0;
    }

    public int getContentInsetRight() {
        o0 o0Var = this.E;
        if (o0Var != null) {
            return o0Var.c();
        }
        return 0;
    }

    public int getContentInsetStart() {
        o0 o0Var = this.E;
        if (o0Var != null) {
            return o0Var.d();
        }
        return 0;
    }

    public int getContentInsetStartWithNavigation() {
        int i10 = this.F;
        if (i10 != Integer.MIN_VALUE) {
            return i10;
        }
        return getContentInsetStart();
    }

    public int getCurrentContentInsetEnd() {
        androidx.appcompat.view.menu.e L;
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null && (L = actionMenuView.L()) != null && L.hasVisibleItems()) {
            return Math.max(getContentInsetEnd(), Math.max(this.G, 0));
        }
        return getContentInsetEnd();
    }

    public int getCurrentContentInsetLeft() {
        if (getLayoutDirection() == 1) {
            return getCurrentContentInsetEnd();
        }
        return getCurrentContentInsetStart();
    }

    public int getCurrentContentInsetRight() {
        if (getLayoutDirection() == 1) {
            return getCurrentContentInsetStart();
        }
        return getCurrentContentInsetEnd();
    }

    public int getCurrentContentInsetStart() {
        if (getNavigationIcon() != null) {
            return Math.max(getContentInsetStart(), Math.max(this.F, 0));
        }
        return getContentInsetStart();
    }

    public Drawable getLogo() {
        ImageView imageView = this.f1540p;
        if (imageView != null) {
            return imageView.getDrawable();
        }
        return null;
    }

    public CharSequence getLogoDescription() {
        ImageView imageView = this.f1540p;
        if (imageView != null) {
            return imageView.getContentDescription();
        }
        return null;
    }

    public Menu getMenu() {
        j();
        return this.f1531d.getMenu();
    }

    View getNavButtonView() {
        return this.f1539o;
    }

    public CharSequence getNavigationContentDescription() {
        ImageButton imageButton = this.f1539o;
        if (imageButton != null) {
            return imageButton.getContentDescription();
        }
        return null;
    }

    public Drawable getNavigationIcon() {
        ImageButton imageButton = this.f1539o;
        if (imageButton != null) {
            return imageButton.getDrawable();
        }
        return null;
    }

    androidx.appcompat.widget.c getOuterActionMenuPresenter() {
        return this.W;
    }

    public Drawable getOverflowIcon() {
        j();
        return this.f1531d.getOverflowIcon();
    }

    Context getPopupContext() {
        return this.f1545u;
    }

    public int getPopupTheme() {
        return this.f1546v;
    }

    public CharSequence getSubtitle() {
        return this.J;
    }

    final TextView getSubtitleTextView() {
        return this.f1538i;
    }

    public CharSequence getTitle() {
        return this.I;
    }

    public int getTitleMarginBottom() {
        return this.D;
    }

    public int getTitleMarginEnd() {
        return this.B;
    }

    public int getTitleMarginStart() {
        return this.A;
    }

    public int getTitleMarginTop() {
        return this.C;
    }

    final TextView getTitleTextView() {
        return this.f1533e;
    }

    public z getWrapper() {
        if (this.V == null) {
            this.V = new z0(this, true);
        }
        return this.V;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    /* renamed from: m */
    public g generateDefaultLayoutParams() {
        return new g(-2, -2);
    }

    @Override // android.view.ViewGroup
    /* renamed from: n */
    public g generateLayoutParams(AttributeSet attributeSet) {
        return new g(getContext(), attributeSet);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup
    /* renamed from: o */
    public g generateLayoutParams(ViewGroup.LayoutParams layoutParams) {
        if (layoutParams instanceof g) {
            return new g((g) layoutParams);
        }
        if (layoutParams instanceof ActionBar.a) {
            return new g((ActionBar.a) layoutParams);
        }
        if (layoutParams instanceof ViewGroup.MarginLayoutParams) {
            return new g((ViewGroup.MarginLayoutParams) layoutParams);
        }
        return new g(layoutParams);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // android.view.ViewGroup, android.view.View
    public void onAttachedToWindow() {
        super.onAttachedToWindow();
        R();
    }

    @Override // android.view.ViewGroup, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        removeCallbacks(this.f1537h0);
        R();
    }

    @Override // android.view.View
    public boolean onHoverEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 9) {
            this.N = false;
        }
        if (!this.N) {
            boolean onHoverEvent = super.onHoverEvent(motionEvent);
            if (actionMasked == 9 && !onHoverEvent) {
                this.N = true;
            }
        }
        if (actionMasked == 10 || actionMasked == 3) {
            this.N = false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: Removed duplicated region for block: B:105:0x0297 A[LOOP:0: B:104:0x0295->B:105:0x0297, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:108:0x02b5 A[LOOP:1: B:107:0x02b3->B:108:0x02b5, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:112:0x02dd  */
    /* JADX WARN: Removed duplicated region for block: B:117:0x02ec A[LOOP:2: B:116:0x02ea->B:117:0x02ec, LOOP_END] */
    /* JADX WARN: Removed duplicated region for block: B:19:0x0060  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x0077  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x00b4  */
    /* JADX WARN: Removed duplicated region for block: B:34:0x00cb  */
    /* JADX WARN: Removed duplicated region for block: B:39:0x00e8  */
    /* JADX WARN: Removed duplicated region for block: B:40:0x00ff  */
    /* JADX WARN: Removed duplicated region for block: B:42:0x0104  */
    /* JADX WARN: Removed duplicated region for block: B:43:0x011d  */
    /* JADX WARN: Removed duplicated region for block: B:49:0x0129  */
    /* JADX WARN: Removed duplicated region for block: B:50:0x012c  */
    /* JADX WARN: Removed duplicated region for block: B:52:0x0130  */
    /* JADX WARN: Removed duplicated region for block: B:53:0x0133  */
    /* JADX WARN: Removed duplicated region for block: B:65:0x0166  */
    /* JADX WARN: Removed duplicated region for block: B:75:0x01a2  */
    /* JADX WARN: Removed duplicated region for block: B:77:0x01af  */
    /* JADX WARN: Removed duplicated region for block: B:90:0x021e  */
    @Override // android.view.ViewGroup, android.view.View
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void onLayout(boolean r20, int r21, int r22, int r23, int r24) {
        /*
            Method dump skipped, instructions count: 769
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.widget.Toolbar.onLayout(boolean, int, int, int, int):void");
    }

    @Override // android.view.View
    protected void onMeasure(int i10, int i11) {
        int i12;
        int i13;
        int i14;
        int i15;
        int[] iArr;
        int i16;
        int i17;
        int i18;
        int[] iArr2 = this.Q;
        boolean b10 = g1.b(this);
        int i19 = !b10 ? 1 : 0;
        int i20 = 0;
        if (P(this.f1539o)) {
            F(this.f1539o, i10, 0, i11, 0, this.f1550z);
            i12 = this.f1539o.getMeasuredWidth() + s(this.f1539o);
            i13 = Math.max(0, this.f1539o.getMeasuredHeight() + t(this.f1539o));
            i14 = View.combineMeasuredStates(0, this.f1539o.getMeasuredState());
        } else {
            i12 = 0;
            i13 = 0;
            i14 = 0;
        }
        if (P(this.f1543s)) {
            F(this.f1543s, i10, 0, i11, 0, this.f1550z);
            i12 = this.f1543s.getMeasuredWidth() + s(this.f1543s);
            i13 = Math.max(i13, this.f1543s.getMeasuredHeight() + t(this.f1543s));
            i14 = View.combineMeasuredStates(i14, this.f1543s.getMeasuredState());
        }
        int currentContentInsetStart = getCurrentContentInsetStart();
        int max = Math.max(currentContentInsetStart, i12);
        iArr2[b10 ? 1 : 0] = Math.max(0, currentContentInsetStart - i12);
        if (P(this.f1531d)) {
            F(this.f1531d, i10, max, i11, 0, this.f1550z);
            i15 = this.f1531d.getMeasuredWidth() + s(this.f1531d);
            i13 = Math.max(i13, this.f1531d.getMeasuredHeight() + t(this.f1531d));
            i14 = View.combineMeasuredStates(i14, this.f1531d.getMeasuredState());
        } else {
            i15 = 0;
        }
        int currentContentInsetEnd = getCurrentContentInsetEnd();
        int max2 = max + Math.max(currentContentInsetEnd, i15);
        iArr2[i19] = Math.max(0, currentContentInsetEnd - i15);
        if (P(this.f1544t)) {
            iArr = iArr2;
            max2 += E(this.f1544t, i10, max2, i11, 0, iArr);
            i13 = Math.max(i13, this.f1544t.getMeasuredHeight() + t(this.f1544t));
            i14 = View.combineMeasuredStates(i14, this.f1544t.getMeasuredState());
        } else {
            iArr = iArr2;
        }
        if (P(this.f1540p)) {
            max2 += E(this.f1540p, i10, max2, i11, 0, iArr);
            i13 = Math.max(i13, this.f1540p.getMeasuredHeight() + t(this.f1540p));
            i14 = View.combineMeasuredStates(i14, this.f1540p.getMeasuredState());
        }
        int childCount = getChildCount();
        for (int i21 = 0; i21 < childCount; i21++) {
            View childAt = getChildAt(i21);
            if (((g) childAt.getLayoutParams()).f1558b == 0 && P(childAt)) {
                max2 += E(childAt, i10, max2, i11, 0, iArr);
                int max3 = Math.max(i13, childAt.getMeasuredHeight() + t(childAt));
                i14 = View.combineMeasuredStates(i14, childAt.getMeasuredState());
                i13 = max3;
            } else {
                max2 = max2;
            }
        }
        int i22 = max2;
        int i23 = this.C + this.D;
        int i24 = this.A + this.B;
        if (P(this.f1533e)) {
            E(this.f1533e, i10, i22 + i24, i11, i23, iArr);
            int measuredWidth = this.f1533e.getMeasuredWidth() + s(this.f1533e);
            int measuredHeight = this.f1533e.getMeasuredHeight() + t(this.f1533e);
            i16 = measuredWidth;
            i17 = View.combineMeasuredStates(i14, this.f1533e.getMeasuredState());
            i18 = measuredHeight;
        } else {
            i16 = 0;
            i17 = i14;
            i18 = 0;
        }
        if (P(this.f1538i)) {
            i16 = Math.max(i16, E(this.f1538i, i10, i22 + i24, i11, i23 + i18, iArr));
            i18 += this.f1538i.getMeasuredHeight() + t(this.f1538i);
            i17 = View.combineMeasuredStates(i17, this.f1538i.getMeasuredState());
        }
        int max4 = Math.max(i13, i18);
        int paddingLeft = i22 + i16 + getPaddingLeft() + getPaddingRight();
        int paddingTop = max4 + getPaddingTop() + getPaddingBottom();
        int resolveSizeAndState = View.resolveSizeAndState(Math.max(paddingLeft, getSuggestedMinimumWidth()), i10, (-16777216) & i17);
        int resolveSizeAndState2 = View.resolveSizeAndState(Math.max(paddingTop, getSuggestedMinimumHeight()), i11, i17 << 16);
        if (!O()) {
            i20 = resolveSizeAndState2;
        }
        setMeasuredDimension(resolveSizeAndState, i20);
    }

    @Override // android.view.View
    protected void onRestoreInstanceState(Parcelable parcelable) {
        androidx.appcompat.view.menu.e eVar;
        MenuItem findItem;
        if (!(parcelable instanceof i)) {
            super.onRestoreInstanceState(parcelable);
            return;
        }
        i iVar = (i) parcelable;
        super.onRestoreInstanceState(iVar.a());
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null) {
            eVar = actionMenuView.L();
        } else {
            eVar = null;
        }
        int i10 = iVar.f1559i;
        if (i10 != 0 && this.f1528a0 != null && eVar != null && (findItem = eVar.findItem(i10)) != null) {
            findItem.expandActionView();
        }
        if (iVar.f1560o) {
            H();
        }
    }

    @Override // android.view.View
    public void onRtlPropertiesChanged(int i10) {
        super.onRtlPropertiesChanged(i10);
        h();
        o0 o0Var = this.E;
        boolean z10 = true;
        if (i10 != 1) {
            z10 = false;
        }
        o0Var.f(z10);
    }

    @Override // android.view.View
    protected Parcelable onSaveInstanceState() {
        androidx.appcompat.view.menu.g gVar;
        i iVar = new i(super.onSaveInstanceState());
        f fVar = this.f1528a0;
        if (fVar != null && (gVar = fVar.f1556e) != null) {
            iVar.f1559i = gVar.getItemId();
        }
        iVar.f1560o = B();
        return iVar;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        int actionMasked = motionEvent.getActionMasked();
        if (actionMasked == 0) {
            this.M = false;
        }
        if (!this.M) {
            boolean onTouchEvent = super.onTouchEvent(motionEvent);
            if (actionMasked == 0 && !onTouchEvent) {
                this.M = true;
            }
        }
        if (actionMasked == 1 || actionMasked == 3) {
            this.M = false;
        }
        return true;
    }

    @Override // androidx.core.view.n
    public void removeMenuProvider(MenuProvider menuProvider) {
        this.R.j(menuProvider);
    }

    public void setBackInvokedCallbackEnabled(boolean z10) {
        if (this.f1536g0 != z10) {
            this.f1536g0 = z10;
            R();
        }
    }

    public void setCollapseContentDescription(int i10) {
        setCollapseContentDescription(i10 != 0 ? getContext().getText(i10) : null);
    }

    public void setCollapseIcon(int i10) {
        setCollapseIcon(g.a.b(getContext(), i10));
    }

    public void setCollapsible(boolean z10) {
        this.f1532d0 = z10;
        requestLayout();
    }

    public void setContentInsetEndWithActions(int i10) {
        if (i10 < 0) {
            i10 = Integer.MIN_VALUE;
        }
        if (i10 != this.G) {
            this.G = i10;
            if (getNavigationIcon() != null) {
                requestLayout();
            }
        }
    }

    public void setContentInsetStartWithNavigation(int i10) {
        if (i10 < 0) {
            i10 = Integer.MIN_VALUE;
        }
        if (i10 != this.F) {
            this.F = i10;
            if (getNavigationIcon() != null) {
                requestLayout();
            }
        }
    }

    public void setLogo(int i10) {
        setLogo(g.a.b(getContext(), i10));
    }

    public void setLogoDescription(int i10) {
        setLogoDescription(getContext().getText(i10));
    }

    public void setNavigationContentDescription(int i10) {
        setNavigationContentDescription(i10 != 0 ? getContext().getText(i10) : null);
    }

    public void setNavigationIcon(int i10) {
        setNavigationIcon(g.a.b(getContext(), i10));
    }

    public void setNavigationOnClickListener(View.OnClickListener onClickListener) {
        l();
        this.f1539o.setOnClickListener(onClickListener);
    }

    public void setOnMenuItemClickListener(h hVar) {
        this.T = hVar;
    }

    public void setOverflowIcon(Drawable drawable) {
        j();
        this.f1531d.setOverflowIcon(drawable);
    }

    public void setPopupTheme(int i10) {
        if (this.f1546v != i10) {
            this.f1546v = i10;
            if (i10 == 0) {
                this.f1545u = getContext();
            } else {
                this.f1545u = new ContextThemeWrapper(getContext(), i10);
            }
        }
    }

    public void setSubtitle(int i10) {
        setSubtitle(getContext().getText(i10));
    }

    public void setSubtitleTextColor(int i10) {
        setSubtitleTextColor(ColorStateList.valueOf(i10));
    }

    public void setTitle(int i10) {
        setTitle(getContext().getText(i10));
    }

    public void setTitleMarginBottom(int i10) {
        this.D = i10;
        requestLayout();
    }

    public void setTitleMarginEnd(int i10) {
        this.B = i10;
        requestLayout();
    }

    public void setTitleMarginStart(int i10) {
        this.A = i10;
        requestLayout();
    }

    public void setTitleMarginTop(int i10) {
        this.C = i10;
        requestLayout();
    }

    public void setTitleTextColor(int i10) {
        setTitleTextColor(ColorStateList.valueOf(i10));
    }

    public boolean v() {
        f fVar = this.f1528a0;
        if (fVar != null && fVar.f1556e != null) {
            return true;
        }
        return false;
    }

    public boolean w() {
        ActionMenuView actionMenuView = this.f1531d;
        if (actionMenuView != null && actionMenuView.F()) {
            return true;
        }
        return false;
    }

    public void x(int i10) {
        getMenuInflater().inflate(i10, getMenu());
    }

    public void y() {
        Iterator it = this.S.iterator();
        while (it.hasNext()) {
            getMenu().removeItem(((MenuItem) it.next()).getItemId());
        }
        G();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class g extends ActionBar.a {

        /* renamed from: b  reason: collision with root package name */
        int f1558b;

        public g(Context context, AttributeSet attributeSet) {
            super(context, attributeSet);
            this.f1558b = 0;
        }

        void a(ViewGroup.MarginLayoutParams marginLayoutParams) {
            ((ViewGroup.MarginLayoutParams) this).leftMargin = marginLayoutParams.leftMargin;
            ((ViewGroup.MarginLayoutParams) this).topMargin = marginLayoutParams.topMargin;
            ((ViewGroup.MarginLayoutParams) this).rightMargin = marginLayoutParams.rightMargin;
            ((ViewGroup.MarginLayoutParams) this).bottomMargin = marginLayoutParams.bottomMargin;
        }

        public g(int i10, int i11) {
            super(i10, i11);
            this.f1558b = 0;
            this.f893a = 8388627;
        }

        public g(g gVar) {
            super((ActionBar.a) gVar);
            this.f1558b = 0;
            this.f1558b = gVar.f1558b;
        }

        public g(ActionBar.a aVar) {
            super(aVar);
            this.f1558b = 0;
        }

        public g(ViewGroup.MarginLayoutParams marginLayoutParams) {
            super(marginLayoutParams);
            this.f1558b = 0;
            a(marginLayoutParams);
        }

        public g(ViewGroup.LayoutParams layoutParams) {
            super(layoutParams);
            this.f1558b = 0;
        }
    }

    public Toolbar(@NonNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, f.a.M);
    }

    public void setCollapseContentDescription(CharSequence charSequence) {
        if (!TextUtils.isEmpty(charSequence)) {
            g();
        }
        ImageButton imageButton = this.f1543s;
        if (imageButton != null) {
            imageButton.setContentDescription(charSequence);
        }
    }

    public void setCollapseIcon(Drawable drawable) {
        if (drawable != null) {
            g();
            this.f1543s.setImageDrawable(drawable);
            return;
        }
        ImageButton imageButton = this.f1543s;
        if (imageButton != null) {
            imageButton.setImageDrawable(this.f1541q);
        }
    }

    public void setLogo(Drawable drawable) {
        if (drawable != null) {
            i();
            if (!z(this.f1540p)) {
                c(this.f1540p, true);
            }
        } else {
            ImageView imageView = this.f1540p;
            if (imageView != null && z(imageView)) {
                removeView(this.f1540p);
                this.P.remove(this.f1540p);
            }
        }
        ImageView imageView2 = this.f1540p;
        if (imageView2 != null) {
            imageView2.setImageDrawable(drawable);
        }
    }

    public void setLogoDescription(CharSequence charSequence) {
        if (!TextUtils.isEmpty(charSequence)) {
            i();
        }
        ImageView imageView = this.f1540p;
        if (imageView != null) {
            imageView.setContentDescription(charSequence);
        }
    }

    public void setNavigationContentDescription(CharSequence charSequence) {
        if (!TextUtils.isEmpty(charSequence)) {
            l();
        }
        ImageButton imageButton = this.f1539o;
        if (imageButton != null) {
            imageButton.setContentDescription(charSequence);
            a1.a(this.f1539o, charSequence);
        }
    }

    public void setNavigationIcon(Drawable drawable) {
        if (drawable != null) {
            l();
            if (!z(this.f1539o)) {
                c(this.f1539o, true);
            }
        } else {
            ImageButton imageButton = this.f1539o;
            if (imageButton != null && z(imageButton)) {
                removeView(this.f1539o);
                this.P.remove(this.f1539o);
            }
        }
        ImageButton imageButton2 = this.f1539o;
        if (imageButton2 != null) {
            imageButton2.setImageDrawable(drawable);
        }
    }

    public void setSubtitle(CharSequence charSequence) {
        if (!TextUtils.isEmpty(charSequence)) {
            if (this.f1538i == null) {
                Context context = getContext();
                AppCompatTextView appCompatTextView = new AppCompatTextView(context);
                this.f1538i = appCompatTextView;
                appCompatTextView.setSingleLine();
                this.f1538i.setEllipsize(TextUtils.TruncateAt.END);
                int i10 = this.f1548x;
                if (i10 != 0) {
                    this.f1538i.setTextAppearance(context, i10);
                }
                ColorStateList colorStateList = this.L;
                if (colorStateList != null) {
                    this.f1538i.setTextColor(colorStateList);
                }
            }
            if (!z(this.f1538i)) {
                c(this.f1538i, true);
            }
        } else {
            TextView textView = this.f1538i;
            if (textView != null && z(textView)) {
                removeView(this.f1538i);
                this.P.remove(this.f1538i);
            }
        }
        TextView textView2 = this.f1538i;
        if (textView2 != null) {
            textView2.setText(charSequence);
        }
        this.J = charSequence;
    }

    public void setSubtitleTextColor(@NonNull ColorStateList colorStateList) {
        this.L = colorStateList;
        TextView textView = this.f1538i;
        if (textView != null) {
            textView.setTextColor(colorStateList);
        }
    }

    public void setTitle(CharSequence charSequence) {
        if (!TextUtils.isEmpty(charSequence)) {
            if (this.f1533e == null) {
                Context context = getContext();
                AppCompatTextView appCompatTextView = new AppCompatTextView(context);
                this.f1533e = appCompatTextView;
                appCompatTextView.setSingleLine();
                this.f1533e.setEllipsize(TextUtils.TruncateAt.END);
                int i10 = this.f1547w;
                if (i10 != 0) {
                    this.f1533e.setTextAppearance(context, i10);
                }
                ColorStateList colorStateList = this.K;
                if (colorStateList != null) {
                    this.f1533e.setTextColor(colorStateList);
                }
            }
            if (!z(this.f1533e)) {
                c(this.f1533e, true);
            }
        } else {
            TextView textView = this.f1533e;
            if (textView != null && z(textView)) {
                removeView(this.f1533e);
                this.P.remove(this.f1533e);
            }
        }
        TextView textView2 = this.f1533e;
        if (textView2 != null) {
            textView2.setText(charSequence);
        }
        this.I = charSequence;
    }

    public void setTitleTextColor(@NonNull ColorStateList colorStateList) {
        this.K = colorStateList;
        TextView textView = this.f1533e;
        if (textView != null) {
            textView.setTextColor(colorStateList);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i extends u2.a {
        public static final Parcelable.Creator<i> CREATOR = new a();

        /* renamed from: i  reason: collision with root package name */
        int f1559i;

        /* renamed from: o  reason: collision with root package name */
        boolean f1560o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Parcelable.ClassLoaderCreator {
            a() {
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: a */
            public i createFromParcel(Parcel parcel) {
                return new i(parcel, null);
            }

            @Override // android.os.Parcelable.ClassLoaderCreator
            /* renamed from: b */
            public i createFromParcel(Parcel parcel, ClassLoader classLoader) {
                return new i(parcel, classLoader);
            }

            @Override // android.os.Parcelable.Creator
            /* renamed from: c */
            public i[] newArray(int i10) {
                return new i[i10];
            }
        }

        public i(Parcel parcel, ClassLoader classLoader) {
            super(parcel, classLoader);
            this.f1559i = parcel.readInt();
            this.f1560o = parcel.readInt() != 0;
        }

        @Override // u2.a, android.os.Parcelable
        public void writeToParcel(Parcel parcel, int i10) {
            super.writeToParcel(parcel, i10);
            parcel.writeInt(this.f1559i);
            parcel.writeInt(this.f1560o ? 1 : 0);
        }

        public i(Parcelable parcelable) {
            super(parcelable);
        }
    }

    public Toolbar(Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        this.H = 8388627;
        this.O = new ArrayList();
        this.P = new ArrayList();
        this.Q = new int[2];
        this.R = new MenuHostHelper(new Runnable() { // from class: androidx.appcompat.widget.x0
            @Override // java.lang.Runnable
            public final void run() {
                Toolbar.this.y();
            }
        });
        this.S = new ArrayList();
        this.U = new a();
        this.f1537h0 = new b();
        v0 v10 = v0.v(getContext(), attributeSet, f.j.f24226d3, i10, 0);
        androidx.core.view.h0.l0(this, context, f.j.f24226d3, attributeSet, v10.r(), i10, 0);
        this.f1547w = v10.n(f.j.F3, 0);
        this.f1548x = v10.n(f.j.f24321w3, 0);
        this.H = v10.l(f.j.f24231e3, this.H);
        this.f1549y = v10.l(f.j.f24236f3, 48);
        int e10 = v10.e(f.j.f24336z3, 0);
        e10 = v10.s(f.j.E3) ? v10.e(f.j.E3, e10) : e10;
        this.D = e10;
        this.C = e10;
        this.B = e10;
        this.A = e10;
        int e11 = v10.e(f.j.C3, -1);
        if (e11 >= 0) {
            this.A = e11;
        }
        int e12 = v10.e(f.j.B3, -1);
        if (e12 >= 0) {
            this.B = e12;
        }
        int e13 = v10.e(f.j.D3, -1);
        if (e13 >= 0) {
            this.C = e13;
        }
        int e14 = v10.e(f.j.A3, -1);
        if (e14 >= 0) {
            this.D = e14;
        }
        this.f1550z = v10.f(f.j.f24291q3, -1);
        int e15 = v10.e(f.j.f24271m3, Integer.MIN_VALUE);
        int e16 = v10.e(f.j.f24251i3, Integer.MIN_VALUE);
        int f10 = v10.f(f.j.f24261k3, 0);
        int f11 = v10.f(f.j.f24266l3, 0);
        h();
        this.E.e(f10, f11);
        if (e15 != Integer.MIN_VALUE || e16 != Integer.MIN_VALUE) {
            this.E.g(e15, e16);
        }
        this.F = v10.e(f.j.f24276n3, Integer.MIN_VALUE);
        this.G = v10.e(f.j.f24256j3, Integer.MIN_VALUE);
        this.f1541q = v10.g(f.j.f24246h3);
        this.f1542r = v10.p(f.j.f24241g3);
        CharSequence p10 = v10.p(f.j.f24331y3);
        if (!TextUtils.isEmpty(p10)) {
            setTitle(p10);
        }
        CharSequence p11 = v10.p(f.j.f24316v3);
        if (!TextUtils.isEmpty(p11)) {
            setSubtitle(p11);
        }
        this.f1545u = getContext();
        setPopupTheme(v10.n(f.j.f24311u3, 0));
        Drawable g10 = v10.g(f.j.f24306t3);
        if (g10 != null) {
            setNavigationIcon(g10);
        }
        CharSequence p12 = v10.p(f.j.f24301s3);
        if (!TextUtils.isEmpty(p12)) {
            setNavigationContentDescription(p12);
        }
        Drawable g11 = v10.g(f.j.f24281o3);
        if (g11 != null) {
            setLogo(g11);
        }
        CharSequence p13 = v10.p(f.j.f24286p3);
        if (!TextUtils.isEmpty(p13)) {
            setLogoDescription(p13);
        }
        if (v10.s(f.j.G3)) {
            setTitleTextColor(v10.c(f.j.G3));
        }
        if (v10.s(f.j.f24326x3)) {
            setSubtitleTextColor(v10.c(f.j.f24326x3));
        }
        if (v10.s(f.j.f24296r3)) {
            x(v10.n(f.j.f24296r3, 0));
        }
        v10.x();
    }
}
