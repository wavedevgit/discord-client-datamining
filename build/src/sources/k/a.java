package k;

import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.view.ActionProvider;
import android.view.ContextMenu;
import android.view.KeyEvent;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
import androidx.recyclerview.widget.RecyclerView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements t1.b {

    /* renamed from: a  reason: collision with root package name */
    private final int f30533a;

    /* renamed from: b  reason: collision with root package name */
    private final int f30534b;

    /* renamed from: c  reason: collision with root package name */
    private final int f30535c;

    /* renamed from: d  reason: collision with root package name */
    private CharSequence f30536d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f30537e;

    /* renamed from: f  reason: collision with root package name */
    private Intent f30538f;

    /* renamed from: g  reason: collision with root package name */
    private char f30539g;

    /* renamed from: i  reason: collision with root package name */
    private char f30541i;

    /* renamed from: k  reason: collision with root package name */
    private Drawable f30543k;

    /* renamed from: l  reason: collision with root package name */
    private Context f30544l;

    /* renamed from: m  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f30545m;

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f30546n;

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f30547o;

    /* renamed from: h  reason: collision with root package name */
    private int f30540h = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: j  reason: collision with root package name */
    private int f30542j = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f30548p = null;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f30549q = null;

    /* renamed from: r  reason: collision with root package name */
    private boolean f30550r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f30551s = false;

    /* renamed from: t  reason: collision with root package name */
    private int f30552t = 16;

    public a(Context context, int i10, int i11, int i12, int i13, CharSequence charSequence) {
        this.f30544l = context;
        this.f30533a = i11;
        this.f30534b = i10;
        this.f30535c = i13;
        this.f30536d = charSequence;
    }

    private void c() {
        Drawable drawable = this.f30543k;
        if (drawable != null) {
            if (this.f30550r || this.f30551s) {
                Drawable r10 = s1.a.r(drawable);
                this.f30543k = r10;
                Drawable mutate = r10.mutate();
                this.f30543k = mutate;
                if (this.f30550r) {
                    s1.a.o(mutate, this.f30548p);
                }
                if (this.f30551s) {
                    s1.a.p(this.f30543k, this.f30549q);
                }
            }
        }
    }

    @Override // t1.b
    public androidx.core.view.b a() {
        return null;
    }

    @Override // t1.b
    public t1.b b(androidx.core.view.b bVar) {
        throw new UnsupportedOperationException();
    }

    @Override // t1.b, android.view.MenuItem
    public boolean collapseActionView() {
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: d */
    public t1.b setActionView(int i10) {
        throw new UnsupportedOperationException();
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: e */
    public t1.b setActionView(View view) {
        throw new UnsupportedOperationException();
    }

    @Override // t1.b, android.view.MenuItem
    public boolean expandActionView() {
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    /* renamed from: f */
    public t1.b setShowAsActionFlags(int i10) {
        setShowAsAction(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public ActionProvider getActionProvider() {
        throw new UnsupportedOperationException();
    }

    @Override // t1.b, android.view.MenuItem
    public View getActionView() {
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public int getAlphabeticModifiers() {
        return this.f30542j;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f30541i;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f30546n;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f30534b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        return this.f30543k;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f30548p;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f30549q;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f30538f;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f30533a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f30540h;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f30539g;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f30535c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return null;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f30536d;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f30537e;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f30536d;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f30547o;
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        return false;
    }

    @Override // t1.b, android.view.MenuItem
    public boolean isActionViewExpanded() {
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isCheckable() {
        if ((this.f30552t & 1) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f30552t & 2) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f30552t & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        if ((this.f30552t & 8) == 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        throw new UnsupportedOperationException();
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        this.f30541i = Character.toLowerCase(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        this.f30552t = (z10 ? 1 : 0) | (this.f30552t & (-2));
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        int i10;
        int i11 = this.f30552t & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        this.f30552t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        int i10;
        int i11 = this.f30552t & (-17);
        if (z10) {
            i10 = 16;
        } else {
            i10 = 0;
        }
        this.f30552t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f30543k = drawable;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f30548p = colorStateList;
        this.f30550r = true;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f30549q = mode;
        this.f30551s = true;
        c();
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f30538f = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        this.f30539g = c10;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        throw new UnsupportedOperationException();
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f30545m = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f30539g = c10;
        this.f30541i = Character.toLowerCase(c11);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f30536d = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f30537e = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        int i10 = 8;
        int i11 = this.f30552t & 8;
        if (z10) {
            i10 = 0;
        }
        this.f30552t = i11 | i10;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        this.f30541i = Character.toLowerCase(c10);
        this.f30542j = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f30546n = charSequence;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        this.f30539g = c10;
        this.f30540h = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        this.f30536d = this.f30544l.getResources().getString(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f30547o = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f30543k = androidx.core.content.a.e(this.f30544l, i10);
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f30539g = c10;
        this.f30540h = KeyEvent.normalizeMetaState(i10);
        this.f30541i = Character.toLowerCase(c11);
        this.f30542j = KeyEvent.normalizeMetaState(i11);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
    }
}
