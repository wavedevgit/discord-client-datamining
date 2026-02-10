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
    String f18856p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18857q;

    /* renamed from: r  reason: collision with root package name */
    boolean f18858r;

    /* renamed from: s  reason: collision with root package name */
    boolean f18859s;

    /* renamed from: d  reason: collision with root package name */
    int f18852d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f18853e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f18854i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f18855o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f18860t = -1;

    public static t Z(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public final void A(boolean z10) {
        this.f18857q = z10;
    }

    public final boolean C() {
        return this.f18857q;
    }

    public final void C0() {
        int z02 = z0();
        if (z02 != 5 && z02 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        this.f18859s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void E0(int i10) {
        int[] iArr = this.f18853e;
        int i11 = this.f18852d;
        this.f18852d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void F0(int i10) {
        this.f18853e[this.f18852d - 1] = i10;
    }

    public void G0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f18856p = str;
    }

    public final void H0(boolean z10) {
        this.f18858r = z10;
    }

    public final t I(Object obj) {
        String str;
        if (obj instanceof Map) {
            i();
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
                J((String) key);
                I(entry.getValue());
            }
            s();
            return this;
        } else if (obj instanceof List) {
            a();
            for (Object obj2 : (List) obj) {
                I(obj2);
            }
            n();
            return this;
        } else if (obj instanceof String) {
            V0((String) obj);
            return this;
        } else if (obj instanceof Boolean) {
            Z0(((Boolean) obj).booleanValue());
            return this;
        } else if (obj instanceof Double) {
            L0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            N0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            S0((Number) obj);
            return this;
        } else if (obj == null) {
            Q();
            return this;
        } else {
            throw new IllegalArgumentException("Unsupported type: " + obj.getClass().getName());
        }
    }

    public abstract t J(String str);

    public abstract t L0(double d10);

    public abstract t N0(long j10);

    public abstract t O0(Boolean bool);

    public abstract t Q();

    public abstract t S0(Number number);

    public abstract t V0(String str);

    public abstract t Z0(boolean z10);

    public abstract t a();

    public final int h() {
        int z02 = z0();
        if (z02 != 5 && z02 != 3 && z02 != 2 && z02 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f18860t;
        this.f18860t = this.f18852d;
        return i10;
    }

    public abstract t i();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        int i10 = this.f18852d;
        int[] iArr = this.f18853e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f18853e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f18854i;
            this.f18854i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f18855o;
            this.f18855o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f18850u;
                sVar.f18850u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + t() + ": circular reference?");
    }

    public abstract t n();

    public final void p(int i10) {
        this.f18860t = i10;
    }

    public abstract t s();

    public final String t() {
        return n.a(this.f18852d, this.f18853e, this.f18854i, this.f18855o);
    }

    public final String y() {
        String str = this.f18856p;
        if (str != null) {
            return str;
        }
        return "";
    }

    public final boolean z() {
        return this.f18858r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int z0() {
        int i10 = this.f18852d;
        if (i10 != 0) {
            return this.f18853e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }
}
