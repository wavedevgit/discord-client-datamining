package androidx.appcompat.view.menu;

import android.content.Context;
import android.content.res.Resources;
import android.graphics.Rect;
import android.os.Build;
import android.os.Handler;
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
    private static final int M = f.g.f23384e;
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
    private final Context f1292e;

    /* renamed from: i  reason: collision with root package name */
    private final int f1293i;

    /* renamed from: o  reason: collision with root package name */
    private final int f1294o;

    /* renamed from: p  reason: collision with root package name */
    private final int f1295p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f1296q;

    /* renamed from: r  reason: collision with root package name */
    final Handler f1297r;

    /* renamed from: z  reason: collision with root package name */
    private View f1305z;

    /* renamed from: s  reason: collision with root package name */
    private final List f1298s = new ArrayList();

    /* renamed from: t  reason: collision with root package name */
    final List f1299t = new ArrayList();

    /* renamed from: u  reason: collision with root package name */
    final ViewTreeObserver.OnGlobalLayoutListener f1300u = new a();

    /* renamed from: v  reason: collision with root package name */
    private final View.OnAttachStateChangeListener f1301v = new View$OnAttachStateChangeListenerC0021b();

    /* renamed from: w  reason: collision with root package name */
    private final k0 f1302w = new c();

    /* renamed from: x  reason: collision with root package name */
    private int f1303x = 0;

    /* renamed from: y  reason: collision with root package name */
    private int f1304y = 0;
    private boolean G = false;
    private int B = B();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements ViewTreeObserver.OnGlobalLayoutListener {
        a() {
        }

        @Override // android.view.ViewTreeObserver.OnGlobalLayoutListener
        public void onGlobalLayout() {
            if (b.this.isShowing() && b.this.f1299t.size() > 0 && !((d) b.this.f1299t.get(0)).f1313a.z()) {
                View view = b.this.A;
                if (view != null && view.isShown()) {
                    for (d dVar : b.this.f1299t) {
                        dVar.f1313a.show();
                    }
                    return;
                }
                b.this.dismiss();
            }
        }
    }

    /* renamed from: androidx.appcompat.view.menu.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class View$OnAttachStateChangeListenerC0021b implements View.OnAttachStateChangeListener {
        View$OnAttachStateChangeListenerC0021b() {
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
                bVar.J.removeGlobalOnLayoutListener(bVar.f1300u);
            }
            view.removeOnAttachStateChangeListener(this);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class c implements k0 {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a implements Runnable {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ d f1309d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ MenuItem f1310e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ e f1311i;

            a(d dVar, MenuItem menuItem, e eVar) {
                this.f1309d = dVar;
                this.f1310e = menuItem;
                this.f1311i = eVar;
            }

            @Override // java.lang.Runnable
            public void run() {
                d dVar = this.f1309d;
                if (dVar != null) {
                    b.this.L = true;
                    dVar.f1314b.e(false);
                    b.this.L = false;
                }
                if (this.f1310e.isEnabled() && this.f1310e.hasSubMenu()) {
                    this.f1311i.M(this.f1310e, 4);
                }
            }
        }

        c() {
        }

        @Override // androidx.appcompat.widget.k0
        public void a(e eVar, MenuItem menuItem) {
            d dVar = null;
            b.this.f1297r.removeCallbacksAndMessages(null);
            int size = b.this.f1299t.size();
            int i10 = 0;
            while (true) {
                if (i10 < size) {
                    if (eVar == ((d) b.this.f1299t.get(i10)).f1314b) {
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
            if (i11 < b.this.f1299t.size()) {
                dVar = (d) b.this.f1299t.get(i11);
            }
            b.this.f1297r.postAtTime(new a(dVar, menuItem, eVar), eVar, SystemClock.uptimeMillis() + 200);
        }

        @Override // androidx.appcompat.widget.k0
        public void m(e eVar, MenuItem menuItem) {
            b.this.f1297r.removeCallbacksAndMessages(eVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d {

        /* renamed from: a  reason: collision with root package name */
        public final l0 f1313a;

        /* renamed from: b  reason: collision with root package name */
        public final e f1314b;

        /* renamed from: c  reason: collision with root package name */
        public final int f1315c;

        public d(l0 l0Var, e eVar, int i10) {
            this.f1313a = l0Var;
            this.f1314b = eVar;
            this.f1315c = i10;
        }

        public ListView a() {
            return this.f1313a.n();
        }
    }

    public b(Context context, View view, int i10, int i11, boolean z10) {
        this.f1292e = context;
        this.f1305z = view;
        this.f1294o = i10;
        this.f1295p = i11;
        this.f1296q = z10;
        Resources resources = context.getResources();
        this.f1293i = Math.max(resources.getDisplayMetrics().widthPixels / 2, resources.getDimensionPixelSize(f.d.f23316b));
        this.f1297r = new Handler();
    }

    private View A(d dVar, e eVar) {
        androidx.appcompat.view.menu.d dVar2;
        int i10;
        int firstVisiblePosition;
        MenuItem z10 = z(dVar.f1314b, eVar);
        if (z10 == null) {
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
                if (z10 == dVar2.getItem(i11)) {
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

    private int B() {
        if (this.f1305z.getLayoutDirection() != 1) {
            return 1;
        }
        return 0;
    }

    private int C(int i10) {
        List list = this.f1299t;
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

    private void D(e eVar) {
        d dVar;
        View view;
        boolean z10;
        int i10;
        int i11;
        int i12;
        LayoutInflater from = LayoutInflater.from(this.f1292e);
        androidx.appcompat.view.menu.d dVar2 = new androidx.appcompat.view.menu.d(eVar, from, this.f1296q, M);
        if (!isShowing() && this.G) {
            dVar2.d(true);
        } else if (isShowing()) {
            dVar2.d(h.v(eVar));
        }
        int l10 = h.l(dVar2, null, this.f1292e, this.f1293i);
        l0 x10 = x();
        x10.l(dVar2);
        x10.D(l10);
        x10.E(this.f1304y);
        if (this.f1299t.size() > 0) {
            List list = this.f1299t;
            dVar = (d) list.get(list.size() - 1);
            view = A(dVar, eVar);
        } else {
            dVar = null;
            view = null;
        }
        if (view != null) {
            x10.T(false);
            x10.Q(null);
            int C = C(l10);
            if (C == 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.B = C;
            if (Build.VERSION.SDK_INT >= 26) {
                x10.B(view);
                i11 = 0;
                i10 = 0;
            } else {
                int[] iArr = new int[2];
                this.f1305z.getLocationOnScreen(iArr);
                int[] iArr2 = new int[2];
                view.getLocationOnScreen(iArr2);
                if ((this.f1304y & 7) == 5) {
                    iArr[0] = iArr[0] + this.f1305z.getWidth();
                    iArr2[0] = iArr2[0] + view.getWidth();
                }
                i10 = iArr2[0] - iArr[0];
                i11 = iArr2[1] - iArr[1];
            }
            if ((this.f1304y & 5) == 5) {
                if (!z10) {
                    l10 = view.getWidth();
                    i12 = i10 - l10;
                }
                i12 = i10 + l10;
            } else {
                if (z10) {
                    l10 = view.getWidth();
                    i12 = i10 + l10;
                }
                i12 = i10 - l10;
            }
            x10.d(i12);
            x10.L(true);
            x10.h(i11);
        } else {
            if (this.C) {
                x10.d(this.E);
            }
            if (this.D) {
                x10.h(this.F);
            }
            x10.F(k());
        }
        this.f1299t.add(new d(x10, eVar, this.B));
        x10.show();
        ListView n10 = x10.n();
        n10.setOnKeyListener(this);
        if (dVar == null && this.H && eVar.x() != null) {
            FrameLayout frameLayout = (FrameLayout) from.inflate(f.g.f23391l, (ViewGroup) n10, false);
            frameLayout.setEnabled(false);
            ((TextView) frameLayout.findViewById(16908310)).setText(eVar.x());
            n10.addHeaderView(frameLayout, null, false);
            x10.show();
        }
    }

    private l0 x() {
        l0 l0Var = new l0(this.f1292e, null, this.f1294o, this.f1295p);
        l0Var.S(this.f1302w);
        l0Var.J(this);
        l0Var.I(this);
        l0Var.B(this.f1305z);
        l0Var.E(this.f1304y);
        l0Var.H(true);
        l0Var.G(2);
        return l0Var;
    }

    private int y(e eVar) {
        int size = this.f1299t.size();
        for (int i10 = 0; i10 < size; i10++) {
            if (eVar == ((d) this.f1299t.get(i10)).f1314b) {
                return i10;
            }
        }
        return -1;
    }

    private MenuItem z(e eVar, e eVar2) {
        int size = eVar.size();
        for (int i10 = 0; i10 < size; i10++) {
            MenuItem item = eVar.getItem(i10);
            if (item.hasSubMenu() && eVar2 == item.getSubMenu()) {
                return item;
            }
        }
        return null;
    }

    @Override // androidx.appcompat.view.menu.j
    public void a(e eVar, boolean z10) {
        int y10 = y(eVar);
        if (y10 >= 0) {
            int i10 = y10 + 1;
            if (i10 < this.f1299t.size()) {
                ((d) this.f1299t.get(i10)).f1314b.e(false);
            }
            d dVar = (d) this.f1299t.remove(y10);
            dVar.f1314b.P(this);
            if (this.L) {
                dVar.f1313a.R(null);
                dVar.f1313a.C(0);
            }
            dVar.f1313a.dismiss();
            int size = this.f1299t.size();
            if (size > 0) {
                this.B = ((d) this.f1299t.get(size - 1)).f1315c;
            } else {
                this.B = B();
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
                        this.J.removeGlobalOnLayoutListener(this.f1300u);
                    }
                    this.J = null;
                }
                this.A.removeOnAttachStateChangeListener(this.f1301v);
                this.K.onDismiss();
            } else if (z10) {
                ((d) this.f1299t.get(0)).f1314b.e(false);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void c(j.a aVar) {
        this.I = aVar;
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean d(m mVar) {
        for (d dVar : this.f1299t) {
            if (mVar == dVar.f1314b) {
                dVar.a().requestFocus();
                return true;
            }
        }
        if (mVar.hasVisibleItems()) {
            i(mVar);
            j.a aVar = this.I;
            if (aVar != null) {
                aVar.b(mVar);
            }
            return true;
        }
        return false;
    }

    @Override // k.e
    public void dismiss() {
        int size = this.f1299t.size();
        if (size > 0) {
            d[] dVarArr = (d[]) this.f1299t.toArray(new d[size]);
            for (int i10 = size - 1; i10 >= 0; i10--) {
                d dVar = dVarArr[i10];
                if (dVar.f1313a.isShowing()) {
                    dVar.f1313a.dismiss();
                }
            }
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public void e(boolean z10) {
        for (d dVar : this.f1299t) {
            h.w(dVar.a().getAdapter()).notifyDataSetChanged();
        }
    }

    @Override // androidx.appcompat.view.menu.j
    public boolean f() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void i(e eVar) {
        eVar.c(this, this.f1292e);
        if (isShowing()) {
            D(eVar);
        } else {
            this.f1298s.add(eVar);
        }
    }

    @Override // k.e
    public boolean isShowing() {
        if (this.f1299t.size() <= 0 || !((d) this.f1299t.get(0)).f1313a.isShowing()) {
            return false;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.h
    protected boolean j() {
        return false;
    }

    @Override // androidx.appcompat.view.menu.h
    public void m(View view) {
        if (this.f1305z != view) {
            this.f1305z = view;
            this.f1304y = androidx.core.view.j.b(this.f1303x, view.getLayoutDirection());
        }
    }

    @Override // k.e
    public ListView n() {
        if (this.f1299t.isEmpty()) {
            return null;
        }
        List list = this.f1299t;
        return ((d) list.get(list.size() - 1)).a();
    }

    @Override // android.widget.PopupWindow.OnDismissListener
    public void onDismiss() {
        d dVar;
        int size = this.f1299t.size();
        int i10 = 0;
        while (true) {
            if (i10 < size) {
                dVar = (d) this.f1299t.get(i10);
                if (!dVar.f1313a.isShowing()) {
                    break;
                }
                i10++;
            } else {
                dVar = null;
                break;
            }
        }
        if (dVar != null) {
            dVar.f1314b.e(false);
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
    public void p(boolean z10) {
        this.G = z10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void q(int i10) {
        if (this.f1303x != i10) {
            this.f1303x = i10;
            this.f1304y = androidx.core.view.j.b(i10, this.f1305z.getLayoutDirection());
        }
    }

    @Override // androidx.appcompat.view.menu.h
    public void r(int i10) {
        this.C = true;
        this.E = i10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void s(PopupWindow.OnDismissListener onDismissListener) {
        this.K = onDismissListener;
    }

    @Override // k.e
    public void show() {
        boolean z10;
        if (!isShowing()) {
            for (e eVar : this.f1298s) {
                D(eVar);
            }
            this.f1298s.clear();
            View view = this.f1305z;
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
                    viewTreeObserver.addOnGlobalLayoutListener(this.f1300u);
                }
                this.A.addOnAttachStateChangeListener(this.f1301v);
            }
        }
    }

    @Override // androidx.appcompat.view.menu.h
    public void t(boolean z10) {
        this.H = z10;
    }

    @Override // androidx.appcompat.view.menu.h
    public void u(int i10) {
        this.D = true;
        this.F = i10;
    }
}
