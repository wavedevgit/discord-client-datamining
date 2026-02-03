package rc;

import android.net.Uri;
import android.text.TextUtils;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import com.google.android.exoplayer2.upstream.g;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import ne.w0;
import rc.b0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h0 implements j0 {

    /* renamed from: a  reason: collision with root package name */
    private final DataSource.Factory f48726a;

    /* renamed from: b  reason: collision with root package name */
    private final String f48727b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48728c;

    /* renamed from: d  reason: collision with root package name */
    private final Map f48729d;

    public h0(String str, boolean z10, DataSource.Factory factory) {
        boolean z11;
        if (z10 && TextUtils.isEmpty(str)) {
            z11 = false;
        } else {
            z11 = true;
        }
        ne.a.a(z11);
        this.f48726a = factory;
        this.f48727b = str;
        this.f48728c = z10;
        this.f48729d = new HashMap();
    }

    private static byte[] c(DataSource.Factory factory, String str, byte[] bArr, Map map) {
        le.a0 a0Var = new le.a0(factory.createDataSource());
        com.google.android.exoplayer2.upstream.a a10 = new a.b().j(str).e(map).d(2).c(bArr).b(1).a();
        int i10 = 0;
        com.google.android.exoplayer2.upstream.a aVar = a10;
        while (true) {
            try {
                le.n nVar = new le.n(a0Var, aVar);
                try {
                    byte[] i12 = w0.i1(nVar);
                    w0.n(nVar);
                    return i12;
                } catch (g.f e10) {
                    String d10 = d(e10, i10);
                    if (d10 != null) {
                        i10++;
                        aVar = aVar.a().j(d10).a();
                        w0.n(nVar);
                    } else {
                        throw e10;
                    }
                }
            } catch (Exception e11) {
                throw new k0(a10, (Uri) ne.a.e(a0Var.p()), a0Var.d(), a0Var.o(), e11);
            }
        }
    }

    private static String d(g.f fVar, int i10) {
        Map map;
        List list;
        int i11 = fVar.f13064o;
        if ((i11 != 307 && i11 != 308) || i10 >= 5 || (map = fVar.f13066q) == null || (list = (List) map.get("Location")) == null || list.isEmpty()) {
            return null;
        }
        return (String) list.get(0);
    }

    @Override // rc.j0
    public byte[] a(UUID uuid, b0.a aVar) {
        String str;
        String b10 = aVar.b();
        if (this.f48728c || TextUtils.isEmpty(b10)) {
            b10 = this.f48727b;
        }
        if (!TextUtils.isEmpty(b10)) {
            HashMap hashMap = new HashMap();
            UUID uuid2 = lc.d.f36656e;
            if (uuid2.equals(uuid)) {
                str = "text/xml";
            } else if (lc.d.f36654c.equals(uuid)) {
                str = "application/json";
            } else {
                str = "application/octet-stream";
            }
            hashMap.put("Content-Type", str);
            if (uuid2.equals(uuid)) {
                hashMap.put("SOAPAction", "http://schemas.microsoft.com/DRM/2007/03/protocols/AcquireLicense");
            }
            synchronized (this.f48729d) {
                hashMap.putAll(this.f48729d);
            }
            return c(this.f48726a, b10, aVar.a(), hashMap);
        }
        a.b bVar = new a.b();
        Uri uri = Uri.EMPTY;
        throw new k0(bVar.i(uri).a(), uri, ji.t.j(), 0L, new IllegalStateException("No license URL"));
    }

    @Override // rc.j0
    public byte[] b(UUID uuid, b0.d dVar) {
        return c(this.f48726a, dVar.b() + "&signedRequest=" + w0.E(dVar.a()), null, Collections.EMPTY_MAP);
    }

    public void e(String str, String str2) {
        ne.a.e(str);
        ne.a.e(str2);
        synchronized (this.f48729d) {
            this.f48729d.put(str, str2);
        }
    }
}
