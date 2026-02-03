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
    public static final Set f10327y = o8.g.b(StackTraceHelper.ID_KEY, "uri_source");

    /* renamed from: z  reason: collision with root package name */
    public static final Object f10328z = new Object();

    /* renamed from: d  reason: collision with root package name */
    private final ImageRequest f10329d;

    /* renamed from: e  reason: collision with root package name */
    private final String f10330e;

    /* renamed from: i  reason: collision with root package name */
    private final String f10331i;

    /* renamed from: o  reason: collision with root package name */
    private final y0 f10332o;

    /* renamed from: p  reason: collision with root package name */
    private final Object f10333p;

    /* renamed from: q  reason: collision with root package name */
    private final ImageRequest.RequestLevel f10334q;

    /* renamed from: r  reason: collision with root package name */
    private final Map f10335r;

    /* renamed from: s  reason: collision with root package name */
    private boolean f10336s;

    /* renamed from: t  reason: collision with root package name */
    private Priority f10337t;

    /* renamed from: u  reason: collision with root package name */
    private boolean f10338u;

    /* renamed from: v  reason: collision with root package name */
    private boolean f10339v;

    /* renamed from: w  reason: collision with root package name */
    private final List f10340w;

    /* renamed from: x  reason: collision with root package name */
    private final na.r f10341x;

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
        if (f10327y.contains(str)) {
            return;
        }
        this.f10335r.put(str, obj);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean C0() {
        return this.f10336s;
    }

    @Override // y9.a
    public Object D0(String str) {
        return this.f10335r.get(str);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void E(String str) {
        n(str, "default");
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest.RequestLevel E0() {
        return this.f10334q;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public y0 F() {
        return this.f10332o;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized boolean L() {
        return this.f10338u;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public synchronized Priority N() {
        return this.f10337t;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public ImageRequest V() {
        return this.f10329d;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public Object a() {
        return this.f10333p;
    }

    public void f() {
        b(g());
    }

    public synchronized List g() {
        if (this.f10339v) {
            return null;
        }
        this.f10339v = true;
        return new ArrayList(this.f10340w);
    }

    @Override // y9.a
    public Map getExtras() {
        return this.f10335r;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String getId() {
        return this.f10330e;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void h(x0 x0Var) {
        boolean z10;
        synchronized (this) {
            this.f10340w.add(x0Var);
            z10 = this.f10339v;
        }
        if (z10) {
            x0Var.b();
        }
    }

    public synchronized List i(boolean z10) {
        if (z10 == this.f10338u) {
            return null;
        }
        this.f10338u = z10;
        return new ArrayList(this.f10340w);
    }

    public synchronized List j(boolean z10) {
        if (z10 == this.f10336s) {
            return null;
        }
        this.f10336s = z10;
        return new ArrayList(this.f10340w);
    }

    public synchronized List k(Priority priority) {
        if (priority == this.f10337t) {
            return null;
        }
        this.f10337t = priority;
        return new ArrayList(this.f10340w);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public na.r l() {
        return this.f10341x;
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public void n(String str, String str2) {
        this.f10335r.put("origin", str);
        this.f10335r.put("origin_sub", str2);
    }

    @Override // com.facebook.imagepipeline.producers.ProducerContext
    public String x() {
        return this.f10331i;
    }

    public e(ImageRequest imageRequest, String str, String str2, Map map, y0 y0Var, Object obj, ImageRequest.RequestLevel requestLevel, boolean z10, boolean z11, Priority priority, na.r rVar) {
        this.f10329d = imageRequest;
        this.f10330e = str;
        HashMap hashMap = new HashMap();
        this.f10335r = hashMap;
        hashMap.put(StackTraceHelper.ID_KEY, str);
        hashMap.put("uri_source", imageRequest == null ? "null-request" : imageRequest.getSourceUri());
        A0(map);
        this.f10331i = str2;
        this.f10332o = y0Var;
        this.f10333p = obj == null ? f10328z : obj;
        this.f10334q = requestLevel;
        this.f10336s = z10;
        this.f10337t = priority;
        this.f10338u = z11;
        this.f10339v = false;
        this.f10340w = new ArrayList();
        this.f10341x = rVar;
    }
}
