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
    private final int f31365a;

    /* renamed from: b  reason: collision with root package name */
    private final int f31366b;

    /* renamed from: c  reason: collision with root package name */
    private final int f31367c;

    /* renamed from: d  reason: collision with root package name */
    private CharSequence f31368d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f31369e;

    /* renamed from: f  reason: collision with root package name */
    private Intent f31370f;

    /* renamed from: g  reason: collision with root package name */
    private char f31371g;

    /* renamed from: i  reason: collision with root package name */
    private char f31373i;

    /* renamed from: k  reason: collision with root package name */
    private Drawable f31375k;

    /* renamed from: l  reason: collision with root package name */
    private Context f31376l;

    /* renamed from: m  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f31377m;

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f31378n;

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f31379o;

    /* renamed from: h  reason: collision with root package name */
    private int f31372h = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: j  reason: collision with root package name */
    private int f31374j = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f31380p = null;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f31381q = null;

    /* renamed from: r  reason: collision with root package name */
    private boolean f31382r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f31383s = false;

    /* renamed from: t  reason: collision with root package name */
    private int f31384t = 16;

    public a(Context context, int i10, int i11, int i12, int i13, CharSequence charSequence) {
        this.f31376l = context;
        this.f31365a = i11;
        this.f31366b = i10;
        this.f31367c = i13;
        this.f31368d = charSequence;
    }

    private void c() {
        Drawable drawable = this.f31375k;
        if (drawable != null) {
            if (this.f31382r || this.f31383s) {
                Drawable r10 = s1.a.r(drawable);
                this.f31375k = r10;
                Drawable mutate = r10.mutate();
                this.f31375k = mutate;
                if (this.f31382r) {
                    s1.a.o(mutate, this.f31380p);
                }
                if (this.f31383s) {
                    s1.a.p(this.f31375k, this.f31381q);
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
        return this.f31374j;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f31373i;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f31378n;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f31366b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        return this.f31375k;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f31380p;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f31381q;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f31370f;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f31365a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f31372h;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f31371g;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f31367c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return null;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f31368d;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f31369e;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f31368d;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f31379o;
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
        if ((this.f31384t & 1) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f31384t & 2) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f31384t & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        if ((this.f31384t & 8) == 0) {
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
        this.f31373i = Character.toLowerCase(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        this.f31384t = (z10 ? 1 : 0) | (this.f31384t & (-2));
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        int i10;
        int i11 = this.f31384t & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        this.f31384t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        int i10;
        int i11 = this.f31384t & (-17);
        if (z10) {
            i10 = 16;
        } else {
            i10 = 0;
        }
        this.f31384t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f31375k = drawable;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f31380p = colorStateList;
        this.f31382r = true;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f31381q = mode;
        this.f31383s = true;
        c();
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f31370f = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        this.f31371g = c10;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        throw new UnsupportedOperationException();
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f31377m = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f31371g = c10;
        this.f31373i = Character.toLowerCase(c11);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f31368d = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f31369e = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        int i10 = 8;
        int i11 = this.f31384t & 8;
        if (z10) {
            i10 = 0;
        }
        this.f31384t = i11 | i10;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        this.f31373i = Character.toLowerCase(c10);
        this.f31374j = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f31378n = charSequence;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        this.f31371g = c10;
        this.f31372h = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        this.f31368d = this.f31376l.getResources().getString(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f31379o = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f31375k = androidx.core.content.a.e(this.f31376l, i10);
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f31371g = c10;
        this.f31372h = KeyEvent.normalizeMetaState(i10);
        this.f31373i = Character.toLowerCase(c11);
        this.f31374j = KeyEvent.normalizeMetaState(i11);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
    }
}
