package hu;

import cu.k;
import hu.j;
import java.io.IOException;
import kotlin.jvm.internal.Intrinsics;
import ku.n;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final g f26533a;

    /* renamed from: b  reason: collision with root package name */
    private final okhttp3.a f26534b;

    /* renamed from: c  reason: collision with root package name */
    private final e f26535c;

    /* renamed from: d  reason: collision with root package name */
    private final okhttp3.e f26536d;

    /* renamed from: e  reason: collision with root package name */
    private j.b f26537e;

    /* renamed from: f  reason: collision with root package name */
    private j f26538f;

    /* renamed from: g  reason: collision with root package name */
    private int f26539g;

    /* renamed from: h  reason: collision with root package name */
    private int f26540h;

    /* renamed from: i  reason: collision with root package name */
    private int f26541i;

    /* renamed from: j  reason: collision with root package name */
    private k f26542j;

    public d(g connectionPool, okhttp3.a address, e call, okhttp3.e eventListener) {
        Intrinsics.checkNotNullParameter(connectionPool, "connectionPool");
        Intrinsics.checkNotNullParameter(address, "address");
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(eventListener, "eventListener");
        this.f26533a = connectionPool;
        this.f26534b = address;
        this.f26535c = call;
        this.f26536d = eventListener;
    }

    /* JADX WARN: Removed duplicated region for block: B:56:0x012c  */
    /* JADX WARN: Removed duplicated region for block: B:58:0x0146  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private final hu.f b(int r13, int r14, int r15, int r16, boolean r17) {
        /*
            Method dump skipped, instructions count: 376
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: hu.d.b(int, int, int, int, boolean):hu.f");
    }

    private final f c(int i10, int i11, int i12, int i13, boolean z10, boolean z11) {
        boolean z12;
        while (true) {
            f b10 = b(i10, i11, i12, i13, z10);
            boolean z13 = z10;
            int i14 = i13;
            int i15 = i12;
            int i16 = i11;
            int i17 = i10;
            if (b10.u(z11)) {
                return b10;
            }
            b10.z();
            if (this.f26542j == null) {
                j.b bVar = this.f26537e;
                boolean z14 = true;
                if (bVar != null) {
                    z12 = bVar.b();
                } else {
                    z12 = true;
                }
                if (z12) {
                    continue;
                } else {
                    j jVar = this.f26538f;
                    if (jVar != null) {
                        z14 = jVar.a();
                    }
                    if (!z14) {
                        throw new IOException("exhausted all routes");
                    }
                }
            }
            i10 = i17;
            i11 = i16;
            i12 = i15;
            i13 = i14;
            z10 = z13;
        }
    }

    private final k f() {
        f l10;
        if (this.f26539g > 1 || this.f26540h > 1 || this.f26541i > 0 || (l10 = this.f26535c.l()) == null) {
            return null;
        }
        synchronized (l10) {
            if (l10.q() != 0) {
                return null;
            }
            if (!du.e.j(l10.A().a().l(), this.f26534b.l())) {
                return null;
            }
            return l10.A();
        }
    }

    public final iu.d a(OkHttpClient client, iu.g chain) {
        Intrinsics.checkNotNullParameter(client, "client");
        Intrinsics.checkNotNullParameter(chain, "chain");
        try {
            try {
                return c(chain.e(), chain.h(), chain.j(), client.G(), client.M(), !Intrinsics.areEqual(chain.i().j(), "GET")).w(client, chain);
            } catch (i e10) {
                e = e10;
                i iVar = e;
                h(iVar.c());
                throw iVar;
            } catch (IOException e11) {
                e = e11;
                IOException iOException = e;
                h(iOException);
                throw new i(iOException);
            }
        } catch (i e12) {
            e = e12;
        } catch (IOException e13) {
            e = e13;
        }
    }

    public final okhttp3.a d() {
        return this.f26534b;
    }

    public final boolean e() {
        j jVar;
        if (this.f26539g == 0 && this.f26540h == 0 && this.f26541i == 0) {
            return false;
        }
        if (this.f26542j != null) {
            return true;
        }
        k f10 = f();
        if (f10 != null) {
            this.f26542j = f10;
            return true;
        }
        j.b bVar = this.f26537e;
        if ((bVar != null && bVar.b()) || (jVar = this.f26538f) == null) {
            return true;
        }
        return jVar.a();
    }

    public final boolean g(HttpUrl url) {
        Intrinsics.checkNotNullParameter(url, "url");
        HttpUrl l10 = this.f26534b.l();
        if (url.o() == l10.o() && Intrinsics.areEqual(url.i(), l10.i())) {
            return true;
        }
        return false;
    }

    public final void h(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        this.f26542j = null;
        if ((e10 instanceof n) && ((n) e10).f35443d == ku.b.REFUSED_STREAM) {
            this.f26539g++;
        } else if (e10 instanceof ku.a) {
            this.f26540h++;
        } else {
            this.f26541i++;
        }
    }
}
