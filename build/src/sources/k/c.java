package k;

import android.content.Context;
import android.content.Intent;
import android.content.res.ColorStateList;
import android.graphics.PorterDuff;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.view.ActionProvider;
import android.view.CollapsibleActionView;
import android.view.ContextMenu;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
import android.widget.FrameLayout;
import androidx.core.view.b;
import java.lang.reflect.Method;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends k.b implements MenuItem {

    /* renamed from: d  reason: collision with root package name */
    private final t1.b f31983d;

    /* renamed from: e  reason: collision with root package name */
    private Method f31984e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class a extends androidx.core.view.b implements ActionProvider.VisibilityListener {

        /* renamed from: d  reason: collision with root package name */
        private b.InterfaceC0037b f31985d;

        /* renamed from: e  reason: collision with root package name */
        private final ActionProvider f31986e;

        a(Context context, ActionProvider actionProvider) {
            super(context);
            this.f31986e = actionProvider;
        }

        @Override // androidx.core.view.b
        public boolean a() {
            return this.f31986e.hasSubMenu();
        }

        @Override // androidx.core.view.b
        public boolean b() {
            return this.f31986e.isVisible();
        }

        @Override // androidx.core.view.b
        public View c(MenuItem menuItem) {
            return this.f31986e.onCreateActionView(menuItem);
        }

        @Override // androidx.core.view.b
        public boolean d() {
            return this.f31986e.onPerformDefaultAction();
        }

        @Override // androidx.core.view.b
        public void e(SubMenu subMenu) {
            this.f31986e.onPrepareSubMenu(c.this.d(subMenu));
        }

        @Override // androidx.core.view.b
        public boolean f() {
            return this.f31986e.overridesItemVisibility();
        }

        @Override // androidx.core.view.b
        public void i(b.InterfaceC0037b interfaceC0037b) {
            a aVar;
            this.f31985d = interfaceC0037b;
            ActionProvider actionProvider = this.f31986e;
            if (interfaceC0037b != null) {
                aVar = this;
            } else {
                aVar = null;
            }
            actionProvider.setVisibilityListener(aVar);
        }

        @Override // android.view.ActionProvider.VisibilityListener
        public void onActionProviderVisibilityChanged(boolean z10) {
            b.InterfaceC0037b interfaceC0037b = this.f31985d;
            if (interfaceC0037b != null) {
                interfaceC0037b.onActionProviderVisibilityChanged(z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b extends FrameLayout implements androidx.appcompat.view.b {

        /* renamed from: d  reason: collision with root package name */
        final CollapsibleActionView f31988d;

        b(View view) {
            super(view.getContext());
            this.f31988d = (CollapsibleActionView) view;
            addView(view);
        }

        View a() {
            return (View) this.f31988d;
        }

        @Override // androidx.appcompat.view.b
        public void onActionViewCollapsed() {
            this.f31988d.onActionViewCollapsed();
        }

        @Override // androidx.appcompat.view.b
        public void onActionViewExpanded() {
            this.f31988d.onActionViewExpanded();
        }
    }

    /* renamed from: k.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class MenuItem$OnActionExpandListenerC0440c implements MenuItem.OnActionExpandListener {

        /* renamed from: a  reason: collision with root package name */
        private final MenuItem.OnActionExpandListener f31989a;

        MenuItem$OnActionExpandListenerC0440c(MenuItem.OnActionExpandListener onActionExpandListener) {
            this.f31989a = onActionExpandListener;
        }

        @Override // android.view.MenuItem.OnActionExpandListener
        public boolean onMenuItemActionCollapse(MenuItem menuItem) {
            return this.f31989a.onMenuItemActionCollapse(c.this.c(menuItem));
        }

        @Override // android.view.MenuItem.OnActionExpandListener
        public boolean onMenuItemActionExpand(MenuItem menuItem) {
            return this.f31989a.onMenuItemActionExpand(c.this.c(menuItem));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class d implements MenuItem.OnMenuItemClickListener {

        /* renamed from: a  reason: collision with root package name */
        private final MenuItem.OnMenuItemClickListener f31991a;

        d(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
            this.f31991a = onMenuItemClickListener;
        }

        @Override // android.view.MenuItem.OnMenuItemClickListener
        public boolean onMenuItemClick(MenuItem menuItem) {
            return this.f31991a.onMenuItemClick(c.this.c(menuItem));
        }
    }

    public c(Context context, t1.b bVar) {
        super(context);
        if (bVar != null) {
            this.f31983d = bVar;
            return;
        }
        throw new IllegalArgumentException("Wrapped Object can not be null.");
    }

    @Override // android.view.MenuItem
    public boolean collapseActionView() {
        return this.f31983d.collapseActionView();
    }

    @Override // android.view.MenuItem
    public boolean expandActionView() {
        return this.f31983d.expandActionView();
    }

    @Override // android.view.MenuItem
    public ActionProvider getActionProvider() {
        androidx.core.view.b a10 = this.f31983d.a();
        if (a10 instanceof a) {
            return ((a) a10).f31986e;
        }
        return null;
    }

    @Override // android.view.MenuItem
    public View getActionView() {
        View actionView = this.f31983d.getActionView();
        if (actionView instanceof b) {
            return ((b) actionView).a();
        }
        return actionView;
    }

    @Override // android.view.MenuItem
    public int getAlphabeticModifiers() {
        return this.f31983d.getAlphabeticModifiers();
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f31983d.getAlphabeticShortcut();
    }

    @Override // android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f31983d.getContentDescription();
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f31983d.getGroupId();
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        return this.f31983d.getIcon();
    }

    @Override // android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f31983d.getIconTintList();
    }

    @Override // android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f31983d.getIconTintMode();
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f31983d.getIntent();
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f31983d.getItemId();
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return this.f31983d.getMenuInfo();
    }

    @Override // android.view.MenuItem
    public int getNumericModifiers() {
        return this.f31983d.getNumericModifiers();
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f31983d.getNumericShortcut();
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f31983d.getOrder();
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return d(this.f31983d.getSubMenu());
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f31983d.getTitle();
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        return this.f31983d.getTitleCondensed();
    }

    @Override // android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f31983d.getTooltipText();
    }

    public void h(boolean z10) {
        try {
            if (this.f31984e == null) {
                this.f31984e = this.f31983d.getClass().getDeclaredMethod("setExclusiveCheckable", Boolean.TYPE);
            }
            this.f31984e.invoke(this.f31983d, Boolean.valueOf(z10));
        } catch (Exception e10) {
            Log.w("MenuItemWrapper", "Error while calling setExclusiveCheckable", e10);
        }
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        return this.f31983d.hasSubMenu();
    }

    @Override // android.view.MenuItem
    public boolean isActionViewExpanded() {
        return this.f31983d.isActionViewExpanded();
    }

    @Override // android.view.MenuItem
    public boolean isCheckable() {
        return this.f31983d.isCheckable();
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        return this.f31983d.isChecked();
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        return this.f31983d.isEnabled();
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        return this.f31983d.isVisible();
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        a aVar = new a(this.f31980a, actionProvider);
        t1.b bVar = this.f31983d;
        if (actionProvider == null) {
            aVar = null;
        }
        bVar.b(aVar);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setActionView(View view) {
        if (view instanceof CollapsibleActionView) {
            view = new b(view);
        }
        this.f31983d.setActionView(view);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        this.f31983d.setAlphabeticShortcut(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        this.f31983d.setCheckable(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        this.f31983d.setChecked(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setContentDescription(CharSequence charSequence) {
        this.f31983d.setContentDescription(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        this.f31983d.setEnabled(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f31983d.setIcon(drawable);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f31983d.setIconTintList(colorStateList);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f31983d.setIconTintMode(mode);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f31983d.setIntent(intent);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        this.f31983d.setNumericShortcut(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        MenuItem$OnActionExpandListenerC0440c menuItem$OnActionExpandListenerC0440c;
        t1.b bVar = this.f31983d;
        if (onActionExpandListener != null) {
            menuItem$OnActionExpandListenerC0440c = new MenuItem$OnActionExpandListenerC0440c(onActionExpandListener);
        } else {
            menuItem$OnActionExpandListenerC0440c = null;
        }
        bVar.setOnActionExpandListener(menuItem$OnActionExpandListenerC0440c);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        d dVar;
        t1.b bVar = this.f31983d;
        if (onMenuItemClickListener != null) {
            dVar = new d(onMenuItemClickListener);
        } else {
            dVar = null;
        }
        bVar.setOnMenuItemClickListener(dVar);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11) {
        this.f31983d.setShortcut(c10, c11);
        return this;
    }

    @Override // android.view.MenuItem
    public void setShowAsAction(int i10) {
        this.f31983d.setShowAsAction(i10);
    }

    @Override // android.view.MenuItem
    public MenuItem setShowAsActionFlags(int i10) {
        this.f31983d.setShowAsActionFlags(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f31983d.setTitle(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f31983d.setTitleCondensed(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTooltipText(CharSequence charSequence) {
        this.f31983d.setTooltipText(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        return this.f31983d.setVisible(z10);
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        this.f31983d.setAlphabeticShortcut(c10, i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f31983d.setIcon(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        this.f31983d.setNumericShortcut(c10, i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f31983d.setShortcut(c10, c11, i10, i11);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        this.f31983d.setTitle(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setActionView(int i10) {
        this.f31983d.setActionView(i10);
        View actionView = this.f31983d.getActionView();
        if (actionView instanceof CollapsibleActionView) {
            this.f31983d.setActionView(new b(actionView));
        }
        return this;
    }
}
