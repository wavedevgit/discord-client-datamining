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
    private DraweeHierarchy f10076o;

    /* renamed from: d  reason: collision with root package name */
    private boolean f10073d = false;

    /* renamed from: e  reason: collision with root package name */
    private boolean f10074e = false;

    /* renamed from: i  reason: collision with root package name */
    private boolean f10075i = true;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10077p = null;

    /* renamed from: q  reason: collision with root package name */
    private final c f10078q = c.a();

    public DraweeHolder(DraweeHierarchy draweeHierarchy) {
        if (draweeHierarchy != null) {
            q(draweeHierarchy);
        }
    }

    private void a() {
        if (!this.f10073d) {
            this.f10078q.b(c.a.ON_ATTACH_CONTROLLER);
            this.f10073d = true;
            DraweeController draweeController = this.f10077p;
            if (draweeController != null && draweeController.getHierarchy() != null) {
                this.f10077p.onAttach();
            }
        }
    }

    private void b() {
        if (this.f10074e && this.f10075i) {
            a();
        } else {
            d();
        }
    }

    public static DraweeHolder c(DraweeHierarchy draweeHierarchy, Context context) {
        DraweeHolder draweeHolder = new DraweeHolder(draweeHierarchy);
        draweeHolder.n(context);
        return draweeHolder;
    }

    private void d() {
        if (this.f10073d) {
            this.f10078q.b(c.a.ON_DETACH_CONTROLLER);
            this.f10073d = false;
            if (i()) {
                this.f10077p.onDetach();
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
        return this.f10077p;
    }

    public DraweeHierarchy f() {
        return (DraweeHierarchy) j.g(this.f10076o);
    }

    public Drawable g() {
        DraweeHierarchy draweeHierarchy = this.f10076o;
        if (draweeHierarchy == null) {
            return null;
        }
        return draweeHierarchy.d();
    }

    public boolean h() {
        if (this.f10076o != null) {
            return true;
        }
        return false;
    }

    public boolean i() {
        DraweeController draweeController = this.f10077p;
        if (draweeController != null && draweeController.getHierarchy() == this.f10076o) {
            return true;
        }
        return false;
    }

    public void j() {
        this.f10078q.b(c.a.ON_HOLDER_ATTACH);
        this.f10074e = true;
        b();
    }

    public void k() {
        this.f10078q.b(c.a.ON_HOLDER_DETACH);
        this.f10074e = false;
        b();
    }

    public boolean l(MotionEvent motionEvent) {
        if (!i()) {
            return false;
        }
        return this.f10077p.onTouchEvent(motionEvent);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void m(boolean z10) {
        c.a aVar;
        if (this.f10075i == z10) {
            return;
        }
        c cVar = this.f10078q;
        if (z10) {
            aVar = c.a.ON_DRAWABLE_SHOW;
        } else {
            aVar = c.a.ON_DRAWABLE_HIDE;
        }
        cVar.b(aVar);
        this.f10075i = z10;
        b();
    }

    public void n(Context context) {
    }

    public void o() {
        p(null);
    }

    @Override // com.facebook.drawee.drawable.c0
    public void onDraw() {
        if (this.f10073d) {
            return;
        }
        p8.a.H(c.class, "%x: Draw requested for a non-attached controller %x. %s", Integer.valueOf(System.identityHashCode(this)), Integer.valueOf(System.identityHashCode(this.f10077p)), toString());
        this.f10074e = true;
        this.f10075i = true;
        b();
    }

    public void p(DraweeController draweeController) {
        boolean z10 = this.f10073d;
        if (z10) {
            d();
        }
        if (i()) {
            this.f10078q.b(c.a.ON_CLEAR_OLD_CONTROLLER);
            this.f10077p.setHierarchy(null);
        }
        this.f10077p = draweeController;
        if (draweeController != null) {
            this.f10078q.b(c.a.ON_SET_CONTROLLER);
            this.f10077p.setHierarchy(this.f10076o);
        } else {
            this.f10078q.b(c.a.ON_CLEAR_CONTROLLER);
        }
        if (z10) {
            a();
        }
    }

    public void q(DraweeHierarchy draweeHierarchy) {
        boolean z10;
        this.f10078q.b(c.a.ON_SET_HIERARCHY);
        boolean i10 = i();
        r(null);
        DraweeHierarchy draweeHierarchy2 = (DraweeHierarchy) j.g(draweeHierarchy);
        this.f10076o = draweeHierarchy2;
        Drawable d10 = draweeHierarchy2.d();
        if (d10 != null && !d10.isVisible()) {
            z10 = false;
        } else {
            z10 = true;
        }
        m(z10);
        r(this);
        if (i10) {
            this.f10077p.setHierarchy(draweeHierarchy);
        }
    }

    public String toString() {
        return h.b(this).c("controllerAttached", this.f10073d).c("holderAttached", this.f10074e).c("drawableVisible", this.f10075i).b("events", this.f10078q.toString()).toString();
    }
}
