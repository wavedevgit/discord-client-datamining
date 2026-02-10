package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f24787a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f24788b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f24789c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f24790d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f24791e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f24792f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f24793g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f24794h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f24795i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f24796j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f24797k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f24798l;

    /* renamed from: m  reason: collision with root package name */
    private final b f24799m;

    /* renamed from: n  reason: collision with root package name */
    private final b f24800n;

    /* renamed from: o  reason: collision with root package name */
    private final b f24801o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f24787a = lifecycle;
        this.f24788b = jVar;
        this.f24789c = hVar;
        this.f24790d = coroutineDispatcher;
        this.f24791e = coroutineDispatcher2;
        this.f24792f = coroutineDispatcher3;
        this.f24793g = coroutineDispatcher4;
        this.f24794h = aVar;
        this.f24795i = eVar;
        this.f24796j = config;
        this.f24797k = bool;
        this.f24798l = bool2;
        this.f24799m = bVar;
        this.f24800n = bVar2;
        this.f24801o = bVar3;
    }

    public final Boolean a() {
        return this.f24797k;
    }

    public final Boolean b() {
        return this.f24798l;
    }

    public final Bitmap.Config c() {
        return this.f24796j;
    }

    public final CoroutineDispatcher d() {
        return this.f24792f;
    }

    public final b e() {
        return this.f24800n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f24787a, dVar.f24787a) && Intrinsics.areEqual(this.f24788b, dVar.f24788b) && this.f24789c == dVar.f24789c && Intrinsics.areEqual(this.f24790d, dVar.f24790d) && Intrinsics.areEqual(this.f24791e, dVar.f24791e) && Intrinsics.areEqual(this.f24792f, dVar.f24792f) && Intrinsics.areEqual(this.f24793g, dVar.f24793g) && Intrinsics.areEqual(this.f24794h, dVar.f24794h) && this.f24795i == dVar.f24795i && this.f24796j == dVar.f24796j && Intrinsics.areEqual(this.f24797k, dVar.f24797k) && Intrinsics.areEqual(this.f24798l, dVar.f24798l) && this.f24799m == dVar.f24799m && this.f24800n == dVar.f24800n && this.f24801o == dVar.f24801o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f24791e;
    }

    public final CoroutineDispatcher g() {
        return this.f24790d;
    }

    public final Lifecycle h() {
        return this.f24787a;
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
        Lifecycle lifecycle = this.f24787a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f24788b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f24789c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f24790d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f24791e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f24792f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f24793g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f24794h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f24795i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f24796j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f24797k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f24798l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f24799m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f24800n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f24801o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f24799m;
    }

    public final b j() {
        return this.f24801o;
    }

    public final h5.e k() {
        return this.f24795i;
    }

    public final h5.h l() {
        return this.f24789c;
    }

    public final h5.j m() {
        return this.f24788b;
    }

    public final CoroutineDispatcher n() {
        return this.f24793g;
    }

    public final c.a o() {
        return this.f24794h;
    }
}
