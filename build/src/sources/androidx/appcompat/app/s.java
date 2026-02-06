package androidx.appcompat.app;

import android.content.Context;
import android.content.res.Configuration;
import android.graphics.drawable.Drawable;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import androidx.appcompat.app.e;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.Toolbar;
import androidx.appcompat.widget.z;
import androidx.appcompat.widget.z0;
import androidx.core.view.h0;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s extends ActionBar {

    /* renamed from: a  reason: collision with root package name */
    final z f1536a;

    /* renamed from: b  reason: collision with root package name */
    final Window.Callback f1537b;

    /* renamed from: c  reason: collision with root package name */
    final e.g f1538c;

    /* renamed from: d  reason: collision with root package name */
    boolean f1539d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f1540e;

    /* renamed from: f  reason: collision with root package name */
    private boolean f1541f;

    /* renamed from: g  reason: collision with root package name */
    private ArrayList f1542g = new ArrayList();

    /* renamed from: h  reason: collision with root package name */
    private final Runnable f1543h = new a();

    /* renamed from: i  reason: collision with root package name */
    private final Toolbar.h f1544i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            s.this.A();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b implements Toolbar.h {
        b() {
        }

        @Override // androidx.appcompat.widget.Toolbar.h
        public boolean onMenuItemClick(MenuItem menuItem) {
            return s.this.f1537b.onMenuItemSelected(0, menuItem);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class c implements j.a {

        /* renamed from: d  reason: collision with root package name */
        private boolean f1547d;

        c() {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
            if (this.f1547d) {
                return;
            }
            this.f1547d = true;
            s.this.f1536a.q();
            s.this.f1537b.onPanelClosed(108, eVar);
            this.f1547d = false;
        }

        @Override // androidx.appcompat.view.menu.j.a
        public boolean b(androidx.appcompat.view.menu.e eVar) {
            s.this.f1537b.onMenuOpened(108, eVar);
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class d implements e.a {
        d() {
        }

        @Override // androidx.appcompat.view.menu.e.a
        public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
            return false;
        }

        @Override // androidx.appcompat.view.menu.e.a
        public void b(androidx.appcompat.view.menu.e eVar) {
            if (s.this.f1536a.e()) {
                s.this.f1537b.onPanelClosed(108, eVar);
            } else if (s.this.f1537b.onPreparePanel(0, null, eVar)) {
                s.this.f1537b.onMenuOpened(108, eVar);
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class e implements e.g {
        e() {
        }

        @Override // androidx.appcompat.app.e.g
        public boolean a(int i10) {
            if (i10 == 0) {
                s sVar = s.this;
                if (!sVar.f1539d) {
                    sVar.f1536a.f();
                    s.this.f1539d = true;
                    return false;
                }
                return false;
            }
            return false;
        }

        @Override // androidx.appcompat.app.e.g
        public View onCreatePanelView(int i10) {
            if (i10 == 0) {
                return new View(s.this.f1536a.getContext());
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(Toolbar toolbar, CharSequence charSequence, Window.Callback callback) {
        b bVar = new b();
        this.f1544i = bVar;
        b2.e.g(toolbar);
        z0 z0Var = new z0(toolbar, false);
        this.f1536a = z0Var;
        this.f1537b = (Window.Callback) b2.e.g(callback);
        z0Var.setWindowCallback(callback);
        toolbar.setOnMenuItemClickListener(bVar);
        z0Var.setWindowTitle(charSequence);
        this.f1538c = new e();
    }

    private Menu z() {
        if (!this.f1540e) {
            this.f1536a.t(new c(), new d());
            this.f1540e = true;
        }
        return this.f1536a.j();
    }

    /* JADX WARN: Removed duplicated region for block: B:17:0x002f  */
    /* JADX WARN: Removed duplicated region for block: B:24:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    void A() {
        /*
            r5 = this;
            android.view.Menu r0 = r5.z()
            boolean r1 = r0 instanceof androidx.appcompat.view.menu.e
            r2 = 0
            if (r1 == 0) goto Ld
            r1 = r0
            androidx.appcompat.view.menu.e r1 = (androidx.appcompat.view.menu.e) r1
            goto Le
        Ld:
            r1 = r2
        Le:
            if (r1 == 0) goto L13
            r1.e0()
        L13:
            r0.clear()     // Catch: java.lang.Throwable -> L28
            android.view.Window$Callback r3 = r5.f1537b     // Catch: java.lang.Throwable -> L28
            r4 = 0
            boolean r3 = r3.onCreatePanelMenu(r4, r0)     // Catch: java.lang.Throwable -> L28
            if (r3 == 0) goto L2a
            android.view.Window$Callback r3 = r5.f1537b     // Catch: java.lang.Throwable -> L28
            boolean r2 = r3.onPreparePanel(r4, r2, r0)     // Catch: java.lang.Throwable -> L28
            if (r2 != 0) goto L2d
            goto L2a
        L28:
            r0 = move-exception
            goto L33
        L2a:
            r0.clear()     // Catch: java.lang.Throwable -> L28
        L2d:
            if (r1 == 0) goto L32
            r1.d0()
        L32:
            return
        L33:
            if (r1 == 0) goto L38
            r1.d0()
        L38:
            throw r0
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.app.s.A():void");
    }

    public void B(int i10, int i11) {
        this.f1536a.i((i10 & i11) | ((~i11) & this.f1536a.u()));
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean f() {
        return this.f1536a.b();
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean g() {
        if (this.f1536a.h()) {
            this.f1536a.collapseActionView();
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void h(boolean z10) {
        if (z10 != this.f1541f) {
            this.f1541f = z10;
            if (this.f1542g.size() <= 0) {
                return;
            }
            android.support.v4.media.session.b.a(this.f1542g.get(0));
            throw null;
        }
    }

    @Override // androidx.appcompat.app.ActionBar
    public int i() {
        return this.f1536a.u();
    }

    @Override // androidx.appcompat.app.ActionBar
    public Context j() {
        return this.f1536a.getContext();
    }

    @Override // androidx.appcompat.app.ActionBar
    public void k() {
        this.f1536a.setVisibility(8);
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean l() {
        this.f1536a.m().removeCallbacks(this.f1543h);
        h0.f0(this.f1536a.m(), this.f1543h);
        return true;
    }

    @Override // androidx.appcompat.app.ActionBar
    public void m(Configuration configuration) {
        super.m(configuration);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // androidx.appcompat.app.ActionBar
    public void n() {
        this.f1536a.m().removeCallbacks(this.f1543h);
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean o(int i10, KeyEvent keyEvent) {
        int i11;
        Menu z10 = z();
        if (z10 == null) {
            return false;
        }
        if (keyEvent != null) {
            i11 = keyEvent.getDeviceId();
        } else {
            i11 = -1;
        }
        boolean z11 = true;
        if (KeyCharacterMap.load(i11).getKeyboardType() == 1) {
            z11 = false;
        }
        z10.setQwertyMode(z11);
        return z10.performShortcut(i10, keyEvent, 0);
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean p(KeyEvent keyEvent) {
        if (keyEvent.getAction() == 1) {
            q();
        }
        return true;
    }

    @Override // androidx.appcompat.app.ActionBar
    public boolean q() {
        return this.f1536a.c();
    }

    @Override // androidx.appcompat.app.ActionBar
    public void r(boolean z10) {
    }

    @Override // androidx.appcompat.app.ActionBar
    public void s(boolean z10) {
        int i10;
        if (z10) {
            i10 = 4;
        } else {
            i10 = 0;
        }
        B(i10, 4);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void t(boolean z10) {
        int i10;
        if (z10) {
            i10 = 8;
        } else {
            i10 = 0;
        }
        B(i10, 8);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void u(Drawable drawable) {
        this.f1536a.w(drawable);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void v(boolean z10) {
    }

    @Override // androidx.appcompat.app.ActionBar
    public void w(CharSequence charSequence) {
        this.f1536a.setTitle(charSequence);
    }

    @Override // androidx.appcompat.app.ActionBar
    public void x(CharSequence charSequence) {
        this.f1536a.setWindowTitle(charSequence);
    }
}
