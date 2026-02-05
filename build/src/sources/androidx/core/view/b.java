package androidx.core.view;

import android.content.Context;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private final Context f3455a;

    /* renamed from: b  reason: collision with root package name */
    private a f3456b;

    /* renamed from: c  reason: collision with root package name */
    private InterfaceC0040b f3457c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface a {
    }

    /* renamed from: androidx.core.view.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface InterfaceC0040b {
        void onActionProviderVisibilityChanged(boolean z10);
    }

    public b(Context context) {
        this.f3455a = context;
    }

    public abstract boolean a();

    public abstract boolean b();

    public abstract View c(MenuItem menuItem);

    public abstract boolean d();

    public abstract void e(SubMenu subMenu);

    public abstract boolean f();

    public void g() {
        this.f3457c = null;
        this.f3456b = null;
    }

    public void h(a aVar) {
        this.f3456b = aVar;
    }

    public abstract void i(InterfaceC0040b interfaceC0040b);
}
