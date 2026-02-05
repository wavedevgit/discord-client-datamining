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
    private final io.sentry.vendor.gson.stream.a f29700d;

    public s1(Reader reader) {
        this.f29700d = new io.sentry.vendor.gson.stream.a(reader);
    }

    @Override // io.sentry.e3
    public Object G0(ILogger iLogger, m1 m1Var) {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return m1Var.a(this, iLogger);
    }

    @Override // io.sentry.e3
    public Float O1() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return Float.valueOf(nextFloat());
    }

    @Override // io.sentry.e3
    public void P() {
        this.f29700d.P();
    }

    @Override // io.sentry.e3
    public Object V1() {
        return new r1().e(this);
    }

    @Override // io.sentry.e3
    public TimeZone X(ILogger iLogger) {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        try {
            return DesugarTimeZone.getTimeZone(this.f29700d.f1());
        } catch (Exception e10) {
            iLogger.b(SentryLevel.ERROR, "Error when deserializing TimeZone", e10);
            return null;
        }
    }

    public boolean a() {
        return this.f29700d.E();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f29700d.close();
    }

    @Override // io.sentry.e3
    public String f1() {
        return this.f29700d.f1();
    }

    @Override // io.sentry.e3
    public List g2(ILogger iLogger, m1 m1Var) {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        this.f29700d.v();
        ArrayList arrayList = new ArrayList();
        if (this.f29700d.hasNext()) {
            do {
                try {
                    arrayList.add(m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in list.", e10);
                }
            } while (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.BEGIN_OBJECT);
            this.f29700d.t();
            return arrayList;
        }
        this.f29700d.t();
        return arrayList;
    }

    public void h() {
        this.f29700d.L();
    }

    @Override // io.sentry.e3
    public boolean hasNext() {
        return this.f29700d.hasNext();
    }

    @Override // io.sentry.e3
    public Integer k1() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return Integer.valueOf(this.f29700d.nextInt());
    }

    @Override // io.sentry.e3
    public Double l0() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return Double.valueOf(this.f29700d.nextDouble());
    }

    @Override // io.sentry.e3
    public String m0() {
        return this.f29700d.m0();
    }

    @Override // io.sentry.e3
    public Long m1() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return Long.valueOf(this.f29700d.nextLong());
    }

    @Override // io.sentry.e3
    public double nextDouble() {
        return this.f29700d.nextDouble();
    }

    @Override // io.sentry.e3
    public float nextFloat() {
        return (float) this.f29700d.nextDouble();
    }

    @Override // io.sentry.e3
    public int nextInt() {
        return this.f29700d.nextInt();
    }

    @Override // io.sentry.e3
    public long nextLong() {
        return this.f29700d.nextLong();
    }

    @Override // io.sentry.e3
    public io.sentry.vendor.gson.stream.b peek() {
        return this.f29700d.peek();
    }

    @Override // io.sentry.e3
    public String r1() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return this.f29700d.f1();
    }

    @Override // io.sentry.e3
    public void s() {
        this.f29700d.s();
    }

    @Override // io.sentry.e3
    public Date s0(ILogger iLogger) {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return e3.Q0(this.f29700d.f1(), iLogger);
    }

    @Override // io.sentry.e3
    public void t() {
        this.f29700d.t();
    }

    @Override // io.sentry.e3
    public Map u1(ILogger iLogger, m1 m1Var) {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        this.f29700d.s();
        HashMap hashMap = new HashMap();
        if (this.f29700d.hasNext()) {
            while (true) {
                try {
                    hashMap.put(this.f29700d.m0(), m1Var.a(this, iLogger));
                } catch (Exception e10) {
                    iLogger.b(SentryLevel.WARNING, "Failed to deserialize object in map.", e10);
                }
                if (this.f29700d.peek() != io.sentry.vendor.gson.stream.b.BEGIN_OBJECT && this.f29700d.peek() != io.sentry.vendor.gson.stream.b.NAME) {
                    break;
                }
            }
        }
        this.f29700d.z();
        return hashMap;
    }

    @Override // io.sentry.e3
    public void v() {
        this.f29700d.v();
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
    public void w(boolean z10) {
        this.f29700d.w(z10);
    }

    @Override // io.sentry.e3
    public Boolean w0() {
        if (this.f29700d.peek() == io.sentry.vendor.gson.stream.b.NULL) {
            this.f29700d.L();
            return null;
        }
        return Boolean.valueOf(this.f29700d.E());
    }

    @Override // io.sentry.e3
    public void z() {
        this.f29700d.z();
    }
}
