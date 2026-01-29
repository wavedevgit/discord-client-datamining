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
    private final int f1319a;

    /* renamed from: b  reason: collision with root package name */
    private final int f1320b;

    /* renamed from: c  reason: collision with root package name */
    private final int f1321c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1322d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f1323e;

    /* renamed from: f  reason: collision with root package name */
    private CharSequence f1324f;

    /* renamed from: g  reason: collision with root package name */
    private Intent f1325g;

    /* renamed from: h  reason: collision with root package name */
    private char f1326h;

    /* renamed from: j  reason: collision with root package name */
    private char f1328j;

    /* renamed from: l  reason: collision with root package name */
    private Drawable f1330l;

    /* renamed from: n  reason: collision with root package name */
    e f1332n;

    /* renamed from: o  reason: collision with root package name */
    private m f1333o;

    /* renamed from: p  reason: collision with root package name */
    private Runnable f1334p;

    /* renamed from: q  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f1335q;

    /* renamed from: r  reason: collision with root package name */
    private CharSequence f1336r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f1337s;

    /* renamed from: z  reason: collision with root package name */
    private int f1344z;

    /* renamed from: i  reason: collision with root package name */
    private int f1327i = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: k  reason: collision with root package name */
    private int f1329k = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: m  reason: collision with root package name */
    private int f1331m = 0;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f1338t = null;

    /* renamed from: u  reason: collision with root package name */
    private PorterDuff.Mode f1339u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1340v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1341w = false;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1342x = false;

    /* renamed from: y  reason: collision with root package name */
    private int f1343y = 16;
    private boolean D = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements b.InterfaceC0037b {
        a() {
        }

        @Override // androidx.core.view.b.InterfaceC0037b
        public void onActionProviderVisibilityChanged(boolean z10) {
            g gVar = g.this;
            gVar.f1332n.K(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(e eVar, int i10, int i11, int i12, int i13, CharSequence charSequence, int i14) {
        this.f1332n = eVar;
        this.f1319a = i11;
        this.f1320b = i10;
        this.f1321c = i12;
        this.f1322d = i13;
        this.f1323e = charSequence;
        this.f1344z = i14;
    }

    private static void d(StringBuilder sb2, int i10, int i11, String str) {
        if ((i10 & i11) == i11) {
            sb2.append(str);
        }
    }

    private Drawable e(Drawable drawable) {
        if (drawable != null && this.f1342x && (this.f1340v || this.f1341w)) {
            drawable = s1.a.r(drawable).mutate();
            if (this.f1340v) {
                s1.a.o(drawable, this.f1338t);
            }
            if (this.f1341w) {
                s1.a.p(drawable, this.f1339u);
            }
            this.f1342x = false;
        }
        return drawable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f1332n.I() && g() != 0) {
            return true;
        }
        return false;
    }

    public boolean B() {
        if ((this.f1344z & 4) == 4) {
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
        this.f1332n.L(true);
        androidx.core.view.b bVar3 = this.B;
        if (bVar3 != null) {
            bVar3.i(new a());
        }
        return this;
    }

    public void c() {
        this.f1332n.J(this);
    }

    @Override // t1.b, android.view.MenuItem
    public boolean collapseActionView() {
        if ((this.f1344z & 8) == 0) {
            return false;
        }
        if (this.A == null) {
            return true;
        }
        MenuItem.OnActionExpandListener onActionExpandListener = this.C;
        if (onActionExpandListener != null && !onActionExpandListener.onMenuItemActionCollapse(this)) {
            return false;
        }
        return this.f1332n.f(this);
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
        return this.f1332n.k(this);
    }

    public int f() {
        return this.f1322d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public char g() {
        if (this.f1332n.H()) {
            return this.f1328j;
        }
        return this.f1326h;
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
        return this.f1329k;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f1328j;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f1336r;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f1320b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        Drawable drawable = this.f1330l;
        if (drawable != null) {
            return e(drawable);
        }
        if (this.f1331m != 0) {
            Drawable b10 = g.a.b(this.f1332n.u(), this.f1331m);
            this.f1331m = 0;
            this.f1330l = b10;
            return e(b10);
        }
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f1338t;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f1339u;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f1325g;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f1319a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return this.E;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f1327i;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f1326h;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f1321c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return this.f1333o;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f1323e;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f1324f;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f1323e;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f1337s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String h() {
        int i10;
        char g10 = g();
        if (g10 == 0) {
            return "";
        }
        Resources resources = this.f1332n.u().getResources();
        StringBuilder sb2 = new StringBuilder();
        if (ViewConfiguration.get(this.f1332n.u()).hasPermanentMenuKey()) {
            sb2.append(resources.getString(f.h.f24201m));
        }
        if (this.f1332n.H()) {
            i10 = this.f1329k;
        } else {
            i10 = this.f1327i;
        }
        d(sb2, i10, 65536, resources.getString(f.h.f24197i));
        d(sb2, i10, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, resources.getString(f.h.f24193e));
        d(sb2, i10, 2, resources.getString(f.h.f24192d));
        d(sb2, i10, 1, resources.getString(f.h.f24198j));
        d(sb2, i10, 4, resources.getString(f.h.f24200l));
        d(sb2, i10, 8, resources.getString(f.h.f24196h));
        if (g10 != '\b') {
            if (g10 != '\n') {
                if (g10 != ' ') {
                    sb2.append(g10);
                } else {
                    sb2.append(resources.getString(f.h.f24199k));
                }
            } else {
                sb2.append(resources.getString(f.h.f24195g));
            }
        } else {
            sb2.append(resources.getString(f.h.f24194f));
        }
        return sb2.toString();
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        if (this.f1333o != null) {
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
        if ((this.f1343y & 1) == 1) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f1343y & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f1343y & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        androidx.core.view.b bVar = this.B;
        if (bVar != null && bVar.f()) {
            if ((this.f1343y & 8) != 0 || !this.B.b()) {
                return false;
            }
            return true;
        } else if ((this.f1343y & 8) != 0) {
            return false;
        } else {
            return true;
        }
    }

    public boolean j() {
        androidx.core.view.b bVar;
        if ((this.f1344z & 8) != 0) {
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
        MenuItem.OnMenuItemClickListener onMenuItemClickListener = this.f1335q;
        if (onMenuItemClickListener != null && onMenuItemClickListener.onMenuItemClick(this)) {
            return true;
        }
        e eVar = this.f1332n;
        if (eVar.h(eVar, this)) {
            return true;
        }
        Runnable runnable = this.f1334p;
        if (runnable != null) {
            runnable.run();
            return true;
        }
        if (this.f1325g != null) {
            try {
                this.f1332n.u().startActivity(this.f1325g);
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
        if ((this.f1343y & 32) == 32) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if ((this.f1343y & 4) != 0) {
            return true;
        }
        return false;
    }

    public boolean n() {
        if ((this.f1344z & 1) == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if ((this.f1344z & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: p */
    public t1.b setActionView(int i10) {
        Context u10 = this.f1332n.u();
        setActionView(LayoutInflater.from(u10).inflate(i10, (ViewGroup) new LinearLayout(u10), false));
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: q */
    public t1.b setActionView(View view) {
        int i10;
        this.A = view;
        this.B = null;
        if (view != null && view.getId() == -1 && (i10 = this.f1319a) > 0) {
            view.setId(i10);
        }
        this.f1332n.J(this);
        return this;
    }

    public void r(boolean z10) {
        this.D = z10;
        this.f1332n.L(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(boolean z10) {
        int i10;
        int i11 = this.f1343y;
        int i12 = i11 & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        int i13 = i10 | i12;
        this.f1343y = i13;
        if (i11 != i13) {
            this.f1332n.L(false);
        }
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        throw new UnsupportedOperationException("This is not supported, use MenuItemCompat.setActionProvider()");
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        if (this.f1328j == c10) {
            return this;
        }
        this.f1328j = Character.toLowerCase(c10);
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        int i10 = this.f1343y;
        int i11 = (z10 ? 1 : 0) | (i10 & (-2));
        this.f1343y = i11;
        if (i10 != i11) {
            this.f1332n.L(false);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        if ((this.f1343y & 4) != 0) {
            this.f1332n.U(this);
            return this;
        }
        s(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        if (z10) {
            this.f1343y |= 16;
        } else {
            this.f1343y &= -17;
        }
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f1331m = 0;
        this.f1330l = drawable;
        this.f1342x = true;
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f1338t = colorStateList;
        this.f1340v = true;
        this.f1342x = true;
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f1339u = mode;
        this.f1341w = true;
        this.f1342x = true;
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f1325g = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        if (this.f1326h == c10) {
            return this;
        }
        this.f1326h = c10;
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        this.C = onActionExpandListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f1335q = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f1326h = c10;
        this.f1328j = Character.toLowerCase(c11);
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
        int i11 = i10 & 3;
        if (i11 != 0 && i11 != 1 && i11 != 2) {
            throw new IllegalArgumentException("SHOW_AS_ACTION_ALWAYS, SHOW_AS_ACTION_IF_ROOM, and SHOW_AS_ACTION_NEVER are mutually exclusive.");
        }
        this.f1344z = i10;
        this.f1332n.J(this);
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f1323e = charSequence;
        this.f1332n.L(false);
        m mVar = this.f1333o;
        if (mVar != null) {
            mVar.setHeaderTitle(charSequence);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f1324f = charSequence;
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        if (y(z10)) {
            this.f1332n.K(this);
        }
        return this;
    }

    public void t(boolean z10) {
        int i10;
        int i11 = this.f1343y & (-5);
        if (z10) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        this.f1343y = i10 | i11;
    }

    public String toString() {
        CharSequence charSequence = this.f1323e;
        if (charSequence != null) {
            return charSequence.toString();
        }
        return null;
    }

    public void u(boolean z10) {
        if (z10) {
            this.f1343y |= 32;
        } else {
            this.f1343y &= -33;
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
        this.f1333o = mVar;
        mVar.setHeaderTitle(getTitle());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean y(boolean z10) {
        int i10;
        int i11 = this.f1343y;
        int i12 = i11 & (-9);
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        int i13 = i10 | i12;
        this.f1343y = i13;
        if (i11 == i13) {
            return false;
        }
        return true;
    }

    public boolean z() {
        return this.f1332n.A();
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f1336r = charSequence;
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f1337s = charSequence;
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        if (this.f1328j == c10 && this.f1329k == i10) {
            return this;
        }
        this.f1328j = Character.toLowerCase(c10);
        this.f1329k = KeyEvent.normalizeMetaState(i10);
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        if (this.f1326h == c10 && this.f1327i == i10) {
            return this;
        }
        this.f1326h = c10;
        this.f1327i = KeyEvent.normalizeMetaState(i10);
        this.f1332n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f1326h = c10;
        this.f1327i = KeyEvent.normalizeMetaState(i10);
        this.f1328j = Character.toLowerCase(c11);
        this.f1329k = KeyEvent.normalizeMetaState(i11);
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f1330l = null;
        this.f1331m = i10;
        this.f1342x = true;
        this.f1332n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        return setTitle(this.f1332n.u().getString(i10));
    }
}
