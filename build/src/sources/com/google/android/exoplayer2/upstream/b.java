package com.google.android.exoplayer2.upstream;

import android.content.Context;
import android.net.Uri;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.d;
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
    private final Context f13286a;

    /* renamed from: b  reason: collision with root package name */
    private final List f13287b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f13288c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f13289d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f13290e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f13291f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f13292g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f13293h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f13294i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f13295j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f13296k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f13297a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13298b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f13299c;

        public a(Context context) {
            this(context, new d.b());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f13297a, this.f13298b.createDataSource());
            c0 c0Var = this.f13299c;
            if (c0Var != null) {
                bVar.j(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f13297a = context.getApplicationContext();
            this.f13298b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f13286a = context.getApplicationContext();
        this.f13288c = (DataSource) ne.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f13287b.size(); i10++) {
            dataSource.j((c0) this.f13287b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f13290e == null) {
            le.c cVar = new le.c(this.f13286a);
            this.f13290e = cVar;
            o(cVar);
        }
        return this.f13290e;
    }

    private DataSource q() {
        if (this.f13291f == null) {
            le.i iVar = new le.i(this.f13286a);
            this.f13291f = iVar;
            o(iVar);
        }
        return this.f13291f;
    }

    private DataSource r() {
        if (this.f13294i == null) {
            le.k kVar = new le.k();
            this.f13294i = kVar;
            o(kVar);
        }
        return this.f13294i;
    }

    private DataSource s() {
        if (this.f13289d == null) {
            s sVar = new s();
            this.f13289d = sVar;
            o(sVar);
        }
        return this.f13289d;
    }

    private DataSource t() {
        if (this.f13295j == null) {
            w wVar = new w(this.f13286a);
            this.f13295j = wVar;
            o(wVar);
        }
        return this.f13295j;
    }

    private DataSource u() {
        if (this.f13292g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f13292g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f13292g == null) {
                this.f13292g = this.f13288c;
            }
        }
        return this.f13292g;
    }

    private DataSource v() {
        if (this.f13293h == null) {
            d0 d0Var = new d0();
            this.f13293h = d0Var;
            o(d0Var);
        }
        return this.f13293h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.j(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f13296k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        String scheme = aVar.f13265a.getScheme();
        if (w0.G0(aVar.f13265a)) {
            String path = aVar.f13265a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f13296k = p();
            } else {
                this.f13296k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f13296k = p();
        } else if ("content".equals(scheme)) {
            this.f13296k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f13296k = u();
        } else if ("udp".equals(scheme)) {
            this.f13296k = v();
        } else if ("data".equals(scheme)) {
            this.f13296k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f13296k = this.f13288c;
        } else {
            this.f13296k = t();
        }
        return this.f13296k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f13296k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f13296k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f13296k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void j(c0 c0Var) {
        ne.a.e(c0Var);
        this.f13288c.j(c0Var);
        this.f13287b.add(c0Var);
        w(this.f13289d, c0Var);
        w(this.f13290e, c0Var);
        w(this.f13291f, c0Var);
        w(this.f13292g, c0Var);
        w(this.f13293h, c0Var);
        w(this.f13294i, c0Var);
        w(this.f13295j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f13296k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) ne.a.e(this.f13296k)).read(bArr, i10, i11);
    }
}
