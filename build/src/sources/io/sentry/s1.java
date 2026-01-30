package io.sentry;

import j$.util.DesugarTimeZone;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s1 implements e3 {

    /* renamed from: d  reason: collision with root package name */
    private final io.sentry.vendor.gson.stream.a f30715d;

    public s1(Reader reader) {
        this.f30715d = new io.sentry.vendor.gson.stream.a(reader);
    }

    @Override // io.sentry.e3
    public Object G0(ILogger iLogger, m1 m1Var) {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return m1Var.a(this, iLogger);
    }

    @Override // io.sentry.e3
    public Float O1() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return Float.valueOf(nextFloat());
    }

    @Override // io.sentry.e3
    public void P() {
        this.f30715d.P();
    }

    @Override // io.sentry.e3
    public Object V1() {
        return new r1().e(this);
    }

    @Override // io.sentry.e3
    public TimeZone W(ILogger iLogger) {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        try {
            return DesugarTimeZone.getTimeZone(this.f30715d.e1());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when deserializing TimeZone", e10);
            return null;
        }
    }

    public boolean a() {
        return this.f30715d.E();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f30715d.close();
    }

    @Override // io.sentry.e3
    public String e1() {
        return this.f30715d.e1();
    }

    @Override // io.sentry.e3
    public List g2(ILogger iLogger, m1 m1Var) {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        this.f30715d.u();
        ArrayList arrayList = new ArrayList();
        if (this.f30715d.hasNext()) {
            do {
                try {
                    arrayList.add(m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in list.", e10);
                }
            } while (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.BEGIN_OBJECT);
            this.f30715d.s();
            return arrayList;
        }
        this.f30715d.s();
        return arrayList;
    }

    public void h() {
        this.f30715d.L();
    }

    @Override // io.sentry.e3
    public boolean hasNext() {
        return this.f30715d.hasNext();
    }

    @Override // io.sentry.e3
    public Integer j1() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return Integer.valueOf(this.f30715d.nextInt());
    }

    @Override // io.sentry.e3
    public Double k0() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return Double.valueOf(this.f30715d.nextDouble());
    }

    @Override // io.sentry.e3
    public String l0() {
        return this.f30715d.l0();
    }

    @Override // io.sentry.e3
    public Long m1() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return Long.valueOf(this.f30715d.nextLong());
    }

    @Override // io.sentry.e3
    public double nextDouble() {
        return this.f30715d.nextDouble();
    }

    @Override // io.sentry.e3
    public float nextFloat() {
        return (float) this.f30715d.nextDouble();
    }

    @Override // io.sentry.e3
    public int nextInt() {
        return this.f30715d.nextInt();
    }

    @Override // io.sentry.e3
    public long nextLong() {
        return this.f30715d.nextLong();
    }

    @Override // io.sentry.e3
    public io.sentry.vendor.gson.stream.b peek() {
        return this.f30715d.peek();
    }

    @Override // io.sentry.e3
    public void r() {
        this.f30715d.r();
    }

    @Override // io.sentry.e3
    public Date r0(ILogger iLogger) {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return e3.P0(this.f30715d.e1(), iLogger);
    }

    @Override // io.sentry.e3
    public String r1() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return this.f30715d.e1();
    }

    @Override // io.sentry.e3
    public void s() {
        this.f30715d.s();
    }

    @Override // io.sentry.e3
    public void u() {
        this.f30715d.u();
    }

    @Override // io.sentry.e3
    public Map u1(ILogger iLogger, m1 m1Var) {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        this.f30715d.r();
        HashMap hashMap = new HashMap();
        if (this.f30715d.hasNext()) {
            while (true) {
                try {
                    hashMap.put(this.f30715d.l0(), m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in map.", e10);
                }
                if (this.f30715d.peek() != io.sentry.vendor.gson.stream.b.BEGIN_OBJECT && this.f30715d.peek() != io.sentry.vendor.gson.stream.b.NAME) {
                    break;
                }
            }
        }
        this.f30715d.y();
        return hashMap;
    }

    @Override // io.sentry.e3
    public void v(boolean z10) {
        this.f30715d.v(z10);
    }

    @Override // io.sentry.e3
    public Boolean v0() {
        if (this.f30715d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f30715d.L();
            return null;
        }
        return Boolean.valueOf(this.f30715d.E());
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
    public void y() {
        this.f30715d.y();
    }
}
