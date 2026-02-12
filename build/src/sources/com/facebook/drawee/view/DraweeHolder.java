package com.facebook.drawee.view;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.MotionEvent;
import com.facebook.drawee.drawable.b0;
import com.facebook.drawee.drawable.c0;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import i9.c;
import p8.h;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DraweeHolder implements c0 {

    /* renamed from: o  reason: collision with root package name */
    private DraweeHierarchy f10794o;

    /* renamed from: d  reason: collision with root package name */
    private boolean f10791d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f10792e = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f10793i = true;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10795p = null;

    /* renamed from: q  reason: collision with root package name */
    private final c f10796q = c.a();

    public DraweeHolder(DraweeHierarchy draweeHierarchy) {
        if (draweeHierarchy != null) {
            q(draweeHierarchy);
        }
    }

    private void a() {
        if (!this.f10791d) {
            this.f10796q.b(c.a.ON_ATTACH_CONTROLLER);
            this.f10791d = true;
            DraweeController draweeController = this.f10795p;
            if (draweeController != null && draweeController.getHierarchy() != null) {
                this.f10795p.onAttach();
            }
        }
    }

    private void b() {
        if (this.f10792e && this.f10793i) {
            a();
        } else {
            d();
        }
    }

    public static DraweeHolder c(DraweeHierarchy draweeHierarchy, Context context) {
        DraweeHolder draweeHolder = new DraweeHolder(draweeHierarchy);
        draweeHolder.m(context);
        return draweeHolder;
    }

    private void d() {
        if (this.f10791d) {
            this.f10796q.b(c.a.ON_DETACH_CONTROLLER);
            this.f10791d = false;
            if (i()) {
                this.f10795p.onDetach();
            }
        }
    }

    private void r(c0 c0Var) {
        Drawable g10 = g();
        if (g10 instanceof b0) {
            ((b0) g10).g(c0Var);
        }
    }

    public DraweeController e() {
        return this.f10795p;
    }

    public DraweeHierarchy f() {
        return (DraweeHierarchy) j.g(this.f10794o);
    }

    public Drawable g() {
        DraweeHierarchy draweeHierarchy = this.f10794o;
        if (draweeHierarchy == null) {
            return null;
        }
        return draweeHierarchy.d();
    }

    public boolean h() {
        if (this.f10794o != null) {
            return true;
        }
        return false;
    }

    public boolean i() {
        DraweeController draweeController = this.f10795p;
        if (draweeController != null && draweeController.getHierarchy() == this.f10794o) {
            return true;
        }
        return false;
    }

    public void j() {
        this.f10796q.b(c.a.ON_HOLDER_ATTACH);
        this.f10792e = true;
        b();
    }

    public void k() {
        this.f10796q.b(c.a.ON_HOLDER_DETACH);
        this.f10792e = false;
        b();
    }

    public boolean l(MotionEvent motionEvent) {
        if (!i()) {
            return false;
        }
        return this.f10795p.onTouchEvent(motionEvent);
    }

    public void m(Context context) {
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        c.a aVar;
        if (this.f10793i == z10) {
            return;
        }
        c cVar = this.f10796q;
        if (z10) {
            aVar = c.a.ON_DRAWABLE_SHOW;
        } else {
            aVar = c.a.ON_DRAWABLE_HIDE;
        }
        cVar.b(aVar);
        this.f10793i = z10;
        b();
    }

    public void o() {
        p(null);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
        if (this.f10791d) {
            return;
        }
        q8.a.H(c.class, "%x: Draw requested for a non-attached controller %x. %s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(this.f10795p)), toString());
        this.f10792e = true;
        this.f10793i = true;
        b();
    }

    public void p(DraweeController draweeController) {
        boolean z10 = this.f10791d;
        if (z10) {
            d();
        }
        if (i()) {
            this.f10796q.b(c.a.ON_CLEAR_OLD_CONTROLLER);
            this.f10795p.setHierarchy(null);
        }
        this.f10795p = draweeController;
        if (draweeController != null) {
            this.f10796q.b(c.a.ON_SET_CONTROLLER);
            this.f10795p.setHierarchy(this.f10794o);
        } else {
            this.f10796q.b(c.a.ON_CLEAR_CONTROLLER);
        }
        if (z10) {
            a();
        }
    }

    public void q(DraweeHierarchy draweeHierarchy) {
        boolean z10;
        this.f10796q.b(c.a.ON_SET_HIERARCHY);
        boolean i10 = i();
        r(null);
        DraweeHierarchy draweeHierarchy2 = (DraweeHierarchy) j.g(draweeHierarchy);
        this.f10794o = draweeHierarchy2;
        Drawable d10 = draweeHierarchy2.d();
        if (d10 != null && !d10.isVisible()) {
            z10 = false;
        } else {
            z10 = true;
        }
        n(z10);
        r(this);
        if (i10) {
            this.f10795p.setHierarchy(draweeHierarchy);
        }
    }

    public String toString() {
        return h.b(this).c("controllerAttached", this.f10791d).c("holderAttached", this.f10792e).c("drawableVisible", this.f10793i).b("events", this.f10796q.toString()).toString();
    }
}
