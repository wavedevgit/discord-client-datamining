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
    String f18107p;

    /* renamed from: q  reason: collision with root package name */
    boolean f18108q;

    /* renamed from: r  reason: collision with root package name */
    boolean f18109r;

    /* renamed from: s  reason: collision with root package name */
    boolean f18110s;

    /* renamed from: d  reason: collision with root package name */
    int f18103d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f18104e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f18105i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f18106o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f18111t = -1;

    public static t Z(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public final void A(boolean z10) {
        this.f18108q = z10;
    }

    public final boolean C() {
        return this.f18108q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int C0() {
        int i10 = this.f18103d;
        if (i10 != 0) {
            return this.f18104e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final void D0() {
        int C0 = C0();
        if (C0 != 5 && C0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        this.f18110s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void G0(int i10) {
        int[] iArr = this.f18104e;
        int i11 = this.f18103d;
        this.f18103d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void H0(int i10) {
        this.f18104e[this.f18103d - 1] = i10;
    }

    public final t I(Object obj) {
        String str;
        if (obj instanceof Map) {
            k();
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
            r1((String) obj);
            return this;
        } else if (obj instanceof Boolean) {
            s1(((Boolean) obj).booleanValue());
            return this;
        } else if (obj instanceof Double) {
            R0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            V0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            a1((Number) obj);
            return this;
        } else if (obj == null) {
            Q();
            return this;
        } else {
            throw new IllegalArgumentException("Unsupported type: " + obj.getClass().getName());
        }
    }

    public abstract t J(String str);

    public void J0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f18107p = str;
    }

    public final void O0(boolean z10) {
        this.f18109r = z10;
    }

    public abstract t Q();

    public abstract t R0(double d10);

    public abstract t V0(long j10);

    public abstract t W0(Boolean bool);

    public abstract t a();

    public abstract t a1(Number number);

    public final int g() {
        int C0 = C0();
        if (C0 != 5 && C0 != 3 && C0 != 2 && C0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f18111t;
        this.f18111t = this.f18103d;
        return i10;
    }

    public abstract t k();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        int i10 = this.f18103d;
        int[] iArr = this.f18104e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f18104e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f18105i;
            this.f18105i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f18106o;
            this.f18106o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f18101u;
                sVar.f18101u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + t() + ": circular reference?");
    }

    public abstract t n();

    public final void p(int i10) {
        this.f18111t = i10;
    }

    public abstract t r1(String str);

    public abstract t s();

    public abstract t s1(boolean z10);

    public final String t() {
        return n.a(this.f18103d, this.f18104e, this.f18105i, this.f18106o);
    }

    public final String y() {
        String str = this.f18107p;
        if (str != null) {
            return str;
        }
        return "";
    }

    public final boolean z() {
        return this.f18109r;
    }
}
