package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f24788a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f24789b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f24790c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f24791d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f24792e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f24793f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f24794g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f24795h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f24796i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f24797j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f24798k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f24799l;

    /* renamed from: m  reason: collision with root package name */
    private final b f24800m;

    /* renamed from: n  reason: collision with root package name */
    private final b f24801n;

    /* renamed from: o  reason: collision with root package name */
    private final b f24802o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f24788a = lifecycle;
        this.f24789b = jVar;
        this.f24790c = hVar;
        this.f24791d = coroutineDispatcher;
        this.f24792e = coroutineDispatcher2;
        this.f24793f = coroutineDispatcher3;
        this.f24794g = coroutineDispatcher4;
        this.f24795h = aVar;
        this.f24796i = eVar;
        this.f24797j = config;
        this.f24798k = bool;
        this.f24799l = bool2;
        this.f24800m = bVar;
        this.f24801n = bVar2;
        this.f24802o = bVar3;
    }

    public final Boolean a() {
        return this.f24798k;
    }

    public final Boolean b() {
        return this.f24799l;
    }

    public final Bitmap.Config c() {
        return this.f24797j;
    }

    public final CoroutineDispatcher d() {
        return this.f24793f;
    }

    public final b e() {
        return this.f24801n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f24788a, dVar.f24788a) && Intrinsics.areEqual(this.f24789b, dVar.f24789b) && this.f24790c == dVar.f24790c && Intrinsics.areEqual(this.f24791d, dVar.f24791d) && Intrinsics.areEqual(this.f24792e, dVar.f24792e) && Intrinsics.areEqual(this.f24793f, dVar.f24793f) && Intrinsics.areEqual(this.f24794g, dVar.f24794g) && Intrinsics.areEqual(this.f24795h, dVar.f24795h) && this.f24796i == dVar.f24796i && this.f24797j == dVar.f24797j && Intrinsics.areEqual(this.f24798k, dVar.f24798k) && Intrinsics.areEqual(this.f24799l, dVar.f24799l) && this.f24800m == dVar.f24800m && this.f24801n == dVar.f24801n && this.f24802o == dVar.f24802o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f24792e;
    }

    public final CoroutineDispatcher g() {
        return this.f24791d;
    }

    public final Lifecycle h() {
        return this.f24788a;
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
        Lifecycle lifecycle = this.f24788a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f24789b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f24790c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f24791d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f24792e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f24793f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f24794g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f24795h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f24796i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f24797j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f24798k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f24799l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f24800m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f24801n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f24802o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f24800m;
    }

    public final b j() {
        return this.f24802o;
    }

    public final h5.e k() {
        return this.f24796i;
    }

    public final h5.h l() {
        return this.f24790c;
    }

    public final h5.j m() {
        return this.f24789b;
    }

    public final CoroutineDispatcher n() {
        return this.f24794g;
    }

    public final c.a o() {
        return this.f24795h;
    }
}
