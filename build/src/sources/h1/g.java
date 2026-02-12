package h1;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import h1.b;
import java.util.Arrays;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends h1.b {

    /* renamed from: g  reason: collision with root package name */
    private int f26108g;

    /* renamed from: h  reason: collision with root package name */
    private h[] f26109h;

    /* renamed from: i  reason: collision with root package name */
    private h[] f26110i;

    /* renamed from: j  reason: collision with root package name */
    private int f26111j;

    /* renamed from: k  reason: collision with root package name */
    b f26112k;

    /* renamed from: l  reason: collision with root package name */
    c f26113l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(h hVar, h hVar2) {
            return hVar.f26120i - hVar2.f26120i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b {

        /* renamed from: a  reason: collision with root package name */
        h f26115a;

        /* renamed from: b  reason: collision with root package name */
        g f26116b;

        b(g gVar) {
            this.f26116b = gVar;
        }

        public boolean a(h hVar, float f10) {
            boolean z10 = true;
            if (this.f26115a.f26118d) {
                for (int i10 = 0; i10 < 9; i10++) {
                    float[] fArr = this.f26115a.f26126t;
                    float f11 = fArr[i10] + (hVar.f26126t[i10] * f10);
                    fArr[i10] = f11;
                    if (Math.abs(f11) < 1.0E-4f) {
                        this.f26115a.f26126t[i10] = 0.0f;
                    } else {
                        z10 = false;
                    }
                }
                if (z10) {
                    g.this.G(this.f26115a);
                }
                return false;
            }
            for (int i11 = 0; i11 < 9; i11++) {
                float f12 = hVar.f26126t[i11];
                if (f12 != 0.0f) {
                    float f13 = f12 * f10;
                    if (Math.abs(f13) < 1.0E-4f) {
                        f13 = 0.0f;
                    }
                    this.f26115a.f26126t[i11] = f13;
                } else {
                    this.f26115a.f26126t[i11] = 0.0f;
                }
            }
            return true;
        }

        public void b(h hVar) {
            this.f26115a = hVar;
        }

        public final boolean c() {
            for (int i10 = 8; i10 >= 0; i10--) {
                float f10 = this.f26115a.f26126t[i10];
                if (f10 > 0.0f) {
                    return false;
                }
                if (f10 < 0.0f) {
                    return true;
                }
            }
            return false;
        }

        public final boolean d(h hVar) {
            int i10 = 8;
            while (true) {
                if (i10 < 0) {
                    break;
                }
                float f10 = hVar.f26126t[i10];
                float f11 = this.f26115a.f26126t[i10];
                if (f11 == f10) {
                    i10--;
                } else if (f11 < f10) {
                    return true;
                }
            }
            return false;
        }

        public void e() {
            Arrays.fill(this.f26115a.f26126t, 0.0f);
        }

        public String toString() {
            String str = "[ ";
            if (this.f26115a != null) {
                for (int i10 = 0; i10 < 9; i10++) {
                    str = str + this.f26115a.f26126t[i10] + " ";
                }
            }
            return str + "] " + this.f26115a;
        }
    }

    public g(c cVar) {
        super(cVar);
        this.f26108g = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.f26109h = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f26110i = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f26111j = 0;
        this.f26112k = new b(this);
        this.f26113l = cVar;
    }

    private void F(h hVar) {
        int i10;
        int i11 = this.f26111j + 1;
        h[] hVarArr = this.f26109h;
        if (i11 > hVarArr.length) {
            h[] hVarArr2 = (h[]) Arrays.copyOf(hVarArr, hVarArr.length * 2);
            this.f26109h = hVarArr2;
            this.f26110i = (h[]) Arrays.copyOf(hVarArr2, hVarArr2.length * 2);
        }
        h[] hVarArr3 = this.f26109h;
        int i12 = this.f26111j;
        hVarArr3[i12] = hVar;
        int i13 = i12 + 1;
        this.f26111j = i13;
        if (i13 > 1 && hVarArr3[i12].f26120i > hVar.f26120i) {
            int i14 = 0;
            while (true) {
                i10 = this.f26111j;
                if (i14 >= i10) {
                    break;
                }
                this.f26110i[i14] = this.f26109h[i14];
                i14++;
            }
            Arrays.sort(this.f26110i, 0, i10, new a());
            for (int i15 = 0; i15 < this.f26111j; i15++) {
                this.f26109h[i15] = this.f26110i[i15];
            }
        }
        hVar.f26118d = true;
        hVar.a(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G(h hVar) {
        int i10 = 0;
        while (i10 < this.f26111j) {
            if (this.f26109h[i10] == hVar) {
                while (true) {
                    int i11 = this.f26111j;
                    if (i10 < i11 - 1) {
                        h[] hVarArr = this.f26109h;
                        int i12 = i10 + 1;
                        hVarArr[i10] = hVarArr[i12];
                        i10 = i12;
                    } else {
                        this.f26111j = i11 - 1;
                        hVar.f26118d = false;
                        return;
                    }
                }
            } else {
                i10++;
            }
        }
    }

    @Override // h1.b
    public void B(d dVar, h1.b bVar, boolean z10) {
        h hVar = bVar.f26070a;
        if (hVar == null) {
            return;
        }
        b.a aVar = bVar.f26074e;
        int h10 = aVar.h();
        for (int i10 = 0; i10 < h10; i10++) {
            h c10 = aVar.c(i10);
            float j10 = aVar.j(i10);
            this.f26112k.b(c10);
            if (this.f26112k.a(hVar, j10)) {
                F(c10);
            }
            this.f26071b += bVar.f26071b * j10;
        }
        G(hVar);
    }

    @Override // h1.b, h1.d.a
    public void a(h hVar) {
        this.f26112k.b(hVar);
        this.f26112k.e();
        hVar.f26126t[hVar.f26122p] = 1.0f;
        F(hVar);
    }

    @Override // h1.b, h1.d.a
    public h c(d dVar, boolean[] zArr) {
        int i10 = -1;
        for (int i11 = 0; i11 < this.f26111j; i11++) {
            h hVar = this.f26109h[i11];
            if (!zArr[hVar.f26120i]) {
                this.f26112k.b(hVar);
                if (i10 == -1) {
                    if (!this.f26112k.c()) {
                    }
                    i10 = i11;
                } else {
                    if (!this.f26112k.d(this.f26109h[i10])) {
                    }
                    i10 = i11;
                }
            }
        }
        if (i10 == -1) {
            return null;
        }
        return this.f26109h[i10];
    }

    @Override // h1.b, h1.d.a
    public void clear() {
        this.f26111j = 0;
        this.f26071b = 0.0f;
    }

    @Override // h1.b, h1.d.a
    public boolean isEmpty() {
        if (this.f26111j == 0) {
            return true;
        }
        return false;
    }

    @Override // h1.b
    public String toString() {
        String str = " goal -> (" + this.f26071b + ") : ";
        for (int i10 = 0; i10 < this.f26111j; i10++) {
            this.f26112k.b(this.f26109h[i10]);
            str = str + this.f26112k + " ";
        }
        return str;
    }
}
