package me;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import me.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f36432h = new Comparator() { // from class: me.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f36433i = new Comparator() { // from class: me.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f36443c, ((z.b) obj2).f36443c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f36434a;

    /* renamed from: e  reason: collision with root package name */
    private int f36438e;

    /* renamed from: f  reason: collision with root package name */
    private int f36439f;

    /* renamed from: g  reason: collision with root package name */
    private int f36440g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f36436c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f36435b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f36437d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f36441a;

        /* renamed from: b  reason: collision with root package name */
        public int f36442b;

        /* renamed from: c  reason: collision with root package name */
        public float f36443c;

        private b() {
        }
    }

    public z(int i10) {
        this.f36434a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f36441a - bVar2.f36441a;
    }

    private void d() {
        if (this.f36437d != 1) {
            Collections.sort(this.f36435b, f36432h);
            this.f36437d = 1;
        }
    }

    private void e() {
        if (this.f36437d != 0) {
            Collections.sort(this.f36435b, f36433i);
            this.f36437d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f36440g;
        if (i11 > 0) {
            b[] bVarArr = this.f36436c;
            int i12 = i11 - 1;
            this.f36440g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f36438e;
        this.f36438e = i13 + 1;
        bVar.f36441a = i13;
        bVar.f36442b = i10;
        bVar.f36443c = f10;
        this.f36435b.add(bVar);
        this.f36439f += i10;
        while (true) {
            int i14 = this.f36439f;
            int i15 = this.f36434a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f36435b.get(0);
                int i17 = bVar2.f36442b;
                if (i17 <= i16) {
                    this.f36439f -= i17;
                    this.f36435b.remove(0);
                    int i18 = this.f36440g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f36436c;
                        this.f36440g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f36442b = i17 - i16;
                    this.f36439f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f36439f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f36435b.size(); i11++) {
            b bVar = (b) this.f36435b.get(i11);
            i10 += bVar.f36442b;
            if (i10 >= f11) {
                return bVar.f36443c;
            }
        }
        if (this.f36435b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f36435b.get(arrayList.size() - 1)).f36443c;
    }

    public void g() {
        this.f36435b.clear();
        this.f36437d = -1;
        this.f36438e = 0;
        this.f36439f = 0;
    }
}
