package me;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import me.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f37056h = new Comparator() { // from class: me.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f37057i = new Comparator() { // from class: me.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f37067c, ((z.b) obj2).f37067c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f37058a;

    /* renamed from: e  reason: collision with root package name */
    private int f37062e;

    /* renamed from: f  reason: collision with root package name */
    private int f37063f;

    /* renamed from: g  reason: collision with root package name */
    private int f37064g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f37060c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37059b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f37061d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f37065a;

        /* renamed from: b  reason: collision with root package name */
        public int f37066b;

        /* renamed from: c  reason: collision with root package name */
        public float f37067c;

        private b() {
        }
    }

    public z(int i10) {
        this.f37058a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f37065a - bVar2.f37065a;
    }

    private void d() {
        if (this.f37061d != 1) {
            Collections.sort(this.f37059b, f37056h);
            this.f37061d = 1;
        }
    }

    private void e() {
        if (this.f37061d != 0) {
            Collections.sort(this.f37059b, f37057i);
            this.f37061d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f37064g;
        if (i11 > 0) {
            b[] bVarArr = this.f37060c;
            int i12 = i11 - 1;
            this.f37064g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f37062e;
        this.f37062e = i13 + 1;
        bVar.f37065a = i13;
        bVar.f37066b = i10;
        bVar.f37067c = f10;
        this.f37059b.add(bVar);
        this.f37063f += i10;
        while (true) {
            int i14 = this.f37063f;
            int i15 = this.f37058a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f37059b.get(0);
                int i17 = bVar2.f37066b;
                if (i17 <= i16) {
                    this.f37063f -= i17;
                    this.f37059b.remove(0);
                    int i18 = this.f37064g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f37060c;
                        this.f37064g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f37066b = i17 - i16;
                    this.f37063f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f37063f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f37059b.size(); i11++) {
            b bVar = (b) this.f37059b.get(i11);
            i10 += bVar.f37066b;
            if (i10 >= f11) {
                return bVar.f37067c;
            }
        }
        if (this.f37059b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f37059b.get(arrayList.size() - 1)).f37067c;
    }

    public void g() {
        this.f37059b.clear();
        this.f37061d = -1;
        this.f37062e = 0;
        this.f37063f = 0;
    }
}
