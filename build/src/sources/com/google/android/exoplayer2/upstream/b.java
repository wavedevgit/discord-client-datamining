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
    private final Context f13349a;

    /* renamed from: b  reason: collision with root package name */
    private final List f13350b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f13351c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f13352d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f13353e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f13354f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f13355g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f13356h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f13357i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f13358j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f13359k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f13360a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13361b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f13362c;

        public a(Context context) {
            this(context, new DefaultHttpDataSource.Factory());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f13360a, this.f13361b.createDataSource());
            c0 c0Var = this.f13362c;
            if (c0Var != null) {
                bVar.j(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f13360a = context.getApplicationContext();
            this.f13361b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f13349a = context.getApplicationContext();
        this.f13351c = (DataSource) ne.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f13350b.size(); i10++) {
            dataSource.j((c0) this.f13350b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f13353e == null) {
            le.c cVar = new le.c(this.f13349a);
            this.f13353e = cVar;
            o(cVar);
        }
        return this.f13353e;
    }

    private DataSource q() {
        if (this.f13354f == null) {
            le.i iVar = new le.i(this.f13349a);
            this.f13354f = iVar;
            o(iVar);
        }
        return this.f13354f;
    }

    private DataSource r() {
        if (this.f13357i == null) {
            le.k kVar = new le.k();
            this.f13357i = kVar;
            o(kVar);
        }
        return this.f13357i;
    }

    private DataSource s() {
        if (this.f13352d == null) {
            s sVar = new s();
            this.f13352d = sVar;
            o(sVar);
        }
        return this.f13352d;
    }

    private DataSource t() {
        if (this.f13358j == null) {
            w wVar = new w(this.f13349a);
            this.f13358j = wVar;
            o(wVar);
        }
        return this.f13358j;
    }

    private DataSource u() {
        if (this.f13355g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f13355g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f13355g == null) {
                this.f13355g = this.f13351c;
            }
        }
        return this.f13355g;
    }

    private DataSource v() {
        if (this.f13356h == null) {
            d0 d0Var = new d0();
            this.f13356h = d0Var;
            o(d0Var);
        }
        return this.f13356h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.j(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f13359k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        String scheme = aVar.f13328a.getScheme();
        if (w0.G0(aVar.f13328a)) {
            String path = aVar.f13328a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f13359k = p();
            } else {
                this.f13359k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f13359k = p();
        } else if ("content".equals(scheme)) {
            this.f13359k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f13359k = u();
        } else if ("udp".equals(scheme)) {
            this.f13359k = v();
        } else if ("data".equals(scheme)) {
            this.f13359k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f13359k = this.f13351c;
        } else {
            this.f13359k = t();
        }
        return this.f13359k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f13359k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f13359k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f13359k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f13351c.j(c0Var);
        this.f13350b.add(c0Var);
        w(this.f13352d, c0Var);
        w(this.f13353e, c0Var);
        w(this.f13354f, c0Var);
        w(this.f13355g, c0Var);
        w(this.f13356h, c0Var);
        w(this.f13357i, c0Var);
        w(this.f13358j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f13359k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) ne.a.e(this.f13359k)).read(bArr, i10, i11);
    }
}
