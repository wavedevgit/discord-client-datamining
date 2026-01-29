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
    String f18966p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18967q;

    /* renamed from: r  reason: collision with root package name */
    boolean f18968r;

    /* renamed from: s  reason: collision with root package name */
    boolean f18969s;

    /* renamed from: d  reason: collision with root package name */
    int f18962d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f18963e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f18964i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f18965o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f18970t = -1;

    public static t D0(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public abstract t A0(String str);

    public final void B(int i10) {
        this.f18970t = i10;
    }

    public abstract t C0();

    public abstract t E();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int E0() {
        int i10 = this.f18962d;
        if (i10 != 0) {
            return this.f18963e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final String F() {
        String str = this.f18966p;
        if (str != null) {
            return str;
        }
        return "";
    }

    public final void F0() {
        int E0 = E0();
        if (E0 != 5 && E0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        this.f18969s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void I0(int i10) {
        int[] iArr = this.f18963e;
        int i11 = this.f18962d;
        this.f18962d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J0(int i10) {
        this.f18963e[this.f18962d - 1] = i10;
    }

    public final boolean L() {
        return this.f18968r;
    }

    public void M0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f18966p = str;
    }

    public final boolean N() {
        return this.f18967q;
    }

    public final void R0(boolean z10) {
        this.f18968r = z10;
    }

    public abstract t U0(double d10);

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
                A0((String) key);
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
            U0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            X0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            d1((Number) obj);
            return this;
        } else if (obj == null) {
            C0();
            return this;
        } else {
            throw new IllegalArgumentException("Unsupported type: " + obj.getClass().getName());
        }
    }

    public abstract t X0(long j10);

    public abstract t Y0(Boolean bool);

    public abstract t a();

    public abstract t d1(Number number);

    public final int h() {
        int E0 = E0();
        if (E0 != 5 && E0 != 3 && E0 != 2 && E0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f18970t;
        this.f18970t = this.f18962d;
        return i10;
    }

    public abstract t l();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean n() {
        int i10 = this.f18962d;
        int[] iArr = this.f18963e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f18963e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f18964i;
            this.f18964i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f18965o;
            this.f18965o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f18960u;
                sVar.f18960u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + q() + ": circular reference?");
    }

    public final String q() {
        return n.a(this.f18962d, this.f18963e, this.f18964i, this.f18965o);
    }

    public final void v(boolean z10) {
        this.f18967q = z10;
    }

    public abstract t x();

    public abstract t x1(String str);

    public abstract t y1(boolean z10);
}
