package androidx.appcompat.view.menu;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.content.res.Resources;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.os.Parcelable;
import android.util.SparseArray;
import android.view.ContextMenu;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e implements t1.a {
    private static final int[] A = {1, 4, 5, 3, 2, 0};

    /* renamed from: a  reason: collision with root package name */
    private final Context f1442a;

    /* renamed from: b  reason: collision with root package name */
    private final Resources f1443b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f1444c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f1445d;

    /* renamed from: e  reason: collision with root package name */
    private a f1446e;

    /* renamed from: m  reason: collision with root package name */
    private ContextMenu.ContextMenuInfo f1454m;

    /* renamed from: n  reason: collision with root package name */
    CharSequence f1455n;

    /* renamed from: o  reason: collision with root package name */
    Drawable f1456o;

    /* renamed from: p  reason: collision with root package name */
    View f1457p;

    /* renamed from: x  reason: collision with root package name */
    private g f1465x;

    /* renamed from: z  reason: collision with root package name */
    private boolean f1467z;

    /* renamed from: l  reason: collision with root package name */
    private int f1453l = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1458q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1459r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1460s = false;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1461t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f1462u = false;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f1463v = new ArrayList();

    /* renamed from: w  reason: collision with root package name */
    private CopyOnWriteArrayList f1464w = new CopyOnWriteArrayList();

    /* renamed from: y  reason: collision with root package name */
    private boolean f1466y = false;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f1447f = new ArrayList();

    /* renamed from: g  reason: collision with root package name */
    private ArrayList f1448g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private boolean f1449h = true;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1450i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private ArrayList f1451j = new ArrayList();

    /* renamed from: k  reason: collision with root package name */
    private boolean f1452k = true;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
        boolean a(e eVar, MenuItem menuItem);

        void b(e eVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface b {
        boolean b(g gVar);
    }

    public e(Context context) {
        this.f1442a = context;
        this.f1443b = context.getResources();
        g0(true);
    }

    private static int D(int i10) {
        int i11 = ((-65536) & i10) >> 16;
        if (i11 >= 0) {
            int[] iArr = A;
            if (i11 < iArr.length) {
                return (i10 & 65535) | (iArr[i11] << 16);
            }
        }
        throw new IllegalArgumentException("order does not contain a valid category.");
    }

    private void Q(int i10, boolean z10) {
        if (i10 >= 0 && i10 < this.f1447f.size()) {
            this.f1447f.remove(i10);
            if (z10) {
                N(true);
            }
        }
    }

    private void b0(int i10, CharSequence charSequence, int i11, Drawable drawable, View view) {
        Resources E = E();
        if (view != null) {
            this.f1457p = view;
            this.f1455n = null;
            this.f1456o = null;
        } else {
            if (i10 > 0) {
                this.f1455n = E.getText(i10);
            } else if (charSequence != null) {
                this.f1455n = charSequence;
            }
            if (i11 > 0) {
                this.f1456o = androidx.core.content.a.e(w(), i11);
            } else if (drawable != null) {
                this.f1456o = drawable;
            }
            this.f1457p = null;
        }
        N(false);
    }

    private g g(int i10, int i11, int i12, int i13, CharSequence charSequence, int i14) {
        return new g(this, i10, i11, i12, i13, charSequence, i14);
    }

    /* JADX WARN: Code restructure failed: missing block: B:6:0x0019, code lost:
        if (androidx.core.view.l0.l(android.view.ViewConfiguration.get(r2.f1442a), r2.f1442a) != false) goto L6;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void g0(boolean r3) {
        /*
            r2 = this;
            if (r3 == 0) goto L1c
            android.content.res.Resources r3 = r2.f1443b
            android.content.res.Configuration r3 = r3.getConfiguration()
            int r3 = r3.keyboard
            r0 = 1
            if (r3 == r0) goto L1c
            android.content.Context r3 = r2.f1442a
            android.view.ViewConfiguration r3 = android.view.ViewConfiguration.get(r3)
            android.content.Context r1 = r2.f1442a
            boolean r3 = androidx.core.view.l0.l(r3, r1)
            if (r3 == 0) goto L1c
            goto L1d
        L1c:
            r0 = 0
        L1d:
            r2.f1445d = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.view.menu.e.g0(boolean):void");
    }

    private void i(boolean z10) {
        if (this.f1464w.isEmpty()) {
            return;
        }
        i0();
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1464w.remove(weakReference);
            } else {
                jVar.g(z10);
            }
        }
        h0();
    }

    private void j(Bundle bundle) {
        Parcelable parcelable;
        SparseArray sparseParcelableArray = bundle.getSparseParcelableArray("android:menu:presenters");
        if (sparseParcelableArray != null && !this.f1464w.isEmpty()) {
            Iterator it = this.f1464w.iterator();
            while (it.hasNext()) {
                WeakReference weakReference = (WeakReference) it.next();
                j jVar = (j) weakReference.get();
                if (jVar == null) {
                    this.f1464w.remove(weakReference);
                } else {
                    int id2 = jVar.getId();
                    if (id2 > 0 && (parcelable = (Parcelable) sparseParcelableArray.get(id2)) != null) {
                        jVar.d(parcelable);
                    }
                }
            }
        }
    }

    private void k(Bundle bundle) {
        Parcelable f10;
        if (this.f1464w.isEmpty()) {
            return;
        }
        SparseArray<? extends Parcelable> sparseArray = new SparseArray<>();
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1464w.remove(weakReference);
            } else {
                int id2 = jVar.getId();
                if (id2 > 0 && (f10 = jVar.f()) != null) {
                    sparseArray.put(id2, f10);
                }
            }
        }
        bundle.putSparseParcelableArray("android:menu:presenters", sparseArray);
    }

    private boolean l(m mVar, j jVar) {
        boolean z10 = false;
        if (this.f1464w.isEmpty()) {
            return false;
        }
        if (jVar != null) {
            z10 = jVar.e(mVar);
        }
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar2 = (j) weakReference.get();
            if (jVar2 == null) {
                this.f1464w.remove(weakReference);
            } else if (!z10) {
                z10 = jVar2.e(mVar);
            }
        }
        return z10;
    }

    private static int p(ArrayList arrayList, int i10) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            if (((g) arrayList.get(size)).f() <= i10) {
                return size + 1;
            }
        }
        return 0;
    }

    public View A() {
        return this.f1457p;
    }

    public ArrayList B() {
        t();
        return this.f1451j;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean C() {
        return this.f1461t;
    }

    Resources E() {
        return this.f1443b;
    }

    public e F() {
        return this;
    }

    public ArrayList G() {
        if (!this.f1449h) {
            return this.f1448g;
        }
        this.f1448g.clear();
        int size = this.f1447f.size();
        for (int i10 = 0; i10 < size; i10++) {
            g gVar = (g) this.f1447f.get(i10);
            if (gVar.isVisible()) {
                this.f1448g.add(gVar);
            }
        }
        this.f1449h = false;
        this.f1452k = true;
        return this.f1448g;
    }

    public boolean H() {
        return !this.f1458q;
    }

    public boolean I() {
        return this.f1466y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean J() {
        return this.f1444c;
    }

    public boolean K() {
        return this.f1445d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void L(g gVar) {
        this.f1452k = true;
        N(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void M(g gVar) {
        this.f1449h = true;
        N(true);
    }

    public void N(boolean z10) {
        if (!this.f1458q) {
            if (z10) {
                this.f1449h = true;
                this.f1452k = true;
            }
            i(z10);
            return;
        }
        this.f1459r = true;
        if (z10) {
            this.f1460s = true;
        }
    }

    public boolean O(MenuItem menuItem, int i10) {
        return P(menuItem, null, i10);
    }

    public boolean P(MenuItem menuItem, j jVar, int i10) {
        boolean z10;
        g gVar = (g) menuItem;
        if (gVar == null || !gVar.isEnabled()) {
            return false;
        }
        boolean k10 = gVar.k();
        androidx.core.view.b a10 = gVar.a();
        if (a10 != null && a10.a()) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (gVar.j()) {
            boolean expandActionView = gVar.expandActionView() | k10;
            if (expandActionView) {
                e(true);
            }
            return expandActionView;
        } else if (!gVar.hasSubMenu() && !z10) {
            if ((i10 & 1) == 0) {
                e(true);
            }
            return k10;
        } else {
            if ((i10 & 4) == 0) {
                e(false);
            }
            if (!gVar.hasSubMenu()) {
                gVar.x(new m(w(), this, gVar));
            }
            m mVar = (m) gVar.getSubMenu();
            if (z10) {
                a10.e(mVar);
            }
            boolean l10 = l(mVar, jVar) | k10;
            if (!l10) {
                e(true);
            }
            return l10;
        }
    }

    public void R(j jVar) {
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar2 = (j) weakReference.get();
            if (jVar2 == null || jVar2 == jVar) {
                this.f1464w.remove(weakReference);
            }
        }
    }

    public void S(Bundle bundle) {
        MenuItem findItem;
        if (bundle != null) {
            SparseArray<Parcelable> sparseParcelableArray = bundle.getSparseParcelableArray(v());
            int size = size();
            for (int i10 = 0; i10 < size; i10++) {
                MenuItem item = getItem(i10);
                View actionView = item.getActionView();
                if (actionView != null && actionView.getId() != -1) {
                    actionView.restoreHierarchyState(sparseParcelableArray);
                }
                if (item.hasSubMenu()) {
                    ((m) item.getSubMenu()).S(bundle);
                }
            }
            int i11 = bundle.getInt("android:menu:expandedactionview");
            if (i11 > 0 && (findItem = findItem(i11)) != null) {
                findItem.expandActionView();
            }
        }
    }

    public void T(Bundle bundle) {
        j(bundle);
    }

    public void U(Bundle bundle) {
        int size = size();
        SparseArray<? extends Parcelable> sparseArray = null;
        for (int i10 = 0; i10 < size; i10++) {
            MenuItem item = getItem(i10);
            View actionView = item.getActionView();
            if (actionView != null && actionView.getId() != -1) {
                if (sparseArray == null) {
                    sparseArray = new SparseArray<>();
                }
                actionView.saveHierarchyState(sparseArray);
                if (item.isActionViewExpanded()) {
                    bundle.putInt("android:menu:expandedactionview", item.getItemId());
                }
            }
            if (item.hasSubMenu()) {
                ((m) item.getSubMenu()).U(bundle);
            }
        }
        if (sparseArray != null) {
            bundle.putSparseParcelableArray(v(), sparseArray);
        }
    }

    public void V(Bundle bundle) {
        k(bundle);
    }

    public void W(a aVar) {
        this.f1446e = aVar;
    }

    public e X(int i10) {
        this.f1453l = i10;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void Y(MenuItem menuItem) {
        boolean z10;
        int groupId = menuItem.getGroupId();
        int size = this.f1447f.size();
        i0();
        for (int i10 = 0; i10 < size; i10++) {
            g gVar = (g) this.f1447f.get(i10);
            if (gVar.getGroupId() == groupId && gVar.m() && gVar.isCheckable()) {
                if (gVar == menuItem) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                gVar.s(z10);
            }
        }
        h0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e Z(int i10) {
        b0(0, null, i10, null, null);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public MenuItem a(int i10, int i11, int i12, CharSequence charSequence) {
        int D = D(i12);
        g g10 = g(i10, i11, i12, D, charSequence, this.f1453l);
        ContextMenu.ContextMenuInfo contextMenuInfo = this.f1454m;
        if (contextMenuInfo != null) {
            g10.v(contextMenuInfo);
        }
        ArrayList arrayList = this.f1447f;
        arrayList.add(p(arrayList, D), g10);
        N(true);
        return g10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e a0(Drawable drawable) {
        b0(0, null, 0, drawable, null);
        return this;
    }

    @Override // android.view.Menu
    public MenuItem add(CharSequence charSequence) {
        return a(0, 0, 0, charSequence);
    }

    @Override // android.view.Menu
    public int addIntentOptions(int i10, int i11, int i12, ComponentName componentName, Intent[] intentArr, Intent intent, int i13, MenuItem[] menuItemArr) {
        int i14;
        Intent intent2;
        int i15;
        PackageManager packageManager = this.f1442a.getPackageManager();
        List<ResolveInfo> queryIntentActivityOptions = packageManager.queryIntentActivityOptions(componentName, intentArr, intent, 0);
        if (queryIntentActivityOptions != null) {
            i14 = queryIntentActivityOptions.size();
        } else {
            i14 = 0;
        }
        if ((i13 & 1) == 0) {
            removeGroup(i10);
        }
        for (int i16 = 0; i16 < i14; i16++) {
            ResolveInfo resolveInfo = queryIntentActivityOptions.get(i16);
            int i17 = resolveInfo.specificIndex;
            if (i17 < 0) {
                intent2 = intent;
            } else {
                intent2 = intentArr[i17];
            }
            Intent intent3 = new Intent(intent2);
            ActivityInfo activityInfo = resolveInfo.activityInfo;
            intent3.setComponent(new ComponentName(activityInfo.applicationInfo.packageName, activityInfo.name));
            MenuItem intent4 = add(i10, i11, i12, resolveInfo.loadLabel(packageManager)).setIcon(resolveInfo.loadIcon(packageManager)).setIntent(intent3);
            if (menuItemArr != null && (i15 = resolveInfo.specificIndex) >= 0) {
                menuItemArr[i15] = intent4;
            }
        }
        return i14;
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(CharSequence charSequence) {
        return addSubMenu(0, 0, 0, charSequence);
    }

    public void b(j jVar) {
        c(jVar, this.f1442a);
    }

    public void c(j jVar, Context context) {
        this.f1464w.add(new WeakReference(jVar));
        jVar.j(context, this);
        this.f1452k = true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e c0(int i10) {
        b0(i10, null, 0, null, null);
        return this;
    }

    @Override // android.view.Menu
    public void clear() {
        g gVar = this.f1465x;
        if (gVar != null) {
            f(gVar);
        }
        this.f1447f.clear();
        N(true);
    }

    public void clearHeader() {
        this.f1456o = null;
        this.f1455n = null;
        this.f1457p = null;
        N(false);
    }

    @Override // android.view.Menu
    public void close() {
        e(true);
    }

    public void d() {
        a aVar = this.f1446e;
        if (aVar != null) {
            aVar.b(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e d0(CharSequence charSequence) {
        b0(0, charSequence, 0, null, null);
        return this;
    }

    public final void e(boolean z10) {
        if (this.f1462u) {
            return;
        }
        this.f1462u = true;
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1464w.remove(weakReference);
            } else {
                jVar.a(this, z10);
            }
        }
        this.f1462u = false;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e e0(View view) {
        b0(0, null, 0, null, view);
        return this;
    }

    public boolean f(g gVar) {
        boolean z10 = false;
        if (!this.f1464w.isEmpty() && this.f1465x == gVar) {
            i0();
            Iterator it = this.f1464w.iterator();
            while (it.hasNext()) {
                WeakReference weakReference = (WeakReference) it.next();
                j jVar = (j) weakReference.get();
                if (jVar == null) {
                    this.f1464w.remove(weakReference);
                } else {
                    z10 = jVar.i(this, gVar);
                    if (z10) {
                        break;
                    }
                }
            }
            h0();
            if (z10) {
                this.f1465x = null;
            }
        }
        return z10;
    }

    public void f0(boolean z10) {
        this.f1467z = z10;
    }

    @Override // android.view.Menu
    public MenuItem findItem(int i10) {
        MenuItem findItem;
        int size = size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1447f.get(i11);
            if (gVar.getItemId() == i10) {
                return gVar;
            }
            if (gVar.hasSubMenu() && (findItem = gVar.getSubMenu().findItem(i10)) != null) {
                return findItem;
            }
        }
        return null;
    }

    @Override // android.view.Menu
    public MenuItem getItem(int i10) {
        return (MenuItem) this.f1447f.get(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(e eVar, MenuItem menuItem) {
        a aVar = this.f1446e;
        if (aVar != null && aVar.a(eVar, menuItem)) {
            return true;
        }
        return false;
    }

    public void h0() {
        this.f1458q = false;
        if (this.f1459r) {
            this.f1459r = false;
            N(this.f1460s);
        }
    }

    @Override // android.view.Menu
    public boolean hasVisibleItems() {
        if (this.f1467z) {
            return true;
        }
        int size = size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((g) this.f1447f.get(i10)).isVisible()) {
                return true;
            }
        }
        return false;
    }

    public void i0() {
        if (!this.f1458q) {
            this.f1458q = true;
            this.f1459r = false;
            this.f1460s = false;
        }
    }

    @Override // android.view.Menu
    public boolean isShortcutKey(int i10, KeyEvent keyEvent) {
        if (r(i10, keyEvent) != null) {
            return true;
        }
        return false;
    }

    public boolean m(g gVar) {
        boolean z10 = false;
        if (this.f1464w.isEmpty()) {
            return false;
        }
        i0();
        Iterator it = this.f1464w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1464w.remove(weakReference);
            } else {
                z10 = jVar.b(this, gVar);
                if (z10) {
                    break;
                }
            }
        }
        h0();
        if (z10) {
            this.f1465x = gVar;
        }
        return z10;
    }

    public int n(int i10) {
        return o(i10, 0);
    }

    public int o(int i10, int i11) {
        int size = size();
        if (i11 < 0) {
            i11 = 0;
        }
        while (i11 < size) {
            if (((g) this.f1447f.get(i11)).getGroupId() == i10) {
                return i11;
            }
            i11++;
        }
        return -1;
    }

    @Override // android.view.Menu
    public boolean performIdentifierAction(int i10, int i11) {
        return O(findItem(i10), i11);
    }

    @Override // android.view.Menu
    public boolean performShortcut(int i10, KeyEvent keyEvent, int i11) {
        boolean z10;
        g r10 = r(i10, keyEvent);
        if (r10 != null) {
            z10 = O(r10, i11);
        } else {
            z10 = false;
        }
        if ((i11 & 2) != 0) {
            e(true);
        }
        return z10;
    }

    public int q(int i10) {
        int size = size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((g) this.f1447f.get(i11)).getItemId() == i10) {
                return i11;
            }
        }
        return -1;
    }

    g r(int i10, KeyEvent keyEvent) {
        char numericShortcut;
        ArrayList arrayList = this.f1463v;
        arrayList.clear();
        s(arrayList, i10, keyEvent);
        if (arrayList.isEmpty()) {
            return null;
        }
        int metaState = keyEvent.getMetaState();
        KeyCharacterMap.KeyData keyData = new KeyCharacterMap.KeyData();
        keyEvent.getKeyData(keyData);
        int size = arrayList.size();
        if (size == 1) {
            return (g) arrayList.get(0);
        }
        boolean J = J();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) arrayList.get(i11);
            if (J) {
                numericShortcut = gVar.getAlphabeticShortcut();
            } else {
                numericShortcut = gVar.getNumericShortcut();
            }
            char[] cArr = keyData.meta;
            if ((numericShortcut == cArr[0] && (metaState & 2) == 0) || ((numericShortcut == cArr[2] && (metaState & 2) != 0) || (J && numericShortcut == '\b' && i10 == 67))) {
                return gVar;
            }
        }
        return null;
    }

    @Override // android.view.Menu
    public void removeGroup(int i10) {
        int n10 = n(i10);
        if (n10 >= 0) {
            int size = this.f1447f.size() - n10;
            int i11 = 0;
            while (true) {
                int i12 = i11 + 1;
                if (i11 >= size || ((g) this.f1447f.get(n10)).getGroupId() != i10) {
                    break;
                }
                Q(n10, false);
                i11 = i12;
            }
            N(true);
        }
    }

    @Override // android.view.Menu
    public void removeItem(int i10) {
        Q(q(i10), true);
    }

    void s(List list, int i10, KeyEvent keyEvent) {
        char numericShortcut;
        int numericModifiers;
        boolean J = J();
        int modifiers = keyEvent.getModifiers();
        KeyCharacterMap.KeyData keyData = new KeyCharacterMap.KeyData();
        if (keyEvent.getKeyData(keyData) || i10 == 67) {
            int size = this.f1447f.size();
            for (int i11 = 0; i11 < size; i11++) {
                g gVar = (g) this.f1447f.get(i11);
                if (gVar.hasSubMenu()) {
                    ((e) gVar.getSubMenu()).s(list, i10, keyEvent);
                }
                if (J) {
                    numericShortcut = gVar.getAlphabeticShortcut();
                } else {
                    numericShortcut = gVar.getNumericShortcut();
                }
                if (J) {
                    numericModifiers = gVar.getAlphabeticModifiers();
                } else {
                    numericModifiers = gVar.getNumericModifiers();
                }
                if ((modifiers & 69647) == (numericModifiers & 69647) && numericShortcut != 0) {
                    char[] cArr = keyData.meta;
                    if ((numericShortcut == cArr[0] || numericShortcut == cArr[2] || (J && numericShortcut == '\b' && i10 == 67)) && gVar.isEnabled()) {
                        list.add(gVar);
                    }
                }
            }
        }
    }

    @Override // android.view.Menu
    public void setGroupCheckable(int i10, boolean z10, boolean z11) {
        int size = this.f1447f.size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1447f.get(i11);
            if (gVar.getGroupId() == i10) {
                gVar.t(z11);
                gVar.setCheckable(z10);
            }
        }
    }

    @Override // android.view.Menu
    public void setGroupDividerEnabled(boolean z10) {
        this.f1466y = z10;
    }

    @Override // android.view.Menu
    public void setGroupEnabled(int i10, boolean z10) {
        int size = this.f1447f.size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1447f.get(i11);
            if (gVar.getGroupId() == i10) {
                gVar.setEnabled(z10);
            }
        }
    }

    @Override // android.view.Menu
    public void setGroupVisible(int i10, boolean z10) {
        int size = this.f1447f.size();
        boolean z11 = false;
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1447f.get(i11);
            if (gVar.getGroupId() == i10 && gVar.y(z10)) {
                z11 = true;
            }
        }
        if (z11) {
            N(true);
        }
    }

    @Override // android.view.Menu
    public void setQwertyMode(boolean z10) {
        this.f1444c = z10;
        N(false);
    }

    @Override // android.view.Menu
    public int size() {
        return this.f1447f.size();
    }

    public void t() {
        ArrayList G = G();
        if (!this.f1452k) {
            return;
        }
        Iterator it = this.f1464w.iterator();
        boolean z10 = false;
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1464w.remove(weakReference);
            } else {
                z10 |= jVar.h();
            }
        }
        if (z10) {
            this.f1450i.clear();
            this.f1451j.clear();
            int size = G.size();
            for (int i10 = 0; i10 < size; i10++) {
                g gVar = (g) G.get(i10);
                if (gVar.l()) {
                    this.f1450i.add(gVar);
                } else {
                    this.f1451j.add(gVar);
                }
            }
        } else {
            this.f1450i.clear();
            this.f1451j.clear();
            this.f1451j.addAll(G());
        }
        this.f1452k = false;
    }

    public ArrayList u() {
        t();
        return this.f1450i;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String v() {
        return "android:menu:actionviewstates";
    }

    public Context w() {
        return this.f1442a;
    }

    public g x() {
        return this.f1465x;
    }

    public Drawable y() {
        return this.f1456o;
    }

    public CharSequence z() {
        return this.f1455n;
    }

    @Override // android.view.Menu
    public MenuItem add(int i10) {
        return a(0, 0, 0, this.f1443b.getString(i10));
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10) {
        return addSubMenu(0, 0, 0, this.f1443b.getString(i10));
    }

    @Override // android.view.Menu
    public MenuItem add(int i10, int i11, int i12, CharSequence charSequence) {
        return a(i10, i11, i12, charSequence);
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10, int i11, int i12, CharSequence charSequence) {
        g gVar = (g) a(i10, i11, i12, charSequence);
        m mVar = new m(this.f1442a, this, gVar);
        gVar.x(mVar);
        return mVar;
    }

    @Override // android.view.Menu
    public MenuItem add(int i10, int i11, int i12, int i13) {
        return a(i10, i11, i12, this.f1443b.getString(i13));
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10, int i11, int i12, int i13) {
        return addSubMenu(i10, i11, i12, this.f1443b.getString(i13));
    }
}
