package pg;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b2 implements ui.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f45154f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f45155g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f45156h;

    /* renamed from: i  reason: collision with root package name */
    private static final ui.d f45157i;

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f45158a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f45159b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f45160c;

    /* renamed from: d  reason: collision with root package name */
    private final ui.d f45161d;

    /* renamed from: e  reason: collision with root package name */
    private final g2 f45162e = new g2(this);

    static {
        c.b a10 = ui.c.a("key");
        v1 v1Var = new v1();
        v1Var.a(1);
        f45155g = a10.b(v1Var.b()).a();
        c.b a11 = ui.c.a("value");
        v1 v1Var2 = new v1();
        v1Var2.a(2);
        f45156h = a11.b(v1Var2.b()).a();
        f45157i = new ui.d() { // from class: pg.a2
            @Override // ui.d
            public final void a(Object obj, Object obj2) {
                b2.j((Map.Entry) obj, (ui.e) obj2);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(OutputStream outputStream, Map map, Map map2, ui.d dVar) {
        this.f45158a = outputStream;
        this.f45159b = map;
        this.f45160c = map2;
        this.f45161d = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void j(Map.Entry entry, ui.e eVar) {
        eVar.b(f45155g, entry.getKey());
        eVar.b(f45156h, entry.getValue());
    }

    private static int k(ui.c cVar) {
        z1 z1Var = (z1) cVar.c(z1.class);
        if (z1Var != null) {
            return z1Var.zza();
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private final long l(ui.d dVar, Object obj) {
        w1 w1Var = new w1();
        try {
            OutputStream outputStream = this.f45158a;
            this.f45158a = w1Var;
            dVar.a(obj, this);
            this.f45158a = outputStream;
            long a10 = w1Var.a();
            w1Var.close();
            return a10;
        } catch (Throwable th2) {
            try {
                w1Var.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private static z1 m(ui.c cVar) {
        z1 z1Var = (z1) cVar.c(z1.class);
        if (z1Var != null) {
            return z1Var;
        }
        throw new ui.b("Field has no @Protobuf config");
    }

    private final b2 n(ui.d dVar, ui.c cVar, Object obj, boolean z10) {
        long l10 = l(dVar, obj);
        if (z10 && l10 == 0) {
            return this;
        }
        q((k(cVar) << 3) | 2);
        r(l10);
        dVar.a(obj, this);
        return this;
    }

    private final b2 o(ui.f fVar, ui.c cVar, Object obj, boolean z10) {
        this.f45162e.b(cVar, z10);
        fVar.a(obj, this.f45162e);
        return this;
    }

    private static ByteBuffer p(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private final void q(int i10) {
        while (true) {
            int i11 = i10 & 127;
            if ((i10 & (-128)) != 0) {
                this.f45158a.write(i11 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                i10 >>>= 7;
            } else {
                this.f45158a.write(i11);
                return;
            }
        }
    }

    private final void r(long j10) {
        while (true) {
            int i10 = ((int) j10) & 127;
            if (((-128) & j10) != 0) {
                this.f45158a.write(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                j10 >>>= 7;
            } else {
                this.f45158a.write(i10);
                return;
            }
        }
    }

    final ui.e a(ui.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        q((k(cVar) << 3) | 1);
        this.f45158a.write(p(8).putDouble(d10).array());
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
        this.f45158a.write(p(4).putFloat(f10).array());
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
                    byte[] bytes = charSequence.toString().getBytes(f45154f);
                    q(bytes.length);
                    this.f45158a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    f(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    n(f45157i, cVar, entry, false);
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
                    this.f45158a.write(bArr);
                    return this;
                }
            } else {
                ui.d dVar = (ui.d) this.f45159b.get(obj.getClass());
                if (dVar != null) {
                    n(dVar, cVar, obj, z10);
                    return this;
                }
                ui.f fVar = (ui.f) this.f45160c.get(obj.getClass());
                if (fVar != null) {
                    o(fVar, cVar, obj, z10);
                    return this;
                } else if (obj instanceof x1) {
                    g(cVar, ((x1) obj).zza(), true);
                    return this;
                } else if (obj instanceof Enum) {
                    g(cVar, ((Enum) obj).ordinal(), true);
                    return this;
                } else {
                    n(this.f45161d, cVar, obj, z10);
                    return this;
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final b2 g(ui.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            z1 m10 = m(cVar);
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 5);
                        this.f45158a.write(p(4).putInt(i10).array());
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

    final b2 h(ui.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            z1 m10 = m(cVar);
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 1);
                        this.f45158a.write(p(8).putLong(j10).array());
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
    public final b2 i(Object obj) {
        if (obj == null) {
            return this;
        }
        ui.d dVar = (ui.d) this.f45159b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new ui.b("No encoder for ".concat(String.valueOf(obj.getClass())));
    }
}
