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
    private final int f1332a;

    /* renamed from: b  reason: collision with root package name */
    private final int f1333b;

    /* renamed from: c  reason: collision with root package name */
    private final int f1334c;

    /* renamed from: d  reason: collision with root package name */
    private final int f1335d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f1336e;

    /* renamed from: f  reason: collision with root package name */
    private CharSequence f1337f;

    /* renamed from: g  reason: collision with root package name */
    private Intent f1338g;

    /* renamed from: h  reason: collision with root package name */
    private char f1339h;

    /* renamed from: j  reason: collision with root package name */
    private char f1341j;

    /* renamed from: l  reason: collision with root package name */
    private Drawable f1343l;

    /* renamed from: n  reason: collision with root package name */
    e f1345n;

    /* renamed from: o  reason: collision with root package name */
    private m f1346o;

    /* renamed from: p  reason: collision with root package name */
    private Runnable f1347p;

    /* renamed from: q  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f1348q;

    /* renamed from: r  reason: collision with root package name */
    private CharSequence f1349r;

    /* renamed from: s  reason: collision with root package name */
    private CharSequence f1350s;

    /* renamed from: z  reason: collision with root package name */
    private int f1357z;

    /* renamed from: i  reason: collision with root package name */
    private int f1340i = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: k  reason: collision with root package name */
    private int f1342k = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: m  reason: collision with root package name */
    private int f1344m = 0;

    /* renamed from: t  reason: collision with root package name */
    private ColorStateList f1351t = null;

    /* renamed from: u  reason: collision with root package name */
    private PorterDuff.Mode f1352u = null;

    /* renamed from: v  reason: collision with root package name */
    private boolean f1353v = false;

    /* renamed from: w  reason: collision with root package name */
    private boolean f1354w = false;

    /* renamed from: x  reason: collision with root package name */
    private boolean f1355x = false;

    /* renamed from: y  reason: collision with root package name */
    private int f1356y = 16;
    private boolean D = false;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements b.InterfaceC0039b {
        a() {
        }

        @Override // androidx.core.view.b.InterfaceC0039b
        public void onActionProviderVisibilityChanged(boolean z10) {
            g gVar = g.this;
            gVar.f1345n.K(gVar);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(e eVar, int i10, int i11, int i12, int i13, CharSequence charSequence, int i14) {
        this.f1345n = eVar;
        this.f1332a = i11;
        this.f1333b = i10;
        this.f1334c = i12;
        this.f1335d = i13;
        this.f1336e = charSequence;
        this.f1357z = i14;
    }

    private static void d(StringBuilder sb2, int i10, int i11, String str) {
        if ((i10 & i11) == i11) {
            sb2.append(str);
        }
    }

    private Drawable e(Drawable drawable) {
        if (drawable != null && this.f1355x && (this.f1353v || this.f1354w)) {
            drawable = s1.a.r(drawable).mutate();
            if (this.f1353v) {
                s1.a.o(drawable, this.f1351t);
            }
            if (this.f1354w) {
                s1.a.p(drawable, this.f1352u);
            }
            this.f1355x = false;
        }
        return drawable;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean A() {
        if (this.f1345n.I() && g() != 0) {
            return true;
        }
        return false;
    }

    public boolean B() {
        if ((this.f1357z & 4) == 4) {
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
        this.f1345n.L(true);
        androidx.core.view.b bVar3 = this.B;
        if (bVar3 != null) {
            bVar3.i(new a());
        }
        return this;
    }

    public void c() {
        this.f1345n.J(this);
    }

    @Override // t1.b, android.view.MenuItem
    public boolean collapseActionView() {
        if ((this.f1357z & 8) == 0) {
            return false;
        }
        if (this.A == null) {
            return true;
        }
        MenuItem.OnActionExpandListener onActionExpandListener = this.C;
        if (onActionExpandListener != null && !onActionExpandListener.onMenuItemActionCollapse(this)) {
            return false;
        }
        return this.f1345n.f(this);
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
        return this.f1345n.k(this);
    }

    public int f() {
        return this.f1335d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public char g() {
        if (this.f1345n.H()) {
            return this.f1341j;
        }
        return this.f1339h;
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
        return this.f1342k;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f1341j;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f1349r;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f1333b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        Drawable drawable = this.f1343l;
        if (drawable != null) {
            return e(drawable);
        }
        if (this.f1344m != 0) {
            Drawable b10 = g.a.b(this.f1345n.u(), this.f1344m);
            this.f1344m = 0;
            this.f1343l = b10;
            return e(b10);
        }
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f1351t;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f1352u;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f1338g;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f1332a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return this.E;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f1340i;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f1339h;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f1334c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return this.f1346o;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f1336e;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f1337f;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f1336e;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f1350s;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public String h() {
        int i10;
        char g10 = g();
        if (g10 == 0) {
            return "";
        }
        Resources resources = this.f1345n.u().getResources();
        StringBuilder sb2 = new StringBuilder();
        if (ViewConfiguration.get(this.f1345n.u()).hasPermanentMenuKey()) {
            sb2.append(resources.getString(f.h.f23004m));
        }
        if (this.f1345n.H()) {
            i10 = this.f1342k;
        } else {
            i10 = this.f1340i;
        }
        d(sb2, i10, 65536, resources.getString(f.h.f23000i));
        d(sb2, i10, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, resources.getString(f.h.f22996e));
        d(sb2, i10, 2, resources.getString(f.h.f22995d));
        d(sb2, i10, 1, resources.getString(f.h.f23001j));
        d(sb2, i10, 4, resources.getString(f.h.f23003l));
        d(sb2, i10, 8, resources.getString(f.h.f22999h));
        if (g10 != '\b') {
            if (g10 != '\n') {
                if (g10 != ' ') {
                    sb2.append(g10);
                } else {
                    sb2.append(resources.getString(f.h.f23002k));
                }
            } else {
                sb2.append(resources.getString(f.h.f22998g));
            }
        } else {
            sb2.append(resources.getString(f.h.f22997f));
        }
        return sb2.toString();
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        if (this.f1346o != null) {
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
        if ((this.f1356y & 1) == 1) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f1356y & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f1356y & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        androidx.core.view.b bVar = this.B;
        if (bVar != null && bVar.f()) {
            if ((this.f1356y & 8) != 0 || !this.B.b()) {
                return false;
            }
            return true;
        } else if ((this.f1356y & 8) != 0) {
            return false;
        } else {
            return true;
        }
    }

    public boolean j() {
        androidx.core.view.b bVar;
        if ((this.f1357z & 8) != 0) {
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
        MenuItem.OnMenuItemClickListener onMenuItemClickListener = this.f1348q;
        if (onMenuItemClickListener != null && onMenuItemClickListener.onMenuItemClick(this)) {
            return true;
        }
        e eVar = this.f1345n;
        if (eVar.h(eVar, this)) {
            return true;
        }
        Runnable runnable = this.f1347p;
        if (runnable != null) {
            runnable.run();
            return true;
        }
        if (this.f1338g != null) {
            try {
                this.f1345n.u().startActivity(this.f1338g);
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
        if ((this.f1356y & 32) == 32) {
            return true;
        }
        return false;
    }

    public boolean m() {
        if ((this.f1356y & 4) != 0) {
            return true;
        }
        return false;
    }

    public boolean n() {
        if ((this.f1357z & 1) == 1) {
            return true;
        }
        return false;
    }

    public boolean o() {
        if ((this.f1357z & 2) == 2) {
            return true;
        }
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: p */
    public t1.b setActionView(int i10) {
        Context u10 = this.f1345n.u();
        setActionView(LayoutInflater.from(u10).inflate(i10, (ViewGroup) new LinearLayout(u10), false));
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: q */
    public t1.b setActionView(View view) {
        int i10;
        this.A = view;
        this.B = null;
        if (view != null && view.getId() == -1 && (i10 = this.f1332a) > 0) {
            view.setId(i10);
        }
        this.f1345n.J(this);
        return this;
    }

    public void r(boolean z10) {
        this.D = z10;
        this.f1345n.L(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void s(boolean z10) {
        int i10;
        int i11 = this.f1356y;
        int i12 = i11 & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        int i13 = i10 | i12;
        this.f1356y = i13;
        if (i11 != i13) {
            this.f1345n.L(false);
        }
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        throw new UnsupportedOperationException("This is not supported, use MenuItemCompat.setActionProvider()");
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        if (this.f1341j == c10) {
            return this;
        }
        this.f1341j = Character.toLowerCase(c10);
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        int i10 = this.f1356y;
        int i11 = (z10 ? 1 : 0) | (i10 & (-2));
        this.f1356y = i11;
        if (i10 != i11) {
            this.f1345n.L(false);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        if ((this.f1356y & 4) != 0) {
            this.f1345n.U(this);
            return this;
        }
        s(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        if (z10) {
            this.f1356y |= 16;
        } else {
            this.f1356y &= -17;
        }
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f1344m = 0;
        this.f1343l = drawable;
        this.f1355x = true;
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f1351t = colorStateList;
        this.f1353v = true;
        this.f1355x = true;
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f1352u = mode;
        this.f1354w = true;
        this.f1355x = true;
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f1338g = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        if (this.f1339h == c10) {
            return this;
        }
        this.f1339h = c10;
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        this.C = onActionExpandListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f1348q = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f1339h = c10;
        this.f1341j = Character.toLowerCase(c11);
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
        int i11 = i10 & 3;
        if (i11 != 0 && i11 != 1 && i11 != 2) {
            throw new IllegalArgumentException("SHOW_AS_ACTION_ALWAYS, SHOW_AS_ACTION_IF_ROOM, and SHOW_AS_ACTION_NEVER are mutually exclusive.");
        }
        this.f1357z = i10;
        this.f1345n.J(this);
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f1336e = charSequence;
        this.f1345n.L(false);
        m mVar = this.f1346o;
        if (mVar != null) {
            mVar.setHeaderTitle(charSequence);
        }
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f1337f = charSequence;
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        if (y(z10)) {
            this.f1345n.K(this);
        }
        return this;
    }

    public void t(boolean z10) {
        int i10;
        int i11 = this.f1356y & (-5);
        if (z10) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        this.f1356y = i10 | i11;
    }

    public String toString() {
        CharSequence charSequence = this.f1336e;
        if (charSequence != null) {
            return charSequence.toString();
        }
        return null;
    }

    public void u(boolean z10) {
        if (z10) {
            this.f1356y |= 32;
        } else {
            this.f1356y &= -33;
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
        this.f1346o = mVar;
        mVar.setHeaderTitle(getTitle());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean y(boolean z10) {
        int i10;
        int i11 = this.f1356y;
        int i12 = i11 & (-9);
        if (z10) {
            i10 = 0;
        } else {
            i10 = 8;
        }
        int i13 = i10 | i12;
        this.f1356y = i13;
        if (i11 == i13) {
            return false;
        }
        return true;
    }

    public boolean z() {
        return this.f1345n.A();
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f1349r = charSequence;
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f1350s = charSequence;
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        if (this.f1341j == c10 && this.f1342k == i10) {
            return this;
        }
        this.f1341j = Character.toLowerCase(c10);
        this.f1342k = KeyEvent.normalizeMetaState(i10);
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        if (this.f1339h == c10 && this.f1340i == i10) {
            return this;
        }
        this.f1339h = c10;
        this.f1340i = KeyEvent.normalizeMetaState(i10);
        this.f1345n.L(false);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f1339h = c10;
        this.f1340i = KeyEvent.normalizeMetaState(i10);
        this.f1341j = Character.toLowerCase(c11);
        this.f1342k = KeyEvent.normalizeMetaState(i11);
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f1343l = null;
        this.f1344m = i10;
        this.f1355x = true;
        this.f1345n.L(false);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        return setTitle(this.f1345n.u().getString(i10));
    }
}
