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
    public static final Set f11730y = o8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f11731z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f11732d;

    /* renamed from: e  reason: collision with root package name */
    private final String f11733e;

    /* renamed from: i  reason: collision with root package name */
    private final String f11734i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f11735o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f11736p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f11737q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f11738r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f11739s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f11740t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f11741u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f11742v;

    /* renamed from: w  reason: collision with root package name */
    private final List f11743w;

    /* renamed from: x  reason: collision with root package name */
    private final na.r f11744x;

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
    public void A0(Map map) {
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                B((String) entry.getKey(), entry.getValue());
            }
        }
    }

    @Override // y9.a
    public void B(String str, Object obj) {
        if (f11730y.contains(str)) {
            return;
        }
        this.f11738r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean C0() {
        return this.f11739s;
    }

    @Override // y9.a
    public Object D0(String str) {
        return this.f11738r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void E(String str) {
        n(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel E0() {
        return this.f11737q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 F() {
        return this.f11735o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean L() {
        return this.f11741u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized Priority N() {
        return this.f11740t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest V() {
        return this.f11732d;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f11736p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f11742v) {
            return null;
        }
        this.f11742v = true;
        return new ArrayList(this.f11743w);
    }

    @Override // y9.a
    public Map getExtras() {
        return this.f11738r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f11733e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f11743w.add(x0Var);
            z10 = this.f11742v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f11741u) {
            return null;
        }
        this.f11741u = z10;
        return new ArrayList(this.f11743w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f11739s) {
            return null;
        }
        this.f11739s = z10;
        return new ArrayList(this.f11743w);
    }

    public synchronized List k(Priority priority) {
        if (priority == this.f11740t) {
            return null;
        }
        this.f11740t = priority;
        return new ArrayList(this.f11743w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public na.r l() {
        return this.f11744x;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void n(String str, String str2) {
        this.f11738r.put("origin", str);
        this.f11738r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String x() {
        return this.f11734i;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this.f11732d = imageRequest;
        this.f11733e = str;
        HashMap hashMap = new HashMap();
        this.f11738r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        A0(map);
        this.f11734i = str2;
        this.f11735o = y0Var;
        this.f11736p = obj == null ? f11731z : obj;
        this.f11737q = requestLevel;
        this.f11739s = z10;
        this.f11740t = priority;
        this.f11741u = z11;
        this.f11742v = false;
        this.f11743w = new ArrayList();
        this.f11744x = rVar;
    }
}
