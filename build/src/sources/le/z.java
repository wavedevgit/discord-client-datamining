package le;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import le.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f36858h = new Comparator() { // from class: le.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f36859i = new Comparator() { // from class: le.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f36869c, ((z.b) obj2).f36869c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f36860a;

    /* renamed from: e  reason: collision with root package name */
    private int f36864e;

    /* renamed from: f  reason: collision with root package name */
    private int f36865f;

    /* renamed from: g  reason: collision with root package name */
    private int f36866g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f36862c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36861b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f36863d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f36867a;

        /* renamed from: b  reason: collision with root package name */
        public int f36868b;

        /* renamed from: c  reason: collision with root package name */
        public float f36869c;

        private b() {
        }
    }

    public z(int i10) {
        this.f36860a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f36867a - bVar2.f36867a;
    }

    private void d() {
        if (this.f36863d != 1) {
            Collections.sort(this.f36861b, f36858h);
            this.f36863d = 1;
        }
    }

    private void e() {
        if (this.f36863d != 0) {
            Collections.sort(this.f36861b, f36859i);
            this.f36863d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f36866g;
        if (i11 > 0) {
            b[] bVarArr = this.f36862c;
            int i12 = i11 - 1;
            this.f36866g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f36864e;
        this.f36864e = i13 + 1;
        bVar.f36867a = i13;
        bVar.f36868b = i10;
        bVar.f36869c = f10;
        this.f36861b.add(bVar);
        this.f36865f += i10;
        while (true) {
            int i14 = this.f36865f;
            int i15 = this.f36860a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f36861b.get(0);
                int i17 = bVar2.f36868b;
                if (i17 <= i16) {
                    this.f36865f -= i17;
                    this.f36861b.remove(0);
                    int i18 = this.f36866g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f36862c;
                        this.f36866g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f36868b = i17 - i16;
                    this.f36865f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f36865f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f36861b.size(); i11++) {
            b bVar = (b) this.f36861b.get(i11);
            i10 += bVar.f36868b;
            if (i10 >= f11) {
                return bVar.f36869c;
            }
        }
        if (this.f36861b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f36861b.get(arrayList.size() - 1)).f36869c;
    }

    public void g() {
        this.f36861b.clear();
        this.f36863d = -1;
        this.f36864e = 0;
        this.f36865f = 0;
    }
}
