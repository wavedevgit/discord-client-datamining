package com.facebook.drawee.controller;

import android.content.Context;
import android.graphics.drawable.Animatable;
import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.interfaces.DraweeController;
import java.util.ArrayList;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import p8.h;
import p8.j;
import z8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class AbstractDraweeControllerBuilder implements o9.b {

    /* renamed from: q  reason: collision with root package name */
    private static final ControllerListener f9991q = new a();

    /* renamed from: r  reason: collision with root package name */
    private static final NullPointerException f9992r = new NullPointerException("No image request was specified!");

    /* renamed from: s  reason: collision with root package name */
    private static final AtomicLong f9993s = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    private final Context f9994a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f9995b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f9996c;

    /* renamed from: d  reason: collision with root package name */
    private Object f9997d;

    /* renamed from: e  reason: collision with root package name */
    private Object f9998e;

    /* renamed from: f  reason: collision with root package name */
    private Object f9999f;

    /* renamed from: g  reason: collision with root package name */
    private Object[] f10000g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f10001h;

    /* renamed from: i  reason: collision with root package name */
    private Supplier f10002i;

    /* renamed from: j  reason: collision with root package name */
    private ControllerListener f10003j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f10004k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10005l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10006m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10007n = false;

    /* renamed from: o  reason: collision with root package name */
    private String f10008o;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10009p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends j9.a {
        a() {
        }

        @Override // j9.a, com.facebook.drawee.controller.ControllerListener
        public void onFinalImageSet(String str, Object obj, Animatable animatable) {
            if (animatable != null) {
                animatable.start();
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class b implements Supplier {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ DraweeController f10010a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f10011b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f10012c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f10013d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f10014e;

        b(DraweeController draweeController, String str, Object obj, Object obj2, c cVar) {
            this.f10010a = draweeController;
            this.f10011b = str;
            this.f10012c = obj;
            this.f10013d = obj2;
            this.f10014e = cVar;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return AbstractDraweeControllerBuilder.this.i(this.f10010a, this.f10011b, this.f10012c, this.f10013d, this.f10014e);
        }

        public String toString() {
            return h.b(this).b("request", this.f10012c.toString()).toString();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum c {
        FULL_FETCH,
        DISK_CACHE,
        BITMAP_MEMORY_CACHE
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public AbstractDraweeControllerBuilder(Context context, Set set, Set set2) {
        this.f9994a = context;
        this.f9995b = set;
        this.f9996c = set2;
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static String e() {
        return String.valueOf(f9993s.getAndIncrement());
    }

    private void s() {
        this.f9997d = null;
        this.f9998e = null;
        this.f9999f = null;
        this.f10000g = null;
        this.f10001h = true;
        this.f10003j = null;
        this.f10004k = false;
        this.f10005l = false;
        this.f10007n = false;
        this.f10009p = null;
        this.f10008o = null;
    }

    public AbstractDraweeControllerBuilder A(boolean z10) {
        this.f10005l = z10;
        return r();
    }

    public AbstractDraweeControllerBuilder B(Object obj) {
        this.f9997d = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder C(String str) {
        this.f10008o = str;
        return r();
    }

    public AbstractDraweeControllerBuilder D(ControllerListener controllerListener) {
        this.f10003j = controllerListener;
        return r();
    }

    public AbstractDraweeControllerBuilder E(Object obj) {
        this.f9998e = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder F(Object obj) {
        this.f9999f = obj;
        return r();
    }

    @Override // o9.b
    /* renamed from: G */
    public AbstractDraweeControllerBuilder b(DraweeController draweeController) {
        this.f10009p = draweeController;
        return r();
    }

    protected void H() {
        boolean z10;
        boolean z11 = true;
        if (this.f10000g != null && this.f9998e != null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Cannot specify both ImageRequest and FirstAvailableImageRequests!");
        if (this.f10002i != null && (this.f10000g != null || this.f9998e != null || this.f9999f != null)) {
            z11 = false;
        }
        j.j(z11, "Cannot specify DataSourceSupplier with other ImageRequests! Use one or the other.");
    }

    @Override // o9.b
    /* renamed from: c */
    public com.facebook.drawee.controller.a build() {
        Object obj;
        H();
        if (this.f9998e == null && this.f10000g == null && (obj = this.f9999f) != null) {
            this.f9998e = obj;
            this.f9999f = null;
        }
        return d();
    }

    protected com.facebook.drawee.controller.a d() {
        if (za.b.d()) {
            za.b.a("AbstractDraweeControllerBuilder#buildController");
        }
        com.facebook.drawee.controller.a x10 = x();
        x10.X(t());
        x10.Y(q());
        x10.T(g());
        h();
        x10.V(null);
        w(x10);
        u(x10);
        if (za.b.d()) {
            za.b.b();
        }
        return x10;
    }

    public Object f() {
        return this.f9997d;
    }

    public String g() {
        return this.f10008o;
    }

    public j9.b h() {
        return null;
    }

    protected abstract DataSource i(DraweeController draweeController, String str, Object obj, Object obj2, c cVar);

    protected Supplier j(DraweeController draweeController, String str, Object obj) {
        return k(draweeController, str, obj, c.FULL_FETCH);
    }

    protected Supplier k(DraweeController draweeController, String str, Object obj, c cVar) {
        return new b(draweeController, str, obj, f(), cVar);
    }

    protected Supplier l(DraweeController draweeController, String str, Object[] objArr, boolean z10) {
        ArrayList arrayList = new ArrayList(objArr.length * 2);
        if (z10) {
            for (Object obj : objArr) {
                arrayList.add(k(draweeController, str, obj, c.BITMAP_MEMORY_CACHE));
            }
        }
        for (Object obj2 : objArr) {
            arrayList.add(j(draweeController, str, obj2));
        }
        return f.b(arrayList);
    }

    public Object[] m() {
        return this.f10000g;
    }

    public Object n() {
        return this.f9998e;
    }

    public Object o() {
        return this.f9999f;
    }

    public DraweeController p() {
        return this.f10009p;
    }

    public boolean q() {
        return this.f10006m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AbstractDraweeControllerBuilder r() {
        return this;
    }

    public boolean t() {
        return this.f10007n;
    }

    protected void u(com.facebook.drawee.controller.a aVar) {
        Set<ControllerListener> set = this.f9995b;
        if (set != null) {
            for (ControllerListener controllerListener : set) {
                aVar.e(controllerListener);
            }
        }
        Set<aa.b> set2 = this.f9996c;
        if (set2 != null) {
            for (aa.b bVar : set2) {
                aVar.f(bVar);
            }
        }
        ControllerListener controllerListener2 = this.f10003j;
        if (controllerListener2 != null) {
            aVar.e(controllerListener2);
        }
        if (this.f10005l) {
            aVar.e(f9991q);
        }
    }

    protected void v(com.facebook.drawee.controller.a aVar) {
        if (aVar.o() == null) {
            aVar.W(n9.a.c(this.f9994a));
        }
    }

    protected void w(com.facebook.drawee.controller.a aVar) {
        if (!this.f10004k) {
            return;
        }
        aVar.u().d(this.f10004k);
        v(aVar);
    }

    protected abstract com.facebook.drawee.controller.a x();

    /* JADX INFO: Access modifiers changed from: protected */
    public Supplier y(DraweeController draweeController, String str) {
        Supplier supplier;
        Supplier supplier2 = this.f10002i;
        if (supplier2 != null) {
            return supplier2;
        }
        Object obj = this.f9998e;
        if (obj != null) {
            supplier = j(draweeController, str, obj);
        } else {
            Object[] objArr = this.f10000g;
            if (objArr != null) {
                supplier = l(draweeController, str, objArr, this.f10001h);
            } else {
                supplier = null;
            }
        }
        if (supplier != null && this.f9999f != null) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(supplier);
            arrayList.add(j(draweeController, str, this.f9999f));
            supplier = z8.h.c(arrayList, false);
        }
        if (supplier == null) {
            return z8.c.a(f9992r);
        }
        return supplier;
    }

    public AbstractDraweeControllerBuilder z() {
        s();
        return r();
    }
}
