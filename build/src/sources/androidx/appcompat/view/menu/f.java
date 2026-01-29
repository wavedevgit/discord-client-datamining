package androidx.appcompat.view.menu;

import android.content.DialogInterface;
import android.os.IBinder;
import android.view.KeyEvent;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import androidx.appcompat.app.a;
import androidx.appcompat.view.menu.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class f implements DialogInterface.OnKeyListener, DialogInterface.OnClickListener, DialogInterface.OnDismissListener, j.a {

    /* renamed from: d  reason: collision with root package name */
    private e f1315d;

    /* renamed from: e  reason: collision with root package name */
    private androidx.appcompat.app.a f1316e;

    /* renamed from: i  reason: collision with root package name */
    c f1317i;

    /* renamed from: o  reason: collision with root package name */
    private j.a f1318o;

    public f(e eVar) {
        this.f1315d = eVar;
    }

    @Override // androidx.appcompat.view.menu.j.a
    public void a(e eVar, boolean z10) {
        if (z10 || eVar == this.f1315d) {
            c();
        }
        j.a aVar = this.f1318o;
        if (aVar != null) {
            aVar.a(eVar, z10);
        }
    }

    @Override // androidx.appcompat.view.menu.j.a
    public boolean b(e eVar) {
        j.a aVar = this.f1318o;
        if (aVar != null) {
            return aVar.b(eVar);
        }
        return false;
    }

    public void c() {
        androidx.appcompat.app.a aVar = this.f1316e;
        if (aVar != null) {
            aVar.dismiss();
        }
    }

    public void d(IBinder iBinder) {
        e eVar = this.f1315d;
        a.C0015a c0015a = new a.C0015a(eVar.u());
        c cVar = new c(c0015a.getContext(), f.g.f24178j);
        this.f1317i = cVar;
        cVar.c(this);
        this.f1315d.b(this.f1317i);
        c0015a.a(this.f1317i.i(), this);
        View y10 = eVar.y();
        if (y10 != null) {
            c0015a.b(y10);
        } else {
            c0015a.c(eVar.w()).setTitle(eVar.x());
        }
        c0015a.h(this);
        androidx.appcompat.app.a create = c0015a.create();
        this.f1316e = create;
        create.setOnDismissListener(this);
        WindowManager.LayoutParams attributes = this.f1316e.getWindow().getAttributes();
        attributes.type = 1003;
        if (iBinder != null) {
            attributes.token = iBinder;
        }
        attributes.flags |= 131072;
        this.f1316e.show();
    }

    @Override // android.content.DialogInterface.OnClickListener
    public void onClick(DialogInterface dialogInterface, int i10) {
        this.f1315d.M((g) this.f1317i.i().getItem(i10), 0);
    }

    @Override // android.content.DialogInterface.OnDismissListener
    public void onDismiss(DialogInterface dialogInterface) {
        this.f1317i.a(this.f1315d, true);
    }

    @Override // android.content.DialogInterface.OnKeyListener
    public boolean onKey(DialogInterface dialogInterface, int i10, KeyEvent keyEvent) {
        Window window;
        View decorView;
        KeyEvent.DispatcherState keyDispatcherState;
        View decorView2;
        KeyEvent.DispatcherState keyDispatcherState2;
        if (i10 == 82 || i10 == 4) {
            if (keyEvent.getAction() == 0 && keyEvent.getRepeatCount() == 0) {
                Window window2 = this.f1316e.getWindow();
                if (window2 != null && (decorView2 = window2.getDecorView()) != null && (keyDispatcherState2 = decorView2.getKeyDispatcherState()) != null) {
                    keyDispatcherState2.startTracking(keyEvent, this);
                    return true;
                }
            } else if (keyEvent.getAction() == 1 && !keyEvent.isCanceled() && (window = this.f1316e.getWindow()) != null && (decorView = window.getDecorView()) != null && (keyDispatcherState = decorView.getKeyDispatcherState()) != null && keyDispatcherState.isTracking(keyEvent)) {
                this.f1315d.e(true);
                dialogInterface.dismiss();
                return true;
            }
        }
        return this.f1315d.performShortcut(i10, keyEvent, 0);
    }
}
