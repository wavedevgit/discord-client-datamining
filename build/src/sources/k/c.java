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
    private final t1.b f32889d;

    /* renamed from: e  reason: collision with root package name */
    private Method f32890e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class a extends androidx.core.view.b implements ActionProvider.VisibilityListener {

        /* renamed from: d  reason: collision with root package name */
        private b.InterfaceC0037b f32891d;

        /* renamed from: e  reason: collision with root package name */
        private final ActionProvider f32892e;

        a(Context context, ActionProvider actionProvider) {
            super(context);
            this.f32892e = actionProvider;
        }

        @Override // androidx.core.view.b
        public boolean a() {
            return this.f32892e.hasSubMenu();
        }

        @Override // androidx.core.view.b
        public boolean b() {
            return this.f32892e.isVisible();
        }

        @Override // androidx.core.view.b
        public View c(MenuItem menuItem) {
            return this.f32892e.onCreateActionView(menuItem);
        }

        @Override // androidx.core.view.b
        public boolean d() {
            return this.f32892e.onPerformDefaultAction();
        }

        @Override // androidx.core.view.b
        public void e(SubMenu subMenu) {
            this.f32892e.onPrepareSubMenu(c.this.d(subMenu));
        }

        @Override // androidx.core.view.b
        public boolean f() {
            return this.f32892e.overridesItemVisibility();
        }

        @Override // androidx.core.view.b
        public void i(b.InterfaceC0037b interfaceC0037b) {
            a aVar;
            this.f32891d = interfaceC0037b;
            ActionProvider actionProvider = this.f32892e;
            if (interfaceC0037b != null) {
                aVar = this;
            } else {
                aVar = null;
            }
            actionProvider.setVisibilityListener(aVar);
        }

        @Override // android.view.ActionProvider.VisibilityListener
        public void onActionProviderVisibilityChanged(boolean z10) {
            b.InterfaceC0037b interfaceC0037b = this.f32891d;
            if (interfaceC0037b != null) {
                interfaceC0037b.onActionProviderVisibilityChanged(z10);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class b extends FrameLayout implements androidx.appcompat.view.b {

        /* renamed from: d  reason: collision with root package name */
        final CollapsibleActionView f32894d;

        b(View view) {
            super(view.getContext());
            this.f32894d = (CollapsibleActionView) view;
            addView(view);
        }

        View a() {
            return (View) this.f32894d;
        }

        @Override // androidx.appcompat.view.b
        public void onActionViewCollapsed() {
            this.f32894d.onActionViewCollapsed();
        }

        @Override // androidx.appcompat.view.b
        public void onActionViewExpanded() {
            this.f32894d.onActionViewExpanded();
        }
    }

    /* renamed from: k.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class MenuItem$OnActionExpandListenerC0446c implements MenuItem.OnActionExpandListener {

        /* renamed from: a  reason: collision with root package name */
        private final MenuItem.OnActionExpandListener f32895a;

        MenuItem$OnActionExpandListenerC0446c(MenuItem.OnActionExpandListener onActionExpandListener) {
            this.f32895a = onActionExpandListener;
        }

        @Override // android.view.MenuItem.OnActionExpandListener
        public boolean onMenuItemActionCollapse(MenuItem menuItem) {
            return this.f32895a.onMenuItemActionCollapse(c.this.c(menuItem));
        }

        @Override // android.view.MenuItem.OnActionExpandListener
        public boolean onMenuItemActionExpand(MenuItem menuItem) {
            return this.f32895a.onMenuItemActionExpand(c.this.c(menuItem));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class d implements MenuItem.OnMenuItemClickListener {

        /* renamed from: a  reason: collision with root package name */
        private final MenuItem.OnMenuItemClickListener f32897a;

        d(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
            this.f32897a = onMenuItemClickListener;
        }

        @Override // android.view.MenuItem.OnMenuItemClickListener
        public boolean onMenuItemClick(MenuItem menuItem) {
            return this.f32897a.onMenuItemClick(c.this.c(menuItem));
        }
    }

    public c(Context context, t1.b bVar) {
        super(context);
        if (bVar != null) {
            this.f32889d = bVar;
            return;
        }
        throw new IllegalArgumentException("Wrapped Object can not be null.");
    }

    @Override // android.view.MenuItem
    public boolean collapseActionView() {
        return this.f32889d.collapseActionView();
    }

    @Override // android.view.MenuItem
    public boolean expandActionView() {
        return this.f32889d.expandActionView();
    }

    @Override // android.view.MenuItem
    public ActionProvider getActionProvider() {
        androidx.core.view.b a10 = this.f32889d.a();
        if (a10 instanceof a) {
            return ((a) a10).f32892e;
        }
        return null;
    }

    @Override // android.view.MenuItem
    public View getActionView() {
        View actionView = this.f32889d.getActionView();
        if (actionView instanceof b) {
            return ((b) actionView).a();
        }
        return actionView;
    }

    @Override // android.view.MenuItem
    public int getAlphabeticModifiers() {
        return this.f32889d.getAlphabeticModifiers();
    }

    @Override // android.view.MenuItem
    public char getAlphabeticShortcut() {
        return this.f32889d.getAlphabeticShortcut();
    }

    @Override // android.view.MenuItem
    public CharSequence getContentDescription() {
        return this.f32889d.getContentDescription();
    }

    @Override // android.view.MenuItem
    public int getGroupId() {
        return this.f32889d.getGroupId();
    }

    @Override // android.view.MenuItem
    public Drawable getIcon() {
        return this.f32889d.getIcon();
    }

    @Override // android.view.MenuItem
    public ColorStateList getIconTintList() {
        return this.f32889d.getIconTintList();
    }

    @Override // android.view.MenuItem
    public PorterDuff.Mode getIconTintMode() {
        return this.f32889d.getIconTintMode();
    }

    @Override // android.view.MenuItem
    public Intent getIntent() {
        return this.f32889d.getIntent();
    }

    @Override // android.view.MenuItem
    public int getItemId() {
        return this.f32889d.getItemId();
    }

    @Override // android.view.MenuItem
    public ContextMenu.ContextMenuInfo getMenuInfo() {
        return this.f32889d.getMenuInfo();
    }

    @Override // android.view.MenuItem
    public int getNumericModifiers() {
        return this.f32889d.getNumericModifiers();
    }

    @Override // android.view.MenuItem
    public char getNumericShortcut() {
        return this.f32889d.getNumericShortcut();
    }

    @Override // android.view.MenuItem
    public int getOrder() {
        return this.f32889d.getOrder();
    }

    @Override // android.view.MenuItem
    public SubMenu getSubMenu() {
        return d(this.f32889d.getSubMenu());
    }

    @Override // android.view.MenuItem
    public CharSequence getTitle() {
        return this.f32889d.getTitle();
    }

    @Override // android.view.MenuItem
    public CharSequence getTitleCondensed() {
        return this.f32889d.getTitleCondensed();
    }

    @Override // android.view.MenuItem
    public CharSequence getTooltipText() {
        return this.f32889d.getTooltipText();
    }

    public void h(boolean z10) {
        try {
            if (this.f32890e == null) {
                this.f32890e = this.f32889d.getClass().getDeclaredMethod("setExclusiveCheckable", Boolean.TYPE);
            }
            this.f32890e.invoke(this.f32889d, Boolean.valueOf(z10));
        } catch (Exception e10) {
            Log.w("MenuItemWrapper", "Error while calling setExclusiveCheckable", e10);
        }
    }

    @Override // android.view.MenuItem
    public boolean hasSubMenu() {
        return this.f32889d.hasSubMenu();
    }

    @Override // android.view.MenuItem
    public boolean isActionViewExpanded() {
        return this.f32889d.isActionViewExpanded();
    }

    @Override // android.view.MenuItem
    public boolean isCheckable() {
        return this.f32889d.isCheckable();
    }

    @Override // android.view.MenuItem
    public boolean isChecked() {
        return this.f32889d.isChecked();
    }

    @Override // android.view.MenuItem
    public boolean isEnabled() {
        return this.f32889d.isEnabled();
    }

    @Override // android.view.MenuItem
    public boolean isVisible() {
        return this.f32889d.isVisible();
    }

    @Override // android.view.MenuItem
    public MenuItem setActionProvider(ActionProvider actionProvider) {
        a aVar = new a(this.f32886a, actionProvider);
        t1.b bVar = this.f32889d;
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
        this.f32889d.setActionView(view);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10) {
        this.f32889d.setAlphabeticShortcut(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setCheckable(boolean z10) {
        this.f32889d.setCheckable(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setChecked(boolean z10) {
        this.f32889d.setChecked(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setContentDescription(CharSequence charSequence) {
        this.f32889d.setContentDescription(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setEnabled(boolean z10) {
        this.f32889d.setEnabled(z10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(Drawable drawable) {
        this.f32889d.setIcon(drawable);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIconTintList(ColorStateList colorStateList) {
        this.f32889d.setIconTintList(colorStateList);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIconTintMode(PorterDuff.Mode mode) {
        this.f32889d.setIconTintMode(mode);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIntent(Intent intent) {
        this.f32889d.setIntent(intent);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10) {
        this.f32889d.setNumericShortcut(c10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnActionExpandListener(MenuItem.OnActionExpandListener onActionExpandListener) {
        MenuItem$OnActionExpandListenerC0446c menuItem$OnActionExpandListenerC0446c;
        t1.b bVar = this.f32889d;
        if (onActionExpandListener != null) {
            menuItem$OnActionExpandListenerC0446c = new MenuItem$OnActionExpandListenerC0446c(onActionExpandListener);
        } else {
            menuItem$OnActionExpandListenerC0446c = null;
        }
        bVar.setOnActionExpandListener(menuItem$OnActionExpandListenerC0446c);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setOnMenuItemClickListener(MenuItem.OnMenuItemClickListener onMenuItemClickListener) {
        d dVar;
        t1.b bVar = this.f32889d;
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
        this.f32889d.setShortcut(c10, c11);
        return this;
    }

    @Override // android.view.MenuItem
    public void setShowAsAction(int i10) {
        this.f32889d.setShowAsAction(i10);
    }

    @Override // android.view.MenuItem
    public MenuItem setShowAsActionFlags(int i10) {
        this.f32889d.setShowAsActionFlags(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(CharSequence charSequence) {
        this.f32889d.setTitle(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitleCondensed(CharSequence charSequence) {
        this.f32889d.setTitleCondensed(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTooltipText(CharSequence charSequence) {
        this.f32889d.setTooltipText(charSequence);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setVisible(boolean z10) {
        return this.f32889d.setVisible(z10);
    }

    @Override // android.view.MenuItem
    public MenuItem setAlphabeticShortcut(char c10, int i10) {
        this.f32889d.setAlphabeticShortcut(c10, i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setIcon(int i10) {
        this.f32889d.setIcon(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setNumericShortcut(char c10, int i10) {
        this.f32889d.setNumericShortcut(c10, i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setShortcut(char c10, char c11, int i10, int i11) {
        this.f32889d.setShortcut(c10, c11, i10, i11);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setTitle(int i10) {
        this.f32889d.setTitle(i10);
        return this;
    }

    @Override // android.view.MenuItem
    public MenuItem setActionView(int i10) {
        this.f32889d.setActionView(i10);
        View actionView = this.f32889d.getActionView();
        if (actionView instanceof CollapsibleActionView) {
            this.f32889d.setActionView(new b(actionView));
        }
        return this;
    }
}
