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
    private static final ControllerListener f10970q = new a();

    /* renamed from: r  reason: collision with root package name */
    private static final NullPointerException f10971r = new NullPointerException("No image request was specified!");

    /* renamed from: s  reason: collision with root package name */
    private static final AtomicLong f10972s = new AtomicLong();

    /* renamed from: a  reason: collision with root package name */
    private final Context f10973a;

    /* renamed from: b  reason: collision with root package name */
    private final Set f10974b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f10975c;

    /* renamed from: d  reason: collision with root package name */
    private Object f10976d;

    /* renamed from: e  reason: collision with root package name */
    private Object f10977e;

    /* renamed from: f  reason: collision with root package name */
    private Object f10978f;

    /* renamed from: g  reason: collision with root package name */
    private Object[] f10979g;

    /* renamed from: h  reason: collision with root package name */
    private boolean f10980h;

    /* renamed from: i  reason: collision with root package name */
    private Supplier f10981i;

    /* renamed from: j  reason: collision with root package name */
    private ControllerListener f10982j;

    /* renamed from: k  reason: collision with root package name */
    private boolean f10983k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f10984l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f10985m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f10986n = false;

    /* renamed from: o  reason: collision with root package name */
    private String f10987o;

    /* renamed from: p  reason: collision with root package name */
    private DraweeController f10988p;

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
        final /* synthetic */ DraweeController f10989a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ String f10990b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ Object f10991c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Object f10992d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ c f10993e;

        b(DraweeController draweeController, String str, Object obj, Object obj2, c cVar) {
            this.f10989a = draweeController;
            this.f10990b = str;
            this.f10991c = obj;
            this.f10992d = obj2;
            this.f10993e = cVar;
        }

        @Override // com.facebook.common.internal.Supplier
        /* renamed from: a */
        public DataSource get() {
            return AbstractDraweeControllerBuilder.this.i(this.f10989a, this.f10990b, this.f10991c, this.f10992d, this.f10993e);
        }

        public String toString() {
            return h.b(this).b("request", this.f10991c.toString()).toString();
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
        this.f10973a = context;
        this.f10974b = set;
        this.f10975c = set2;
        s();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public static String e() {
        return String.valueOf(f10972s.getAndIncrement());
    }

    private void s() {
        this.f10976d = null;
        this.f10977e = null;
        this.f10978f = null;
        this.f10979g = null;
        this.f10980h = true;
        this.f10982j = null;
        this.f10983k = false;
        this.f10984l = false;
        this.f10986n = false;
        this.f10988p = null;
        this.f10987o = null;
    }

    public AbstractDraweeControllerBuilder A(boolean z10) {
        this.f10984l = z10;
        return r();
    }

    public AbstractDraweeControllerBuilder B(Object obj) {
        this.f10976d = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder C(String str) {
        this.f10987o = str;
        return r();
    }

    public AbstractDraweeControllerBuilder D(ControllerListener controllerListener) {
        this.f10982j = controllerListener;
        return r();
    }

    public AbstractDraweeControllerBuilder E(Object obj) {
        this.f10977e = obj;
        return r();
    }

    public AbstractDraweeControllerBuilder F(Object obj) {
        this.f10978f = obj;
        return r();
    }

    @Override // n9.b
    /* renamed from: G */
    public AbstractDraweeControllerBuilder b(DraweeController draweeController) {
        this.f10988p = draweeController;
        return r();
    }

    protected void H() {
        boolean z10;
        boolean z11 = true;
        if (this.f10979g != null && this.f10977e != null) {
            z10 = false;
        } else {
            z10 = true;
        }
        j.j(z10, "Cannot specify both ImageRequest and FirstAvailableImageRequests!");
        if (this.f10981i != null && (this.f10979g != null || this.f10977e != null || this.f10978f != null)) {
            z11 = false;
        }
        j.j(z11, "Cannot specify DataSourceSupplier with other ImageRequests! Use one or the other.");
    }

    @Override // n9.b
    /* renamed from: c */
    public com.facebook.drawee.controller.a build() {
        Object obj;
        H();
        if (this.f10977e == null && this.f10979g == null && (obj = this.f10978f) != null) {
            this.f10977e = obj;
            this.f10978f = null;
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
        return this.f10976d;
    }

    public String g() {
        return this.f10987o;
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
        return this.f10979g;
    }

    public Object n() {
        return this.f10977e;
    }

    public Object o() {
        return this.f10978f;
    }

    public DraweeController p() {
        return this.f10988p;
    }

    public boolean q() {
        return this.f10985m;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final AbstractDraweeControllerBuilder r() {
        return this;
    }

    public boolean t() {
        return this.f10986n;
    }

    protected void u(com.facebook.drawee.controller.a aVar) {
        Set<ControllerListener> set = this.f10974b;
        if (set != null) {
            for (ControllerListener controllerListener : set) {
                aVar.e(controllerListener);
            }
        }
        Set<z9.b> set2 = this.f10975c;
        if (set2 != null) {
            for (z9.b bVar : set2) {
                aVar.f(bVar);
            }
        }
        ControllerListener controllerListener2 = this.f10982j;
        if (controllerListener2 != null) {
            aVar.e(controllerListener2);
        }
        if (this.f10984l) {
            aVar.e(f10970q);
        }
    }

    protected void v(com.facebook.drawee.controller.a aVar) {
        if (aVar.o() == null) {
            aVar.W(m9.a.c(this.f10973a));
        }
    }

    protected void w(com.facebook.drawee.controller.a aVar) {
        if (!this.f10983k) {
            return;
        }
        aVar.u().d(this.f10983k);
        v(aVar);
    }

    protected abstract com.facebook.drawee.controller.a x();

    /* JADX INFO: Access modifiers changed from: protected */
    public Supplier y(DraweeController draweeController, String str) {
        Supplier supplier;
        Supplier supplier2 = this.f10981i;
        if (supplier2 != null) {
            return supplier2;
        }
        Object obj = this.f10977e;
        if (obj != null) {
            supplier = j(draweeController, str, obj);
        } else {
            Object[] objArr = this.f10979g;
            if (objArr != null) {
                supplier = l(draweeController, str, objArr, this.f10980h);
            } else {
                supplier = null;
            }
        }
        if (supplier != null && this.f10978f != null) {
            ArrayList arrayList = new ArrayList(2);
            arrayList.add(supplier);
            arrayList.add(j(draweeController, str, this.f10978f));
            supplier = y8.h.c(arrayList, false);
        }
        if (supplier == null) {
            return y8.c.a(f10971r);
        }
        return supplier;
    }

    public AbstractDraweeControllerBuilder z() {
        s();
        return r();
    }
}
