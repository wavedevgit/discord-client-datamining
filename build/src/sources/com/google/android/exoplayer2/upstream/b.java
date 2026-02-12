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
    private final Context f14004a;

    /* renamed from: b  reason: collision with root package name */
    private final List f14005b = new ArrayList();

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f14006c;

    /* renamed from: d  reason: collision with root package name */
    private DataSource f14007d;

    /* renamed from: e  reason: collision with root package name */
    private DataSource f14008e;

    /* renamed from: f  reason: collision with root package name */
    private DataSource f14009f;

    /* renamed from: g  reason: collision with root package name */
    private DataSource f14010g;

    /* renamed from: h  reason: collision with root package name */
    private DataSource f14011h;

    /* renamed from: i  reason: collision with root package name */
    private DataSource f14012i;

    /* renamed from: j  reason: collision with root package name */
    private DataSource f14013j;

    /* renamed from: k  reason: collision with root package name */
    private DataSource f14014k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements DataSource.Factory {

        /* renamed from: a  reason: collision with root package name */
        private final Context f14015a;

        /* renamed from: b  reason: collision with root package name */
        private final DataSource.Factory f14016b;

        /* renamed from: c  reason: collision with root package name */
        private c0 f14017c;

        public a(Context context) {
            this(context, new d.b());
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public b createDataSource() {
            b bVar = new b(this.f14015a, this.f14016b.createDataSource());
            c0 c0Var = this.f14017c;
            if (c0Var != null) {
                bVar.i(c0Var);
            }
            return bVar;
        }

        public a(Context context, DataSource.Factory factory) {
            this.f14015a = context.getApplicationContext();
            this.f14016b = factory;
        }
    }

    public b(Context context, DataSource dataSource) {
        this.f14004a = context.getApplicationContext();
        this.f14006c = (DataSource) oe.a.e(dataSource);
    }

    private void o(DataSource dataSource) {
        for (int i10 = 0; i10 < this.f14005b.size(); i10++) {
            dataSource.i((c0) this.f14005b.get(i10));
        }
    }

    private DataSource p() {
        if (this.f14008e == null) {
            me.c cVar = new me.c(this.f14004a);
            this.f14008e = cVar;
            o(cVar);
        }
        return this.f14008e;
    }

    private DataSource q() {
        if (this.f14009f == null) {
            me.i iVar = new me.i(this.f14004a);
            this.f14009f = iVar;
            o(iVar);
        }
        return this.f14009f;
    }

    private DataSource r() {
        if (this.f14012i == null) {
            me.k kVar = new me.k();
            this.f14012i = kVar;
            o(kVar);
        }
        return this.f14012i;
    }

    private DataSource s() {
        if (this.f14007d == null) {
            s sVar = new s();
            this.f14007d = sVar;
            o(sVar);
        }
        return this.f14007d;
    }

    private DataSource t() {
        if (this.f14013j == null) {
            w wVar = new w(this.f14004a);
            this.f14013j = wVar;
            o(wVar);
        }
        return this.f14013j;
    }

    private DataSource u() {
        if (this.f14010g == null) {
            try {
                DataSource dataSource = (DataSource) Class.forName("com.google.android.exoplayer2.ext.rtmp.RtmpDataSource").getConstructor(null).newInstance(null);
                this.f14010g = dataSource;
                o(dataSource);
            } catch (ClassNotFoundException unused) {
                y.i("DefaultDataSource", "Attempting to play RTMP stream without depending on the RTMP extension");
            } catch (Exception e10) {
                throw new RuntimeException("Error instantiating RTMP extension", e10);
            }
            if (this.f14010g == null) {
                this.f14010g = this.f14006c;
            }
        }
        return this.f14010g;
    }

    private DataSource v() {
        if (this.f14011h == null) {
            d0 d0Var = new d0();
            this.f14011h = d0Var;
            o(d0Var);
        }
        return this.f14011h;
    }

    private void w(DataSource dataSource, c0 c0Var) {
        if (dataSource != null) {
            dataSource.i(c0Var);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        boolean z10;
        if (this.f14014k == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        String scheme = aVar.f13983a.getScheme();
        if (w0.G0(aVar.f13983a)) {
            String path = aVar.f13983a.getPath();
            if (path != null && path.startsWith("/android_asset/")) {
                this.f14014k = p();
            } else {
                this.f14014k = s();
            }
        } else if ("asset".equals(scheme)) {
            this.f14014k = p();
        } else if ("content".equals(scheme)) {
            this.f14014k = q();
        } else if ("rtmp".equals(scheme)) {
            this.f14014k = u();
        } else if ("udp".equals(scheme)) {
            this.f14014k = v();
        } else if ("data".equals(scheme)) {
            this.f14014k = r();
        } else if (!"rawresource".equals(scheme) && !"android.resource".equals(scheme)) {
            this.f14014k = this.f14006c;
        } else {
            this.f14014k = t();
        }
        return this.f14014k.b(aVar);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        DataSource dataSource = this.f14014k;
        if (dataSource != null) {
            try {
                dataSource.close();
            } finally {
                this.f14014k = null;
            }
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Map d() {
        DataSource dataSource = this.f14014k;
        if (dataSource == null) {
            return Collections.EMPTY_MAP;
        }
        return dataSource.d();
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void i(c0 c0Var) {
        oe.a.e(c0Var);
        this.f14006c.i(c0Var);
        this.f14005b.add(c0Var);
        w(this.f14007d, c0Var);
        w(this.f14008e, c0Var);
        w(this.f14009f, c0Var);
        w(this.f14010g, c0Var);
        w(this.f14011h, c0Var);
        w(this.f14012i, c0Var);
        w(this.f14013j, c0Var);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        DataSource dataSource = this.f14014k;
        if (dataSource == null) {
            return null;
        }
        return dataSource.m();
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        return ((DataSource) oe.a.e(this.f14014k)).read(bArr, i10, i11);
    }
}
