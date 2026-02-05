package aj;

import aj.d;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements xi.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f659f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f660g = xi.c.a("key").b(aj.a.b().c(1).a()).a();

    /* renamed from: h  reason: collision with root package name */
    private static final xi.c f661h = xi.c.a("value").b(aj.a.b().c(2).a()).a();

    /* renamed from: i  reason: collision with root package name */
    private static final xi.d f662i = new xi.d() { // from class: aj.e
        @Override // xi.d
        public final void a(Object obj, Object obj2) {
            f.a((Map.Entry) obj, (xi.e) obj2);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f663a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f664b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f665c;

    /* renamed from: d  reason: collision with root package name */
    private final xi.d f666d;

    /* renamed from: e  reason: collision with root package name */
    private final i f667e = new i(this);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f668a;

        static {
            int[] iArr = new int[d.a.values().length];
            f668a = iArr;
            try {
                iArr[d.a.DEFAULT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f668a[d.a.SIGNED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f668a[d.a.FIXED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(OutputStream outputStream, Map map, Map map2, xi.d dVar) {
        this.f663a = outputStream;
        this.f664b = map;
        this.f665c = map2;
        this.f666d = dVar;
    }

    public static /* synthetic */ void a(Map.Entry entry, xi.e eVar) {
        eVar.d(f660g, entry.getKey());
        eVar.d(f661h, entry.getValue());
    }

    private static ByteBuffer m(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private long n(xi.d dVar, Object obj) {
        b bVar = new b();
        try {
            OutputStream outputStream = this.f663a;
            this.f663a = bVar;
            dVar.a(obj, this);
            this.f663a = outputStream;
            long a10 = bVar.a();
            bVar.close();
            return a10;
        } catch (Throwable th2) {
            try {
                bVar.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private f o(xi.d dVar, xi.c cVar, Object obj, boolean z10) {
        long n10 = n(dVar, obj);
        if (z10 && n10 == 0) {
            return this;
        }
        t((s(cVar) << 3) | 2);
        u(n10);
        dVar.a(obj, this);
        return this;
    }

    private f p(xi.f fVar, xi.c cVar, Object obj, boolean z10) {
        this.f667e.c(cVar, z10);
        fVar.a(obj, this.f667e);
        return this;
    }

    private static d r(xi.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar;
        }
        throw new xi.b("Field has no @Protobuf config");
    }

    private static int s(xi.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar.tag();
        }
        throw new xi.b("Field has no @Protobuf config");
    }

    private void t(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f663a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f663a.write(i10 & 127);
    }

    private void u(long j10) {
        while (((-128) & j10) != 0) {
            this.f663a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f663a.write(((int) j10) & 127);
    }

    @Override // xi.e
    public xi.e d(xi.c cVar, Object obj) {
        return l(cVar, obj, true);
    }

    @Override // xi.e
    /* renamed from: e */
    public f b(xi.c cVar, int i10) {
        return f(cVar, i10, true);
    }

    f f(xi.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            d r10 = r(cVar);
            int i11 = a.f668a[r10.intEncoding().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        t((r10.tag() << 3) | 5);
                        this.f663a.write(m(4).putInt(i10).array());
                        return this;
                    }
                } else {
                    t(r10.tag() << 3);
                    t((i10 << 1) ^ (i10 >> 31));
                    return this;
                }
            } else {
                t(r10.tag() << 3);
                t(i10);
                return this;
            }
        }
        return this;
    }

    @Override // xi.e
    /* renamed from: g */
    public f c(xi.c cVar, long j10) {
        return h(cVar, j10, true);
    }

    f h(xi.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            d r10 = r(cVar);
            int i10 = a.f668a[r10.intEncoding().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        t((r10.tag() << 3) | 1);
                        this.f663a.write(m(8).putLong(j10).array());
                        return this;
                    }
                } else {
                    t(r10.tag() << 3);
                    u((j10 >> 63) ^ (j10 << 1));
                    return this;
                }
            } else {
                t(r10.tag() << 3);
                u(j10);
                return this;
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f i(xi.c cVar, boolean z10, boolean z11) {
        return f(cVar, z10 ? 1 : 0, z11);
    }

    xi.e j(xi.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        t((s(cVar) << 3) | 1);
        this.f663a.write(m(8).putDouble(d10).array());
        return this;
    }

    xi.e k(xi.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        t((s(cVar) << 3) | 5);
        this.f663a.write(m(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public xi.e l(xi.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    t((s(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f659f);
                    t(bytes.length);
                    this.f663a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    l(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    o(f662i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                return j(cVar, ((Double) obj).doubleValue(), z10);
            } else {
                if (obj instanceof Float) {
                    return k(cVar, ((Float) obj).floatValue(), z10);
                }
                if (obj instanceof Number) {
                    return h(cVar, ((Number) obj).longValue(), z10);
                }
                if (obj instanceof Boolean) {
                    return i(cVar, ((Boolean) obj).booleanValue(), z10);
                }
                if (obj instanceof byte[]) {
                    byte[] bArr = (byte[]) obj;
                    if (!z10 || bArr.length != 0) {
                        t((s(cVar) << 3) | 2);
                        t(bArr.length);
                        this.f663a.write(bArr);
                        return this;
                    }
                } else {
                    xi.d dVar = (xi.d) this.f664b.get(obj.getClass());
                    if (dVar != null) {
                        return o(dVar, cVar, obj, z10);
                    }
                    xi.f fVar = (xi.f) this.f665c.get(obj.getClass());
                    if (fVar != null) {
                        return p(fVar, cVar, obj, z10);
                    }
                    if (obj instanceof c) {
                        return b(cVar, ((c) obj).getNumber());
                    }
                    if (obj instanceof Enum) {
                        return b(cVar, ((Enum) obj).ordinal());
                    }
                    return o(this.f666d, cVar, obj, z10);
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f q(Object obj) {
        if (obj == null) {
            return this;
        }
        xi.d dVar = (xi.d) this.f664b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new xi.b("No encoder for " + obj.getClass());
    }
}
