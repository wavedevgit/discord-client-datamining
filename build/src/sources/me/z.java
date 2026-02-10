package me;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import me.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f36431h = new Comparator() { // from class: me.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f36432i = new Comparator() { // from class: me.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f36442c, ((z.b) obj2).f36442c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f36433a;

    /* renamed from: e  reason: collision with root package name */
    private int f36437e;

    /* renamed from: f  reason: collision with root package name */
    private int f36438f;

    /* renamed from: g  reason: collision with root package name */
    private int f36439g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f36435c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36434b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f36436d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f36440a;

        /* renamed from: b  reason: collision with root package name */
        public int f36441b;

        /* renamed from: c  reason: collision with root package name */
        public float f36442c;

        private b() {
        }
    }

    public z(int i10) {
        this.f36433a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f36440a - bVar2.f36440a;
    }

    private void d() {
        if (this.f36436d != 1) {
            Collections.sort(this.f36434b, f36431h);
            this.f36436d = 1;
        }
    }

    private void e() {
        if (this.f36436d != 0) {
            Collections.sort(this.f36434b, f36432i);
            this.f36436d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f36439g;
        if (i11 > 0) {
            b[] bVarArr = this.f36435c;
            int i12 = i11 - 1;
            this.f36439g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f36437e;
        this.f36437e = i13 + 1;
        bVar.f36440a = i13;
        bVar.f36441b = i10;
        bVar.f36442c = f10;
        this.f36434b.add(bVar);
        this.f36438f += i10;
        while (true) {
            int i14 = this.f36438f;
            int i15 = this.f36433a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f36434b.get(0);
                int i17 = bVar2.f36441b;
                if (i17 <= i16) {
                    this.f36438f -= i17;
                    this.f36434b.remove(0);
                    int i18 = this.f36439g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f36435c;
                        this.f36439g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f36441b = i17 - i16;
                    this.f36438f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f36438f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f36434b.size(); i11++) {
            b bVar = (b) this.f36434b.get(i11);
            i10 += bVar.f36441b;
            if (i10 >= f11) {
                return bVar.f36442c;
            }
        }
        if (this.f36434b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f36434b.get(arrayList.size() - 1)).f36442c;
    }

    public void g() {
        this.f36434b.clear();
        this.f36436d = -1;
        this.f36437e = 0;
        this.f36438f = 0;
    }
}
