package pg;

import bj.c;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements bj.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f42179f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f42180g;

    /* renamed from: h  reason: collision with root package name */
    private static final bj.c f42181h;

    /* renamed from: i  reason: collision with root package name */
    private static final bj.d f42182i;

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f42183a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42184b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f42185c;

    /* renamed from: d  reason: collision with root package name */
    private final bj.d f42186d;

    /* renamed from: e  reason: collision with root package name */
    private final p f42187e = new p(this);

    static {
        c.b a10 = bj.c.a("key");
        f fVar = new f();
        fVar.a(1);
        f42180g = a10.b(fVar.b()).a();
        c.b a11 = bj.c.a("value");
        f fVar2 = new f();
        fVar2.a(2);
        f42181h = a11.b(fVar2.b()).a();
        f42182i = new bj.d() { // from class: pg.k
            @Override // bj.d
            public final void a(Object obj, Object obj2) {
                l.j((Map.Entry) obj, (bj.e) obj2);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(OutputStream outputStream, Map map, Map map2, bj.d dVar) {
        this.f42183a = outputStream;
        this.f42184b = map;
        this.f42185c = map2;
        this.f42186d = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void j(Map.Entry entry, bj.e eVar) {
        eVar.e(f42180g, entry.getKey());
        eVar.e(f42181h, entry.getValue());
    }

    private static int k(bj.c cVar) {
        j jVar = (j) cVar.c(j.class);
        if (jVar != null) {
            return jVar.zza();
        }
        throw new bj.b("Field has no @Protobuf config");
    }

    private final long l(bj.d dVar, Object obj) {
        g gVar = new g();
        try {
            OutputStream outputStream = this.f42183a;
            this.f42183a = gVar;
            dVar.a(obj, this);
            this.f42183a = outputStream;
            long a10 = gVar.a();
            gVar.close();
            return a10;
        } catch (Throwable th2) {
            try {
                gVar.close();
            } catch (Throwable th3) {
                try {
                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(th2, th3);
                } catch (Exception unused) {
                }
            }
            throw th2;
        }
    }

    private static j m(bj.c cVar) {
        j jVar = (j) cVar.c(j.class);
        if (jVar != null) {
            return jVar;
        }
        throw new bj.b("Field has no @Protobuf config");
    }

    private final l n(bj.d dVar, bj.c cVar, Object obj, boolean z10) {
        long l10 = l(dVar, obj);
        if (z10 && l10 == 0) {
            return this;
        }
        q((k(cVar) << 3) | 2);
        r(l10);
        dVar.a(obj, this);
        return this;
    }

    private final l o(bj.f fVar, bj.c cVar, Object obj, boolean z10) {
        this.f42187e.b(cVar, z10);
        fVar.a(obj, this.f42187e);
        return this;
    }

    private static ByteBuffer p(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private final void q(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f42183a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f42183a.write(i10 & 127);
    }

    private final void r(long j10) {
        while (((-128) & j10) != 0) {
            this.f42183a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f42183a.write(((int) j10) & 127);
    }

    final bj.e a(bj.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        q((k(cVar) << 3) | 1);
        this.f42183a.write(p(8).putDouble(d10).array());
        return this;
    }

    @Override // bj.e
    public final /* synthetic */ bj.e b(bj.c cVar, int i10) {
        g(cVar, i10, true);
        return this;
    }

    @Override // bj.e
    public final /* synthetic */ bj.e c(bj.c cVar, long j10) {
        h(cVar, j10, true);
        return this;
    }

    final bj.e d(bj.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        q((k(cVar) << 3) | 5);
        this.f42183a.write(p(4).putFloat(f10).array());
        return this;
    }

    @Override // bj.e
    public final bj.e e(bj.c cVar, Object obj) {
        f(cVar, obj, true);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final bj.e f(bj.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    q((k(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f42179f);
                    q(bytes.length);
                    this.f42183a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    f(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    n(f42182i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                a(cVar, ((Double) obj).doubleValue(), z10);
                return this;
            } else if (obj instanceof Float) {
                d(cVar, ((Float) obj).floatValue(), z10);
                return this;
            } else if (obj instanceof Number) {
                h(cVar, ((Number) obj).longValue(), z10);
                return this;
            } else if (obj instanceof Boolean) {
                g(cVar, ((Boolean) obj).booleanValue() ? 1 : 0, z10);
                return this;
            } else if (obj instanceof byte[]) {
                byte[] bArr = (byte[]) obj;
                if (!z10 || bArr.length != 0) {
                    q((k(cVar) << 3) | 2);
                    q(bArr.length);
                    this.f42183a.write(bArr);
                    return this;
                }
            } else {
                bj.d dVar = (bj.d) this.f42184b.get(obj.getClass());
                if (dVar != null) {
                    n(dVar, cVar, obj, z10);
                    return this;
                }
                bj.f fVar = (bj.f) this.f42185c.get(obj.getClass());
                if (fVar != null) {
                    o(fVar, cVar, obj, z10);
                    return this;
                } else if (obj instanceof h) {
                    g(cVar, ((h) obj).zza(), true);
                    return this;
                } else if (obj instanceof Enum) {
                    g(cVar, ((Enum) obj).ordinal(), true);
                    return this;
                } else {
                    n(this.f42186d, cVar, obj, z10);
                    return this;
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final l g(bj.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            j m10 = m(cVar);
            i iVar = i.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 5);
                        this.f42183a.write(p(4).putInt(i10).array());
                        return this;
                    }
                } else {
                    q(m10.zza() << 3);
                    q((i10 + i10) ^ (i10 >> 31));
                    return this;
                }
            } else {
                q(m10.zza() << 3);
                q(i10);
                return this;
            }
        }
        return this;
    }

    final l h(bj.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            j m10 = m(cVar);
            i iVar = i.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 1);
                        this.f42183a.write(p(8).putLong(j10).array());
                        return this;
                    }
                } else {
                    q(m10.zza() << 3);
                    r((j10 >> 63) ^ (j10 + j10));
                    return this;
                }
            } else {
                q(m10.zza() << 3);
                r(j10);
                return this;
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final l i(Object obj) {
        if (obj == null) {
            return this;
        }
        bj.d dVar = (bj.d) this.f42184b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new bj.b("No encoder for ".concat(String.valueOf(obj.getClass())));
    }
}
