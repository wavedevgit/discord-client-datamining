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
    private final io.sentry.vendor.gson.stream.a f28844d;

    public s1(Reader reader) {
        this.f28844d = new io.sentry.vendor.gson.stream.a(reader);
    }

    @Override // io.sentry.e3
    public void A(boolean z10) {
        this.f28844d.A(z10);
    }

    @Override // io.sentry.e3
    public void D() {
        this.f28844d.D();
    }

    @Override // io.sentry.e3
    public Object G0(ILogger iLogger, m1 m1Var) {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return m1Var.a(this, iLogger);
    }

    @Override // io.sentry.e3
    public Float N1() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return Float.valueOf(nextFloat());
    }

    @Override // io.sentry.e3
    public void S() {
        this.f28844d.S();
    }

    @Override // io.sentry.e3
    public Object U1() {
        return new r1().e(this);
    }

    @Override // io.sentry.e3
    public TimeZone Z(ILogger iLogger) {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        try {
            return DesugarTimeZone.getTimeZone(this.f28844d.e1());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when deserializing TimeZone", e10);
            return null;
        }
    }

    public boolean a() {
        return this.f28844d.s();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f28844d.close();
    }

    @Override // io.sentry.e3
    public String e1() {
        return this.f28844d.e1();
    }

    public void g() {
        this.f28844d.z();
    }

    @Override // io.sentry.e3
    public List g2(ILogger iLogger, m1 m1Var) {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        this.f28844d.x();
        ArrayList arrayList = new ArrayList();
        if (this.f28844d.hasNext()) {
            do {
                try {
                    arrayList.add(m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in list.", e10);
                }
            } while (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.BEGIN_OBJECT);
            this.f28844d.v();
            return arrayList;
        }
        this.f28844d.v();
        return arrayList;
    }

    @Override // io.sentry.e3
    public boolean hasNext() {
        return this.f28844d.hasNext();
    }

    @Override // io.sentry.e3
    public Integer j1() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return Integer.valueOf(this.f28844d.nextInt());
    }

    @Override // io.sentry.e3
    public Long l1() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return Long.valueOf(this.f28844d.nextLong());
    }

    @Override // io.sentry.e3
    public Double n0() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return Double.valueOf(this.f28844d.nextDouble());
    }

    @Override // io.sentry.e3
    public double nextDouble() {
        return this.f28844d.nextDouble();
    }

    @Override // io.sentry.e3
    public float nextFloat() {
        return (float) this.f28844d.nextDouble();
    }

    @Override // io.sentry.e3
    public int nextInt() {
        return this.f28844d.nextInt();
    }

    @Override // io.sentry.e3
    public long nextLong() {
        return this.f28844d.nextLong();
    }

    @Override // io.sentry.e3
    public String o0() {
        return this.f28844d.o0();
    }

    @Override // io.sentry.e3
    public io.sentry.vendor.gson.stream.b peek() {
        return this.f28844d.peek();
    }

    @Override // io.sentry.e3
    public String q1() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return this.f28844d.e1();
    }

    @Override // io.sentry.e3
    public Map t1(ILogger iLogger, m1 m1Var) {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        this.f28844d.u();
        HashMap hashMap = new HashMap();
        if (this.f28844d.hasNext()) {
            while (true) {
                try {
                    hashMap.put(this.f28844d.o0(), m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in map.", e10);
                }
                if (this.f28844d.peek() != io.sentry.vendor.gson.stream.b.BEGIN_OBJECT && this.f28844d.peek() != io.sentry.vendor.gson.stream.b.NAME) {
                    break;
                }
            }
        }
        this.f28844d.D();
        return hashMap;
    }

    @Override // io.sentry.e3
    public void u() {
        this.f28844d.u();
    }

    @Override // io.sentry.e3
    public Date u0(ILogger iLogger) {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return e3.R0(this.f28844d.e1(), iLogger);
    }

    @Override // io.sentry.e3
    public void u1(ILogger iLogger, Map map, String str) {
        try {
            map.put(str, U1());
        } catch (Exception e10) {
            iLogger.a(SentryLevel.ERROR, e10, "Error deserializing unknown key: %s", str);
        }
    }

    @Override // io.sentry.e3
    public void v() {
        this.f28844d.v();
    }

    @Override // io.sentry.e3
    public void x() {
        this.f28844d.x();
    }

    @Override // io.sentry.e3
    public Boolean y0() {
        if (this.f28844d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f28844d.z();
            return null;
        }
        return Boolean.valueOf(this.f28844d.s());
    }
}
