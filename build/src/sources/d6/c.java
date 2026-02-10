package d6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f20511e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f20512a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f20513b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f20514c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f20515d;

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
        this.f20515d = i10;
    }

    private synchronized void c() {
        while (this.f20514c > this.f20515d) {
            byte[] bArr = (byte[]) this.f20512a.remove(0);
            this.f20513b.remove(bArr);
            this.f20514c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f20513b.size(); i11++) {
            byte[] bArr = (byte[]) this.f20513b.get(i11);
            if (bArr.length >= i10) {
                this.f20514c -= bArr.length;
                this.f20513b.remove(i11);
                this.f20512a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f20515d) {
                this.f20512a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f20513b, bArr, f20511e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f20513b.add(binarySearch, bArr);
                this.f20514c += bArr.length;
                c();
            }
        }
    }
}
