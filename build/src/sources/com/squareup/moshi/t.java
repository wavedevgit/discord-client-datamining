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
    String f17581p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17582q;

    /* renamed from: r  reason: collision with root package name */
    boolean f17583r;

    /* renamed from: s  reason: collision with root package name */
    boolean f17584s;

    /* renamed from: d  reason: collision with root package name */
    int f17577d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f17578e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f17579i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f17580o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f17585t = -1;

    public static t D0(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public abstract t A0(String str);

    public final void B(int i10) {
        this.f17585t = i10;
    }

    public abstract t C0();

    public abstract t E();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int E0() {
        int i10 = this.f17577d;
        if (i10 != 0) {
            return this.f17578e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final String F() {
        String str = this.f17581p;
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
        this.f17584s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void I0(int i10) {
        int[] iArr = this.f17578e;
        int i11 = this.f17577d;
        this.f17577d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J0(int i10) {
        this.f17578e[this.f17577d - 1] = i10;
    }

    public final boolean L() {
        return this.f17583r;
    }

    public void M0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f17581p = str;
    }

    public final boolean N() {
        return this.f17582q;
    }

    public final void R0(boolean z10) {
        this.f17583r = z10;
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
            V0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            Y0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            e1((Number) obj);
            return this;
        } else if (obj == null) {
            C0();
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
        int E0 = E0();
        if (E0 != 5 && E0 != 3 && E0 != 2 && E0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f17585t;
        this.f17585t = this.f17577d;
        return i10;
    }

    public abstract t l();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean n() {
        int i10 = this.f17577d;
        int[] iArr = this.f17578e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f17578e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f17579i;
            this.f17579i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f17580o;
            this.f17580o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f17575u;
                sVar.f17575u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + q() + ": circular reference?");
    }

    public final String q() {
        return n.a(this.f17577d, this.f17578e, this.f17579i, this.f17580o);
    }

    public final void v(boolean z10) {
        this.f17582q = z10;
    }

    public abstract t x();

    public abstract t x1(String str);

    public abstract t y1(boolean z10);
}
