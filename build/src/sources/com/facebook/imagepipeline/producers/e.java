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
    public static final Set f11329y = p8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f11330z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f11331d;

    /* renamed from: e  reason: collision with root package name */
    private final String f11332e;

    /* renamed from: i  reason: collision with root package name */
    private final String f11333i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f11334o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f11335p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f11336q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f11337r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11338s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f11339t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f11340u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f11341v;

    /* renamed from: w  reason: collision with root package name */
    private final List f11342w;

    /* renamed from: x  reason: collision with root package name */
    private final oa.r f11343x;

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
        return this.f11339t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest I() {
        return this.f11331d;
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
        return this.f11338s;
    }

    @Override // z9.a
    public Object Z(String str) {
        return this.f11337r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f11335p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f11341v) {
            return null;
        }
        this.f11341v = true;
        return new ArrayList(this.f11342w);
    }

    @Override // z9.a
    public Map getExtras() {
        return this.f11337r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f11332e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f11342w.add(x0Var);
            z10 = this.f11341v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public oa.r i() {
        return this.f11343x;
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f11340u) {
            return null;
        }
        this.f11340u = z10;
        return new ArrayList(this.f11342w);
    }

    public synchronized List k(boolean z10) {
        if (z10 == this.f11338s) {
            return null;
        }
        this.f11338s = z10;
        return new ArrayList(this.f11342w);
    }

    public synchronized List l(Priority priority) {
        if (priority == this.f11339t) {
            return null;
        }
        this.f11339t = priority;
        return new ArrayList(this.f11342w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void m(String str, String str2) {
        this.f11337r.put("origin", str);
        this.f11337r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String n() {
        return this.f11333i;
    }

    @Override // z9.a
    public void p(String str, Object obj) {
        if (f11329y.contains(str)) {
            return;
        }
        this.f11337r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void s(String str) {
        m(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 y() {
        return this.f11334o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean z() {
        return this.f11340u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel z0() {
        return this.f11336q;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, oa.r rVar) {
        this.f11331d = imageRequest;
        this.f11332e = str;
        HashMap hashMap = new HashMap();
        this.f11337r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        J(map);
        this.f11333i = str2;
        this.f11334o = y0Var;
        this.f11335p = obj == null ? f11330z : obj;
        this.f11336q = requestLevel;
        this.f11338s = z10;
        this.f11339t = priority;
        this.f11340u = z11;
        this.f11341v = false;
        this.f11342w = new ArrayList();
        this.f11343x = rVar;
    }
}
