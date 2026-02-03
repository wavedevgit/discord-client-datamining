package com.facebook.drawee.controller;

import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.drawable.Animatable;
import android.graphics.drawable.Drawable;
import android.net.Uri;
import android.view.MotionEvent;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.generic.GenericDraweeHierarchy;
import com.facebook.drawee.interfaces.DraweeController;
import com.facebook.drawee.interfaces.DraweeHierarchy;
import h9.a;
import h9.c;
import h9.d;
import java.util.Map;
import java.util.concurrent.Executor;
import m9.a;
import o8.f;
import o8.h;
import o8.j;
import z9.b;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements DraweeController, a.InterfaceC0345a, a.InterfaceC0484a {

    /* renamed from: w  reason: collision with root package name */
    private static final Map f9596w = f.of("component_tag", "drawee");

    /* renamed from: x  reason: collision with root package name */
    private static final Map f9597x = f.of("origin", "memory_bitmap", "origin_sub", "shortcut");

    /* renamed from: y  reason: collision with root package name */
    private static final Class f9598y = a.class;

    /* renamed from: b  reason: collision with root package name */
    private final h9.a f9600b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f9601c;

    /* renamed from: d  reason: collision with root package name */
    private d f9602d;

    /* renamed from: e  reason: collision with root package name */
    private m9.a f9603e;

    /* renamed from: f  reason: collision with root package name */
    protected ControllerListener f9604f;

    /* renamed from: h  reason: collision with root package name */
    private n9.a f9606h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f9607i;

    /* renamed from: j  reason: collision with root package name */
    private String f9608j;

    /* renamed from: k  reason: collision with root package name */
    private Object f9609k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f9610l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f9611m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f9612n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f9613o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f9614p;

    /* renamed from: q  reason: collision with root package name */
    private String f9615q;

    /* renamed from: r  reason: collision with root package name */
    private DataSource f9616r;

    /* renamed from: s  reason: collision with root package name */
    private Object f9617s;

    /* renamed from: v  reason: collision with root package name */
    protected Drawable f9620v;

    /* renamed from: a  reason: collision with root package name */
    private final c f9599a = c.a();

    /* renamed from: g  reason: collision with root package name */
    protected z9.d f9605g = new z9.d();

    /* renamed from: t  reason: collision with root package name */
    private boolean f9618t = true;

    /* renamed from: u  reason: collision with root package name */
    private boolean f9619u = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.drawee.controller.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0135a extends y8.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f9621a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f9622b;

        C0135a(String str, boolean z10) {
            this.f9621a = str;
            this.f9622b = z10;
        }

        @Override // y8.b
        public void onFailureImpl(DataSource dataSource) {
            a.this.F(this.f9621a, dataSource, dataSource.b(), true);
        }

        @Override // y8.b
        public void onNewResultImpl(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            boolean e10 = dataSource.e();
            float d10 = dataSource.d();
            Object result = dataSource.getResult();
            if (result != null) {
                a.this.H(this.f9621a, dataSource, result, d10, isFinished, this.f9622b, e10);
            } else if (isFinished) {
                a.this.F(this.f9621a, dataSource, new NullPointerException(), true);
            }
        }

        @Override // y8.b, y8.e
        public void onProgressUpdate(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            a.this.I(this.f9621a, dataSource, dataSource.d(), isFinished);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends i9.c {
        private b() {
        }

        public static b d(ControllerListener controllerListener, ControllerListener controllerListener2) {
            if (ya.b.d()) {
                ya.b.a("AbstractDraweeController#createInternal");
            }
            b bVar = new b();
            bVar.a(controllerListener);
            bVar.a(controllerListener2);
            if (ya.b.d()) {
                ya.b.b();
            }
            return bVar;
        }
    }

    public a(h9.a aVar, Executor executor, String str, Object obj) {
        this.f9600b = aVar;
        this.f9601c = executor;
        w(str, obj);
    }

    private void A(String str, Throwable th2) {
        if (p8.a.w(2)) {
            p8.a.C(f9598y, "controller %x %s: %s: failure: %s", Integer.valueOf(System.identityHashCode(this)), this.f9608j, str, th2);
        }
    }

    private void B(String str, Object obj) {
        if (p8.a.w(2)) {
            p8.a.D(f9598y, "controller %x %s: %s: image: %s %x", Integer.valueOf(System.identityHashCode(this)), this.f9608j, str, q(obj), Integer.valueOf(r(obj)));
        }
    }

    private b.a C(DataSource dataSource, Object obj, Uri uri) {
        Map extras;
        if (dataSource == null) {
            extras = null;
        } else {
            extras = dataSource.getExtras();
        }
        return D(extras, E(obj), uri);
    }

    private b.a D(Map map, Map map2, Uri uri) {
        String str;
        PointF pointF;
        n9.a aVar = this.f9606h;
        if (aVar instanceof GenericDraweeHierarchy) {
            GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) aVar;
            String valueOf = String.valueOf(genericDraweeHierarchy.m());
            pointF = genericDraweeHierarchy.l();
            str = valueOf;
        } else {
            str = null;
            pointF = null;
        }
        return y9.b.a(f9596w, f9597x, map, null, n(), str, pointF, map2, i(), z(), uri);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F(String str, DataSource dataSource, Throwable th2, boolean z10) {
        c.a aVar;
        Drawable drawable;
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeController#onFailureInternal");
        }
        if (!y(str, dataSource)) {
            A("ignore_old_datasource @ onFailure", th2);
            dataSource.close();
            if (ya.b.d()) {
                ya.b.b();
                return;
            }
            return;
        }
        c cVar = this.f9599a;
        if (z10) {
            aVar = c.a.ON_DATASOURCE_FAILURE;
        } else {
            aVar = c.a.ON_DATASOURCE_FAILURE_INT;
        }
        cVar.b(aVar);
        if (z10) {
            A("final_failed @ onFailure", th2);
            this.f9616r = null;
            this.f9613o = true;
            n9.a aVar2 = this.f9606h;
            if (aVar2 != null) {
                if (this.f9614p && (drawable = this.f9620v) != null) {
                    aVar2.e(drawable, 1.0f, true);
                } else if (a0()) {
                    aVar2.a(th2);
                } else {
                    aVar2.b(th2);
                }
            }
            N(th2, dataSource);
        } else {
            A("intermediate_failed @ onFailure", th2);
            O(th2);
        }
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void H(String str, DataSource dataSource, Object obj, float f10, boolean z10, boolean z11, boolean z12) {
        c.a aVar;
        try {
            if (ya.b.d()) {
                ya.b.a("AbstractDraweeController#onNewResultInternal");
            }
            if (!y(str, dataSource)) {
                B("ignore_old_datasource @ onNewResult", obj);
                L(obj);
                dataSource.close();
                if (ya.b.d()) {
                    ya.b.b();
                    return;
                }
                return;
            }
            c cVar = this.f9599a;
            if (z10) {
                aVar = c.a.ON_DATASOURCE_RESULT;
            } else {
                aVar = c.a.ON_DATASOURCE_RESULT_INT;
            }
            cVar.b(aVar);
            try {
                Drawable g10 = g(obj);
                Object obj2 = this.f9617s;
                Drawable drawable = this.f9620v;
                this.f9617s = obj;
                this.f9620v = g10;
                if (z10) {
                    B("set_final_result @ onNewResult", obj);
                    this.f9616r = null;
                    v().e(g10, 1.0f, z11);
                    S(str, obj, dataSource);
                } else if (z12) {
                    B("set_temporary_result @ onNewResult", obj);
                    v().e(g10, 1.0f, z11);
                    S(str, obj, dataSource);
                } else {
                    B("set_intermediate_result @ onNewResult", obj);
                    v().e(g10, f10, z11);
                    P(str, obj);
                }
                if (drawable != null && drawable != g10) {
                    J(drawable);
                }
                if (obj2 != null && obj2 != obj) {
                    B("release_previous_result @ onNewResult", obj2);
                    L(obj2);
                }
                if (ya.b.d()) {
                    ya.b.b();
                }
            } catch (Exception e10) {
                B("drawable_failed @ onNewResult", obj);
                L(obj);
                F(str, dataSource, e10, z10);
                if (ya.b.d()) {
                    ya.b.b();
                }
            }
        } catch (Throwable th2) {
            if (ya.b.d()) {
                ya.b.b();
            }
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void I(String str, DataSource dataSource, float f10, boolean z10) {
        if (!y(str, dataSource)) {
            A("ignore_old_datasource @ onProgress", null);
            dataSource.close();
        } else if (!z10) {
            this.f9606h.c(f10, false);
        }
    }

    private void K() {
        Map map;
        boolean z10 = this.f9611m;
        this.f9611m = false;
        this.f9613o = false;
        DataSource dataSource = this.f9616r;
        Map map2 = null;
        if (dataSource != null) {
            map = dataSource.getExtras();
            this.f9616r.close();
            this.f9616r = null;
        } else {
            map = null;
        }
        Drawable drawable = this.f9620v;
        if (drawable != null) {
            J(drawable);
        }
        if (this.f9615q != null) {
            this.f9615q = null;
        }
        this.f9620v = null;
        Object obj = this.f9617s;
        if (obj != null) {
            Map E = E(s(obj));
            B("release", this.f9617s);
            L(this.f9617s);
            this.f9617s = null;
            map2 = E;
        }
        if (z10) {
            Q(map, map2);
        }
    }

    private void N(Throwable th2, DataSource dataSource) {
        b.a C = C(dataSource, null, null);
        j().onFailure(this.f9608j, th2);
        k().h(this.f9608j, th2, C);
    }

    private void O(Throwable th2) {
        j().onIntermediateImageFailed(this.f9608j, th2);
        k().l(this.f9608j);
    }

    private void P(String str, Object obj) {
        Object s10 = s(obj);
        j().onIntermediateImageSet(str, s10);
        k().onIntermediateImageSet(str, s10);
    }

    private void Q(Map map, Map map2) {
        j().onRelease(this.f9608j);
        k().x(this.f9608j, D(map, map2, null));
    }

    private void S(String str, Object obj, DataSource dataSource) {
        Object s10 = s(obj);
        j().onFinalImageSet(str, s10, getAnimatable());
        k().a(str, s10, C(dataSource, s10, null));
    }

    private boolean a0() {
        d dVar;
        if (this.f9613o && (dVar = this.f9602d) != null && dVar.e()) {
            return true;
        }
        return false;
    }

    private Rect n() {
        n9.a aVar = this.f9606h;
        if (aVar == null) {
            return null;
        }
        return aVar.getBounds();
    }

    private n9.a v() {
        n9.a aVar = this.f9606h;
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException("mSettableDraweeHierarchy is null; Caller context: " + this.f9609k);
    }

    private synchronized void w(String str, Object obj) {
        h9.a aVar;
        try {
            if (ya.b.d()) {
                ya.b.a("AbstractDraweeController#init");
            }
            this.f9599a.b(c.a.ON_INIT_CONTROLLER);
            if (!this.f9618t && (aVar = this.f9600b) != null) {
                aVar.a(this);
            }
            this.f9610l = false;
            this.f9612n = false;
            K();
            this.f9614p = false;
            d dVar = this.f9602d;
            if (dVar != null) {
                dVar.a();
            }
            m9.a aVar2 = this.f9603e;
            if (aVar2 != null) {
                aVar2.a();
                this.f9603e.f(this);
            }
            ControllerListener controllerListener = this.f9604f;
            if (controllerListener instanceof b) {
                ((b) controllerListener).b();
            } else {
                this.f9604f = null;
            }
            n9.a aVar3 = this.f9606h;
            if (aVar3 != null) {
                aVar3.reset();
                this.f9606h.f(null);
                this.f9606h = null;
            }
            this.f9607i = null;
            if (p8.a.w(2)) {
                p8.a.B(f9598y, "controller %x %s -> %s: initialize", Integer.valueOf(System.identityHashCode(this)), this.f9608j, str);
            }
            this.f9608j = str;
            this.f9609k = obj;
            if (ya.b.d()) {
                ya.b.b();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private boolean y(String str, DataSource dataSource) {
        if (dataSource == null && this.f9616r == null) {
            return true;
        }
        if (str.equals(this.f9608j) && dataSource == this.f9616r && this.f9611m) {
            return true;
        }
        return false;
    }

    public abstract Map E(Object obj);

    /* JADX INFO: Access modifiers changed from: protected */
    public void G(String str, Object obj) {
    }

    protected abstract void J(Drawable drawable);

    protected abstract void L(Object obj);

    public void M(z9.b bVar) {
        this.f9605g.F(bVar);
    }

    protected void R(DataSource dataSource, Object obj) {
        j().onSubmit(this.f9608j, this.f9609k);
        k().B(this.f9608j, this.f9609k, C(dataSource, obj, t()));
    }

    public void T(String str) {
        this.f9615q = str;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void U(Drawable drawable) {
        this.f9607i = drawable;
        n9.a aVar = this.f9606h;
        if (aVar != null) {
            aVar.f(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void W(m9.a aVar) {
        this.f9603e = aVar;
        if (aVar != null) {
            aVar.f(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void X(boolean z10) {
        this.f9619u = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void Y(boolean z10) {
        this.f9614p = z10;
    }

    protected boolean Z() {
        return a0();
    }

    @Override // m9.a.InterfaceC0484a
    public boolean a() {
        if (p8.a.w(2)) {
            p8.a.A(f9598y, "controller %x %s: onClick", Integer.valueOf(System.identityHashCode(this)), this.f9608j);
        }
        if (a0()) {
            this.f9602d.b();
            this.f9606h.reset();
            b0();
            return true;
        }
        return false;
    }

    protected void b0() {
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeController#submitRequest");
        }
        Object h10 = h();
        if (h10 != null) {
            if (ya.b.d()) {
                ya.b.a("AbstractDraweeController#submitRequest->cache");
            }
            this.f9616r = null;
            this.f9611m = true;
            this.f9613o = false;
            this.f9599a.b(c.a.ON_SUBMIT_CACHE_HIT);
            R(this.f9616r, s(h10));
            G(this.f9608j, h10);
            H(this.f9608j, this.f9616r, h10, 1.0f, true, true, true);
            if (ya.b.d()) {
                ya.b.b();
            }
            if (ya.b.d()) {
                ya.b.b();
                return;
            }
            return;
        }
        this.f9599a.b(c.a.ON_DATASOURCE_SUBMIT);
        this.f9606h.c(0.0f, true);
        this.f9611m = true;
        this.f9613o = false;
        DataSource m10 = m();
        this.f9616r = m10;
        R(m10, null);
        if (p8.a.w(2)) {
            p8.a.B(f9598y, "controller %x %s: submitRequest: dataSource: %x", Integer.valueOf(System.identityHashCode(this)), this.f9608j, Integer.valueOf(System.identityHashCode(this.f9616r)));
        }
        this.f9616r.c(new C0135a(this.f9608j, this.f9616r.a()), this.f9601c);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    public void e(ControllerListener controllerListener) {
        j.g(controllerListener);
        ControllerListener controllerListener2 = this.f9604f;
        if (controllerListener2 instanceof b) {
            ((b) controllerListener2).a(controllerListener);
        } else if (controllerListener2 != null) {
            this.f9604f = b.d(controllerListener2, controllerListener);
        } else {
            this.f9604f = controllerListener;
        }
    }

    public void f(z9.b bVar) {
        this.f9605g.E(bVar);
    }

    protected abstract Drawable g(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public Animatable getAnimatable() {
        Drawable drawable = this.f9620v;
        if (drawable instanceof Animatable) {
            return (Animatable) drawable;
        }
        return null;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public DraweeHierarchy getHierarchy() {
        return this.f9606h;
    }

    protected abstract Object h();

    public Object i() {
        return this.f9609k;
    }

    protected ControllerListener j() {
        ControllerListener controllerListener = this.f9604f;
        if (controllerListener == null) {
            return i9.a.getNoOpListener();
        }
        return controllerListener;
    }

    protected z9.b k() {
        return this.f9605g;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Drawable l() {
        return this.f9607i;
    }

    protected abstract DataSource m();

    /* JADX INFO: Access modifiers changed from: protected */
    public m9.a o() {
        return this.f9603e;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onAttach() {
        String str;
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeController#onAttach");
        }
        if (p8.a.w(2)) {
            Class cls = f9598y;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            String str2 = this.f9608j;
            if (this.f9611m) {
                str = "request already submitted";
            } else {
                str = "request needs submit";
            }
            p8.a.B(cls, "controller %x %s: onAttach: %s", valueOf, str2, str);
        }
        this.f9599a.b(c.a.ON_ATTACH_CONTROLLER);
        j.g(this.f9606h);
        this.f9600b.a(this);
        this.f9610l = true;
        if (!this.f9611m) {
            b0();
        }
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onDetach() {
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeController#onDetach");
        }
        if (p8.a.w(2)) {
            p8.a.A(f9598y, "controller %x %s: onDetach", Integer.valueOf(System.identityHashCode(this)), this.f9608j);
        }
        this.f9599a.b(c.a.ON_DETACH_CONTROLLER);
        this.f9610l = false;
        this.f9600b.d(this);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (p8.a.w(2)) {
            p8.a.B(f9598y, "controller %x %s: onTouchEvent %s", Integer.valueOf(System.identityHashCode(this)), this.f9608j, motionEvent);
        }
        m9.a aVar = this.f9603e;
        if (aVar == null) {
            return false;
        }
        if (!aVar.b() && !Z()) {
            return false;
        }
        this.f9603e.d(motionEvent);
        return true;
    }

    public String p() {
        return this.f9608j;
    }

    protected String q(Object obj) {
        if (obj != null) {
            return obj.getClass().getSimpleName();
        }
        return "<null>";
    }

    protected abstract int r(Object obj);

    @Override // h9.a.InterfaceC0345a
    public void release() {
        this.f9599a.b(c.a.ON_RELEASE_CONTROLLER);
        d dVar = this.f9602d;
        if (dVar != null) {
            dVar.c();
        }
        m9.a aVar = this.f9603e;
        if (aVar != null) {
            aVar.e();
        }
        n9.a aVar2 = this.f9606h;
        if (aVar2 != null) {
            aVar2.reset();
        }
        K();
    }

    protected abstract Object s(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void setHierarchy(DraweeHierarchy draweeHierarchy) {
        c.a aVar;
        if (p8.a.w(2)) {
            p8.a.B(f9598y, "controller %x %s: setHierarchy: %s", Integer.valueOf(System.identityHashCode(this)), this.f9608j, draweeHierarchy);
        }
        c cVar = this.f9599a;
        if (draweeHierarchy != null) {
            aVar = c.a.ON_SET_HIERARCHY;
        } else {
            aVar = c.a.ON_CLEAR_HIERARCHY;
        }
        cVar.b(aVar);
        if (this.f9611m) {
            this.f9600b.a(this);
            release();
        }
        n9.a aVar2 = this.f9606h;
        if (aVar2 != null) {
            aVar2.f(null);
            this.f9606h = null;
        }
        if (draweeHierarchy != null) {
            j.b(Boolean.valueOf(draweeHierarchy instanceof n9.a));
            n9.a aVar3 = (n9.a) draweeHierarchy;
            this.f9606h = aVar3;
            aVar3.f(this.f9607i);
        }
    }

    protected abstract Uri t();

    public String toString() {
        return h.b(this).c("isAttached", this.f9610l).c("isRequestSubmitted", this.f9611m).c("hasFetchFailed", this.f9613o).a("fetchedImage", r(this.f9617s)).b("events", this.f9599a.toString()).toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d u() {
        if (this.f9602d == null) {
            this.f9602d = new d();
        }
        return this.f9602d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void x(String str, Object obj) {
        w(str, obj);
        this.f9618t = false;
        this.f9619u = false;
    }

    protected boolean z() {
        return this.f9619u;
    }

    public void V(i9.b bVar) {
    }
}
