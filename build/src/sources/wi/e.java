package wi;

import android.util.Base64;
import android.util.JsonWriter;
import java.io.Writer;
import java.util.Collection;
import java.util.Date;
import java.util.Map;
import ui.f;
import ui.g;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements ui.e, g {

    /* renamed from: a  reason: collision with root package name */
    private e f52455a = null;

    /* renamed from: b  reason: collision with root package name */
    private boolean f52456b = true;

    /* renamed from: c  reason: collision with root package name */
    private final JsonWriter f52457c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f52458d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f52459e;

    /* renamed from: f  reason: collision with root package name */
    private final ui.d f52460f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f52461g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Writer writer, Map map, Map map2, ui.d dVar, boolean z10) {
        this.f52457c = new JsonWriter(writer);
        this.f52458d = map;
        this.f52459e = map2;
        this.f52460f = dVar;
        this.f52461g = z10;
    }

    private boolean o(Object obj) {
        if (obj != null && !obj.getClass().isArray() && !(obj instanceof Collection) && !(obj instanceof Date) && !(obj instanceof Enum) && !(obj instanceof Number)) {
            return false;
        }
        return true;
    }

    private e r(String str, Object obj) {
        t();
        this.f52457c.name(str);
        if (obj == null) {
            this.f52457c.nullValue();
            return this;
        }
        return h(obj, false);
    }

    private e s(String str, Object obj) {
        if (obj == null) {
            return this;
        }
        t();
        this.f52457c.name(str);
        return h(obj, false);
    }

    private void t() {
        if (this.f52456b) {
            e eVar = this.f52455a;
            if (eVar != null) {
                eVar.t();
                this.f52455a.f52456b = false;
                this.f52455a = null;
                this.f52457c.endObject();
                return;
            }
            return;
        }
        throw new IllegalStateException("Parent context used since this context was created. Cannot use this context anymore.");
    }

    @Override // ui.e
    public ui.e b(ui.c cVar, Object obj) {
        return l(cVar.b(), obj);
    }

    @Override // ui.e
    public ui.e d(ui.c cVar, long j10) {
        return k(cVar.b(), j10);
    }

    @Override // ui.e
    public ui.e e(ui.c cVar, int i10) {
        return j(cVar.b(), i10);
    }

    public e f(int i10) {
        t();
        this.f52457c.value(i10);
        return this;
    }

    public e g(long j10) {
        t();
        this.f52457c.value(j10);
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
            throw new ui.b(String.format("%s cannot be encoded inline", cls));
        } else if (obj == null) {
            this.f52457c.nullValue();
            return this;
        } else if (obj instanceof Number) {
            this.f52457c.value((Number) obj);
            return this;
        } else {
            int i10 = 0;
            if (obj.getClass().isArray()) {
                if (obj instanceof byte[]) {
                    return n((byte[]) obj);
                }
                this.f52457c.beginArray();
                if (obj instanceof int[]) {
                    int length = ((int[]) obj).length;
                    while (i10 < length) {
                        this.f52457c.value(iArr[i10]);
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
                        this.f52457c.value(dArr[i10]);
                        i10++;
                    }
                } else if (obj instanceof boolean[]) {
                    boolean[] zArr = (boolean[]) obj;
                    int length4 = zArr.length;
                    while (i10 < length4) {
                        this.f52457c.value(zArr[i10]);
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
                this.f52457c.endArray();
                return this;
            } else if (obj instanceof Collection) {
                this.f52457c.beginArray();
                for (Object obj3 : (Collection) obj) {
                    h(obj3, false);
                }
                this.f52457c.endArray();
                return this;
            } else if (obj instanceof Map) {
                this.f52457c.beginObject();
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    Object key = entry.getKey();
                    try {
                        l((String) key, entry.getValue());
                    } catch (ClassCastException e10) {
                        throw new ui.b(String.format("Only String keys are currently supported in maps, got %s of type %s instead.", key, key.getClass()), e10);
                    }
                }
                this.f52457c.endObject();
                return this;
            } else {
                ui.d dVar = (ui.d) this.f52458d.get(obj.getClass());
                if (dVar != null) {
                    return q(dVar, obj, z10);
                }
                f fVar = (f) this.f52459e.get(obj.getClass());
                if (fVar != null) {
                    fVar.a(obj, this);
                    return this;
                } else if (obj instanceof Enum) {
                    a(((Enum) obj).name());
                    return this;
                } else {
                    return q(this.f52460f, obj, z10);
                }
            }
        }
    }

    @Override // ui.g
    /* renamed from: i */
    public e a(String str) {
        t();
        this.f52457c.value(str);
        return this;
    }

    public e j(String str, int i10) {
        t();
        this.f52457c.name(str);
        return f(i10);
    }

    public e k(String str, long j10) {
        t();
        this.f52457c.name(str);
        return g(j10);
    }

    public e l(String str, Object obj) {
        if (this.f52461g) {
            return s(str, obj);
        }
        return r(str, obj);
    }

    @Override // ui.g
    /* renamed from: m */
    public e c(boolean z10) {
        t();
        this.f52457c.value(z10);
        return this;
    }

    public e n(byte[] bArr) {
        t();
        if (bArr == null) {
            this.f52457c.nullValue();
            return this;
        }
        this.f52457c.value(Base64.encodeToString(bArr, 2));
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void p() {
        t();
        this.f52457c.flush();
    }

    e q(ui.d dVar, Object obj, boolean z10) {
        if (!z10) {
            this.f52457c.beginObject();
        }
        dVar.a(obj, this);
        if (!z10) {
            this.f52457c.endObject();
        }
        return this;
    }
}
