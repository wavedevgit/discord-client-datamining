package c6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c {

    /* renamed from: e  reason: collision with root package name */
    protected static final Comparator f6969e = new a();

    /* renamed from: a  reason: collision with root package name */
    private final List f6970a = new ArrayList();

    /* renamed from: b  reason: collision with root package name */
    private final List f6971b = new ArrayList(64);

    /* renamed from: c  reason: collision with root package name */
    private int f6972c = 0;

    /* renamed from: d  reason: collision with root package name */
    private final int f6973d;

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
        this.f6973d = i10;
    }

    private synchronized void c() {
        while (this.f6972c > this.f6973d) {
            byte[] bArr = (byte[]) this.f6970a.remove(0);
            this.f6971b.remove(bArr);
            this.f6972c -= bArr.length;
        }
    }

    public synchronized byte[] a(int i10) {
        for (int i11 = 0; i11 < this.f6971b.size(); i11++) {
            byte[] bArr = (byte[]) this.f6971b.get(i11);
            if (bArr.length >= i10) {
                this.f6972c -= bArr.length;
                this.f6971b.remove(i11);
                this.f6970a.remove(bArr);
                return bArr;
            }
        }
        return new byte[i10];
    }

    public synchronized void b(byte[] bArr) {
        if (bArr != null) {
            if (bArr.length <= this.f6973d) {
                this.f6970a.add(bArr);
                int binarySearch = Collections.binarySearch(this.f6971b, bArr, f6969e);
                if (binarySearch < 0) {
                    binarySearch = (-binarySearch) - 1;
                }
                this.f6971b.add(binarySearch, bArr);
                this.f6972c += bArr.length;
                c();
            }
        }
    }
}
