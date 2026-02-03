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
    private DraweeHierarchy f9792o;

    /* renamed from: d  reason: collision with root package name */
    private boolean f9789d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f9790e = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f9791i = true;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f9793p = null;

    /* renamed from: q  reason: collision with root package name */
    private final c f9794q = c.a();

    public DraweeHolder(DraweeHierarchy draweeHierarchy) {
        if (draweeHierarchy != null) {
            q(draweeHierarchy);
        }
    }

    private void a() {
        if (!this.f9789d) {
            this.f9794q.b(c.a.ON_ATTACH_CONTROLLER);
            this.f9789d = true;
            DraweeController draweeController = this.f9793p;
            if (draweeController != null && draweeController.getHierarchy() != null) {
                this.f9793p.onAttach();
            }
        }
    }

    private void b() {
        if (this.f9790e && this.f9791i) {
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
        if (this.f9789d) {
            this.f9794q.b(c.a.ON_DETACH_CONTROLLER);
            this.f9789d = false;
            if (i()) {
                this.f9793p.onDetach();
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
        return this.f9793p;
    }

    public DraweeHierarchy f() {
        return (DraweeHierarchy) j.g(this.f9792o);
    }

    public Drawable g() {
        DraweeHierarchy draweeHierarchy = this.f9792o;
        if (draweeHierarchy == null) {
            return null;
        }
        return draweeHierarchy.d();
    }

    public boolean h() {
        if (this.f9792o != null) {
            return true;
        }
        return false;
    }

    public boolean i() {
        DraweeController draweeController = this.f9793p;
        if (draweeController != null && draweeController.getHierarchy() == this.f9792o) {
            return true;
        }
        return false;
    }

    public void j() {
        this.f9794q.b(c.a.ON_HOLDER_ATTACH);
        this.f9790e = true;
        b();
    }

    public void k() {
        this.f9794q.b(c.a.ON_HOLDER_DETACH);
        this.f9790e = false;
        b();
    }

    public boolean l(MotionEvent motionEvent) {
        if (!i()) {
            return false;
        }
        return this.f9793p.onTouchEvent(motionEvent);
    }

    public void m(Context context) {
    }

    @Override // com.facebook.drawee.drawable.c0
    public void n(boolean z10) {
        c.a aVar;
        if (this.f9791i == z10) {
            return;
        }
        c cVar = this.f9794q;
        if (z10) {
            aVar = c.a.ON_DRAWABLE_SHOW;
        } else {
            aVar = c.a.ON_DRAWABLE_HIDE;
        }
        cVar.b(aVar);
        this.f9791i = z10;
        b();
    }

    public void o() {
        p(null);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
        if (this.f9789d) {
            return;
        }
        p8.a.H(c.class, "%x: Draw requested for a non-attached controller %x. %s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(this.f9793p)), toString());
        this.f9790e = true;
        this.f9791i = true;
        b();
    }

    public void p(DraweeController draweeController) {
        boolean z10 = this.f9789d;
        if (z10) {
            d();
        }
        if (i()) {
            this.f9794q.b(c.a.ON_CLEAR_OLD_CONTROLLER);
            this.f9793p.setHierarchy(null);
        }
        this.f9793p = draweeController;
        if (draweeController != null) {
            this.f9794q.b(c.a.ON_SET_CONTROLLER);
            this.f9793p.setHierarchy(this.f9792o);
        } else {
            this.f9794q.b(c.a.ON_CLEAR_CONTROLLER);
        }
        if (z10) {
            a();
        }
    }

    public void q(DraweeHierarchy draweeHierarchy) {
        boolean z10;
        this.f9794q.b(c.a.ON_SET_HIERARCHY);
        boolean i10 = i();
        r(null);
        DraweeHierarchy draweeHierarchy2 = (DraweeHierarchy) j.g(draweeHierarchy);
        this.f9792o = draweeHierarchy2;
        Drawable d10 = draweeHierarchy2.d();
        if (d10 != null && !d10.isVisible()) {
            z10 = false;
        } else {
            z10 = true;
        }
        n(z10);
        r(this);
        if (i10) {
            this.f9793p.setHierarchy(draweeHierarchy);
        }
    }

    public String toString() {
        return h.b(this).c("controllerAttached", this.f9789d).c("holderAttached", this.f9790e).c("drawableVisible", this.f9791i).b("events", this.f9794q.toString()).toString();
    }
}
