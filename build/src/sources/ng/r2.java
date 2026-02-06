package ng;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class r2 implements yi.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f40217f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f40218g;

    /* renamed from: h  reason: collision with root package name */
    private static final yi.c f40219h;

    /* renamed from: i  reason: collision with root package name */
    private static final yi.d f40220i;

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f40221a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40222b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f40223c;

    /* renamed from: d  reason: collision with root package name */
    private final yi.d f40224d;

    /* renamed from: e  reason: collision with root package name */
    private final v2 f40225e = new v2(this);

    static {
        c.b a10 = yi.c.a("key");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40218g = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("value");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40219h = a11.b(l2Var2.b()).a();
        f40220i = new yi.d() { // from class: ng.q2
            @Override // yi.d
            public final void a(Object obj, Object obj2) {
                r2.j((Map.Entry) obj, (yi.e) obj2);
            }
        };
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r2(OutputStream outputStream, Map map, Map map2, yi.d dVar) {
        this.f40221a = outputStream;
        this.f40222b = map;
        this.f40223c = map2;
        this.f40224d = dVar;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* synthetic */ void j(Map.Entry entry, yi.e eVar) {
        eVar.a(f40218g, entry.getKey());
        eVar.a(f40219h, entry.getValue());
    }

    private static int k(yi.c cVar) {
        p2 p2Var = (p2) cVar.c(p2.class);
        if (p2Var != null) {
            return p2Var.zza();
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private final long l(yi.d dVar, Object obj) {
        m2 m2Var = new m2();
        try {
            OutputStream outputStream = this.f40221a;
            this.f40221a = m2Var;
            dVar.a(obj, this);
            this.f40221a = outputStream;
            long a10 = m2Var.a();
            m2Var.close();
            return a10;
        } catch (Throwable th2) {
            try {
                m2Var.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private static p2 m(yi.c cVar) {
        p2 p2Var = (p2) cVar.c(p2.class);
        if (p2Var != null) {
            return p2Var;
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private final r2 n(yi.d dVar, yi.c cVar, Object obj, boolean z10) {
        long l10 = l(dVar, obj);
        if (z10 && l10 == 0) {
            return this;
        }
        q((k(cVar) << 3) | 2);
        r(l10);
        dVar.a(obj, this);
        return this;
    }

    private final r2 o(yi.f fVar, yi.c cVar, Object obj, boolean z10) {
        this.f40225e.a(cVar, z10);
        fVar.a(obj, this.f40225e);
        return this;
    }

    private static ByteBuffer p(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private final void q(int i10) {
        while (true) {
            int i11 = i10 & 127;
            if ((i10 & (-128)) != 0) {
                this.f40221a.write(i11 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                i10 >>>= 7;
            } else {
                this.f40221a.write(i11);
                return;
            }
        }
    }

    private final void r(long j10) {
        while (true) {
            int i10 = ((int) j10) & 127;
            if (((-128) & j10) != 0) {
                this.f40221a.write(i10 | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
                j10 >>>= 7;
            } else {
                this.f40221a.write(i10);
                return;
            }
        }
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
        this.f40221a.write(p(8).putDouble(d10).array());
        return this;
    }

    final yi.e e(yi.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        q((k(cVar) << 3) | 5);
        this.f40221a.write(p(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final yi.e f(yi.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    q((k(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f40217f);
                    q(bytes.length);
                    this.f40221a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    f(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    n(f40220i, cVar, entry, false);
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
                    this.f40221a.write(bArr);
                    return this;
                }
            } else {
                yi.d dVar = (yi.d) this.f40222b.get(obj.getClass());
                if (dVar != null) {
                    n(dVar, cVar, obj, z10);
                    return this;
                }
                yi.f fVar = (yi.f) this.f40223c.get(obj.getClass());
                if (fVar != null) {
                    o(fVar, cVar, obj, z10);
                    return this;
                } else if (obj instanceof n2) {
                    g(cVar, ((n2) obj).zza(), true);
                    return this;
                } else if (obj instanceof Enum) {
                    g(cVar, ((Enum) obj).ordinal(), true);
                    return this;
                } else {
                    n(this.f40224d, cVar, obj, z10);
                    return this;
                }
            }
        }
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final r2 g(yi.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            p2 m10 = m(cVar);
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 5);
                        this.f40221a.write(p(4).putInt(i10).array());
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

    final r2 h(yi.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            p2 m10 = m(cVar);
            int ordinal = m10.zzb().ordinal();
            if (ordinal != 0) {
                if (ordinal != 1) {
                    if (ordinal == 2) {
                        q((m10.zza() << 3) | 1);
                        this.f40221a.write(p(8).putLong(j10).array());
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
    public final r2 i(Object obj) {
        if (obj == null) {
            return this;
        }
        yi.d dVar = (yi.d) this.f40222b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new yi.b("No encoder for ".concat(String.valueOf(obj.getClass())));
    }
}
