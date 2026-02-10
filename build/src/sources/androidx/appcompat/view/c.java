package androidx.appcompat.view;

import android.content.Context;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import androidx.appcompat.view.ActionMode;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.widget.ActionBarContextView;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c extends ActionMode implements e.a {

    /* renamed from: i  reason: collision with root package name */
    private Context f1301i;

    /* renamed from: o  reason: collision with root package name */
    private ActionBarContextView f1302o;

    /* renamed from: p  reason: collision with root package name */
    private ActionMode.Callback f1303p;

    /* renamed from: q  reason: collision with root package name */
    private WeakReference f1304q;

    /* renamed from: r  reason: collision with root package name */
    private boolean f1305r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f1306s;

    /* renamed from: t  reason: collision with root package name */
    private androidx.appcompat.view.menu.e f1307t;

    public c(Context context, ActionBarContextView actionBarContextView, ActionMode.Callback callback, boolean z10) {
        this.f1301i = context;
        this.f1302o = actionBarContextView;
        this.f1303p = callback;
        androidx.appcompat.view.menu.e T = new androidx.appcompat.view.menu.e(actionBarContextView.getContext()).T(1);
        this.f1307t = T;
        T.S(this);
        this.f1306s = z10;
    }

    @Override // androidx.appcompat.view.menu.e.a
    public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
        return this.f1303p.c(this, menuItem);
    }

    @Override // androidx.appcompat.view.menu.e.a
    public void b(androidx.appcompat.view.menu.e eVar) {
        k();
        this.f1302o.l();
    }

    @Override // androidx.appcompat.view.ActionMode
    public void c() {
        if (this.f1305r) {
            return;
        }
        this.f1305r = true;
        this.f1303p.a(this);
    }

    @Override // androidx.appcompat.view.ActionMode
    public View d() {
        WeakReference weakReference = this.f1304q;
        if (weakReference != null) {
            return (View) weakReference.get();
        }
        return null;
    }

    @Override // androidx.appcompat.view.ActionMode
    public Menu e() {
        return this.f1307t;
    }

    @Override // androidx.appcompat.view.ActionMode
    public MenuInflater f() {
        return new e(this.f1302o.getContext());
    }

    @Override // androidx.appcompat.view.ActionMode
    public CharSequence g() {
        return this.f1302o.getSubtitle();
    }

    @Override // androidx.appcompat.view.ActionMode
    public CharSequence i() {
        return this.f1302o.getTitle();
    }

    @Override // androidx.appcompat.view.ActionMode
    public void k() {
        this.f1303p.d(this, this.f1307t);
    }

    @Override // androidx.appcompat.view.ActionMode
    public boolean l() {
        return this.f1302o.j();
    }

    @Override // androidx.appcompat.view.ActionMode
    public void m(View view) {
        WeakReference weakReference;
        this.f1302o.setCustomView(view);
        if (view != null) {
            weakReference = new WeakReference(view);
        } else {
            weakReference = null;
        }
        this.f1304q = weakReference;
    }

    @Override // androidx.appcompat.view.ActionMode
    public void n(int i10) {
        o(this.f1301i.getString(i10));
    }

    @Override // androidx.appcompat.view.ActionMode
    public void o(CharSequence charSequence) {
        this.f1302o.setSubtitle(charSequence);
    }

    @Override // androidx.appcompat.view.ActionMode
    public void q(int i10) {
        r(this.f1301i.getString(i10));
    }

    @Override // androidx.appcompat.view.ActionMode
    public void r(CharSequence charSequence) {
        this.f1302o.setTitle(charSequence);
    }

    @Override // androidx.appcompat.view.ActionMode
    public void s(boolean z10) {
        super.s(z10);
        this.f1302o.setTitleOptional(z10);
    }
}
