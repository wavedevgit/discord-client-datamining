package me;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import me.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class z {

    /* renamed from: h  reason: collision with root package name */
    private static final Comparator f37000h = new Comparator() { // from class: me.x
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            return z.a((z.b) obj, (z.b) obj2);
        }
    };

    /* renamed from: i  reason: collision with root package name */
    private static final Comparator f37001i = new Comparator() { // from class: me.y
        @Override // java.util.Comparator
        public final int compare(Object obj, Object obj2) {
            int compare;
            compare = Float.compare(((z.b) obj).f37011c, ((z.b) obj2).f37011c);
            return compare;
        }
    };

    /* renamed from: a  reason: collision with root package name */
    private final int f37002a;

    /* renamed from: e  reason: collision with root package name */
    private int f37006e;

    /* renamed from: f  reason: collision with root package name */
    private int f37007f;

    /* renamed from: g  reason: collision with root package name */
    private int f37008g;

    /* renamed from: c  reason: collision with root package name */
    private final b[] f37004c = new b[5];

    /* renamed from: b  reason: collision with root package name */
    private final ArrayList f37003b = new ArrayList();

    /* renamed from: d  reason: collision with root package name */
    private int f37005d = -1;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        public int f37009a;

        /* renamed from: b  reason: collision with root package name */
        public int f37010b;

        /* renamed from: c  reason: collision with root package name */
        public float f37011c;

        private b() {
        }
    }

    public z(int i10) {
        this.f37002a = i10;
    }

    public static /* synthetic */ int a(b bVar, b bVar2) {
        return bVar.f37009a - bVar2.f37009a;
    }

    private void d() {
        if (this.f37005d != 1) {
            Collections.sort(this.f37003b, f37000h);
            this.f37005d = 1;
        }
    }

    private void e() {
        if (this.f37005d != 0) {
            Collections.sort(this.f37003b, f37001i);
            this.f37005d = 0;
        }
    }

    public void c(int i10, float f10) {
        b bVar;
        d();
        int i11 = this.f37008g;
        if (i11 > 0) {
            b[] bVarArr = this.f37004c;
            int i12 = i11 - 1;
            this.f37008g = i12;
            bVar = bVarArr[i12];
        } else {
            bVar = new b();
        }
        int i13 = this.f37006e;
        this.f37006e = i13 + 1;
        bVar.f37009a = i13;
        bVar.f37010b = i10;
        bVar.f37011c = f10;
        this.f37003b.add(bVar);
        this.f37007f += i10;
        while (true) {
            int i14 = this.f37007f;
            int i15 = this.f37002a;
            if (i14 > i15) {
                int i16 = i14 - i15;
                b bVar2 = (b) this.f37003b.get(0);
                int i17 = bVar2.f37010b;
                if (i17 <= i16) {
                    this.f37007f -= i17;
                    this.f37003b.remove(0);
                    int i18 = this.f37008g;
                    if (i18 < 5) {
                        b[] bVarArr2 = this.f37004c;
                        this.f37008g = i18 + 1;
                        bVarArr2[i18] = bVar2;
                    }
                } else {
                    bVar2.f37010b = i17 - i16;
                    this.f37007f -= i16;
                }
            } else {
                return;
            }
        }
    }

    public float f(float f10) {
        ArrayList arrayList;
        e();
        float f11 = f10 * this.f37007f;
        int i10 = 0;
        for (int i11 = 0; i11 < this.f37003b.size(); i11++) {
            b bVar = (b) this.f37003b.get(i11);
            i10 += bVar.f37010b;
            if (i10 >= f11) {
                return bVar.f37011c;
            }
        }
        if (this.f37003b.isEmpty()) {
            return Float.NaN;
        }
        return ((b) this.f37003b.get(arrayList.size() - 1)).f37011c;
    }

    public void g() {
        this.f37003b.clear();
        this.f37005d = -1;
        this.f37006e = 0;
        this.f37007f = 0;
    }
}
