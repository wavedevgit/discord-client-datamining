package androidx.appcompat.view.menu;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Rect;
import android.os.Build;
import android.os.Handler;
import android.os.Parcelable;
import android.os.SystemClock;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewTreeObserver;
import android.widget.FrameLayout;
import android.widget.HeaderViewListAdapter;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.PopupWindow;
import android.widget.TextView;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.k0;
import androidx.appcompat.widget.l0;
import java.util.ArrayList;
import java.util.List;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b extends h implements j, View.OnKeyListener, PopupWindow.OnDismissListener {
    private static final int M = f.g.f23380e;
    View A;
    private boolean C;
    private boolean D;
    private int E;
    private int F;
    private boolean H;
    private j.a I;
    ViewTreeObserver J;
    private PopupWindow.OnDismissListener K;
    boolean L;

    /* renamed from: e  reason: collision with root package name */
    private final Context f1400e;

    /* renamed from: i  reason: collision with root package name */
    private final int f1401i;

    /* renamed from: o  reason: collision with root package name */
    private final int f1402o;

    /* renamed from: p  reason: collision with root package name */
    private final int f1403p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f1404q;

    /* renamed from: r  reason: collision with root package name */
    final Handler f1405r;

    /* renamed from: z  reason: collision with root package name */
    private View f1413z;

    /* renamed from: s  reason: collision with root package name */
    private final List f1406s = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final List f1407t = new ArrayList();

    /* renamed from: u  reason: collision with root package name */
    final ViewTreeObserver.OnGlobalLayoutListener f1408u = new a();

    /* renamed from: v  reason: collision with root package name */
    private final View.OnAttachStateChangeListener f1409v = new View$OnAttachStateChangeListenerC0017b();

    /* renamed from: w  reason: collision with root package name */
    private final k0 f1410w = new c();

    /* renamed from: x  reason: collision with root package name */
    private int f1411x = 0;

    /* renamed from: y  reason: collision with root package name */
    private int f1412y = 0;
    private boolean G = false;
    private int B = D();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ViewTreeObserver.OnGlobalLayoutListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (b.this.isShowing() && b.this.f1407t.size() > 0 && !((d) b.this.f1407t.get(0)).f1421a.z()) {
                View view = b.this.A;
                if (view != null && view.isShown()) {
                    for (d dVar : b.this.f1407t) {
                        dVar.f1421a.show();
                    }
                    return;
                }
                b.this.dismiss();
            }
        }
    }

    /* renamed from: androidx.appcompat.view.menu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class View$OnAttachStateChangeListenerC0017b implements View.OnAttachStateChangeListener {
        View$OnAttachStateChangeListenerC0017b() {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewAttachedToWindow(View view) {
        }

        @Override // android.view.View.OnAttachStateChangeListener
        public void onViewDetachedFromWindow(View view) {
            ViewTreeObserver viewTreeObserver = b.this.J;
            if (viewTreeObserver != null) {
                if (!viewTreeObserver.isAlive()) {
                    b.this.J = view.getViewTreeObserver();
                }
                b bVar = b.this;
                bVar.J.removeGlobalOnLayoutListener(bVar.f1408u);
            }
            view.removeOnAttachStateChangeListener(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements k0 {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ d f1417d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ MenuItem f1418e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ e f1419i;

            a(d dVar, MenuItem menuItem, e eVar) {
                this.f1417d = dVar;
                this.f1418e = menuItem;
                this.f1419i = eVar;
            }

            @Override // java.lang.Runnable
            public void run() {
                d dVar = this.f1417d;
                if (dVar != null) {
                    b.this.L = true;
                    dVar.f1422b.e(false);
                    b.this.L = false;
                }
                if (this.f1418e.isEnabled() && this.f1418e.hasSubMenu()) {
                    this.f1419i.O(this.f1418e, 4);
                }
            }
        }

        c() {
        }

        @Override // androidx.appcompat.widget.k0
        public void a(e eVar, MenuItem menuItem) {
            d dVar = null;
            b.this.f1405r.removeCallbacksAndMessages(null);
            int size = b.this.f1407t.size();
            int i10 = 0;
            while (true) {
                if (i10 < size) {
                    if (eVar == ((d) b.this.f1407t.get(i10)).f1422b) {
                        break;
                    }
                    i10++;
                } else {
                    i10 = -1;
                    break;
                }
            }
            if (i10 == -1) {
                return;
            }
            int i11 = i10 + 1;
            if (i11 < b.this.f1407t.size()) {
                dVar = (d) b.this.f1407t.get(i11);
            }
            b.this.f1405r.postAtTime(new a(dVar, menuItem, eVar), eVar, SystemClock.uptimeMillis() + 200);
        }

        @Override // androidx.appcompat.widget.k0
        public void m(e eVar, MenuItem menuItem) {
            b.this.f1405r.removeCallbacksAndMessages(eVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final l0 f1421a;

        /* renamed from: b  reason: collision with root package name */
        public final e f1422b;

        /* renamed from: c  reason: collision with root package name */
        public final int f1423c;

        public d(l0 l0Var, e eVar, int i10) {
            this.f1421a = l0Var;
            this.f1422b = eVar;
            this.f1423c = i10;
        }

        public ListView a() {
            return this.f1421a.n();
        }
    }

    public b(Context context, View view, int i10, int i11, boolean z10) {
        this.f1400e = context;
        this.f1413z = view;
        this.f1402o = i10;
        this.f1403p = i11;
        this.f1404q = z10;
        Resources resources = context.getResources();
        this.f1401i = Math.max(resources.getDisplayMetrics().widthPixels / 2, resources.getDimensionPixelSize(f.d.f23312b));
        this.f1405r = new Handler();
    }

    private int A(e eVar) {
        int size = this.f1407t.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (eVar == ((d) this.f1407t.get(i10)).f1422b) {
                return i10;
            }
        }
        return -1;
    }

    private MenuItem B(e eVar, e eVar2) {
        int size = eVar.size();
        for (int i10 = 0; i10 < size; i10++) {
            MenuItem item = eVar.getItem(i10);
            if (item.hasSubMenu() && eVar2 == item.getSubMenu()) {
                return item;
            }
        }
        return null;
    }

    private View C(d dVar, e eVar) {
        androidx.appcompat.view.menu.d dVar2;
        int i10;
        int firstVisiblePosition;
        MenuItem B = B(dVar.f1422b, eVar);
        if (B == null) {
            return null;
        }
        ListView a10 = dVar.a();
        ListAdapter adapter = a10.getAdapter();
        int i11 = 0;
        if (adapter instanceof HeaderViewListAdapter) {
            HeaderViewListAdapter headerViewListAdapter = (HeaderViewListAdapter) adapter;
            i10 = headerViewListAdapter.getHeadersCount();
            dVar2 = (androidx.appcompat.view.menu.d) headerViewListAdapter.getWrappedAdapter();
        } else {
            dVar2 = (androidx.appcompat.view.menu.d) adapter;
            i10 = 0;
        }
        int count = dVar2.getCount();
        while (true) {
            if (i11 < count) {
                if (B == dVar2.getItem(i11)) {
                    break;
                }
                i11++;
            } else {
                i11 = -1;
                break;
            }
        }
        if (i11 == -1 || (firstVisiblePosition = (i11 + i10) - a10.getFirstVisiblePosition()) < 0 || firstVisiblePosition >= a10.getChildCount()) {
            return null;
        }
        return a10.getChildAt(firstVisiblePosition);
    }

    private int D() {
        if (this.f1413z.getLayoutDirection() != 1) {
            return 1;
        }
        return 0;
    }

    private int E(int i10) {
        List list = this.f1407t;
        ListView a10 = ((d) list.get(list.size() - 1)).a();
        int[] iArr = new int[2];
        a10.getLocationOnScreen(iArr);
        Rect rect = new Rect();
        this.A.getWindowVisibleDisplayFrame(rect);
        if (this.B == 1) {
            if (iArr[0] + a10.getWidth() + i10 <= rect.right) {
                return 1;
            }
            return 0;
        } else if (iArr[0] - i10 < 0) {
            return 1;
        } else {
            return 0;
        }
    }

    private void F(e eVar) {
        d dVar;
        View view;
        boolean z10;
        int i10;
        int i11;
        int i12;
        LayoutInflater from = LayoutInflater.from(this.f1400e);
        androidx.appcompat.view.menu.d dVar2 = new androidx.appcompat.view.menu.d(eVar, from, this.f1404q, M);
        if (!isShowing() && this.G) {
            dVar2.d(true);
        } else if (isShowing()) {
            dVar2.d(h.x(eVar));
        }
        int o10 = h.o(dVar2, null, this.f1400e, this.f1401i);
        l0 z11 = z();
        z11.l(dVar2);
        z11.D(o10);
        z11.E(this.f1412y);
        if (this.f1407t.size() > 0) {
            List list = this.f1407t;
            dVar = (d) list.get(list.size() - 1);
            view = C(dVar, eVar);
        } else {
            dVar = null;
            view = null;
        }
        if (view != null) {
            z11.T(false);
            z11.Q(null);
            int E = E(o10);
            if (E == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.B = E;
            if (Build.VERSION.SDK_INT >= 26) {
                z11.B(view);
                i11 = 0;
                i10 = 0;
            } else {
                int[] iArr = new int[2];
                this.f1413z.getLocationOnScreen(iArr);
                int[] iArr2 = new int[2];
                view.getLocationOnScreen(iArr2);
                if ((this.f1412y & 7) == 5) {
                    iArr[0] = iArr[0] + this.f1413z.getWidth();
                    iArr2[0] = iArr2[0] + view.getWidth();
                }
                i10 = iArr2[0] - iArr[0];
                i11 = iArr2[1] - iArr[1];
            }
            if ((this.f1412y & 5) == 5) {
                if (!z10) {
                    o10 = view.getWidth();
                    i12 = i10 - o10;
                }
                i12 = i10 + o10;
            } else {
                if (z10) {
                    o10 = view.getWidth();
                    i12 = i10 + o10;
                }
                i12 = i10 - o10;
            }
            z11.d(i12);
            z11.L(true);
            z11.h(i11);
        } else {
            if (this.C) {
                z11.d(this.E);
            }
            if (this.D) {
                z11.h(this.F);
            }
            z11.F(m());
        }
        this.f1407t.add(new d(z11, eVar, this.B));
        z11.show();
        ListView n10 = z11.n();
        n10.setOnKeyListener(this);
        if (dVar == null && this.H && eVar.z() != null) {
            FrameLayout frameLayout = (FrameLayout) from.inflate(f.g.f23387l, (ViewGroup) n10, false);
            frameLayout.setEnabled(false);
            ((TextView) frameLayout.findViewById(16908310)).setText(eVar.z());
            n10.addHeaderView(frameLayout, null, false);
            z11.show();
        }
    }

    private l0 z() {
        l0 l0Var = new l0(this.f1400e, null, this.f1402o, this.f1403p);
        l0Var.S(this.f1410w);
        l0Var.J(this);
        l0Var.I(this);
        l0Var.B(this.f1413z);
        l0Var.E(this.f1412y);
        l0Var.H(true);
        l0Var.G(2);
        return l0Var;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        int A = A(eVar);
        if (A >= 0) {
            int i10 = A + 1;
            if (i10 < this.f1407t.size()) {
                ((d) this.f1407t.get(i10)).f1422b.e(false);
            }
            d dVar = (d) this.f1407t.remove(A);
            dVar.f1422b.R(this);
            if (this.L) {
                dVar.f1421a.R(null);
                dVar.f1421a.C(0);
            }
            dVar.f1421a.dismiss();
            int size = this.f1407t.size();
            if (size > 0) {
                this.B = ((d) this.f1407t.get(size - 1)).f1423c;
            } else {
                this.B = D();
            }
            if (size == 0) {
                dismiss();
                j.a aVar = this.I;
                if (aVar != null) {
                    aVar.a(eVar, true);
                }
                ViewTreeObserver viewTreeObserver = this.J;
                if (viewTreeObserver != null) {
                    if (viewTreeObserver.isAlive()) {
                        this.J.removeGlobalOnLayoutListener(this.f1408u);
                    }
                    this.J = null;
                }
                this.A.removeOnAttachStateChangeListener(this.f1409v);
                this.K.onDismiss();
            } else if (z10) {
                ((d) this.f1407t.get(0)).f1422b.e(false);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void c(j.a aVar) {
        this.I = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public void d(Parcelable parcelable) {
    }

    @Override // k.e
    public void dismiss() {
        int size = this.f1407t.size();
        if (size > 0) {
            d[] dVarArr = (d[]) this.f1407t.toArray(new d[size]);
            for (int i10 = size - 1; i10 >= 0; i10--) {
                d dVar = dVarArr[i10];
                if (dVar.f1421a.isShowing()) {
                    dVar.f1421a.dismiss();
                }
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean e(m mVar) {
        for (d dVar : this.f1407t) {
            if (mVar == dVar.f1422b) {
                dVar.a().requestFocus();
                return true;
            }
        }
        if (mVar.hasVisibleItems()) {
            k(mVar);
            j.a aVar = this.I;
            if (aVar != null) {
                aVar.b(mVar);
            }
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.j
    public Parcelable f() {
        return null;
    }

    @Override // androidx.appcompat.view.menu.j
    public void g(boolean z10) {
        for (d dVar : this.f1407t) {
            h.y(dVar.a().getAdapter()).notifyDataSetChanged();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean h() {
        return false;
    }

    @Override // k.e
    public boolean isShowing() {
        if (this.f1407t.size() <= 0 || !((d) this.f1407t.get(0)).f1421a.isShowing()) {
            return false;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.h
    public void k(e eVar) {
        eVar.c(this, this.f1400e);
        if (isShowing()) {
            F(eVar);
        } else {
            this.f1406s.add(eVar);
        }
    }

    @Override // androidx.appcompat.view.menu.h
    protected boolean l() {
        return false;
    }

    @Override // k.e
    public ListView n() {
        if (this.f1407t.isEmpty()) {
            return null;
        }
        List list = this.f1407t;
        return ((d) list.get(list.size() - 1)).a();
    }

    @Override // android.widget.PopupWindow.OnDismissListener
    public void onDismiss() {
        d dVar;
        int size = this.f1407t.size();
        int i10 = 0;
        while (true) {
            if (i10 < size) {
                dVar = (d) this.f1407t.get(i10);
                if (!dVar.f1421a.isShowing()) {
                    break;
                }
                i10++;
            } else {
                dVar = null;
                break;
            }
        }
        if (dVar != null) {
            dVar.f1422b.e(false);
        }
    }

    @Override // android.view.View.OnKeyListener
    public boolean onKey(View view, int i10, KeyEvent keyEvent) {
        if (keyEvent.getAction() == 1 && i10 == 82) {
            dismiss();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void p(View view) {
        if (this.f1413z != view) {
            this.f1413z = view;
            this.f1412y = androidx.core.view.j.b(this.f1411x, view.getLayoutDirection());
        }
    }

    @Override // androidx.appcompat.view.menu.h
    public void r(boolean z10) {
        this.G = z10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void s(int i10) {
        if (this.f1411x != i10) {
            this.f1411x = i10;
            this.f1412y = androidx.core.view.j.b(i10, this.f1413z.getLayoutDirection());
        }
    }

    @Override // k.e
    public void show() {
        boolean z10;
        if (!isShowing()) {
            for (e eVar : this.f1406s) {
                F(eVar);
            }
            this.f1406s.clear();
            View view = this.f1413z;
            this.A = view;
            if (view != null) {
                if (this.J == null) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                ViewTreeObserver viewTreeObserver = view.getViewTreeObserver();
                this.J = viewTreeObserver;
                if (z10) {
                    viewTreeObserver.addOnGlobalLayoutListener(this.f1408u);
                }
                this.A.addOnAttachStateChangeListener(this.f1409v);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.h
    public void t(int i10) {
        this.C = true;
        this.E = i10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void u(PopupWindow.OnDismissListener onDismissListener) {
        this.K = onDismissListener;
    }

    @Override // androidx.appcompat.view.menu.h
    public void v(boolean z10) {
        this.H = z10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void w(int i10) {
        this.D = true;
        this.F = i10;
    }
}
