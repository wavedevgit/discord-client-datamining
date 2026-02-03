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
    private final Context f1302a;

    /* renamed from: b  reason: collision with root package name */
    private final Resources f1303b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f1304c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f1305d;

    /* renamed from: e  reason: collision with root package name */
    private a f1306e;

    /* renamed from: m  reason: collision with root package name */
    private ContextMenu.ContextMenuInfo f1314m;

    /* renamed from: n  reason: collision with root package name */
    CharSequence f1315n;

    /* renamed from: o  reason: collision with root package name */
    Drawable f1316o;

    /* renamed from: p  reason: collision with root package name */
    View f1317p;

    /* renamed from: x  reason: collision with root package name */
    private g f1325x;

    /* renamed from: z  reason: collision with root package name */
    private boolean f1327z;

    /* renamed from: l  reason: collision with root package name */
    private int f1313l = 0;

    /* renamed from: q  reason: collision with root package name */
    private boolean f1318q = false;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1319r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1320s = false;

    /* renamed from: t  reason: collision with root package name */
    private boolean f1321t = false;

    /* renamed from: u  reason: collision with root package name */
    private boolean f1322u = false;

    /* renamed from: v  reason: collision with root package name */
    private ArrayList f1323v = new ArrayList();

    /* renamed from: w  reason: collision with root package name */
    private CopyOnWriteArrayList f1324w = new CopyOnWriteArrayList();

    /* renamed from: y  reason: collision with root package name */
    private boolean f1326y = false;

    /* renamed from: f  reason: collision with root package name */
    private ArrayList f1307f = new ArrayList();

    /* renamed from: g  reason: collision with root package name */
    private ArrayList f1308g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private boolean f1309h = true;

    /* renamed from: i  reason: collision with root package name */
    private ArrayList f1310i = new ArrayList();

    /* renamed from: j  reason: collision with root package name */
    private ArrayList f1311j = new ArrayList();

    /* renamed from: k  reason: collision with root package name */
    private boolean f1312k = true;

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
        this.f1302a = context;
        this.f1303b = context.getResources();
        c0(true);
    }

    private static int B(int i10) {
        int i11 = ((-65536) & i10) >> 16;
        if (i11 >= 0) {
            int[] iArr = A;
            if (i11 < iArr.length) {
                return (i10 & 65535) | (iArr[i11] << 16);
            }
        }
        throw new IllegalArgumentException("order does not contain a valid category.");
    }

    private void O(int i10, boolean z10) {
        if (i10 >= 0 && i10 < this.f1307f.size()) {
            this.f1307f.remove(i10);
            if (z10) {
                L(true);
            }
        }
    }

    private void X(int i10, CharSequence charSequence, int i11, Drawable drawable, View view) {
        Resources C = C();
        if (view != null) {
            this.f1317p = view;
            this.f1315n = null;
            this.f1316o = null;
        } else {
            if (i10 > 0) {
                this.f1315n = C.getText(i10);
            } else if (charSequence != null) {
                this.f1315n = charSequence;
            }
            if (i11 > 0) {
                this.f1316o = androidx.core.content.a.e(u(), i11);
            } else if (drawable != null) {
                this.f1316o = drawable;
            }
            this.f1317p = null;
        }
        L(false);
    }

    /* JADX WARN: Code restructure failed: missing block: B:6:0x0019, code lost:
        if (androidx.core.view.k0.l(android.view.ViewConfiguration.get(r2.f1302a), r2.f1302a) != false) goto L6;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void c0(boolean r3) {
        /*
            r2 = this;
            if (r3 == 0) goto L1c
            android.content.res.Resources r3 = r2.f1303b
            android.content.res.Configuration r3 = r3.getConfiguration()
            int r3 = r3.keyboard
            r0 = 1
            if (r3 == r0) goto L1c
            android.content.Context r3 = r2.f1302a
            android.view.ViewConfiguration r3 = android.view.ViewConfiguration.get(r3)
            android.content.Context r1 = r2.f1302a
            boolean r3 = androidx.core.view.k0.l(r3, r1)
            if (r3 == 0) goto L1c
            goto L1d
        L1c:
            r0 = 0
        L1d:
            r2.f1305d = r0
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.view.menu.e.c0(boolean):void");
    }

    private g g(int i10, int i11, int i12, int i13, CharSequence charSequence, int i14) {
        return new g(this, i10, i11, i12, i13, charSequence, i14);
    }

    private void i(boolean z10) {
        if (this.f1324w.isEmpty()) {
            return;
        }
        e0();
        Iterator it = this.f1324w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1324w.remove(weakReference);
            } else {
                jVar.e(z10);
            }
        }
        d0();
    }

    private boolean j(m mVar, j jVar) {
        boolean z10 = false;
        if (this.f1324w.isEmpty()) {
            return false;
        }
        if (jVar != null) {
            z10 = jVar.d(mVar);
        }
        Iterator it = this.f1324w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar2 = (j) weakReference.get();
            if (jVar2 == null) {
                this.f1324w.remove(weakReference);
            } else if (!z10) {
                z10 = jVar2.d(mVar);
            }
        }
        return z10;
    }

    private static int n(ArrayList arrayList, int i10) {
        for (int size = arrayList.size() - 1; size >= 0; size--) {
            if (((g) arrayList.get(size)).f() <= i10) {
                return size + 1;
            }
        }
        return 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        return this.f1321t;
    }

    Resources C() {
        return this.f1303b;
    }

    public e D() {
        return this;
    }

    public ArrayList E() {
        if (!this.f1309h) {
            return this.f1308g;
        }
        this.f1308g.clear();
        int size = this.f1307f.size();
        for (int i10 = 0; i10 < size; i10++) {
            g gVar = (g) this.f1307f.get(i10);
            if (gVar.isVisible()) {
                this.f1308g.add(gVar);
            }
        }
        this.f1309h = false;
        this.f1312k = true;
        return this.f1308g;
    }

    public boolean F() {
        return !this.f1318q;
    }

    public boolean G() {
        return this.f1326y;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean H() {
        return this.f1304c;
    }

    public boolean I() {
        return this.f1305d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void J(g gVar) {
        this.f1312k = true;
        L(true);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void K(g gVar) {
        this.f1309h = true;
        L(true);
    }

    public void L(boolean z10) {
        if (!this.f1318q) {
            if (z10) {
                this.f1309h = true;
                this.f1312k = true;
            }
            i(z10);
            return;
        }
        this.f1319r = true;
        if (z10) {
            this.f1320s = true;
        }
    }

    public boolean M(MenuItem menuItem, int i10) {
        return N(menuItem, null, i10);
    }

    public boolean N(MenuItem menuItem, j jVar, int i10) {
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
                gVar.x(new m(u(), this, gVar));
            }
            m mVar = (m) gVar.getSubMenu();
            if (z10) {
                a10.e(mVar);
            }
            boolean j10 = j(mVar, jVar) | k10;
            if (!j10) {
                e(true);
            }
            return j10;
        }
    }

    public void P(j jVar) {
        Iterator it = this.f1324w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar2 = (j) weakReference.get();
            if (jVar2 == null || jVar2 == jVar) {
                this.f1324w.remove(weakReference);
            }
        }
    }

    public void Q(Bundle bundle) {
        MenuItem findItem;
        if (bundle != null) {
            SparseArray<Parcelable> sparseParcelableArray = bundle.getSparseParcelableArray(t());
            int size = size();
            for (int i10 = 0; i10 < size; i10++) {
                MenuItem item = getItem(i10);
                View actionView = item.getActionView();
                if (actionView != null && actionView.getId() != -1) {
                    actionView.restoreHierarchyState(sparseParcelableArray);
                }
                if (item.hasSubMenu()) {
                    ((m) item.getSubMenu()).Q(bundle);
                }
            }
            int i11 = bundle.getInt("android:menu:expandedactionview");
            if (i11 > 0 && (findItem = findItem(i11)) != null) {
                findItem.expandActionView();
            }
        }
    }

    public void R(Bundle bundle) {
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
                ((m) item.getSubMenu()).R(bundle);
            }
        }
        if (sparseArray != null) {
            bundle.putSparseParcelableArray(t(), sparseArray);
        }
    }

    public void S(a aVar) {
        this.f1306e = aVar;
    }

    public e T(int i10) {
        this.f1313l = i10;
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void U(MenuItem menuItem) {
        boolean z10;
        int groupId = menuItem.getGroupId();
        int size = this.f1307f.size();
        e0();
        for (int i10 = 0; i10 < size; i10++) {
            g gVar = (g) this.f1307f.get(i10);
            if (gVar.getGroupId() == groupId && gVar.m() && gVar.isCheckable()) {
                if (gVar == menuItem) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                gVar.s(z10);
            }
        }
        d0();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e V(int i10) {
        X(0, null, i10, null, null);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e W(Drawable drawable) {
        X(0, null, 0, drawable, null);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e Y(int i10) {
        X(i10, null, 0, null, null);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e Z(CharSequence charSequence) {
        X(0, charSequence, 0, null, null);
        return this;
    }

    protected MenuItem a(int i10, int i11, int i12, CharSequence charSequence) {
        int B = B(i12);
        g g10 = g(i10, i11, i12, B, charSequence, this.f1313l);
        ContextMenu.ContextMenuInfo contextMenuInfo = this.f1314m;
        if (contextMenuInfo != null) {
            g10.v(contextMenuInfo);
        }
        ArrayList arrayList = this.f1307f;
        arrayList.add(n(arrayList, B), g10);
        L(true);
        return g10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public e a0(View view) {
        X(0, null, 0, null, view);
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
        PackageManager packageManager = this.f1302a.getPackageManager();
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
        c(jVar, this.f1302a);
    }

    public void b0(boolean z10) {
        this.f1327z = z10;
    }

    public void c(j jVar, Context context) {
        this.f1324w.add(new WeakReference(jVar));
        jVar.h(context, this);
        this.f1312k = true;
    }

    @Override // android.view.Menu
    public void clear() {
        g gVar = this.f1325x;
        if (gVar != null) {
            f(gVar);
        }
        this.f1307f.clear();
        L(true);
    }

    public void clearHeader() {
        this.f1316o = null;
        this.f1315n = null;
        this.f1317p = null;
        L(false);
    }

    @Override // android.view.Menu
    public void close() {
        e(true);
    }

    public void d() {
        a aVar = this.f1306e;
        if (aVar != null) {
            aVar.b(this);
        }
    }

    public void d0() {
        this.f1318q = false;
        if (this.f1319r) {
            this.f1319r = false;
            L(this.f1320s);
        }
    }

    public final void e(boolean z10) {
        if (this.f1322u) {
            return;
        }
        this.f1322u = true;
        Iterator it = this.f1324w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1324w.remove(weakReference);
            } else {
                jVar.a(this, z10);
            }
        }
        this.f1322u = false;
    }

    public void e0() {
        if (!this.f1318q) {
            this.f1318q = true;
            this.f1319r = false;
            this.f1320s = false;
        }
    }

    public boolean f(g gVar) {
        boolean z10 = false;
        if (!this.f1324w.isEmpty() && this.f1325x == gVar) {
            e0();
            Iterator it = this.f1324w.iterator();
            while (it.hasNext()) {
                WeakReference weakReference = (WeakReference) it.next();
                j jVar = (j) weakReference.get();
                if (jVar == null) {
                    this.f1324w.remove(weakReference);
                } else {
                    z10 = jVar.g(this, gVar);
                    if (z10) {
                        break;
                    }
                }
            }
            d0();
            if (z10) {
                this.f1325x = null;
            }
        }
        return z10;
    }

    @Override // android.view.Menu
    public MenuItem findItem(int i10) {
        MenuItem findItem;
        int size = size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1307f.get(i11);
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
        return (MenuItem) this.f1307f.get(i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean h(e eVar, MenuItem menuItem) {
        a aVar = this.f1306e;
        if (aVar != null && aVar.a(eVar, menuItem)) {
            return true;
        }
        return false;
    }

    @Override // android.view.Menu
    public boolean hasVisibleItems() {
        if (this.f1327z) {
            return true;
        }
        int size = size();
        for (int i10 = 0; i10 < size; i10++) {
            if (((g) this.f1307f.get(i10)).isVisible()) {
                return true;
            }
        }
        return false;
    }

    @Override // android.view.Menu
    public boolean isShortcutKey(int i10, KeyEvent keyEvent) {
        if (p(i10, keyEvent) != null) {
            return true;
        }
        return false;
    }

    public boolean k(g gVar) {
        boolean z10 = false;
        if (this.f1324w.isEmpty()) {
            return false;
        }
        e0();
        Iterator it = this.f1324w.iterator();
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1324w.remove(weakReference);
            } else {
                z10 = jVar.b(this, gVar);
                if (z10) {
                    break;
                }
            }
        }
        d0();
        if (z10) {
            this.f1325x = gVar;
        }
        return z10;
    }

    public int l(int i10) {
        return m(i10, 0);
    }

    public int m(int i10, int i11) {
        int size = size();
        if (i11 < 0) {
            i11 = 0;
        }
        while (i11 < size) {
            if (((g) this.f1307f.get(i11)).getGroupId() == i10) {
                return i11;
            }
            i11++;
        }
        return -1;
    }

    public int o(int i10) {
        int size = size();
        for (int i11 = 0; i11 < size; i11++) {
            if (((g) this.f1307f.get(i11)).getItemId() == i10) {
                return i11;
            }
        }
        return -1;
    }

    g p(int i10, KeyEvent keyEvent) {
        char numericShortcut;
        ArrayList arrayList = this.f1323v;
        arrayList.clear();
        q(arrayList, i10, keyEvent);
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
        boolean H = H();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) arrayList.get(i11);
            if (H) {
                numericShortcut = gVar.getAlphabeticShortcut();
            } else {
                numericShortcut = gVar.getNumericShortcut();
            }
            char[] cArr = keyData.meta;
            if ((numericShortcut == cArr[0] && (metaState & 2) == 0) || ((numericShortcut == cArr[2] && (metaState & 2) != 0) || (H && numericShortcut == '\b' && i10 == 67))) {
                return gVar;
            }
        }
        return null;
    }

    @Override // android.view.Menu
    public boolean performIdentifierAction(int i10, int i11) {
        return M(findItem(i10), i11);
    }

    @Override // android.view.Menu
    public boolean performShortcut(int i10, KeyEvent keyEvent, int i11) {
        boolean z10;
        g p10 = p(i10, keyEvent);
        if (p10 != null) {
            z10 = M(p10, i11);
        } else {
            z10 = false;
        }
        if ((i11 & 2) != 0) {
            e(true);
        }
        return z10;
    }

    void q(List list, int i10, KeyEvent keyEvent) {
        char numericShortcut;
        int numericModifiers;
        boolean H = H();
        int modifiers = keyEvent.getModifiers();
        KeyCharacterMap.KeyData keyData = new KeyCharacterMap.KeyData();
        if (keyEvent.getKeyData(keyData) || i10 == 67) {
            int size = this.f1307f.size();
            for (int i11 = 0; i11 < size; i11++) {
                g gVar = (g) this.f1307f.get(i11);
                if (gVar.hasSubMenu()) {
                    ((e) gVar.getSubMenu()).q(list, i10, keyEvent);
                }
                if (H) {
                    numericShortcut = gVar.getAlphabeticShortcut();
                } else {
                    numericShortcut = gVar.getNumericShortcut();
                }
                if (H) {
                    numericModifiers = gVar.getAlphabeticModifiers();
                } else {
                    numericModifiers = gVar.getNumericModifiers();
                }
                if ((modifiers & 69647) == (numericModifiers & 69647) && numericShortcut != 0) {
                    char[] cArr = keyData.meta;
                    if ((numericShortcut == cArr[0] || numericShortcut == cArr[2] || (H && numericShortcut == '\b' && i10 == 67)) && gVar.isEnabled()) {
                        list.add(gVar);
                    }
                }
            }
        }
    }

    public void r() {
        ArrayList E = E();
        if (!this.f1312k) {
            return;
        }
        Iterator it = this.f1324w.iterator();
        boolean z10 = false;
        while (it.hasNext()) {
            WeakReference weakReference = (WeakReference) it.next();
            j jVar = (j) weakReference.get();
            if (jVar == null) {
                this.f1324w.remove(weakReference);
            } else {
                z10 |= jVar.f();
            }
        }
        if (z10) {
            this.f1310i.clear();
            this.f1311j.clear();
            int size = E.size();
            for (int i10 = 0; i10 < size; i10++) {
                g gVar = (g) E.get(i10);
                if (gVar.l()) {
                    this.f1310i.add(gVar);
                } else {
                    this.f1311j.add(gVar);
                }
            }
        } else {
            this.f1310i.clear();
            this.f1311j.clear();
            this.f1311j.addAll(E());
        }
        this.f1312k = false;
    }

    @Override // android.view.Menu
    public void removeGroup(int i10) {
        int l10 = l(i10);
        if (l10 >= 0) {
            int size = this.f1307f.size() - l10;
            int i11 = 0;
            while (true) {
                int i12 = i11 + 1;
                if (i11 >= size || ((g) this.f1307f.get(l10)).getGroupId() != i10) {
                    break;
                }
                O(l10, false);
                i11 = i12;
            }
            L(true);
        }
    }

    @Override // android.view.Menu
    public void removeItem(int i10) {
        O(o(i10), true);
    }

    public ArrayList s() {
        r();
        return this.f1310i;
    }

    @Override // android.view.Menu
    public void setGroupCheckable(int i10, boolean z10, boolean z11) {
        int size = this.f1307f.size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1307f.get(i11);
            if (gVar.getGroupId() == i10) {
                gVar.t(z11);
                gVar.setCheckable(z10);
            }
        }
    }

    @Override // android.view.Menu
    public void setGroupDividerEnabled(boolean z10) {
        this.f1326y = z10;
    }

    @Override // android.view.Menu
    public void setGroupEnabled(int i10, boolean z10) {
        int size = this.f1307f.size();
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1307f.get(i11);
            if (gVar.getGroupId() == i10) {
                gVar.setEnabled(z10);
            }
        }
    }

    @Override // android.view.Menu
    public void setGroupVisible(int i10, boolean z10) {
        int size = this.f1307f.size();
        boolean z11 = false;
        for (int i11 = 0; i11 < size; i11++) {
            g gVar = (g) this.f1307f.get(i11);
            if (gVar.getGroupId() == i10 && gVar.y(z10)) {
                z11 = true;
            }
        }
        if (z11) {
            L(true);
        }
    }

    @Override // android.view.Menu
    public void setQwertyMode(boolean z10) {
        this.f1304c = z10;
        L(false);
    }

    @Override // android.view.Menu
    public int size() {
        return this.f1307f.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public String t() {
        return "android:menu:actionviewstates";
    }

    public Context u() {
        return this.f1302a;
    }

    public g v() {
        return this.f1325x;
    }

    public Drawable w() {
        return this.f1316o;
    }

    public CharSequence x() {
        return this.f1315n;
    }

    public View y() {
        return this.f1317p;
    }

    public ArrayList z() {
        r();
        return this.f1311j;
    }

    @Override // android.view.Menu
    public MenuItem add(int i10) {
        return a(0, 0, 0, this.f1303b.getString(i10));
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10) {
        return addSubMenu(0, 0, 0, this.f1303b.getString(i10));
    }

    @Override // android.view.Menu
    public MenuItem add(int i10, int i11, int i12, CharSequence charSequence) {
        return a(i10, i11, i12, charSequence);
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10, int i11, int i12, CharSequence charSequence) {
        g gVar = (g) a(i10, i11, i12, charSequence);
        m mVar = new m(this.f1302a, this, gVar);
        gVar.x(mVar);
        return mVar;
    }

    @Override // android.view.Menu
    public MenuItem add(int i10, int i11, int i12, int i13) {
        return a(i10, i11, i12, this.f1303b.getString(i13));
    }

    @Override // android.view.Menu
    public SubMenu addSubMenu(int i10, int i11, int i12, int i13) {
        return addSubMenu(i10, i11, i12, this.f1303b.getString(i13));
    }
}
