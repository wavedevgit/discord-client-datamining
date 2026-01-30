package k;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
import androidx.collection.SimpleArrayMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    final Context f32886a;

    /* renamed from: b  reason: collision with root package name */
    private SimpleArrayMap f32887b;

    /* renamed from: c  reason: collision with root package name */
    private SimpleArrayMap f32888c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(Context context) {
        this.f32886a = context;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final MenuItem c(MenuItem menuItem) {
        if (menuItem instanceof t1.b) {
            t1.b bVar = (t1.b) menuItem;
            if (this.f32887b == null) {
                this.f32887b = new SimpleArrayMap();
            }
            MenuItem menuItem2 = (MenuItem) this.f32887b.get(bVar);
            if (menuItem2 == null) {
                c cVar = new c(this.f32886a, bVar);
                this.f32887b.put(bVar, cVar);
                return cVar;
            }
            return menuItem2;
        }
        return menuItem;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void e() {
        SimpleArrayMap simpleArrayMap = this.f32887b;
        if (simpleArrayMap != null) {
            simpleArrayMap.clear();
        }
        SimpleArrayMap simpleArrayMap2 = this.f32888c;
        if (simpleArrayMap2 != null) {
            simpleArrayMap2.clear();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void f(int i10) {
        if (this.f32887b != null) {
            int i11 = 0;
            while (i11 < this.f32887b.size()) {
                if (((t1.b) this.f32887b.f(i11)).getGroupId() == i10) {
                    this.f32887b.h(i11);
                    i11--;
                }
                i11++;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void g(int i10) {
        if (this.f32887b != null) {
            for (int i11 = 0; i11 < this.f32887b.size(); i11++) {
                if (((t1.b) this.f32887b.f(i11)).getItemId() == i10) {
                    this.f32887b.h(i11);
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
