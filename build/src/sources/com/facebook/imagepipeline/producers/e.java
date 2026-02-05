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
    public static final Set f10712y = o8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f10713z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f10714d;

    /* renamed from: e  reason: collision with root package name */
    private final String f10715e;

    /* renamed from: i  reason: collision with root package name */
    private final String f10716i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f10717o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f10718p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f10719q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f10720r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10721s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f10722t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10723u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f10724v;

    /* renamed from: w  reason: collision with root package name */
    private final List f10725w;

    /* renamed from: x  reason: collision with root package name */
    private final na.r f10726x;

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
    public synchronized boolean C0() {
        return this.f10721s;
    }

    @Override // y9.a
    public Object D0(String str) {
        return this.f10720r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void E(String str) {
        m(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel E0() {
        return this.f10719q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 F() {
        return this.f10717o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean L() {
        return this.f10723u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized Priority N() {
        return this.f10722t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest V() {
        return this.f10714d;
    }

    @Override // y9.a
    public void W(Map map) {
        if (map != null) {
            for (Map.Entry entry : map.entrySet()) {
                y((String) entry.getKey(), entry.getValue());
            }
        }
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f10718p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f10724v) {
            return null;
        }
        this.f10724v = true;
        return new ArrayList(this.f10725w);
    }

    @Override // y9.a
    public Map getExtras() {
        return this.f10720r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f10715e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f10725w.add(x0Var);
            z10 = this.f10724v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f10723u) {
            return null;
        }
        this.f10723u = z10;
        return new ArrayList(this.f10725w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f10721s) {
            return null;
        }
        this.f10721s = z10;
        return new ArrayList(this.f10725w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public na.r k() {
        return this.f10726x;
    }

    public synchronized List l(Priority priority) {
        if (priority == this.f10722t) {
            return null;
        }
        this.f10722t = priority;
        return new ArrayList(this.f10725w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void m(String str, String str2) {
        this.f10720r.put("origin", str);
        this.f10720r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String o() {
        return this.f10716i;
    }

    @Override // y9.a
    public void y(String str, Object obj) {
        if (f10712y.contains(str)) {
            return;
        }
        this.f10720r.put(str, obj);
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this.f10714d = imageRequest;
        this.f10715e = str;
        HashMap hashMap = new HashMap();
        this.f10720r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        W(map);
        this.f10716i = str2;
        this.f10717o = y0Var;
        this.f10718p = obj == null ? f10713z : obj;
        this.f10719q = requestLevel;
        this.f10721s = z10;
        this.f10722t = priority;
        this.f10723u = z11;
        this.f10724v = false;
        this.f10725w = new ArrayList();
        this.f10726x = rVar;
    }
}
