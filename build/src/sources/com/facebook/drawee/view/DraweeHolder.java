package com.facebook.drawee.view;

import android.content.Context;
import android.graphics.drawable.Drawable;
import android.view.MotionEvent;
import com.facebook.drawee.drawable.b0;
import com.facebook.drawee.drawable.c0;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import h9.c;
import o8.h;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class DraweeHolder implements c0 {

    /* renamed from: o  reason: collision with root package name */
    private DraweeHierarchy f10824o;

    /* renamed from: d  reason: collision with root package name */
    private boolean f10821d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f10822e = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f10823i = true;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10825p = null;

    /* renamed from: q  reason: collision with root package name */
    private final c f10826q = c.a();

    public DraweeHolder(DraweeHierarchy draweeHierarchy) {
        if (draweeHierarchy != null) {
            q(draweeHierarchy);
        }
    }

    private void a() {
        if (!this.f10821d) {
            this.f10826q.b(c.a.ON_ATTACH_CONTROLLER);
            this.f10821d = true;
            DraweeController draweeController = this.f10825p;
            if (draweeController != null && draweeController.getHierarchy() != null) {
                this.f10825p.onAttach();
            }
        }
    }

    private void b() {
        if (this.f10822e && this.f10823i) {
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
        if (this.f10821d) {
            this.f10826q.b(c.a.ON_DETACH_CONTROLLER);
            this.f10821d = false;
            if (i()) {
                this.f10825p.onDetach();
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
        return this.f10825p;
    }

    public DraweeHierarchy f() {
        return (DraweeHierarchy) j.g(this.f10824o);
    }

    public Drawable g() {
        DraweeHierarchy draweeHierarchy = this.f10824o;
        if (draweeHierarchy == null) {
            return null;
        }
        return draweeHierarchy.d();
    }

    public boolean h() {
        if (this.f10824o != null) {
            return true;
        }
        return false;
    }

    public boolean i() {
        DraweeController draweeController = this.f10825p;
        if (draweeController != null && draweeController.getHierarchy() == this.f10824o) {
            return true;
        }
        return false;
    }

    public void j() {
        this.f10826q.b(c.a.ON_HOLDER_ATTACH);
        this.f10822e = true;
        b();
    }

    public void k() {
        this.f10826q.b(c.a.ON_HOLDER_DETACH);
        this.f10822e = false;
        b();
    }

    public boolean l(MotionEvent motionEvent) {
        if (!i()) {
            return false;
        }
        return this.f10825p.onTouchEvent(motionEvent);
    }

    public void m(Context context) {
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        c.a aVar;
        if (this.f10823i == z10) {
            return;
        }
        c cVar = this.f10826q;
        if (z10) {
            aVar = c.a.ON_DRAWABLE_SHOW;
        } else {
            aVar = c.a.ON_DRAWABLE_HIDE;
        }
        cVar.b(aVar);
        this.f10823i = z10;
        b();
    }

    public void o() {
        p(null);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
        if (this.f10821d) {
            return;
        }
        p8.a.H(c.class, "%x: Draw requested for a non-attached controller %x. %s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(this.f10825p)), toString());
        this.f10822e = true;
        this.f10823i = true;
        b();
    }

    public void p(DraweeController draweeController) {
        boolean z10 = this.f10821d;
        if (z10) {
            d();
        }
        if (i()) {
            this.f10826q.b(c.a.ON_CLEAR_OLD_CONTROLLER);
            this.f10825p.setHierarchy(null);
        }
        this.f10825p = draweeController;
        if (draweeController != null) {
            this.f10826q.b(c.a.ON_SET_CONTROLLER);
            this.f10825p.setHierarchy(this.f10824o);
        } else {
            this.f10826q.b(c.a.ON_CLEAR_CONTROLLER);
        }
        if (z10) {
            a();
        }
    }

    public void q(DraweeHierarchy draweeHierarchy) {
        boolean z10;
        this.f10826q.b(c.a.ON_SET_HIERARCHY);
        boolean i10 = i();
        r(null);
        DraweeHierarchy draweeHierarchy2 = (DraweeHierarchy) j.g(draweeHierarchy);
        this.f10824o = draweeHierarchy2;
        Drawable d10 = draweeHierarchy2.d();
        if (d10 != null && !d10.isVisible()) {
            z10 = false;
        } else {
            z10 = true;
        }
        n(z10);
        r(this);
        if (i10) {
            this.f10825p.setHierarchy(draweeHierarchy);
        }
    }

    public String toString() {
        return h.b(this).c("controllerAttached", this.f10821d).c("holderAttached", this.f10822e).c("drawableVisible", this.f10823i).b("events", this.f10826q.toString()).toString();
    }
}
