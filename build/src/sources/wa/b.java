package wa;

import android.graphics.Bitmap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private int f53360a;

    /* renamed from: b  reason: collision with root package name */
    private long f53361b;

    /* renamed from: c  reason: collision with root package name */
    private final int f53362c;

    /* renamed from: d  reason: collision with root package name */
    private final int f53363d;

    /* renamed from: e  reason: collision with root package name */
    private final t8.c f53364e;

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
        this.f53362c = i10;
        this.f53363d = i11;
        this.f53364e = new a();
    }

    public synchronized void a(Bitmap bitmap) {
        boolean z10;
        int j10 = db.d.j(bitmap);
        boolean z11 = false;
        if (this.f53360a > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.c(z10, "No bitmaps registered.");
        long j11 = j10;
        if (j11 <= this.f53361b) {
            z11 = true;
        }
        p8.j.d(z11, "Bitmap size bigger than the total registered size: %d, %d", Integer.valueOf(j10), Long.valueOf(this.f53361b));
        this.f53361b -= j11;
        this.f53360a--;
    }

    public synchronized int b() {
        return this.f53360a;
    }

    public synchronized int c() {
        return this.f53362c;
    }

    public synchronized int d() {
        return this.f53363d;
    }

    public t8.c e() {
        return this.f53364e;
    }

    public synchronized long f() {
        return this.f53361b;
    }

    public synchronized boolean g(Bitmap bitmap) {
        int j10 = db.d.j(bitmap);
        int i10 = this.f53360a;
        if (i10 < this.f53362c) {
            long j11 = this.f53361b;
            long j12 = j10;
            if (j11 + j12 <= this.f53363d) {
                this.f53360a = i10 + 1;
                this.f53361b = j11 + j12;
                return true;
            }
        }
        return false;
    }
}
