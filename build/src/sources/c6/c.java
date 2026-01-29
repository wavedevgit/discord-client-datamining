package c6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f8126e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f8127a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f8128b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f8129c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f8130d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(byte[] bArr, byte[] bArr2) {
            return bArr.length - bArr2.length;
        }
    }

    public c(int i10) {
        this.f8130d = i10;
    }

    private synchronized void c() {
        while (this.f8129c > this.f8130d) {
            byte[] bArr = (byte[]) this.f8127a.remove(0);
            this.f8128b.remove(bArr);
            this.f8129c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f8128b.size(); i11++) {
            byte[] bArr = (byte[]) this.f8128b.get(i11);
            if (bArr.length >= i10) {
                this.f8129c -= bArr.length;
                this.f8128b.remove(i11);
                this.f8127a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f8130d) {
                this.f8127a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f8128b, bArr, f8126e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f8128b.add(binarySearch, bArr);
                this.f8129c += bArr.length;
                c();
            }
        }
    }
}
