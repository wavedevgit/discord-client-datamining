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
    private final io.sentry.vendor.gson.stream.a f29092d;

    public s1(Reader reader) {
        this.f29092d = new io.sentry.vendor.gson.stream.a(reader);
    }

    @Override // io.sentry.e3
    public void A(boolean z10) {
        this.f29092d.A(z10);
    }

    @Override // io.sentry.e3
    public void D() {
        this.f29092d.D();
    }

    @Override // io.sentry.e3
    public Object E0(ILogger iLogger, m1 m1Var) {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return m1Var.a(this, iLogger);
    }

    @Override // io.sentry.e3
    public Float M1() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return Float.valueOf(nextFloat());
    }

    @Override // io.sentry.e3
    public void T() {
        this.f29092d.T();
    }

    @Override // io.sentry.e3
    public Object T1() {
        return new r1().e(this);
    }

    public boolean a() {
        return this.f29092d.s();
    }

    @Override // io.sentry.e3
    public TimeZone b0(ILogger iLogger) {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        try {
            return DesugarTimeZone.getTimeZone(this.f29092d.b1());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when deserializing TimeZone", e10);
            return null;
        }
    }

    @Override // io.sentry.e3
    public String b1() {
        return this.f29092d.b1();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29092d.close();
    }

    @Override // io.sentry.e3
    public List f2(ILogger iLogger, m1 m1Var) {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        this.f29092d.x();
        ArrayList arrayList = new ArrayList();
        if (this.f29092d.hasNext()) {
            do {
                try {
                    arrayList.add(m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in list.", e10);
                }
            } while (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.BEGIN_OBJECT);
            this.f29092d.v();
            return arrayList;
        }
        this.f29092d.v();
        return arrayList;
    }

    public void g() {
        this.f29092d.z();
    }

    @Override // io.sentry.e3
    public Integer g1() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return Integer.valueOf(this.f29092d.nextInt());
    }

    @Override // io.sentry.e3
    public boolean hasNext() {
        return this.f29092d.hasNext();
    }

    @Override // io.sentry.e3
    public Long i1() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return Long.valueOf(this.f29092d.nextLong());
    }

    @Override // io.sentry.e3
    public String m1() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return this.f29092d.b1();
    }

    @Override // io.sentry.e3
    public Double n0() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return Double.valueOf(this.f29092d.nextDouble());
    }

    @Override // io.sentry.e3
    public double nextDouble() {
        return this.f29092d.nextDouble();
    }

    @Override // io.sentry.e3
    public float nextFloat() {
        return (float) this.f29092d.nextDouble();
    }

    @Override // io.sentry.e3
    public int nextInt() {
        return this.f29092d.nextInt();
    }

    @Override // io.sentry.e3
    public long nextLong() {
        return this.f29092d.nextLong();
    }

    @Override // io.sentry.e3
    public String o0() {
        return this.f29092d.o0();
    }

    @Override // io.sentry.e3
    public Map o1(ILogger iLogger, m1 m1Var) {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        this.f29092d.u();
        HashMap hashMap = new HashMap();
        if (this.f29092d.hasNext()) {
            while (true) {
                try {
                    hashMap.put(this.f29092d.o0(), m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in map.", e10);
                }
                if (this.f29092d.peek() != io.sentry.vendor.gson.stream.b.BEGIN_OBJECT && this.f29092d.peek() != io.sentry.vendor.gson.stream.b.NAME) {
                    break;
                }
            }
        }
        this.f29092d.D();
        return hashMap;
    }

    @Override // io.sentry.e3
    public void p1(ILogger iLogger, Map map, String str) {
        try {
            map.put(str, T1());
        } catch (Exception e10) {
            iLogger.a(SentryLevel.ERROR, e10, "Error deserializing unknown key: %s", str);
        }
    }

    @Override // io.sentry.e3
    public io.sentry.vendor.gson.stream.b peek() {
        return this.f29092d.peek();
    }

    @Override // io.sentry.e3
    public Date s0(ILogger iLogger) {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return e3.M0(this.f29092d.b1(), iLogger);
    }

    @Override // io.sentry.e3
    public void u() {
        this.f29092d.u();
    }

    @Override // io.sentry.e3
    public void v() {
        this.f29092d.v();
    }

    @Override // io.sentry.e3
    public Boolean w0() {
        if (this.f29092d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29092d.z();
            return null;
        }
        return Boolean.valueOf(this.f29092d.s());
    }

    @Override // io.sentry.e3
    public void x() {
        this.f29092d.x();
    }
}
