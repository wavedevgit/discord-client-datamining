package androidx.core.view;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3485a;

    /* renamed from: b  reason: collision with root package name */
    private a f3486b;

    /* renamed from: c  reason: collision with root package name */
    private InterfaceC0037b f3487c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
    }

    /* renamed from: androidx.core.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0037b {
        void onActionProviderVisibilityChanged(boolean z10);
    }

    public b(Context context) {
        this.f3485a = context;
    }

    public abstract boolean a();

    public abstract boolean b();

    public abstract View c(MenuItem menuItem);

    public abstract boolean d();

    public abstract void e(SubMenu subMenu);

    public abstract boolean f();

    public void g() {
        this.f3487c = null;
        this.f3486b = null;
    }

    public void h(a aVar) {
        this.f3486b = aVar;
    }

    public abstract void i(InterfaceC0037b interfaceC0037b);
}
