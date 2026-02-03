package xi;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
import xi.d;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements ui.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f53295f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f53296g = ui.c.a("key").b(xi.a.b().c(1).a()).a();

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f53297h = ui.c.a("value").b(xi.a.b().c(2).a()).a();

    /* renamed from: i  reason: collision with root package name */
    private static final ui.d f53298i = new ui.d() { // from class: xi.e
        @Override // ui.d
        public final void a(Object obj, Object obj2) {
            f.a((Map.Entry) obj, (ui.e) obj2);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f53299a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f53300b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f53301c;

    /* renamed from: d  reason: collision with root package name */
    private final ui.d f53302d;

    /* renamed from: e  reason: collision with root package name */
    private final i f53303e = new i(this);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f53304a;

        static {
            int[] iArr = new int[d.a.values().length];
            f53304a = iArr;
            try {
                iArr[d.a.DEFAULT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f53304a[d.a.SIGNED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f53304a[d.a.FIXED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(OutputStream outputStream, Map map, Map map2, ui.d dVar) {
        this.f53299a = outputStream;
        this.f53300b = map;
        this.f53301c = map2;
        this.f53302d = dVar;
    }

    public static /* synthetic */ void a(Map.Entry entry, ui.e eVar) {
        eVar.b(f53296g, entry.getKey());
        eVar.b(f53297h, entry.getValue());
    }

    private static ByteBuffer m(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private long n(ui.d dVar, Object obj) {
        b bVar = new b();
        try {
            OutputStream outputStream = this.f53299a;
            this.f53299a = bVar;
            dVar.a(obj, this);
            this.f53299a = outputStream;
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

    private f o(ui.d dVar, ui.c cVar, Object obj, boolean z10) {
        long n10 = n(dVar, obj);
        if (z10 && n10 == 0) {
            return this;
        }
        t((s(cVar) << 3) | 2);
        u(n10);
        dVar.a(obj, this);
        return this;
    }

    private f p(ui.f fVar, ui.c cVar, Object obj, boolean z10) {
        this.f53303e.d(cVar, z10);
        fVar.a(obj, this.f53303e);
        return this;
    }

    private static d r(ui.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar;
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private static int s(ui.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar.tag();
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private void t(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f53299a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f53299a.write(i10 & 127);
    }

    private void u(long j10) {
        while (((-128) & j10) != 0) {
            this.f53299a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f53299a.write(((int) j10) & 127);
    }

    @Override // ui.e
    public ui.e b(ui.c cVar, Object obj) {
        return g(cVar, obj, true);
    }

    ui.e c(ui.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        t((s(cVar) << 3) | 1);
        this.f53299a.write(m(8).putDouble(d10).array());
        return this;
    }

    ui.e f(ui.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        t((s(cVar) << 3) | 5);
        this.f53299a.write(m(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ui.e g(ui.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    t((s(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f53295f);
                    t(bytes.length);
                    this.f53299a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    g(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    o(f53298i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                return c(cVar, ((Double) obj).doubleValue(), z10);
            } else {
                if (obj instanceof Float) {
                    return f(cVar, ((Float) obj).floatValue(), z10);
                }
                if (obj instanceof Number) {
                    return k(cVar, ((Number) obj).longValue(), z10);
                }
                if (obj instanceof Boolean) {
                    return l(cVar, ((Boolean) obj).booleanValue(), z10);
                }
                if (obj instanceof byte[]) {
                    byte[] bArr = (byte[]) obj;
                    if (!z10 || bArr.length != 0) {
                        t((s(cVar) << 3) | 2);
                        t(bArr.length);
                        this.f53299a.write(bArr);
                        return this;
                    }
                } else {
                    ui.d dVar = (ui.d) this.f53300b.get(obj.getClass());
                    if (dVar != null) {
                        return o(dVar, cVar, obj, z10);
                    }
                    ui.f fVar = (ui.f) this.f53301c.get(obj.getClass());
                    if (fVar != null) {
                        return p(fVar, cVar, obj, z10);
                    }
                    if (obj instanceof c) {
                        return e(cVar, ((c) obj).getNumber());
                    }
                    if (obj instanceof Enum) {
                        return e(cVar, ((Enum) obj).ordinal());
                    }
                    return o(this.f53302d, cVar, obj, z10);
                }
            }
        }
        return this;
    }

    @Override // ui.e
    /* renamed from: h */
    public f e(ui.c cVar, int i10) {
        return i(cVar, i10, true);
    }

    f i(ui.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            d r10 = r(cVar);
            int i11 = a.f53304a[r10.intEncoding().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        t((r10.tag() << 3) | 5);
                        this.f53299a.write(m(4).putInt(i10).array());
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

    @Override // ui.e
    /* renamed from: j */
    public f d(ui.c cVar, long j10) {
        return k(cVar, j10, true);
    }

    f k(ui.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            d r10 = r(cVar);
            int i10 = a.f53304a[r10.intEncoding().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        t((r10.tag() << 3) | 1);
                        this.f53299a.write(m(8).putLong(j10).array());
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
    public f l(ui.c cVar, boolean z10, boolean z11) {
        return i(cVar, z10 ? 1 : 0, z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f q(Object obj) {
        if (obj == null) {
            return this;
        }
        ui.d dVar = (ui.d) this.f53300b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new ui.b("No encoder for " + obj.getClass());
    }
}
