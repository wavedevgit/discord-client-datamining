package io.sentry;

import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Hint {

    /* renamed from: h  reason: collision with root package name */
    private static final Map f26850h;

    /* renamed from: a  reason: collision with root package name */
    private final Map f26851a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f26852b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f26853c = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private b f26854d = null;

    /* renamed from: e  reason: collision with root package name */
    private b f26855e = null;

    /* renamed from: f  reason: collision with root package name */
    private b f26856f = null;

    /* renamed from: g  reason: collision with root package name */
    private v3 f26857g = null;

    static {
        HashMap hashMap = new HashMap();
        f26850h = hashMap;
        hashMap.put(InquiryField.BooleanField.TYPE, Boolean.class);
        hashMap.put("char", Character.class);
        hashMap.put("byte", Byte.class);
        hashMap.put("short", Short.class);
        hashMap.put("int", Integer.class);
        hashMap.put("long", Long.class);
        hashMap.put(InquiryField.FloatField.TYPE, Float.class);
        hashMap.put("double", Double.class);
    }

    private boolean j(Object obj, Class cls) {
        Class cls2 = (Class) f26850h.get(cls.getCanonicalName());
        if (obj != null && cls.isPrimitive() && cls2 != null && cls2.isInstance(obj)) {
            return true;
        }
        return false;
    }

    public void a(List list) {
        if (list != null) {
            this.f26852b.addAll(list);
        }
    }

    public void b() {
        a1 a10 = this.f26853c.a();
        try {
            Iterator it = this.f26851a.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry entry = (Map.Entry) it.next();
                if (entry.getKey() != null && ((String) entry.getKey()).startsWith("sentry:")) {
                }
                it.remove();
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public Object c(String str) {
        a1 a10 = this.f26853c.a();
        try {
            Object obj = this.f26851a.get(str);
            if (a10 != null) {
                a10.close();
            }
            return obj;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public Object d(String str, Class cls) {
        a1 a10 = this.f26853c.a();
        try {
            Object obj = this.f26851a.get(str);
            if (cls.isInstance(obj)) {
                if (a10 != null) {
                    a10.close();
                    return obj;
                }
            } else if (j(obj, cls)) {
                if (a10 != null) {
                    a10.close();
                }
            } else {
                if (a10 != null) {
                    a10.close();
                }
                return null;
            }
            return obj;
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public List e() {
        return new ArrayList(this.f26852b);
    }

    public v3 f() {
        return this.f26857g;
    }

    public b g() {
        return this.f26854d;
    }

    public b h() {
        return this.f26856f;
    }

    public b i() {
        return this.f26855e;
    }

    public void k(String str, Object obj) {
        a1 a10 = this.f26853c.a();
        try {
            this.f26851a.put(str, obj);
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }

    public void l(v3 v3Var) {
        this.f26857g = v3Var;
    }

    public void m(b bVar) {
        this.f26854d = bVar;
    }

    public void n(b bVar) {
        this.f26856f = bVar;
    }

    public void o(b bVar) {
        this.f26855e = bVar;
    }
}
