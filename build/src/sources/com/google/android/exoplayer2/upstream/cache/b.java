package com.google.android.exoplayer2.upstream.cache;

import com.google.android.exoplayer2.upstream.cache.a;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import kotlin.jvm.internal.LongCompanionObject;
import me.l;
import oe.w0;
import oe.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b implements l {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.cache.a f14035a;

    /* renamed from: b  reason: collision with root package name */
    private final long f14036b;

    /* renamed from: c  reason: collision with root package name */
    private final int f14037c;

    /* renamed from: d  reason: collision with root package name */
    private com.google.android.exoplayer2.upstream.a f14038d;

    /* renamed from: e  reason: collision with root package name */
    private long f14039e;

    /* renamed from: f  reason: collision with root package name */
    private File f14040f;

    /* renamed from: g  reason: collision with root package name */
    private OutputStream f14041g;

    /* renamed from: h  reason: collision with root package name */
    private long f14042h;

    /* renamed from: i  reason: collision with root package name */
    private long f14043i;

    /* renamed from: j  reason: collision with root package name */
    private i f14044j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends a.C0172a {
        public a(IOException iOException) {
            super(iOException);
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10) {
        this(aVar, j10, 20480);
    }

    private void a() {
        OutputStream outputStream = this.f14041g;
        if (outputStream == null) {
            return;
        }
        try {
            outputStream.flush();
            w0.n(this.f14041g);
            this.f14041g = null;
            this.f14040f = null;
            this.f14035a.g((File) w0.j(this.f14040f), this.f14042h);
        } catch (Throwable th2) {
            w0.n(this.f14041g);
            this.f14041g = null;
            this.f14040f = null;
            ((File) w0.j(this.f14040f)).delete();
            throw th2;
        }
    }

    private void c(com.google.android.exoplayer2.upstream.a aVar) {
        long j10 = aVar.f13990h;
        long j11 = -1;
        if (j10 != -1) {
            j11 = Math.min(j10 - this.f14043i, this.f14039e);
        }
        this.f14040f = this.f14035a.a((String) w0.j(aVar.f13991i), aVar.f13989g + this.f14043i, j11);
        FileOutputStream fileOutputStream = new FileOutputStream(this.f14040f);
        if (this.f14037c > 0) {
            i iVar = this.f14044j;
            if (iVar == null) {
                this.f14044j = new i(fileOutputStream, this.f14037c);
            } else {
                iVar.a(fileOutputStream);
            }
            this.f14041g = this.f14044j;
        } else {
            this.f14041g = fileOutputStream;
        }
        this.f14042h = 0L;
    }

    @Override // me.l
    public void b(com.google.android.exoplayer2.upstream.a aVar) {
        long j10;
        oe.a.e(aVar.f13991i);
        if (aVar.f13990h == -1 && aVar.d(2)) {
            this.f14038d = null;
            return;
        }
        this.f14038d = aVar;
        if (aVar.d(4)) {
            j10 = this.f14036b;
        } else {
            j10 = LongCompanionObject.MAX_VALUE;
        }
        this.f14039e = j10;
        this.f14043i = 0L;
        try {
            c(aVar);
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // me.l
    public void close() {
        if (this.f14038d == null) {
            return;
        }
        try {
            a();
        } catch (IOException e10) {
            throw new a(e10);
        }
    }

    @Override // me.l
    public void write(byte[] bArr, int i10, int i11) {
        com.google.android.exoplayer2.upstream.a aVar = this.f14038d;
        if (aVar != null) {
            int i12 = 0;
            while (i12 < i11) {
                try {
                    if (this.f14042h == this.f14039e) {
                        a();
                        c(aVar);
                    }
                    int min = (int) Math.min(i11 - i12, this.f14039e - this.f14042h);
                    ((OutputStream) w0.j(this.f14041g)).write(bArr, i10 + i12, min);
                    i12 += min;
                    long j10 = min;
                    this.f14042h += j10;
                    this.f14043i += j10;
                } catch (IOException e10) {
                    throw new a(e10);
                }
            }
        }
    }

    public b(com.google.android.exoplayer2.upstream.cache.a aVar, long j10, int i10) {
        oe.a.h(j10 > 0 || j10 == -1, "fragmentSize must be positive or C.LENGTH_UNSET.");
        int i11 = (j10 > (-1L) ? 1 : (j10 == (-1L) ? 0 : -1));
        if (i11 != 0 && j10 < 2097152) {
            y.i("CacheDataSink", "fragmentSize is below the minimum recommended value of 2097152. This may cause poor cache performance.");
        }
        this.f14035a = (com.google.android.exoplayer2.upstream.cache.a) oe.a.e(aVar);
        this.f14036b = i11 == 0 ? LongCompanionObject.MAX_VALUE : j10;
        this.f14037c = i10;
    }
}
