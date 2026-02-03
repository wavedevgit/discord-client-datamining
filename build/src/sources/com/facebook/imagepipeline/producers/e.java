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
    public static final Set f11359y = o8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f11360z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f11361d;

    /* renamed from: e  reason: collision with root package name */
    private final String f11362e;

    /* renamed from: i  reason: collision with root package name */
    private final String f11363i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f11364o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f11365p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f11366q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f11367r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11368s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f11369t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f11370u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f11371v;

    /* renamed from: w  reason: collision with root package name */
    private final List f11372w;

    /* renamed from: x  reason: collision with root package name */
    private final na.r f11373x;

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

    @Override // y9.a
    public void B(String str, Object obj) {
        if (f11359y.contains(str)) {
            return;
        }
        this.f11367r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean D0() {
        return this.f11368s;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void E(String str) {
        n(str, "default");
    }

    @Override // y9.a
    public Object E0(String str) {
        return this.f11367r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 F() {
        return this.f11364o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel F0() {
        return this.f11366q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean L() {
        return this.f11370u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized Priority N() {
        return this.f11369t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest V() {
        return this.f11361d;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f11365p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f11371v) {
            return null;
        }
        this.f11371v = true;
        return new ArrayList(this.f11372w);
    }

    @Override // y9.a
    public Map getExtras() {
        return this.f11367r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f11362e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f11372w.add(x0Var);
            z10 = this.f11371v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f11370u) {
            return null;
        }
        this.f11370u = z10;
        return new ArrayList(this.f11372w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f11368s) {
            return null;
        }
        this.f11368s = z10;
        return new ArrayList(this.f11372w);
    }

    public synchronized List k(Priority priority) {
        if (priority == this.f11369t) {
            return null;
        }
        this.f11369t = priority;
        return new ArrayList(this.f11372w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public na.r l() {
        return this.f11373x;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void n(String str, String str2) {
        this.f11367r.put("origin", str);
        this.f11367r.put("origin_sub", str2);
    }

    @Override // y9.a
    public void t0(Map map) {
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                B((String) entry.getKey(), entry.getValue());
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String x() {
        return this.f11363i;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this.f11361d = imageRequest;
        this.f11362e = str;
        HashMap hashMap = new HashMap();
        this.f11367r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        t0(map);
        this.f11363i = str2;
        this.f11364o = y0Var;
        this.f11365p = obj == null ? f11360z : obj;
        this.f11366q = requestLevel;
        this.f11368s = z10;
        this.f11369t = priority;
        this.f11370u = z11;
        this.f11371v = false;
        this.f11372w = new ArrayList();
        this.f11373x = rVar;
    }
}
