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
    private final com.google.android.exoplayer2.upstream.cache.a f13380a;

    /* renamed from: b  reason: collision with root package name */
    private final long f13381b;

    /* renamed from: c  reason: collision with root package name */
    private final int f13382c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f13383d;

    /* renamed from: e  reason: collision with root package name */
    private long f13384e;

    /* renamed from: f  reason: collision with root package name */
    private File f13385f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f13386g;

    /* renamed from: h  reason: collision with root package name */
    private long f13387h;

    /* renamed from: i  reason: collision with root package name */
    private long f13388i;

    /* renamed from: j  reason: collision with root package name */
    private i f13389j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0175a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f13386g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f13386g);
            this.f13386g = null;
            this.f13385f = null;
            this.f13380a.h((File) w0.j(this.f13385f), this.f13387h);
        } catch (Throwable th2) {
            w0.n(this.f13386g);
            this.f13386g = null;
            this.f13385f = null;
            ((File) w0.j(this.f13385f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13335h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f13388i, this.f13384e);
        }
        this.f13385f = this.f13380a.a((String) w0.j(aVar.f13336i), aVar.f13334g + this.f13388i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f13385f);
        if (this.f13382c > 0) {
            i iVar = this.f13389j;
            if (iVar == null) {
                this.f13389j = new i(fileOutputStream, this.f13382c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f13386g = this.f13389j;
        } else {
            this.f13386g = fileOutputStream;
        }
        this.f13387h = 0L;
    }

    @Override // le.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        ne.a.e(aVar.f13336i);
        if (aVar.f13335h == -1 && aVar.d(2)) {
            this.f13383d = null;
            return;
        }
        this.f13383d = aVar;
        if (aVar.d(4)) {
            j10 = this.f13381b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f13384e = j10;
        this.f13388i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void close() {
        if (this.f13383d == null) {
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
        com.google.android.exoplayer2.upstream.a aVar = this.f13383d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f13387h == this.f13384e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f13384e - this.f13387h);
                    ((OutputStream) w0.j(this.f13386g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f13387h += j10;
                    this.f13388i += j10;
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
        this.f13380a = (com.google.android.exoplayer2.upstream.cache.a) ne.a.e(aVar);
        this.f13381b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f13382c = i10;
    }
}
