package va;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f51234a;

    /* renamed from: b  reason: collision with root package name */
    private long f51235b;

    /* renamed from: c  reason: collision with root package name */
    private final int f51236c;

    /* renamed from: d  reason: collision with root package name */
    private final int f51237d;

    /* renamed from: e  reason: collision with root package name */
    private final s8.c f51238e;

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
        this.f51236c = i10;
        this.f51237d = i11;
        this.f51238e = new a();
    }

    public synchronized void a(Bitmap bitmap) {
        boolean z10;
        int j10 = cb.d.j(bitmap);
        boolean z11 = false;
        if (this.f51234a > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.c(z10, "No bitmaps registered.");
        long j11 = j10;
        if (j11 <= this.f51235b) {
            z11 = true;
        }
        o8.j.d(z11, "Bitmap size bigger than the total registered size: %d, %d", Integer.valueOf(j10), Long.valueOf(this.f51235b));
        this.f51235b -= j11;
        this.f51234a--;
    }

    public synchronized int b() {
        return this.f51234a;
    }

    public synchronized int c() {
        return this.f51236c;
    }

    public synchronized int d() {
        return this.f51237d;
    }

    public s8.c e() {
        return this.f51238e;
    }

    public synchronized long f() {
        return this.f51235b;
    }

    public synchronized boolean g(Bitmap bitmap) {
        int j10 = cb.d.j(bitmap);
        int i10 = this.f51234a;
        if (i10 < this.f51236c) {
            long j11 = this.f51235b;
            long j12 = j10;
            if (j11 + j12 <= this.f51237d) {
                this.f51234a = i10 + 1;
                this.f51235b = j11 + j12;
                return true;
            }
        }
        return false;
    }
}
