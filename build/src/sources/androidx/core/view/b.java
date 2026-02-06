package androidx.core.view;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3784a;

    /* renamed from: b  reason: collision with root package name */
    private a f3785b;

    /* renamed from: c  reason: collision with root package name */
    private InterfaceC0038b f3786c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
    }

    /* renamed from: androidx.core.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0038b {
        void onActionProviderVisibilityChanged(boolean z10);
    }

    public b(Context context) {
        this.f3784a = context;
    }

    public abstract boolean a();

    public abstract boolean b();

    public abstract View c(MenuItem menuItem);

    public abstract boolean d();

    public abstract void e(SubMenu subMenu);

    public abstract boolean f();

    public void g() {
        this.f3786c = null;
        this.f3785b = null;
    }

    public void h(a aVar) {
        this.f3785b = aVar;
    }

    public abstract void i(InterfaceC0038b interfaceC0038b);
}
