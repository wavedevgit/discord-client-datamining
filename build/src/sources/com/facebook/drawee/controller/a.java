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
public abstract class a implements DraweeController, a.InterfaceC0358a, a.InterfaceC0505a {

    /* renamed from: w  reason: collision with root package name */
    private static final Map f10628w = f.of("component_tag", "drawee");

    /* renamed from: x  reason: collision with root package name */
    private static final Map f10629x = f.of("origin", "memory_bitmap", "origin_sub", "shortcut");

    /* renamed from: y  reason: collision with root package name */
    private static final Class f10630y = a.class;

    /* renamed from: b  reason: collision with root package name */
    private final h9.a f10632b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f10633c;

    /* renamed from: d  reason: collision with root package name */
    private d f10634d;

    /* renamed from: e  reason: collision with root package name */
    private m9.a f10635e;

    /* renamed from: f  reason: collision with root package name */
    protected ControllerListener f10636f;

    /* renamed from: h  reason: collision with root package name */
    private n9.a f10638h;

    /* renamed from: i  reason: collision with root package name */
    private Drawable f10639i;

    /* renamed from: j  reason: collision with root package name */
    private String f10640j;

    /* renamed from: k  reason: collision with root package name */
    private Object f10641k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10642l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10643m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10644n;

    /* renamed from: o  reason: collision with root package name */
    private boolean f10645o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f10646p;

    /* renamed from: q  reason: collision with root package name */
    private String f10647q;

    /* renamed from: r  reason: collision with root package name */
    private DataSource f10648r;

    /* renamed from: s  reason: collision with root package name */
    private Object f10649s;

    /* renamed from: v  reason: collision with root package name */
    protected Drawable f10652v;

    /* renamed from: a  reason: collision with root package name */
    private final c f10631a = c.a();

    /* renamed from: g  reason: collision with root package name */
    protected z9.d f10637g = new z9.d();

    /* renamed from: t  reason: collision with root package name */
    private boolean f10650t = true;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10651u = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.drawee.controller.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class C0154a extends y8.b {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ String f10653a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ boolean f10654b;

        C0154a(String str, boolean z10) {
            this.f10653a = str;
            this.f10654b = z10;
        }

        @Override // y8.b
        public void onFailureImpl(DataSource dataSource) {
            a.this.F(this.f10653a, dataSource, dataSource.b(), true);
        }

        @Override // y8.b
        public void onNewResultImpl(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            boolean e10 = dataSource.e();
            float d10 = dataSource.d();
            Object result = dataSource.getResult();
            if (result != null) {
                a.this.H(this.f10653a, dataSource, result, d10, isFinished, this.f10654b, e10);
            } else if (isFinished) {
                a.this.F(this.f10653a, dataSource, new NullPointerException(), true);
            }
        }

        @Override // y8.b, y8.e
        public void onProgressUpdate(DataSource dataSource) {
            boolean isFinished = dataSource.isFinished();
            a.this.I(this.f10653a, dataSource, dataSource.d(), isFinished);
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
        this.f10632b = aVar;
        this.f10633c = executor;
        w(str, obj);
    }

    private void A(String str, Throwable th2) {
        if (p8.a.w(2)) {
            p8.a.C(f10630y, "controller %x %s: %s: failure: %s", Integer.valueOf(System.identityHashCode(this)), this.f10640j, str, th2);
        }
    }

    private void B(String str, Object obj) {
        if (p8.a.w(2)) {
            p8.a.D(f10630y, "controller %x %s: %s: image: %s %x", Integer.valueOf(System.identityHashCode(this)), this.f10640j, str, q(obj), Integer.valueOf(r(obj)));
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
        n9.a aVar = this.f10638h;
        if (aVar instanceof GenericDraweeHierarchy) {
            GenericDraweeHierarchy genericDraweeHierarchy = (GenericDraweeHierarchy) aVar;
            String valueOf = String.valueOf(genericDraweeHierarchy.m());
            pointF = genericDraweeHierarchy.l();
            str = valueOf;
        } else {
            str = null;
            pointF = null;
        }
        return y9.b.a(f10628w, f10629x, map, null, n(), str, pointF, map2, i(), z(), uri);
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
        c cVar = this.f10631a;
        if (z10) {
            aVar = c.a.ON_DATASOURCE_FAILURE;
        } else {
            aVar = c.a.ON_DATASOURCE_FAILURE_INT;
        }
        cVar.b(aVar);
        if (z10) {
            A("final_failed @ onFailure", th2);
            this.f10648r = null;
            this.f10645o = true;
            n9.a aVar2 = this.f10638h;
            if (aVar2 != null) {
                if (this.f10646p && (drawable = this.f10652v) != null) {
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
            c cVar = this.f10631a;
            if (z10) {
                aVar = c.a.ON_DATASOURCE_RESULT;
            } else {
                aVar = c.a.ON_DATASOURCE_RESULT_INT;
            }
            cVar.b(aVar);
            try {
                Drawable g10 = g(obj);
                Object obj2 = this.f10649s;
                Drawable drawable = this.f10652v;
                this.f10649s = obj;
                this.f10652v = g10;
                if (z10) {
                    B("set_final_result @ onNewResult", obj);
                    this.f10648r = null;
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
            this.f10638h.c(f10, false);
        }
    }

    private void K() {
        Map map;
        boolean z10 = this.f10643m;
        this.f10643m = false;
        this.f10645o = false;
        DataSource dataSource = this.f10648r;
        Map map2 = null;
        if (dataSource != null) {
            map = dataSource.getExtras();
            this.f10648r.close();
            this.f10648r = null;
        } else {
            map = null;
        }
        Drawable drawable = this.f10652v;
        if (drawable != null) {
            J(drawable);
        }
        if (this.f10647q != null) {
            this.f10647q = null;
        }
        this.f10652v = null;
        Object obj = this.f10649s;
        if (obj != null) {
            Map E = E(s(obj));
            B("release", this.f10649s);
            L(this.f10649s);
            this.f10649s = null;
            map2 = E;
        }
        if (z10) {
            Q(map, map2);
        }
    }

    private void N(Throwable th2, DataSource dataSource) {
        b.a C = C(dataSource, null, null);
        j().onFailure(this.f10640j, th2);
        k().h(this.f10640j, th2, C);
    }

    private void O(Throwable th2) {
        j().onIntermediateImageFailed(this.f10640j, th2);
        k().l(this.f10640j);
    }

    private void P(String str, Object obj) {
        Object s10 = s(obj);
        j().onIntermediateImageSet(str, s10);
        k().onIntermediateImageSet(str, s10);
    }

    private void Q(Map map, Map map2) {
        j().onRelease(this.f10640j);
        k().x(this.f10640j, D(map, map2, null));
    }

    private void S(String str, Object obj, DataSource dataSource) {
        Object s10 = s(obj);
        j().onFinalImageSet(str, s10, getAnimatable());
        k().a(str, s10, C(dataSource, s10, null));
    }

    private boolean a0() {
        d dVar;
        if (this.f10645o && (dVar = this.f10634d) != null && dVar.e()) {
            return true;
        }
        return false;
    }

    private Rect n() {
        n9.a aVar = this.f10638h;
        if (aVar == null) {
            return null;
        }
        return aVar.getBounds();
    }

    private n9.a v() {
        n9.a aVar = this.f10638h;
        if (aVar != null) {
            return aVar;
        }
        throw new IllegalStateException("mSettableDraweeHierarchy is null; Caller context: " + this.f10641k);
    }

    private synchronized void w(String str, Object obj) {
        h9.a aVar;
        try {
            if (ya.b.d()) {
                ya.b.a("AbstractDraweeController#init");
            }
            this.f10631a.b(c.a.ON_INIT_CONTROLLER);
            if (!this.f10650t && (aVar = this.f10632b) != null) {
                aVar.a(this);
            }
            this.f10642l = false;
            this.f10644n = false;
            K();
            this.f10646p = false;
            d dVar = this.f10634d;
            if (dVar != null) {
                dVar.a();
            }
            m9.a aVar2 = this.f10635e;
            if (aVar2 != null) {
                aVar2.a();
                this.f10635e.f(this);
            }
            ControllerListener controllerListener = this.f10636f;
            if (controllerListener instanceof b) {
                ((b) controllerListener).b();
            } else {
                this.f10636f = null;
            }
            n9.a aVar3 = this.f10638h;
            if (aVar3 != null) {
                aVar3.reset();
                this.f10638h.f(null);
                this.f10638h = null;
            }
            this.f10639i = null;
            if (p8.a.w(2)) {
                p8.a.B(f10630y, "controller %x %s -> %s: initialize", Integer.valueOf(System.identityHashCode(this)), this.f10640j, str);
            }
            this.f10640j = str;
            this.f10641k = obj;
            if (ya.b.d()) {
                ya.b.b();
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private boolean y(String str, DataSource dataSource) {
        if (dataSource == null && this.f10648r == null) {
            return true;
        }
        if (str.equals(this.f10640j) && dataSource == this.f10648r && this.f10643m) {
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
        this.f10637g.F(bVar);
    }

    protected void R(DataSource dataSource, Object obj) {
        j().onSubmit(this.f10640j, this.f10641k);
        k().B(this.f10640j, this.f10641k, C(dataSource, obj, t()));
    }

    public void T(String str) {
        this.f10647q = str;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void U(Drawable drawable) {
        this.f10639i = drawable;
        n9.a aVar = this.f10638h;
        if (aVar != null) {
            aVar.f(drawable);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void W(m9.a aVar) {
        this.f10635e = aVar;
        if (aVar != null) {
            aVar.f(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void X(boolean z10) {
        this.f10651u = z10;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void Y(boolean z10) {
        this.f10646p = z10;
    }

    protected boolean Z() {
        return a0();
    }

    @Override // m9.a.InterfaceC0505a
    public boolean a() {
        if (p8.a.w(2)) {
            p8.a.A(f10630y, "controller %x %s: onClick", Integer.valueOf(System.identityHashCode(this)), this.f10640j);
        }
        if (a0()) {
            this.f10634d.b();
            this.f10638h.reset();
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
            this.f10648r = null;
            this.f10643m = true;
            this.f10645o = false;
            this.f10631a.b(c.a.ON_SUBMIT_CACHE_HIT);
            R(this.f10648r, s(h10));
            G(this.f10640j, h10);
            H(this.f10640j, this.f10648r, h10, 1.0f, true, true, true);
            if (ya.b.d()) {
                ya.b.b();
            }
            if (ya.b.d()) {
                ya.b.b();
                return;
            }
            return;
        }
        this.f10631a.b(c.a.ON_DATASOURCE_SUBMIT);
        this.f10638h.c(0.0f, true);
        this.f10643m = true;
        this.f10645o = false;
        DataSource m10 = m();
        this.f10648r = m10;
        R(m10, null);
        if (p8.a.w(2)) {
            p8.a.B(f10630y, "controller %x %s: submitRequest: dataSource: %x", Integer.valueOf(System.identityHashCode(this)), this.f10640j, Integer.valueOf(System.identityHashCode(this.f10648r)));
        }
        this.f10648r.c(new C0154a(this.f10640j, this.f10648r.a()), this.f10633c);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    public void e(ControllerListener controllerListener) {
        j.g(controllerListener);
        ControllerListener controllerListener2 = this.f10636f;
        if (controllerListener2 instanceof b) {
            ((b) controllerListener2).a(controllerListener);
        } else if (controllerListener2 != null) {
            this.f10636f = b.d(controllerListener2, controllerListener);
        } else {
            this.f10636f = controllerListener;
        }
    }

    public void f(z9.b bVar) {
        this.f10637g.E(bVar);
    }

    protected abstract Drawable g(Object obj);

    @Override // com.facebook.drawee.interfaces.DraweeController
    public Animatable getAnimatable() {
        Drawable drawable = this.f10652v;
        if (drawable instanceof Animatable) {
            return (Animatable) drawable;
        }
        return null;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public DraweeHierarchy getHierarchy() {
        return this.f10638h;
    }

    protected abstract Object h();

    public Object i() {
        return this.f10641k;
    }

    protected ControllerListener j() {
        ControllerListener controllerListener = this.f10636f;
        if (controllerListener == null) {
            return i9.a.getNoOpListener();
        }
        return controllerListener;
    }

    protected z9.b k() {
        return this.f10637g;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public Drawable l() {
        return this.f10639i;
    }

    protected abstract DataSource m();

    /* JADX INFO: Access modifiers changed from: protected */
    public m9.a o() {
        return this.f10635e;
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public void onAttach() {
        String str;
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeController#onAttach");
        }
        if (p8.a.w(2)) {
            Class cls = f10630y;
            Integer valueOf = Integer.valueOf(System.identityHashCode(this));
            String str2 = this.f10640j;
            if (this.f10643m) {
                str = "request already submitted";
            } else {
                str = "request needs submit";
            }
            p8.a.B(cls, "controller %x %s: onAttach: %s", valueOf, str2, str);
        }
        this.f10631a.b(c.a.ON_ATTACH_CONTROLLER);
        j.g(this.f10638h);
        this.f10632b.a(this);
        this.f10642l = true;
        if (!this.f10643m) {
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
            p8.a.A(f10630y, "controller %x %s: onDetach", Integer.valueOf(System.identityHashCode(this)), this.f10640j);
        }
        this.f10631a.b(c.a.ON_DETACH_CONTROLLER);
        this.f10642l = false;
        this.f10632b.d(this);
        if (ya.b.d()) {
            ya.b.b();
        }
    }

    @Override // com.facebook.drawee.interfaces.DraweeController
    public boolean onTouchEvent(MotionEvent motionEvent) {
        if (p8.a.w(2)) {
            p8.a.B(f10630y, "controller %x %s: onTouchEvent %s", Integer.valueOf(System.identityHashCode(this)), this.f10640j, motionEvent);
        }
        m9.a aVar = this.f10635e;
        if (aVar == null) {
            return false;
        }
        if (!aVar.b() && !Z()) {
            return false;
        }
        this.f10635e.d(motionEvent);
        return true;
    }

    public String p() {
        return this.f10640j;
    }

    protected String q(Object obj) {
        if (obj != null) {
            return obj.getClass().getSimpleName();
        }
        return "<null>";
    }

    protected abstract int r(Object obj);

    @Override // h9.a.InterfaceC0358a
    public void release() {
        this.f10631a.b(c.a.ON_RELEASE_CONTROLLER);
        d dVar = this.f10634d;
        if (dVar != null) {
            dVar.c();
        }
        m9.a aVar = this.f10635e;
        if (aVar != null) {
            aVar.e();
        }
        n9.a aVar2 = this.f10638h;
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
            p8.a.B(f10630y, "controller %x %s: setHierarchy: %s", Integer.valueOf(System.identityHashCode(this)), this.f10640j, draweeHierarchy);
        }
        c cVar = this.f10631a;
        if (draweeHierarchy != null) {
            aVar = c.a.ON_SET_HIERARCHY;
        } else {
            aVar = c.a.ON_CLEAR_HIERARCHY;
        }
        cVar.b(aVar);
        if (this.f10643m) {
            this.f10632b.a(this);
            release();
        }
        n9.a aVar2 = this.f10638h;
        if (aVar2 != null) {
            aVar2.f(null);
            this.f10638h = null;
        }
        if (draweeHierarchy != null) {
            j.b(Boolean.valueOf(draweeHierarchy instanceof n9.a));
            n9.a aVar3 = (n9.a) draweeHierarchy;
            this.f10638h = aVar3;
            aVar3.f(this.f10639i);
        }
    }

    protected abstract Uri t();

    public String toString() {
        return h.b(this).c("isAttached", this.f10642l).c("isRequestSubmitted", this.f10643m).c("hasFetchFailed", this.f10645o).a("fetchedImage", r(this.f10649s)).b("events", this.f10631a.toString()).toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public d u() {
        if (this.f10634d == null) {
            this.f10634d = new d();
        }
        return this.f10634d;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void x(String str, Object obj) {
        w(str, obj);
        this.f10650t = false;
        this.f10651u = false;
    }

    protected boolean z() {
        return this.f10651u;
    }

    public void V(i9.b bVar) {
    }
}
