package c6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f7387e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f7388a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f7389b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f7390c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f7391d;

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
        this.f7391d = i10;
    }

    private synchronized void c() {
        while (this.f7390c > this.f7391d) {
            byte[] bArr = (byte[]) this.f7388a.remove(0);
            this.f7389b.remove(bArr);
            this.f7390c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f7389b.size(); i11++) {
            byte[] bArr = (byte[]) this.f7389b.get(i11);
            if (bArr.length >= i10) {
                this.f7390c -= bArr.length;
                this.f7389b.remove(i11);
                this.f7388a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f7391d) {
                this.f7388a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f7389b, bArr, f7387e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f7389b.add(binarySearch, bArr);
                this.f7390c += bArr.length;
                c();
            }
        }
    }
}
