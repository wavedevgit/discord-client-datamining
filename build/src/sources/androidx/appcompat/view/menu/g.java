package androidx.appcompat.view.menu;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.content.res.Resources;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.view.ActionProvider;
import android.view.ContextMenu;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import androidx.appcompat.view.menu.k;
import androidx.core.view.b;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g implements t1.b {
    private View A;
    private androidx.core.view.b B;
    private MenuItem.OnActionExpandListener C;
    private ContextMenu.ContextMenuInfo E;

    /* renamed from: a  reason: collision with root package name */
    private final int f1363a;

    /* renamed from: b  reason: collision with root package name */
    private final int f1364b;

    /* renamed from: c  reason: collision with root package name */
    private final int f1365c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1366d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f1367e;

    /* renamed from: f  reason: collision with root package name */
    private CharSequence f1368f;

    /* renamed from: g  reason: collision with root package name */
    private Intent f1369g;

    /* renamed from: h  reason: collision with root package name */
    private char f1370h;

    /* renamed from: j  reason: collision with root package name */
    private char f1372j;

    /* renamed from: l  reason: collision with root package name */
    private Drawable f1374l;

    /* renamed from: n  reason: collision with root package name */
    e f1376n;

    /* renamed from: o  reason: collision with root package name */
    private m f1377o;

    /* renamed from: p  reason: collision with root package name */
    private Runnable f1378p;

    /* renamed from: q  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f1379q;

    /* renamed from: r  reason: collision with root package name */
    private CharSequence f1380r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f1381s;

    /* renamed from: z  reason: collision with root package name */
    private int f1388z;

    /* renamed from: i  reason: collision with root package name */
    private int f1371i = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: k  reason: collision with root package name */
    private int f1373k = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: m  reason: collision with root package name */
    private int f1375m = 0;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f1382t = null;

    /* renamed from: u  reason: collision with root package name */
    private PorterDuff.Mode f1383u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1384v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1385w = false;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1386x = false;

    /* renamed from: y  reason: collision with root package name */
    private int f1387y = 16;
    private boolean D = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements b.InterfaceC0041b {
        a() {
        }

        @Override // androidx.core.view.b.InterfaceC0041b
        public void onActionProviderVisibilityChanged(boolean z10) {
            g gVar = g.this;
            gVar.f1376n.K(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(e eVar, int i10, int i11, int i12, int i13, CharSequence charSequence, int i14) {
        this.f1376n = eVar;
        this.f1363a = i11;
        this.f1364b = i10;
        this.f1365c = i12;
        this.f1366d = i13;
        this.f1367e = charSequence;
        this.f1388z = i14;
    }

    private static void d(StringBuilder sb2, int i10, int i11, String str) {
        if ((i10 & i11) == i11) {
            sb2.append(str);
        }
    }

    private Drawable e(Drawable drawable) {
        if (drawable != null && this.f1386x && (this.f1384v || this.f1385w)) {
            drawable = s1.a.r(drawable).mutate();
            if (this.f1384v) {
                s1.a.o(drawable, this.f1382t);
            }
            if (this.f1385w) {
                s1.a.p(drawable, this.f1383u);
            }
            this.f1386x = false;
        }
        return drawable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f1376n.I() && g() != 0) {
            return true;
        }
        return false;
    }

    public boolean B() {
        if ((this.f1388z & 4) == 4) {
            return true;
        }
        return false;
    }

    @Override // t1.b
    public androidx.core.view.b a() {
        return this.B;
    }

    @Override // t1.b
    public t1.b b(androidx.core.view.b bVar) {
        androidx.core.view.b bVar2 = this.B;
        if (bVar2 != null) {
            bVar2.g();
        }
        this.A = null;
        this.B = bVar;
        this.f1376n.L(true);
        androidx.core.view.b bVar3 = this.B;
        if (bVar3 != null) {
            bVar3.i(new a());
        }
        return this;
    }

    public void c() {
        this.f1376n.J(this);
    }

    @Override // t1.b, android.view.MenuItem
    public boolean collapseActionView() {
        if ((this.f1388z & 8) == 0) {
            return false;
        }
        if (this.A == null) {
            return true;
        }
        MenuItem.OnActionExpandListener onActionExpandListener = this.C;
        if (onActionExpandListener != null && !onActionExpandListener.onMenuItemActionCollapse(this)) {
            return false;
        }
        return this.f1376n.f(this);
    }

    @Override // t1.b, android.view.MenuItem
    public boolean expandActionView() {
        if (!j()) {
            return false;
        }
        MenuItem.OnActionExpandListener onActionExpandListener = this.C;
        if (onActionExpandListener != null && !onActionExpandListener.onMenuItemActionExpand(this)) {
            return false;
        }
        return this.f1376n.k(this);
    }

    public int f() {
        return this.f1366d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public char g() {
        if (this.f1376n.H()) {
            return this.f1372j;
        }
        return this.f1370h;
    }

    @Override // android.view.MenuItem
    public ActionProvider getActionProvider() {
        throw new UnsupportedOperationException("This is not supported, use MenuItemCompat.getActionProvider()");
    }

    @Override // t1.b, android.view.MenuItem
    public View getActionView() {
        View view = this.A;
        if (view != null) {
            return view;
        }
        androidx.core.view.b bVar = this.B;
        if (bVar != null) {
            View c10 = bVar.c(this);
            this.A = c10;
            return c10;
        }
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public int getAlphabeticModifiers() {
        return this.f1373k;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f1372j;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f1380r;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f1364b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        Drawable drawable = this.f1374l;
        if (drawable != null) {
            return e(drawable);
        }
        if (this.f1375m != 0) {
            Drawable b10 = g.a.b(this.f1376n.u(), this.f1375m);
            this.f1375m = 0;
            this.f1374l = b10;
            return e(b10);
        }
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f1382t;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f1383u;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f1369g;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f1363a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return this.E;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f1371i;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f1370h;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f1365c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return this.f1377o;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f1367e;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f1368f;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f1367e;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f1381s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String h() {
        int i10;
        char g10 = g();
        if (g10 == 0) {
            return "";
        }
        Resources resources = this.f1376n.u().getResources();
        StringBuilder sb2 = new StringBuilder();
        if (ViewConfiguration.get(this.f1376n.u()).hasPermanentMenuKey()) {
            sb2.append(resources.getString(f.h.f23412m));
        }
        if (this.f1376n.H()) {
            i10 = this.f1373k;
        } else {
            i10 = this.f1371i;
        }
        d(sb2, i10, 65536, resources.getString(f.h.f23408i));
        d(sb2, i10, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, resources.getString(f.h.f23404e));
        d(sb2, i10, 2, resources.getString(f.h.f23403d));
        d(sb2, i10, 1, resources.getString(f.h.f23409j));
        d(sb2, i10, 4, resources.getString(f.h.f23411l));
        d(sb2, i10, 8, resources.getString(f.h.f23407h));
        if (g10 != '\b') {
            if (g10 != '\n') {
                if (g10 != ' ') {
                    sb2.append(g10);
                } else {
                    sb2.append(resources.getString(f.h.f23410k));
                }
            } else {
                sb2.append(resources.getString(f.h.f23406g));
            }
        } else {
            sb2.append(resources.getString(f.h.f23405f));
        }
        return sb2.toString();
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        if (this.f1377o != null) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public CharSequence i(k.a aVar) {
        if (aVar != null && aVar.d()) {
            return getTitleCondensed();
        }
        return getTitle();
    }

    @Override // t1.b, android.view.MenuItem
    public boolean isActionViewExpanded() {
        return this.D;
    }

    @Override // android.view.MenuItem
    public boolean isCheckable() {
        if ((this.f1387y & 1) == 1) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f1387y & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f1387y & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        androidx.core.view.b bVar = this.B;
        if (bVar != null && bVar.f()) {
            if ((this.f1387y & 8) != 0 || !this.B.b()) {
                return false;
            }
            return true;
        } else if ((this.f1387y & 8) != 0) {
            return false;
        } else {
            return true;
        }
    }

    public boolean j() {
        androidx.core.view.b bVar;
        if ((this.f1388z & 8) != 0) {
            if (this.A == null && (bVar = this.B) != null) {
                this.A = bVar.c(this);
            }
            if (this.A != null) {
                return true;
            }
        }
        return false;
    }

    public boolean k() {
        MenuItem.OnMenuItemClickListener onMenuItemClickListener = this.f1379q;
        if (onMenuItemClickListener != null && onMenuItemClickListener.onMenuItemClick(this)) {
            return true;
        }
        e eVar = this.f1376n;
        if (eVar.h(eVar, this)) {
            return true;
        }
        Runnable runnable = this.f1378p;
        if (runnable != null) {
            runnable.run();
            return true;
        }
        if (this.f1369g != null) {
            try {
                this.f1376n.u().startActivity(this.f1369g);
                return true;
            } catch (ActivityNotFoundException e10) {
                Log.e("MenuItemImpl", "Can't find activity to handle intent; ignoring", e10);
            }
        }
        androidx.core.view.b bVar = this.B;
        if (bVar != null && bVar.d()) {
            return true;
        }
        return false;
    }

    public boolean l() {
        if ((this.f1387y & 32) == 32) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if ((this.f1387y & 4) != 0) {
            return true;
        }
        return false;
    }

    public boolean n() {
        if ((this.f1388z & 1) == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if ((this.f1388z & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: p */
    public t1.b setActionView(int i10) {
        Context u10 = this.f1376n.u();
        setActionView(LayoutInflater.from(u10).inflate(i10, (ViewGroup) new LinearLayout(u10), false));
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: q */
    public t1.b setActionView(View view) {
        int i10;
        this.A = view;
        this.B = null;
        if (view != null && view.getId() == -1 && (i10 = this.f1363a) > 0) {
            view.setId(i10);
        }
        this.f1376n.J(this);
        return this;
    }

    public void r(boolean z10) {
        this.D = z10;
        this.f1376n.L(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(boolean z10) {
        int i10;
        int i11 = this.f1387y;
        int i12 = i11 & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        int i13 = i10 | i12;
        this.f1387y = i13;
        if (i11 != i13) {
            this.f1376n.L(false);
        }
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        throw new UnsupportedOperationException("This is not supported, use MenuItemCompat.setActionProvider()");
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        if (this.f1372j == c10) {
            return this;
        }
        this.f1372j = Character.toLowerCase(c10);
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        int i10 = this.f1387y;
        int i11 = (z10 ? 1 : 0) | (i10 & (-2));
        this.f1387y = i11;
        if (i10 != i11) {
            this.f1376n.L(false);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        if ((this.f1387y & 4) != 0) {
            this.f1376n.U(this);
            return this;
        }
        s(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        if (z10) {
            this.f1387y |= 16;
        } else {
            this.f1387y &= -17;
        }
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f1375m = 0;
        this.f1374l = drawable;
        this.f1386x = true;
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f1382t = colorStateList;
        this.f1384v = true;
        this.f1386x = true;
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f1383u = mode;
        this.f1385w = true;
        this.f1386x = true;
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f1369g = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        if (this.f1370h == c10) {
            return this;
        }
        this.f1370h = c10;
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        this.C = onActionExpandListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f1379q = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f1370h = c10;
        this.f1372j = Character.toLowerCase(c11);
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
        int i11 = i10 & 3;
        if (i11 != 0 && i11 != 1 && i11 != 2) {
            throw new IllegalArgumentException("SHOW_AS_ACTION_ALWAYS, SHOW_AS_ACTION_IF_ROOM, and SHOW_AS_ACTION_NEVER are mutually exclusive.");
        }
        this.f1388z = i10;
        this.f1376n.J(this);
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f1367e = charSequence;
        this.f1376n.L(false);
        m mVar = this.f1377o;
        if (mVar != null) {
            mVar.setHeaderTitle(charSequence);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f1368f = charSequence;
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        if (y(z10)) {
            this.f1376n.K(this);
        }
        return this;
    }

    public void t(boolean z10) {
        int i10;
        int i11 = this.f1387y & (-5);
        if (z10) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        this.f1387y = i10 | i11;
    }

    public String toString() {
        CharSequence charSequence = this.f1367e;
        if (charSequence != null) {
            return charSequence.toString();
        }
        return null;
    }

    public void u(boolean z10) {
        if (z10) {
            this.f1387y |= 32;
        } else {
            this.f1387y &= -33;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void v(ContextMenu.ContextMenuInfo contextMenuInfo) {
        this.E = contextMenuInfo;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: w */
    public t1.b setShowAsActionFlags(int i10) {
        setShowAsAction(i10);
        return this;
    }

    public void x(m mVar) {
        this.f1377o = mVar;
        mVar.setHeaderTitle(getTitle());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean y(boolean z10) {
        int i10;
        int i11 = this.f1387y;
        int i12 = i11 & (-9);
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        int i13 = i10 | i12;
        this.f1387y = i13;
        if (i11 == i13) {
            return false;
        }
        return true;
    }

    public boolean z() {
        return this.f1376n.A();
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f1380r = charSequence;
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f1381s = charSequence;
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        if (this.f1372j == c10 && this.f1373k == i10) {
            return this;
        }
        this.f1372j = Character.toLowerCase(c10);
        this.f1373k = KeyEvent.normalizeMetaState(i10);
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        if (this.f1370h == c10 && this.f1371i == i10) {
            return this;
        }
        this.f1370h = c10;
        this.f1371i = KeyEvent.normalizeMetaState(i10);
        this.f1376n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f1370h = c10;
        this.f1371i = KeyEvent.normalizeMetaState(i10);
        this.f1372j = Character.toLowerCase(c11);
        this.f1373k = KeyEvent.normalizeMetaState(i11);
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f1374l = null;
        this.f1375m = i10;
        this.f1386x = true;
        this.f1376n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        return setTitle(this.f1376n.u().getString(i10));
    }
}
