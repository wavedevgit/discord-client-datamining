package bj;

import bj.d;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.OutputStream;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements yi.e {

    /* renamed from: f  reason: collision with root package name */
    private static final Charset f6788f = Charset.forName("UTF-8");

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f6789g = yi.c.a("key").b(bj.a.b().c(1).a()).a();

    /* renamed from: h  reason: collision with root package name */
    private static final yi.c f6790h = yi.c.a("value").b(bj.a.b().c(2).a()).a();

    /* renamed from: i  reason: collision with root package name */
    private static final yi.d f6791i = new yi.d() { // from class: bj.e
        @Override // yi.d
        public final void a(Object obj, Object obj2) {
            f.d((Map.Entry) obj, (yi.e) obj2);
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private OutputStream f6792a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f6793b;

    /* renamed from: c  reason: collision with root package name */
    private final Map f6794c;

    /* renamed from: d  reason: collision with root package name */
    private final yi.d f6795d;

    /* renamed from: e  reason: collision with root package name */
    private final i f6796e = new i(this);

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f6797a;

        static {
            int[] iArr = new int[d.a.values().length];
            f6797a = iArr;
            try {
                iArr[d.a.DEFAULT.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f6797a[d.a.SIGNED.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f6797a[d.a.FIXED.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(OutputStream outputStream, Map map, Map map2, yi.d dVar) {
        this.f6792a = outputStream;
        this.f6793b = map;
        this.f6794c = map2;
        this.f6795d = dVar;
    }

    public static /* synthetic */ void d(Map.Entry entry, yi.e eVar) {
        eVar.a(f6789g, entry.getKey());
        eVar.a(f6790h, entry.getValue());
    }

    private static ByteBuffer m(int i10) {
        return ByteBuffer.allocate(i10).order(ByteOrder.LITTLE_ENDIAN);
    }

    private long n(yi.d dVar, Object obj) {
        b bVar = new b();
        try {
            OutputStream outputStream = this.f6792a;
            this.f6792a = bVar;
            dVar.a(obj, this);
            this.f6792a = outputStream;
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

    private f o(yi.d dVar, yi.c cVar, Object obj, boolean z10) {
        long n10 = n(dVar, obj);
        if (z10 && n10 == 0) {
            return this;
        }
        t((s(cVar) << 3) | 2);
        u(n10);
        dVar.a(obj, this);
        return this;
    }

    private f p(yi.f fVar, yi.c cVar, Object obj, boolean z10) {
        this.f6796e.b(cVar, z10);
        fVar.a(obj, this.f6796e);
        return this;
    }

    private static d r(yi.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar;
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private static int s(yi.c cVar) {
        d dVar = (d) cVar.c(d.class);
        if (dVar != null) {
            return dVar.tag();
        }
        throw new yi.b("Field has no @Protobuf config");
    }

    private void t(int i10) {
        while ((i10 & (-128)) != 0) {
            this.f6792a.write((i10 & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            i10 >>>= 7;
        }
        this.f6792a.write(i10 & 127);
    }

    private void u(long j10) {
        while (((-128) & j10) != 0) {
            this.f6792a.write((((int) j10) & 127) | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
            j10 >>>= 7;
        }
        this.f6792a.write(((int) j10) & 127);
    }

    @Override // yi.e
    public yi.e a(yi.c cVar, Object obj) {
        return l(cVar, obj, true);
    }

    @Override // yi.e
    /* renamed from: e */
    public f b(yi.c cVar, int i10) {
        return f(cVar, i10, true);
    }

    f f(yi.c cVar, int i10, boolean z10) {
        if (!z10 || i10 != 0) {
            d r10 = r(cVar);
            int i11 = a.f6797a[r10.intEncoding().ordinal()];
            if (i11 != 1) {
                if (i11 != 2) {
                    if (i11 == 3) {
                        t((r10.tag() << 3) | 5);
                        this.f6792a.write(m(4).putInt(i10).array());
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

    @Override // yi.e
    /* renamed from: g */
    public f c(yi.c cVar, long j10) {
        return h(cVar, j10, true);
    }

    f h(yi.c cVar, long j10, boolean z10) {
        if (!z10 || j10 != 0) {
            d r10 = r(cVar);
            int i10 = a.f6797a[r10.intEncoding().ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 == 3) {
                        t((r10.tag() << 3) | 1);
                        this.f6792a.write(m(8).putLong(j10).array());
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
    public f i(yi.c cVar, boolean z10, boolean z11) {
        return f(cVar, z10 ? 1 : 0, z11);
    }

    yi.e j(yi.c cVar, double d10, boolean z10) {
        if (z10 && d10 == 0.0d) {
            return this;
        }
        t((s(cVar) << 3) | 1);
        this.f6792a.write(m(8).putDouble(d10).array());
        return this;
    }

    yi.e k(yi.c cVar, float f10, boolean z10) {
        if (z10 && f10 == 0.0f) {
            return this;
        }
        t((s(cVar) << 3) | 5);
        this.f6792a.write(m(4).putFloat(f10).array());
        return this;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public yi.e l(yi.c cVar, Object obj, boolean z10) {
        if (obj != null) {
            if (obj instanceof CharSequence) {
                CharSequence charSequence = (CharSequence) obj;
                if (!z10 || charSequence.length() != 0) {
                    t((s(cVar) << 3) | 2);
                    byte[] bytes = charSequence.toString().getBytes(f6788f);
                    t(bytes.length);
                    this.f6792a.write(bytes);
                    return this;
                }
            } else if (obj instanceof Collection) {
                for (Object obj2 : (Collection) obj) {
                    l(cVar, obj2, false);
                }
            } else if (obj instanceof Map) {
                for (Map.Entry entry : ((Map) obj).entrySet()) {
                    o(f6791i, cVar, entry, false);
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
                        this.f6792a.write(bArr);
                        return this;
                    }
                } else {
                    yi.d dVar = (yi.d) this.f6793b.get(obj.getClass());
                    if (dVar != null) {
                        return o(dVar, cVar, obj, z10);
                    }
                    yi.f fVar = (yi.f) this.f6794c.get(obj.getClass());
                    if (fVar != null) {
                        return p(fVar, cVar, obj, z10);
                    }
                    if (obj instanceof c) {
                        return b(cVar, ((c) obj).getNumber());
                    }
                    if (obj instanceof Enum) {
                        return b(cVar, ((Enum) obj).ordinal());
                    }
                    return o(this.f6795d, cVar, obj, z10);
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
        yi.d dVar = (yi.d) this.f6793b.get(obj.getClass());
        if (dVar != null) {
            dVar.a(obj, this);
            return this;
        }
        throw new yi.b("No encoder for " + obj.getClass());
    }
}
