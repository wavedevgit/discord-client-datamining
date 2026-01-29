package androidx.appcompat.view;

import android.content.Context;
import android.view.ActionMode;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import androidx.appcompat.view.ActionMode;
import androidx.collection.SimpleArrayMap;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d extends android.view.ActionMode {

    /* renamed from: a  reason: collision with root package name */
    final Context f1157a;

    /* renamed from: b  reason: collision with root package name */
    final ActionMode f1158b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements ActionMode.Callback {

        /* renamed from: a  reason: collision with root package name */
        final ActionMode.Callback f1159a;

        /* renamed from: b  reason: collision with root package name */
        final Context f1160b;

        /* renamed from: c  reason: collision with root package name */
        final ArrayList f1161c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        final SimpleArrayMap f1162d = new SimpleArrayMap();

        public a(Context context, ActionMode.Callback callback) {
            this.f1160b = context;
            this.f1159a = callback;
        }

        private Menu f(Menu menu) {
            Menu menu2 = (Menu) this.f1162d.get(menu);
            if (menu2 == null) {
                k.d dVar = new k.d(this.f1160b, (t1.a) menu);
                this.f1162d.put(menu, dVar);
                return dVar;
            }
            return menu2;
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public void a(ActionMode actionMode) {
            this.f1159a.onDestroyActionMode(e(actionMode));
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean b(ActionMode actionMode, Menu menu) {
            return this.f1159a.onCreateActionMode(e(actionMode), f(menu));
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean c(ActionMode actionMode, MenuItem menuItem) {
            return this.f1159a.onActionItemClicked(e(actionMode), new k.c(this.f1160b, (t1.b) menuItem));
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean d(ActionMode actionMode, Menu menu) {
            return this.f1159a.onPrepareActionMode(e(actionMode), f(menu));
        }

        public android.view.ActionMode e(ActionMode actionMode) {
            int size = this.f1161c.size();
            for (int i10 = 0; i10 < size; i10++) {
                d dVar = (d) this.f1161c.get(i10);
                if (dVar != null && dVar.f1158b == actionMode) {
                    return dVar;
                }
            }
            d dVar2 = new d(this.f1160b, actionMode);
            this.f1161c.add(dVar2);
            return dVar2;
        }
    }

    public d(Context context, ActionMode actionMode) {
        this.f1157a = context;
        this.f1158b = actionMode;
    }

    @Override // android.view.ActionMode
    public void finish() {
        this.f1158b.c();
    }

    @Override // android.view.ActionMode
    public View getCustomView() {
        return this.f1158b.d();
    }

    @Override // android.view.ActionMode
    public Menu getMenu() {
        return new k.d(this.f1157a, (t1.a) this.f1158b.e());
    }

    @Override // android.view.ActionMode
    public MenuInflater getMenuInflater() {
        return this.f1158b.f();
    }

    @Override // android.view.ActionMode
    public CharSequence getSubtitle() {
        return this.f1158b.g();
    }

    @Override // android.view.ActionMode
    public Object getTag() {
        return this.f1158b.h();
    }

    @Override // android.view.ActionMode
    public CharSequence getTitle() {
        return this.f1158b.i();
    }

    @Override // android.view.ActionMode
    public boolean getTitleOptionalHint() {
        return this.f1158b.j();
    }

    @Override // android.view.ActionMode
    public void invalidate() {
        this.f1158b.k();
    }

    @Override // android.view.ActionMode
    public boolean isTitleOptional() {
        return this.f1158b.l();
    }

    @Override // android.view.ActionMode
    public void setCustomView(View view) {
        this.f1158b.m(view);
    }

    @Override // android.view.ActionMode
    public void setSubtitle(CharSequence charSequence) {
        this.f1158b.o(charSequence);
    }

    @Override // android.view.ActionMode
    public void setTag(Object obj) {
        this.f1158b.p(obj);
    }

    @Override // android.view.ActionMode
    public void setTitle(CharSequence charSequence) {
        this.f1158b.r(charSequence);
    }

    @Override // android.view.ActionMode
    public void setTitleOptionalHint(boolean z10) {
        this.f1158b.s(z10);
    }

    @Override // android.view.ActionMode
    public void setSubtitle(int i10) {
        this.f1158b.n(i10);
    }

    @Override // android.view.ActionMode
    public void setTitle(int i10) {
        this.f1158b.q(i10);
    }
}
