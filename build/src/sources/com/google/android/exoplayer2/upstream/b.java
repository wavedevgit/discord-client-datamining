package com.google.android.exoplayer2.upstream;

import android.content.Context;
import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.d;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import me.c0;
import me.d0;
import me.s;
import me.w;
import oe.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final Context f14003a;

    /* renamed from: b  reason: collision with root package name */
    private final List f14004b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f14005c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f14006d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f14007e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f14008f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f14009g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f14010h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f14011i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f14012j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f14013k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f14014a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f14015b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f14016c;

        public a(Context context) {
            this(context, new d.b());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f14014a, this.f14015b.createDataSource());
            c0 c0Var = this.f14016c;
            if (c0Var != null) {
                bVar.i(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f14014a = context.getApplicationContext();
            this.f14015b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f14003a = context.getApplicationContext();
        this.f14005c = (DataSource) oe.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f14004b.size(); i10++) {
            dataSource.i((c0) this.f14004b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f14007e == null) {
            me.c cVar = new me.c(this.f14003a);
            this.f14007e = cVar;
            o(cVar);
        }
        return this.f14007e;
    }

    private DataSource q() {
        if (this.f14008f == null) {
            me.i iVar = new me.i(this.f14003a);
            this.f14008f = iVar;
            o(iVar);
        }
        return this.f14008f;
    }

    private DataSource r() {
        if (this.f14011i == null) {
            me.k kVar = new me.k();
            this.f14011i = kVar;
            o(kVar);
        }
        return this.f14011i;
    }

    private DataSource s() {
        if (this.f14006d == null) {
            s sVar = new s();
            this.f14006d = sVar;
            o(sVar);
        }
        return this.f14006d;
    }

    private DataSource t() {
        if (this.f14012j == null) {
            w wVar = new w(this.f14003a);
            this.f14012j = wVar;
            o(wVar);
        }
        return this.f14012j;
    }

    private DataSource u() {
        if (this.f14009g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f14009g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f14009g == null) {
                this.f14009g = this.f14005c;
            }
        }
        return this.f14009g;
    }

    private DataSource v() {
        if (this.f14010h == null) {
            d0 d0Var = new d0();
            this.f14010h = d0Var;
            o(d0Var);
        }
        return this.f14010h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.i(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f14013k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        String scheme = aVar.f13982a.getScheme();
        if (w0.G0(aVar.f13982a)) {
            String path = aVar.f13982a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f14013k = p();
            } else {
                this.f14013k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f14013k = p();
        } else if ("content".equals(scheme)) {
            this.f14013k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f14013k = u();
        } else if ("udp".equals(scheme)) {
            this.f14013k = v();
        } else if ("data".equals(scheme)) {
            this.f14013k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f14013k = this.f14005c;
        } else {
            this.f14013k = t();
        }
        return this.f14013k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f14013k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14013k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f14013k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f14005c.i(c0Var);
        this.f14004b.add(c0Var);
        w(this.f14006d, c0Var);
        w(this.f14007e, c0Var);
        w(this.f14008f, c0Var);
        w(this.f14009g, c0Var);
        w(this.f14010h, c0Var);
        w(this.f14011i, c0Var);
        w(this.f14012j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f14013k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) oe.a.e(this.f14013k)).read(bArr, i10, i11);
    }
}
