package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f23709a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f23710b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f23711c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f23712d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f23713e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f23714f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f23715g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f23716h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f23717i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f23718j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f23719k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f23720l;

    /* renamed from: m  reason: collision with root package name */
    private final b f23721m;

    /* renamed from: n  reason: collision with root package name */
    private final b f23722n;

    /* renamed from: o  reason: collision with root package name */
    private final b f23723o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f23709a = lifecycle;
        this.f23710b = jVar;
        this.f23711c = hVar;
        this.f23712d = coroutineDispatcher;
        this.f23713e = coroutineDispatcher2;
        this.f23714f = coroutineDispatcher3;
        this.f23715g = coroutineDispatcher4;
        this.f23716h = aVar;
        this.f23717i = eVar;
        this.f23718j = config;
        this.f23719k = bool;
        this.f23720l = bool2;
        this.f23721m = bVar;
        this.f23722n = bVar2;
        this.f23723o = bVar3;
    }

    public final Boolean a() {
        return this.f23719k;
    }

    public final Boolean b() {
        return this.f23720l;
    }

    public final Bitmap.Config c() {
        return this.f23718j;
    }

    public final CoroutineDispatcher d() {
        return this.f23714f;
    }

    public final b e() {
        return this.f23722n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f23709a, dVar.f23709a) && Intrinsics.areEqual(this.f23710b, dVar.f23710b) && this.f23711c == dVar.f23711c && Intrinsics.areEqual(this.f23712d, dVar.f23712d) && Intrinsics.areEqual(this.f23713e, dVar.f23713e) && Intrinsics.areEqual(this.f23714f, dVar.f23714f) && Intrinsics.areEqual(this.f23715g, dVar.f23715g) && Intrinsics.areEqual(this.f23716h, dVar.f23716h) && this.f23717i == dVar.f23717i && this.f23718j == dVar.f23718j && Intrinsics.areEqual(this.f23719k, dVar.f23719k) && Intrinsics.areEqual(this.f23720l, dVar.f23720l) && this.f23721m == dVar.f23721m && this.f23722n == dVar.f23722n && this.f23723o == dVar.f23723o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f23713e;
    }

    public final CoroutineDispatcher g() {
        return this.f23712d;
    }

    public final Lifecycle h() {
        return this.f23709a;
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
        Lifecycle lifecycle = this.f23709a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f23710b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f23711c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f23712d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f23713e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f23714f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f23715g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f23716h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f23717i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f23718j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f23719k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f23720l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f23721m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f23722n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f23723o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f23721m;
    }

    public final b j() {
        return this.f23723o;
    }

    public final h5.e k() {
        return this.f23717i;
    }

    public final h5.h l() {
        return this.f23711c;
    }

    public final h5.j m() {
        return this.f23710b;
    }

    public final CoroutineDispatcher n() {
        return this.f23715g;
    }

    public final c.a o() {
        return this.f23716h;
    }
}
