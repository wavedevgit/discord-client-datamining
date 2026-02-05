package h1;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import h1.b;
import java.util.Arrays;
import java.util.Comparator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends h1.b {

    /* renamed from: g  reason: collision with root package name */
    private int f25579g;

    /* renamed from: h  reason: collision with root package name */
    private h[] f25580h;

    /* renamed from: i  reason: collision with root package name */
    private h[] f25581i;

    /* renamed from: j  reason: collision with root package name */
    private int f25582j;

    /* renamed from: k  reason: collision with root package name */
    b f25583k;

    /* renamed from: l  reason: collision with root package name */
    c f25584l;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class a implements Comparator {
        a() {
        }

        @Override // java.util.Comparator
        /* renamed from: a */
        public int compare(h hVar, h hVar2) {
            return hVar.f25591i - hVar2.f25591i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class b {

        /* renamed from: a  reason: collision with root package name */
        h f25586a;

        /* renamed from: b  reason: collision with root package name */
        g f25587b;

        b(g gVar) {
            this.f25587b = gVar;
        }

        public boolean a(h hVar, float f10) {
            boolean z10 = true;
            if (this.f25586a.f25589d) {
                for (int i10 = 0; i10 < 9; i10++) {
                    float[] fArr = this.f25586a.f25597t;
                    float f11 = fArr[i10] + (hVar.f25597t[i10] * f10);
                    fArr[i10] = f11;
                    if (Math.abs(f11) < 1.0E-4f) {
                        this.f25586a.f25597t[i10] = 0.0f;
                    } else {
                        z10 = false;
                    }
                }
                if (z10) {
                    g.this.G(this.f25586a);
                }
                return false;
            }
            for (int i11 = 0; i11 < 9; i11++) {
                float f12 = hVar.f25597t[i11];
                if (f12 != 0.0f) {
                    float f13 = f12 * f10;
                    if (Math.abs(f13) < 1.0E-4f) {
                        f13 = 0.0f;
                    }
                    this.f25586a.f25597t[i11] = f13;
                } else {
                    this.f25586a.f25597t[i11] = 0.0f;
                }
            }
            return true;
        }

        public void b(h hVar) {
            this.f25586a = hVar;
        }

        public final boolean c() {
            for (int i10 = 8; i10 >= 0; i10--) {
                float f10 = this.f25586a.f25597t[i10];
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
                float f10 = hVar.f25597t[i10];
                float f11 = this.f25586a.f25597t[i10];
                if (f11 == f10) {
                    i10--;
                } else if (f11 < f10) {
                    return true;
                }
            }
            return false;
        }

        public void e() {
            Arrays.fill(this.f25586a.f25597t, 0.0f);
        }

        public String toString() {
            String str = "[ ";
            if (this.f25586a != null) {
                for (int i10 = 0; i10 < 9; i10++) {
                    str = str + this.f25586a.f25597t[i10] + " ";
                }
            }
            return str + "] " + this.f25586a;
        }
    }

    public g(c cVar) {
        super(cVar);
        this.f25579g = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        this.f25580h = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f25581i = new h[IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT];
        this.f25582j = 0;
        this.f25583k = new b(this);
        this.f25584l = cVar;
    }

    private void F(h hVar) {
        int i10;
        int i11 = this.f25582j + 1;
        h[] hVarArr = this.f25580h;
        if (i11 > hVarArr.length) {
            h[] hVarArr2 = (h[]) Arrays.copyOf(hVarArr, hVarArr.length * 2);
            this.f25580h = hVarArr2;
            this.f25581i = (h[]) Arrays.copyOf(hVarArr2, hVarArr2.length * 2);
        }
        h[] hVarArr3 = this.f25580h;
        int i12 = this.f25582j;
        hVarArr3[i12] = hVar;
        int i13 = i12 + 1;
        this.f25582j = i13;
        if (i13 > 1 && hVarArr3[i12].f25591i > hVar.f25591i) {
            int i14 = 0;
            while (true) {
                i10 = this.f25582j;
                if (i14 >= i10) {
                    break;
                }
                this.f25581i[i14] = this.f25580h[i14];
                i14++;
            }
            Arrays.sort(this.f25581i, 0, i10, new a());
            for (int i15 = 0; i15 < this.f25582j; i15++) {
                this.f25580h[i15] = this.f25581i[i15];
            }
        }
        hVar.f25589d = true;
        hVar.a(this);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void G(h hVar) {
        int i10 = 0;
        while (i10 < this.f25582j) {
            if (this.f25580h[i10] == hVar) {
                while (true) {
                    int i11 = this.f25582j;
                    if (i10 < i11 - 1) {
                        h[] hVarArr = this.f25580h;
                        int i12 = i10 + 1;
                        hVarArr[i10] = hVarArr[i12];
                        i10 = i12;
                    } else {
                        this.f25582j = i11 - 1;
                        hVar.f25589d = false;
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
        h hVar = bVar.f25541a;
        if (hVar == null) {
            return;
        }
        b.a aVar = bVar.f25545e;
        int h10 = aVar.h();
        for (int i10 = 0; i10 < h10; i10++) {
            h c10 = aVar.c(i10);
            float j10 = aVar.j(i10);
            this.f25583k.b(c10);
            if (this.f25583k.a(hVar, j10)) {
                F(c10);
            }
            this.f25542b += bVar.f25542b * j10;
        }
        G(hVar);
    }

    @Override // h1.b, h1.d.a
    public void a(h hVar) {
        this.f25583k.b(hVar);
        this.f25583k.e();
        hVar.f25597t[hVar.f25593p] = 1.0f;
        F(hVar);
    }

    @Override // h1.b, h1.d.a
    public h c(d dVar, boolean[] zArr) {
        int i10 = -1;
        for (int i11 = 0; i11 < this.f25582j; i11++) {
            h hVar = this.f25580h[i11];
            if (!zArr[hVar.f25591i]) {
                this.f25583k.b(hVar);
                if (i10 == -1) {
                    if (!this.f25583k.c()) {
                    }
                    i10 = i11;
                } else {
                    if (!this.f25583k.d(this.f25580h[i10])) {
                    }
                    i10 = i11;
                }
            }
        }
        if (i10 == -1) {
            return null;
        }
        return this.f25580h[i10];
    }

    @Override // h1.b, h1.d.a
    public void clear() {
        this.f25582j = 0;
        this.f25542b = 0.0f;
    }

    @Override // h1.b, h1.d.a
    public boolean isEmpty() {
        if (this.f25582j == 0) {
            return true;
        }
        return false;
    }

    @Override // h1.b
    public String toString() {
        String str = " goal -> (" + this.f25542b + ") : ";
        for (int i10 = 0; i10 < this.f25582j; i10++) {
            this.f25583k.b(this.f25580h[i10]);
            str = str + this.f25583k + " ";
        }
        return str;
    }
}
