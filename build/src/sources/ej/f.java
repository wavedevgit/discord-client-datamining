package ej;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import ej.d;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements bj.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f22871f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f22872g = bj.c.a("key").b(ej.a.b().c(1).a()).a();

    /* renamed from: h  reason: collision with root package name */
    private static final bj.c f22873h = bj.c.a("value").b(ej.a.b().c(2).a()).a();

    /* renamed from: i  reason: collision with root package name */
    private static final bj.d f22874i = new bj.d() { // from class: ej.e
        @Override // bj.d
        public final void a(Object obj, Object obj2) {
            f.a((Map.Entry) obj, (bj.e) obj2);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f22875a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f22876b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f22877c;

    /* renamed from: d  reason: collision with root package name */
    private final bj.d f22878d;

    /* renamed from: e  reason: collision with root package name */
    private final i f22879e = new i(this);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f22880a;

        static {
            int[] iArr = new int[d.a.values().length];
            f22880a = iArr;
            try {
                iArr[d.a.DEFAULT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f22880a[d.a.SIGNED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f22880a[d.a.FIXED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(OutputStream outputStream, Map map, Map map2, bj.d dVar) {
        this.f22875a = outputStream;
        this.f22876b = map;
        this.f22877c = map2;
        this.f22878d = dVar;
    }

    public static /* synthetic */ void a(Map.Entry entry, bj.e eVar) {
        eVar.e(f22872g, entry.getKey());
        eVar.e(f22873h, entry.getValue());
    }

    private static ByteBuffer m(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private long n(bj.d dVar, Object obj) {
        b bVar = new b();
        try {
            OutputStream outputStream = this.f22875a;
            this.f22875a = bVar;
            dVar.a(obj, this);
            this.f22875a = outputStream;
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

    private f o(bj.d dVar, bj.c cVar, Object obj, boolean z10) {
        long n10 = n(dVar, obj);
        if (z10 && n10 == 0) {
            return this;
        }
        t((s(cVar) << 3) | 2);
        u(n10);
        dVar.a(obj, this);
        return this;
    }

    private f p(bj.f fVar, bj.c cVar, Object obj, boolean z10) {
        this.f22879e.c(cVar, z10);
        fVar.a(obj, this.f22879e);
        return this;
    }

    private static d r(bj.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar;
        }
        throw new bj.b("Field has no @Protobuf config");
    }

    private static int s(bj.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar.tag();
        }
        throw new bj.b("Field has no @Protobuf config");
    }

    private void t(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f22875a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f22875a.write(i10 & 127);
    }

    private void u(long j10) {
        while (((-128) & j10) != 0) {
            this.f22875a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f22875a.write(((int) j10) & 127);
    }

    bj.e d(bj.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        t((s(cVar) << 3) | 1);
        this.f22875a.write(m(8).putDouble(d10).array());
        return this;
    }

    @Override // bj.e
    public bj.e e(bj.c cVar, Object obj) {
        return g(cVar, obj, true);
    }

    bj.e f(bj.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        t((s(cVar) << 3) | 5);
        this.f22875a.write(m(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public bj.e g(bj.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    t((s(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f22871f);
                    t(bytes.length);
                    this.f22875a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    g(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    o(f22874i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                return d(cVar, ((Double) obj).doubleValue(), z10);
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
                        this.f22875a.write(bArr);
                        return this;
                    }
                } else {
                    bj.d dVar = (bj.d) this.f22876b.get(obj.getClass());
                    if (dVar != null) {
                        return o(dVar, cVar, obj, z10);
                    }
                    bj.f fVar = (bj.f) this.f22877c.get(obj.getClass());
                    if (fVar != null) {
                        return p(fVar, cVar, obj, z10);
                    }
                    if (obj instanceof c) {
                        return b(cVar, ((c) obj).getNumber());
                    }
                    if (obj instanceof Enum) {
                        return b(cVar, ((Enum) obj).ordinal());
                    }
                    return o(this.f22878d, cVar, obj, z10);
                }
            }
        }
        return this;
    }

    @Override // bj.e
    /* renamed from: h */
    public f b(bj.c cVar, int i10) {
        return i(cVar, i10, true);
    }

    f i(bj.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            d r10 = r(cVar);
            int i11 = a.f22880a[r10.intEncoding().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        t((r10.tag() << 3) | 5);
                        this.f22875a.write(m(4).putInt(i10).array());
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

    @Override // bj.e
    /* renamed from: j */
    public f c(bj.c cVar, long j10) {
        return k(cVar, j10, true);
    }

    f k(bj.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            d r10 = r(cVar);
            int i10 = a.f22880a[r10.intEncoding().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        t((r10.tag() << 3) | 1);
                        this.f22875a.write(m(8).putLong(j10).array());
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
    public f l(bj.c cVar, boolean z10, boolean z11) {
        return i(cVar, z10 ? 1 : 0, z11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f q(Object obj) {
        if (obj == null) {
            return this;
        }
        bj.d dVar = (bj.d) this.f22876b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new bj.b("No encoder for " + obj.getClass());
    }
}
