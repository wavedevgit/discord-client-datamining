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
    private e f1468d;

    /* renamed from: e  reason: collision with root package name */
    private androidx.appcompat.app.a f1469e;

    /* renamed from: i  reason: collision with root package name */
    c f1470i;

    /* renamed from: o  reason: collision with root package name */
    private j.a f1471o;

    public f(e eVar) {
        this.f1468d = eVar;
    }

    @Override // androidx.appcompat.view.menu.j.a
    public void a(e eVar, boolean z10) {
        if (z10 || eVar == this.f1468d) {
            c();
        }
        j.a aVar = this.f1471o;
        if (aVar != null) {
            aVar.a(eVar, z10);
        }
    }

    @Override // androidx.appcompat.view.menu.j.a
    public boolean b(e eVar) {
        j.a aVar = this.f1471o;
        if (aVar != null) {
            return aVar.b(eVar);
        }
        return false;
    }

    public void c() {
        androidx.appcompat.app.a aVar = this.f1469e;
        if (aVar != null) {
            aVar.dismiss();
        }
    }

    public void d(IBinder iBinder) {
        e eVar = this.f1468d;
        a.C0015a c0015a = new a.C0015a(eVar.w());
        c cVar = new c(c0015a.getContext(), f.g.f23385j);
        this.f1470i = cVar;
        cVar.c(this);
        this.f1468d.b(this.f1470i);
        c0015a.a(this.f1470i.k(), this);
        View A = eVar.A();
        if (A != null) {
            c0015a.b(A);
        } else {
            c0015a.c(eVar.y()).setTitle(eVar.z());
        }
        c0015a.h(this);
        androidx.appcompat.app.a create = c0015a.create();
        this.f1469e = create;
        create.setOnDismissListener(this);
        WindowManager.LayoutParams attributes = this.f1469e.getWindow().getAttributes();
        attributes.type = 1003;
        if (iBinder != null) {
            attributes.token = iBinder;
        }
        attributes.flags |= 131072;
        this.f1469e.show();
    }

    @Override // android.content.DialogInterface.OnClickListener
    public void onClick(DialogInterface dialogInterface, int i10) {
        this.f1468d.O((g) this.f1470i.k().getItem(i10), 0);
    }

    @Override // android.content.DialogInterface.OnDismissListener
    public void onDismiss(DialogInterface dialogInterface) {
        this.f1470i.a(this.f1468d, true);
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
                Window window2 = this.f1469e.getWindow();
                if (window2 != null && (decorView2 = window2.getDecorView()) != null && (keyDispatcherState2 = decorView2.getKeyDispatcherState()) != null) {
                    keyDispatcherState2.startTracking(keyEvent, this);
                    return true;
                }
            } else if (keyEvent.getAction() == 1 && !keyEvent.isCanceled() && (window = this.f1469e.getWindow()) != null && (decorView = window.getDecorView()) != null && (keyDispatcherState = decorView.getKeyDispatcherState()) != null && keyDispatcherState.isTracking(keyEvent)) {
                this.f1468d.e(true);
                dialogInterface.dismiss();
                return true;
            }
        }
        return this.f1468d.performShortcut(i10, keyEvent, 0);
    }
}
