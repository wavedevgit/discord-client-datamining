package x0;

import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends AtomicInteger {
    public a(int i10) {
        super(i10);
    }

    public byte a() {
        return (byte) intValue();
    }

    public /* bridge */ double b() {
        return super.doubleValue();
    }

    @Override // java.lang.Number
    public final /* bridge */ byte byteValue() {
        return a();
    }

    public /* bridge */ float c() {
        return super.floatValue();
    }

    public /* bridge */ int d() {
        return super.intValue();
    }

    @Override // java.util.concurrent.atomic.AtomicInteger, java.lang.Number
    public final /* bridge */ double doubleValue() {
        return b();
    }

    public /* bridge */ long e() {
        return super.longValue();
    }

    public short f() {
        return (short) intValue();
    }

    @Override // java.util.concurrent.atomic.AtomicInteger, java.lang.Number
    public final /* bridge */ float floatValue() {
        return c();
    }

    @Override // java.util.concurrent.atomic.AtomicInteger, java.lang.Number
    public final /* bridge */ int intValue() {
        return d();
    }

    @Override // java.util.concurrent.atomic.AtomicInteger, java.lang.Number
    public final /* bridge */ long longValue() {
        return e();
    }

    @Override // java.lang.Number
    public final /* bridge */ short shortValue() {
        return f();
    }
}
