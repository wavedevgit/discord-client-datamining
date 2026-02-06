package androidx.appcompat.widget;

import android.content.Context;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.util.SparseBooleanArray;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import androidx.appcompat.view.menu.ActionMenuItemView;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.view.menu.k;
import androidx.appcompat.widget.ActionMenuView;
import androidx.core.view.b;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends androidx.appcompat.view.menu.a implements b.a {
    private int A;
    private int B;
    private int C;
    private boolean D;
    private boolean E;
    private boolean F;
    private boolean G;
    private int H;
    private final SparseBooleanArray I;
    e J;
    a K;
    RunnableC0020c L;
    private b M;
    final f N;
    int O;

    /* renamed from: v  reason: collision with root package name */
    d f2032v;

    /* renamed from: w  reason: collision with root package name */
    private Drawable f2033w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f2034x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f2035y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f2036z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a extends androidx.appcompat.view.menu.i {
        public a(Context context, androidx.appcompat.view.menu.m mVar, View view) {
            super(context, mVar, view, false, f.a.f22206i);
            if (!((androidx.appcompat.view.menu.g) mVar.getItem()).l()) {
                View view2 = c.this.f2032v;
                f(view2 == null ? (View) ((androidx.appcompat.view.menu.a) c.this).f1700t : view2);
            }
            j(c.this.N);
        }

        @Override // androidx.appcompat.view.menu.i
        protected void e() {
            c cVar = c.this;
            cVar.K = null;
            cVar.O = 0;
            super.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class b extends ActionMenuItemView.b {
        b() {
        }

        @Override // androidx.appcompat.view.menu.ActionMenuItemView.b
        public k.e a() {
            a aVar = c.this.K;
            if (aVar != null) {
                return aVar.c();
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: androidx.appcompat.widget.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class RunnableC0020c implements Runnable {

        /* renamed from: d  reason: collision with root package name */
        private e f2039d;

        public RunnableC0020c(e eVar) {
            this.f2039d = eVar;
        }

        @Override // java.lang.Runnable
        public void run() {
            if (((androidx.appcompat.view.menu.a) c.this).f1694i != null) {
                ((androidx.appcompat.view.menu.a) c.this).f1694i.d();
            }
            View view = (View) ((androidx.appcompat.view.menu.a) c.this).f1700t;
            if (view != null && view.getWindowToken() != null && this.f2039d.m()) {
                c.this.J = this.f2039d;
            }
            c.this.L = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d extends m implements ActionMenuView.a {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a extends h0 {

            /* renamed from: u  reason: collision with root package name */
            final /* synthetic */ c f2042u;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            a(View view, c cVar) {
                super(view);
                this.f2042u = cVar;
            }

            @Override // androidx.appcompat.widget.h0
            public k.e b() {
                e eVar = c.this.J;
                if (eVar == null) {
                    return null;
                }
                return eVar.c();
            }

            @Override // androidx.appcompat.widget.h0
            public boolean c() {
                c.this.K();
                return true;
            }

            @Override // androidx.appcompat.widget.h0
            public boolean d() {
                c cVar = c.this;
                if (cVar.L != null) {
                    return false;
                }
                cVar.B();
                return true;
            }
        }

        public d(Context context) {
            super(context, null, f.a.f22205h);
            setClickable(true);
            setFocusable(true);
            setVisibility(0);
            setEnabled(true);
            a1.a(this, getContentDescription());
            setOnTouchListener(new a(this, c.this));
        }

        @Override // androidx.appcompat.widget.ActionMenuView.a
        public boolean a() {
            return false;
        }

        @Override // androidx.appcompat.widget.ActionMenuView.a
        public boolean b() {
            return false;
        }

        @Override // android.view.View
        public boolean performClick() {
            if (super.performClick()) {
                return true;
            }
            playSoundEffect(0);
            c.this.K();
            return true;
        }

        @Override // android.widget.ImageView
        protected boolean setFrame(int i10, int i11, int i12, int i13) {
            boolean frame = super.setFrame(i10, i11, i12, i13);
            Drawable drawable = getDrawable();
            Drawable background = getBackground();
            if (drawable != null && background != null) {
                int width = getWidth();
                int height = getHeight();
                int max = Math.max(width, height) / 2;
                int paddingLeft = (width + (getPaddingLeft() - getPaddingRight())) / 2;
                int paddingTop = (height + (getPaddingTop() - getPaddingBottom())) / 2;
                s1.a.l(background, paddingLeft - max, paddingTop - max, paddingLeft + max, paddingTop + max);
            }
            return frame;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class e extends androidx.appcompat.view.menu.i {
        public e(Context context, androidx.appcompat.view.menu.e eVar, View view, boolean z10) {
            super(context, eVar, view, z10, f.a.f22206i);
            h(8388613);
            j(c.this.N);
        }

        @Override // androidx.appcompat.view.menu.i
        protected void e() {
            if (((androidx.appcompat.view.menu.a) c.this).f1694i != null) {
                ((androidx.appcompat.view.menu.a) c.this).f1694i.close();
            }
            c.this.J = null;
            super.e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class f implements j.a {
        f() {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
            if (eVar instanceof androidx.appcompat.view.menu.m) {
                eVar.D().e(false);
            }
            j.a m10 = c.this.m();
            if (m10 != null) {
                m10.a(eVar, z10);
            }
        }

        @Override // androidx.appcompat.view.menu.j.a
        public boolean b(androidx.appcompat.view.menu.e eVar) {
            if (eVar == ((androidx.appcompat.view.menu.a) c.this).f1694i) {
                return false;
            }
            c.this.O = ((androidx.appcompat.view.menu.m) eVar).getItem().getItemId();
            j.a m10 = c.this.m();
            if (m10 == null) {
                return false;
            }
            return m10.b(eVar);
        }
    }

    public c(Context context) {
        super(context, f.g.f22300c, f.g.f22299b);
        this.I = new SparseBooleanArray();
        this.N = new f();
    }

    private View z(MenuItem menuItem) {
        ViewGroup viewGroup = (ViewGroup) this.f1700t;
        if (viewGroup == null) {
            return null;
        }
        int childCount = viewGroup.getChildCount();
        for (int i10 = 0; i10 < childCount; i10++) {
            View childAt = viewGroup.getChildAt(i10);
            if ((childAt instanceof k.a) && ((k.a) childAt).getItemData() == menuItem) {
                return childAt;
            }
        }
        return null;
    }

    public Drawable A() {
        d dVar = this.f2032v;
        if (dVar != null) {
            return dVar.getDrawable();
        }
        if (this.f2034x) {
            return this.f2033w;
        }
        return null;
    }

    public boolean B() {
        androidx.appcompat.view.menu.k kVar;
        RunnableC0020c runnableC0020c = this.L;
        if (runnableC0020c != null && (kVar = this.f1700t) != null) {
            ((View) kVar).removeCallbacks(runnableC0020c);
            this.L = null;
            return true;
        }
        e eVar = this.J;
        if (eVar != null) {
            eVar.b();
            return true;
        }
        return false;
    }

    public boolean C() {
        a aVar = this.K;
        if (aVar != null) {
            aVar.b();
            return true;
        }
        return false;
    }

    public boolean D() {
        if (this.L == null && !E()) {
            return false;
        }
        return true;
    }

    public boolean E() {
        e eVar = this.J;
        if (eVar != null && eVar.d()) {
            return true;
        }
        return false;
    }

    public void F(Configuration configuration) {
        if (!this.D) {
            this.C = androidx.appcompat.view.a.b(this.f1693e).d();
        }
        androidx.appcompat.view.menu.e eVar = this.f1694i;
        if (eVar != null) {
            eVar.L(true);
        }
    }

    public void G(boolean z10) {
        this.G = z10;
    }

    public void H(ActionMenuView actionMenuView) {
        this.f1700t = actionMenuView;
        actionMenuView.a(this.f1694i);
    }

    public void I(Drawable drawable) {
        d dVar = this.f2032v;
        if (dVar != null) {
            dVar.setImageDrawable(drawable);
            return;
        }
        this.f2034x = true;
        this.f2033w = drawable;
    }

    public void J(boolean z10) {
        this.f2035y = z10;
        this.f2036z = true;
    }

    public boolean K() {
        androidx.appcompat.view.menu.e eVar;
        if (this.f2035y && !E() && (eVar = this.f1694i) != null && this.f1700t != null && this.L == null && !eVar.z().isEmpty()) {
            RunnableC0020c runnableC0020c = new RunnableC0020c(new e(this.f1693e, this.f1694i, this.f2032v, true));
            this.L = runnableC0020c;
            ((View) this.f1700t).post(runnableC0020c);
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.a, androidx.appcompat.view.menu.j
    public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
        y();
        super.a(eVar, z10);
    }

    @Override // androidx.appcompat.view.menu.a, androidx.appcompat.view.menu.j
    public boolean d(androidx.appcompat.view.menu.m mVar) {
        boolean z10 = false;
        if (!mVar.hasVisibleItems()) {
            return false;
        }
        androidx.appcompat.view.menu.m mVar2 = mVar;
        while (mVar2.f0() != this.f1694i) {
            mVar2 = (androidx.appcompat.view.menu.m) mVar2.f0();
        }
        View z11 = z(mVar2.getItem());
        if (z11 == null) {
            return false;
        }
        this.O = mVar.getItem().getItemId();
        int size = mVar.size();
        int i10 = 0;
        while (true) {
            if (i10 >= size) {
                break;
            }
            MenuItem item = mVar.getItem(i10);
            if (item.isVisible() && item.getIcon() != null) {
                z10 = true;
                break;
            }
            i10++;
        }
        a aVar = new a(this.f1693e, mVar, z11);
        this.K = aVar;
        aVar.g(z10);
        this.K.k();
        super.d(mVar);
        return true;
    }

    @Override // androidx.appcompat.view.menu.a, androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        ArrayList arrayList;
        super.e(z10);
        ((View) this.f1700t).requestLayout();
        androidx.appcompat.view.menu.e eVar = this.f1694i;
        boolean z11 = false;
        if (eVar != null) {
            ArrayList s10 = eVar.s();
            int size = s10.size();
            for (int i10 = 0; i10 < size; i10++) {
                androidx.core.view.b a10 = ((androidx.appcompat.view.menu.g) s10.get(i10)).a();
                if (a10 != null) {
                    a10.h(this);
                }
            }
        }
        androidx.appcompat.view.menu.e eVar2 = this.f1694i;
        if (eVar2 != null) {
            arrayList = eVar2.z();
        } else {
            arrayList = null;
        }
        if (this.f2035y && arrayList != null) {
            int size2 = arrayList.size();
            if (size2 == 1) {
                z11 = !((androidx.appcompat.view.menu.g) arrayList.get(0)).isActionViewExpanded();
            } else if (size2 > 0) {
                z11 = true;
            }
        }
        if (z11) {
            if (this.f2032v == null) {
                this.f2032v = new d(this.f1692d);
            }
            ViewGroup viewGroup = (ViewGroup) this.f2032v.getParent();
            if (viewGroup != this.f1700t) {
                if (viewGroup != null) {
                    viewGroup.removeView(this.f2032v);
                }
                ActionMenuView actionMenuView = (ActionMenuView) this.f1700t;
                actionMenuView.addView(this.f2032v, actionMenuView.D());
            }
        } else {
            d dVar = this.f2032v;
            if (dVar != null) {
                ViewParent parent = dVar.getParent();
                androidx.appcompat.view.menu.k kVar = this.f1700t;
                if (parent == kVar) {
                    ((ViewGroup) kVar).removeView(this.f2032v);
                }
            }
        }
        ((ActionMenuView) this.f1700t).setOverflowReserved(this.f2035y);
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r3v0 */
    /* JADX WARN: Type inference failed for: r3v1, types: [int] */
    /* JADX WARN: Type inference failed for: r3v12 */
    @Override // androidx.appcompat.view.menu.j
    public boolean f() {
        ArrayList arrayList;
        int i10;
        int i11;
        int i12;
        boolean z10;
        int i13;
        boolean z11;
        boolean z12;
        c cVar = this;
        androidx.appcompat.view.menu.e eVar = cVar.f1694i;
        View view = null;
        ?? r32 = 0;
        if (eVar != null) {
            arrayList = eVar.E();
            i10 = arrayList.size();
        } else {
            arrayList = null;
            i10 = 0;
        }
        int i14 = cVar.C;
        int i15 = cVar.B;
        int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
        ViewGroup viewGroup = (ViewGroup) cVar.f1700t;
        boolean z13 = false;
        int i16 = 0;
        int i17 = 0;
        for (int i18 = 0; i18 < i10; i18++) {
            androidx.appcompat.view.menu.g gVar = (androidx.appcompat.view.menu.g) arrayList.get(i18);
            if (gVar.o()) {
                i16++;
            } else if (gVar.n()) {
                i17++;
            } else {
                z13 = true;
            }
            if (cVar.G && gVar.isActionViewExpanded()) {
                i14 = 0;
            }
        }
        if (cVar.f2035y && (z13 || i17 + i16 > i14)) {
            i14--;
        }
        int i19 = i14 - i16;
        SparseBooleanArray sparseBooleanArray = cVar.I;
        sparseBooleanArray.clear();
        if (cVar.E) {
            int i20 = cVar.H;
            i12 = i15 / i20;
            i11 = i20 + ((i15 % i20) / i12);
        } else {
            i11 = 0;
            i12 = 0;
        }
        int i21 = 0;
        int i22 = 0;
        while (i21 < i10) {
            androidx.appcompat.view.menu.g gVar2 = (androidx.appcompat.view.menu.g) arrayList.get(i21);
            if (gVar2.o()) {
                View n10 = cVar.n(gVar2, view, viewGroup);
                if (cVar.E) {
                    i12 -= ActionMenuView.J(n10, i11, i12, makeMeasureSpec, r32);
                } else {
                    n10.measure(makeMeasureSpec, makeMeasureSpec);
                }
                int measuredWidth = n10.getMeasuredWidth();
                i15 -= measuredWidth;
                if (i22 == 0) {
                    i22 = measuredWidth;
                }
                int groupId = gVar2.getGroupId();
                if (groupId != 0) {
                    sparseBooleanArray.put(groupId, true);
                }
                gVar2.u(true);
                z10 = r32;
                i13 = i10;
            } else if (gVar2.n()) {
                int groupId2 = gVar2.getGroupId();
                boolean z14 = sparseBooleanArray.get(groupId2);
                if ((i19 > 0 || z14) && i15 > 0 && (!cVar.E || i12 > 0)) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                boolean z15 = z11;
                i13 = i10;
                if (z11) {
                    View n11 = cVar.n(gVar2, null, viewGroup);
                    if (cVar.E) {
                        int J = ActionMenuView.J(n11, i11, i12, makeMeasureSpec, 0);
                        i12 -= J;
                        if (J == 0) {
                            z15 = false;
                        }
                    } else {
                        n11.measure(makeMeasureSpec, makeMeasureSpec);
                    }
                    boolean z16 = z15;
                    int measuredWidth2 = n11.getMeasuredWidth();
                    i15 -= measuredWidth2;
                    if (i22 == 0) {
                        i22 = measuredWidth2;
                    }
                    if (!cVar.E ? i15 + i22 > 0 : i15 >= 0) {
                        z12 = true;
                    } else {
                        z12 = false;
                    }
                    z11 = z16 & z12;
                }
                if (z11 && groupId2 != 0) {
                    sparseBooleanArray.put(groupId2, true);
                } else if (z14) {
                    sparseBooleanArray.put(groupId2, false);
                    for (int i23 = 0; i23 < i21; i23++) {
                        androidx.appcompat.view.menu.g gVar3 = (androidx.appcompat.view.menu.g) arrayList.get(i23);
                        if (gVar3.getGroupId() == groupId2) {
                            if (gVar3.l()) {
                                i19++;
                            }
                            gVar3.u(false);
                        }
                    }
                }
                if (z11) {
                    i19--;
                }
                gVar2.u(z11);
                z10 = false;
            } else {
                z10 = r32;
                i13 = i10;
                gVar2.u(z10);
            }
            i21++;
            r32 = z10;
            i10 = i13;
            view = null;
            cVar = this;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.a, androidx.appcompat.view.menu.j
    public void h(Context context, androidx.appcompat.view.menu.e eVar) {
        super.h(context, eVar);
        Resources resources = context.getResources();
        androidx.appcompat.view.a b10 = androidx.appcompat.view.a.b(context);
        if (!this.f2036z) {
            this.f2035y = b10.f();
        }
        if (!this.F) {
            this.A = b10.c();
        }
        if (!this.D) {
            this.C = b10.d();
        }
        int i10 = this.A;
        if (this.f2035y) {
            if (this.f2032v == null) {
                d dVar = new d(this.f1692d);
                this.f2032v = dVar;
                if (this.f2034x) {
                    dVar.setImageDrawable(this.f2033w);
                    this.f2033w = null;
                    this.f2034x = false;
                }
                int makeMeasureSpec = View.MeasureSpec.makeMeasureSpec(0, 0);
                this.f2032v.measure(makeMeasureSpec, makeMeasureSpec);
            }
            i10 -= this.f2032v.getMeasuredWidth();
        } else {
            this.f2032v = null;
        }
        this.B = i10;
        this.H = (int) (resources.getDisplayMetrics().density * 56.0f);
    }

    @Override // androidx.appcompat.view.menu.a
    public void j(androidx.appcompat.view.menu.g gVar, k.a aVar) {
        aVar.c(gVar, 0);
        ActionMenuItemView actionMenuItemView = (ActionMenuItemView) aVar;
        actionMenuItemView.setItemInvoker((ActionMenuView) this.f1700t);
        if (this.M == null) {
            this.M = new b();
        }
        actionMenuItemView.setPopupCallback(this.M);
    }

    @Override // androidx.appcompat.view.menu.a
    public boolean l(ViewGroup viewGroup, int i10) {
        if (viewGroup.getChildAt(i10) == this.f2032v) {
            return false;
        }
        return super.l(viewGroup, i10);
    }

    @Override // androidx.appcompat.view.menu.a
    public View n(androidx.appcompat.view.menu.g gVar, View view, ViewGroup viewGroup) {
        int i10;
        View actionView = gVar.getActionView();
        if (actionView == null || gVar.j()) {
            actionView = super.n(gVar, view, viewGroup);
        }
        if (gVar.isActionViewExpanded()) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        actionView.setVisibility(i10);
        ActionMenuView actionMenuView = (ActionMenuView) viewGroup;
        ViewGroup.LayoutParams layoutParams = actionView.getLayoutParams();
        if (!actionMenuView.checkLayoutParams(layoutParams)) {
            actionView.setLayoutParams(actionMenuView.m(layoutParams));
        }
        return actionView;
    }

    @Override // androidx.appcompat.view.menu.a
    public androidx.appcompat.view.menu.k o(ViewGroup viewGroup) {
        androidx.appcompat.view.menu.k kVar = this.f1700t;
        androidx.appcompat.view.menu.k o10 = super.o(viewGroup);
        if (kVar != o10) {
            ((ActionMenuView) o10).setPresenter(this);
        }
        return o10;
    }

    @Override // androidx.appcompat.view.menu.a
    public boolean q(int i10, androidx.appcompat.view.menu.g gVar) {
        return gVar.l();
    }

    public boolean y() {
        return B() | C();
    }
}
