package com.facebook.drawee.controller;

import android.content.Context;
import android.graphics.drawable.Animatable;
import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import com.facebook.drawee.interfaces.DraweeController;
import java.util.ArrayList;
import java.util.Set;
import java.util.concurrent.atomic.AtomicLong;
import o8.h;
import o8.j;
import y8.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class AbstractDraweeControllerBuilder implements n9.b {

    /* renamed from: q  reason: collision with root package name */
    private static final ControllerListener f9952q = new a();

    /* renamed from: r  reason: collision with root package name */
    private static final NullPointerException f9953r = new NullPointerException("No image request was specified!");

    /* renamed from: s  reason: collision with root package name */
    private static final AtomicLong f9954s = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    private final Context f9955a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f9956b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f9957c;

    /* renamed from: d  reason: collision with root package name */
    private Object f9958d;

    /* renamed from: e  reason: collision with root package name */
    private Object f9959e;

    /* renamed from: f  reason: collision with root package name */
    private Object f9960f;

    /* renamed from: g  reason: collision with root package name */
    private Object[] f9961g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f9962h;

    /* renamed from: i  reason: collision with root package name */
    private Supplier f9963i;

    /* renamed from: j  reason: collision with root package name */
    private ControllerListener f9964j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f9965k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f9966l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f9967m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f9968n = false;

    /* renamed from: o  reason: collision with root package name */
    private String f9969o;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f9970p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends i9.a {
        a() {
        }

        @Override // i9.a, com.facebook.drawee.controller.ControllerListener
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
        final /* synthetic */ DraweeController f9971a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f9972b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f9973c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f9974d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f9975e;

        b(DraweeController draweeController, String str, Object obj, Object obj2, c cVar) {
            this.f9971a = draweeController;
            this.f9972b = str;
            this.f9973c = obj;
            this.f9974d = obj2;
            this.f9975e = cVar;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return AbstractDraweeControllerBuilder.this.i(this.f9971a, this.f9972b, this.f9973c, this.f9974d, this.f9975e);
        }

        public String toString() {
            return h.b(this).b("request", this.f9973c.toString()).toString();
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
        this.f9955a = context;
        this.f9956b = set;
        this.f9957c = set2;
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static String e() {
        return String.valueOf(f9954s.getAndIncrement());
    }

    private void s() {
        this.f9958d = null;
        this.f9959e = null;
        this.f9960f = null;
        this.f9961g = null;
        this.f9962h = true;
        this.f9964j = null;
        this.f9965k = false;
        this.f9966l = false;
        this.f9968n = false;
        this.f9970p = null;
        this.f9969o = null;
    }

    public AbstractDraweeControllerBuilder A(boolean z10) {
        this.f9966l = z10;
        return r();
    }

    public AbstractDraweeControllerBuilder B(Object obj) {
        this.f9958d = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder C(String str) {
        this.f9969o = str;
        return r();
    }

    public AbstractDraweeControllerBuilder D(ControllerListener controllerListener) {
        this.f9964j = controllerListener;
        return r();
    }

    public AbstractDraweeControllerBuilder E(Object obj) {
        this.f9959e = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder F(Object obj) {
        this.f9960f = obj;
        return r();
    }

    @Override // n9.b
    /* renamed from: G */
    public AbstractDraweeControllerBuilder b(DraweeController draweeController) {
        this.f9970p = draweeController;
        return r();
    }

    protected void H() {
        boolean z10;
        boolean z11 = true;
        if (this.f9961g != null && this.f9959e != null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Cannot specify both ImageRequest and FirstAvailableImageRequests!");
        if (this.f9963i != null && (this.f9961g != null || this.f9959e != null || this.f9960f != null)) {
            z11 = false;
        }
        j.j(z11, "Cannot specify DataSourceSupplier with other ImageRequests! Use one or the other.");
    }

    @Override // n9.b
    /* renamed from: c */
    public com.facebook.drawee.controller.a build() {
        Object obj;
        H();
        if (this.f9959e == null && this.f9961g == null && (obj = this.f9960f) != null) {
            this.f9959e = obj;
            this.f9960f = null;
        }
        return d();
    }

    protected com.facebook.drawee.controller.a d() {
        if (ya.b.d()) {
            ya.b.a("AbstractDraweeControllerBuilder#buildController");
        }
        com.facebook.drawee.controller.a x10 = x();
        x10.X(t());
        x10.Y(q());
        x10.T(g());
        h();
        x10.V(null);
        w(x10);
        u(x10);
        if (ya.b.d()) {
            ya.b.b();
        }
        return x10;
    }

    public Object f() {
        return this.f9958d;
    }

    public String g() {
        return this.f9969o;
    }

    public i9.b h() {
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
        return this.f9961g;
    }

    public Object n() {
        return this.f9959e;
    }

    public Object o() {
        return this.f9960f;
    }

    public DraweeController p() {
        return this.f9970p;
    }

    public boolean q() {
        return this.f9967m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AbstractDraweeControllerBuilder r() {
        return this;
    }

    public boolean t() {
        return this.f9968n;
    }

    protected void u(com.facebook.drawee.controller.a aVar) {
        Set<ControllerListener> set = this.f9956b;
        if (set != null) {
            for (ControllerListener controllerListener : set) {
                aVar.e(controllerListener);
            }
        }
        Set<z9.b> set2 = this.f9957c;
        if (set2 != null) {
            for (z9.b bVar : set2) {
                aVar.f(bVar);
            }
        }
        ControllerListener controllerListener2 = this.f9964j;
        if (controllerListener2 != null) {
            aVar.e(controllerListener2);
        }
        if (this.f9966l) {
            aVar.e(f9952q);
        }
    }

    protected void v(com.facebook.drawee.controller.a aVar) {
        if (aVar.o() == null) {
            aVar.W(m9.a.c(this.f9955a));
        }
    }

    protected void w(com.facebook.drawee.controller.a aVar) {
        if (!this.f9965k) {
            return;
        }
        aVar.u().d(this.f9965k);
        v(aVar);
    }

    protected abstract com.facebook.drawee.controller.a x();

    /* JADX INFO: Access modifiers changed from: protected */
    public Supplier y(DraweeController draweeController, String str) {
        Supplier supplier;
        Supplier supplier2 = this.f9963i;
        if (supplier2 != null) {
            return supplier2;
        }
        Object obj = this.f9959e;
        if (obj != null) {
            supplier = j(draweeController, str, obj);
        } else {
            Object[] objArr = this.f9961g;
            if (objArr != null) {
                supplier = l(draweeController, str, objArr, this.f9962h);
            } else {
                supplier = null;
            }
        }
        if (supplier != null && this.f9960f != null) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(supplier);
            arrayList.add(j(draweeController, str, this.f9960f));
            supplier = y8.h.c(arrayList, false);
        }
        if (supplier == null) {
            return y8.c.a(f9953r);
        }
        return supplier;
    }

    public AbstractDraweeControllerBuilder z() {
        s();
        return r();
    }
}
