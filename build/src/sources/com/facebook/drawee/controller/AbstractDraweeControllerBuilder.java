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
    private static final ControllerListener f10599q = new a();

    /* renamed from: r  reason: collision with root package name */
    private static final NullPointerException f10600r = new NullPointerException("No image request was specified!");

    /* renamed from: s  reason: collision with root package name */
    private static final AtomicLong f10601s = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    private final Context f10602a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f10603b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f10604c;

    /* renamed from: d  reason: collision with root package name */
    private Object f10605d;

    /* renamed from: e  reason: collision with root package name */
    private Object f10606e;

    /* renamed from: f  reason: collision with root package name */
    private Object f10607f;

    /* renamed from: g  reason: collision with root package name */
    private Object[] f10608g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f10609h;

    /* renamed from: i  reason: collision with root package name */
    private Supplier f10610i;

    /* renamed from: j  reason: collision with root package name */
    private ControllerListener f10611j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f10612k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10613l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10614m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10615n = false;

    /* renamed from: o  reason: collision with root package name */
    private String f10616o;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10617p;

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
        final /* synthetic */ DraweeController f10618a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f10619b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f10620c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f10621d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f10622e;

        b(DraweeController draweeController, String str, Object obj, Object obj2, c cVar) {
            this.f10618a = draweeController;
            this.f10619b = str;
            this.f10620c = obj;
            this.f10621d = obj2;
            this.f10622e = cVar;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return AbstractDraweeControllerBuilder.this.i(this.f10618a, this.f10619b, this.f10620c, this.f10621d, this.f10622e);
        }

        public String toString() {
            return h.b(this).b("request", this.f10620c.toString()).toString();
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
        this.f10602a = context;
        this.f10603b = set;
        this.f10604c = set2;
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static String e() {
        return String.valueOf(f10601s.getAndIncrement());
    }

    private void s() {
        this.f10605d = null;
        this.f10606e = null;
        this.f10607f = null;
        this.f10608g = null;
        this.f10609h = true;
        this.f10611j = null;
        this.f10612k = false;
        this.f10613l = false;
        this.f10615n = false;
        this.f10617p = null;
        this.f10616o = null;
    }

    public AbstractDraweeControllerBuilder A(boolean z10) {
        this.f10613l = z10;
        return r();
    }

    public AbstractDraweeControllerBuilder B(Object obj) {
        this.f10605d = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder C(String str) {
        this.f10616o = str;
        return r();
    }

    public AbstractDraweeControllerBuilder D(ControllerListener controllerListener) {
        this.f10611j = controllerListener;
        return r();
    }

    public AbstractDraweeControllerBuilder E(Object obj) {
        this.f10606e = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder F(Object obj) {
        this.f10607f = obj;
        return r();
    }

    @Override // n9.b
    /* renamed from: G */
    public AbstractDraweeControllerBuilder b(DraweeController draweeController) {
        this.f10617p = draweeController;
        return r();
    }

    protected void H() {
        boolean z10;
        boolean z11 = true;
        if (this.f10608g != null && this.f10606e != null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Cannot specify both ImageRequest and FirstAvailableImageRequests!");
        if (this.f10610i != null && (this.f10608g != null || this.f10606e != null || this.f10607f != null)) {
            z11 = false;
        }
        j.j(z11, "Cannot specify DataSourceSupplier with other ImageRequests! Use one or the other.");
    }

    @Override // n9.b
    /* renamed from: c */
    public com.facebook.drawee.controller.a build() {
        Object obj;
        H();
        if (this.f10606e == null && this.f10608g == null && (obj = this.f10607f) != null) {
            this.f10606e = obj;
            this.f10607f = null;
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
        return this.f10605d;
    }

    public String g() {
        return this.f10616o;
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
        return this.f10608g;
    }

    public Object n() {
        return this.f10606e;
    }

    public Object o() {
        return this.f10607f;
    }

    public DraweeController p() {
        return this.f10617p;
    }

    public boolean q() {
        return this.f10614m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AbstractDraweeControllerBuilder r() {
        return this;
    }

    public boolean t() {
        return this.f10615n;
    }

    protected void u(com.facebook.drawee.controller.a aVar) {
        Set<ControllerListener> set = this.f10603b;
        if (set != null) {
            for (ControllerListener controllerListener : set) {
                aVar.e(controllerListener);
            }
        }
        Set<z9.b> set2 = this.f10604c;
        if (set2 != null) {
            for (z9.b bVar : set2) {
                aVar.f(bVar);
            }
        }
        ControllerListener controllerListener2 = this.f10611j;
        if (controllerListener2 != null) {
            aVar.e(controllerListener2);
        }
        if (this.f10613l) {
            aVar.e(f10599q);
        }
    }

    protected void v(com.facebook.drawee.controller.a aVar) {
        if (aVar.o() == null) {
            aVar.W(m9.a.c(this.f10602a));
        }
    }

    protected void w(com.facebook.drawee.controller.a aVar) {
        if (!this.f10612k) {
            return;
        }
        aVar.u().d(this.f10612k);
        v(aVar);
    }

    protected abstract com.facebook.drawee.controller.a x();

    /* JADX INFO: Access modifiers changed from: protected */
    public Supplier y(DraweeController draweeController, String str) {
        Supplier supplier;
        Supplier supplier2 = this.f10610i;
        if (supplier2 != null) {
            return supplier2;
        }
        Object obj = this.f10606e;
        if (obj != null) {
            supplier = j(draweeController, str, obj);
        } else {
            Object[] objArr = this.f10608g;
            if (objArr != null) {
                supplier = l(draweeController, str, objArr, this.f10609h);
            } else {
                supplier = null;
            }
        }
        if (supplier != null && this.f10607f != null) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(supplier);
            arrayList.add(j(draweeController, str, this.f10607f));
            supplier = y8.h.c(arrayList, false);
        }
        if (supplier == null) {
            return y8.c.a(f10600r);
        }
        return supplier;
    }

    public AbstractDraweeControllerBuilder z() {
        s();
        return r();
    }
}
