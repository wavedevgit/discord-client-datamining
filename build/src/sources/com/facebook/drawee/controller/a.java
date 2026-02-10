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
    private static final Map f10597w = f.of("component_tag", "drawee");

    /* renamed from: x  reason: collision with root package name */
    private static final Map f10598x = f.of("origin", "memory_bitmap", "origin_sub", "shortcut");

    /* renamed from: y  reason: collision with root package name */
    private static final Class f10599y = a.class;

    /* renamed from: b  reason: collision with root package name */
    private final i9.a f10601b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f10602c;

    /* renamed from: d  reason: collision with root package name */
    private d f10603d;

    /* renamed from: e  reason: collision with root package name */
    private n9.a f10604e;

    /* renamed from: f  reason: collision with root package name */
    protected ControllerListener f10605f;

    /* renamed from: h  reason: collision with root package name */
    private o9.a f10607h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f10608i;

    /* renamed from: j  reason: collision with root package name */
    private String f10609j;

    /* renamed from: k  reason: collision with root package name */
    private Object f10610k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10611l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10612m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10613n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f10614o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f10615p;

    /* renamed from: q  reason: collision with root package name */
    private String f10616q;

    /* renamed from: r  reason: collision with root package name */
    private DataSource f10617r;

    /* renamed from: s  reason: collision with root package name */
    private Object f10618s;

    /* renamed from: v  reason: collision with root package name */
    protected Drawable f10621v;

    /* renamed from: a  reason: collision with root package name */
    private final c f10600a = c.a();

    /* renamed from: g  reason: collision with root package name */
    protected aa.d f10606g = new aa.d();

    /* renamed from: t  reason: collision with root package name */
    private boolean f10619t = true;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10620u = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.drawee.controller.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0148a extends z8.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f10622a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f10623b;

        C0148a(String str, boolean z10) {
            this.f10622a = str;
            this.f10623b = z10;
        }

        @Override // z8.b
        public void onFailureImpl(DataSource dataSource) {
            a.this.F(this.f10622a, dataSource, dataSource.b(), true);
        }

        @Override // z8.b
        public void onNewResultImpl(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            boolean e10 = dataSource.e();
            float d10 = dataSource.d();
            Object result = dataSource.getResult();
            if (result != null) {
                a.this.H(this.f10622a, dataSource, result, d10, isFinished, this.f10623b, e10);
            } else if (isFinished) {
                a.this.F(this.f10622a, dataSource, new NullPointerException(), true);
            }
        }

        @Override // z8.b, z8.e
        public void onProgressUpdate(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            a.this.I(this.f10622a, dataSource, dataSource.d(), isFinished);
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
        this.f10601b = aVar;
        this.f10602c = executor;
        w(str, obj);
    }

    private void A(String str, Throwable th2) {
        if (q8.a.w(2)) {
            q8.a.C(f10599y, "controller %x %s: %s: failure: %s", Integer.valueOf(System.identityHashCode(this)), this.f10609j, str, th2);
        }
    }

    private void B(String str, Object obj) {
        if (q8.a.w(2)) {
            q8.a.D(f10599y, "controller %x %s: %s: image: %s %x", Integer.valueOf(System.identityHashCode(this)), this.f10609j, str, q(obj), Integer.valueOf(r(obj)));
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
        o9.a aVar = this.f10607h;
        if (aVar instanceof GenericDraweeHierarchy) {
            GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) aVar;
            String valueOf = String.valueOf(genericDraweeHierarchy.m());
            pointF = genericDraweeHierarchy.l();
            str = valueOf;
        } else {
            str = null;
            pointF = null;
        }
        return z9.b.a(f10597w, f10598x, map, null, n(), str, pointF, map2, i(), z(), uri);
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
        c cVar = this.f10600a;
        if (z10) {
            aVar = c.a.ON_DATASOURCE_FAILURE;
        } else {
            aVar = c.a.ON_DATASOURCE_FAILURE_INT;
        }
        cVar.b(aVar);
        if (z10) {
            A("final_failed @ onFailure", th2);
            this.f10617r = null;
            this.f10614o = true;
            o9.a aVar2 = this.f10607h;
            if (aVar2 != null) {
                if (this.f10615p && (drawable = this.f10621v) != null) {
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
            c cVar = this.f10600a;
            if (z10) {
                aVar = c.a.ON_DATASOURCE_RESULT;
            } else {
                aVar = c.a.ON_DATASOURCE_RESULT_INT;
            }
            cVar.b(aVar);
            try {
                Drawable g10 = g(obj);
                Object obj2 = this.f10618s;
                Drawable drawable = this.f10621v;
                this.f10618s = obj;
                this.f10621v = g10;
                if (z10) {
                    B("set_final_result @ onNewResult", obj);
                    this.f10617r = null;
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
            this.f10607h.c(f10, false);
        }
    }

    private void K() {
        Map map;
        boolean z10 = this.f10612m;
        this.f10612m = false;
        this.f10614o = false;
        DataSource dataSource = this.f10617r;
        Map map2 = null;
        if (dataSource != null) {
            map = dataSource.getExtras();
            this.f10617r.close();
            this.f10617r = null;
        } else {
            map = null;
        }
        Drawable drawable = this.f10621v;
        if (drawable != null) {
            J(drawable);
        }
        if (this.f10616q != null) {
            this.f10616q = null;
        }
        this.f10621v = null;
        Object obj = this.f10618s;
        if (obj != null) {
            Map E = E(s(obj));
            B("release", this.f10618s);
            L(this.f10618s);
            this.f10618s = null;
            map2 = E;
        }
        if (z10) {
            Q(map, map2);
        }
    }

    private void N(Throwable th2, DataSource dataSource) {
        b.a C = C(dataSource, null, null);
        j().onFailure(this.f10609j, th2);
        k().a(this.f10609j, th2, C);
    }

    private void O(Throwable th2) {
        j().onIntermediateImageFailed(this.f10609j, th2);
        k().m(this.f10609j);
    }

    private void P(String str, Object obj) {
        Object s10 = s(obj);
        j().onIntermediateImageSet(str, s10);
        k().onIntermediateImageSet(str, s10);
    }

    private void Q(Map map, Map map2) {
        j().onRelease(this.f10609j);
        k().h(this.f10609j, D(map, map2, null));
    }

    private void S(String str, Object obj, DataSource dataSource) {
        Object s10 = s(obj);
        j().onFinalImageSet(str, s10, getAnimatable());
        k().p(str, s10, C(dataSource, s10, null));
    }

    private boolean a0() {
        d dVar;
        if (this.f10614o && (dVar = this.f10603d) != null && dVar.e()) {
            return true;
        }
        return false;
    }

    private Rect n() {
        o9.a aVar = this.f10607h;
        if (aVar == null) {
            return null;
        }
        return aVar.getBounds();
    }

    private o9.a v() {
        o9.a aVar = this.f10607h;
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException("mSettableDraweeHierarchy is null; Caller context: " + this.f10610k);
    }

    private synchronized void w(String str, Object obj) {
        i9.a aVar;
        try {
            if (za.b.d()) {
                za.b.a("AbstractDraweeController#init");
            }
            this.f10600a.b(c.a.ON_INIT_CONTROLLER);
            if (!this.f10619t && (aVar = this.f10601b) != null) {
                aVar.a(this);
            }
            this.f10611l = false;
            this.f10613n = false;
            K();
            this.f10615p = false;
            d dVar = this.f10603d;
            if (dVar != null) {
                dVar.a();
            }
            n9.a aVar2 = this.f10604e;
            if (aVar2 != null) {
                aVar2.a();
                this.f10604e.f(this);
            }
            ControllerListener controllerListener = this.f10605f;
            if (controllerListener instanceof b) {
                ((b) controllerListener).b();
            } else {
                this.f10605f = null;
            }
            o9.a aVar3 = this.f10607h;
            if (aVar3 != null) {
                aVar3.reset();
                this.f10607h.f(null);
                this.f10607h = null;
            }
            this.f10608i = null;
            if (q8.a.w(2)) {
                q8.a.B(f10599y, "controller %x %s -> %s: initialize", Integer.valueOf(System.identityHashCode(this)), this.f10609j, str);
            }
            this.f10609j = str;
            this.f10610k = obj;
            if (za.b.d()) {
                za.b.b();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private boolean y(String str, DataSource dataSource) {
        if (dataSource == null && this.f10617r == null) {
            return true;
        }
        if (str.equals(this.f10609j) && dataSource == this.f10617r && this.f10612m) {
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
        this.f10606g.y(bVar);
    }

    protected void R(DataSource dataSource, Object obj) {
        j().onSubmit(this.f10609j, this.f10610k);
        k().i(this.f10609j, this.f10610k, C(dataSource, obj, t()));
    }

    public void T(String str) {
        this.f10616q = str;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void U(Drawable drawable) {
        this.f10608i = drawable;
        o9.a aVar = this.f10607h;
        if (aVar != null) {
            aVar.f(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void W(n9.a aVar) {
        this.f10604e = aVar;
        if (aVar != null) {
            aVar.f(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void X(boolean z10) {
        this.f10620u = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void Y(boolean z10) {
        this.f10615p = z10;
    }

    protected boolean Z() {
        return a0();
    }

    @Override // n9.a.InterfaceC0527a
    public boolean a() {
        if (q8.a.w(2)) {
            q8.a.A(f10599y, "controller %x %s: onClick", Integer.valueOf(System.identityHashCode(this)), this.f10609j);
        }
        if (a0()) {
            this.f10603d.b();
            this.f10607h.reset();
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
            this.f10617r = null;
            this.f10612m = true;
            this.f10614o = false;
            this.f10600a.b(c.a.ON_SUBMIT_CACHE_HIT);
            R(this.f10617r, s(h10));
            G(this.f10609j, h10);
            H(this.f10609j, this.f10617r, h10, 1.0f, true, true, true);
            if (za.b.d()) {
                za.b.b();
            }
            if (za.b.d()) {
                za.b.b();
                return;
            }
            return;
        }
        this.f10600a.b(c.a.ON_DATASOURCE_SUBMIT);
        this.f10607h.c(0.0f, true);
        this.f10612m = true;
        this.f10614o = false;
        DataSource m10 = m();
        this.f10617r = m10;
        R(m10, null);
        if (q8.a.w(2)) {
            q8.a.B(f10599y, "controller %x %s: submitRequest: dataSource: %x", Integer.valueOf(System.identityHashCode(this)), this.f10609j, Integer.valueOf(System.identityHashCode(this.f10617r)));
        }
        this.f10617r.c(new C0148a(this.f10609j, this.f10617r.a()), this.f10602c);
        if (za.b.d()) {
            za.b.b();
        }
    }

    public void e(ControllerListener controllerListener) {
        j.g(controllerListener);
        ControllerListener controllerListener2 = this.f10605f;
        if (controllerListener2 instanceof b) {
            ((b) controllerListener2).a(controllerListener);
        } else if (controllerListener2 != null) {
            this.f10605f = b.d(controllerListener2, controllerListener);
        } else {
            this.f10605f = controllerListener;
        }
    }

    public void f(aa.b bVar) {
        this.f10606g.s(bVar);
    }

    protected abstract Drawable g(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public Animatable getAnimatable() {
        Drawable drawable = this.f10621v;
        if (drawable instanceof Animatable) {
            return (Animatable) drawable;
        }
        return null;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public DraweeHierarchy getHierarchy() {
        return this.f10607h;
    }

    protected abstract Object h();

    public Object i() {
        return this.f10610k;
    }

    protected ControllerListener j() {
        ControllerListener controllerListener = this.f10605f;
        if (controllerListener == null) {
            return j9.a.getNoOpListener();
        }
        return controllerListener;
    }

    protected aa.b k() {
        return this.f10606g;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Drawable l() {
        return this.f10608i;
    }

    protected abstract DataSource m();

    /* JADX INFO: Access modifiers changed from: protected */
    public n9.a o() {
        return this.f10604e;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onAttach() {
        String str;
        if (za.b.d()) {
            za.b.a("AbstractDraweeController#onAttach");
        }
        if (q8.a.w(2)) {
            Class cls = f10599y;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            String str2 = this.f10609j;
            if (this.f10612m) {
                str = "request already submitted";
            } else {
                str = "request needs submit";
            }
            q8.a.B(cls, "controller %x %s: onAttach: %s", valueOf, str2, str);
        }
        this.f10600a.b(c.a.ON_ATTACH_CONTROLLER);
        j.g(this.f10607h);
        this.f10601b.a(this);
        this.f10611l = true;
        if (!this.f10612m) {
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
            q8.a.A(f10599y, "controller %x %s: onDetach", Integer.valueOf(System.identityHashCode(this)), this.f10609j);
        }
        this.f10600a.b(c.a.ON_DETACH_CONTROLLER);
        this.f10611l = false;
        this.f10601b.d(this);
        if (za.b.d()) {
            za.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (q8.a.w(2)) {
            q8.a.B(f10599y, "controller %x %s: onTouchEvent %s", Integer.valueOf(System.identityHashCode(this)), this.f10609j, motionEvent);
        }
        n9.a aVar = this.f10604e;
        if (aVar == null) {
            return false;
        }
        if (!aVar.b() && !Z()) {
            return false;
        }
        this.f10604e.d(motionEvent);
        return true;
    }

    public String p() {
        return this.f10609j;
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
        this.f10600a.b(c.a.ON_RELEASE_CONTROLLER);
        d dVar = this.f10603d;
        if (dVar != null) {
            dVar.c();
        }
        n9.a aVar = this.f10604e;
        if (aVar != null) {
            aVar.e();
        }
        o9.a aVar2 = this.f10607h;
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
            q8.a.B(f10599y, "controller %x %s: setHierarchy: %s", Integer.valueOf(System.identityHashCode(this)), this.f10609j, draweeHierarchy);
        }
        c cVar = this.f10600a;
        if (draweeHierarchy != null) {
            aVar = c.a.ON_SET_HIERARCHY;
        } else {
            aVar = c.a.ON_CLEAR_HIERARCHY;
        }
        cVar.b(aVar);
        if (this.f10612m) {
            this.f10601b.a(this);
            release();
        }
        o9.a aVar2 = this.f10607h;
        if (aVar2 != null) {
            aVar2.f(null);
            this.f10607h = null;
        }
        if (draweeHierarchy != null) {
            j.b(Boolean.valueOf(draweeHierarchy instanceof o9.a));
            o9.a aVar3 = (o9.a) draweeHierarchy;
            this.f10607h = aVar3;
            aVar3.f(this.f10608i);
        }
    }

    protected abstract Uri t();

    public String toString() {
        return h.b(this).c("isAttached", this.f10611l).c("isRequestSubmitted", this.f10612m).c("hasFetchFailed", this.f10614o).a("fetchedImage", r(this.f10618s)).b("events", this.f10600a.toString()).toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d u() {
        if (this.f10603d == null) {
            this.f10603d = new d();
        }
        return this.f10603d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void x(String str, Object obj) {
        w(str, obj);
        this.f10619t = false;
        this.f10620u = false;
    }

    protected boolean z() {
        return this.f10620u;
    }

    public void V(j9.b bVar) {
    }
}
