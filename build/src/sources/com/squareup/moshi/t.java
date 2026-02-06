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
    String f17967p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17968q;

    /* renamed from: r  reason: collision with root package name */
    boolean f17969r;

    /* renamed from: s  reason: collision with root package name */
    boolean f17970s;

    /* renamed from: d  reason: collision with root package name */
    int f17963d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f17964e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f17965i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f17966o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f17971t = -1;

    public static t Y(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public final void A(boolean z10) {
        this.f17968q = z10;
    }

    public final boolean C() {
        return this.f17968q;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int E0() {
        int i10 = this.f17963d;
        if (i10 != 0) {
            return this.f17964e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final void F0() {
        int E0 = E0();
        if (E0 != 5 && E0 != 3) {
            throw new IllegalStateException("Nesting problem.");
        }
        this.f17970s = true;
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
            w1((String) obj);
            return this;
        } else if (obj instanceof Boolean) {
            x1(((Boolean) obj).booleanValue());
            return this;
        } else if (obj instanceof Double) {
            O0(((Double) obj).doubleValue());
            return this;
        } else if (obj instanceof Long) {
            V0(((Long) obj).longValue());
            return this;
        } else if (obj instanceof Number) {
            d1((Number) obj);
            return this;
        } else if (obj == null) {
            P();
            return this;
        } else {
            throw new IllegalArgumentException("Unsupported type: " + obj.getClass().getName());
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void I0(int i10) {
        int[] iArr = this.f17964e;
        int i11 = this.f17963d;
        this.f17963d = i11 + 1;
        iArr[i11] = i10;
    }

    public abstract t J(String str);

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void J0(int i10) {
        this.f17964e[this.f17963d - 1] = i10;
    }

    public void K0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f17967p = str;
    }

    public final void L0(boolean z10) {
        this.f17969r = z10;
    }

    public abstract t O0(double d10);

    public abstract t P();

    public abstract t V0(long j10);

    public abstract t Y0(Boolean bool);

    public abstract t a();

    public abstract t d1(Number number);

    public final int g() {
        int E0 = E0();
        if (E0 != 5 && E0 != 3 && E0 != 2 && E0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f17971t;
        this.f17971t = this.f17963d;
        return i10;
    }

    public abstract t k();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        int i10 = this.f17963d;
        int[] iArr = this.f17964e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f17964e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f17965i;
            this.f17965i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f17966o;
            this.f17966o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f17961u;
                sVar.f17961u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + t() + ": circular reference?");
    }

    public abstract t n();

    public final void p(int i10) {
        this.f17971t = i10;
    }

    public abstract t s();

    public final String t() {
        return n.a(this.f17963d, this.f17964e, this.f17965i, this.f17966o);
    }

    public abstract t w1(String str);

    public abstract t x1(boolean z10);

    public final String y() {
        String str = this.f17967p;
        if (str != null) {
            return str;
        }
        return "";
    }

    public final boolean z() {
        return this.f17969r;
    }
}
