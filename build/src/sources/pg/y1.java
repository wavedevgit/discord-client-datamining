package pg;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class y1 implements yi.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f44941f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f44942g;

    /* renamed from: h  reason: collision with root package name */
    private static final yi.c f44943h;

    /* renamed from: i  reason: collision with root package name */
    private static final yi.d f44944i;

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f44945a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f44946b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f44947c;

    /* renamed from: d  reason: collision with root package name */
    private final yi.d f44948d;

    /* renamed from: e  reason: collision with root package name */
    private final d2 f44949e = new d2(this);

    static {
        c.b a10 = yi.c.a("key");
        s1 s1Var = new s1();
        s1Var.a(1);
        f44942g = a10.b(s1Var.b()).a();
        c.b a11 = yi.c.a("value");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f44943h = a11.b(s1Var2.b()).a();
        f44944i = new yi.d() { // from class: pg.x1
            @Override // yi.d
            public final void a(Object obj, Object obj2) {
                y1.j((Map.Entry) obj, (yi.e) obj2);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public y1(OutputStream outputStream, Map map, Map map2, yi.d dVar) {
        this.f44945a = outputStream;
        this.f44946b = map;
        this.f44947c = map2;
        this.f44948d = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void j(Map.Entry entry, yi.e eVar) {
        eVar.a(f44942g, entry.getKey());
        eVar.a(f44943h, entry.getValue());
    }

    private static int k(yi.c cVar) {
        w1 w1Var = (w1) cVar.c(w1.class);
        if (w1Var != null) {
            return w1Var.zza();
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private final long l(yi.d dVar, Object obj) {
        t1 t1Var = new t1();
        try {
            OutputStream outputStream = this.f44945a;
            this.f44945a = t1Var;
            dVar.a(obj, this);
            this.f44945a = outputStream;
            long a10 = t1Var.a();
            t1Var.close();
            return a10;
        } catch (Throwable th2) {
            try {
                t1Var.close();
            } catch (Throwable th3) {
                try {
                    Throwable.class.getDeclaredMethod("addSuppressed", Throwable.class).invoke(th2, th3);
                } catch (Exception unused) {
                }
            }
            throw th2;
        }
    }

    private static w1 m(yi.c cVar) {
        w1 w1Var = (w1) cVar.c(w1.class);
        if (w1Var != null) {
            return w1Var;
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private final y1 n(yi.d dVar, yi.c cVar, Object obj, boolean z10) {
        long l10 = l(dVar, obj);
        if (z10 && l10 == 0) {
            return this;
        }
        q((k(cVar) << 3) | 2);
        r(l10);
        dVar.a(obj, this);
        return this;
    }

    private final y1 o(yi.f fVar, yi.c cVar, Object obj, boolean z10) {
        this.f44949e.a(cVar, z10);
        fVar.a(obj, this.f44949e);
        return this;
    }

    private static ByteBuffer p(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private final void q(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f44945a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f44945a.write(i10 & 127);
    }

    private final void r(long j10) {
        while (((-128) & j10) != 0) {
            this.f44945a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f44945a.write(((int) j10) & 127);
    }

    @Override // yi.e
    public final yi.e a(yi.c cVar, Object obj) {
        f(cVar, obj, true);
        return this;
    }

    @Override // yi.e
    public final /* synthetic */ yi.e b(yi.c cVar, int i10) {
        g(cVar, i10, true);
        return this;
    }

    @Override // yi.e
    public final /* synthetic */ yi.e c(yi.c cVar, long j10) {
        h(cVar, j10, true);
        return this;
    }

    final yi.e d(yi.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        q((k(cVar) << 3) | 1);
        this.f44945a.write(p(8).putDouble(d10).array());
        return this;
    }

    final yi.e e(yi.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        q((k(cVar) << 3) | 5);
        this.f44945a.write(p(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yi.e f(yi.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    q((k(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f44941f);
                    q(bytes.length);
                    this.f44945a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    f(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    n(f44944i, cVar, entry, false);
                }
            } else if (obj instanceof Double) {
                d(cVar, ((Double) obj).doubleValue(), z10);
                return this;
            } else if (obj instanceof Float) {
                e(cVar, ((Float) obj).floatValue(), z10);
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
                    this.f44945a.write(bArr);
                    return this;
                }
            } else {
                yi.d dVar = (yi.d) this.f44946b.get(obj.getClass());
                if (dVar != null) {
                    n(dVar, cVar, obj, z10);
                    return this;
                }
                yi.f fVar = (yi.f) this.f44947c.get(obj.getClass());
                if (fVar != null) {
                    o(fVar, cVar, obj, z10);
                    return this;
                } else if (obj instanceof u1) {
                    g(cVar, ((u1) obj).zza(), true);
                    return this;
                } else if (obj instanceof Enum) {
                    g(cVar, ((Enum) obj).ordinal(), true);
                    return this;
                } else {
                    n(this.f44948d, cVar, obj, z10);
                    return this;
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final y1 g(yi.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            w1 m10 = m(cVar);
            v1 v1Var = v1.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 5);
                        this.f44945a.write(p(4).putInt(i10).array());
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

    final y1 h(yi.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            w1 m10 = m(cVar);
            v1 v1Var = v1.DEFAULT;
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 1);
                        this.f44945a.write(p(8).putLong(j10).array());
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
    public final y1 i(Object obj) {
        if (obj == null) {
            return this;
        }
        yi.d dVar = (yi.d) this.f44946b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new yi.b("No encoder for ".concat(String.valueOf(obj.getClass())));
    }
}
