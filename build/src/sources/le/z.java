package le;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import le.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f37275h = new Comparator() { // from class: le.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f37276i = new Comparator() { // from class: le.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f37286c, ((z.b) obj2).f37286c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f37277a;

    /* renamed from: e  reason: collision with root package name */
    private int f37281e;

    /* renamed from: f  reason: collision with root package name */
    private int f37282f;

    /* renamed from: g  reason: collision with root package name */
    private int f37283g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f37279c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37278b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f37280d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f37284a;

        /* renamed from: b  reason: collision with root package name */
        public int f37285b;

        /* renamed from: c  reason: collision with root package name */
        public float f37286c;

        private b() {
        }
    }

    public z(int i10) {
        this.f37277a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f37284a - bVar2.f37284a;
    }

    private void d() {
        if (this.f37280d != 1) {
            Collections.sort(this.f37278b, f37275h);
            this.f37280d = 1;
        }
    }

    private void e() {
        if (this.f37280d != 0) {
            Collections.sort(this.f37278b, f37276i);
            this.f37280d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f37283g;
        if (i11 > 0) {
            b[] bVarArr = this.f37279c;
            int i12 = i11 - 1;
            this.f37283g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f37281e;
        this.f37281e = i13 + 1;
        bVar.f37284a = i13;
        bVar.f37285b = i10;
        bVar.f37286c = f10;
        this.f37278b.add(bVar);
        this.f37282f += i10;
        while (true) {
            int i14 = this.f37282f;
            int i15 = this.f37277a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f37278b.get(0);
                int i17 = bVar2.f37285b;
                if (i17 <= i16) {
                    this.f37282f -= i17;
                    this.f37278b.remove(0);
                    int i18 = this.f37283g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f37279c;
                        this.f37283g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f37285b = i17 - i16;
                    this.f37282f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f37282f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f37278b.size(); i11++) {
            b bVar = (b) this.f37278b.get(i11);
            i10 += bVar.f37285b;
            if (i10 >= f11) {
                return bVar.f37286c;
            }
        }
        if (this.f37278b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f37278b.get(arrayList.size() - 1)).f37286c;
    }

    public void g() {
        this.f37278b.clear();
        this.f37280d = -1;
        this.f37281e = 0;
        this.f37282f = 0;
    }
}
