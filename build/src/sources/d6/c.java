package d6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f21458e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f21459a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f21460b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f21461c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f21462d;

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
        this.f21462d = i10;
    }

    private synchronized void c() {
        while (this.f21461c > this.f21462d) {
            byte[] bArr = (byte[]) this.f21459a.remove(0);
            this.f21460b.remove(bArr);
            this.f21461c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f21460b.size(); i11++) {
            byte[] bArr = (byte[]) this.f21460b.get(i11);
            if (bArr.length >= i10) {
                this.f21461c -= bArr.length;
                this.f21460b.remove(i11);
                this.f21459a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f21462d) {
                this.f21459a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f21460b, bArr, f21458e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f21460b.add(binarySearch, bArr);
                this.f21461c += bArr.length;
                c();
            }
        }
    }
}
