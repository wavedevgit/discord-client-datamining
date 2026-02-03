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
    private final Context f12964a;

    /* renamed from: b  reason: collision with root package name */
    private final List f12965b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f12966c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f12967d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f12968e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f12969f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f12970g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f12971h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f12972i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f12973j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f12974k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f12975a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f12976b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f12977c;

        public a(Context context) {
            this(context, new DefaultHttpDataSource.Factory());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f12975a, this.f12976b.createDataSource());
            c0 c0Var = this.f12977c;
            if (c0Var != null) {
                bVar.j(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f12975a = context.getApplicationContext();
            this.f12976b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f12964a = context.getApplicationContext();
        this.f12966c = (DataSource) ne.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f12965b.size(); i10++) {
            dataSource.j((c0) this.f12965b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f12968e == null) {
            le.c cVar = new le.c(this.f12964a);
            this.f12968e = cVar;
            o(cVar);
        }
        return this.f12968e;
    }

    private DataSource q() {
        if (this.f12969f == null) {
            le.i iVar = new le.i(this.f12964a);
            this.f12969f = iVar;
            o(iVar);
        }
        return this.f12969f;
    }

    private DataSource r() {
        if (this.f12972i == null) {
            le.k kVar = new le.k();
            this.f12972i = kVar;
            o(kVar);
        }
        return this.f12972i;
    }

    private DataSource s() {
        if (this.f12967d == null) {
            s sVar = new s();
            this.f12967d = sVar;
            o(sVar);
        }
        return this.f12967d;
    }

    private DataSource t() {
        if (this.f12973j == null) {
            w wVar = new w(this.f12964a);
            this.f12973j = wVar;
            o(wVar);
        }
        return this.f12973j;
    }

    private DataSource u() {
        if (this.f12970g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f12970g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f12970g == null) {
                this.f12970g = this.f12966c;
            }
        }
        return this.f12970g;
    }

    private DataSource v() {
        if (this.f12971h == null) {
            d0 d0Var = new d0();
            this.f12971h = d0Var;
            o(d0Var);
        }
        return this.f12971h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.j(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f12974k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        String scheme = aVar.f12943a.getScheme();
        if (w0.G0(aVar.f12943a)) {
            String path = aVar.f12943a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f12974k = p();
            } else {
                this.f12974k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f12974k = p();
        } else if ("content".equals(scheme)) {
            this.f12974k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f12974k = u();
        } else if ("udp".equals(scheme)) {
            this.f12974k = v();
        } else if ("data".equals(scheme)) {
            this.f12974k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f12974k = this.f12966c;
        } else {
            this.f12974k = t();
        }
        return this.f12974k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f12974k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f12974k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f12974k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f12966c.j(c0Var);
        this.f12965b.add(c0Var);
        w(this.f12967d, c0Var);
        w(this.f12968e, c0Var);
        w(this.f12969f, c0Var);
        w(this.f12970g, c0Var);
        w(this.f12971h, c0Var);
        w(this.f12972i, c0Var);
        w(this.f12973j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f12974k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) ne.a.e(this.f12974k)).read(bArr, i10, i11);
    }
}
