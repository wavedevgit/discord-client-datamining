package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f25909a;

    /* renamed from: b  reason: collision with root package name */
    private final h f25910b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f25911c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f25912d;

    /* renamed from: e  reason: collision with root package name */
    private final String f25913e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25914f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25915g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f25909a = drawable;
        this.f25910b = hVar;
        this.f25911c = hVar2;
        this.f25912d = bVar;
        this.f25913e = str;
        this.f25914f = z10;
        this.f25915g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f25909a;
    }

    @Override // g5.i
    public h b() {
        return this.f25910b;
    }

    public final x4.h c() {
        return this.f25911c;
    }

    public final boolean d() {
        return this.f25915g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f25911c == qVar.f25911c && Intrinsics.areEqual(this.f25912d, qVar.f25912d) && Intrinsics.areEqual(this.f25913e, qVar.f25913e) && this.f25914f == qVar.f25914f && this.f25915g == qVar.f25915g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f25911c.hashCode()) * 31;
        c.b bVar = this.f25912d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f25913e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f25914f)) * 31) + Boolean.hashCode(this.f25915g);
    }
}
