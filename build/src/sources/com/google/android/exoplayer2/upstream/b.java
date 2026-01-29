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
    private final Context f14367a;

    /* renamed from: b  reason: collision with root package name */
    private final List f14368b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f14369c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f14370d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f14371e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f14372f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f14373g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f14374h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f14375i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f14376j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f14377k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f14378a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f14379b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f14380c;

        public a(Context context) {
            this(context, new DefaultHttpDataSource.Factory());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f14378a, this.f14379b.createDataSource());
            c0 c0Var = this.f14380c;
            if (c0Var != null) {
                bVar.j(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f14378a = context.getApplicationContext();
            this.f14379b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f14367a = context.getApplicationContext();
        this.f14369c = (DataSource) ne.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f14368b.size(); i10++) {
            dataSource.j((c0) this.f14368b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f14371e == null) {
            le.c cVar = new le.c(this.f14367a);
            this.f14371e = cVar;
            o(cVar);
        }
        return this.f14371e;
    }

    private DataSource q() {
        if (this.f14372f == null) {
            le.i iVar = new le.i(this.f14367a);
            this.f14372f = iVar;
            o(iVar);
        }
        return this.f14372f;
    }

    private DataSource r() {
        if (this.f14375i == null) {
            le.k kVar = new le.k();
            this.f14375i = kVar;
            o(kVar);
        }
        return this.f14375i;
    }

    private DataSource s() {
        if (this.f14370d == null) {
            s sVar = new s();
            this.f14370d = sVar;
            o(sVar);
        }
        return this.f14370d;
    }

    private DataSource t() {
        if (this.f14376j == null) {
            w wVar = new w(this.f14367a);
            this.f14376j = wVar;
            o(wVar);
        }
        return this.f14376j;
    }

    private DataSource u() {
        if (this.f14373g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f14373g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f14373g == null) {
                this.f14373g = this.f14369c;
            }
        }
        return this.f14373g;
    }

    private DataSource v() {
        if (this.f14374h == null) {
            d0 d0Var = new d0();
            this.f14374h = d0Var;
            o(d0Var);
        }
        return this.f14374h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.j(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f14377k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        String scheme = aVar.f14346a.getScheme();
        if (w0.G0(aVar.f14346a)) {
            String path = aVar.f14346a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f14377k = p();
            } else {
                this.f14377k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f14377k = p();
        } else if ("content".equals(scheme)) {
            this.f14377k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f14377k = u();
        } else if ("udp".equals(scheme)) {
            this.f14377k = v();
        } else if ("data".equals(scheme)) {
            this.f14377k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f14377k = this.f14369c;
        } else {
            this.f14377k = t();
        }
        return this.f14377k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f14377k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14377k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f14377k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f14369c.j(c0Var);
        this.f14368b.add(c0Var);
        w(this.f14370d, c0Var);
        w(this.f14371e, c0Var);
        w(this.f14372f, c0Var);
        w(this.f14373g, c0Var);
        w(this.f14374h, c0Var);
        w(this.f14375i, c0Var);
        w(this.f14376j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f14377k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) ne.a.e(this.f14377k)).read(bArr, i10, i11);
    }
}
