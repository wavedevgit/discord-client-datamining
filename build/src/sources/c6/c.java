package c6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f7982e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f7983a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f7984b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f7985c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f7986d;

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
        this.f7986d = i10;
    }

    private synchronized void c() {
        while (this.f7985c > this.f7986d) {
            byte[] bArr = (byte[]) this.f7983a.remove(0);
            this.f7984b.remove(bArr);
            this.f7985c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f7984b.size(); i11++) {
            byte[] bArr = (byte[]) this.f7984b.get(i11);
            if (bArr.length >= i10) {
                this.f7985c -= bArr.length;
                this.f7984b.remove(i11);
                this.f7983a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f7986d) {
                this.f7983a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f7984b, bArr, f7982e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f7984b.add(binarySearch, bArr);
                this.f7985c += bArr.length;
                c();
            }
        }
    }
}
