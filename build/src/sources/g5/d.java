package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f25010a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f25011b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f25012c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f25013d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f25014e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f25015f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f25016g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f25017h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f25018i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f25019j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f25020k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f25021l;

    /* renamed from: m  reason: collision with root package name */
    private final b f25022m;

    /* renamed from: n  reason: collision with root package name */
    private final b f25023n;

    /* renamed from: o  reason: collision with root package name */
    private final b f25024o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f25010a = lifecycle;
        this.f25011b = jVar;
        this.f25012c = hVar;
        this.f25013d = coroutineDispatcher;
        this.f25014e = coroutineDispatcher2;
        this.f25015f = coroutineDispatcher3;
        this.f25016g = coroutineDispatcher4;
        this.f25017h = aVar;
        this.f25018i = eVar;
        this.f25019j = config;
        this.f25020k = bool;
        this.f25021l = bool2;
        this.f25022m = bVar;
        this.f25023n = bVar2;
        this.f25024o = bVar3;
    }

    public final Boolean a() {
        return this.f25020k;
    }

    public final Boolean b() {
        return this.f25021l;
    }

    public final Bitmap.Config c() {
        return this.f25019j;
    }

    public final CoroutineDispatcher d() {
        return this.f25015f;
    }

    public final b e() {
        return this.f25023n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f25010a, dVar.f25010a) && Intrinsics.areEqual(this.f25011b, dVar.f25011b) && this.f25012c == dVar.f25012c && Intrinsics.areEqual(this.f25013d, dVar.f25013d) && Intrinsics.areEqual(this.f25014e, dVar.f25014e) && Intrinsics.areEqual(this.f25015f, dVar.f25015f) && Intrinsics.areEqual(this.f25016g, dVar.f25016g) && Intrinsics.areEqual(this.f25017h, dVar.f25017h) && this.f25018i == dVar.f25018i && this.f25019j == dVar.f25019j && Intrinsics.areEqual(this.f25020k, dVar.f25020k) && Intrinsics.areEqual(this.f25021l, dVar.f25021l) && this.f25022m == dVar.f25022m && this.f25023n == dVar.f25023n && this.f25024o == dVar.f25024o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f25014e;
    }

    public final CoroutineDispatcher g() {
        return this.f25013d;
    }

    public final Lifecycle h() {
        return this.f25010a;
    }

    public int hashCode() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        int i15;
        int i16;
        int i17;
        int i18;
        int i19;
        int i20;
        int i21;
        int i22;
        int i23;
        Lifecycle lifecycle = this.f25010a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f25011b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f25012c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f25013d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f25014e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f25015f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f25016g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f25017h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f25018i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f25019j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f25020k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f25021l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f25022m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f25023n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f25024o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f25022m;
    }

    public final b j() {
        return this.f25024o;
    }

    public final h5.e k() {
        return this.f25018i;
    }

    public final h5.h l() {
        return this.f25012c;
    }

    public final h5.j m() {
        return this.f25011b;
    }

    public final CoroutineDispatcher n() {
        return this.f25016g;
    }

    public final c.a o() {
        return this.f25017h;
    }
}
