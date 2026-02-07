package k;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
import androidx.collection.SimpleArrayMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    final Context f31385a;

    /* renamed from: b  reason: collision with root package name */
    private SimpleArrayMap f31386b;

    /* renamed from: c  reason: collision with root package name */
    private SimpleArrayMap f31387c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        this.f31385a = context;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final MenuItem c(MenuItem menuItem) {
        if (menuItem instanceof t1.b) {
            t1.b bVar = (t1.b) menuItem;
            if (this.f31386b == null) {
                this.f31386b = new SimpleArrayMap();
            }
            MenuItem menuItem2 = (MenuItem) this.f31386b.get(bVar);
            if (menuItem2 == null) {
                c cVar = new c(this.f31385a, bVar);
                this.f31386b.put(bVar, cVar);
                return cVar;
            }
            return menuItem2;
        }
        return menuItem;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e() {
        SimpleArrayMap simpleArrayMap = this.f31386b;
        if (simpleArrayMap != null) {
            simpleArrayMap.clear();
        }
        SimpleArrayMap simpleArrayMap2 = this.f31387c;
        if (simpleArrayMap2 != null) {
            simpleArrayMap2.clear();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10) {
        if (this.f31386b != null) {
            int i11 = 0;
            while (i11 < this.f31386b.size()) {
                if (((t1.b) this.f31386b.f(i11)).getGroupId() == i10) {
                    this.f31386b.h(i11);
                    i11--;
                }
                i11++;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(int i10) {
        if (this.f31386b != null) {
            for (int i11 = 0; i11 < this.f31386b.size(); i11++) {
                if (((t1.b) this.f31386b.f(i11)).getItemId() == i10) {
                    this.f31386b.h(i11);
                    return;
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final SubMenu d(SubMenu subMenu) {
        return subMenu;
    }
}
