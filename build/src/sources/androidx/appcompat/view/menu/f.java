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
    private e f1359d;

    /* renamed from: e  reason: collision with root package name */
    private androidx.appcompat.app.a f1360e;

    /* renamed from: i  reason: collision with root package name */
    c f1361i;

    /* renamed from: o  reason: collision with root package name */
    private j.a f1362o;

    public f(e eVar) {
        this.f1359d = eVar;
    }

    @Override // androidx.appcompat.view.menu.j.a
    public void a(e eVar, boolean z10) {
        if (z10 || eVar == this.f1359d) {
            c();
        }
        j.a aVar = this.f1362o;
        if (aVar != null) {
            aVar.a(eVar, z10);
        }
    }

    @Override // androidx.appcompat.view.menu.j.a
    public boolean b(e eVar) {
        j.a aVar = this.f1362o;
        if (aVar != null) {
            return aVar.b(eVar);
        }
        return false;
    }

    public void c() {
        androidx.appcompat.app.a aVar = this.f1360e;
        if (aVar != null) {
            aVar.dismiss();
        }
    }

    public void d(IBinder iBinder) {
        e eVar = this.f1359d;
        a.C0019a c0019a = new a.C0019a(eVar.u());
        c cVar = new c(c0019a.getContext(), f.g.f23389j);
        this.f1361i = cVar;
        cVar.c(this);
        this.f1359d.b(this.f1361i);
        c0019a.a(this.f1361i.i(), this);
        View y10 = eVar.y();
        if (y10 != null) {
            c0019a.b(y10);
        } else {
            c0019a.c(eVar.w()).setTitle(eVar.x());
        }
        c0019a.h(this);
        androidx.appcompat.app.a create = c0019a.create();
        this.f1360e = create;
        create.setOnDismissListener(this);
        WindowManager.LayoutParams attributes = this.f1360e.getWindow().getAttributes();
        attributes.type = 1003;
        if (iBinder != null) {
            attributes.token = iBinder;
        }
        attributes.flags |= 131072;
        this.f1360e.show();
    }

    @Override // android.content.DialogInterface.OnClickListener
    public void onClick(DialogInterface dialogInterface, int i10) {
        this.f1359d.M((g) this.f1361i.i().getItem(i10), 0);
    }

    @Override // android.content.DialogInterface.OnDismissListener
    public void onDismiss(DialogInterface dialogInterface) {
        this.f1361i.a(this.f1359d, true);
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
                Window window2 = this.f1360e.getWindow();
                if (window2 != null && (decorView2 = window2.getDecorView()) != null && (keyDispatcherState2 = decorView2.getKeyDispatcherState()) != null) {
                    keyDispatcherState2.startTracking(keyEvent, this);
                    return true;
                }
            } else if (keyEvent.getAction() == 1 && !keyEvent.isCanceled() && (window = this.f1360e.getWindow()) != null && (decorView = window.getDecorView()) != null && (keyDispatcherState = decorView.getKeyDispatcherState()) != null && keyDispatcherState.isTracking(keyEvent)) {
                this.f1359d.e(true);
                dialogInterface.dismiss();
                return true;
            }
        }
        return this.f1359d.performShortcut(i10, keyEvent, 0);
    }
}
