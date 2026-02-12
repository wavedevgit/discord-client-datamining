package d6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f21459e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f21460a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f21461b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f21462c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f21463d;

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
        this.f21463d = i10;
    }

    private synchronized void c() {
        while (this.f21462c > this.f21463d) {
            byte[] bArr = (byte[]) this.f21460a.remove(0);
            this.f21461b.remove(bArr);
            this.f21462c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f21461b.size(); i11++) {
            byte[] bArr = (byte[]) this.f21461b.get(i11);
            if (bArr.length >= i10) {
                this.f21462c -= bArr.length;
                this.f21461b.remove(i11);
                this.f21460a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f21463d) {
                this.f21460a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f21461b, bArr, f21459e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f21461b.add(binarySearch, bArr);
                this.f21462c += bArr.length;
                c();
            }
        }
    }
}
