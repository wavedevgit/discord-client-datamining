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
    public static final Set f10751y = p8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f10752z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f10753d;

    /* renamed from: e  reason: collision with root package name */
    private final String f10754e;

    /* renamed from: i  reason: collision with root package name */
    private final String f10755i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f10756o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f10757p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f10758q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f10759r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10760s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f10761t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10762u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f10763v;

    /* renamed from: w  reason: collision with root package name */
    private final List f10764w;

    /* renamed from: x  reason: collision with root package name */
    private final oa.r f10765x;

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
        return this.f10761t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel C0() {
        return this.f10758q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest I() {
        return this.f10753d;
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
        return this.f10760s;
    }

    @Override // z9.a
    public Object Z(String str) {
        return this.f10759r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f10757p;
    }

    public void f() {
        b(h());
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void g(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f10764w.add(x0Var);
            z10 = this.f10763v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    @Override // z9.a
    public Map getExtras() {
        return this.f10759r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f10754e;
    }

    public synchronized List h() {
        if (this.f10763v) {
            return null;
        }
        this.f10763v = true;
        return new ArrayList(this.f10764w);
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f10762u) {
            return null;
        }
        this.f10762u = z10;
        return new ArrayList(this.f10764w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f10760s) {
            return null;
        }
        this.f10760s = z10;
        return new ArrayList(this.f10764w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public oa.r k() {
        return this.f10765x;
    }

    public synchronized List l(Priority priority) {
        if (priority == this.f10761t) {
            return null;
        }
        this.f10761t = priority;
        return new ArrayList(this.f10764w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void m(String str, String str2) {
        this.f10759r.put("origin", str);
        this.f10759r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String n() {
        return this.f10755i;
    }

    @Override // z9.a
    public void p(String str, Object obj) {
        if (f10751y.contains(str)) {
            return;
        }
        this.f10759r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void s(String str) {
        m(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 y() {
        return this.f10756o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean z() {
        return this.f10762u;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, oa.r rVar) {
        this.f10753d = imageRequest;
        this.f10754e = str;
        HashMap hashMap = new HashMap();
        this.f10759r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        J(map);
        this.f10755i = str2;
        this.f10756o = y0Var;
        this.f10757p = obj == null ? f10752z : obj;
        this.f10758q = requestLevel;
        this.f10760s = z10;
        this.f10761t = priority;
        this.f10762u = z11;
        this.f10763v = false;
        this.f10764w = new ArrayList();
        this.f10765x = rVar;
    }
}
