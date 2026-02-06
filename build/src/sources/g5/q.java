package g5;

import android.graphics.drawable.Drawable;
import e5.c;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class q extends i {

    /* renamed from: a  reason: collision with root package name */
    private final Drawable f24058a;

    /* renamed from: b  reason: collision with root package name */
    private final h f24059b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f24060c;

    /* renamed from: d  reason: collision with root package name */
    private final c.b f24061d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24062e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f24063f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f24064g;

    public q(Drawable drawable, h hVar, x4.h hVar2, c.b bVar, String str, boolean z10, boolean z11) {
        super(null);
        this.f24058a = drawable;
        this.f24059b = hVar;
        this.f24060c = hVar2;
        this.f24061d = bVar;
        this.f24062e = str;
        this.f24063f = z10;
        this.f24064g = z11;
    }

    @Override // g5.i
    public Drawable a() {
        return this.f24058a;
    }

    @Override // g5.i
    public h b() {
        return this.f24059b;
    }

    public final x4.h c() {
        return this.f24060c;
    }

    public final boolean d() {
        return this.f24064g;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof q) {
            q qVar = (q) obj;
            if (Intrinsics.areEqual(a(), qVar.a()) && Intrinsics.areEqual(b(), qVar.b()) && this.f24060c == qVar.f24060c && Intrinsics.areEqual(this.f24061d, qVar.f24061d) && Intrinsics.areEqual(this.f24062e, qVar.f24062e) && this.f24063f == qVar.f24063f && this.f24064g == qVar.f24064g) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = ((((a().hashCode() * 31) + b().hashCode()) * 31) + this.f24060c.hashCode()) * 31;
        c.b bVar = this.f24061d;
        int i11 = 0;
        if (bVar != null) {
            i10 = bVar.hashCode();
        } else {
            i10 = 0;
        }
        int i12 = (hashCode + i10) * 31;
        String str = this.f24062e;
        if (str != null) {
            i11 = str.hashCode();
        }
        return ((((i12 + i11) * 31) + Boolean.hashCode(this.f24063f)) * 31) + Boolean.hashCode(this.f24064g);
    }
}
