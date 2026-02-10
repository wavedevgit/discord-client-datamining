package h1;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import h1.b;
import java.util.Arrays;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends h1.b {

    /* renamed from: g  reason: collision with root package name */
    private int f26107g;

    /* renamed from: h  reason: collision with root package name */
    private h[] f26108h;

    /* renamed from: i  reason: collision with root package name */
    private h[] f26109i;

    /* renamed from: j  reason: collision with root package name */
    private int f26110j;

    /* renamed from: k  reason: collision with root package name */
    b f26111k;

    /* renamed from: l  reason: collision with root package name */
    c f26112l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(h hVar, h hVar2) {
            return hVar.f26119i - hVar2.f26119i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b {

        /* renamed from: a  reason: collision with root package name */
        h f26114a;

        /* renamed from: b  reason: collision with root package name */
        g f26115b;

        b(g gVar) {
            this.f26115b = gVar;
        }

        public boolean a(h hVar, float f10) {
            boolean z10 = true;
            if (this.f26114a.f26117d) {
                for (int i10 = 0; i10 < 9; i10++) {
                    float[] fArr = this.f26114a.f26125t;
                    float f11 = fArr[i10] + (hVar.f26125t[i10] * f10);
                    fArr[i10] = f11;
                    if (Math.abs(f11) < 1.0E-4f) {
                        this.f26114a.f26125t[i10] = 0.0f;
                    } else {
                        z10 = false;
                    }
                }
                if (z10) {
                    g.this.G(this.f26114a);
                }
                return false;
            }
            for (int i11 = 0; i11 < 9; i11++) {
                float f12 = hVar.f26125t[i11];
                if (f12 != 0.0f) {
                    float f13 = f12 * f10;
                    if (Math.abs(f13) < 1.0E-4f) {
                        f13 = 0.0f;
                    }
                    this.f26114a.f26125t[i11] = f13;
                } else {
                    this.f26114a.f26125t[i11] = 0.0f;
                }
            }
            return true;
        }

        public void b(h hVar) {
            this.f26114a = hVar;
        }

        public final boolean c() {
            for (int i10 = 8; i10 >= 0; i10--) {
                float f10 = this.f26114a.f26125t[i10];
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
                float f10 = hVar.f26125t[i10];
                float f11 = this.f26114a.f26125t[i10];
                if (f11 == f10) {
                    i10--;
                } else if (f11 < f10) {
                    return true;
                }
            }
            return false;
        }

        public void e() {
            Arrays.fill(this.f26114a.f26125t, 0.0f);
        }

        public String toString() {
            String str = "[ ";
            if (this.f26114a != null) {
                for (int i10 = 0; i10 < 9; i10++) {
                    str = str + this.f26114a.f26125t[i10] + " ";
                }
            }
            return str + "] " + this.f26114a;
        }
    }

    public g(c cVar) {
        super(cVar);
        this.f26107g = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.f26108h = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f26109i = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f26110j = 0;
        this.f26111k = new b(this);
        this.f26112l = cVar;
    }

    private void F(h hVar) {
        int i10;
        int i11 = this.f26110j + 1;
        h[] hVarArr = this.f26108h;
        if (i11 > hVarArr.length) {
            h[] hVarArr2 = (h[]) Arrays.copyOf(hVarArr, hVarArr.length * 2);
            this.f26108h = hVarArr2;
            this.f26109i = (h[]) Arrays.copyOf(hVarArr2, hVarArr2.length * 2);
        }
        h[] hVarArr3 = this.f26108h;
        int i12 = this.f26110j;
        hVarArr3[i12] = hVar;
        int i13 = i12 + 1;
        this.f26110j = i13;
        if (i13 > 1 && hVarArr3[i12].f26119i > hVar.f26119i) {
            int i14 = 0;
            while (true) {
                i10 = this.f26110j;
                if (i14 >= i10) {
                    break;
                }
                this.f26109i[i14] = this.f26108h[i14];
                i14++;
            }
            Arrays.sort(this.f26109i, 0, i10, new a());
            for (int i15 = 0; i15 < this.f26110j; i15++) {
                this.f26108h[i15] = this.f26109i[i15];
            }
        }
        hVar.f26117d = true;
        hVar.a(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G(h hVar) {
        int i10 = 0;
        while (i10 < this.f26110j) {
            if (this.f26108h[i10] == hVar) {
                while (true) {
                    int i11 = this.f26110j;
                    if (i10 < i11 - 1) {
                        h[] hVarArr = this.f26108h;
                        int i12 = i10 + 1;
                        hVarArr[i10] = hVarArr[i12];
                        i10 = i12;
                    } else {
                        this.f26110j = i11 - 1;
                        hVar.f26117d = false;
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
        h hVar = bVar.f26069a;
        if (hVar == null) {
            return;
        }
        b.a aVar = bVar.f26073e;
        int h10 = aVar.h();
        for (int i10 = 0; i10 < h10; i10++) {
            h c10 = aVar.c(i10);
            float j10 = aVar.j(i10);
            this.f26111k.b(c10);
            if (this.f26111k.a(hVar, j10)) {
                F(c10);
            }
            this.f26070b += bVar.f26070b * j10;
        }
        G(hVar);
    }

    @Override // h1.b, h1.d.a
    public void a(h hVar) {
        this.f26111k.b(hVar);
        this.f26111k.e();
        hVar.f26125t[hVar.f26121p] = 1.0f;
        F(hVar);
    }

    @Override // h1.b, h1.d.a
    public h c(d dVar, boolean[] zArr) {
        int i10 = -1;
        for (int i11 = 0; i11 < this.f26110j; i11++) {
            h hVar = this.f26108h[i11];
            if (!zArr[hVar.f26119i]) {
                this.f26111k.b(hVar);
                if (i10 == -1) {
                    if (!this.f26111k.c()) {
                    }
                    i10 = i11;
                } else {
                    if (!this.f26111k.d(this.f26108h[i10])) {
                    }
                    i10 = i11;
                }
            }
        }
        if (i10 == -1) {
            return null;
        }
        return this.f26108h[i10];
    }

    @Override // h1.b, h1.d.a
    public void clear() {
        this.f26110j = 0;
        this.f26070b = 0.0f;
    }

    @Override // h1.b, h1.d.a
    public boolean isEmpty() {
        if (this.f26110j == 0) {
            return true;
        }
        return false;
    }

    @Override // h1.b
    public String toString() {
        String str = " goal -> (" + this.f26070b + ") : ";
        for (int i10 = 0; i10 < this.f26110j; i10++) {
            this.f26111k.b(this.f26108h[i10]);
            str = str + this.f26111k + " ";
        }
        return str;
    }
}
