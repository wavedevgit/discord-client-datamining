package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f23487a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f23488b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f23489c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f23490d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f23491e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f23492f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f23493g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f23494h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f23495i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f23496j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f23497k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f23498l;

    /* renamed from: m  reason: collision with root package name */
    private final b f23499m;

    /* renamed from: n  reason: collision with root package name */
    private final b f23500n;

    /* renamed from: o  reason: collision with root package name */
    private final b f23501o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f23487a = lifecycle;
        this.f23488b = jVar;
        this.f23489c = hVar;
        this.f23490d = coroutineDispatcher;
        this.f23491e = coroutineDispatcher2;
        this.f23492f = coroutineDispatcher3;
        this.f23493g = coroutineDispatcher4;
        this.f23494h = aVar;
        this.f23495i = eVar;
        this.f23496j = config;
        this.f23497k = bool;
        this.f23498l = bool2;
        this.f23499m = bVar;
        this.f23500n = bVar2;
        this.f23501o = bVar3;
    }

    public final Boolean a() {
        return this.f23497k;
    }

    public final Boolean b() {
        return this.f23498l;
    }

    public final Bitmap.Config c() {
        return this.f23496j;
    }

    public final CoroutineDispatcher d() {
        return this.f23492f;
    }

    public final b e() {
        return this.f23500n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f23487a, dVar.f23487a) && Intrinsics.areEqual(this.f23488b, dVar.f23488b) && this.f23489c == dVar.f23489c && Intrinsics.areEqual(this.f23490d, dVar.f23490d) && Intrinsics.areEqual(this.f23491e, dVar.f23491e) && Intrinsics.areEqual(this.f23492f, dVar.f23492f) && Intrinsics.areEqual(this.f23493g, dVar.f23493g) && Intrinsics.areEqual(this.f23494h, dVar.f23494h) && this.f23495i == dVar.f23495i && this.f23496j == dVar.f23496j && Intrinsics.areEqual(this.f23497k, dVar.f23497k) && Intrinsics.areEqual(this.f23498l, dVar.f23498l) && this.f23499m == dVar.f23499m && this.f23500n == dVar.f23500n && this.f23501o == dVar.f23501o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f23491e;
    }

    public final CoroutineDispatcher g() {
        return this.f23490d;
    }

    public final Lifecycle h() {
        return this.f23487a;
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
        Lifecycle lifecycle = this.f23487a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f23488b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f23489c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f23490d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f23491e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f23492f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f23493g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f23494h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f23495i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f23496j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f23497k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f23498l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f23499m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f23500n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f23501o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f23499m;
    }

    public final b j() {
        return this.f23501o;
    }

    public final h5.e k() {
        return this.f23495i;
    }

    public final h5.h l() {
        return this.f23489c;
    }

    public final h5.j m() {
        return this.f23488b;
    }

    public final CoroutineDispatcher n() {
        return this.f23493g;
    }

    public final c.a o() {
        return this.f23494h;
    }
}
