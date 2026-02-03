package com.squareup.moshi;

import java.io.Closeable;
import java.io.Flushable;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class t implements Closeable, Flushable {

    /* renamed from: p  reason: collision with root package name */
    String f18599p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18600q;

    /* renamed from: r  reason: collision with root package name */
    boolean f18601r;

    /* renamed from: s  reason: collision with root package name */
    boolean f18602s;

    /* renamed from: d  reason: collision with root package name */
    int f18595d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f18596e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f18597i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f18598o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f18603t = -1;

    public static t E0(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public final void B(int i10) {
        this.f18603t = i10;
    }

    public abstract t D0();

    public abstract t E();

    public final String F() {
        String str = this.f18599p;
        if (str != null) {
            return str;
        }
        return "";
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int F0() {
        int i10 = this.f18595d;
        if (i10 != 0) {
            return this.f18596e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final void G0() {
        int F0 = F0();
        if (F0 != 5 && F0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        this.f18602s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J0(int i10) {
        int[] iArr = this.f18596e;
        int i11 = this.f18595d;
        this.f18595d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K0(int i10) {
        this.f18596e[this.f18595d - 1] = i10;
    }

    public final boolean L() {
        return this.f18601r;
    }

    public void L0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f18599p = str;
    }

    public final boolean N() {
        return this.f18600q;
    }

    public final void O0(boolean z10) {
        this.f18601r = z10;
    }

    public final t V(Object obj) {
        String str;
        if (obj instanceof Map) {
            l();
            for (Map.Entry entry : ((Map) obj).entrySet()) {
                Object key = entry.getKey();
                if (!(key instanceof String)) {
                    if (key == null) {
                        str = "Map keys must be non-null";
                    } else {
                        str = "Map keys must be of type String: " + key.getClass().getName();
                    }
                    throw new IllegalArgumentException(str);
                }
                t0((String) key);
                V(entry.getValue());
            }
            E();
            return this;
        } else if (obj instanceof List) {
            a();
            for (Object obj2 : (List) obj) {
                V(obj2);
            }
            x();
            return this;
        } else if (obj instanceof String) {
            x1((String) obj);
            return this;
        } else if (obj instanceof Boolean) {
            y1(((Boolean) obj).booleanValue());
            return this;
        } else if (obj instanceof Double) {
            V0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            Y0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            e1((Number) obj);
            return this;
        } else if (obj == null) {
            D0();
            return this;
        } else {
            throw new IllegalArgumentException("Unsupported type: " + obj.getClass().getName());
        }
    }

    public abstract t V0(double d10);

    public abstract t Y0(long j10);

    public abstract t Z0(Boolean bool);

    public abstract t a();

    public abstract t e1(Number number);

    public final int h() {
        int F0 = F0();
        if (F0 != 5 && F0 != 3 && F0 != 2 && F0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f18603t;
        this.f18603t = this.f18595d;
        return i10;
    }

    public abstract t l();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean n() {
        int i10 = this.f18595d;
        int[] iArr = this.f18596e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f18596e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f18597i;
            this.f18597i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f18598o;
            this.f18598o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f18593u;
                sVar.f18593u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + q() + ": circular reference?");
    }

    public final String q() {
        return n.a(this.f18595d, this.f18596e, this.f18597i, this.f18598o);
    }

    public abstract t t0(String str);

    public final void v(boolean z10) {
        this.f18600q = z10;
    }

    public abstract t x();

    public abstract t x1(String str);

    public abstract t y1(boolean z10);
}
