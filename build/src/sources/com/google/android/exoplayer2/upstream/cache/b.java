package com.google.android.exoplayer2.upstream.cache;

import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import kotlin.jvm.internal.LongCompanionObject;
import le.l;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f13317a;

    /* renamed from: b  reason: collision with root package name */
    private final long f13318b;

    /* renamed from: c  reason: collision with root package name */
    private final int f13319c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13320d;

    /* renamed from: e  reason: collision with root package name */
    private long f13321e;

    /* renamed from: f  reason: collision with root package name */
    private File f13322f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f13323g;

    /* renamed from: h  reason: collision with root package name */
    private long f13324h;

    /* renamed from: i  reason: collision with root package name */
    private long f13325i;

    /* renamed from: j  reason: collision with root package name */
    private i f13326j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0168a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f13323g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f13323g);
            this.f13323g = null;
            this.f13322f = null;
            this.f13317a.h((File) w0.j(this.f13322f), this.f13324h);
        } catch (Throwable th2) {
            w0.n(this.f13323g);
            this.f13323g = null;
            this.f13322f = null;
            ((File) w0.j(this.f13322f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13272h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f13325i, this.f13321e);
        }
        this.f13322f = this.f13317a.a((String) w0.j(aVar.f13273i), aVar.f13271g + this.f13325i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f13322f);
        if (this.f13319c > 0) {
            i iVar = this.f13326j;
            if (iVar == null) {
                this.f13326j = new i(fileOutputStream, this.f13319c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f13323g = this.f13326j;
        } else {
            this.f13323g = fileOutputStream;
        }
        this.f13324h = 0L;
    }

    @Override // le.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        ne.a.e(aVar.f13273i);
        if (aVar.f13272h == -1 && aVar.d(2)) {
            this.f13320d = null;
            return;
        }
        this.f13320d = aVar;
        if (aVar.d(4)) {
            j10 = this.f13318b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f13321e = j10;
        this.f13325i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void close() {
        if (this.f13320d == null) {
            return;
        }
        try {
            a();
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void write(byte[] bArr, int i10, int i11) {
        com.google.android.exoplayer2.upstream.a aVar = this.f13320d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f13324h == this.f13321e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f13321e - this.f13324h);
                    ((OutputStream) w0.j(this.f13323g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f13324h += j10;
                    this.f13325i += j10;
                } catch (IOException e10) {
                    throw new a(e10);
                }
            }
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10, int i10) {
        ne.a.h(j10 > 0 || j10 == -1, "fragmentSize must be positive or C.LENGTH_UNSET.");
        int i11 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
        if (i11 != 0 && j10 < 2097152) {
            y.i("CacheDataSink", "fragmentSize is below the minimum recommended value of 2097152. This may cause poor cache performance.");
        }
        this.f13317a = (com.google.android.exoplayer2.upstream.cache.a) ne.a.e(aVar);
        this.f13318b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f13319c = i10;
    }
}
