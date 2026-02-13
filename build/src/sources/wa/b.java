package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f52958a;

    /* renamed from: b  reason: collision with root package name */
    private long f52959b;

    /* renamed from: c  reason: collision with root package name */
    private final int f52960c;

    /* renamed from: d  reason: collision with root package name */
    private final int f52961d;

    /* renamed from: e  reason: collision with root package name */
    private final t8.c f52962e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements t8.c {
        a() {
        }

        @Override // t8.c
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
        p8.j.b(Boolean.valueOf(z10));
        p8.j.b(Boolean.valueOf(i11 > 0));
        this.f52960c = i10;
        this.f52961d = i11;
        this.f52962e = new a();
    }

    public synchronized void a(Bitmap bitmap) {
        boolean z10;
        int j10 = db.d.j(bitmap);
        boolean z11 = false;
        if (this.f52958a > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.c(z10, "No bitmaps registered.");
        long j11 = j10;
        if (j11 <= this.f52959b) {
            z11 = true;
        }
        p8.j.d(z11, "Bitmap size bigger than the total registered size: %d, %d", Integer.valueOf(j10), Long.valueOf(this.f52959b));
        this.f52959b -= j11;
        this.f52958a--;
    }

    public synchronized int b() {
        return this.f52958a;
    }

    public synchronized int c() {
        return this.f52960c;
    }

    public synchronized int d() {
        return this.f52961d;
    }

    public t8.c e() {
        return this.f52962e;
    }

    public synchronized long f() {
        return this.f52959b;
    }

    public synchronized boolean g(Bitmap bitmap) {
        int j10 = db.d.j(bitmap);
        int i10 = this.f52958a;
        if (i10 < this.f52960c) {
            long j11 = this.f52959b;
            long j12 = j10;
            if (j11 + j12 <= this.f52961d) {
                this.f52958a = i10 + 1;
                this.f52959b = j11 + j12;
                return true;
            }
        }
        return false;
    }
}
