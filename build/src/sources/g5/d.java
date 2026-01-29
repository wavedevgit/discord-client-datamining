package g5;

import android.graphics.Bitmap;
import androidx.lifecycle.Lifecycle;
import j5.c;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineDispatcher;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final Lifecycle f25718a;

    /* renamed from: b  reason: collision with root package name */
    private final h5.j f25719b;

    /* renamed from: c  reason: collision with root package name */
    private final h5.h f25720c;

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineDispatcher f25721d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineDispatcher f25722e;

    /* renamed from: f  reason: collision with root package name */
    private final CoroutineDispatcher f25723f;

    /* renamed from: g  reason: collision with root package name */
    private final CoroutineDispatcher f25724g;

    /* renamed from: h  reason: collision with root package name */
    private final c.a f25725h;

    /* renamed from: i  reason: collision with root package name */
    private final h5.e f25726i;

    /* renamed from: j  reason: collision with root package name */
    private final Bitmap.Config f25727j;

    /* renamed from: k  reason: collision with root package name */
    private final Boolean f25728k;

    /* renamed from: l  reason: collision with root package name */
    private final Boolean f25729l;

    /* renamed from: m  reason: collision with root package name */
    private final b f25730m;

    /* renamed from: n  reason: collision with root package name */
    private final b f25731n;

    /* renamed from: o  reason: collision with root package name */
    private final b f25732o;

    public d(Lifecycle lifecycle, h5.j jVar, h5.h hVar, CoroutineDispatcher coroutineDispatcher, CoroutineDispatcher coroutineDispatcher2, CoroutineDispatcher coroutineDispatcher3, CoroutineDispatcher coroutineDispatcher4, c.a aVar, h5.e eVar, Bitmap.Config config, Boolean bool, Boolean bool2, b bVar, b bVar2, b bVar3) {
        this.f25718a = lifecycle;
        this.f25719b = jVar;
        this.f25720c = hVar;
        this.f25721d = coroutineDispatcher;
        this.f25722e = coroutineDispatcher2;
        this.f25723f = coroutineDispatcher3;
        this.f25724g = coroutineDispatcher4;
        this.f25725h = aVar;
        this.f25726i = eVar;
        this.f25727j = config;
        this.f25728k = bool;
        this.f25729l = bool2;
        this.f25730m = bVar;
        this.f25731n = bVar2;
        this.f25732o = bVar3;
    }

    public final Boolean a() {
        return this.f25728k;
    }

    public final Boolean b() {
        return this.f25729l;
    }

    public final Bitmap.Config c() {
        return this.f25727j;
    }

    public final CoroutineDispatcher d() {
        return this.f25723f;
    }

    public final b e() {
        return this.f25731n;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof d) {
            d dVar = (d) obj;
            if (Intrinsics.areEqual(this.f25718a, dVar.f25718a) && Intrinsics.areEqual(this.f25719b, dVar.f25719b) && this.f25720c == dVar.f25720c && Intrinsics.areEqual(this.f25721d, dVar.f25721d) && Intrinsics.areEqual(this.f25722e, dVar.f25722e) && Intrinsics.areEqual(this.f25723f, dVar.f25723f) && Intrinsics.areEqual(this.f25724g, dVar.f25724g) && Intrinsics.areEqual(this.f25725h, dVar.f25725h) && this.f25726i == dVar.f25726i && this.f25727j == dVar.f25727j && Intrinsics.areEqual(this.f25728k, dVar.f25728k) && Intrinsics.areEqual(this.f25729l, dVar.f25729l) && this.f25730m == dVar.f25730m && this.f25731n == dVar.f25731n && this.f25732o == dVar.f25732o) {
                return true;
            }
            return false;
        }
        return false;
    }

    public final CoroutineDispatcher f() {
        return this.f25722e;
    }

    public final CoroutineDispatcher g() {
        return this.f25721d;
    }

    public final Lifecycle h() {
        return this.f25718a;
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
        Lifecycle lifecycle = this.f25718a;
        int i24 = 0;
        if (lifecycle != null) {
            i10 = lifecycle.hashCode();
        } else {
            i10 = 0;
        }
        int i25 = i10 * 31;
        h5.j jVar = this.f25719b;
        if (jVar != null) {
            i11 = jVar.hashCode();
        } else {
            i11 = 0;
        }
        int i26 = (i25 + i11) * 31;
        h5.h hVar = this.f25720c;
        if (hVar != null) {
            i12 = hVar.hashCode();
        } else {
            i12 = 0;
        }
        int i27 = (i26 + i12) * 31;
        CoroutineDispatcher coroutineDispatcher = this.f25721d;
        if (coroutineDispatcher != null) {
            i13 = coroutineDispatcher.hashCode();
        } else {
            i13 = 0;
        }
        int i28 = (i27 + i13) * 31;
        CoroutineDispatcher coroutineDispatcher2 = this.f25722e;
        if (coroutineDispatcher2 != null) {
            i14 = coroutineDispatcher2.hashCode();
        } else {
            i14 = 0;
        }
        int i29 = (i28 + i14) * 31;
        CoroutineDispatcher coroutineDispatcher3 = this.f25723f;
        if (coroutineDispatcher3 != null) {
            i15 = coroutineDispatcher3.hashCode();
        } else {
            i15 = 0;
        }
        int i30 = (i29 + i15) * 31;
        CoroutineDispatcher coroutineDispatcher4 = this.f25724g;
        if (coroutineDispatcher4 != null) {
            i16 = coroutineDispatcher4.hashCode();
        } else {
            i16 = 0;
        }
        int i31 = (i30 + i16) * 31;
        c.a aVar = this.f25725h;
        if (aVar != null) {
            i17 = aVar.hashCode();
        } else {
            i17 = 0;
        }
        int i32 = (i31 + i17) * 31;
        h5.e eVar = this.f25726i;
        if (eVar != null) {
            i18 = eVar.hashCode();
        } else {
            i18 = 0;
        }
        int i33 = (i32 + i18) * 31;
        Bitmap.Config config = this.f25727j;
        if (config != null) {
            i19 = config.hashCode();
        } else {
            i19 = 0;
        }
        int i34 = (i33 + i19) * 31;
        Boolean bool = this.f25728k;
        if (bool != null) {
            i20 = bool.hashCode();
        } else {
            i20 = 0;
        }
        int i35 = (i34 + i20) * 31;
        Boolean bool2 = this.f25729l;
        if (bool2 != null) {
            i21 = bool2.hashCode();
        } else {
            i21 = 0;
        }
        int i36 = (i35 + i21) * 31;
        b bVar = this.f25730m;
        if (bVar != null) {
            i22 = bVar.hashCode();
        } else {
            i22 = 0;
        }
        int i37 = (i36 + i22) * 31;
        b bVar2 = this.f25731n;
        if (bVar2 != null) {
            i23 = bVar2.hashCode();
        } else {
            i23 = 0;
        }
        int i38 = (i37 + i23) * 31;
        b bVar3 = this.f25732o;
        if (bVar3 != null) {
            i24 = bVar3.hashCode();
        }
        return i38 + i24;
    }

    public final b i() {
        return this.f25730m;
    }

    public final b j() {
        return this.f25732o;
    }

    public final h5.e k() {
        return this.f25726i;
    }

    public final h5.h l() {
        return this.f25720c;
    }

    public final h5.j m() {
        return this.f25719b;
    }

    public final CoroutineDispatcher n() {
        return this.f25724g;
    }

    public final c.a o() {
        return this.f25725h;
    }
}
