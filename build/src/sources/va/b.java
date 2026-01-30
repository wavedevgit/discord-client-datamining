package va;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f50782a;

    /* renamed from: b  reason: collision with root package name */
    private long f50783b;

    /* renamed from: c  reason: collision with root package name */
    private final int f50784c;

    /* renamed from: d  reason: collision with root package name */
    private final int f50785d;

    /* renamed from: e  reason: collision with root package name */
    private final s8.c f50786e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements s8.c {
        a() {
        }

        @Override // s8.c
        /* renamed from: a */
        public void release(Bitmap bitmap) {
            try {
                b.this.a(bitmap);
            } finally {
                bitmap.recycle();
            }
        }
    }

    public b(int i10, int i11) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        o8.j.b(Boolean.valueOf(i11 > 0));
        this.f50784c = i10;
        this.f50785d = i11;
        this.f50786e = new a();
    }

    public synchronized void a(Bitmap bitmap) {
        boolean z10;
        int j10 = cb.d.j(bitmap);
        boolean z11 = false;
        if (this.f50782a > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.c(z10, "No bitmaps registered.");
        long j11 = j10;
        if (j11 <= this.f50783b) {
            z11 = true;
        }
        o8.j.d(z11, "Bitmap size bigger than the total registered size: %d, %d", Integer.valueOf(j10), Long.valueOf(this.f50783b));
        this.f50783b -= j11;
        this.f50782a--;
    }

    public synchronized int b() {
        return this.f50782a;
    }

    public synchronized int c() {
        return this.f50784c;
    }

    public synchronized int d() {
        return this.f50785d;
    }

    public s8.c e() {
        return this.f50786e;
    }

    public synchronized long f() {
        return this.f50783b;
    }

    public synchronized boolean g(Bitmap bitmap) {
        int j10 = cb.d.j(bitmap);
        int i10 = this.f50782a;
        if (i10 < this.f50784c) {
            long j11 = this.f50783b;
            long j12 = j10;
            if (j11 + j12 <= this.f50785d) {
                this.f50782a = i10 + 1;
                this.f50783b = j11 + j12;
                return true;
            }
        }
        return false;
    }
}
