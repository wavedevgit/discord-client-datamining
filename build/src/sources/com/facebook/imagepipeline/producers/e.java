package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.common.Priority;
import com.facebook.imagepipeline.request.ImageRequest;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e implements ProducerContext {

    /* renamed from: y  reason: collision with root package name */
    public static final Set f10611y = o8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f10612z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f10613d;

    /* renamed from: e  reason: collision with root package name */
    private final String f10614e;

    /* renamed from: i  reason: collision with root package name */
    private final String f10615i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f10616o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f10617p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f10618q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f10619r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10620s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f10621t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10622u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f10623v;

    /* renamed from: w  reason: collision with root package name */
    private final List f10624w;

    /* renamed from: x  reason: collision with root package name */
    private final na.r f10625x;

    public e(ImageRequest imageRequest, String str, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this(imageRequest, str, null, null, y0Var, obj, requestLevel, z10, z11, priority, rVar);
    }

    public static void b(List list) {
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ((x0) it.next()).b();
            }
        }
    }

    public static void c(List list) {
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ((x0) it.next()).a();
            }
        }
    }

    public static void d(List list) {
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ((x0) it.next()).d();
            }
        }
    }

    public static void e(List list) {
        if (list != null) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                ((x0) it.next()).c();
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized Priority C() {
        return this.f10621t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel E0() {
        return this.f10618q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest I() {
        return this.f10613d;
    }

    @Override // y9.a
    public void J(Map map) {
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                p((String) entry.getKey(), entry.getValue());
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean P() {
        return this.f10620s;
    }

    @Override // y9.a
    public Object Y(String str) {
        return this.f10619r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f10617p;
    }

    public void f() {
        b(h());
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void g(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f10624w.add(x0Var);
            z10 = this.f10623v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    @Override // y9.a
    public Map getExtras() {
        return this.f10619r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f10614e;
    }

    public synchronized List h() {
        if (this.f10623v) {
            return null;
        }
        this.f10623v = true;
        return new ArrayList(this.f10624w);
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f10622u) {
            return null;
        }
        this.f10622u = z10;
        return new ArrayList(this.f10624w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f10620s) {
            return null;
        }
        this.f10620s = z10;
        return new ArrayList(this.f10624w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public na.r k() {
        return this.f10625x;
    }

    public synchronized List l(Priority priority) {
        if (priority == this.f10621t) {
            return null;
        }
        this.f10621t = priority;
        return new ArrayList(this.f10624w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void m(String str, String str2) {
        this.f10619r.put("origin", str);
        this.f10619r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String n() {
        return this.f10615i;
    }

    @Override // y9.a
    public void p(String str, Object obj) {
        if (f10611y.contains(str)) {
            return;
        }
        this.f10619r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void s(String str) {
        m(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 y() {
        return this.f10616o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean z() {
        return this.f10622u;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this.f10613d = imageRequest;
        this.f10614e = str;
        HashMap hashMap = new HashMap();
        this.f10619r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        J(map);
        this.f10615i = str2;
        this.f10616o = y0Var;
        this.f10617p = obj == null ? f10612z : obj;
        this.f10618q = requestLevel;
        this.f10620s = z10;
        this.f10621t = priority;
        this.f10622u = z11;
        this.f10623v = false;
        this.f10624w = new ArrayList();
        this.f10625x = rVar;
    }
}
