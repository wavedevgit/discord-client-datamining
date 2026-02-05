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
    String f17987p;

    /* renamed from: q  reason: collision with root package name */
    boolean f17988q;

    /* renamed from: r  reason: collision with root package name */
    boolean f17989r;

    /* renamed from: s  reason: collision with root package name */
    boolean f17990s;

    /* renamed from: d  reason: collision with root package name */
    int f17983d = 0;

    /* renamed from: e  reason: collision with root package name */
    int[] f17984e = new int[32];

    /* renamed from: i  reason: collision with root package name */
    String[] f17985i = new String[32];

    /* renamed from: o  reason: collision with root package name */
    int[] f17986o = new int[32];

    /* renamed from: t  reason: collision with root package name */
    int f17991t = -1;

    public static t D0(BufferedSink bufferedSink) {
        return new p(bufferedSink);
    }

    public abstract t C0();

    public abstract t E();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final int E0() {
        int i10 = this.f17983d;
        if (i10 != 0) {
            return this.f17984e[i10 - 1];
        }
        throw new IllegalStateException("JsonWriter is closed.");
    }

    public final String F() {
        String str = this.f17987p;
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
        this.f17990s = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void I0(int i10) {
        int[] iArr = this.f17984e;
        int i11 = this.f17983d;
        this.f17983d = i11 + 1;
        iArr[i11] = i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void K0(int i10) {
        this.f17984e[this.f17983d - 1] = i10;
    }

    public final boolean L() {
        return this.f17989r;
    }

    public final boolean N() {
        return this.f17988q;
    }

    public void N0(String str) {
        if (str.isEmpty()) {
            str = null;
        }
        this.f17987p = str;
    }

    public final void S0(boolean z10) {
        this.f17989r = z10;
    }

    public final t V(Object obj) {
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
                W((String) key);
                V(entry.getValue());
            }
            E();
            return this;
        } else if (obj instanceof List) {
            a();
            for (Object obj2 : (List) obj) {
                V(obj2);
            }
            o();
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

    public abstract t W(String str);

    public abstract t Y0(long j10);

    public abstract t Z0(Boolean bool);

    public abstract t a();

    public abstract t e1(Number number);

    public final int h() {
        int E0 = E0();
        if (E0 != 5 && E0 != 3 && E0 != 2 && E0 != 1) {
            throw new IllegalStateException("Nesting problem.");
        }
        int i10 = this.f17991t;
        this.f17991t = this.f17983d;
        return i10;
    }

    public abstract t k();

    /* JADX INFO: Access modifiers changed from: package-private */
    public final boolean m() {
        int i10 = this.f17983d;
        int[] iArr = this.f17984e;
        if (i10 != iArr.length) {
            return false;
        }
        if (i10 != 256) {
            this.f17984e = Arrays.copyOf(iArr, iArr.length * 2);
            String[] strArr = this.f17985i;
            this.f17985i = (String[]) Arrays.copyOf(strArr, strArr.length * 2);
            int[] iArr2 = this.f17986o;
            this.f17986o = Arrays.copyOf(iArr2, iArr2.length * 2);
            if (this instanceof s) {
                s sVar = (s) this;
                Object[] objArr = sVar.f17981u;
                sVar.f17981u = Arrays.copyOf(objArr, objArr.length * 2);
                return true;
            }
            return true;
        }
        throw new j("Nesting too deep at " + r() + ": circular reference?");
    }

    public abstract t o();

    public final String r() {
        return n.a(this.f17983d, this.f17984e, this.f17985i, this.f17986o);
    }

    public final void w(boolean z10) {
        this.f17988q = z10;
    }

    public abstract t x1(String str);

    public final void y(int i10) {
        this.f17991t = i10;
    }

    public abstract t y1(boolean z10);
}
