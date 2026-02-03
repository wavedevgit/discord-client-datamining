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
    private final com.google.android.exoplayer2.upstream.cache.a f12995a;

    /* renamed from: b  reason: collision with root package name */
    private final long f12996b;

    /* renamed from: c  reason: collision with root package name */
    private final int f12997c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f12998d;

    /* renamed from: e  reason: collision with root package name */
    private long f12999e;

    /* renamed from: f  reason: collision with root package name */
    private File f13000f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f13001g;

    /* renamed from: h  reason: collision with root package name */
    private long f13002h;

    /* renamed from: i  reason: collision with root package name */
    private long f13003i;

    /* renamed from: j  reason: collision with root package name */
    private i f13004j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0159a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f13001g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f13001g);
            this.f13001g = null;
            this.f13000f = null;
            this.f12995a.h((File) w0.j(this.f13000f), this.f13002h);
        } catch (Throwable th2) {
            w0.n(this.f13001g);
            this.f13001g = null;
            this.f13000f = null;
            ((File) w0.j(this.f13000f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f12950h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f13003i, this.f12999e);
        }
        this.f13000f = this.f12995a.a((String) w0.j(aVar.f12951i), aVar.f12949g + this.f13003i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f13000f);
        if (this.f12997c > 0) {
            i iVar = this.f13004j;
            if (iVar == null) {
                this.f13004j = new i(fileOutputStream, this.f12997c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f13001g = this.f13004j;
        } else {
            this.f13001g = fileOutputStream;
        }
        this.f13002h = 0L;
    }

    @Override // le.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        ne.a.e(aVar.f12951i);
        if (aVar.f12950h == -1 && aVar.d(2)) {
            this.f12998d = null;
            return;
        }
        this.f12998d = aVar;
        if (aVar.d(4)) {
            j10 = this.f12996b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f12999e = j10;
        this.f13003i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // le.l
    public void close() {
        if (this.f12998d == null) {
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
        com.google.android.exoplayer2.upstream.a aVar = this.f12998d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f13002h == this.f12999e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f12999e - this.f13002h);
                    ((OutputStream) w0.j(this.f13001g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f13002h += j10;
                    this.f13003i += j10;
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
        this.f12995a = (com.google.android.exoplayer2.upstream.cache.a) ne.a.e(aVar);
        this.f12996b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f12997c = i10;
    }
}
