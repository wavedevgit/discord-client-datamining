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
    private final int f32010a;

    /* renamed from: b  reason: collision with root package name */
    private final int f32011b;

    /* renamed from: c  reason: collision with root package name */
    private final int f32012c;

    /* renamed from: d  reason: collision with root package name */
    private CharSequence f32013d;

    /* renamed from: e  reason: collision with root package name */
    private CharSequence f32014e;

    /* renamed from: f  reason: collision with root package name */
    private Intent f32015f;

    /* renamed from: g  reason: collision with root package name */
    private char f32016g;

    /* renamed from: i  reason: collision with root package name */
    private char f32018i;

    /* renamed from: k  reason: collision with root package name */
    private Drawable f32020k;

    /* renamed from: l  reason: collision with root package name */
    private Context f32021l;

    /* renamed from: m  reason: collision with root package name */
    private MenuItem.OnMenuItemClickListener f32022m;

    /* renamed from: n  reason: collision with root package name */
    private CharSequence f32023n;

    /* renamed from: o  reason: collision with root package name */
    private CharSequence f32024o;

    /* renamed from: h  reason: collision with root package name */
    private int f32017h = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: j  reason: collision with root package name */
    private int f32019j = RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;

    /* renamed from: p  reason: collision with root package name */
    private ColorStateList f32025p = null;

    /* renamed from: q  reason: collision with root package name */
    private PorterDuff.Mode f32026q = null;

    /* renamed from: r  reason: collision with root package name */
    private boolean f32027r = false;

    /* renamed from: s  reason: collision with root package name */
    private boolean f32028s = false;

    /* renamed from: t  reason: collision with root package name */
    private int f32029t = 16;

    public a(Context context, int i10, int i11, int i12, int i13, CharSequence charSequence) {
        this.f32021l = context;
        this.f32010a = i11;
        this.f32011b = i10;
        this.f32012c = i13;
        this.f32013d = charSequence;
    }

    private void c() {
        Drawable drawable = this.f32020k;
        if (drawable != null) {
            if (this.f32027r || this.f32028s) {
                Drawable r10 = s1.a.r(drawable);
                this.f32020k = r10;
                Drawable mutate = r10.mutate();
                this.f32020k = mutate;
                if (this.f32027r) {
                    s1.a.o(mutate, this.f32025p);
                }
                if (this.f32028s) {
                    s1.a.p(this.f32020k, this.f32026q);
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
        return this.f32019j;
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f32018i;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f32023n;
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f32011b;
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        return this.f32020k;
    }

    @Override // t1.b, android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f32025p;
    }

    @Override // t1.b, android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f32026q;
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f32015f;
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f32010a;
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return null;
    }

    @Override // t1.b, android.view.MenuItem
    public int getNumericModifiers() {
        return this.f32017h;
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f32016g;
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f32012c;
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return null;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f32013d;
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        CharSequence charSequence = this.f32014e;
        if (charSequence != null) {
            return charSequence;
        }
        return this.f32013d;
    }

    @Override // t1.b, android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f32024o;
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
        if ((this.f32029t & 1) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        if ((this.f32029t & 2) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        if ((this.f32029t & 16) != 0) {
            return true;
        }
        return false;
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        if ((this.f32029t & 8) == 0) {
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
        this.f32018i = Character.toLowerCase(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        this.f32029t = (z10 ? 1 : 0) | (this.f32029t & (-2));
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        int i10;
        int i11 = this.f32029t & (-3);
        if (z10) {
            i10 = 2;
        } else {
            i10 = 0;
        }
        this.f32029t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        int i10;
        int i11 = this.f32029t & (-17);
        if (z10) {
            i10 = 16;
        } else {
            i10 = 0;
        }
        this.f32029t = i10 | i11;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f32020k = drawable;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f32025p = colorStateList;
        this.f32027r = true;
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f32026q = mode;
        this.f32028s = true;
        c();
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f32015f = intent;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        this.f32016g = c10;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        throw new UnsupportedOperationException();
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        this.f32022m = onMenuItemClickListener;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f32016g = c10;
        this.f32018i = Character.toLowerCase(c11);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f32013d = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f32014e = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        int i10 = 8;
        int i11 = this.f32029t & 8;
        if (z10) {
            i10 = 0;
        }
        this.f32029t = i11 | i10;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        this.f32018i = Character.toLowerCase(c10);
        this.f32019j = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setContentDescription(CharSequence charSequence) {
        this.f32023n = charSequence;
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        this.f32016g = c10;
        this.f32017h = KeyEvent.normalizeMetaState(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        this.f32013d = this.f32021l.getResources().getString(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public t1.b setTooltipText(CharSequence charSequence) {
        this.f32024o = charSequence;
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f32020k = androidx.core.content.a.e(this.f32021l, i10);
        c();
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f32016g = c10;
        this.f32017h = KeyEvent.normalizeMetaState(i10);
        this.f32018i = Character.toLowerCase(c11);
        this.f32019j = KeyEvent.normalizeMetaState(i11);
        return this;
    }

    @Override // t1.b, android.view.MenuItem
    public void setShowAsAction(int i10) {
    }
}
