package dj;

import android.util.Base64;
import android.util.JsonWriter;
import bj.f;
import bj.g;
import java.io.Writer;
import java.util.Collection;
import java.util.Date;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements bj.e, g {

    /* renamed from: a  reason: collision with root package name */
    private e f21742a = null;

    /* renamed from: b  reason: collision with root package name */
    private boolean f21743b = true;

    /* renamed from: c  reason: collision with root package name */
    private final JsonWriter f21744c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f21745d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f21746e;

    /* renamed from: f  reason: collision with root package name */
    private final bj.d f21747f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f21748g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Writer writer, Map map, Map map2, bj.d dVar, boolean z10) {
        this.f21744c = new JsonWriter(writer);
        this.f21745d = map;
        this.f21746e = map2;
        this.f21747f = dVar;
        this.f21748g = z10;
    }

    private boolean o(Object obj) {
        if (obj != null && !obj.getClass().isArray() && !(obj instanceof Collection) && !(obj instanceof Date) && !(obj instanceof Enum) && !(obj instanceof Number)) {
            return false;
        }
        return true;
    }

    private e r(String str, Object obj) {
        t();
        this.f21744c.name(str);
        if (obj == null) {
            this.f21744c.nullValue();
            return this;
        }
        return h(obj, false);
    }

    private e s(String str, Object obj) {
        if (obj == null) {
            return this;
        }
        t();
        this.f21744c.name(str);
        return h(obj, false);
    }

    private void t() {
        if (this.f21743b) {
            e eVar = this.f21742a;
            if (eVar != null) {
                eVar.t();
                this.f21742a.f21743b = false;
                this.f21742a = null;
                this.f21744c.endObject();
                return;
            }
            return;
        }
        throw new IllegalStateException("Parent context used since this context was created. Cannot use this context anymore.");
    }

    @Override // bj.e
    public bj.e b(bj.c cVar, int i10) {
        return j(cVar.b(), i10);
    }

    @Override // bj.e
    public bj.e c(bj.c cVar, long j10) {
        return k(cVar.b(), j10);
    }

    @Override // bj.e
    public bj.e e(bj.c cVar, Object obj) {
        return l(cVar.b(), obj);
    }

    public e f(int i10) {
        t();
        this.f21744c.value(i10);
        return this;
    }

    public e g(long j10) {
        t();
        this.f21744c.value(j10);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e h(Object obj, boolean z10) {
        int[] iArr;
        Class<?> cls;
        if (z10 && o(obj)) {
            if (obj == null) {
                cls = null;
            } else {
                cls = obj.getClass();
            }
            throw new bj.b(String.format("%s cannot be encoded inline", cls));
        } else if (obj == null) {
            this.f21744c.nullValue();
            return this;
        } else if (obj instanceof Number) {
            this.f21744c.value((Number) obj);
            return this;
        } else {
            int i10 = 0;
            if (obj.getClass().isArray()) {
                if (obj instanceof byte[]) {
                    return n((byte[]) obj);
                }
                this.f21744c.beginArray();
                if (obj instanceof int[]) {
                    int length = ((int[]) obj).length;
                    while (i10 < length) {
                        this.f21744c.value(iArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof long[]) {
                    long[] jArr = (long[]) obj;
                    int length2 = jArr.length;
                    while (i10 < length2) {
                        g(jArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof double[]) {
                    double[] dArr = (double[]) obj;
                    int length3 = dArr.length;
                    while (i10 < length3) {
                        this.f21744c.value(dArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof boolean[]) {
                    boolean[] zArr = (boolean[]) obj;
                    int length4 = zArr.length;
                    while (i10 < length4) {
                        this.f21744c.value(zArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof Number[]) {
                    for (Number number : (Number[]) obj) {
                        h(number, false);
                    }
                } else {
                    for (Object obj2 : (Object[]) obj) {
                        h(obj2, false);
                    }
                }
                this.f21744c.endArray();
                return this;
            } else if (obj instanceof Collection) {
                this.f21744c.beginArray();
                for (Object obj3 : (Collection) obj) {
                    h(obj3, false);
                }
                this.f21744c.endArray();
                return this;
            } else if (obj instanceof Map) {
                this.f21744c.beginObject();
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    Object key = entry.getKey();
                    try {
                        l((String) key, entry.getValue());
                    } catch (ClassCastException e10) {
                        throw new bj.b(String.format("Only String keys are currently supported in maps, got %s of type %s instead.", key, key.getClass()), e10);
                    }
                }
                this.f21744c.endObject();
                return this;
            } else {
                bj.d dVar = (bj.d) this.f21745d.get(obj.getClass());
                if (dVar != null) {
                    return q(dVar, obj, z10);
                }
                f fVar = (f) this.f21746e.get(obj.getClass());
                if (fVar != null) {
                    fVar.a(obj, this);
                    return this;
                } else if (obj instanceof Enum) {
                    a(((Enum) obj).name());
                    return this;
                } else {
                    return q(this.f21747f, obj, z10);
                }
            }
        }
    }

    @Override // bj.g
    /* renamed from: i */
    public e a(String str) {
        t();
        this.f21744c.value(str);
        return this;
    }

    public e j(String str, int i10) {
        t();
        this.f21744c.name(str);
        return f(i10);
    }

    public e k(String str, long j10) {
        t();
        this.f21744c.name(str);
        return g(j10);
    }

    public e l(String str, Object obj) {
        if (this.f21748g) {
            return s(str, obj);
        }
        return r(str, obj);
    }

    @Override // bj.g
    /* renamed from: m */
    public e d(boolean z10) {
        t();
        this.f21744c.value(z10);
        return this;
    }

    public e n(byte[] bArr) {
        t();
        if (bArr == null) {
            this.f21744c.nullValue();
            return this;
        }
        this.f21744c.value(Base64.encodeToString(bArr, 2));
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p() {
        t();
        this.f21744c.flush();
    }

    e q(bj.d dVar, Object obj, boolean z10) {
        if (!z10) {
            this.f21744c.beginObject();
        }
        dVar.a(obj, this);
        if (!z10) {
            this.f21744c.endObject();
        }
        return this;
    }
}
