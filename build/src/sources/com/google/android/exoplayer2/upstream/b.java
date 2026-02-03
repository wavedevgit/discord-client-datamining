package com.google.android.exoplayer2.upstream;

import android.content.Context;
import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.DefaultHttpDataSource;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import le.c0;
import le.d0;
import le.s;
import le.w;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements DataSource {

    /* renamed from: a  reason: collision with root package name */
    private final Context f13996a;

    /* renamed from: b  reason: collision with root package name */
    private final List f13997b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f13998c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f13999d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f14000e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f14001f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f14002g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f14003h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f14004i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f14005j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f14006k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f14007a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f14008b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f14009c;

        public a(Context context) {
            this(context, new DefaultHttpDataSource.Factory());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f14007a, this.f14008b.createDataSource());
            c0 c0Var = this.f14009c;
            if (c0Var != null) {
                bVar.j(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f14007a = context.getApplicationContext();
            this.f14008b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f13996a = context.getApplicationContext();
        this.f13998c = (DataSource) ne.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f13997b.size(); i10++) {
            dataSource.j((c0) this.f13997b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f14000e == null) {
            le.c cVar = new le.c(this.f13996a);
            this.f14000e = cVar;
            o(cVar);
        }
        return this.f14000e;
    }

    private DataSource q() {
        if (this.f14001f == null) {
            le.i iVar = new le.i(this.f13996a);
            this.f14001f = iVar;
            o(iVar);
        }
        return this.f14001f;
    }

    private DataSource r() {
        if (this.f14004i == null) {
            le.k kVar = new le.k();
            this.f14004i = kVar;
            o(kVar);
        }
        return this.f14004i;
    }

    private DataSource s() {
        if (this.f13999d == null) {
            s sVar = new s();
            this.f13999d = sVar;
            o(sVar);
        }
        return this.f13999d;
    }

    private DataSource t() {
        if (this.f14005j == null) {
            w wVar = new w(this.f13996a);
            this.f14005j = wVar;
            o(wVar);
        }
        return this.f14005j;
    }

    private DataSource u() {
        if (this.f14002g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f14002g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f14002g == null) {
                this.f14002g = this.f13998c;
            }
        }
        return this.f14002g;
    }

    private DataSource v() {
        if (this.f14003h == null) {
            d0 d0Var = new d0();
            this.f14003h = d0Var;
            o(d0Var);
        }
        return this.f14003h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.j(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f14006k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        String scheme = aVar.f13975a.getScheme();
        if (w0.G0(aVar.f13975a)) {
            String path = aVar.f13975a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f14006k = p();
            } else {
                this.f14006k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f14006k = p();
        } else if ("content".equals(scheme)) {
            this.f14006k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f14006k = u();
        } else if ("udp".equals(scheme)) {
            this.f14006k = v();
        } else if ("data".equals(scheme)) {
            this.f14006k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f14006k = this.f13998c;
        } else {
            this.f14006k = t();
        }
        return this.f14006k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f14006k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14006k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f14006k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f13998c.j(c0Var);
        this.f13997b.add(c0Var);
        w(this.f13999d, c0Var);
        w(this.f14000e, c0Var);
        w(this.f14001f, c0Var);
        w(this.f14002g, c0Var);
        w(this.f14003h, c0Var);
        w(this.f14004i, c0Var);
        w(this.f14005j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f14006k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) ne.a.e(this.f14006k)).read(bArr, i10, i11);
    }
}
