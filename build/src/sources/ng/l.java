package ng;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class l implements ui.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f41383f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f41384g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f41385h;

    /* renamed from: i  reason: collision with root package name */
    private static final ui.d f41386i;

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f41387a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41388b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f41389c;

    /* renamed from: d  reason: collision with root package name */
    private final ui.d f41390d;

    /* renamed from: e  reason: collision with root package name */
    private final p f41391e = new p(this);

    static {
        c.b a10 = ui.c.a("key");
        f fVar = new f();
        fVar.a(1);
        f41384g = a10.b(fVar.b()).a();
        c.b a11 = ui.c.a("value");
        f fVar2 = new f();
        fVar2.a(2);
        f41385h = a11.b(fVar2.b()).a();
        f41386i = new ui.d() { // from class: ng.k
            @Override // ui.d
            public final void a(Object obj, Object obj2) {
                l.j((Map.Entry) obj, (ui.e) obj2);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(OutputStream outputStream, Map map, Map map2, ui.d dVar) {
        this.f41387a = outputStream;
        this.f41388b = map;
        this.f41389c = map2;
        this.f41390d = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void j(Map.Entry entry, ui.e eVar) {
        eVar.b(f41384g, entry.getKey());
        eVar.b(f41385h, entry.getValue());
    }

    private static int k(ui.c cVar) {
        j jVar = (j) cVar.c(j.class);
        if (jVar != null) {
            return jVar.zza();
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private final long l(ui.d dVar, Object obj) {
        g gVar = new g();
        try {
            OutputStream outputStream = this.f41387a;
            this.f41387a = gVar;
            dVar.a(obj, this);
            this.f41387a = outputStream;
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

    private static j m(ui.c cVar) {
        j jVar = (j) cVar.c(j.class);
        if (jVar != null) {
            return jVar;
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private final l n(ui.d dVar, ui.c cVar, Object obj, boolean z10) {
        long l10 = l(dVar, obj);
        if (z10 && l10 == 0) {
            return this;
        }
        q((k(cVar) << 3) | 2);
        r(l10);
        dVar.a(obj, this);
        return this;
    }

    private final l o(ui.f fVar, ui.c cVar, Object obj, boolean z10) {
        this.f41391e.b(cVar, z10);
        fVar.a(obj, this.f41391e);
        return this;
    }

    private static ByteBuffer p(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private final void q(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f41387a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f41387a.write(i10 & 127);
    }

    private final void r(long j10) {
        while (((-128) & j10) != 0) {
            this.f41387a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f41387a.write(((int) j10) & 127);
    }

    final ui.e a(ui.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        q((k(cVar) << 3) | 1);
        this.f41387a.write(p(8).putDouble(d10).array());
        return this;
    }

    @Override // ui.e
    public final ui.e b(ui.c cVar, Object obj) {
        f(cVar, obj, true);
        return this;
    }

    final ui.e c(ui.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        q((k(cVar) << 3) | 5);
        this.f41387a.write(p(4).putFloat(f10).array());
        return this;
    }

    @Override // ui.e
    public final /* synthetic */ ui.e d(ui.c cVar, long j10) {
        h(cVar, j10, true);
        return this;
    }

    @Override // ui.e
    public final /* synthetic */ ui.e e(ui.c cVar, int i10) {
        g(cVar, i10, true);
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final ui.e f(ui.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    q((k(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f41383f);
                    q(bytes.length);
                    this.f41387a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    f(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    n(f41386i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                a(cVar, ((Double) obj).doubleValue(), z10);
                return this;
            } else if (obj instanceof Float) {
                c(cVar, ((Float) obj).floatValue(), z10);
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
                    this.f41387a.write(bArr);
                    return this;
                }
            } else {
                ui.d dVar = (ui.d) this.f41388b.get(obj.getClass());
                if (dVar != null) {
                    n(dVar, cVar, obj, z10);
                    return this;
                }
                ui.f fVar = (ui.f) this.f41389c.get(obj.getClass());
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
                    n(this.f41390d, cVar, obj, z10);
                    return this;
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final l g(ui.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            j m10 = m(cVar);
            i iVar = i.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 5);
                        this.f41387a.write(p(4).putInt(i10).array());
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

    final l h(ui.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            j m10 = m(cVar);
            i iVar = i.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 1);
                        this.f41387a.write(p(8).putLong(j10).array());
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
        ui.d dVar = (ui.d) this.f41388b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new ui.b("No encoder for ".concat(String.valueOf(obj.getClass())));
    }
}
