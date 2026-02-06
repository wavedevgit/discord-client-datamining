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
    private static final ControllerListener f9851q = new a();

    /* renamed from: r  reason: collision with root package name */
    private static final NullPointerException f9852r = new NullPointerException("No image request was specified!");

    /* renamed from: s  reason: collision with root package name */
    private static final AtomicLong f9853s = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    private final Context f9854a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f9855b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f9856c;

    /* renamed from: d  reason: collision with root package name */
    private Object f9857d;

    /* renamed from: e  reason: collision with root package name */
    private Object f9858e;

    /* renamed from: f  reason: collision with root package name */
    private Object f9859f;

    /* renamed from: g  reason: collision with root package name */
    private Object[] f9860g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f9861h;

    /* renamed from: i  reason: collision with root package name */
    private Supplier f9862i;

    /* renamed from: j  reason: collision with root package name */
    private ControllerListener f9863j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f9864k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f9865l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f9866m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f9867n = false;

    /* renamed from: o  reason: collision with root package name */
    private String f9868o;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f9869p;

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
        final /* synthetic */ DraweeController f9870a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f9871b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f9872c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f9873d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f9874e;

        b(DraweeController draweeController, String str, Object obj, Object obj2, c cVar) {
            this.f9870a = draweeController;
            this.f9871b = str;
            this.f9872c = obj;
            this.f9873d = obj2;
            this.f9874e = cVar;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return AbstractDraweeControllerBuilder.this.i(this.f9870a, this.f9871b, this.f9872c, this.f9873d, this.f9874e);
        }

        public String toString() {
            return h.b(this).b("request", this.f9872c.toString()).toString();
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
        this.f9854a = context;
        this.f9855b = set;
        this.f9856c = set2;
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static String e() {
        return String.valueOf(f9853s.getAndIncrement());
    }

    private void s() {
        this.f9857d = null;
        this.f9858e = null;
        this.f9859f = null;
        this.f9860g = null;
        this.f9861h = true;
        this.f9863j = null;
        this.f9864k = false;
        this.f9865l = false;
        this.f9867n = false;
        this.f9869p = null;
        this.f9868o = null;
    }

    public AbstractDraweeControllerBuilder A(boolean z10) {
        this.f9865l = z10;
        return r();
    }

    public AbstractDraweeControllerBuilder B(Object obj) {
        this.f9857d = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder C(String str) {
        this.f9868o = str;
        return r();
    }

    public AbstractDraweeControllerBuilder D(ControllerListener controllerListener) {
        this.f9863j = controllerListener;
        return r();
    }

    public AbstractDraweeControllerBuilder E(Object obj) {
        this.f9858e = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder F(Object obj) {
        this.f9859f = obj;
        return r();
    }

    @Override // n9.b
    /* renamed from: G */
    public AbstractDraweeControllerBuilder b(DraweeController draweeController) {
        this.f9869p = draweeController;
        return r();
    }

    protected void H() {
        boolean z10;
        boolean z11 = true;
        if (this.f9860g != null && this.f9858e != null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Cannot specify both ImageRequest and FirstAvailableImageRequests!");
        if (this.f9862i != null && (this.f9860g != null || this.f9858e != null || this.f9859f != null)) {
            z11 = false;
        }
        j.j(z11, "Cannot specify DataSourceSupplier with other ImageRequests! Use one or the other.");
    }

    @Override // n9.b
    /* renamed from: c */
    public com.facebook.drawee.controller.a build() {
        Object obj;
        H();
        if (this.f9858e == null && this.f9860g == null && (obj = this.f9859f) != null) {
            this.f9858e = obj;
            this.f9859f = null;
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
        return this.f9857d;
    }

    public String g() {
        return this.f9868o;
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
        return this.f9860g;
    }

    public Object n() {
        return this.f9858e;
    }

    public Object o() {
        return this.f9859f;
    }

    public DraweeController p() {
        return this.f9869p;
    }

    public boolean q() {
        return this.f9866m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AbstractDraweeControllerBuilder r() {
        return this;
    }

    public boolean t() {
        return this.f9867n;
    }

    protected void u(com.facebook.drawee.controller.a aVar) {
        Set<ControllerListener> set = this.f9855b;
        if (set != null) {
            for (ControllerListener controllerListener : set) {
                aVar.e(controllerListener);
            }
        }
        Set<z9.b> set2 = this.f9856c;
        if (set2 != null) {
            for (z9.b bVar : set2) {
                aVar.f(bVar);
            }
        }
        ControllerListener controllerListener2 = this.f9863j;
        if (controllerListener2 != null) {
            aVar.e(controllerListener2);
        }
        if (this.f9865l) {
            aVar.e(f9851q);
        }
    }

    protected void v(com.facebook.drawee.controller.a aVar) {
        if (aVar.o() == null) {
            aVar.W(m9.a.c(this.f9854a));
        }
    }

    protected void w(com.facebook.drawee.controller.a aVar) {
        if (!this.f9864k) {
            return;
        }
        aVar.u().d(this.f9864k);
        v(aVar);
    }

    protected abstract com.facebook.drawee.controller.a x();

    /* JADX INFO: Access modifiers changed from: protected */
    public Supplier y(DraweeController draweeController, String str) {
        Supplier supplier;
        Supplier supplier2 = this.f9862i;
        if (supplier2 != null) {
            return supplier2;
        }
        Object obj = this.f9858e;
        if (obj != null) {
            supplier = j(draweeController, str, obj);
        } else {
            Object[] objArr = this.f9860g;
            if (objArr != null) {
                supplier = l(draweeController, str, objArr, this.f9861h);
            } else {
                supplier = null;
            }
        }
        if (supplier != null && this.f9859f != null) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(supplier);
            arrayList.add(j(draweeController, str, this.f9859f));
            supplier = y8.h.c(arrayList, false);
        }
        if (supplier == null) {
            return y8.c.a(f9852r);
        }
        return supplier;
    }

    public AbstractDraweeControllerBuilder z() {
        s();
        return r();
    }
}
