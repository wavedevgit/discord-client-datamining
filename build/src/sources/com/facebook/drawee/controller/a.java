package com.facebook.drawee.controller;

import aa.b;
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
import i9.a;
import i9.c;
import i9.d;
import java.util.Map;
import java.util.concurrent.Executor;
import n9.a;
import p8.f;
import p8.h;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements DraweeController, a.InterfaceC0378a, a.InterfaceC0527a {

    /* renamed from: w  reason: collision with root package name */
    private static final Map f10598w = f.of("component_tag", "drawee");

    /* renamed from: x  reason: collision with root package name */
    private static final Map f10599x = f.of("origin", "memory_bitmap", "origin_sub", "shortcut");

    /* renamed from: y  reason: collision with root package name */
    private static final Class f10600y = a.class;

    /* renamed from: b  reason: collision with root package name */
    private final i9.a f10602b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f10603c;

    /* renamed from: d  reason: collision with root package name */
    private d f10604d;

    /* renamed from: e  reason: collision with root package name */
    private n9.a f10605e;

    /* renamed from: f  reason: collision with root package name */
    protected ControllerListener f10606f;

    /* renamed from: h  reason: collision with root package name */
    private o9.a f10608h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f10609i;

    /* renamed from: j  reason: collision with root package name */
    private String f10610j;

    /* renamed from: k  reason: collision with root package name */
    private Object f10611k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10612l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10613m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10614n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f10615o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f10616p;

    /* renamed from: q  reason: collision with root package name */
    private String f10617q;

    /* renamed from: r  reason: collision with root package name */
    private DataSource f10618r;

    /* renamed from: s  reason: collision with root package name */
    private Object f10619s;

    /* renamed from: v  reason: collision with root package name */
    protected Drawable f10622v;

    /* renamed from: a  reason: collision with root package name */
    private final c f10601a = c.a();

    /* renamed from: g  reason: collision with root package name */
    protected aa.d f10607g = new aa.d();

    /* renamed from: t  reason: collision with root package name */
    private boolean f10620t = true;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10621u = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.drawee.controller.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0148a extends z8.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f10623a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f10624b;

        C0148a(String str, boolean z10) {
            this.f10623a = str;
            this.f10624b = z10;
        }

        @Override // z8.b
        public void onFailureImpl(DataSource dataSource) {
            a.this.F(this.f10623a, dataSource, dataSource.b(), true);
        }

        @Override // z8.b
        public void onNewResultImpl(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            boolean e10 = dataSource.e();
            float d10 = dataSource.d();
            Object result = dataSource.getResult();
            if (result != null) {
                a.this.H(this.f10623a, dataSource, result, d10, isFinished, this.f10624b, e10);
            } else if (isFinished) {
                a.this.F(this.f10623a, dataSource, new NullPointerException(), true);
            }
        }

        @Override // z8.b, z8.e
        public void onProgressUpdate(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            a.this.I(this.f10623a, dataSource, dataSource.d(), isFinished);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b extends j9.c {
        private b() {
        }

        public static b d(ControllerListener controllerListener, ControllerListener controllerListener2) {
            if (za.b.d()) {
                za.b.a("AbstractDraweeController#createInternal");
            }
            b bVar = new b();
            bVar.a(controllerListener);
            bVar.a(controllerListener2);
            if (za.b.d()) {
                za.b.b();
            }
            return bVar;
        }
    }

    public a(i9.a aVar, Executor executor, String str, Object obj) {
        this.f10602b = aVar;
        this.f10603c = executor;
        w(str, obj);
    }

    private void A(String str, Throwable th2) {
        if (q8.a.w(2)) {
            q8.a.C(f10600y, "controller %x %s: %s: failure: %s", Integer.valueOf(System.identityHashCode(this)), this.f10610j, str, th2);
        }
    }

    private void B(String str, Object obj) {
        if (q8.a.w(2)) {
            q8.a.D(f10600y, "controller %x %s: %s: image: %s %x", Integer.valueOf(System.identityHashCode(this)), this.f10610j, str, q(obj), Integer.valueOf(r(obj)));
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
        o9.a aVar = this.f10608h;
        if (aVar instanceof GenericDraweeHierarchy) {
            GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) aVar;
            String valueOf = String.valueOf(genericDraweeHierarchy.m());
            pointF = genericDraweeHierarchy.l();
            str = valueOf;
        } else {
            str = null;
            pointF = null;
        }
        return z9.b.a(f10598w, f10599x, map, null, n(), str, pointF, map2, i(), z(), uri);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void F(String str, DataSource dataSource, Throwable th2, boolean z10) {
        c.a aVar;
        Drawable drawable;
        if (za.b.d()) {
            za.b.a("AbstractDraweeController#onFailureInternal");
        }
        if (!y(str, dataSource)) {
            A("ignore_old_datasource @ onFailure", th2);
            dataSource.close();
            if (za.b.d()) {
                za.b.b();
                return;
            }
            return;
        }
        c cVar = this.f10601a;
        if (z10) {
            aVar = c.a.ON_DATASOURCE_FAILURE;
        } else {
            aVar = c.a.ON_DATASOURCE_FAILURE_INT;
        }
        cVar.b(aVar);
        if (z10) {
            A("final_failed @ onFailure", th2);
            this.f10618r = null;
            this.f10615o = true;
            o9.a aVar2 = this.f10608h;
            if (aVar2 != null) {
                if (this.f10616p && (drawable = this.f10622v) != null) {
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
        if (za.b.d()) {
            za.b.b();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void H(String str, DataSource dataSource, Object obj, float f10, boolean z10, boolean z11, boolean z12) {
        c.a aVar;
        try {
            if (za.b.d()) {
                za.b.a("AbstractDraweeController#onNewResultInternal");
            }
            if (!y(str, dataSource)) {
                B("ignore_old_datasource @ onNewResult", obj);
                L(obj);
                dataSource.close();
                if (za.b.d()) {
                    za.b.b();
                    return;
                }
                return;
            }
            c cVar = this.f10601a;
            if (z10) {
                aVar = c.a.ON_DATASOURCE_RESULT;
            } else {
                aVar = c.a.ON_DATASOURCE_RESULT_INT;
            }
            cVar.b(aVar);
            try {
                Drawable g10 = g(obj);
                Object obj2 = this.f10619s;
                Drawable drawable = this.f10622v;
                this.f10619s = obj;
                this.f10622v = g10;
                if (z10) {
                    B("set_final_result @ onNewResult", obj);
                    this.f10618r = null;
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
                if (za.b.d()) {
                    za.b.b();
                }
            } catch (Exception e10) {
                B("drawable_failed @ onNewResult", obj);
                L(obj);
                F(str, dataSource, e10, z10);
                if (za.b.d()) {
                    za.b.b();
                }
            }
        } catch (Throwable th2) {
            if (za.b.d()) {
                za.b.b();
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
            this.f10608h.c(f10, false);
        }
    }

    private void K() {
        Map map;
        boolean z10 = this.f10613m;
        this.f10613m = false;
        this.f10615o = false;
        DataSource dataSource = this.f10618r;
        Map map2 = null;
        if (dataSource != null) {
            map = dataSource.getExtras();
            this.f10618r.close();
            this.f10618r = null;
        } else {
            map = null;
        }
        Drawable drawable = this.f10622v;
        if (drawable != null) {
            J(drawable);
        }
        if (this.f10617q != null) {
            this.f10617q = null;
        }
        this.f10622v = null;
        Object obj = this.f10619s;
        if (obj != null) {
            Map E = E(s(obj));
            B("release", this.f10619s);
            L(this.f10619s);
            this.f10619s = null;
            map2 = E;
        }
        if (z10) {
            Q(map, map2);
        }
    }

    private void N(Throwable th2, DataSource dataSource) {
        b.a C = C(dataSource, null, null);
        j().onFailure(this.f10610j, th2);
        k().a(this.f10610j, th2, C);
    }

    private void O(Throwable th2) {
        j().onIntermediateImageFailed(this.f10610j, th2);
        k().m(this.f10610j);
    }

    private void P(String str, Object obj) {
        Object s10 = s(obj);
        j().onIntermediateImageSet(str, s10);
        k().onIntermediateImageSet(str, s10);
    }

    private void Q(Map map, Map map2) {
        j().onRelease(this.f10610j);
        k().h(this.f10610j, D(map, map2, null));
    }

    private void S(String str, Object obj, DataSource dataSource) {
        Object s10 = s(obj);
        j().onFinalImageSet(str, s10, getAnimatable());
        k().p(str, s10, C(dataSource, s10, null));
    }

    private boolean a0() {
        d dVar;
        if (this.f10615o && (dVar = this.f10604d) != null && dVar.e()) {
            return true;
        }
        return false;
    }

    private Rect n() {
        o9.a aVar = this.f10608h;
        if (aVar == null) {
            return null;
        }
        return aVar.getBounds();
    }

    private o9.a v() {
        o9.a aVar = this.f10608h;
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException("mSettableDraweeHierarchy is null; Caller context: " + this.f10611k);
    }

    private synchronized void w(String str, Object obj) {
        i9.a aVar;
        try {
            if (za.b.d()) {
                za.b.a("AbstractDraweeController#init");
            }
            this.f10601a.b(c.a.ON_INIT_CONTROLLER);
            if (!this.f10620t && (aVar = this.f10602b) != null) {
                aVar.a(this);
            }
            this.f10612l = false;
            this.f10614n = false;
            K();
            this.f10616p = false;
            d dVar = this.f10604d;
            if (dVar != null) {
                dVar.a();
            }
            n9.a aVar2 = this.f10605e;
            if (aVar2 != null) {
                aVar2.a();
                this.f10605e.f(this);
            }
            ControllerListener controllerListener = this.f10606f;
            if (controllerListener instanceof b) {
                ((b) controllerListener).b();
            } else {
                this.f10606f = null;
            }
            o9.a aVar3 = this.f10608h;
            if (aVar3 != null) {
                aVar3.reset();
                this.f10608h.f(null);
                this.f10608h = null;
            }
            this.f10609i = null;
            if (q8.a.w(2)) {
                q8.a.B(f10600y, "controller %x %s -> %s: initialize", Integer.valueOf(System.identityHashCode(this)), this.f10610j, str);
            }
            this.f10610j = str;
            this.f10611k = obj;
            if (za.b.d()) {
                za.b.b();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private boolean y(String str, DataSource dataSource) {
        if (dataSource == null && this.f10618r == null) {
            return true;
        }
        if (str.equals(this.f10610j) && dataSource == this.f10618r && this.f10613m) {
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

    public void M(aa.b bVar) {
        this.f10607g.y(bVar);
    }

    protected void R(DataSource dataSource, Object obj) {
        j().onSubmit(this.f10610j, this.f10611k);
        k().i(this.f10610j, this.f10611k, C(dataSource, obj, t()));
    }

    public void T(String str) {
        this.f10617q = str;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void U(Drawable drawable) {
        this.f10609i = drawable;
        o9.a aVar = this.f10608h;
        if (aVar != null) {
            aVar.f(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void W(n9.a aVar) {
        this.f10605e = aVar;
        if (aVar != null) {
            aVar.f(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void X(boolean z10) {
        this.f10621u = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void Y(boolean z10) {
        this.f10616p = z10;
    }

    protected boolean Z() {
        return a0();
    }

    @Override // n9.a.InterfaceC0527a
    public boolean a() {
        if (q8.a.w(2)) {
            q8.a.A(f10600y, "controller %x %s: onClick", Integer.valueOf(System.identityHashCode(this)), this.f10610j);
        }
        if (a0()) {
            this.f10604d.b();
            this.f10608h.reset();
            b0();
            return true;
        }
        return false;
    }

    protected void b0() {
        if (za.b.d()) {
            za.b.a("AbstractDraweeController#submitRequest");
        }
        Object h10 = h();
        if (h10 != null) {
            if (za.b.d()) {
                za.b.a("AbstractDraweeController#submitRequest->cache");
            }
            this.f10618r = null;
            this.f10613m = true;
            this.f10615o = false;
            this.f10601a.b(c.a.ON_SUBMIT_CACHE_HIT);
            R(this.f10618r, s(h10));
            G(this.f10610j, h10);
            H(this.f10610j, this.f10618r, h10, 1.0f, true, true, true);
            if (za.b.d()) {
                za.b.b();
            }
            if (za.b.d()) {
                za.b.b();
                return;
            }
            return;
        }
        this.f10601a.b(c.a.ON_DATASOURCE_SUBMIT);
        this.f10608h.c(0.0f, true);
        this.f10613m = true;
        this.f10615o = false;
        DataSource m10 = m();
        this.f10618r = m10;
        R(m10, null);
        if (q8.a.w(2)) {
            q8.a.B(f10600y, "controller %x %s: submitRequest: dataSource: %x", Integer.valueOf(System.identityHashCode(this)), this.f10610j, Integer.valueOf(System.identityHashCode(this.f10618r)));
        }
        this.f10618r.c(new C0148a(this.f10610j, this.f10618r.a()), this.f10603c);
        if (za.b.d()) {
            za.b.b();
        }
    }

    public void e(ControllerListener controllerListener) {
        j.g(controllerListener);
        ControllerListener controllerListener2 = this.f10606f;
        if (controllerListener2 instanceof b) {
            ((b) controllerListener2).a(controllerListener);
        } else if (controllerListener2 != null) {
            this.f10606f = b.d(controllerListener2, controllerListener);
        } else {
            this.f10606f = controllerListener;
        }
    }

    public void f(aa.b bVar) {
        this.f10607g.s(bVar);
    }

    protected abstract Drawable g(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public Animatable getAnimatable() {
        Drawable drawable = this.f10622v;
        if (drawable instanceof Animatable) {
            return (Animatable) drawable;
        }
        return null;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public DraweeHierarchy getHierarchy() {
        return this.f10608h;
    }

    protected abstract Object h();

    public Object i() {
        return this.f10611k;
    }

    protected ControllerListener j() {
        ControllerListener controllerListener = this.f10606f;
        if (controllerListener == null) {
            return j9.a.getNoOpListener();
        }
        return controllerListener;
    }

    protected aa.b k() {
        return this.f10607g;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Drawable l() {
        return this.f10609i;
    }

    protected abstract DataSource m();

    /* JADX INFO: Access modifiers changed from: protected */
    public n9.a o() {
        return this.f10605e;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onAttach() {
        String str;
        if (za.b.d()) {
            za.b.a("AbstractDraweeController#onAttach");
        }
        if (q8.a.w(2)) {
            Class cls = f10600y;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            String str2 = this.f10610j;
            if (this.f10613m) {
                str = "request already submitted";
            } else {
                str = "request needs submit";
            }
            q8.a.B(cls, "controller %x %s: onAttach: %s", valueOf, str2, str);
        }
        this.f10601a.b(c.a.ON_ATTACH_CONTROLLER);
        j.g(this.f10608h);
        this.f10602b.a(this);
        this.f10612l = true;
        if (!this.f10613m) {
            b0();
        }
        if (za.b.d()) {
            za.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onDetach() {
        if (za.b.d()) {
            za.b.a("AbstractDraweeController#onDetach");
        }
        if (q8.a.w(2)) {
            q8.a.A(f10600y, "controller %x %s: onDetach", Integer.valueOf(System.identityHashCode(this)), this.f10610j);
        }
        this.f10601a.b(c.a.ON_DETACH_CONTROLLER);
        this.f10612l = false;
        this.f10602b.d(this);
        if (za.b.d()) {
            za.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (q8.a.w(2)) {
            q8.a.B(f10600y, "controller %x %s: onTouchEvent %s", Integer.valueOf(System.identityHashCode(this)), this.f10610j, motionEvent);
        }
        n9.a aVar = this.f10605e;
        if (aVar == null) {
            return false;
        }
        if (!aVar.b() && !Z()) {
            return false;
        }
        this.f10605e.d(motionEvent);
        return true;
    }

    public String p() {
        return this.f10610j;
    }

    protected String q(Object obj) {
        if (obj != null) {
            return obj.getClass().getSimpleName();
        }
        return "<null>";
    }

    protected abstract int r(Object obj);

    @Override // i9.a.InterfaceC0378a
    public void release() {
        this.f10601a.b(c.a.ON_RELEASE_CONTROLLER);
        d dVar = this.f10604d;
        if (dVar != null) {
            dVar.c();
        }
        n9.a aVar = this.f10605e;
        if (aVar != null) {
            aVar.e();
        }
        o9.a aVar2 = this.f10608h;
        if (aVar2 != null) {
            aVar2.reset();
        }
        K();
    }

    protected abstract Object s(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void setHierarchy(DraweeHierarchy draweeHierarchy) {
        c.a aVar;
        if (q8.a.w(2)) {
            q8.a.B(f10600y, "controller %x %s: setHierarchy: %s", Integer.valueOf(System.identityHashCode(this)), this.f10610j, draweeHierarchy);
        }
        c cVar = this.f10601a;
        if (draweeHierarchy != null) {
            aVar = c.a.ON_SET_HIERARCHY;
        } else {
            aVar = c.a.ON_CLEAR_HIERARCHY;
        }
        cVar.b(aVar);
        if (this.f10613m) {
            this.f10602b.a(this);
            release();
        }
        o9.a aVar2 = this.f10608h;
        if (aVar2 != null) {
            aVar2.f(null);
            this.f10608h = null;
        }
        if (draweeHierarchy != null) {
            j.b(Boolean.valueOf(draweeHierarchy instanceof o9.a));
            o9.a aVar3 = (o9.a) draweeHierarchy;
            this.f10608h = aVar3;
            aVar3.f(this.f10609i);
        }
    }

    protected abstract Uri t();

    public String toString() {
        return h.b(this).c("isAttached", this.f10612l).c("isRequestSubmitted", this.f10613m).c("hasFetchFailed", this.f10615o).a("fetchedImage", r(this.f10619s)).b("events", this.f10601a.toString()).toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d u() {
        if (this.f10604d == null) {
            this.f10604d = new d();
        }
        return this.f10604d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void x(String str, Object obj) {
        w(str, obj);
        this.f10620t = false;
        this.f10621u = false;
    }

    protected boolean z() {
        return this.f10621u;
    }

    public void V(j9.b bVar) {
    }
}
