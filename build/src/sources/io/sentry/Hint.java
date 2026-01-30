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
    private static final Map f28721h;

    /* renamed from: a  reason: collision with root package name */
    private final Map f28722a = new HashMap();

    /* renamed from: b  reason: collision with root package name */
    private final List f28723b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f28724c = new io.sentry.util.a();

    /* renamed from: d  reason: collision with root package name */
    private b f28725d = null;

    /* renamed from: e  reason: collision with root package name */
    private b f28726e = null;

    /* renamed from: f  reason: collision with root package name */
    private b f28727f = null;

    /* renamed from: g  reason: collision with root package name */
    private v3 f28728g = null;

    static {
        HashMap hashMap = new HashMap();
        f28721h = hashMap;
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
        Class cls2 = (Class) f28721h.get(cls.getCanonicalName());
        if (obj != null && cls.isPrimitive() && cls2 != null && cls2.isInstance(obj)) {
            return true;
        }
        return false;
    }

    public void a(List list) {
        if (list != null) {
            this.f28723b.addAll(list);
        }
    }

    public void b() {
        a1 a10 = this.f28724c.a();
        try {
            Iterator it = this.f28722a.entrySet().iterator();
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
        a1 a10 = this.f28724c.a();
        try {
            Object obj = this.f28722a.get(str);
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
        a1 a10 = this.f28724c.a();
        try {
            Object obj = this.f28722a.get(str);
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
        return new ArrayList(this.f28723b);
    }

    public v3 f() {
        return this.f28728g;
    }

    public b g() {
        return this.f28725d;
    }

    public b h() {
        return this.f28727f;
    }

    public b i() {
        return this.f28726e;
    }

    public void k(String str, Object obj) {
        a1 a10 = this.f28724c.a();
        try {
            this.f28722a.put(str, obj);
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
        this.f28728g = v3Var;
    }

    public void m(b bVar) {
        this.f28725d = bVar;
    }

    public void n(b bVar) {
        this.f28727f = bVar;
    }

    public void o(b bVar) {
        this.f28726e = bVar;
    }
}
