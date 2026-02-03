package le;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import le.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f37389h = new Comparator() { // from class: le.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f37390i = new Comparator() { // from class: le.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f37400c, ((z.b) obj2).f37400c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f37391a;

    /* renamed from: e  reason: collision with root package name */
    private int f37395e;

    /* renamed from: f  reason: collision with root package name */
    private int f37396f;

    /* renamed from: g  reason: collision with root package name */
    private int f37397g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f37393c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37392b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f37394d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f37398a;

        /* renamed from: b  reason: collision with root package name */
        public int f37399b;

        /* renamed from: c  reason: collision with root package name */
        public float f37400c;

        private b() {
        }
    }

    public z(int i10) {
        this.f37391a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f37398a - bVar2.f37398a;
    }

    private void d() {
        if (this.f37394d != 1) {
            Collections.sort(this.f37392b, f37389h);
            this.f37394d = 1;
        }
    }

    private void e() {
        if (this.f37394d != 0) {
            Collections.sort(this.f37392b, f37390i);
            this.f37394d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f37397g;
        if (i11 > 0) {
            b[] bVarArr = this.f37393c;
            int i12 = i11 - 1;
            this.f37397g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f37395e;
        this.f37395e = i13 + 1;
        bVar.f37398a = i13;
        bVar.f37399b = i10;
        bVar.f37400c = f10;
        this.f37392b.add(bVar);
        this.f37396f += i10;
        while (true) {
            int i14 = this.f37396f;
            int i15 = this.f37391a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f37392b.get(0);
                int i17 = bVar2.f37399b;
                if (i17 <= i16) {
                    this.f37396f -= i17;
                    this.f37392b.remove(0);
                    int i18 = this.f37397g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f37393c;
                        this.f37397g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f37399b = i17 - i16;
                    this.f37396f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f37396f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f37392b.size(); i11++) {
            b bVar = (b) this.f37392b.get(i11);
            i10 += bVar.f37399b;
            if (i10 >= f11) {
                return bVar.f37400c;
            }
        }
        if (this.f37392b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f37392b.get(arrayList.size() - 1)).f37400c;
    }

    public void g() {
        this.f37392b.clear();
        this.f37394d = -1;
        this.f37395e = 0;
        this.f37396f = 0;
    }
}
