package io.sentry.util;

import io.sentry.ILogger;
import io.sentry.SentryLevel;
import io.sentry.e3;
import io.sentry.m1;
import j$.util.DesugarTimeZone;
import java.io.IOException;
import java.util.AbstractMap;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Date;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w implements e3 {

    /* renamed from: d  reason: collision with root package name */
    private final Deque f30409d;

    public w(Map map) {
        ArrayDeque arrayDeque = new ArrayDeque();
        this.f30409d = arrayDeque;
        arrayDeque.addLast(new AbstractMap.SimpleEntry(null, map));
    }

    private Object h() {
        try {
            return l(null, null);
        } catch (Exception e10) {
            throw new IOException(e10);
        }
    }

    private Object l(ILogger iLogger, m1 m1Var) {
        Map.Entry entry = (Map.Entry) this.f30409d.peekLast();
        if (entry == null) {
            return null;
        }
        Object value = entry.getValue();
        if (m1Var != null && iLogger != null) {
            return m1Var.a(this, iLogger);
        }
        this.f30409d.removeLast();
        return value;
    }

    @Override // io.sentry.e3
    public Object H0(ILogger iLogger, m1 m1Var) {
        return l(iLogger, m1Var);
    }

    @Override // io.sentry.e3
    public Float O1() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return Float.valueOf(((Number) h10).floatValue());
        }
        return null;
    }

    @Override // io.sentry.e3
    public void P() {
    }

    @Override // io.sentry.e3
    public Object V1() {
        return h();
    }

    @Override // io.sentry.e3
    public TimeZone W(ILogger iLogger) {
        String r12 = r1();
        if (r12 != null) {
            return DesugarTimeZone.getTimeZone(r12);
        }
        return null;
    }

    public void a() {
        if (h() == null) {
            return;
        }
        throw new IOException("Expected null but was " + peek());
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f30409d.clear();
    }

    @Override // io.sentry.e3
    public String f1() {
        String str = (String) h();
        if (str != null) {
            return str;
        }
        throw new IOException("Expected string");
    }

    @Override // io.sentry.e3
    public List g2(ILogger iLogger, m1 m1Var) {
        if (peek() == io.sentry.vendor.gson.stream.b.NULL) {
            a();
            return null;
        }
        try {
            u();
            ArrayList arrayList = new ArrayList();
            if (hasNext()) {
                do {
                    try {
                        arrayList.add(m1Var.a(this, iLogger));
                    } catch (Exception e10) {
                        iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in list.", e10);
                    }
                } while (peek() == io.sentry.vendor.gson.stream.b.BEGIN_OBJECT);
            }
            s();
            return arrayList;
        } catch (Exception e11) {
            throw new IOException(e11);
        }
    }

    @Override // io.sentry.e3
    public boolean hasNext() {
        return !this.f30409d.isEmpty();
    }

    @Override // io.sentry.e3
    public Integer k1() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return Integer.valueOf(((Number) h10).intValue());
        }
        return null;
    }

    @Override // io.sentry.e3
    public Double l0() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return Double.valueOf(((Number) h10).doubleValue());
        }
        return null;
    }

    @Override // io.sentry.e3
    public String m0() {
        Map.Entry entry = (Map.Entry) this.f30409d.peekLast();
        if (entry != null && entry.getKey() != null) {
            return (String) entry.getKey();
        }
        throw new IOException("Expected a name but was " + peek());
    }

    @Override // io.sentry.e3
    public Long m1() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return Long.valueOf(((Number) h10).longValue());
        }
        return null;
    }

    @Override // io.sentry.e3
    public double nextDouble() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return ((Number) h10).doubleValue();
        }
        throw new IOException("Expected double");
    }

    @Override // io.sentry.e3
    public float nextFloat() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return ((Number) h10).floatValue();
        }
        throw new IOException("Expected float");
    }

    @Override // io.sentry.e3
    public int nextInt() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return ((Number) h10).intValue();
        }
        throw new IOException("Expected int");
    }

    @Override // io.sentry.e3
    public long nextLong() {
        Object h10 = h();
        if (h10 instanceof Number) {
            return ((Number) h10).longValue();
        }
        throw new IOException("Expected long");
    }

    @Override // io.sentry.e3
    public io.sentry.vendor.gson.stream.b peek() {
        if (this.f30409d.isEmpty()) {
            return io.sentry.vendor.gson.stream.b.END_DOCUMENT;
        }
        Map.Entry entry = (Map.Entry) this.f30409d.peekLast();
        if (entry == null) {
            return io.sentry.vendor.gson.stream.b.END_DOCUMENT;
        }
        if (entry.getKey() != null) {
            return io.sentry.vendor.gson.stream.b.NAME;
        }
        Object value = entry.getValue();
        if (value instanceof Map) {
            return io.sentry.vendor.gson.stream.b.BEGIN_OBJECT;
        }
        if (value instanceof List) {
            return io.sentry.vendor.gson.stream.b.BEGIN_ARRAY;
        }
        if (value instanceof String) {
            return io.sentry.vendor.gson.stream.b.STRING;
        }
        if (value instanceof Number) {
            return io.sentry.vendor.gson.stream.b.NUMBER;
        }
        if (value instanceof Boolean) {
            return io.sentry.vendor.gson.stream.b.BOOLEAN;
        }
        if (value instanceof io.sentry.vendor.gson.stream.b) {
            return (io.sentry.vendor.gson.stream.b) value;
        }
        return io.sentry.vendor.gson.stream.b.END_DOCUMENT;
    }

    @Override // io.sentry.e3
    public void r() {
        Map.Entry entry = (Map.Entry) this.f30409d.removeLast();
        if (entry != null) {
            Object value = entry.getValue();
            if (value instanceof Map) {
                this.f30409d.addLast(new AbstractMap.SimpleEntry(null, io.sentry.vendor.gson.stream.b.END_OBJECT));
                for (Map.Entry entry2 : ((Map) value).entrySet()) {
                    this.f30409d.addLast(entry2);
                }
                return;
            }
            throw new IOException("Current token is not an object");
        }
        throw new IOException("No more entries");
    }

    @Override // io.sentry.e3
    public String r1() {
        return (String) h();
    }

    @Override // io.sentry.e3
    public void s() {
        if (this.f30409d.size() > 1) {
            this.f30409d.removeLast();
        }
    }

    @Override // io.sentry.e3
    public Date s0(ILogger iLogger) {
        return e3.R0(r1(), iLogger);
    }

    @Override // io.sentry.e3
    public void u() {
        Map.Entry entry = (Map.Entry) this.f30409d.removeLast();
        if (entry != null) {
            Object value = entry.getValue();
            if (value instanceof List) {
                this.f30409d.addLast(new AbstractMap.SimpleEntry(null, io.sentry.vendor.gson.stream.b.END_ARRAY));
                List list = (List) value;
                for (int size = list.size() - 1; size >= 0; size--) {
                    this.f30409d.addLast(new AbstractMap.SimpleEntry(null, list.get(size)));
                }
                return;
            }
            throw new IOException("Current token is not an object");
        }
        throw new IOException("No more entries");
    }

    @Override // io.sentry.e3
    public Map u1(ILogger iLogger, m1 m1Var) {
        if (peek() == io.sentry.vendor.gson.stream.b.NULL) {
            a();
            return null;
        }
        try {
            r();
            HashMap hashMap = new HashMap();
            if (hasNext()) {
                while (true) {
                    try {
                        hashMap.put(m0(), m1Var.a(this, iLogger));
                    } catch (Exception e10) {
                        iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in map.", e10);
                    }
                    if (peek() != io.sentry.vendor.gson.stream.b.BEGIN_OBJECT && peek() != io.sentry.vendor.gson.stream.b.NAME) {
                        break;
                    }
                }
            }
            y();
            return hashMap;
        } catch (Exception e11) {
            throw new IOException(e11);
        }
    }

    @Override // io.sentry.e3
    public void v(boolean z10) {
    }

    @Override // io.sentry.e3
    public void v1(ILogger iLogger, Map map, String str) {
        try {
            map.put(str, V1());
        } catch (Exception e10) {
            iLogger.a(SentryLevel.ERROR, e10, "Error deserializing unknown key: %s", str);
        }
    }

    @Override // io.sentry.e3
    public Boolean x0() {
        return (Boolean) h();
    }

    @Override // io.sentry.e3
    public void y() {
        if (this.f30409d.size() > 1) {
            this.f30409d.removeLast();
        }
    }
}
