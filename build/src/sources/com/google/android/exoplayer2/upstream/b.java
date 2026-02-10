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
    private final Context f13426a;

    /* renamed from: b  reason: collision with root package name */
    private final List f13427b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f13428c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f13429d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f13430e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f13431f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f13432g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f13433h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f13434i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f13435j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f13436k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f13437a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f13438b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f13439c;

        public a(Context context) {
            this(context, new d.b());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f13437a, this.f13438b.createDataSource());
            c0 c0Var = this.f13439c;
            if (c0Var != null) {
                bVar.i(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f13437a = context.getApplicationContext();
            this.f13438b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f13426a = context.getApplicationContext();
        this.f13428c = (DataSource) oe.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f13427b.size(); i10++) {
            dataSource.i((c0) this.f13427b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f13430e == null) {
            me.c cVar = new me.c(this.f13426a);
            this.f13430e = cVar;
            o(cVar);
        }
        return this.f13430e;
    }

    private DataSource q() {
        if (this.f13431f == null) {
            me.i iVar = new me.i(this.f13426a);
            this.f13431f = iVar;
            o(iVar);
        }
        return this.f13431f;
    }

    private DataSource r() {
        if (this.f13434i == null) {
            me.k kVar = new me.k();
            this.f13434i = kVar;
            o(kVar);
        }
        return this.f13434i;
    }

    private DataSource s() {
        if (this.f13429d == null) {
            s sVar = new s();
            this.f13429d = sVar;
            o(sVar);
        }
        return this.f13429d;
    }

    private DataSource t() {
        if (this.f13435j == null) {
            w wVar = new w(this.f13426a);
            this.f13435j = wVar;
            o(wVar);
        }
        return this.f13435j;
    }

    private DataSource u() {
        if (this.f13432g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f13432g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f13432g == null) {
                this.f13432g = this.f13428c;
            }
        }
        return this.f13432g;
    }

    private DataSource v() {
        if (this.f13433h == null) {
            d0 d0Var = new d0();
            this.f13433h = d0Var;
            o(d0Var);
        }
        return this.f13433h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.i(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f13436k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        String scheme = aVar.f13405a.getScheme();
        if (w0.G0(aVar.f13405a)) {
            String path = aVar.f13405a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f13436k = p();
            } else {
                this.f13436k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f13436k = p();
        } else if ("content".equals(scheme)) {
            this.f13436k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f13436k = u();
        } else if ("udp".equals(scheme)) {
            this.f13436k = v();
        } else if ("data".equals(scheme)) {
            this.f13436k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f13436k = this.f13428c;
        } else {
            this.f13436k = t();
        }
        return this.f13436k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f13436k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f13436k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f13436k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f13428c.i(c0Var);
        this.f13427b.add(c0Var);
        w(this.f13429d, c0Var);
        w(this.f13430e, c0Var);
        w(this.f13431f, c0Var);
        w(this.f13432g, c0Var);
        w(this.f13433h, c0Var);
        w(this.f13434i, c0Var);
        w(this.f13435j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f13436k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) oe.a.e(this.f13436k)).read(bArr, i10, i11);
    }
}
