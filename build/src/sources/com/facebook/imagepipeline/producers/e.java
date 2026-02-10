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
    public static final Set f11328y = p8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f11329z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f11330d;

    /* renamed from: e  reason: collision with root package name */
    private final String f11331e;

    /* renamed from: i  reason: collision with root package name */
    private final String f11332i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f11333o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f11334p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f11335q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f11336r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11337s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f11338t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f11339u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f11340v;

    /* renamed from: w  reason: collision with root package name */
    private final List f11341w;

    /* renamed from: x  reason: collision with root package name */
    private final oa.r f11342x;

    public e(ImageRequest imageRequest, String str, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, oa.r rVar) {
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
        return this.f11338t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest I() {
        return this.f11330d;
    }

    @Override // z9.a
    public void J(Map map) {
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                p((String) entry.getKey(), entry.getValue());
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean Q() {
        return this.f11337s;
    }

    @Override // z9.a
    public Object Z(String str) {
        return this.f11336r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f11334p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f11340v) {
            return null;
        }
        this.f11340v = true;
        return new ArrayList(this.f11341w);
    }

    @Override // z9.a
    public Map getExtras() {
        return this.f11336r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f11331e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f11341w.add(x0Var);
            z10 = this.f11340v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public oa.r i() {
        return this.f11342x;
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f11339u) {
            return null;
        }
        this.f11339u = z10;
        return new ArrayList(this.f11341w);
    }

    public synchronized List k(boolean z10) {
        if (z10 == this.f11337s) {
            return null;
        }
        this.f11337s = z10;
        return new ArrayList(this.f11341w);
    }

    public synchronized List l(Priority priority) {
        if (priority == this.f11338t) {
            return null;
        }
        this.f11338t = priority;
        return new ArrayList(this.f11341w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void m(String str, String str2) {
        this.f11336r.put("origin", str);
        this.f11336r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String n() {
        return this.f11332i;
    }

    @Override // z9.a
    public void p(String str, Object obj) {
        if (f11328y.contains(str)) {
            return;
        }
        this.f11336r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void s(String str) {
        m(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 y() {
        return this.f11333o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean z() {
        return this.f11339u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel z0() {
        return this.f11335q;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, oa.r rVar) {
        this.f11330d = imageRequest;
        this.f11331e = str;
        HashMap hashMap = new HashMap();
        this.f11336r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        J(map);
        this.f11332i = str2;
        this.f11333o = y0Var;
        this.f11334p = obj == null ? f11329z : obj;
        this.f11335q = requestLevel;
        this.f11337s = z10;
        this.f11338t = priority;
        this.f11339u = z11;
        this.f11340v = false;
        this.f11341w = new ArrayList();
        this.f11342x = rVar;
    }
}
