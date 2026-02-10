package bj;

import android.util.Base64;
import android.util.JsonWriter;
import java.io.Writer;
import java.util.Collection;
import java.util.Date;
import java.util.Map;
import zi.f;
import zi.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements zi.e, g {

    /* renamed from: a  reason: collision with root package name */
    private e f7067a = null;

    /* renamed from: b  reason: collision with root package name */
    private boolean f7068b = true;

    /* renamed from: c  reason: collision with root package name */
    private final JsonWriter f7069c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f7070d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f7071e;

    /* renamed from: f  reason: collision with root package name */
    private final zi.d f7072f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f7073g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Writer writer, Map map, Map map2, zi.d dVar, boolean z10) {
        this.f7069c = new JsonWriter(writer);
        this.f7070d = map;
        this.f7071e = map2;
        this.f7072f = dVar;
        this.f7073g = z10;
    }

    private boolean o(Object obj) {
        if (obj != null && !obj.getClass().isArray() && !(obj instanceof Collection) && !(obj instanceof Date) && !(obj instanceof Enum) && !(obj instanceof Number)) {
            return false;
        }
        return true;
    }

    private e r(String str, Object obj) {
        t();
        this.f7069c.name(str);
        if (obj == null) {
            this.f7069c.nullValue();
            return this;
        }
        return h(obj, false);
    }

    private e s(String str, Object obj) {
        if (obj == null) {
            return this;
        }
        t();
        this.f7069c.name(str);
        return h(obj, false);
    }

    private void t() {
        if (this.f7068b) {
            e eVar = this.f7067a;
            if (eVar != null) {
                eVar.t();
                this.f7067a.f7068b = false;
                this.f7067a = null;
                this.f7069c.endObject();
                return;
            }
            return;
        }
        throw new IllegalStateException("Parent context used since this context was created. Cannot use this context anymore.");
    }

    @Override // zi.e
    public zi.e a(zi.c cVar, long j10) {
        return k(cVar.b(), j10);
    }

    @Override // zi.e
    public zi.e b(zi.c cVar, int i10) {
        return j(cVar.b(), i10);
    }

    @Override // zi.e
    public zi.e d(zi.c cVar, Object obj) {
        return l(cVar.b(), obj);
    }

    public e f(int i10) {
        t();
        this.f7069c.value(i10);
        return this;
    }

    public e g(long j10) {
        t();
        this.f7069c.value(j10);
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
            throw new zi.b(String.format("%s cannot be encoded inline", cls));
        } else if (obj == null) {
            this.f7069c.nullValue();
            return this;
        } else if (obj instanceof Number) {
            this.f7069c.value((Number) obj);
            return this;
        } else {
            int i10 = 0;
            if (obj.getClass().isArray()) {
                if (obj instanceof byte[]) {
                    return n((byte[]) obj);
                }
                this.f7069c.beginArray();
                if (obj instanceof int[]) {
                    int length = ((int[]) obj).length;
                    while (i10 < length) {
                        this.f7069c.value(iArr[i10]);
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
                        this.f7069c.value(dArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof boolean[]) {
                    boolean[] zArr = (boolean[]) obj;
                    int length4 = zArr.length;
                    while (i10 < length4) {
                        this.f7069c.value(zArr[i10]);
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
                this.f7069c.endArray();
                return this;
            } else if (obj instanceof Collection) {
                this.f7069c.beginArray();
                for (Object obj3 : (Collection) obj) {
                    h(obj3, false);
                }
                this.f7069c.endArray();
                return this;
            } else if (obj instanceof Map) {
                this.f7069c.beginObject();
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    Object key = entry.getKey();
                    try {
                        l((String) key, entry.getValue());
                    } catch (ClassCastException e10) {
                        throw new zi.b(String.format("Only String keys are currently supported in maps, got %s of type %s instead.", key, key.getClass()), e10);
                    }
                }
                this.f7069c.endObject();
                return this;
            } else {
                zi.d dVar = (zi.d) this.f7070d.get(obj.getClass());
                if (dVar != null) {
                    return q(dVar, obj, z10);
                }
                f fVar = (f) this.f7071e.get(obj.getClass());
                if (fVar != null) {
                    fVar.a(obj, this);
                    return this;
                } else if (obj instanceof Enum) {
                    c(((Enum) obj).name());
                    return this;
                } else {
                    return q(this.f7072f, obj, z10);
                }
            }
        }
    }

    @Override // zi.g
    /* renamed from: i */
    public e c(String str) {
        t();
        this.f7069c.value(str);
        return this;
    }

    public e j(String str, int i10) {
        t();
        this.f7069c.name(str);
        return f(i10);
    }

    public e k(String str, long j10) {
        t();
        this.f7069c.name(str);
        return g(j10);
    }

    public e l(String str, Object obj) {
        if (this.f7073g) {
            return s(str, obj);
        }
        return r(str, obj);
    }

    @Override // zi.g
    /* renamed from: m */
    public e e(boolean z10) {
        t();
        this.f7069c.value(z10);
        return this;
    }

    public e n(byte[] bArr) {
        t();
        if (bArr == null) {
            this.f7069c.nullValue();
            return this;
        }
        this.f7069c.value(Base64.encodeToString(bArr, 2));
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p() {
        t();
        this.f7069c.flush();
    }

    e q(zi.d dVar, Object obj, boolean z10) {
        if (!z10) {
            this.f7069c.beginObject();
        }
        dVar.a(obj, this);
        if (!z10) {
            this.f7069c.endObject();
        }
        return this;
    }
}
