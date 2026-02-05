package le;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import le.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f36785h = new Comparator() { // from class: le.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f36786i = new Comparator() { // from class: le.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f36796c, ((z.b) obj2).f36796c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f36787a;

    /* renamed from: e  reason: collision with root package name */
    private int f36791e;

    /* renamed from: f  reason: collision with root package name */
    private int f36792f;

    /* renamed from: g  reason: collision with root package name */
    private int f36793g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f36789c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36788b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f36790d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f36794a;

        /* renamed from: b  reason: collision with root package name */
        public int f36795b;

        /* renamed from: c  reason: collision with root package name */
        public float f36796c;

        private b() {
        }
    }

    public z(int i10) {
        this.f36787a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f36794a - bVar2.f36794a;
    }

    private void d() {
        if (this.f36790d != 1) {
            Collections.sort(this.f36788b, f36785h);
            this.f36790d = 1;
        }
    }

    private void e() {
        if (this.f36790d != 0) {
            Collections.sort(this.f36788b, f36786i);
            this.f36790d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f36793g;
        if (i11 > 0) {
            b[] bVarArr = this.f36789c;
            int i12 = i11 - 1;
            this.f36793g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f36791e;
        this.f36791e = i13 + 1;
        bVar.f36794a = i13;
        bVar.f36795b = i10;
        bVar.f36796c = f10;
        this.f36788b.add(bVar);
        this.f36792f += i10;
        while (true) {
            int i14 = this.f36792f;
            int i15 = this.f36787a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f36788b.get(0);
                int i17 = bVar2.f36795b;
                if (i17 <= i16) {
                    this.f36792f -= i17;
                    this.f36788b.remove(0);
                    int i18 = this.f36793g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f36789c;
                        this.f36793g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f36795b = i17 - i16;
                    this.f36792f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f36792f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f36788b.size(); i11++) {
            b bVar = (b) this.f36788b.get(i11);
            i10 += bVar.f36795b;
            if (i10 >= f11) {
                return bVar.f36796c;
            }
        }
        if (this.f36788b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f36788b.get(arrayList.size() - 1)).f36796c;
    }

    public void g() {
        this.f36788b.clear();
        this.f36790d = -1;
        this.f36791e = 0;
        this.f36792f = 0;
    }
}
