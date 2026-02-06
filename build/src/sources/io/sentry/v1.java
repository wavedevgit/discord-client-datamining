package io.sentry;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.net.InetAddress;
import java.net.URI;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Currency;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicIntegerArray;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class v1 {

    /* renamed from: a  reason: collision with root package name */
    private final Set f28979a = new HashSet();

    /* renamed from: b  reason: collision with root package name */
    private final int f28980b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v1(int i10) {
        this.f28980b = i10;
    }

    private List a(Collection collection, ILogger iLogger) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : collection) {
            arrayList.add(d(obj, iLogger));
        }
        return arrayList;
    }

    private List b(Object[] objArr, ILogger iLogger) {
        ArrayList arrayList = new ArrayList();
        for (Object obj : objArr) {
            arrayList.add(d(obj, iLogger));
        }
        return arrayList;
    }

    private Map c(Map map, ILogger iLogger) {
        HashMap hashMap = new HashMap();
        for (Object obj : map.keySet()) {
            Object obj2 = map.get(obj);
            if (obj2 != null) {
                hashMap.put(obj.toString(), d(obj2, iLogger));
            } else {
                hashMap.put(obj.toString(), null);
            }
        }
        return hashMap;
    }

    public Object d(Object obj, ILogger iLogger) {
        Object obj2;
        if (obj == null) {
            return null;
        }
        if (obj instanceof Character) {
            return obj.toString();
        }
        if (obj instanceof Number) {
            return obj;
        }
        if (obj instanceof Boolean) {
            return obj;
        }
        if (obj instanceof String) {
            return obj;
        }
        if (obj instanceof Locale) {
            return obj.toString();
        }
        if (obj instanceof AtomicIntegerArray) {
            return io.sentry.util.q.a((AtomicIntegerArray) obj);
        }
        if (obj instanceof AtomicBoolean) {
            return Boolean.valueOf(((AtomicBoolean) obj).get());
        }
        if (obj instanceof URI) {
            return obj.toString();
        }
        if (obj instanceof InetAddress) {
            return obj.toString();
        }
        if (obj instanceof UUID) {
            return obj.toString();
        }
        if (obj instanceof Currency) {
            return obj.toString();
        }
        if (obj instanceof Calendar) {
            return io.sentry.util.q.d((Calendar) obj);
        }
        if (obj.getClass().isEnum()) {
            return obj.toString();
        }
        if (this.f28979a.contains(obj)) {
            iLogger.c(SentryLevel.INFO, "Cyclic reference detected. Calling toString() on object.", new Object[0]);
            return obj.toString();
        }
        this.f28979a.add(obj);
        try {
            if (this.f28979a.size() > this.f28980b) {
                this.f28979a.remove(obj);
                iLogger.c(SentryLevel.INFO, "Max depth exceeded. Calling toString() on object.", new Object[0]);
                return obj.toString();
            }
            try {
                if (obj.getClass().isArray()) {
                    obj2 = b((Object[]) obj, iLogger);
                } else if (obj instanceof Collection) {
                    obj2 = a((Collection) obj, iLogger);
                } else if (obj instanceof Map) {
                    obj2 = c((Map) obj, iLogger);
                } else {
                    Map e10 = e(obj, iLogger);
                    if (e10.isEmpty()) {
                        obj2 = obj.toString();
                    } else {
                        obj2 = e10;
                    }
                }
                this.f28979a.remove(obj);
                return obj2;
            } catch (Exception e11) {
                iLogger.b(SentryLevel.INFO, "Not serializing object due to throwing sub-path.", e11);
                this.f28979a.remove(obj);
                return null;
            }
        } catch (Throwable th2) {
            this.f28979a.remove(obj);
            throw th2;
        }
    }

    public Map e(Object obj, ILogger iLogger) {
        Field[] declaredFields = obj.getClass().getDeclaredFields();
        HashMap hashMap = new HashMap();
        for (Field field : declaredFields) {
            if (!Modifier.isTransient(field.getModifiers()) && !Modifier.isStatic(field.getModifiers())) {
                String name = field.getName();
                try {
                    field.setAccessible(true);
                    hashMap.put(name, d(field.get(obj), iLogger));
                    field.setAccessible(false);
                } catch (Exception unused) {
                    iLogger.c(SentryLevel.INFO, "Cannot access field " + name + ".", new Object[0]);
                }
            }
        }
        return hashMap;
    }
}
